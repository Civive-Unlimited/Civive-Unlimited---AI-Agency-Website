import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export const VISIBILITY_REPORT_RECEIVED_MESSAGE =
  "Your request was received. We'll review it and follow up.";

const EVENT_LOG_PREFIX = "[civive-lead-capture]";
const DEFAULT_BACKUP_FILE = "visibility-report-leads.ndjson";
const MAX_ERROR_MESSAGE_LENGTH = 500;
const WEBHOOK_TIMEOUT_MS = 5000;
const SENSITIVE_TEXT_PATTERNS = [
  /Bearer\s+[A-Za-z0-9._~+/=-]+/gi,
  /(token|key|secret|password|authorization)\s*[:=]\s*["']?[^"',\s}]+/gi,
];

function cleanString(value, maxLength = 500) {
  if (value === null || value === undefined) return "";
  return String(value).trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function cleanMultiline(value, maxLength = 1200) {
  if (value === null || value === undefined) return "";
  return String(value).trim().replace(/\r\n/g, "\n").slice(0, maxLength);
}

function redactSensitiveText(value, maxLength = MAX_ERROR_MESSAGE_LENGTH) {
  let text = cleanString(value, maxLength);
  for (const pattern of SENSITIVE_TEXT_PATTERNS) {
    text = text.replace(pattern, match =>
      match.toLowerCase().startsWith("bearer ")
        ? "Bearer [redacted]"
        : match.replace(/[:=]\s*["']?.*$/, "=[redacted]")
    );
  }
  return text.slice(0, maxLength);
}

function sourcePathOnly(sourcePage) {
  const rawValue = cleanString(sourcePage, 500);
  if (!rawValue) return "";

  try {
    const parsed = new URL(rawValue, "https://www.civiveunlimited.com");
    return `${parsed.pathname}${parsed.search ? "?..." : ""}${parsed.hash ? "#..." : ""}`;
  } catch {
    return rawValue.slice(0, 120);
  }
}

function hashValue(value) {
  const cleanValue = cleanString(value, 300).toLowerCase();
  if (!cleanValue) return "";
  return crypto
    .createHash("sha256")
    .update(cleanValue)
    .digest("hex")
    .slice(0, 16);
}

function getBackupDirectory(env = process.env) {
  if (env.CIVIVE_LEAD_BACKUP_DIR) return env.CIVIVE_LEAD_BACKUP_DIR;
  if (env.VERCEL) return path.join(os.tmpdir(), "civive-lead-captures");
  return path.join(process.cwd(), "output", "lead-captures");
}

export function getLocalLeadBackupPath(env = process.env) {
  return path.join(getBackupDirectory(env), DEFAULT_BACKUP_FILE);
}

export function createLeadSubmissionId() {
  return `vis_${Date.now().toString(36)}_${crypto.randomUUID()}`;
}

export function getSafeExternalErrorMessage(error) {
  const rawMessage =
    cleanString(error?.details?.message, MAX_ERROR_MESSAGE_LENGTH) ||
    cleanString(error?.details?.error, MAX_ERROR_MESSAGE_LENGTH) ||
    cleanString(error?.message, MAX_ERROR_MESSAGE_LENGTH);
  const message = rawMessage || "External report routing failed.";

  if (/token.*access|access.*token|location.*access/i.test(message)) {
    return "CiviveOS token does not have access to the configured location or endpoint.";
  }

  if (
    /not configured|missing/i.test(message) &&
    /token|key|credential/i.test(message)
  ) {
    return "CiviveOS access token is not configured on the server.";
  }

  if (/unauthorized|forbidden|permission|scope|401|403/i.test(message)) {
    return "CiviveOS access token or permission check failed.";
  }

  return redactSensitiveText(message);
}

export function buildLeadCaptureRecord(
  lead,
  {
    submissionId = createLeadSubmissionId(),
    timestamp = new Date().toISOString(),
    submissionStatus = "received",
    externalApiStatus = "not_attempted",
    reportStatus = "not_generated",
    errorMessage = "",
    request,
  } = {}
) {
  return {
    type: "visibility_report_lead_capture",
    submissionId,
    timestamp,
    name: cleanString(lead.fullName, 120),
    businessName: cleanString(lead.companyName, 160),
    email: cleanString(lead.email, 180),
    phone: cleanString(lead.phone, 40),
    website: cleanString(lead.website, 240),
    message: cleanMultiline(lead.message, 1200),
    requestType: cleanString(lead.offer || "ai-search-visibility-report", 120),
    serviceArea: cleanString(lead.serviceArea, 180),
    serviceInterest: cleanString(lead.serviceInterest, 180),
    smsConsent: Boolean(lead.smsConsent),
    sourcePage: cleanString(lead.sourcePage, 300),
    submissionStatus: cleanString(submissionStatus, 80),
    externalApiStatus: cleanString(externalApiStatus, 80),
    reportStatus: cleanString(reportStatus, 80),
    errorMessage: redactSensitiveText(errorMessage),
    requestMeta: {
      userAgent: cleanString(request?.headers?.["user-agent"], 180),
      host: cleanString(request?.headers?.host, 120),
    },
  };
}

async function appendLocalLeadBackup(record, env = process.env) {
  const filePath = getLocalLeadBackupPath(env);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, {
    encoding: "utf8",
    mode: 0o600,
  });
  return {
    sink: "local_file",
    ok: true,
    path: filePath,
  };
}

function parseWebhookUrl(rawUrl, env = process.env) {
  const value = cleanString(rawUrl, 1000);
  if (!value) return null;

  const parsed = new URL(value);
  const isLocalhost =
    parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  if (
    parsed.protocol !== "https:" &&
    !(env.NODE_ENV === "test" && isLocalhost)
  ) {
    throw new Error("Lead webhook URLs must use https.");
  }

  return parsed.toString();
}

function backupWebhookUrl(env = process.env) {
  return (
    env.CIVIVE_LEAD_BACKUP_WEBHOOK_URL || env.LEAD_BACKUP_WEBHOOK_URL || ""
  );
}

function notificationWebhookUrl(env = process.env) {
  return (
    env.CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL ||
    env.LEAD_NOTIFICATION_WEBHOOK_URL ||
    ""
  );
}

async function postWebhook(rawUrl, payload, env = process.env) {
  const url = parseWebhookUrl(rawUrl, env);
  if (!url) return { attempted: false, ok: false };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "civive-website-lead-capture",
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Webhook returned status ${response.status}.`);
  }

  return { attempted: true, ok: true, status: response.status };
}

function logCaptureEvent(record, sinks) {
  if (process.env.NODE_ENV === "test") return;

  console.info(
    EVENT_LOG_PREFIX,
    JSON.stringify({
      submissionId: record.submissionId,
      requestType: record.requestType,
      sourcePage: sourcePathOnly(record.sourcePage),
      submissionStatus: record.submissionStatus,
      externalApiStatus: record.externalApiStatus,
      reportStatus: record.reportStatus,
      emailHash: hashValue(record.email),
      hasPhone: Boolean(record.phone),
      hasWebsite: Boolean(record.website),
      sinks: sinks.map(sink => ({
        sink: sink.sink,
        ok: sink.ok,
        attempted: sink.attempted !== false,
        status: sink.status || null,
      })),
    })
  );
}

export async function saveLeadCaptureRecord(record, env = process.env) {
  const sinks = [];

  try {
    sinks.push(await appendLocalLeadBackup(record, env));
  } catch (error) {
    sinks.push({
      sink: "local_file",
      ok: false,
      error: redactSensitiveText(error?.message || "Local backup failed."),
    });
  }

  const webhook = backupWebhookUrl(env);
  if (webhook) {
    try {
      const result = await postWebhook(
        webhook,
        {
          event: "civive.visibility_report.lead_backup",
          record,
        },
        env
      );
      sinks.push({ sink: "backup_webhook", ...result });
    } catch (error) {
      sinks.push({
        sink: "backup_webhook",
        ok: false,
        attempted: true,
        error: redactSensitiveText(error?.message || "Backup webhook failed."),
      });
    }
  }

  logCaptureEvent(record, sinks);

  if (!sinks.some(sink => sink.ok)) {
    const error = new Error("No lead backup sink succeeded.");
    error.status = 503;
    error.sinks = sinks;
    throw error;
  }

  return sinks;
}

export async function notifyLeadOwner(record, env = process.env) {
  const webhook = notificationWebhookUrl(env);
  if (!webhook) {
    if (process.env.NODE_ENV !== "test") {
      console.warn(
        EVENT_LOG_PREFIX,
        JSON.stringify({
          submissionId: record.submissionId,
          notification: "skipped",
          reason: "CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL is not configured",
        })
      );
    }
    return { attempted: false, ok: false };
  }

  try {
    const result = await postWebhook(
      webhook,
      {
        event: "civive.visibility_report.submitted",
        submittedAt: record.timestamp,
        submissionId: record.submissionId,
        lead: {
          name: record.name,
          businessName: record.businessName,
          email: record.email,
          phone: record.phone,
          website: record.website,
          message: record.message,
          requestType: record.requestType,
          sourcePage: record.sourcePage,
          serviceArea: record.serviceArea,
          serviceInterest: record.serviceInterest,
          smsConsent: record.smsConsent,
        },
      },
      env
    );

    if (process.env.NODE_ENV !== "test") {
      console.info(
        EVENT_LOG_PREFIX,
        JSON.stringify({
          submissionId: record.submissionId,
          notification: "sent",
          status: result.status || null,
        })
      );
    }

    return { ...result, sink: "notification_webhook" };
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.warn(
        EVENT_LOG_PREFIX,
        JSON.stringify({
          submissionId: record.submissionId,
          notification: "failed",
          error: redactSensitiveText(error?.message || "Notification failed."),
        })
      );
    }

    return {
      sink: "notification_webhook",
      attempted: true,
      ok: false,
      error: redactSensitiveText(error?.message || "Notification failed."),
    };
  }
}
