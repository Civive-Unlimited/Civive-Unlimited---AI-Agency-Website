const MAX_EVENT_NAME_LENGTH = 80;
const MAX_METADATA_KEYS = 30;
const MAX_METADATA_VALUE_LENGTH = 500;
const MAX_BODY_BYTES = 16 * 1024;

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

function cleanMetadata(metadata) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(metadata)
      .slice(0, MAX_METADATA_KEYS)
      .map(([key, value]) => [
        cleanString(key, 80),
        cleanString(value, MAX_METADATA_VALUE_LENGTH),
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
      path: cleanString(body.path, 240),
      url: cleanString(body.url, 500),
      referrer: cleanString(body.referrer, 500),
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
