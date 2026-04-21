import { faqs, industries, pageMeta, site } from "@/content/site";

export type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  schemaKind?: "webpage" | "faq" | "service" | "industry";
  serviceName?: string;
  faqItems?: Array<{ question: string; answer: string }>;
};

const legalMeta = {
  privacy: {
    title: "Privacy Policy | Civive Unlimited",
    description:
      "Privacy Policy for Civive Unlimited, including website, audit request, booking, email, phone, CRM, and SMS communication practices.",
  },
  terms: {
    title: "Terms of Service | Civive Unlimited",
    description:
      "Terms of Service for using the Civive Unlimited website, requesting audits, booking appointments, and engaging Civive services.",
  },
};

export const prerenderRoutes: PrerenderRoute[] = [
  { path: "/", ...pageMeta.home },
  {
    path: "/ai-search-audit",
    ...pageMeta.audit,
    schemaKind: "service",
    serviceName: site.primaryOffer,
  },
  {
    path: "/prospecting-report",
    ...pageMeta.prospectingReport,
    schemaKind: "service",
    serviceName: "AI Search Prospecting Report",
  },
  {
    path: "/visibility-system",
    ...pageMeta.system,
    schemaKind: "service",
    serviceName: "AI Search Visibility System",
  },
  {
    path: "/civive-os",
    ...pageMeta.civiveOs,
    schemaKind: "service",
    serviceName: "Civive OS",
  },
  {
    path: "/civive-os-offer",
    ...pageMeta.civiveOsOffer,
    schemaKind: "service",
    serviceName: "Civive OS Plans",
  },
  { path: "/industries", ...pageMeta.industries },
  ...industries.map((industry) => ({
    path: `/industries/${industry.slug}`,
    title: `${industry.name} AI Search Visibility | Civive Unlimited`,
    description: `AI Search Readiness Audit and visibility signal cleanup for ${industry.name} businesses that need clearer services, trust signals, reviews, FAQs, schema, and lead capture.`,
    schemaKind: "industry" as const,
    serviceName: `${industry.name} AI Search Visibility Audit`,
    faqItems: industry.faqs,
  })),
  {
    path: "/faq",
    ...pageMeta.faq,
    schemaKind: "faq",
    faqItems: faqs,
  },
  { path: "/resources", ...pageMeta.resources, type: "article" },
  { path: "/build-in-public", ...pageMeta.build, type: "article" },
  {
    path: "/contact",
    ...pageMeta.contact,
    schemaKind: "service",
    serviceName: site.primaryOffer,
  },
  {
    path: "/ai-receptionist",
    ...pageMeta.receptionist,
    schemaKind: "service",
    serviceName: "AI Receptionist for Service Businesses",
  },
  { path: "/privacy", ...legalMeta.privacy },
  { path: "/terms", ...legalMeta.terms },
];

export const legalPageMeta = legalMeta;
