import { industries, resourceArticles, servicePages } from "@/content/site";

export type TopicalPageType =
  | "homepage"
  | "pillar"
  | "subpillar"
  | "commercial"
  | "proof"
  | "support"
  | "conversion";

export type TopicalPage = {
  path: string;
  label: string;
  title: string;
  pageType: TopicalPageType;
  searchIntent: string;
  topicalRole: string;
  conversionGoal: string;
  parentPath?: string;
  relatedPaths: string[];
  includeInLlms?: boolean;
};

const coreTopicalPages: TopicalPage[] = [
  {
    path: "/",
    label: "Home",
    title: "Civive Unlimited",
    pageType: "homepage",
    searchIntent: "Brand, offer, and service overview",
    topicalRole:
      "Defines the entity, audience, primary AI Search Visibility Audit offer, and next step.",
    conversionGoal:
      "Move qualified local service businesses toward the audit request.",
    relatedPaths: [
      "/ai-search-audit",
      "/visibility-system",
      "/services/ai-search-visibility-audit",
      "/services/google-business-profile-optimization",
      "/services/ai-receptionist",
      "/services/missed-call-recovery",
      "/services/review-automation",
      "/services/website-design-service-businesses",
      "/services/crm-lead-follow-up",
      "/service-areas/springfield-mo",
      "/civive-os",
      "/civive-os-offer",
      "/ai-receptionist",
      "/resources/chatgpt-business-recommendations-local-service-businesses",
      "/resources/ai-search-implementation-plan-service-businesses",
      "/industries",
      "/contact",
    ],
  },
  {
    path: "/ai-search-audit",
    label: "AI Search Audit",
    title: "AI Search Visibility Audit",
    pageType: "commercial",
    searchIntent:
      "Buyer intent for AI search, AEO, local SEO, and visibility audit help",
    topicalRole:
      "Primary commercial entry point for diagnosing visibility, entity, schema, and lead-capture gaps.",
    conversionGoal: "Get the visitor to request an audit.",
    parentPath: "/",
    relatedPaths: [
      "/resources/what-does-an-ai-search-audit-include",
      "/resources/ai-search-audit-cost",
      "/resources/best-ai-search-audit-for-service-businesses",
      "/resources/chatgpt-business-recommendations-local-service-businesses",
      "/resources/google-business-profile-ai-search-readiness",
      "/resources/schema-for-ai-search-local-businesses",
      "/resources/ai-search-audit-patterns-by-industry",
      "/visibility-system",
      "/services/ai-search-visibility-audit",
      "/services/google-business-profile-optimization",
      "/service-areas/springfield-mo",
      "/contact",
      "/industries",
    ],
  },
  {
    path: "/visibility-system",
    label: "Visibility System",
    title: "AI Search Visibility System",
    pageType: "pillar",
    searchIntent:
      "Solution intent for improving AI search and local recommendation readiness",
    topicalRole:
      "Explains Civive's cleanup framework from public signals to lead capture.",
    conversionGoal:
      "Help the visitor understand the implementation path after the audit.",
    parentPath: "/",
    relatedPaths: [
      "/ai-search-audit",
      "/resources",
      "/resources/ai-search-visibility-service-page-template",
      "/resources/schema-for-ai-search-local-businesses",
      "/resources/location-pages-ai-search-without-doorway-pages",
      "/civive-os",
      "/civive-os-offer",
      "/ai-receptionist",
      "/contact",
      "/service-areas/springfield-mo",
    ],
  },
  {
    path: "/industries",
    label: "Industries",
    title: "Industries for AI Search Visibility",
    pageType: "pillar",
    searchIntent: "Industry-fit and vertical-specific AI visibility research",
    topicalRole: "Parent hub for industry-specific AI search visibility pages.",
    conversionGoal:
      "Route visitors to the industry page that best matches their business.",
    parentPath: "/",
    relatedPaths: [
      "/ai-search-audit",
      "/visibility-system",
      "/resources/ai-search-audit-patterns-by-industry",
      "/resources/ai-search-audit-for-home-service-businesses",
      "/resources/location-pages-ai-search-without-doorway-pages",
      "/resources/ai-search-implementation-plan-service-businesses",
      "/ai-receptionist",
      "/service-areas/springfield-mo",
      "/civive-os",
      "/resources",
      "/contact",
    ],
  },
  {
    path: "/faq",
    label: "FAQ",
    title: "AI Search Visibility FAQ",
    pageType: "support",
    searchIntent:
      "Question intent around AI search, local SEO, reviews, schema, and FAQs",
    topicalRole:
      "Answers objections and supports commercial audit and visibility-system pages.",
    conversionGoal:
      "Reduce uncertainty and move qualified visitors toward the audit.",
    parentPath: "/resources",
    relatedPaths: [
      "/ai-search-audit",
      "/visibility-system",
      "/resources/ai-search-audit-patterns-by-industry",
      "/resources",
      "/contact",
    ],
  },
  {
    path: "/resources",
    label: "Resources",
    title: "AI Search Resources and Insights",
    pageType: "pillar",
    searchIntent:
      "Educational intent for AI search, local visibility, schema, and answer-engine formatting",
    topicalRole:
      "Content hub for future articles, videos, founder notes, and practical checklists.",
    conversionGoal:
      "Build trust and direct readers to the audit or public build.",
    parentPath: "/",
    relatedPaths: [
      "/build-in-public",
      "/faq",
      "/visibility-system",
      "/ai-search-audit",
    ],
  },
  {
    path: "/build-in-public",
    label: "Build in Public",
    title: "Build in Public",
    pageType: "proof",
    searchIntent: "Proof, process, and founder-led build documentation intent",
    topicalRole:
      "Shows Civive applying its visibility system to itself without fake proof.",
    conversionGoal:
      "Turn transparency into trust and route serious buyers toward the audit.",
    parentPath: "/resources",
    relatedPaths: [
      "/resources",
      "/visibility-system",
      "/prospecting-report",
      "/contact",
    ],
  },
  {
    path: "/prospecting-report",
    label: "Prospecting Report",
    title: "AI Search Prospecting Report",
    pageType: "proof",
    searchIntent:
      "Example and sales enablement intent for AI search audit reporting",
    topicalRole:
      "Demonstrates how Civive frames public visibility gaps for prospects.",
    conversionGoal:
      "Help prospects understand the audit output and ask for their own.",
    parentPath: "/build-in-public",
    relatedPaths: [
      "/ai-search-audit",
      "/visibility-system",
      "/resources",
      "/contact",
    ],
  },
  {
    path: "/ai-receptionist",
    label: "AI Receptionist",
    title: "AI Receptionist for Service Businesses",
    pageType: "commercial",
    searchIntent:
      "Buyer intent for AI receptionist, missed-call recovery, and lead response systems",
    topicalRole:
      "Positions lead response as the downstream conversion layer after visibility.",
    conversionGoal:
      "Move visitors from visibility interest into lead-capture and receptionist implementation.",
    parentPath: "/visibility-system",
    relatedPaths: [
      "/ai-search-audit",
      "/visibility-system",
      "/civive-os",
      "/civive-os-offer",
      "/resources/ai-search-audit-for-home-service-businesses",
      "/resources/ai-search-implementation-plan-service-businesses",
      "/resources/best-ai-search-audit-for-service-businesses",
      "/contact",
    ],
  },
  {
    path: "/civive-os",
    label: "CiviveOS",
    title: "CiviveOS",
    pageType: "commercial",
    searchIntent:
      "Product and solution intent for lead response and AI front desk software",
    topicalRole:
      "Explains the operating system layer for lead capture, booking, follow-up, and AI front desk support.",
    conversionGoal: "Move visitors toward the offer or contact path.",
    parentPath: "/visibility-system",
    relatedPaths: [
      "/civive-os-offer",
      "/ai-receptionist",
      "/visibility-system",
      "/ai-search-audit",
      "/resources",
      "/resources/ai-search-implementation-plan-service-businesses",
      "/contact",
    ],
  },
  {
    path: "/civive-os-offer",
    label: "CiviveOS Offer",
    title: "CiviveOS Pricing and Plans",
    pageType: "commercial",
    searchIntent: "Pricing, package, and buying intent for CiviveOS",
    topicalRole:
      "Clarifies the commercial offer for lead response, booking, reviews, follow-up, and AI front desk support.",
    conversionGoal:
      "Convert qualified visitors into a plan discussion or audit request.",
    parentPath: "/civive-os",
    relatedPaths: [
      "/civive-os",
      "/ai-receptionist",
      "/contact",
      "/ai-search-audit",
      "/resources/ai-search-audit-cost",
      "/resources/ai-search-implementation-plan-service-businesses",
    ],
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact Civive Unlimited",
    pageType: "conversion",
    searchIntent: "Contact, booking, and audit request intent",
    topicalRole:
      "Primary conversion page for audit and implementation requests.",
    conversionGoal:
      "Capture a qualified lead with enough context for follow-up.",
    parentPath: "/",
    relatedPaths: [
      "/ai-search-audit",
      "/resources/what-does-an-ai-search-audit-include",
      "/resources/google-business-profile-ai-search-readiness",
      "/resources/ai-search-visibility-service-page-template",
      "/resources/ai-search-implementation-plan-service-businesses",
      "/visibility-system",
      "/ai-receptionist",
      "/civive-os",
    ],
  },
];

const serviceTopicalPages: TopicalPage[] = servicePages.map(service => ({
  path: `/services/${service.slug}`,
  label: service.name,
  title: service.name,
  pageType: "commercial",
  searchIntent: `${service.name} buyer intent for local service businesses`,
  topicalRole: `Commercial service page explaining Civive's ${service.name.toLowerCase()} work, local fit, deliverables, and related services.`,
  conversionGoal: "Move qualified service business owners toward an audit request or call.",
  parentPath: "/",
  relatedPaths: Array.from(
    new Set([
      "/",
      "/ai-search-audit",
      "/service-areas/springfield-mo",
      ...service.relatedSlugs.map(slug => `/services/${slug}`),
      "/contact",
    ])
  ),
}));

const serviceAreaTopicalPages: TopicalPage[] = [
  {
    path: "/service-areas/springfield-mo",
    label: "Springfield, MO",
    title: "Springfield Service Businesses",
    pageType: "commercial",
    searchIntent:
      "Local buyer intent for AI search visibility, Google Business Profile optimization, CRM automation, missed-call recovery, review automation, and lead follow-up in Springfield, MO",
    topicalRole:
      "Local landing page tying Civive's service pages to Springfield, Missouri and nearby service businesses.",
    conversionGoal:
      "Move Springfield service business owners toward the AI Search Visibility Audit or a call.",
    parentPath: "/",
    relatedPaths: [
      "/",
      "/ai-search-audit",
      "/services/ai-search-visibility-audit",
      "/services/google-business-profile-optimization",
      "/services/ai-receptionist",
      "/services/missed-call-recovery",
      "/services/review-automation",
      "/services/website-design-service-businesses",
      "/services/crm-lead-follow-up",
      "/contact",
    ],
  },
];

const industryTopicalPages: TopicalPage[] = industries.map(industry => ({
  path: `/industries/${industry.slug}`,
  label: industry.name,
  title: `${industry.name} AI Search Visibility`,
  pageType: "subpillar",
  searchIntent: `${industry.name} AI search visibility and local service business readiness`,
  topicalRole: `Explains the buyer questions, trust signals, missing assets, and cleanup path for ${industry.name} businesses.`,
  conversionGoal: `Move ${industry.shortName} operators toward an AI Search Visibility Audit.`,
  parentPath: "/industries",
  relatedPaths: [
    "/ai-search-audit",
    "/visibility-system",
    "/resources/ai-search-audit-patterns-by-industry",
    "/resources/ai-search-audit-for-home-service-businesses",
    "/resources/google-business-profile-ai-search-readiness",
    "/resources/ai-search-implementation-plan-service-businesses",
    "/ai-receptionist",
    "/civive-os",
    "/industries",
    "/contact",
  ],
}));

function stripBrand(title: string) {
  return title.replace(/\s*\|\s*Civive Unlimited\s*$/i, "").trim();
}

const articleTopicalPages: TopicalPage[] = resourceArticles.map(article => ({
  path: `/resources/${article.slug}`,
  label: stripBrand(article.title),
  title: stripBrand(article.title),
  pageType: "support",
  searchIntent: article.intent,
  topicalRole: `Supports the AI Search Visibility Audit and visibility-system pillar with ${article.eyebrow.toLowerCase()} intent content.`,
  conversionGoal:
    "Move readers from education into an audit request, visibility-system review, or contact path.",
  parentPath: "/resources",
  relatedPaths: Array.from(
    new Set([
      ...article.relatedLinks.map(link => link.href),
      "/resources",
      "/ai-search-audit",
      "/visibility-system",
      "/contact",
    ])
  ).filter(path => path !== `/resources/${article.slug}`),
}));

export const topicalPages: TopicalPage[] = [
  ...coreTopicalPages,
  ...serviceTopicalPages,
  ...serviceAreaTopicalPages,
  ...industryTopicalPages,
  ...articleTopicalPages,
];

const topicalPageByPath = new Map(topicalPages.map(page => [page.path, page]));

export function getTopicalPage(path: string) {
  const normalizedPath = path === "" ? "/" : path.replace(/\/$/, "") || "/";
  return topicalPageByPath.get(normalizedPath);
}

export function getBreadcrumbsForPath(path: string) {
  const currentPage = getTopicalPage(path);
  if (!currentPage || currentPage.path === "/") return [];

  const breadcrumbs: TopicalPage[] = [];
  let cursor: TopicalPage | undefined = currentPage;
  const seen = new Set<string>();

  while (cursor && !seen.has(cursor.path)) {
    breadcrumbs.unshift(cursor);
    seen.add(cursor.path);
    cursor = cursor.parentPath ? getTopicalPage(cursor.parentPath) : undefined;
  }

  const homePage = getTopicalPage("/");
  if (homePage && breadcrumbs[0]?.path !== "/") {
    breadcrumbs.unshift(homePage);
  }

  return breadcrumbs;
}

export function getRelatedPagesForPath(path: string) {
  const currentPage = getTopicalPage(path);
  if (!currentPage) return [];

  return currentPage.relatedPaths
    .map(relatedPath => getTopicalPage(relatedPath))
    .filter((page): page is TopicalPage => Boolean(page));
}
