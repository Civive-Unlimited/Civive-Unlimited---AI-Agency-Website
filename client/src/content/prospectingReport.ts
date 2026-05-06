export type ReportStatus = "strong" | "watch" | "gap";

export type ReportScore = {
  label: string;
  score: number;
  status: ReportStatus;
  finding: string;
  priority: string;
};

export type ReportFinding = {
  label: string;
  signal: string;
  risk: string;
};

export type ProspectingReport = {
  generatedAt: string;
  prospect: {
    businessName: string;
    category: string;
    market: string;
    website: string;
  };
  score: number;
  scoreLabel: string;
  recommendation: string;
  executiveSummary: string[];
  fastWins: string[];
  scorecard: ReportScore[];
  evidence: ReportFinding[];
  buyerQuestions: string[];
  revenueRisks: string[];
  cleanupPlan: Array<{
    phase: string;
    title: string;
    work: string;
  }>;
};

export const defaultProspectingReport: ProspectingReport = {
  generatedAt: "April 21, 2026",
  prospect: {
    businessName: "Springfield Home Services Co.",
    category: "Local service business",
    market: "Springfield, MO",
    website: "example.com",
  },
  score: 58,
  scoreLabel: "Visible, but not recommendation-ready",
  recommendation:
    "The business has enough public presence to be found, but the signals are not organized well enough for AI search, maps, and buyers to confidently understand why it should be recommended first.",
  executiveSummary: [
    "Service language is present, but not packaged into clean buyer-intent answers.",
    "The website does not give machines enough structured context about services, service area, proof, and next action.",
    "The contact path exists, but the handoff is not strong enough for high-intent buyers who want a fast answer.",
  ],
  fastWins: [
    "Rewrite the homepage promise around the real service, customer, and market.",
    "Add direct FAQs for the questions buyers ask AI before they call.",
    "Connect reviews, service pages, Google profile language, and contact path into one consistent public story.",
  ],
  scorecard: [
    {
      label: "Entity clarity",
      score: 64,
      status: "watch",
      finding: "The business can be identified, but the strongest category and market fit are not stated cleanly enough.",
      priority: "Clarify who the company serves, what it does, and where it operates.",
    },
    {
      label: "Service clarity",
      score: 52,
      status: "gap",
      finding: "Service intent is spread across general copy instead of organized around the problems buyers search for.",
      priority: "Create plain-language service blocks and problem-specific answers.",
    },
    {
      label: "Service-area clarity",
      score: 60,
      status: "watch",
      finding: "The market is visible, but city, nearby-area, and response expectations need stronger context.",
      priority: "Add a concise service-area explanation and local examples.",
    },
    {
      label: "Crawlability",
      score: 70,
      status: "strong",
      finding: "The basic site surface appears reachable, but the content structure is too thin to carry the full story.",
      priority: "Keep the site crawlable while improving page hierarchy and internal links.",
    },
    {
      label: "Structured data",
      score: 38,
      status: "gap",
      finding: "There is not enough machine-readable context for services, FAQs, organization, and local business details.",
      priority: "Add LocalBusiness, Service, FAQ, and breadcrumb schema where appropriate.",
    },
    {
      label: "Profile alignment",
      score: 54,
      status: "gap",
      finding: "Website language and public profile signals are not doing enough to reinforce each other.",
      priority: "Align categories, services, descriptions, photos, and review themes.",
    },
    {
      label: "Reputation proof",
      score: 66,
      status: "watch",
      finding: "Trust signals exist, but they need to be connected to specific services and buyer concerns.",
      priority: "Surface specific reviews, proof points, and service outcomes on the site.",
    },
    {
      label: "Conversion path",
      score: 55,
      status: "gap",
      finding: "A buyer can contact the business, but the next step does not feel fast, guided, or trackable.",
      priority: "Add a stronger estimate path, AI assistant, missed-call recovery, or booking handoff.",
    },
  ],
  evidence: [
    {
      label: "What AI can see",
      signal: "Business name, general category, service language, local intent, and basic contact path.",
      risk: "The story is not organized enough for a confident recommendation when a competitor has clearer signals.",
    },
    {
      label: "What buyers compare",
      signal: "Reviews, service fit, response speed, local proof, project type, and how easy it is to get help.",
      risk: "A buyer may find the business but still move to a clearer competitor before calling.",
    },
    {
      label: "What is missing",
      signal: "Direct FAQs, structured service context, stronger service-area language, and a cleaner conversion handoff.",
      risk: "AI systems and buyers have to infer too much from thin or scattered information.",
    },
  ],
  buyerQuestions: [
    "Who is the best company near me for this exact problem?",
    "Can this business help today, and what area do they actually serve?",
    "What do customers say about this service, not just the company overall?",
    "What is the fastest way to ask a question, book, or request an estimate?",
  ],
  revenueRisks: [
    "Lost recommendation moments when AI cannot explain the business clearly.",
    "Lost form fills when buyers do not see a fast next step.",
    "Lost calls when reviews and service proof are not connected to buying intent.",
    "Lost follow-up when leads are not routed into a clean response system.",
  ],
  cleanupPlan: [
    {
      phase: "Days 1-7",
      title: "Signal cleanup",
      work: "Tighten the homepage promise, service labels, market language, Google profile alignment, and contact path.",
    },
    {
      phase: "Days 8-14",
      title: "AI-ready proof",
      work: "Add direct FAQs, schema, review proof, service summaries, and answer-ready copy around real buyer questions.",
    },
    {
      phase: "Days 15-30",
      title: "Lead capture and handoff",
      work: "Connect the cleaned-up visibility surface to forms, booking, CRM notes, missed-call recovery, and follow-up.",
    },
  ],
};

type ProspectingReportRoute = {
  slug: string;
  params: Record<string, string>;
};

export const prospectingReportRoutes: ProspectingReportRoute[] = [
  {
    slug: "great-oak-concrete",
    params: {
      business: "Great Oak Concrete",
      category: "Concrete",
      market: "Springfield, MO",
      website: "https://great-oak-concrete.com/",
      report: "ai-visibility-report",
      cid: "fmMHdqtnu1WDosbMbjyL",
      contact_id: "fmMHdqtnu1WDosbMbjyL",
      oid: "ZNyQLNs7yYofQxjerqBx",
      opportunity_id: "ZNyQLNs7yYofQxjerqBx",
      campaign: "ai_visibility_report",
      batch: "20260506",
      utm_source: "ghl",
      utm_medium: "sms",
      utm_campaign: "ai_visibility_report",
      utm_content: "sms_pilot_20260506",
    },
  },
  {
    slug: "springfield-mo-tree-service",
    params: {
      business: "Springfield MO Tree Service",
      category: "Tree Service",
      market: "Springfield, MO",
      website: "https://springfieldmotree.com/",
      report: "ai-visibility-report",
      cid: "7Ui2SxJR7t2mGUm0REQ2",
      contact_id: "7Ui2SxJR7t2mGUm0REQ2",
      oid: "CrlpR92hIIDlxaEENRZj",
      opportunity_id: "CrlpR92hIIDlxaEENRZj",
      campaign: "ai_visibility_report",
      batch: "20260506",
      utm_source: "ghl",
      utm_medium: "sms",
      utm_campaign: "ai_visibility_report",
      utm_content: "sms_pilot_20260506",
    },
  },
  {
    slug: "jags-lawn-landscape",
    params: {
      business: "Jag's Lawn & Landscape",
      category: "Lawn care and landscaping",
      market: "Springfield, MO",
      website: "https://www.jagslawn.com/",
      report: "ai-visibility-report",
      cid: "eAI2jpTo4wcMgAdSHxL1",
      contact_id: "eAI2jpTo4wcMgAdSHxL1",
      oid: "B2tGx52VysqqGgCG8ES0",
      opportunity_id: "B2tGx52VysqqGgCG8ES0",
      campaign: "ai_visibility_report",
      batch: "20260506",
      utm_source: "ghl",
      utm_medium: "sms",
      utm_campaign: "ai_visibility_report",
      utm_content: "sms_pilot_20260506",
    },
  },
  {
    slug: "handyman-services-near-me-llc",
    params: {
      business: "Handyman Services Near Me LLC",
      category: "Handyman services",
      market: "Springfield, MO",
      website: "https://www.handymanservicesmo.com/",
      report: "ai-visibility-report",
      cid: "aGML7rnpfRuTWgoQZEHt",
      contact_id: "aGML7rnpfRuTWgoQZEHt",
      oid: "AfqFez9YWoIIWrHohw4B",
      opportunity_id: "AfqFez9YWoIIWrHohw4B",
      campaign: "ai_visibility_report",
      batch: "20260506",
      utm_source: "ghl",
      utm_medium: "sms",
      utm_campaign: "ai_visibility_report",
      utm_content: "sms_pilot_20260506",
    },
  },
  {
    slug: "greene-county-garage-doors",
    params: {
      business: "Greene County Garage Doors",
      category: "Garage Doors",
      market: "Springfield, MO",
      website: "https://www.greenecountygaragedoors.com/contact-us",
      report: "ai-visibility-report",
      cid: "2L8p16fYtJJiPOlP9sAH",
      contact_id: "2L8p16fYtJJiPOlP9sAH",
      oid: "s9SZVkLOrpRzXvUncmMI",
      opportunity_id: "s9SZVkLOrpRzXvUncmMI",
      campaign: "ai_visibility_report",
      batch: "20260506",
      utm_source: "ghl",
      utm_medium: "sms",
      utm_campaign: "ai_visibility_report",
      utm_content: "sms_pilot_20260506",
    },
  },
];

export function getProspectingReportRoute(slug?: string) {
  return prospectingReportRoutes.find(report => report.slug === slug);
}

export function searchParamsFromReportRoute(slug?: string) {
  const route = getProspectingReportRoute(slug);
  if (!route) return null;
  return new URLSearchParams(route.params);
}

function clampScore(value: number) {
  if (Number.isNaN(value)) return defaultProspectingReport.score;
  return Math.min(100, Math.max(0, Math.round(value)));
}

function getParam(params: URLSearchParams, key: string, fallback: string) {
  const value = params.get(key)?.trim();
  return value ? value : fallback;
}

function labelForScore(score: number) {
  if (score >= 80) return "Strong public signals with room to tighten";
  if (score >= 64) return "Visible, but needs stronger recommendation proof";
  if (score >= 45) return "Visible, but not recommendation-ready";
  return "High-risk visibility gap";
}

export function createProspectingReport(params: URLSearchParams): ProspectingReport {
  const score = clampScore(Number(params.get("score") ?? defaultProspectingReport.score));
  return {
    ...defaultProspectingReport,
    generatedAt: getParam(params, "date", defaultProspectingReport.generatedAt),
    prospect: {
      businessName: getParam(params, "business", defaultProspectingReport.prospect.businessName),
      category: getParam(params, "category", defaultProspectingReport.prospect.category),
      market: getParam(params, "market", defaultProspectingReport.prospect.market),
      website: getParam(params, "website", defaultProspectingReport.prospect.website),
    },
    score,
    scoreLabel: getParam(params, "label", labelForScore(score)),
  };
}
