import {
  aiAgencySpringfieldFaqs,
  aiReceptionistFaqs,
  visibilityReportFaqs,
  contactPageFaqs,
  civiveOsFaqs,
  civiveOsOfferFaqs,
  civiveOsOfferSchemaOffers,
  buildLog,
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
import { prospectingReportRoutes } from "@/content/prospectingReport";

export type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  schemaKind?: "webpage" | "faq" | "service" | "article";
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
  dependencies?: string[];
  proficiencies?: string[];
  articleSections?: Array<{
    eyebrow?: string;
    title: string;
    copy: string;
    bullets?: string[];
  }>;
};

const editorialSchemaDependencies = [
  "Schema JSON-LD",
  "Vercel Analytics",
  "LLM Scraping Engines",
];

const editorialSchemaProficiencies = [
  "Generative Engine Optimization",
  "AI Search Engine Optimization",
];

const legalMeta = {
  privacy: {
    title: "Privacy Policy | Civive Unlimited",
    description:
      "Privacy Policy for Civive Unlimited, including website, visibility report request, booking, email, phone, CRM, and SMS communication practices.",
  },
  terms: {
    title: "Terms of Service | Civive Unlimited",
    description:
      "Terms of Service for using the Civive Unlimited website, requesting reports, booking appointments, and engaging Civive services.",
  },
};

export const prerenderRoutes: PrerenderRoute[] = [
  { path: "/", ...pageMeta.home, faqItems: homepageFaqs },
  {
    path: "/ai-agency-springfield-mo",
    ...pageMeta.aiAgencySpringfield,
    schemaKind: "service",
    serviceName: "AI Agency Services for Springfield Service Businesses",
    serviceType: "AI agency services",
    faqItems: aiAgencySpringfieldFaqs,
    itemList: [
      {
        name: "AI agency services",
        path: "/ai-agency-springfield-mo",
        description:
          "Local AI agency services for Springfield service businesses that need visibility, automation, receptionist setup, follow up, and booking support.",
      },
      {
        name: "AI automation",
        path: "/services/crm-lead-follow-up",
        description:
          "AI automation for lead routing, reminders, estimate follow up, CRM movement, and reactivation.",
      },
      {
        name: "AI search visibility",
        path: "/ai-search-report",
        description:
          "AI search visibility cleanup for business facts, services, Google profile alignment, schema, and lead capture.",
      },
      {
        name: "AI receptionist setup",
        path: "/services/ai-receptionist",
        description:
          "AI receptionist setup for intake, qualification, routing, booking support, CRM notes, and safe handoff rules.",
      },
      {
        name: "Missed-call recovery",
        path: "/services/missed-call-recovery",
        description:
          "Missed-call recovery and text-back automation for service businesses that need faster response.",
      },
      {
        name: "CRM lead follow-up automation",
        path: "/services/crm-lead-follow-up",
        description:
          "CRM setup and lead follow-up automation for service businesses that need cleaner pipelines and reminders.",
      },
      {
        name: "Google Business Profile optimization",
        path: "/services/google-business-profile-optimization",
        description:
          "Google Business Profile optimization for categories, services, descriptions, photos, reviews, and local consistency.",
      },
      {
        name: "Website design for service businesses",
        path: "/services/website-design-service-businesses",
        description:
          "Website design for local service businesses that need clearer services, trust, contact paths, and AI-readable structure.",
      },
      {
        name: "Review automation",
        path: "/services/review-automation",
        description:
          "Review automation and reputation workflows for service businesses that need stronger public trust signals.",
      },
    ],
  },
  {
    path: "/ai-search-report",
    ...pageMeta.visibilityReport,
    schemaKind: "service",
    serviceName: site.primaryOffer,
    faqItems: visibilityReportFaqs,
  },
  {
    path: "/ai-search-trust-audit",
    ...pageMeta.aiSearchTrustAudit,
    schemaKind: "service",
    serviceName: "AI Search and Trust Leak Audit",
    serviceType: "Public-source visibility and trust audit",
    offerCatalog: [
      {
        name: "AI Search and Trust Leak Audit",
        price: "99",
        priceCurrency: "USD",
        url: "https://buy.stripe.com/aFa9AU4Jz7ZQ1Aebgpebu0K",
        description:
          "A short public-source audit covering website clarity, profile signals, reviews, booking path, service area, and AI search readability.",
      },
    ],
  },
  {
    path: "/free-visibility-report",
    ...pageMeta.freeVisibilityReport,
    schemaKind: "service",
    serviceName: "Free Visibility Report",
  },
  {
    path: "/prospecting-report",
    ...pageMeta.prospectingReport,
    schemaKind: "service",
    serviceName: "AI Search Prospecting Report",
  },
  ...prospectingReportRoutes.map(report => ({
    path: `/report/${report.slug}`,
    title: `${report.params.business} AI Visibility Report | Civive Unlimited`,
    description: `AI Visibility Report for ${report.params.business}, a ${report.params.category} business in ${report.params.market}, covering local visibility, AI search, reviews, maps, directories, and lead-capture signals.`,
    schemaKind: "service" as const,
    serviceName: `${report.params.business} AI Visibility Report`,
  })),
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
    description: `Visibility Report and visibility signal cleanup for ${industry.name} businesses that need clearer services, trust signals, reviews, FAQs, schema, and lead capture.`,
    schemaKind: "service" as const,
    serviceName: `${industry.name} AI Search Visibility`,
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
    dependencies: editorialSchemaDependencies,
    proficiencies: editorialSchemaProficiencies,
    articleSections: article.sections,
  })),
  {
    path: "/build-in-public",
    ...pageMeta.build,
    type: "article",
    schemaKind: "article",
    dependencies: editorialSchemaDependencies,
    proficiencies: editorialSchemaProficiencies,
    articleSections: buildLog.map(log => ({
      eyebrow: log.date,
      title: log.title,
      copy: log.copy,
    })),
  },
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
