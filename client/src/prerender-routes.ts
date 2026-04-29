import {
  aiReceptionistFaqs,
  auditPageFaqs,
  contactPageFaqs,
  civiveOsFaqs,
  civiveOsOfferFaqs,
  civiveOsOfferSchemaOffers,
  faqs,
  getIndustryFaqs,
  homepageFaqs,
  industries,
  industryHubFaqs,
  pageMeta,
  resourceArticles,
  servicePages,
  site,
  visibilitySystemFaqs,
} from "@/content/site";

export type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  schemaKind?: "webpage" | "faq" | "service" | "industry" | "article";
  serviceName?: string;
  serviceType?: string;
  faqItems?: Array<{ question: string; answer: string }>;
  offerCatalog?: Array<{
    name: string;
    price: string;
    priceCurrency: string;
    url: string;
    description: string;
  }>;
  itemList?: Array<{
    name: string;
    path: string;
    description: string;
  }>;
  imagePath?: string;
  robots?: string;
  datePublished?: string;
  lastModified?: string;
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
  { path: "/", ...pageMeta.home, faqItems: homepageFaqs },
  {
    path: "/ai-search-audit",
    ...pageMeta.audit,
    schemaKind: "service",
    serviceName: site.primaryOffer,
    faqItems: auditPageFaqs,
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
    faqItems: visibilitySystemFaqs,
  },
  {
    path: "/civive-os",
    ...pageMeta.civiveOs,
    schemaKind: "service",
    serviceName: "CiviveOS",
    faqItems: civiveOsFaqs,
  },
  {
    path: "/civive-os-offer",
    ...pageMeta.civiveOsOffer,
    schemaKind: "service",
    serviceName: "CiviveOS Plans",
    faqItems: civiveOsOfferFaqs,
    offerCatalog: civiveOsOfferSchemaOffers,
  },
  {
    path: "/industries",
    ...pageMeta.industries,
    schemaKind: "faq",
    faqItems: industryHubFaqs,
    itemList: industries.map(industry => ({
      name: industry.name,
      path: `/industries/${industry.slug}`,
      description: industry.intro,
    })),
  },
  ...industries.map(industry => ({
    path: `/industries/${industry.slug}`,
    title: `${industry.name} AI Search Visibility | Civive Unlimited`,
    description: `AI Search Visibility Audit and visibility signal cleanup for ${industry.name} businesses that need clearer services, trust signals, reviews, FAQs, schema, and lead capture.`,
    schemaKind: "industry" as const,
    serviceName: `${industry.name} AI Search Visibility Audit`,
    faqItems: getIndustryFaqs(industry),
  })),
  ...servicePages.map(service => ({
    path: `/services/${service.slug}`,
    title: service.meta.title,
    description: service.meta.description,
    schemaKind: "service" as const,
    serviceName: service.serviceName,
    serviceType: service.serviceType,
  })),
  {
    path: "/service-areas/springfield-mo",
    ...pageMeta.springfield,
    schemaKind: "service",
    serviceName:
      "AI Search Visibility and Lead Automation for Springfield Service Businesses",
    serviceType: "AI Search Visibility and Lead Automation",
    itemList: servicePages.map(service => ({
      name: service.name,
      path: `/services/${service.slug}`,
      description: service.meta.description,
    })),
  },
  {
    path: "/faq",
    ...pageMeta.faq,
    schemaKind: "faq",
    faqItems: faqs,
  },
  { path: "/resources", ...pageMeta.resources },
  ...resourceArticles.map(article => ({
    path: `/resources/${article.slug}`,
    title: article.title,
    description: article.description,
    type: "article" as const,
    schemaKind: "article" as const,
    faqItems: article.faqs,
    datePublished: article.publishedDate,
    lastModified: article.lastModified,
  })),
  { path: "/build-in-public", ...pageMeta.build },
  {
    path: "/contact",
    ...pageMeta.contact,
    schemaKind: "service",
    serviceName: site.primaryOffer,
    faqItems: contactPageFaqs,
  },
  {
    path: "/ai-receptionist",
    ...pageMeta.receptionist,
    schemaKind: "service",
    serviceName: "AI Receptionist for Service Businesses",
    faqItems: aiReceptionistFaqs,
  },
  { path: "/privacy", ...legalMeta.privacy },
  { path: "/terms", ...legalMeta.terms },
];

export const legalPageMeta = legalMeta;
