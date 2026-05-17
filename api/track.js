const MAX_EVENT_NAME_LENGTH = 80;
const MAX_METADATA_KEYS = 30;
const MAX_METADATA_VALUE_LENGTH = 500;
const MAX_BODY_BYTES = 16 * 1024;
const REDACTED_VALUE = "[redacted]";
const SENSITIVE_KEY_PATTERN =
  /(email|e-mail|phone|name|token|key|secret|password|pass|auth|code|session|cookie|contact|lead|message)/i;
const EMAIL_PATTERN = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const PHONE_PATTERN =
  /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}\b/g;

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    const error = new Error("Request body is too large.");
    error.status = 413;
    throw error;
  }

  const chunks = [];
  let totalBytes = 0;
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    totalBytes += buffer.length;
    if (totalBytes > MAX_BODY_BYTES) {
      const error = new Error("Request body is too large.");
      error.status = 413;
      throw error;
    }
    chunks.push(buffer);
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

function cleanString(value, maxLength) {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, maxLength);
}

function redactString(value, maxLength) {
  return cleanString(value, maxLength)
    .replace(EMAIL_PATTERN, REDACTED_VALUE)
    .replace(PHONE_PATTERN, REDACTED_VALUE);
}

function cleanUrl(value, maxLength) {
  const rawValue = cleanString(value, maxLength);
  if (!rawValue) return "";

  try {
    const parsed = new URL(rawValue, "https://www.civiveunlimited.com");

    for (const key of Array.from(parsed.searchParams.keys())) {
      if (SENSITIVE_KEY_PATTERN.test(key)) {
        parsed.searchParams.set(key, REDACTED_VALUE);
      }
    }

    const cleaned = parsed.toString();
    return rawValue.startsWith("http")
      ? redactString(cleaned, maxLength)
      : redactString(
          `${parsed.pathname}${parsed.search}${parsed.hash}`,
          maxLength
        );
  } catch {
    return redactString(rawValue, maxLength);
  }
}

function cleanMetadata(metadata) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(metadata)
      .slice(0, MAX_METADATA_KEYS)
      .map(([key, value]) => [
        cleanString(key, 80),
        SENSITIVE_KEY_PATTERN.test(key)
          ? REDACTED_VALUE
          : redactString(value, MAX_METADATA_VALUE_LENGTH),
      ])
      .filter(([key]) => key)
  );
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
    const body = await readJsonBody(req);
    const eventName = cleanString(body.eventName, MAX_EVENT_NAME_LENGTH);

    if (!eventName) {
      return sendJson(res, 400, {
        ok: false,
        message: "eventName is required.",
      });
    }

    const event = {
      eventName,
      path: cleanUrl(body.path, 240),
      url: cleanUrl(body.url, 500),
      referrer: cleanUrl(body.referrer, 500),
      metadata: cleanMetadata(body.metadata),
      receivedAt: new Date().toISOString(),
    };

    if (process.env.NODE_ENV !== "test") {
      console.info("[civive-website-track]", JSON.stringify(event));
    }

    return sendJson(res, 200, {
      ok: true,
      tracked: true,
      eventName: event.eventName,
    });
  } catch (error) {
    const statusCode =
      Number.isInteger(error?.status) && error.status >= 400
        ? error.status
        : 500;

    return sendJson(res, statusCode, {
      ok: false,
      message:
        statusCode === 400
          ? error.message
          : "Tracking event could not be recorded.",
    });
  }
}
