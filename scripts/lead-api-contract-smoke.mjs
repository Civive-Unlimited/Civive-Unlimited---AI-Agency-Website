import { Readable } from "node:stream";
import leadHandler from "../api/lead.js";

const envSnapshot = {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  CIVIVE_LEAD_DRY_RUN: process.env.CIVIVE_LEAD_DRY_RUN,
  CIVIVE_LEAD_DRY_RUN_TOKEN: process.env.CIVIVE_LEAD_DRY_RUN_TOKEN,
  LEAD_DRY_RUN_TOKEN: process.env.LEAD_DRY_RUN_TOKEN,
};

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
  offer: "ai-search-readiness-audit",
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
  process.env.NODE_ENV = "test";
  delete process.env.VERCEL_ENV;
  delete process.env.CIVIVE_LEAD_DRY_RUN_TOKEN;
  delete process.env.LEAD_DRY_RUN_TOKEN;

  const dryRun = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: validLeadPayload,
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
      "Civive website - AI Search Audit",
    "HighLevel contact payload source should match the website offer."
  );
  assert(
    dryRun.payload.highLevelPreview.tags.includes("ai-search-audit"),
    "HighLevel preview should include the AI Search Audit tag."
  );
  assert(
    dryRun.payload.highLevelPreview.note.includes(
      "Website AI Search Audit request"
    ),
    "HighLevel preview should include the audit note body."
  );
  assert(
    dryRun.payload.highLevelPreview.opportunityPayload.name ===
      "Parker Heating and Air - AI Search Audit",
    "HighLevel preview should include the expected opportunity name."
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

  const smsConsentError = await callLeadApi({
    headers: { "x-civive-lead-mode": "dry-run" },
    body: { ...validLeadPayload, phone: "", smsConsent: true },
  });
  assert(
    smsConsentError.statusCode === 400,
    "SMS consent without phone should return 400."
  );
  assert(
    smsConsentError.payload.errors.includes(
      "Phone is required when SMS consent is checked."
    ),
    "SMS consent validation should require a phone number."
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

  console.log(
    JSON.stringify(
      {
        ok: true,
        checked: [
          "authorized dry-run lead contract",
          "HighLevel payload preview without writes",
          "email validation",
          "malformed JSON handling",
          "SMS consent validation",
          "honeypot handling",
          "production dry-run authorization gate",
        ],
      },
      null,
      2
    )
  );
} finally {
  restoreEnv();
}
