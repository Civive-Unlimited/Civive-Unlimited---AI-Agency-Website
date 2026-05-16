import { timingSafeEqual } from "node:crypto";
import {
  buildWebsiteLeadSubmissionPreview,
  sendWebsiteLeadToHighLevel,
  validateWebsiteLead,
} from "../server/highlevel.js";

const DRY_RUN_MODE_HEADER = "x-civive-lead-mode";
const DRY_RUN_TOKEN_HEADER = "x-civive-lead-dry-run-token";
const MAX_BODY_BYTES = 32 * 1024;

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

async function readRequestBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    const error = new Error("Request body is too large.");
    error.status = 413;
    error.statusCode = 413;
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
      error.statusCode = 413;
      throw error;
    }
    chunks.push(buffer);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  if (!rawBody) return {};

  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(rawBody);
    } catch {
      const error = new Error("Request body must be valid JSON.");
      error.status = 400;
      error.statusCode = 400;
      throw error;
    }
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
}

function getHeader(req, name) {
  const value = req.headers?.[name] || req.headers?.[name.toLowerCase()];
  if (Array.isArray(value)) return value[0] || "";
  return typeof value === "string" ? value : "";
}

function hasDryRunFlag(value) {
  return (
    value === true || value === "true" || value === "1" || value === "dry-run"
  );
}

function isDryRunRequested(req, body) {
  return (
    hasDryRunFlag(body?.dryRun) ||
    hasDryRunFlag(getHeader(req, DRY_RUN_MODE_HEADER))
  );
}

function safeTokenEquals(actual, expected) {
  if (!actual || !expected) return false;

  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

function isDryRunAuthorized(req, env = process.env) {
  if (env.NODE_ENV === "test" || env.CIVIVE_LEAD_DRY_RUN === "1") return true;
  if (env.VERCEL_ENV && env.VERCEL_ENV !== "production") return true;

  const expectedToken =
    env.CIVIVE_LEAD_DRY_RUN_TOKEN || env.LEAD_DRY_RUN_TOKEN || "";
  return safeTokenEquals(getHeader(req, DRY_RUN_TOKEN_HEADER), expectedToken);
}

function getErrorStatus(error) {
  if (Number.isInteger(error?.status)) return error.status;
  if (Number.isInteger(error?.statusCode)) return error.statusCode;
  if (error?.name === "SyntaxError") return 400;
  return 500;
}

function getSafeErrorMessage(error, statusCode) {
  const errorMessage = typeof error?.message === "string" ? error.message : "";
  const isJsonParseError =
    error?.name === "SyntaxError" ||
    errorMessage.toLowerCase().includes("json");

  if (statusCode === 400 && isJsonParseError) {
    return "Request body must be valid JSON.";
  }

  if (statusCode === 500) {
    return "The website could not reach HighLevel. Please call or text Civive.";
  }

  return errorMessage || "Request failed.";
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
    const dryRunRequested = isDryRunRequested(req, body);

    if (dryRunRequested && !isDryRunAuthorized(req)) {
      return sendJson(res, 401, {
        ok: false,
        message: "Lead dry run is not authorized.",
      });
    }

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

    if (dryRunRequested) {
      return sendJson(res, 200, {
        ok: true,
        dryRun: true,
        writesAttempted: false,
        message: "Lead API dry run passed. No HighLevel writes were attempted.",
        lead,
        highLevelPreview: buildWebsiteLeadSubmissionPreview(lead),
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
    const statusCode = getErrorStatus(error);
    const safeStatus = statusCode >= 400 && statusCode < 600 ? statusCode : 500;

    return sendJson(res, safeStatus, {
      ok: false,
      message: getSafeErrorMessage(error, safeStatus),
    });
  }
}
