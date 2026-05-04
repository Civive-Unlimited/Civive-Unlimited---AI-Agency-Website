const HIGHLEVEL_BASE_URL = "https://services.leadconnectorhq.com";
const HIGHLEVEL_VERSION = "2021-07-28";

const DEFAULT_LOCATION_ID = "FySiQXrk1tIwqcZOlnYG";
const MAX_EVENT_NAME_LENGTH = 80;
const MAX_STRING_LENGTH = 500;
const MAX_NOTE_LENGTH = 1800;
const HIGH_INTENT_EVENTS = new Set([
  "report_view",
  "report_print",
  "report_copy_brief",
  "report_cleanup_plan_click",
  "form_submit",
  "phone_click",
  "email_click",
]);

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

async function readRequestBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  if (!rawBody) return {};

  try {
    return JSON.parse(rawBody);
  } catch {
    const error = new Error("Request body must be valid JSON.");
    error.status = 400;
    throw error;
  }
}

function cleanString(value, maxLength = MAX_STRING_LENGTH) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function cleanOptionalString(value, maxLength = MAX_STRING_LENGTH) {
  const cleaned = cleanString(value, maxLength);
  return cleaned || undefined;
}

function cleanObject(input, maxKeys = 24) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};

  const output = {};
  for (const [key, value] of Object.entries(input).slice(0, maxKeys)) {
    const safeKey = cleanString(key, 80);
    if (!safeKey) continue;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      output[safeKey] = cleanString(String(value), 300);
    }
  }
  return output;
}

function getHighLevelConfig(env = process.env) {
  return {
    token:
      env.GHL_LOCATION_API_KEY ||
      env.HIGHLEVEL_LOCATION_TOKEN ||
      env.HIGHLEVEL_TOKEN ||
      env.GHL_API_KEY ||
      "",
    locationId:
      env.GHL_LOCATION_ID ||
      env.HIGHLEVEL_LOCATION_ID ||
      env.GHL_PRIMARY_LOCATION_ID ||
      DEFAULT_LOCATION_ID,
  };
}

async function highLevelRequest(path, { method = "GET", body, token }) {
  const response = await fetch(`${HIGHLEVEL_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: HIGHLEVEL_VERSION,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const responseText = await response.text();
  let data = null;

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      `HighLevel request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
}

function normalizeEvent(body, req) {
  const eventName = cleanString(body.event || body.name, MAX_EVENT_NAME_LENGTH);
  if (!eventName) {
    const error = new Error("Tracking event name is required.");
    error.status = 400;
    throw error;
  }

  const attribution = cleanObject(body.attribution);
  const event = {
    event: eventName,
    occurredAt: cleanOptionalString(body.occurredAt, 80) || new Date().toISOString(),
    path: cleanOptionalString(body.path, 300),
    title: cleanOptionalString(body.title, 180),
    referrer: cleanOptionalString(body.referrer, 300),
    contactId:
      cleanOptionalString(body.contactId, 80) ||
      cleanOptionalString(attribution.contact_id, 80) ||
      cleanOptionalString(attribution.cid, 80),
    opportunityId:
      cleanOptionalString(body.opportunityId, 80) ||
      cleanOptionalString(attribution.opportunity_id, 80) ||
      cleanOptionalString(attribution.oid, 80),
    business: cleanOptionalString(body.business, 180) || cleanOptionalString(attribution.business, 180),
    campaign:
      cleanOptionalString(body.campaign, 120) ||
      cleanOptionalString(attribution.campaign, 120) ||
      cleanOptionalString(attribution.utm_campaign, 120),
    batch: cleanOptionalString(body.batch, 80) || cleanOptionalString(attribution.batch, 80),
    target: cleanObject(body.target),
    attribution,
    userAgent: cleanString(req.headers["user-agent"] || "", 300),
    ip:
      cleanString(req.headers["x-forwarded-for"] || "", 120)
        .split(",")[0]
        ?.trim() || "",
  };

  return event;
}

function buildTrackingNote(event) {
  const lines = [
    `Civive website tracking event: ${event.event}`,
    "",
    `Occurred: ${event.occurredAt}`,
    `Path: ${event.path || "unknown"}`,
    `Title: ${event.title || "unknown"}`,
    `Business: ${event.business || "unknown"}`,
    `Campaign: ${event.campaign || "unknown"}`,
    `Batch: ${event.batch || "unknown"}`,
    `Opportunity ID: ${event.opportunityId || "unknown"}`,
    `Referrer: ${event.referrer || "none"}`,
  ];

  const targetEntries = Object.entries(event.target || {});
  if (targetEntries.length) {
    lines.push("", "Target:");
    for (const [key, value] of targetEntries) lines.push(`- ${key}: ${value}`);
  }

  const attributionEntries = Object.entries(event.attribution || {});
  if (attributionEntries.length) {
    lines.push("", "Attribution:");
    for (const [key, value] of attributionEntries) lines.push(`- ${key}: ${value}`);
  }

  return lines.join("\n").slice(0, MAX_NOTE_LENGTH);
}

async function addHighLevelTrackingNote(event, env = process.env) {
  if (!event.contactId || !HIGH_INTENT_EVENTS.has(event.event)) {
    return { attempted: false, reason: "not_contact_attributed_high_intent" };
  }

  const config = getHighLevelConfig(env);
  if (!config.token) return { attempted: false, reason: "missing_highlevel_token" };

  const note = await highLevelRequest(`/contacts/${event.contactId}/notes`, {
    method: "POST",
    token: config.token,
    body: { body: buildTrackingNote(event) },
  });

  return { attempted: true, note };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 405, {
      ok: false,
      message: "Method not allowed.",
    });
  }

  try {
    const body = await readRequestBody(req);
    const event = normalizeEvent(body, req);
    let highLevel = { attempted: false };

    try {
      highLevel = await addHighLevelTrackingNote(event);
    } catch (error) {
      highLevel = {
        attempted: true,
        error: "highlevel_note_failed",
        status: error.status || 500,
      };
    }

    console.info(
      JSON.stringify({
        type: "civive_website_tracking",
        event,
        highLevel: {
          attempted: highLevel.attempted,
          reason: highLevel.reason,
          error: highLevel.error,
          status: highLevel.status,
        },
      })
    );

    return sendJson(res, 200, {
      ok: true,
      tracked: true,
      highLevelNoteAttempted: Boolean(highLevel.attempted),
      highLevelNoteError: highLevel.error || null,
    });
  } catch (error) {
    const statusCode = Number.isInteger(error?.status) ? error.status : 500;
    return sendJson(res, statusCode >= 400 && statusCode < 600 ? statusCode : 500, {
      ok: false,
      message: statusCode === 500 ? "Tracking failed." : error.message,
    });
  }
}
