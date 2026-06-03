import crypto from "node:crypto";

const DEFAULT_LOCATION_ID = "FySiQXrk1tIwqcZOlnYG";
const MAX_FIELD_LENGTH = 160;
const EVENT_LOG_PREFIX = "[civive-outbound-track]";
const ALLOWED_REDIRECT_HOSTS = new Set([
  "prod.analyzemy.business",
  "www.civiveunlimited.com",
  "civiveunlimited.com",
  "get.civiveunlimited.com",
]);

const EVENT_TAGS = {
  email_open: ["out-ai-search-email-opened"],
  report_click: ["out-ai-search-report-clicked", "out-ai-search-engaged"],
};

export function sendNoStoreHeaders(res) {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
}

export function requestUrl(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || "www.civiveunlimited.com";
  return new URL(req.url || "/", `${proto}://${host}`);
}

export function cleanField(value, maxLength = MAX_FIELD_LENGTH) {
  return String(value || "")
    .trim()
    .replace(/[^\w:./@+?&=%#| -]/g, "")
    .slice(0, maxLength);
}

export function cleanTrackingId(value) {
  const cleaned = cleanField(value, 80);
  return /^[a-zA-Z0-9_-]{6,80}$/.test(cleaned) ? cleaned : "";
}

export function safeRedirectUrl(rawTarget) {
  const value = String(rawTarget || "").trim();
  if (!value) return "https://www.civiveunlimited.com/ai-search-report";

  try {
    const target = new URL(value);
    if (target.protocol !== "https:")
      return "https://www.civiveunlimited.com/ai-search-report";
    if (!ALLOWED_REDIRECT_HOSTS.has(target.hostname.toLowerCase())) {
      return "https://www.civiveunlimited.com/ai-search-report";
    }
    return target.toString();
  } catch {
    return "https://www.civiveunlimited.com/ai-search-report";
  }
}

function trackingSecret() {
  return process.env.CIVIVE_TRACKING_SIGNING_SECRET || "";
}

function expectedSignature({ contactId, opportunityId, targetUrl }) {
  const secret = trackingSecret();
  if (!secret) return "";
  return crypto
    .createHmac("sha256", secret)
    .update([contactId, opportunityId, targetUrl || ""].join("|"))
    .digest("hex")
    .slice(0, 32);
}

function validSignature({ contactId, opportunityId, targetUrl, signature }) {
  const expected = expectedSignature({ contactId, opportunityId, targetUrl });
  if (!expected || !signature) return false;
  const provided = signature.slice(0, expected.length);
  if (provided.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(provided));
}

function leadConnectorToken() {
  return [
    process.env.GHL_TARGET_LOCATION_API_KEY,
    process.env.HIGHLEVEL_TARGET_LOCATION_TOKEN,
    process.env.GHL_API_KEY,
    process.env.HIGHLEVEL_TOKEN,
    process.env.HIGHLEVEL_API_KEY,
  ]
    .find(Boolean)
    ?.replace(/^Bearer\s+/i, "");
}

async function addTrackingTags({ contactId, tags }) {
  const token = leadConnectorToken();
  if (!token || !contactId || !tags.length)
    return { attempted: false, ok: false };

  const response = await fetch(
    `https://services.leadconnectorhq.com/contacts/${encodeURIComponent(contactId)}/tags`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags }),
    }
  );

  return { attempted: true, ok: response.ok, status: response.status };
}

export async function recordOutboundEvent({ req, eventName, targetUrl = "" }) {
  const url = requestUrl(req);
  const contactId = cleanTrackingId(
    url.searchParams.get("cid") || url.searchParams.get("contact_id")
  );
  const opportunityId = cleanTrackingId(
    url.searchParams.get("oid") || url.searchParams.get("opportunity_id")
  );
  const campaign = cleanField(
    url.searchParams.get("campaign") || url.searchParams.get("utm_campaign"),
    80
  );
  const batch = cleanField(
    url.searchParams.get("batch") || url.searchParams.get("utm_content"),
    80
  );
  const signature = cleanField(url.searchParams.get("sig"), 80);
  const signed = validSignature({
    contactId,
    opportunityId,
    targetUrl,
    signature,
  });
  const tags = signed ? EVENT_TAGS[eventName] || [] : [];
  const tagResult = signed
    ? await addTrackingTags({ contactId, tags }).catch(error => ({
        attempted: true,
        ok: false,
        error: error.message,
      }))
    : { attempted: false, ok: false };

  const event = {
    eventName,
    contactId: contactId || "missing",
    opportunityId: opportunityId || "missing",
    campaign,
    batch,
    targetHost: targetUrl ? new URL(targetUrl).hostname : "",
    signed,
    crmTagged: tagResult.attempted ? tagResult.ok : false,
    userAgent: cleanField(req.headers["user-agent"], 180),
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV !== "test") {
    console.info(EVENT_LOG_PREFIX, JSON.stringify(event));
  }

  return event;
}
