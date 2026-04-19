import {
  sendWebsiteLeadToHighLevel,
  validateWebsiteLead,
} from "../server/highlevel.js";

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

  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(rawBody);
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
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
    const { lead, errors, isSpam } = validateWebsiteLead(body);

    if (isSpam) {
      return sendJson(res, 200, {
        ok: true,
        message: "Thanks. Your request was received.",
      });
    }

    if (errors.length > 0) {
      return sendJson(res, 400, {
        ok: false,
        message: "Please fix the highlighted fields.",
        errors,
      });
    }

    const result = await sendWebsiteLeadToHighLevel(lead);

    return sendJson(res, 200, {
      ok: true,
      message: "Your AI Search Audit request was sent.",
      contactId: result.contactId,
      opportunityId: result.opportunityId,
      warnings: result.warnings,
    });
  } catch (error) {
    const statusCode = Number.isInteger(error.status) ? error.status : 500;
    const safeStatus = statusCode >= 400 && statusCode < 600 ? statusCode : 500;

    return sendJson(res, safeStatus, {
      ok: false,
      message:
        safeStatus === 500
          ? "The website could not reach HighLevel. Please call or text Civive."
          : error.message,
    });
  }
}
