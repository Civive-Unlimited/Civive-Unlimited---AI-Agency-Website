import { Readable } from "node:stream";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import leadHandler from "../api/lead.js";

const envSnapshot = {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CIVIVE_LEAD_DRY_RUN: process.env.CIVIVE_LEAD_DRY_RUN,
  CIVIVE_LEAD_DRY_RUN_TOKEN: process.env.CIVIVE_LEAD_DRY_RUN_TOKEN,
  LEAD_DRY_RUN_TOKEN: process.env.LEAD_DRY_RUN_TOKEN,
  GHL_TARGET_LOCATION_API_KEY: process.env.GHL_TARGET_LOCATION_API_KEY,
  HIGHLEVEL_TARGET_LOCATION_TOKEN:
    process.env.HIGHLEVEL_TARGET_LOCATION_TOKEN,
  GHL_LOCATION_API_KEY: process.env.GHL_LOCATION_API_KEY,
  HIGHLEVEL_LOCATION_TOKEN: process.env.HIGHLEVEL_LOCATION_TOKEN,
  HIGHLEVEL_TOKEN: process.env.HIGHLEVEL_TOKEN,
  GHL_API_KEY: process.env.GHL_API_KEY,
  HIGHLEVEL_API_KEY: process.env.HIGHLEVEL_API_KEY,
  GHL_LOCATION_ID: process.env.GHL_LOCATION_ID,
  GHL_PIPELINE_ID: process.env.GHL_PIPELINE_ID,
  GHL_PIPELINE_STAGE_ID: process.env.GHL_PIPELINE_STAGE_ID,
  CIVIVE_LEAD_BACKUP_DIR: process.env.CIVIVE_LEAD_BACKUP_DIR,
  CIVIVE_LEAD_BACKUP_WEBHOOK_URL: process.env.CIVIVE_LEAD_BACKUP_WEBHOOK_URL,
  CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL:
    process.env.CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL,
};
const fetchSnapshot = globalThis.fetch;

const validLeadPayload = {
  fullName: "Jordan Parker",
  companyName: "Parker Heating and Air",
  email: "Jordan@Example.com",
  phone: "(417) 555-0198",
  website: "https://example.com",
  serviceArea: "Springfield, MO",
  serviceInterest: "ai-search-visibility",
  message:
    "We want AI assistants and local buyers to understand our emergency HVAC service areas.",
  smsConsent: true,
  offer: "ai-search-visibility-report",
  sourcePage: "https://www.civiveunlimited.com/contact",
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function restoreEnv() {
  for (const [key, value] of Object.entries(envSnapshot)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

async function callLeadApi({
  method = "POST",
  headers = {},
  body,
  rawBody,
} = {}) {
  const serializedBody =
    rawBody ?? (body === undefined ? "" : JSON.stringify(body));
  const req = Readable.from(
    serializedBody ? [Buffer.from(serializedBody)] : []
  );
  Object.assign(req, {
    method,
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  });

  return new Promise((resolve, reject) => {
    const res = {
      statusCode: 200,
      headers: {},
      setHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
      },
      end(payload) {
        try {
          resolve({
            statusCode: this.statusCode,
            headers: this.headers,
            payload: payload ? JSON.parse(payload) : null,
          });
        } catch (error) {
          reject(error);
        }
      },
    };

    Promise.resolve(leadHandler(req, res)).catch(reject);
  });
}

try {
  const backupDir = await fs.mkdtemp(
    path.join(os.tmpdir(), "civive-lead-contract-")
  );

  process.env.NODE_ENV = "test";
  delete process.env.VERCEL_ENV;
  delete process.env.CIVIVE_LEAD_DRY_RUN_TOKEN;
  delete process.env.LEAD_DRY_RUN_TOKEN;
  process.env.CIVIVE_LEAD_BACKUP_DIR = backupDir;

  const dryRun = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: {
      ...validLeadPayload,
      sourcePage:
        "https://www.civiveunlimited.com/contact?email=jordan@example.com&token=secret-token&utm_campaign=spring",
    },
  });
  assert(dryRun.statusCode === 200, "Dry-run request should return 200.");
  assert(dryRun.payload.ok === true, "Dry-run request should be ok.");
  assert(
    dryRun.payload.dryRun === true,
    "Dry-run response should be marked dryRun."
  );
  assert(
    dryRun.payload.writesAttempted === false,
    "Dry-run response must confirm no writes were attempted."
  );
  assert(
    dryRun.payload.lead.email === "jordan@example.com",
    "Lead email should be normalized to lowercase."
  );
  assert(
    dryRun.payload.highLevelPreview.contactPayload.source ===
      "Civive website - Visibility Report",
    "HighLevel contact payload source should match the website offer."
  );
  assert(
    dryRun.payload.highLevelPreview.tags.includes("visibility-report"),
    "HighLevel preview should include the Visibility Report tag."
  );
  assert(
    dryRun.payload.highLevelPreview.tags.includes(
      "visibility report needs generated"
    ),
    "HighLevel preview should include the missing-report workflow tag."
  );
  assert(
    dryRun.payload.highLevelPreview.tags.includes("report link missing"),
    "HighLevel preview should include the missing report link tag."
  );
  assert(
    dryRun.payload.highLevelPreview.note.includes(
      "Website Visibility Report request"
    ),
    "HighLevel preview should include the report note body."
  );
  assert(
    dryRun.payload.highLevelPreview.note.includes("email=%5Bredacted%5D"),
    "HighLevel preview should redact sensitive source-page query values."
  );
  assert(
    !dryRun.payload.highLevelPreview.note.includes("secret-token") &&
      !dryRun.payload.highLevelPreview.note.includes(
        "email=jordan@example.com"
      ),
    "HighLevel preview should not keep raw sensitive source-page query values."
  );
  assert(
    dryRun.payload.highLevelPreview.opportunityPayload.name ===
      "Parker Heating and Air - Visibility Report",
    "HighLevel preview should include the expected opportunity name."
  );
  assert(
    dryRun.payload.highLevelPreview.opportunityPayload.pipelineId ===
      "9umBLYN4N3tKH4oNEVlx",
    "HighLevel preview should default to the Visibility Report pipeline."
  );
  assert(
    dryRun.payload.highLevelPreview.opportunityPayload.pipelineStageId ===
      "b1093f36-c4cf-4aaa-aca5-23faa4b13911",
    "HighLevel preview should default to the Report Needed stage."
  );
  assert(
    !("contactId" in dryRun.payload) && !("opportunityId" in dryRun.payload),
    "Dry-run response should not expose real contact or opportunity IDs."
  );

  const validationError = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: { ...validLeadPayload, email: "not-an-email" },
  });
  assert(
    validationError.statusCode === 400,
    "Invalid email should return 400."
  );
  assert(
    validationError.payload.errors.includes("A valid email is required."),
    "Invalid email should return a specific validation error."
  );

  const malformedJson = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    rawBody: '{"fullName":',
  });
  assert(malformedJson.statusCode === 400, "Malformed JSON should return 400.");
  assert(
    malformedJson.payload.message === "Request body must be valid JSON.",
    "Malformed JSON should return a clear parser error."
  );

  const oversizedBody = await callLeadApi({
    headers: {
      "x-civive-lead-mode": "dry-run",
      "content-length": String(33 * 1024),
    },
    rawBody: "",
  });
  assert(
    oversizedBody.statusCode === 413,
    "Oversized lead payloads should be rejected before parsing."
  );

  const missingPhoneError = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: { ...validLeadPayload, phone: "", smsConsent: false },
  });
  assert(
    missingPhoneError.statusCode === 400,
    "Missing phone should return 400."
  );
  assert(
    missingPhoneError.payload.errors.includes("Phone is required."),
    "Visibility Report validation should require a phone number."
  );

  const honeypot = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: { ...validLeadPayload, _honey: "bot-field" },
  });
  assert(
    honeypot.statusCode === 200,
    "Honeypot submissions should be quietly accepted."
  );
  assert(
    honeypot.payload.message === "Thanks. Your request was received.",
    "Honeypot response should remain generic."
  );
  assert(
    !("highLevelPreview" in honeypot.payload),
    "Honeypot dry-run should not emit a HighLevel preview."
  );

  process.env.NODE_ENV = "production";
  process.env.VERCEL_ENV = "production";
  delete process.env.CIVIVE_LEAD_DRY_RUN;
  delete process.env.CIVIVE_LEAD_DRY_RUN_TOKEN;
  delete process.env.LEAD_DRY_RUN_TOKEN;

  const unauthorizedProductionDryRun = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: validLeadPayload,
  });
  assert(
    unauthorizedProductionDryRun.statusCode === 401,
    "Production dry-run without token should be rejected before any write path."
  );

  process.env.NODE_ENV = "test";
  delete process.env.VERCEL_ENV;
  process.env.GHL_TARGET_LOCATION_API_KEY = "test-target-location-token";
  process.env.HIGHLEVEL_TARGET_LOCATION_TOKEN =
    "test-secondary-target-location-token";
  process.env.GHL_LOCATION_API_KEY = "test-stale-location-token";
  process.env.HIGHLEVEL_LOCATION_TOKEN = "test-stale-highlevel-token";
  process.env.GHL_API_KEY = "test-general-token";
  process.env.HIGHLEVEL_TOKEN = "test-highlevel-token";
  process.env.HIGHLEVEL_API_KEY = "test-highlevel-api-key";
  process.env.GHL_LOCATION_ID = "test-location";
  process.env.GHL_PIPELINE_ID = "test-pipeline";
  process.env.GHL_PIPELINE_STAGE_ID = "test-stage";
  delete process.env.CIVIVE_LEAD_BACKUP_WEBHOOK_URL;
  delete process.env.CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL;

  const tokenPrecedenceCalls = [];
  globalThis.fetch = async (url, options = {}) => {
    tokenPrecedenceCalls.push({ url: String(url), options });

    if (String(url).includes("/contacts/upsert")) {
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({ contact: { id: "contact-token-test" } });
        },
      };
    }

    if (String(url).includes("/opportunities/search")) {
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({ opportunities: [] });
        },
      };
    }

    if (String(url).includes("services.leadconnectorhq.com")) {
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({ opportunity: { id: "opportunity-token-test" } });
        },
      };
    }

    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ ok: true });
      },
    };
  };

  const tokenPrecedence = await callLeadApi({
    body: validLeadPayload,
  });
  assert(
    tokenPrecedence.statusCode === 200,
    "Target-location token precedence should allow a clean lead API response."
  );
  const leadConnectorCalls = tokenPrecedenceCalls.filter(call =>
    String(call.url).includes("services.leadconnectorhq.com")
  );
  assert(
    leadConnectorCalls.length > 0,
    "Token precedence check should call LeadConnector."
  );
  assert(
    leadConnectorCalls.every(
      call =>
        call.options?.headers?.Authorization ===
        "Bearer test-target-location-token"
    ),
    "LeadConnector requests should prefer GHL_TARGET_LOCATION_API_KEY over stale legacy tokens."
  );

  delete process.env.GHL_TARGET_LOCATION_API_KEY;
  delete process.env.HIGHLEVEL_TARGET_LOCATION_TOKEN;
  delete process.env.GHL_API_KEY;
  delete process.env.HIGHLEVEL_TOKEN;
  delete process.env.HIGHLEVEL_API_KEY;
  process.env.GHL_LOCATION_API_KEY = "test-token-without-location-access";
  delete process.env.HIGHLEVEL_LOCATION_TOKEN;
  process.env.GHL_LOCATION_ID = "test-location";
  process.env.GHL_PIPELINE_ID = "test-pipeline";
  process.env.GHL_PIPELINE_STAGE_ID = "test-stage";
  process.env.CIVIVE_LEAD_BACKUP_WEBHOOK_URL =
    "https://hooks.example.test/lead-backup";
  process.env.CIVIVE_LEAD_NOTIFICATION_WEBHOOK_URL =
    "https://hooks.example.test/lead-notification";

  const fetchCalls = [];
  globalThis.fetch = async (url, options = {}) => {
    fetchCalls.push({ url: String(url), options });

    if (String(url).includes("services.leadconnectorhq.com")) {
      return {
        ok: false,
        status: 403,
        async text() {
          return JSON.stringify({
            message: "token does not have access to this location",
          });
        },
      };
    }

    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ ok: true });
      },
    };
  };

  const externalFailureFallback = await callLeadApi({
    body: validLeadPayload,
  });
  assert(
    externalFailureFallback.statusCode === 202,
    "External token/access failure should return accepted fallback status."
  );
  assert(
    externalFailureFallback.payload.ok === true,
    "External token/access failure should still return ok after backup capture."
  );
  assert(
    externalFailureFallback.payload.message ===
      "Your request was received. We'll review it and follow up.",
    "External token/access failure should return the required fallback message."
  );
  assert(
    externalFailureFallback.payload.leadCaptured === true,
    "Fallback response should confirm lead capture."
  );
  assert(
    externalFailureFallback.payload.externalApiStatus === "failed",
    "Fallback response should mark the external API as failed."
  );
  assert(
    fetchCalls.some(call =>
      String(call.url).includes("hooks.example.test/lead-notification")
    ),
    "Owner notification webhook should be attempted before external fallback finishes."
  );

  const backupFile = path.join(backupDir, "visibility-report-leads.ndjson");
  const backupLines = (await fs.readFile(backupFile, "utf8"))
    .trim()
    .split("\n")
    .map(line => JSON.parse(line));
  assert(
    backupLines.some(line => line.submissionStatus === "received"),
    "Lead backup should include a received record before external API routing."
  );
  assert(
    backupLines.some(
      line =>
        line.submissionStatus === "received_external_failed" &&
        line.externalApiStatus === "failed" &&
        line.errorMessage.includes("CiviveOS token does not have access")
    ),
    "Lead backup should include a safe external failure record."
  );
  assert(
    backupLines.every(line => !line.errorMessage.includes("test-token")),
    "Backup error records must not expose token values."
  );

  console.log(
    JSON.stringify(
      {
        ok: true,
        checked: [
          "authorized dry-run lead contract",
          "HighLevel payload preview without writes",
          "sensitive source-page query redaction",
          "email validation",
          "malformed JSON handling",
          "oversized request rejection",
          "SMS consent validation",
          "honeypot handling",
          "production dry-run authorization gate",
          "target-location token precedence",
          "external token/access failure fallback",
          "pre-external local backup capture",
          "owner notification webhook attempt",
          "safe external error recording",
        ],
      },
      null,
      2
    )
  );
} finally {
  globalThis.fetch = fetchSnapshot;
  restoreEnv();
}
