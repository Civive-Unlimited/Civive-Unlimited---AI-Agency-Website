const HIGHLEVEL_BASE_URL = "https://services.leadconnectorhq.com";
const HIGHLEVEL_VERSION = "2021-07-28";

const DEFAULT_LOCATION_ID = "FySiQXrk1tIwqcZOlnYG";
const DEFAULT_PIPELINE_ID = "9umBLYN4N3tKH4oNEVlx";
const DEFAULT_NEW_LEAD_STAGE_ID = "b1093f36-c4cf-4aaa-aca5-23faa4b13911";

const WEBSITE_LEAD_TAGS = [
  "website-lead",
  "visibility-report",
  "civive-unlimited",
];
const DRY_RUN_CONTACT_ID = "dry-run-contact-id";
const REDACTED_VALUE = "[redacted]";
const SENSITIVE_QUERY_KEY_PATTERN =
  /(email|e-mail|phone|name|token|key|secret|password|pass|auth|code|session|cookie|contact|lead|message)/i;

function cleanString(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function cleanMultiline(value, maxLength = 1200) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\r\n/g, "\n").slice(0, maxLength);
}

function cleanSourcePage(value, maxLength = 300) {
  const rawValue = cleanString(value, maxLength);
  if (!rawValue) return "";

  try {
    const parsed = new URL(rawValue, "https://www.civiveunlimited.com");
    for (const key of Array.from(parsed.searchParams.keys())) {
      if (SENSITIVE_QUERY_KEY_PATTERN.test(key)) {
        parsed.searchParams.set(key, REDACTED_VALUE);
      }
    }

    const cleaned = rawValue.startsWith("http")
      ? parsed.toString()
      : `${parsed.pathname}${parsed.search}${parsed.hash}`;
    return cleaned.slice(0, maxLength);
  } catch {
    return rawValue;
  }
}

function splitName(fullName) {
  const parts = cleanString(fullName, 120).split(" ").filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts[parts.length - 1],
  };
}

function normalizeEmail(email) {
  return cleanString(email, 180).toLowerCase();
}

function normalizePhone(phone) {
  return cleanString(phone, 40);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    pipelineId: env.GHL_PIPELINE_ID || DEFAULT_PIPELINE_ID,
    pipelineStageId: env.GHL_PIPELINE_STAGE_ID || DEFAULT_NEW_LEAD_STAGE_ID,
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
    error.externalService = "leadconnector";
    error.externalPath = path.split("?")[0];
    error.externalStatus = response.status;
    throw error;
  }

  return data;
}

function buildContactPayload(lead, config) {
  const { firstName, lastName } = splitName(lead.fullName);

  return {
    locationId: config.locationId,
    firstName,
    lastName,
    name: lead.fullName,
    email: lead.email,
    phone: lead.phone || undefined,
    companyName: lead.companyName,
    source: "Civive website - Visibility Report",
  };
}

function buildOpportunityPayload(contactId, lead, config) {
  return {
    locationId: config.locationId,
    contactId,
    pipelineId: config.pipelineId,
    pipelineStageId: config.pipelineStageId,
    name: `${lead.companyName} - Visibility Report`,
    status: "open",
    monetaryValue: 0,
    source: "Civive website",
  };
}

export function validateWebsiteLead(input) {
  const lead = {
    fullName: cleanString(input.fullName || input.full_name || input.name, 120),
    companyName: cleanString(
      input.companyName || input.company_name || input.business,
      160
    ),
    email: normalizeEmail(input.email),
    phone: normalizePhone(input.phone),
    website: cleanString(input.website || input.website_url, 240),
    serviceArea: cleanString(input.serviceArea || input.service_area, 180),
    serviceInterest: cleanString(
      input.serviceInterest || input.service_interest,
      180
    ),
    message: cleanMultiline(input.message, 1200),
    smsConsent: Boolean(input.smsConsent || input.sms_consent === "on"),
    sourcePage: cleanSourcePage(
      input.sourcePage || input.source_page || input.page,
      300
    ),
    offer: cleanString(input.offer || "ai-search-visibility-report", 120),
    honey: cleanString(input._honey || input.honey, 120),
  };

  const errors = [];

  if (lead.honey) {
    return { lead, errors, isSpam: true };
  }

  if (!lead.fullName) errors.push("Full name is required.");
  if (!lead.companyName) errors.push("Business name is required.");
  if (!lead.email || !isValidEmail(lead.email))
    errors.push("A valid email is required.");
  if (!lead.website)
    errors.push("Website or Google Business Profile URL is required.");
  if (lead.smsConsent && !lead.phone)
    errors.push("Phone is required when SMS consent is checked.");

  return { lead, errors, isSpam: false };
}

function buildLeadNote(lead) {
  const lines = [
    "Website Visibility Report request",
    "",
    `Name: ${lead.fullName}`,
    `Business: ${lead.companyName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Website/GBP: ${lead.website}`,
    `Service area: ${lead.serviceArea || "Not provided"}`,
    `Primary concern: ${lead.serviceInterest || "Not selected"}`,
    `SMS consent: ${lead.smsConsent ? "Yes" : "No"}`,
    `Offer: ${lead.offer}`,
    `Source page: ${lead.sourcePage || "Not provided"}`,
  ];

  if (lead.message) {
    lines.push("", "Visitor message:", lead.message);
  }

  return lines.join("\n");
}

export function buildWebsiteLeadSubmissionPreview(lead, env = process.env) {
  const config = getHighLevelConfig(env);

  return {
    locationId: config.locationId,
    pipelineId: config.pipelineId || null,
    pipelineStageId: config.pipelineStageId || null,
    contactPayload: buildContactPayload(lead, config),
    tags: [...WEBSITE_LEAD_TAGS],
    note: buildLeadNote(lead),
    opportunityPayload:
      config.pipelineId && config.pipelineStageId
        ? buildOpportunityPayload(DRY_RUN_CONTACT_ID, lead, config)
        : null,
  };
}

async function addContactTags(contactId, tags, token) {
  if (!contactId || tags.length === 0) return null;

  return highLevelRequest(`/contacts/${contactId}/tags`, {
    method: "POST",
    token,
    body: { tags },
  });
}

async function addContactNote(contactId, lead, token) {
  if (!contactId) return null;

  return highLevelRequest(`/contacts/${contactId}/notes`, {
    method: "POST",
    token,
    body: { body: buildLeadNote(lead) },
  });
}

async function findExistingOpportunity(contactId, config) {
  const params = new URLSearchParams({
    location_id: config.locationId,
    contact_id: contactId,
  });

  const data = await highLevelRequest(
    `/opportunities/search?${params.toString()}`,
    {
      method: "GET",
      token: config.token,
    }
  );

  return (data?.opportunities || []).find(
    opportunity =>
      opportunity?.pipelineId === config.pipelineId &&
      opportunity?.status !== "lost" &&
      opportunity?.status !== "abandoned"
  );
}

async function createOpportunity(contactId, lead, config) {
  if (!contactId || !config.pipelineId || !config.pipelineStageId) {
    return null;
  }

  const existingOpportunity = await findExistingOpportunity(contactId, config);
  if (existingOpportunity) {
    return { opportunity: existingOpportunity, existing: true };
  }

  return highLevelRequest("/opportunities/", {
    method: "POST",
    token: config.token,
    body: buildOpportunityPayload(contactId, lead, config),
  });
}

export async function sendWebsiteLeadToHighLevel(lead, env = process.env) {
  const config = getHighLevelConfig(env);
  if (!config.token) {
    const error = new Error("HighLevel token is not configured.");
    error.status = 500;
    throw error;
  }

  const contactPayload = buildContactPayload(lead, config);

  const upsertData = await highLevelRequest("/contacts/upsert", {
    method: "POST",
    token: config.token,
    body: contactPayload,
  });

  const contactId =
    upsertData?.contact?.id ||
    upsertData?.contact?.contactId ||
    upsertData?.id ||
    upsertData?.contactId;

  if (!contactId) {
    const error = new Error(
      "HighLevel contact was created but no contact ID was returned."
    );
    error.status = 502;
    error.details = upsertData;
    throw error;
  }

  const sideEffects = {
    tags: null,
    note: null,
    opportunity: null,
    warnings: [],
  };

  try {
    sideEffects.tags = await addContactTags(
      contactId,
      WEBSITE_LEAD_TAGS,
      config.token
    );
  } catch (error) {
    sideEffects.warnings.push("Tagging was delayed.");
  }

  try {
    sideEffects.note = await addContactNote(contactId, lead, config.token);
  } catch (error) {
    sideEffects.warnings.push("Contact note was delayed.");
  }

  try {
    sideEffects.opportunity = await createOpportunity(contactId, lead, config);
  } catch (error) {
    sideEffects.warnings.push("Opportunity creation was delayed.");
  }

  return {
    contactId,
    locationId: config.locationId,
    opportunityId:
      sideEffects.opportunity?.opportunity?.id ||
      sideEffects.opportunity?.id ||
      null,
    warnings: sideEffects.warnings,
  };
}
