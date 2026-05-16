import { seoConfig } from "@/content/seo";

export const site = {
  name: seoConfig.brandName,
  legalName: seoConfig.legalName,
  domain: seoConfig.canonicalDomain,
  website: seoConfig.website,
  email: seoConfig.email,
  phone: seoConfig.phone,
  phoneE164: seoConfig.phoneE164,
  phoneHref: seoConfig.phoneHref,
  address: seoConfig.address,
  addressLines: seoConfig.address.lines,
  addressDisplay: seoConfig.address.display,
  location: seoConfig.location.label,
  serviceArea: seoConfig.areaServed,
  founder: seoConfig.founder,
  primaryOffer: "Visibility Report",
  visibilityReportRequestUrl:
    "https://get.civiveunlimited.com/ai-search-audit-2338",
  reviewBookingUrl: "https://get.civiveunlimited.com/book-audit-review-4694",
  visibilityReportThankYouUrl:
    "https://get.civiveunlimited.com/audit-requested-7111",
};

export const areasServed = [
  "Springfield, MO",
  "Missouri service businesses",
  "HVAC companies",
  "Plumbers",
  "Cleaners",
  "Roofers",
  "Real estate professionals",
  "Landscapers",
  "Med spas",
  "Salons",
  "Pest control companies",
  "Auto repair shops",
  "Restoration companies",
  "Electricians",
];

export type CoreService = {
  name: string;
  description: string;
  serviceType: string;
  path: string;
};

export const coreServices: CoreService[] = [
  {
    name: "Visibility Report",
    serviceType: "Visibility Report",
    path: "/services/ai-search-visibility-audit",
    description:
      "A plain-English report of the public signals that help Google, Maps, ChatGPT, Gemini, Perplexity, and buyers understand a local service business.",
  },
  {
    name: "Google Business Profile Optimization",
    serviceType: "Google Business Profile Optimization",
    path: "/services/google-business-profile-optimization",
    description:
      "Google Business Profile cleanup for categories, services, descriptions, booking paths, website alignment, and local trust signals.",
  },
  {
    name: "AI Receptionist Setup",
    serviceType: "AI Receptionist Setup",
    path: "/services/ai-receptionist",
    description:
      "AI receptionist setup for intake, qualification, routing, booking support, CRM notes, and safe handoff rules.",
  },
  {
    name: "Missed Call Text Back",
    serviceType: "Missed Call Text Back",
    path: "/services/missed-call-recovery",
    description:
      "Missed-call recovery that responds quickly, captures context, and keeps service leads from going cold.",
  },
  {
    name: "Lead Follow Up Automation",
    serviceType: "Lead Follow Up Automation",
    path: "/services/crm-lead-follow-up",
    description:
      "Follow-up automation for new leads, quote requests, booking reminders, review requests, and sales pipeline movement.",
  },
  {
    name: "CRM Setup",
    serviceType: "CRM Setup",
    path: "/services/crm-lead-follow-up",
    description:
      "CRM setup for service businesses that need cleaner conversations, opportunities, tags, notes, calendars, and pipeline stages.",
  },
  {
    name: "Website Design for Service Businesses",
    serviceType: "Website Design for Service Businesses",
    path: "/services/website-design-service-businesses",
    description:
      "Website design focused on service clarity, local trust, AI-search readability, forms, calls, booking, and lead capture.",
  },
  {
    name: "Review Automation",
    serviceType: "Review Automation",
    path: "/services/review-automation",
    description:
      "Review request and reputation workflows that help service businesses gather more useful public trust signals without fake claims.",
  },
  {
    name: "Local SEO Cleanup",
    serviceType: "Local SEO Cleanup",
    path: "/visibility-system",
    description:
      "Local SEO cleanup for business facts, services, service areas, internal links, metadata, crawlability, and profile alignment.",
  },
  {
    name: "AI Chatbot Setup",
    serviceType: "AI Chatbot Setup",
    path: "/services/ai-receptionist",
    description:
      "AI chatbot setup for website visitors who need fast answers, intake help, and a clean handoff to the business.",
  },
  {
    name: "Appointment Booking Automation",
    serviceType: "Appointment Booking Automation",
    path: "/civive-os",
    description:
      "Booking automation that connects inquiry, calendar rules, reminders, CRM notes, and follow-up for service businesses.",
  },
  {
    name: "Sales Pipeline Setup",
    serviceType: "Sales Pipeline Setup",
    path: "/civive-os",
    description:
      "Sales pipeline setup for tracking new leads, booked appointments, estimates, follow-up, won jobs, and stalled opportunities.",
  },
  {
    name: "Reputation Management",
    serviceType: "Reputation Management",
    path: "/services/review-automation",
    description:
      "Reputation management support for reviews, profile consistency, customer feedback, and public trust signals.",
  },
];

export type ServicePageContent = {
  slug: string;
  name: string;
  serviceName: string;
  serviceType: string;
  meta: {
    title: string;
    description: string;
  };
  h1: string;
  intro: string;
  problem: { title: string; copy: string };
  fixes: { title: string; copy: string }[];
  deliverables: { title: string; copy: string }[];
  audience: { title: string; copy: string }[];
  relatedSlugs: string[];
  primaryCta: string;
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "ai-search-visibility-audit",
    name: "Visibility Report",
    serviceName: "Visibility Report",
    serviceType: "Visibility Report",
    meta: {
      title: "Visibility Report | Civive Unlimited",
      description:
        "Civive reports the public signals that help local service businesses show up clearly in Google, Maps, ChatGPT, Gemini, Perplexity, and buyer research.",
    },
    h1: "Visibility Report for service businesses",
    intro:
      "The report shows what a buyer or answer engine can understand from the public footprint today, then turns the gaps into a practical fix order.",
    problem: {
      title: "Good businesses get skipped when their public signals are unclear.",
      copy: "If the website, Google Business Profile, services, service area, reviews, schema, and lead path do not agree, search engines and AI tools have less confidence in what to recommend.",
    },
    fixes: [
      {
        title: "Entity and NAP clarity",
        copy: "Civive checks the name, address, phone, website, service area, categories, and descriptions that define the business online.",
      },
      {
        title: "Service and location signals",
        copy: "The report maps which services need clearer pages, FAQs, internal links, schema, or Google profile alignment.",
      },
      {
        title: "Lead path review",
        copy: "Forms, calls, booking, chat, CRM handoff, and follow-up are reviewed so visibility can turn into actual conversations.",
      },
    ],
    deliverables: [
      {
        title: "Visibility gap list",
        copy: "A plain list of what is unclear, missing, duplicated, or inconsistent across the public footprint.",
      },
      {
        title: "Fix sequence",
        copy: "A prioritized order for website, Google profile, schema, service-page, FAQ, review, and lead-response improvements.",
      },
      {
        title: "Implementation direction",
        copy: "A practical next-step map that can become content, schema, profile cleanup, automation, or CiviveOS setup.",
      },
    ],
    audience: [
      {
        title: "Local service businesses",
        copy: "Best for companies that need more non-branded discovery and a clearer path from search to contact.",
      },
      {
        title: "Springfield and Missouri operators",
        copy: "Useful when the business serves Springfield, MO or nearby Missouri markets and needs local signals to match the Google Business Profile.",
      },
    ],
    relatedSlugs: [
      "google-business-profile-optimization",
      "website-design-service-businesses",
      "crm-lead-follow-up",
    ],
    primaryCta: "Get Your Free Visibility Report",
  },
  {
    slug: "google-business-profile-optimization",
    name: "Google Business Profile Optimization",
    serviceName: "Google Business Profile Optimization",
    serviceType: "Google Business Profile Optimization",
    meta: {
      title: "Google Business Profile Optimization | Civive Unlimited",
      description:
        "Google Business Profile optimization for Springfield and Missouri service businesses that need clearer categories, services, contact paths, and website alignment.",
    },
    h1: "Google Business Profile optimization for service businesses",
    intro:
      "Civive aligns the Google Business Profile with the website so Maps, local search, AI tools, and buyers see the same business facts.",
    problem: {
      title: "Profiles lose strength when the website and GBP tell different stories.",
      copy: "Wrong categories, thin services, weak descriptions, missing booking paths, inconsistent contact details, and mismatched website copy make the profile harder to trust.",
    },
    fixes: [
      {
        title: "Category and service cleanup",
        copy: "Civive checks whether the profile categories, service list, and website services reinforce the same real offer.",
      },
      {
        title: "Description and contact alignment",
        copy: "The profile language, phone, email, address, website link, and booking path are aligned with the site.",
      },
      {
        title: "Review and FAQ direction",
        copy: "Civive identifies review, question, and answer opportunities without inventing reviews or unsupported claims.",
      },
    ],
    deliverables: [
      {
        title: "GBP cleanup checklist",
        copy: "A prioritized list for categories, services, description, photos, links, contact fields, and profile completeness.",
      },
      {
        title: "Website alignment notes",
        copy: "The site changes needed to support the same services, local market, and next step shown on the profile.",
      },
      {
        title: "Local visibility next steps",
        copy: "A practical order for profile, page, FAQ, review, and schema improvements.",
      },
    ],
    audience: [
      {
        title: "Maps-dependent service companies",
        copy: "Useful for HVAC, plumbers, cleaners, roofers, med spas, auto repair, pest control, and other local operators.",
      },
      {
        title: "Owners with a profile but weak conversion",
        copy: "Best when people can find the listing but the profile and site do not make the next step obvious.",
      },
    ],
    relatedSlugs: [
      "ai-search-visibility-audit",
      "review-automation",
      "website-design-service-businesses",
    ],
    primaryCta: "Book a Call",
  },
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    serviceName: "AI Receptionist Setup",
    serviceType: "AI Receptionist Setup",
    meta: {
      title: "AI Receptionist Setup | Civive Unlimited",
      description:
        "AI receptionist setup for service businesses that need faster intake, missed-call recovery, booking support, CRM notes, and safer handoff rules.",
    },
    h1: "AI receptionist setup for service businesses",
    intro:
      "An AI receptionist helps answer, qualify, route, book, and document leads after a buyer reaches out through Google, AI search, calls, forms, or chat.",
    problem: {
      title: "A lead is not won just because it called or filled out a form.",
      copy: "Slow response, weak intake, no escalation rules, and scattered CRM notes can waste the demand the business already earned.",
    },
    fixes: [
      {
        title: "Intake and routing rules",
        copy: "Civive maps what the assistant can ask, when it should book, and when it should hand off to a person.",
      },
      {
        title: "CRM context",
        copy: "Lead details, source, service need, urgency, and next action are captured so the team does not rediscover the same information.",
      },
      {
        title: "Safe automation boundaries",
        copy: "The receptionist is built around the real services, hours, escalation needs, and consent requirements of the business.",
      },
    ],
    deliverables: [
      {
        title: "Receptionist flow map",
        copy: "The call, chat, or form flow from first contact through qualification, booking, or escalation.",
      },
      {
        title: "Knowledge and handoff setup",
        copy: "The service facts, common questions, fields, notes, and routing rules the assistant needs to be useful.",
      },
      {
        title: "Launch QA checklist",
        copy: "A review of edge cases, opt-out language, escalation behavior, and lead record quality before relying on the system.",
      },
    ],
    audience: [
      {
        title: "Teams with real inbound demand",
        copy: "Best when calls, chats, forms, or bookings already happen and the business needs faster response.",
      },
      {
        title: "Service categories where speed matters",
        copy: "Useful for urgent or competitive categories like HVAC, plumbing, restoration, roofing, pest control, and auto repair.",
      },
    ],
    relatedSlugs: ["missed-call-recovery", "crm-lead-follow-up"],
    primaryCta: "Book a Call",
  },
  {
    slug: "missed-call-recovery",
    name: "Missed Call Recovery",
    serviceName: "Missed Call Text Back",
    serviceType: "Missed Call Text Back",
    meta: {
      title: "Missed Call Recovery | Civive Unlimited",
      description:
        "Missed-call text back and recovery systems for service businesses that need faster response, better intake, and cleaner follow-up.",
    },
    h1: "Missed-call recovery for service businesses",
    intro:
      "Missed-call recovery gives a buyer a fast response when the team cannot answer, then captures enough context for useful follow-up.",
    problem: {
      title: "A missed call often becomes a competitor's booked job.",
      copy: "When buyers need help now, voicemail and delayed callbacks are weak. The first useful response can decide who gets the opportunity.",
    },
    fixes: [
      {
        title: "Fast text-back response",
        copy: "Civive sets up a clear text response that acknowledges the missed call and asks for the right next detail.",
      },
      {
        title: "Lead capture and tagging",
        copy: "The system captures the caller, service need, source, and follow-up state in the CRM.",
      },
      {
        title: "Follow-up path",
        copy: "Missed calls can move into reminders, booking links, human callbacks, or AI receptionist intake when appropriate.",
      },
    ],
    deliverables: [
      {
        title: "Missed-call workflow",
        copy: "The trigger, message, routing, CRM update, and next action for unanswered calls.",
      },
      {
        title: "Consent-safe copy",
        copy: "Plain language for response and opt-out handling without spammy or misleading automation.",
      },
      {
        title: "Pipeline connection",
        copy: "A handoff into opportunities, tasks, tags, or follow-up so the call does not disappear.",
      },
    ],
    audience: [
      {
        title: "Busy owner-operators",
        copy: "Good fit when the owner or small team cannot answer every call during jobs, nights, or busy windows.",
      },
      {
        title: "High-intent service calls",
        copy: "Useful for businesses where every missed call could be a quote, repair, booking, or urgent request.",
      },
    ],
    relatedSlugs: ["ai-receptionist", "crm-lead-follow-up"],
    primaryCta: "Book a Call",
  },
  {
    slug: "website-design-service-businesses",
    name: "Website Design for Service Businesses",
    serviceName: "Website Design for Service Businesses",
    serviceType: "Website Design for Service Businesses",
    meta: {
      title: "Website Design for Service Businesses | Civive Unlimited",
      description:
        "Website design for service businesses that need clearer services, local trust, AI-search visibility, calls, forms, booking, and lead capture.",
    },
    h1: "Website design for service businesses",
    intro:
      "Civive builds or improves service business websites so buyers and AI systems can quickly understand the offer, market, trust signals, and next step.",
    problem: {
      title: "A pretty site can still be invisible, vague, and hard to act on.",
      copy: "Many service sites bury the services, ignore the local market, weaken Google profile alignment, and make the lead path harder than it should be.",
    },
    fixes: [
      {
        title: "Service-first structure",
        copy: "Pages and sections are organized around the services, industries, locations, and questions buyers actually use.",
      },
      {
        title: "Local trust signals",
        copy: "The site reinforces the business facts, service area, contact details, proof, FAQs, and profile language.",
      },
      {
        title: "Conversion path",
        copy: "Calls, forms, booking, chat, CRM handoff, and follow-up are treated as part of the website system.",
      },
    ],
    deliverables: [
      {
        title: "Page structure",
        copy: "A homepage, service pages, local signals, FAQ content, metadata, and internal links that work together.",
      },
      {
        title: "Search-ready content",
        copy: "Plain service copy that helps humans and machines understand what the business does and where it works.",
      },
      {
        title: "Lead capture setup",
        copy: "The visible calls, forms, and routing needed to turn the website into a working acquisition asset.",
      },
    ],
    audience: [
      {
        title: "Service businesses with thin pages",
        copy: "Best when the current site looks decent but does not explain services, market, proof, or the next step clearly.",
      },
      {
        title: "Owners preparing for SEO or ads",
        copy: "Useful before spending more on traffic, because stronger visibility should land on a page that can convert.",
      },
    ],
    relatedSlugs: [
      "ai-search-visibility-audit",
      "google-business-profile-optimization",
      "crm-lead-follow-up",
    ],
    primaryCta: "Get Your Free Visibility Report",
  },
  {
    slug: "review-automation",
    name: "Review Automation",
    serviceName: "Review Automation",
    serviceType: "Review Automation",
    meta: {
      title: "Review Automation | Civive Unlimited",
      description:
        "Review automation and reputation workflows for service businesses that need more useful public trust signals and cleaner follow-up.",
    },
    h1: "Review automation for service businesses",
    intro:
      "Review automation helps a real customer experience turn into public trust signals that buyers, Google, Maps, and AI tools can understand.",
    problem: {
      title: "Happy customers often stay invisible unless the follow-up is built.",
      copy: "Without a clean request process, reviews arrive randomly, feedback gets missed, and public trust signals stay weaker than the service quality.",
    },
    fixes: [
      {
        title: "Review request timing",
        copy: "Civive maps when and how to request reviews after completed work without pressuring or misleading customers.",
      },
      {
        title: "Reputation workflow",
        copy: "The system can route feedback, reminders, replies, and follow-up into one cleaner operating path.",
      },
      {
        title: "Visibility alignment",
        copy: "Reviews support the same services, locations, and customer language the website and Google profile need to reinforce.",
      },
    ],
    deliverables: [
      {
        title: "Review workflow",
        copy: "A practical request and reminder path connected to completed jobs, appointments, or customer follow-up.",
      },
      {
        title: "Customer feedback route",
        copy: "A place for feedback and follow-up so reputation work improves the business, not just the public profile.",
      },
      {
        title: "Trust-signal cleanup",
        copy: "Recommendations for where review language, FAQs, and service pages can support clearer buyer confidence.",
      },
    ],
    audience: [
      {
        title: "Businesses with real customers but weak review flow",
        copy: "Best when service quality exists but review requests are inconsistent or manual.",
      },
      {
        title: "Local categories where trust decides the call",
        copy: "Useful for home services, med spas, salons, veterinary clinics, real estate, and other reputation-sensitive businesses.",
      },
    ],
    relatedSlugs: [
      "google-business-profile-optimization",
      "crm-lead-follow-up",
    ],
    primaryCta: "Book a Call",
  },
  {
    slug: "crm-lead-follow-up",
    name: "CRM and Lead Follow-Up",
    serviceName: "CRM Setup and Lead Follow Up Automation",
    serviceType: "CRM Setup",
    meta: {
      title: "CRM and Lead Follow-Up Automation | Civive Unlimited",
      description:
        "CRM setup and lead follow-up automation for service businesses that need cleaner pipelines, conversations, booking, reviews, and missed-call recovery.",
    },
    h1: "CRM setup and lead follow-up automation",
    intro:
      "Civive helps service businesses organize leads, conversations, pipeline stages, booking, reviews, and follow-up so opportunities do not leak after discovery.",
    problem: {
      title: "More visibility does not help if leads scatter after contact.",
      copy: "Calls, forms, texts, chats, estimates, and bookings need one operating path. Otherwise good leads get lost between inboxes and memory.",
    },
    fixes: [
      {
        title: "Lead capture structure",
        copy: "Civive sets up the fields, source context, tags, notes, and pipeline stages needed to track real opportunities.",
      },
      {
        title: "Follow-up automation",
        copy: "New leads, missed calls, appointments, quotes, review requests, and stale opportunities can trigger practical next steps.",
      },
      {
        title: "CiviveOS handoff",
        copy: "The operating base can support AI receptionist, booking, reputation, and lead-response workflows when the business is ready.",
      },
    ],
    deliverables: [
      {
        title: "Pipeline setup",
        copy: "Stages and fields that match the real path from inquiry to booked work, estimate, won job, or lost opportunity.",
      },
      {
        title: "Automation map",
        copy: "The messages, reminders, tasks, and handoffs needed to keep leads moving without pretending automation solves everything.",
      },
      {
        title: "Operator runbook",
        copy: "A simple guide for what the team checks, updates, and improves after launch.",
      },
    ],
    audience: [
      {
        title: "Teams with scattered lead handling",
        copy: "Best when calls, forms, messages, and booking requests exist but the follow-up process is unreliable.",
      },
      {
        title: "Businesses preparing for AI reception",
        copy: "Useful before adding AI receptionist support because the handoff needs a clean CRM base.",
      },
    ],
    relatedSlugs: [
      "missed-call-recovery",
      "ai-receptionist",
      "review-automation",
    ],
    primaryCta: "Book a Call",
  },
];

export function getServicePage(slug?: string) {
  return servicePages.find(service => service.slug === slug);
}

export const navLinks = [
  { href: site.visibilityReportRequestUrl, label: "Free Report" },
  { href: "/ai-search-audit", label: "Visibility Report" },
  { href: "/visibility-system", label: "Visibility System" },
  { href: "/civive-os", label: "CiviveOS" },
  { href: "/ai-receptionist", label: "AI Receptionist" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/build-in-public", label: "Build in Public" },
];

export const auditChecks = [
  {
    title: "Homepage message clarity",
    copy: "Can a buyer and an answer engine understand what you do, who you serve, and why you should be considered in one pass?",
  },
  {
    title: "Service page clarity",
    copy: "Are your services named, explained, and connected to real buying intent instead of buried in vague menu labels?",
  },
  {
    title: "Location and service consistency",
    copy: "Do your website, Google profile, listings, and public profiles agree on where you work and what you provide?",
  },
  {
    title: "Google Business Profile alignment",
    copy: "Does your profile reinforce the same categories, services, language, photos, hours, and trust signals as the site?",
  },
  {
    title: "Review trust signals",
    copy: "Are reviews visible, specific, recent, and connected to the problems buyers ask AI and Google about?",
  },
  {
    title: "FAQ and answer structure",
    copy: "Are real customer questions answered in direct language that can support voice search, featured answers, and AI extraction?",
  },
  {
    title: "Schema coverage",
    copy: "Is the business giving machines clean context through Organization, LocalBusiness, Service, FAQ, Article, and breadcrumb structure where appropriate?",
  },
  {
    title: "AI and search surface readiness",
    copy: "Are Google, Bing, Apple, Maps, AI summaries, and answer engines receiving enough clear public evidence to understand the business?",
  },
  {
    title: "Conversion path",
    copy: "If the right buyer finds you, can they ask, book, call, or request help without falling into a dead form or slow handoff?",
  },
];

export const auditPageFaqs = [
  {
    question: "What does a Visibility Report include?",
    answer:
      "It reviews entity clarity, service clarity, location and service-area signals, Google Business Profile alignment, reviews, FAQs, schema opportunities, internal links, crawlability, and the lead-capture path. The goal is a prioritized fix order, not a generic SEO score.",
  },
  {
    question: "Who is the report for?",
    answer:
      "It is built for local service businesses that need buyers, Google, answer engines, and AI tools to understand what they do, where they work, why they are credible, and how someone should contact or book them.",
  },
  {
    question: "Does the report guarantee AI recommendations?",
    answer:
      "No. No honest provider can guarantee placement in ChatGPT, Gemini, Perplexity, Grok, or Google. The report improves the public evidence and page structure those systems can use to understand the business.",
  },
  {
    question: "What happens after the report?",
    answer:
      "The next step depends on the findings. Common follow-up work includes homepage cleanup, service-page expansion, Google profile alignment, FAQ and schema implementation, internal-link improvements, review strategy, lead-capture fixes, or AI receptionist routing.",
  },
];

export const contactPageFaqs = [
  {
    question: "What should I include in a visibility report request?",
    answer:
      "Send the business name, website or Google Business Profile, service area, the services you most want to be found for, and the visibility problem you want fixed first. If you are not sure, send the site and Civive will start with the public signals.",
  },
  {
    question: "Do I need a website before requesting a visibility report?",
    answer:
      "No. A website helps, but a business can start with a Google Business Profile or public footprint. The report can identify whether the first move should be a website, service-page cleanup, profile alignment, or lead-capture work.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "The request is sent into Civive's lead system with the business details and page context. Civive reviews the public footprint, follows up, and starts with the highest-impact visibility and conversion signals.",
  },
  {
    question: "Can I ask about AI receptionist or lead follow-up too?",
    answer:
      "Yes. AI search visibility and lead response are connected. If the business already gets calls, forms, or chats but loses leads through slow response, include that in the request so the report can consider the handoff path.",
  },
];

export const aiReceptionistFaqs = [
  {
    question: "What does an AI receptionist do for a service business?",
    answer:
      "An AI receptionist captures caller or website visitor context, answers basic intake questions, qualifies the request, routes urgent issues, books or prepares the next step, and leaves usable CRM notes for follow-up.",
  },
  {
    question: "When should a business add an AI receptionist?",
    answer:
      "Add it when calls, chats, forms, or booking requests are already happening but response speed, after-hours coverage, qualification, or handoff quality is leaking revenue. If the business is not getting enough demand yet, start with visibility and conversion cleanup first.",
  },
  {
    question: "Is an AI receptionist the same as a chatbot?",
    answer:
      "No. A chatbot usually answers a narrow set of website questions. A real AI receptionist should be connected to the business offer, phone or chat path, calendar rules, escalation rules, CRM notes, and follow-up workflow.",
  },
  {
    question: "Can an AI receptionist replace the whole front desk?",
    answer:
      "Usually no. It should handle repetitive intake, after-hours response, missed-call recovery, qualification, and routing while escalating sensitive, complex, urgent, or high-value conversations to a human.",
  },
  {
    question: "How does AI receptionist work connect to AI search visibility?",
    answer:
      "AI search visibility creates more discovery. The receptionist layer protects the opportunity after discovery by making sure calls, forms, chats, and booking requests are captured and routed instead of disappearing.",
  },
];

export const aiAgencySpringfieldFaqs = [
  {
    question: "What does an AI agency do for a local service business?",
    answer:
      "An AI agency helps the business use AI and automation to improve visibility, capture leads, answer faster, follow up, and book more jobs.",
  },
  {
    question: "Is Civive Unlimited an AI agency in Springfield, MO?",
    answer:
      "Yes. Civive Unlimited is based in Springfield, Missouri and helps service businesses with AI visibility, AI automation, AI receptionist setup, CRM follow up, websites, and Google Business Profile optimization.",
  },
  {
    question: "Do I need AI if I already have a website?",
    answer:
      "Yes. A website alone does not guarantee visibility, fast response, or follow up. AI systems help the business get found, capture leads, and respond faster.",
  },
  {
    question: "Can AI help with missed calls?",
    answer:
      "Yes. Missed-call recovery can text back quickly, capture the lead's information, and help move the person toward booking.",
  },
  {
    question: "Does Civive build custom AI software?",
    answer:
      "Civive focuses on practical AI systems for local service businesses, including visibility, reception, follow up, CRM automation, and lead systems. It is not positioned as a custom enterprise AI software development shop.",
  },
  {
    question: "What types of businesses does Civive help?",
    answer:
      "Civive helps HVAC, plumbing, electrical, roofing, contractors, med spas, real estate teams, law firms, and other local service businesses.",
  },
];

export const civiveOsIncludedFeatures = [
  "Lead capture and conversation inbox",
  "Calendar and booking path",
  "Opportunity tracking",
  "Review and reputation movement",
  "SMS and email follow-up",
  "Civive setup guidance",
];

export const civiveOsPlans = [
  {
    name: "Launch",
    iconKey: "calendar",
    price: "$197",
    priceValue: "197",
    annual: "$1,970/year",
    annualPriceValue: "1970",
    monthlyHref: "https://buy.stripe.com/3cI00k5NDa7YdiWcktebu0p",
    annualHref: "https://buy.stripe.com/4gMaEY5ND3JA0waesBebu0q",
    description:
      "The clean starting point for a service business that needs missed calls, forms, conversations, and booking organized fast.",
    bestFor: "Solo operators and small teams fixing scattered follow-up.",
    includes: [
      "Lead inbox, opportunities, calendar, and forms",
      "Missed-call text back",
      "Web chat and reputation tools",
      "Two-way SMS and email conversations",
      "Guided lead-response setup",
    ],
  },
  {
    name: "Growth",
    iconKey: "message",
    price: "$297",
    priceValue: "297",
    annual: "$2,970/year",
    annualPriceValue: "2970",
    monthlyHref: "https://buy.stripe.com/00w3cw8ZP3JAdiW709ebu0r",
    annualHref: "https://buy.stripe.com/7sY4gA8ZP7ZQ0wa709ebu0s",
    description:
      "The stronger operating base for teams that need active follow-up, review movement, and a tighter handoff from lead to booked job.",
    bestFor:
      "Service businesses with steady inbound leads and reputation needs.",
    featured: true,
    includes: [
      "Everything in Launch",
      "Email campaign tools",
      "Lead response and review workflows",
      "Unified inbox for faster handoff",
      "Cleaner CiviveOS operating base",
    ],
  },
  {
    name: "Operator",
    iconKey: "bot",
    price: "$497",
    priceValue: "497",
    annual: "$4,970/year",
    annualPriceValue: "4970",
    monthlyHref: "https://buy.stripe.com/6oU14o5NDgwm6Uy709ebu0t",
    annualHref: "https://buy.stripe.com/cNi3cw7VL4NEceS1FPebu0u",
    description:
      "The AI-ready operating base for teams that want the system prepared for receptionist and AI employee add-ons without bundling them into the monthly software plan.",
    bestFor:
      "Teams that want the foundation in place before adding paid AI employees.",
    note: "AI receptionist and AI employees are optional add-ons. They are not included in the $497/month software plan.",
    includes: [
      "Everything in Growth",
      "AI Employee add-ons available when ready",
      "AI receptionist-ready intake foundation",
      "Routing, qualification, and handoff fields prepared",
      "Workflow, reporting, campaigns, and operating support",
    ],
  },
];

export const civiveOsOfferSchemaOffers = civiveOsPlans.flatMap(plan => [
  {
    name: `CiviveOS ${plan.name} Monthly`,
    price: plan.priceValue,
    priceCurrency: "USD",
    url: plan.monthlyHref,
    description: `${plan.description} Billed monthly at ${plan.price}/month.`,
  },
  {
    name: `CiviveOS ${plan.name} Annual`,
    price: plan.annualPriceValue,
    priceCurrency: "USD",
    url: plan.annualHref,
    description: `${plan.description} Billed annually at ${plan.annual}.`,
  },
]);

export const civiveOsOfferFaqs = [
  {
    question: "What is included in every CiviveOS plan?",
    answer:
      "Every plan starts with lead capture, a conversation inbox, calendar and booking support, opportunity tracking, review and reputation tools, SMS and email follow-up, and Civive setup guidance.",
  },
  {
    question: "Which CiviveOS plan should a service business start with?",
    answer:
      "Launch fits small teams that need the basics cleaned up. Growth fits teams with steady inbound leads that need workflows and review movement. Operator fits teams that want an AI-ready operating base before adding paid AI employees or receptionist support.",
  },
  {
    question:
      "Are AI receptionist and AI employees included in the Operator plan?",
    answer:
      "No. Operator prepares the intake, routing, qualification, and handoff foundation, but AI receptionist and AI employee builds are separate add-ons so the business does not pay for AI before the operating base is ready.",
  },
  {
    question: "Do the plans replace a Visibility Report?",
    answer:
      "No. The report diagnoses visibility, entity clarity, schema, content, and conversion gaps. CiviveOS is the lead-response operating base that helps capture and follow up once the business is ready for better lead handling.",
  },
  {
    question: "Can a business ask which plan fits before paying?",
    answer:
      "Yes. If the right starting point is unclear, request the report or contact Civive first. The goal is to pick the plan based on the current lead leaks, response process, and automation readiness.",
  },
];

export const civiveOsFaqs = [
  {
    question: "What is CiviveOS?",
    answer:
      "CiviveOS is the lead-response operating base for service businesses. It organizes lead capture, conversations, missed-call response, booking, opportunities, reviews, SMS, email follow-up, and AI-ready front desk context in one cleaner system.",
  },
  {
    question: "How is CiviveOS different from an AI receptionist?",
    answer:
      "CiviveOS is the operating base that catches and routes leads. An AI receptionist is an optional front desk layer that can answer, qualify, book, or escalate conversations once the business rules and handoff path are clear.",
  },
  {
    question: "When should a business start with the report instead?",
    answer:
      "Start with the Visibility Report when demand, public facts, service pages, reviews, schema, or local trust signals are the main constraint. Start with CiviveOS when leads already arrive but response, booking, or follow-up is leaking revenue.",
  },
  {
    question: "Are AI employees included in CiviveOS?",
    answer:
      "No. CiviveOS can prepare the fields, routing, and handoff structure for AI employees, but paid AI receptionist or AI employee builds are separate add-ons so the business does not buy automation before the base is ready.",
  },
  {
    question: "Which CiviveOS plan fits most service businesses?",
    answer:
      "Launch fits basic capture and missed-call cleanup. Growth fits teams that need follow-up and review movement. Operator fits teams that want an AI-ready front desk foundation before adding receptionist or AI employee support.",
  },
];

export const visibilitySystemLayers = [
  {
    title: "Signal cleanup",
    copy: "Tighten the public facts: what the business does, who it serves, where it works, and which problems it solves.",
    items: [
      "Website message",
      "Service language",
      "Location consistency",
      "Google profile alignment",
    ],
  },
  {
    title: "AI-ready proof",
    copy: "Turn trust into structured evidence that humans, Google, and answer engines can understand.",
    items: [
      "FAQs",
      "Service pages",
      "Schema",
      "Reviews",
      "Founder or operator context",
    ],
  },
  {
    title: "Lead capture and handoff",
    copy: "Make the path from discovery to response clean enough that a qualified lead does not disappear.",
    items: [
      "Report forms",
      "Booking paths",
      "AI assistant",
      "CRM notes",
      "Follow-up automations",
    ],
  },
];

export const visibilitySystemFaqs = [
  {
    question: "What is an AI Search Visibility System?",
    answer:
      "An AI Search Visibility System is the connected set of pages, public business facts, FAQs, schema, proof, internal links, Google profile signals, and lead-response paths that help buyers, search engines, and AI answer engines understand and trust a service business.",
  },
  {
    question: "How is the visibility system different from the report?",
    answer:
      "The report diagnoses what is unclear and prioritizes the fix order. The visibility system is the implementation layer that turns those findings into stronger pages, structured answers, schema, proof, internal links, and lead capture.",
  },
  {
    question: "Does this replace local SEO?",
    answer:
      "No. It includes local SEO fundamentals such as services, service areas, reviews, Google Business Profile alignment, crawlability, and internal links, but also focuses on whether answer engines can summarize, compare, and cite the business clearly.",
  },
  {
    question: "When should lead automation be added?",
    answer:
      "Lead automation should be added when the business already has demand or is about to create more. Forms, calls, chat, booking, CRM notes, follow-up, and AI receptionist support prevent new visibility from turning into missed revenue.",
  },
  {
    question: "What should a service business fix first?",
    answer:
      "Start with the facts and commercial pages that affect buyer trust: what the business does, where it works, who it helps, proof, FAQs, schema, and the next step. Supporting content should come after the core offer and lead path are clear.",
  },
];

export const faqs = [
  {
    question: "What does Civive Unlimited do?",
    answer:
      "Civive Unlimited helps local service businesses improve AI search visibility, Google Business Profile clarity, websites, CRM automation, missed-call recovery, AI receptionist setup, reviews, and lead follow-up.",
  },
  {
    question: "Who does Civive Unlimited help?",
    answer:
      "Civive helps service businesses such as HVAC companies, plumbers, cleaners, roofers, real estate professionals, landscapers, med spas, salons, pest control companies, auto repair shops, restoration companies, electricians, and veterinary clinics.",
  },
  {
    question: "What is a Visibility Report?",
    answer:
      "It is a review of the public signals that help Google, Maps, ChatGPT, Gemini, Perplexity, and buyers understand who the business is, what it does, where it serves customers, and how people can contact it.",
  },
  {
    question: "Can Civive help my business show up better on Google?",
    answer:
      "Yes. Civive can clean up website structure, service pages, Google Business Profile alignment, local signals, internal links, schema, reviews, and lead paths that support stronger local search visibility.",
  },
  {
    question:
      "Can Civive help my business show up in ChatGPT, Gemini, and Perplexity?",
    answer:
      "Civive cannot guarantee placement in any AI answer engine, but it can make the business easier to understand by improving public facts, services, local signals, FAQs, schema, reviews, and crawlable content.",
  },
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist answers or supports intake, collects lead details, qualifies requests, helps with booking or routing, and leaves cleaner context for follow-up.",
  },
  {
    question: "What is missed-call recovery?",
    answer:
      "Missed-call recovery sends a fast response when the business cannot answer, captures the reason for the call, and creates a follow-up path so the lead does not disappear.",
  },
  {
    question: "Does Civive build websites?",
    answer:
      "Yes. Civive builds and improves websites for service businesses with clear services, local search signals, forms, calls, booking, CRM handoff, and AI-search readable structure.",
  },
  {
    question: "Does Civive help with Google Business Profiles?",
    answer:
      "Yes. Civive helps align the Google Business Profile with the website, services, categories, contact details, service area, reviews, and booking path.",
  },
  {
    question: "What is CiviveOS?",
    answer:
      "CiviveOS is the lead-response operating base for service businesses. It organizes conversations, missed-call recovery, booking, opportunities, reviews, SMS, email follow-up, and AI-ready handoff.",
  },
];

export const homepageFaqs = faqs;

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  customerQuestions: string[];
  skipReasons: string[];
  trustSignals: string[];
  missingAssets: string[];
  fixes: string[];
  faqs: { question: string; answer: string }[];
};

export type IndustryAuthorityBrief = {
  searchMoment: string;
  answerSummary: string;
  firstFixPriority: string;
  decisionCriteria: { title: string; copy: string }[];
  objections: { title: string; copy: string }[];
};

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    shortName: "HVAC",
    intro:
      "HVAC buyers often search during discomfort, urgency, or seasonal pressure. Clear service, location, review, and emergency response signals matter.",
    customerQuestions: [
      "Who repairs AC near me?",
      "Which HVAC company is trusted for emergency service?",
      "Who installs heat pumps in my area?",
    ],
    skipReasons: [
      "No clear emergency or repair pages",
      "Weak city/service alignment",
      "Reviews do not mention actual HVAC problems",
    ],
    trustSignals: [
      "Licensed and insured language",
      "Repair, replacement, and maintenance clarity",
      "Seasonal service FAQs",
      "Recent review language",
    ],
    missingAssets: [
      "AC repair page",
      "Furnace repair page",
      "Service area page",
      "Financing or estimate explanation",
    ],
    fixes: [
      "Clarify service categories",
      "Add buyer questions",
      "Align Google Business Profile services",
      "Create structured HVAC FAQ content",
    ],
    faqs: [
      {
        question: "What would Civive check for an HVAC company?",
        answer:
          "Service pages, emergency language, seasonal FAQs, review specificity, Google profile service categories, location coverage, and the booking or call path.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortName: "Plumbing",
    intro:
      "Plumbing searches are usually problem-first. Buyers ask about leaks, drains, water heaters, emergencies, and who can respond quickly.",
    customerQuestions: [
      "Who fixes a leaking pipe near me?",
      "Best plumber for water heater replacement?",
      "Emergency drain cleaning near me",
    ],
    skipReasons: [
      "Generic service lists",
      "No emergency intent page",
      "Thin proof around response and trust",
    ],
    trustSignals: [
      "Emergency availability",
      "Problem-specific pages",
      "Clear service area",
      "Review mentions for repairs",
    ],
    missingAssets: [
      "Water heater page",
      "Drain cleaning page",
      "Emergency plumbing FAQ",
      "Service area language",
    ],
    fixes: [
      "Build problem pages",
      "Rewrite FAQs around real buyer questions",
      "Connect reviews to service categories",
      "Improve contact path",
    ],
    faqs: [
      {
        question: "Why do plumbers need AI search clarity?",
        answer:
          "Plumbing buyers often search from a specific urgent problem. AI and Google need clear evidence that the business handles that exact issue in that area.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortName: "Electrical",
    intro:
      "Electrical customers need safety, licensing, and clear service fit. The site has to reduce risk quickly.",
    customerQuestions: [
      "Who can install an EV charger?",
      "Licensed electrician near me?",
      "Can someone fix a breaker problem today?",
    ],
    skipReasons: [
      "No license or safety context",
      "Service pages are too broad",
      "No clear residential/commercial split",
    ],
    trustSignals: [
      "License and insurance clarity",
      "Panel, EV charger, lighting, and repair pages",
      "Safety FAQs",
      "Strong local proof",
    ],
    missingAssets: [
      "EV charger page",
      "Panel upgrade page",
      "Emergency repair page",
      "Safety and permit FAQs",
    ],
    fixes: [
      "Clarify project types",
      "Add safety-focused answers",
      "Align GBP categories",
      "Improve quote request flow",
    ],
    faqs: [
      {
        question:
          "What makes an electrical company easier for AI to recommend?",
        answer:
          "Clear service categories, safety proof, licensing language, local service area, and FAQs that answer project-specific questions.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    intro:
      "Roofing buyers compare trust, storm response, financing, warranties, and whether the company handles their exact roofing need.",
    customerQuestions: [
      "Best roofer for storm damage?",
      "Who does roof replacement near me?",
      "How do I know if I need roof repair or replacement?",
    ],
    skipReasons: [
      "No storm or repair intent pages",
      "Weak warranty proof",
      "Photos and reviews are disconnected",
    ],
    trustSignals: [
      "Project photos",
      "Warranty language",
      "Storm damage pages",
      "Insurance claim guidance",
      "Review specificity",
    ],
    missingAssets: [
      "Roof repair page",
      "Storm damage page",
      "Replacement guide",
      "FAQ about insurance and inspections",
    ],
    fixes: [
      "Add inspection clarity",
      "Structure proof around job types",
      "Clean up service area pages",
      "Add schema and FAQs",
    ],
    faqs: [
      {
        question: "Can roofers use AI visibility without fake proof?",
        answer:
          "Yes. Real photos, clear service pages, warranty explanations, process details, and honest FAQs create useful proof without inventing claims.",
      },
    ],
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    shortName: "Cleaning",
    intro:
      "Cleaning buyers care about trust, reliability, scope, recurring service, move-outs, offices, and whether the company fits their situation.",
    customerQuestions: [
      "Best house cleaning near me?",
      "Who does move-out cleaning?",
      "Commercial cleaning company for small offices",
    ],
    skipReasons: [
      "No clear residential/commercial split",
      "Pricing and scope are vague",
      "No trust or process details",
    ],
    trustSignals: [
      "Checklist clarity",
      "Recurring service explanation",
      "Reviews by service type",
      "Before/after proof when real",
    ],
    missingAssets: [
      "Move-out cleaning page",
      "Recurring cleaning page",
      "Commercial cleaning page",
      "Scope FAQ",
    ],
    fixes: [
      "Clarify service packages",
      "Add scope answers",
      "Align booking path",
      "Create location and service content",
    ],
    faqs: [
      {
        question: "What should cleaning companies explain for AI search?",
        answer:
          "Service type, location, scope, recurring options, trust standards, and how a buyer books or requests an estimate.",
      },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    intro:
      "Landscaping demand changes by season and project type. AI visibility depends on making those services easy to distinguish.",
    customerQuestions: [
      "Who does lawn care near me?",
      "Best landscaper for cleanup?",
      "Who installs mulch or hardscaping?",
    ],
    skipReasons: [
      "Seasonal services are unclear",
      "No project/service separation",
      "Weak photo and review context",
    ],
    trustSignals: [
      "Seasonal service pages",
      "Project photos",
      "Maintenance plans",
      "Service area clarity",
    ],
    missingAssets: [
      "Lawn care page",
      "Spring cleanup page",
      "Hardscape page",
      "Seasonal FAQ",
    ],
    fixes: [
      "Separate maintenance and projects",
      "Add seasonal content",
      "Map reviews to service types",
      "Improve estimate CTA",
    ],
    faqs: [
      {
        question: "Why does landscaping need separate service pages?",
        answer:
          "Lawn care, cleanups, hardscaping, and maintenance answer different buyer questions. AI systems need those distinctions to understand fit.",
      },
    ],
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    shortName: "Med Spas",
    intro:
      "Med spa search is trust-heavy. Buyers need treatment clarity, safety, credentials, realistic expectations, and easy consultation paths.",
    customerQuestions: [
      "Best med spa for Botox near me?",
      "Who does laser treatments?",
      "What treatment is right for my skin concern?",
    ],
    skipReasons: [
      "Treatment pages are thin",
      "Credentials are hard to find",
      "FAQs do not handle safety and expectations",
    ],
    trustSignals: [
      "Provider credentials",
      "Treatment-specific pages",
      "Safety FAQs",
      "Real policies and consultation path",
    ],
    missingAssets: [
      "Treatment pages",
      "Provider context",
      "FAQ by concern",
      "Consultation CTA",
    ],
    fixes: [
      "Clarify treatment categories",
      "Add concern-based answers",
      "Structure provider proof",
      "Improve booking path",
    ],
    faqs: [
      {
        question: "Can med spas improve AI visibility ethically?",
        answer:
          "Yes. The work should focus on accurate treatment information, credential clarity, safety expectations, and transparent consultation paths.",
      },
    ],
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    shortName: "Salons & Spas",
    intro:
      "Salon and spa buyers search by service, style, trust, availability, and local reputation.",
    customerQuestions: [
      "Best salon for color near me?",
      "Spa facial near me",
      "Who does bridal hair and makeup?",
    ],
    skipReasons: [
      "Services are buried in menus",
      "Style proof is disconnected from pages",
      "Booking friction is high",
    ],
    trustSignals: [
      "Service menu clarity",
      "Stylist or provider context",
      "Review language",
      "Booking availability",
    ],
    missingAssets: [
      "Service pages",
      "Provider profiles",
      "Style-specific FAQs",
      "Booking explanation",
    ],
    fixes: [
      "Turn services into answerable pages",
      "Connect social proof to site structure",
      "Clarify booking path",
      "Add local intent content",
    ],
    faqs: [
      {
        question: "What should salons make clear for answer engines?",
        answer:
          "Services, styles, location, provider expertise, appointment process, and the questions clients ask before booking.",
      },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    shortName: "Law Firms",
    intro:
      "Legal search requires authority, practice-area clarity, jurisdiction, disclaimers, and enough specificity to match the right matter.",
    customerQuestions: [
      "Best attorney for a car accident near me?",
      "Who handles estate planning in my city?",
      "Do I need a lawyer for this issue?",
    ],
    skipReasons: [
      "Practice areas are vague",
      "Jurisdiction is unclear",
      "No useful educational answers",
    ],
    trustSignals: [
      "Practice area pages",
      "Attorney context",
      "Jurisdiction clarity",
      "Educational FAQs",
      "Ethical disclaimers",
    ],
    missingAssets: [
      "Matter-specific pages",
      "Attorney bio depth",
      "FAQ by practice area",
      "Clear consultation CTA",
    ],
    fixes: [
      "Clarify practice-area structure",
      "Add natural-language legal questions",
      "Align local presence",
      "Improve consultation path",
    ],
    faqs: [
      {
        question:
          "Can law firms use AI visibility without crossing ethical lines?",
        answer:
          "Yes. The content should be educational, jurisdiction-aware, properly disclaimed, and focused on helping people understand fit before a consultation.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    shortName: "Pest Control",
    intro:
      "Pest control buyers search by pest type, urgency, safety, and recurring protection.",
    customerQuestions: [
      "Who treats termites near me?",
      "Best pest control for ants?",
      "Is pest treatment safe for pets?",
    ],
    skipReasons: [
      "No pest-specific pages",
      "Safety questions unanswered",
      "Recurring plans unclear",
    ],
    trustSignals: [
      "Pest-specific service pages",
      "Safety FAQs",
      "Treatment process",
      "Local reviews",
    ],
    missingAssets: [
      "Termite page",
      "Ant or roach pages",
      "Safety FAQ",
      "Plan explanation",
    ],
    fixes: [
      "Create pest-specific answer pages",
      "Add treatment and safety context",
      "Align Google services",
      "Improve estimate capture",
    ],
    faqs: [
      {
        question: "Why do pest companies need pest-specific pages?",
        answer:
          "A termite search and an ant search are different intents. Specific pages give AI and buyers clearer evidence of fit.",
      },
    ],
  },
  {
    slug: "home-restoration",
    name: "Home Restoration",
    shortName: "Restoration",
    intro:
      "Restoration buyers are often in crisis. Trust, response speed, insurance familiarity, and exact service type matter.",
    customerQuestions: [
      "Who handles water damage near me?",
      "Emergency restoration company",
      "Mold remediation after a leak",
    ],
    skipReasons: [
      "Emergency intent is unclear",
      "Insurance process is vague",
      "Services are grouped too broadly",
    ],
    trustSignals: [
      "Emergency pages",
      "Water, fire, mold service clarity",
      "Insurance process",
      "Response expectations",
    ],
    missingAssets: [
      "Water damage page",
      "Fire restoration page",
      "Mold remediation FAQ",
      "Insurance guidance",
    ],
    fixes: [
      "Structure services by damage type",
      "Add crisis-focused FAQs",
      "Clarify response path",
      "Align local pages",
    ],
    faqs: [
      {
        question: "What matters most for restoration visibility?",
        answer:
          "Clear emergency services, local availability, trust signals, insurance process, and fast contact options.",
      },
    ],
  },
  {
    slug: "auto-repair",
    name: "Auto Repair",
    shortName: "Auto Repair",
    intro:
      "Auto repair buyers search by symptom, repair type, make, trust, and proximity.",
    customerQuestions: [
      "Mechanic for brake repair near me?",
      "Why is my check engine light on?",
      "Best auto shop for diagnostics",
    ],
    skipReasons: [
      "No symptom or repair pages",
      "Trust proof is thin",
      "Scheduling path is unclear",
    ],
    trustSignals: [
      "Repair-specific pages",
      "ASE or technician context",
      "Diagnostic FAQs",
      "Review language",
    ],
    missingAssets: [
      "Brake repair page",
      "Diagnostics page",
      "Maintenance page",
      "Appointment FAQ",
    ],
    fixes: [
      "Add repair-specific pages",
      "Answer symptom queries",
      "Clarify scheduling",
      "Align profile categories",
    ],
    faqs: [
      {
        question: "How can auto shops show up for problem searches?",
        answer:
          "By building clear pages and FAQs around common symptoms, repairs, maintenance, diagnostics, location, and trust signals.",
      },
    ],
  },
  {
    slug: "veterinary-clinics",
    name: "Veterinary Clinics",
    shortName: "Veterinary",
    intro:
      "Veterinary searches combine urgency, trust, care type, species, location, and appointment availability.",
    customerQuestions: [
      "Vet near me accepting new patients?",
      "Emergency vet for my dog?",
      "Cat dental cleaning near me",
    ],
    skipReasons: [
      "Services are not clearly separated",
      "New-patient process is unclear",
      "Urgent care language is vague",
    ],
    trustSignals: [
      "Care-type pages",
      "New patient guidance",
      "Team context",
      "Reviews by service",
      "Appointment path",
    ],
    missingAssets: [
      "New patient page",
      "Dental care page",
      "Urgent care FAQ",
      "Species or care-specific pages",
    ],
    fixes: [
      "Clarify care categories",
      "Add appointment answers",
      "Structure service FAQs",
      "Improve local profile alignment",
    ],
    faqs: [
      {
        question: "What should a veterinary clinic make clear?",
        answer:
          "Services, species served, new-patient availability, urgent care policy, location, team trust, and appointment process.",
      },
    ],
  },
  {
    slug: "real-estate-teams",
    name: "Real Estate Teams",
    shortName: "Real Estate",
    intro:
      "Real estate discovery depends on local expertise, niche clarity, neighborhood context, and trust signals.",
    customerQuestions: [
      "Best realtor for selling in my area?",
      "Who helps first-time buyers?",
      "Real estate agent near me for relocation",
    ],
    skipReasons: [
      "No niche or local expertise pages",
      "Thin neighborhood context",
      "Trust proof is scattered",
    ],
    trustSignals: [
      "Neighborhood guides",
      "Buyer/seller pages",
      "Team context",
      "Process FAQs",
      "Real local content",
    ],
    missingAssets: [
      "Seller page",
      "Buyer page",
      "Neighborhood content",
      "Consultation flow",
    ],
    fixes: [
      "Clarify buyer and seller paths",
      "Create local answer content",
      "Structure team proof",
      "Improve lead handoff",
    ],
    faqs: [
      {
        question: "How can real estate teams use build-in-public content?",
        answer:
          "Market notes, neighborhood explainers, buyer and seller questions, and documented process can become search and social proof over time.",
      },
    ],
  },
];

export const industryAuthorityBriefs: Record<string, IndustryAuthorityBrief> = {
  hvac: {
    searchMoment:
      "The buyer is uncomfortable, seasonal urgency is high, and the provider has to prove repair, replacement, maintenance, location, and response fit quickly.",
    answerSummary:
      "HVAC AI search visibility improves when AC repair, furnace repair, heat pumps, replacement, maintenance, financing, service area, reviews, and emergency response are separated clearly enough for buyers and answer engines to match the exact problem.",
    firstFixPriority:
      "Clarify emergency repair, replacement, maintenance, service-area, and response expectations before publishing broad seasonal articles.",
    decisionCriteria: [
      {
        title: "Exact system and problem match",
        copy: "AC not cooling, furnace not heating, heat pump installation, maintenance, and replacement are different buyer intents. The site should not collapse them into one vague services paragraph.",
      },
      {
        title: "Response and seasonality proof",
        copy: "Emergency availability, seasonal service language, phone path, booking path, and missed-call handling matter because HVAC buyers often search when comfort is already disrupted.",
      },
      {
        title: "Trust and cost clarity",
        copy: "Licensing, insurance, financing, estimate expectations, review language, and maintenance plans help the buyer decide whether the provider is safe to contact.",
      },
    ],
    objections: [
      {
        title: "Will they handle my exact issue?",
        copy: "The page should name the exact repair, replacement, or maintenance category and connect it to a local response path.",
      },
      {
        title: "Can I trust them in an urgent situation?",
        copy: "Emergency wording, recent reviews, credentials, and clear next steps reduce uncertainty before the buyer calls.",
      },
    ],
  },
  plumbing: {
    searchMoment:
      "The buyer usually has a visible problem, wants fast help, and compares plumbers by issue type, service area, trust, and ability to respond.",
    answerSummary:
      "Plumbing AI search visibility improves when drain cleaning, leak repair, water heater work, emergency plumbing, sewer issues, service areas, safety, reviews, and contact options are separated into answerable paths.",
    firstFixPriority:
      "Build problem-specific service clarity for leaks, drains, water heaters, emergency plumbing, and service area before adding generic home maintenance content.",
    decisionCriteria: [
      {
        title: "Problem-first service clarity",
        copy: "A leaking pipe, clogged drain, water heater replacement, and sewer issue should each be easy to understand without forcing the buyer through a generic service list.",
      },
      {
        title: "Emergency and safety context",
        copy: "Plumbing buyers need to know whether the provider handles urgent work, what to do next, and how quickly the business can respond.",
      },
      {
        title: "Local proof and estimate path",
        copy: "Service-area language, reviews tied to actual repairs, and an estimate or call path help the page answer both search and conversion intent.",
      },
    ],
    objections: [
      {
        title: "Is this plumber available for my issue?",
        copy: "The site should connect the specific problem to availability, service area, and next-step language.",
      },
      {
        title: "Will the repair become a surprise bill?",
        copy: "Estimate language, diagnostic expectations, and common repair FAQs reduce buyer hesitation without inventing pricing guarantees.",
      },
    ],
  },
  electrical: {
    searchMoment:
      "The buyer is weighing safety, project fit, licensing, and urgency before letting someone touch the electrical system.",
    answerSummary:
      "Electrical AI search visibility improves when panel upgrades, EV chargers, lighting, troubleshooting, emergency repair, safety, permits, residential or commercial fit, and quote paths are clearly separated.",
    firstFixPriority:
      "Clarify license/safety language, project categories, residential versus commercial fit, and quote flow before scaling informational electrical posts.",
    decisionCriteria: [
      {
        title: "Safety and licensing visibility",
        copy: "The page should make credentials, insurance, safety expectations, and permit-sensitive work easier to verify from visible content.",
      },
      {
        title: "Project category separation",
        copy: "Panel upgrades, EV chargers, lighting, breakers, troubleshooting, and emergency repair answer different buyer questions and should not be buried together.",
      },
      {
        title: "Home versus business fit",
        copy: "Residential and commercial electrical work can have different risks, timelines, and proof requirements, so the page should make fit obvious.",
      },
    ],
    objections: [
      {
        title: "Is this safe and properly handled?",
        copy: "Safety FAQs, license language, and project expectations should reduce anxiety before the buyer asks for a quote.",
      },
      {
        title: "Can they handle my project type?",
        copy: "The service language should map directly to the buyer's project, not only to a broad electrician label.",
      },
    ],
  },
  roofing: {
    searchMoment:
      "The buyer is comparing trust, storm response, inspection process, warranty, insurance familiarity, photos, and repair versus replacement fit.",
    answerSummary:
      "Roofing AI search visibility improves when repair, replacement, storm damage, inspections, warranties, insurance guidance, project proof, financing, and service area are clearly connected.",
    firstFixPriority:
      "Separate roof repair, replacement, storm damage, inspection, warranty, and insurance guidance before publishing broad home-improvement content.",
    decisionCriteria: [
      {
        title: "Repair versus replacement clarity",
        copy: "The page should help buyers understand when they may need inspection, repair, storm work, or full replacement without making unsupported diagnostic promises.",
      },
      {
        title: "Proof around real project types",
        copy: "Photos, warranty language, material guidance, and review context are more useful when tied to the roof problem the buyer has.",
      },
      {
        title: "Storm and insurance readiness",
        copy: "Storm-damage searches need fast contact, inspection expectations, service-area clarity, and honest insurance-process guidance.",
      },
    ],
    objections: [
      {
        title: "Do I need repair or replacement?",
        copy: "Inspection and decision criteria help buyers understand the next step without overclaiming from a page alone.",
      },
      {
        title: "Can I trust the warranty and process?",
        copy: "Warranty language, project process, and visible proof reduce the fear of choosing the wrong contractor.",
      },
    ],
  },
  "cleaning-services": {
    searchMoment:
      "The buyer is comparing trust, scope, reliability, recurring service, move-out needs, commercial fit, and booking ease.",
    answerSummary:
      "Cleaning-service AI search visibility improves when residential, recurring, move-out, deep cleaning, commercial, scope, checklists, reviews, trust standards, pricing inputs, and booking are easy to compare.",
    firstFixPriority:
      "Separate residential, commercial, recurring, move-out, deep-cleaning, and scope expectations before adding generic cleaning tips.",
    decisionCriteria: [
      {
        title: "Scope and checklist clarity",
        copy: "Buyers need to know what is included, what costs extra, what is excluded, and how the business handles recurring or one-time work.",
      },
      {
        title: "Trust and access comfort",
        copy: "Insurance, team standards, reviews, policies, and process matter because the service often happens inside private spaces.",
      },
      {
        title: "Residential versus commercial fit",
        copy: "Homes, move-outs, offices, and recurring accounts have different expectations and should not be treated as one generic cleaning page.",
      },
    ],
    objections: [
      {
        title: "What exactly is included?",
        copy: "Visible scope answers and checklists reduce buyer friction before quote or booking.",
      },
      {
        title: "Can I trust the team in my space?",
        copy: "Trust standards, reviews, policies, and contact clarity should be easy to find.",
      },
    ],
  },
  landscaping: {
    searchMoment:
      "The buyer is often seasonal or project-driven and needs to know whether the company handles maintenance, cleanups, installs, hardscaping, or ongoing service.",
    answerSummary:
      "Landscaping AI search visibility improves when lawn care, cleanups, mulch, hardscaping, maintenance plans, seasonal timing, project photos, estimates, and service areas are separated clearly.",
    firstFixPriority:
      "Separate maintenance, seasonal cleanup, lawn care, hardscape, and project-estimate intent before publishing broad yard-care content.",
    decisionCriteria: [
      {
        title: "Maintenance versus project fit",
        copy: "Recurring lawn care and one-time landscape projects are different buying paths and need different answers.",
      },
      {
        title: "Seasonal timing",
        copy: "Spring cleanup, fall cleanup, mowing, mulch, and planting work all depend on timing, so the page should reflect seasonal demand.",
      },
      {
        title: "Visual and local proof",
        copy: "Project photos, neighborhoods served, reviews, and estimate expectations help buyers understand whether the company fits their property.",
      },
    ],
    objections: [
      {
        title: "Do they handle my type of yard work?",
        copy: "Service categories should separate maintenance, cleanup, install, and hardscape work instead of relying on a broad landscaping label.",
      },
      {
        title: "Can they quote this accurately?",
        copy: "Estimate process, property details, timing, and photo guidance reduce uncertainty before contact.",
      },
    ],
  },
  "med-spas": {
    searchMoment:
      "The buyer is cautious, treatment-aware, and comparing safety, credentials, realistic expectations, consultation quality, and appointment fit.",
    answerSummary:
      "Med spa AI search visibility improves when treatments, concerns, provider credentials, safety FAQs, policies, consultation paths, contraindication language, and expectations are clear and careful.",
    firstFixPriority:
      "Clarify treatment pages, provider context, safety expectations, consultation process, and concern-based FAQs before scaling beauty content.",
    decisionCriteria: [
      {
        title: "Treatment and concern match",
        copy: "Botox, fillers, laser, skin concerns, body treatments, and consultations answer different buyer questions and need careful separation.",
      },
      {
        title: "Credential and safety clarity",
        copy: "Provider context, safety language, contraindication awareness, and realistic expectations matter more than promotional claims.",
      },
      {
        title: "Consultation path",
        copy: "The page should make it easy to understand what happens before treatment and how someone asks whether they are a fit.",
      },
    ],
    objections: [
      {
        title: "Is this safe for me?",
        copy: "Visible safety FAQs and consultation language should answer responsibly without making medical promises.",
      },
      {
        title: "Will the result match my concern?",
        copy: "Concern-based explanations and realistic expectation language reduce uncertainty before booking.",
      },
    ],
  },
  "salons-spas": {
    searchMoment:
      "The buyer compares service style, provider fit, availability, local reputation, booking friction, and whether the salon or spa handles the exact look or experience wanted.",
    answerSummary:
      "Salon and spa AI search visibility improves when color, cuts, facials, bridal, massage, providers, style proof, reviews, policies, booking, and local service language are easy to understand.",
    firstFixPriority:
      "Turn menu services into answerable pages with provider context, style proof, booking expectations, and local intent before adding lifestyle blog posts.",
    decisionCriteria: [
      {
        title: "Service and style match",
        copy: "Color, cuts, facials, bridal services, massage, and spa treatments should answer the specific pre-booking questions clients ask.",
      },
      {
        title: "Provider and portfolio context",
        copy: "Stylist or provider context, style examples, and review language help buyers choose without relying only on social feeds.",
      },
      {
        title: "Booking and policy clarity",
        copy: "Availability, appointment flow, deposits, cancellations, and consultation expectations reduce friction before booking.",
      },
    ],
    objections: [
      {
        title: "Can they create the style I want?",
        copy: "Service pages should connect style proof and provider context to the exact appointment type.",
      },
      {
        title: "Is booking going to be difficult?",
        copy: "Booking steps, policy language, and contact options should be visible without forcing the buyer to guess.",
      },
    ],
  },
  "law-firms": {
    searchMoment:
      "The buyer is dealing with a high-stakes question and needs practice-area fit, jurisdiction, attorney context, consultation expectations, and ethical clarity.",
    answerSummary:
      "Law-firm AI search visibility improves when practice areas, matter types, jurisdiction, attorney bios, educational FAQs, consultation paths, disclaimers, and local relevance are structured clearly.",
    firstFixPriority:
      "Clarify practice areas, matter-specific pages, jurisdiction, attorney context, consultation path, and disclaimers before expanding generic legal articles.",
    decisionCriteria: [
      {
        title: "Matter and practice-area fit",
        copy: "Personal injury, estate planning, family law, business law, and other matters need separate intent paths because buyers ask different questions.",
      },
      {
        title: "Jurisdiction and ethical clarity",
        copy: "The page should be location-aware, educational, and properly careful about not implying legal advice where a consultation is needed.",
      },
      {
        title: "Attorney and consultation context",
        copy: "Attorney bios, process explanations, and consultation expectations help buyers decide whether to contact the firm.",
      },
    ],
    objections: [
      {
        title: "Is this the right lawyer for my issue?",
        copy: "Practice-area structure should help the buyer understand fit before contacting the firm.",
      },
      {
        title: "Can I trust the information?",
        copy: "Educational answers, disclaimers, and jurisdiction context should keep the content useful without overpromising.",
      },
    ],
  },
  "pest-control": {
    searchMoment:
      "The buyer often searches by pest, urgency, safety concern, treatment method, recurring plan, and whether the provider serves the property location.",
    answerSummary:
      "Pest-control AI search visibility improves when termites, ants, roaches, rodents, bed bugs, safety, treatment process, prevention plans, local service area, and estimate capture are clearly separated.",
    firstFixPriority:
      "Create pest-specific service clarity, safety FAQs, treatment-process explanations, and plan language before publishing broad pest-prevention tips.",
    decisionCriteria: [
      {
        title: "Pest-specific intent",
        copy: "Termites, ants, roaches, rodents, and bed bugs have different urgency, proof, and treatment questions.",
      },
      {
        title: "Safety and process clarity",
        copy: "Families, pets, tenants, and commercial sites need to understand treatment expectations and safety basics before booking.",
      },
      {
        title: "Recurring protection fit",
        copy: "Plans, inspection cadence, prevention language, and local pest context help buyers compare ongoing service.",
      },
    ],
    objections: [
      {
        title: "Is treatment safe around my home or business?",
        copy: "Safety and process FAQs should be visible and careful, not buried in a generic paragraph.",
      },
      {
        title: "Will this solve the exact pest issue?",
        copy: "The page should map the pest type to the service, inspection path, and next step.",
      },
    ],
  },
  "home-restoration": {
    searchMoment:
      "The buyer is often in crisis and needs response speed, service type, insurance familiarity, trust, and a clear emergency contact path.",
    answerSummary:
      "Restoration AI search visibility improves when water damage, fire damage, mold remediation, emergency response, insurance guidance, cleanup process, local availability, and contact routing are clear.",
    firstFixPriority:
      "Separate water, fire, mold, storm, emergency response, insurance, and cleanup-process intent before adding general home safety content.",
    decisionCriteria: [
      {
        title: "Damage type match",
        copy: "Water, fire, mold, storm, and cleanup work create different buyer questions and should not be hidden under one restoration label.",
      },
      {
        title: "Emergency response path",
        copy: "The page should make phone, after-hours, intake, and next-step expectations obvious for urgent searches.",
      },
      {
        title: "Insurance and process confidence",
        copy: "Insurance guidance, documentation expectations, and process explanations reduce confusion during stressful decisions.",
      },
    ],
    objections: [
      {
        title: "Can they respond now?",
        copy: "Emergency contact options and response expectations need to be clear before any supporting content matters.",
      },
      {
        title: "Do they understand insurance and documentation?",
        copy: "Process and documentation language can build trust without inventing insurer relationships or guarantees.",
      },
    ],
  },
  "auto-repair": {
    searchMoment:
      "The buyer searches by symptom, repair category, trust, diagnostic clarity, scheduling, proximity, and sometimes vehicle type.",
    answerSummary:
      "Auto repair AI search visibility improves when brakes, diagnostics, check-engine lights, maintenance, tires, repair categories, technician context, reviews, scheduling, and location are clear.",
    firstFixPriority:
      "Separate symptom, diagnostic, maintenance, and repair-category pages before adding broad car-care content.",
    decisionCriteria: [
      {
        title: "Symptom and repair match",
        copy: "Brake repair, check-engine lights, diagnostics, maintenance, and noises answer different search intents.",
      },
      {
        title: "Diagnostic and estimate clarity",
        copy: "Buyers need to understand how diagnosis works, what information to provide, and how scheduling begins.",
      },
      {
        title: "Trust and technician context",
        copy: "Certifications, technician experience, review language, and shop policies help reduce fear around vehicle repairs.",
      },
    ],
    objections: [
      {
        title: "Will they diagnose the real issue?",
        copy: "Diagnostic explanations and symptom-specific pages help the buyer understand the shop's fit.",
      },
      {
        title: "Can I trust the estimate?",
        copy: "Process language, reviews, and appointment expectations reduce friction before scheduling.",
      },
    ],
  },
  "veterinary-clinics": {
    searchMoment:
      "The pet owner is balancing urgency, species, care type, new-patient availability, trust, team context, and appointment access.",
    answerSummary:
      "Veterinary AI search visibility improves when wellness, urgent care, dental, species served, new-patient process, team context, reviews, policies, and appointment paths are clearly explained.",
    firstFixPriority:
      "Clarify new-patient status, care categories, urgent-care policy, species served, appointment process, and team trust before publishing broad pet-care content.",
    decisionCriteria: [
      {
        title: "Care type and species fit",
        copy: "Wellness, urgent care, dental, surgery, cats, dogs, and other species or care paths should answer different owner questions.",
      },
      {
        title: "New-patient and appointment clarity",
        copy: "Pet owners need to know whether the clinic is accepting patients, how appointments work, and what urgent cases should do.",
      },
      {
        title: "Team and trust context",
        copy: "Provider context, care philosophy, reviews, and service explanations help owners decide who should care for their pet.",
      },
    ],
    objections: [
      {
        title: "Will they see my pet soon enough?",
        copy: "Appointment and urgent-care language should be visible before the owner has to call.",
      },
      {
        title: "Do they handle my pet's specific need?",
        copy: "Care-type and species-specific answers help owners and answer engines match the right clinic.",
      },
    ],
  },
  "real-estate-teams": {
    searchMoment:
      "The buyer or seller is comparing local expertise, niche fit, neighborhood context, process clarity, trust, and responsiveness.",
    answerSummary:
      "Real estate AI search visibility improves when buyer paths, seller paths, relocation, neighborhoods, market notes, team context, process FAQs, proof, and consultation flow are organized clearly.",
    firstFixPriority:
      "Separate buyer, seller, relocation, neighborhood, consultation, and process intent before publishing generic market commentary.",
    decisionCriteria: [
      {
        title: "Buyer versus seller path",
        copy: "First-time buyers, sellers, relocation clients, and investors have different questions and should not be routed through one generic real estate page.",
      },
      {
        title: "Neighborhood and local expertise",
        copy: "Useful local context, market notes, and neighborhood explanations create stronger evidence than broad claims about knowing the area.",
      },
      {
        title: "Process and response clarity",
        copy: "Consultation flow, next steps, lead handoff, and follow-up expectations matter because real estate decisions move quickly.",
      },
    ],
    objections: [
      {
        title: "Do they know my area and situation?",
        copy: "Neighborhood context and niche pages help the visitor understand fit before reaching out.",
      },
      {
        title: "Will they respond and guide the process?",
        copy: "Consultation flow, follow-up clarity, and process FAQs reduce uncertainty before the first conversation.",
      },
    ],
  },
};

export function getIndustryAuthorityBrief(industry: Industry) {
  return industryAuthorityBriefs[industry.slug];
}

export const industryHubFaqs = [
  {
    question: "Which industries does Civive help with AI search visibility?",
    answer:
      "Civive focuses on local service, appointment-led, and trust-dependent businesses where buyers compare providers before calling, booking, or requesting an estimate. That includes home services, professional services, health-adjacent services, beauty and wellness, automotive, veterinary, real estate, and similar local operators.",
  },
  {
    question: "Why build industry-specific AI search pages?",
    answer:
      "Each industry has different buyer questions, proof expectations, service categories, reviews, FAQs, and lead-response risks. Industry pages make those differences explicit so buyers, Google, and AI answer engines can understand the fit instead of treating every service business the same.",
  },
  {
    question: "Does every business need a separate industry page?",
    answer:
      "No. A separate industry page should exist only when it serves a distinct search intent and adds useful context. If two pages would answer the same buyer question, Civive would rather improve or consolidate the stronger page than create thin overlap.",
  },
  {
    question: "What should an industry page connect to?",
    answer:
      "A useful industry page should connect back to the main industry hub, the Visibility Report, the visibility system, relevant implementation resources, the lead-response layer, and the contact path. That creates a clear parent-child-sibling structure for humans and crawlers.",
  },
];

export function getIndustryFaqs(industry: Industry) {
  const brief = getIndustryAuthorityBrief(industry);

  return [
    ...industry.faqs,
    {
      question: `What should ${industry.shortName} businesses explain first?`,
      answer: brief
        ? `${brief.searchMoment} Start with the questions buyers already ask, such as "${industry.customerQuestions[0]}" and "${industry.customerQuestions[1]}".`
        : `Start with the questions buyers already ask, such as "${industry.customerQuestions[0]}" and "${industry.customerQuestions[1]}". The page should connect those questions to clear services, service area, trust signals, reviews, FAQs, and the next step to call, book, or request an estimate.`,
    },
    {
      question: `Which ${industry.shortName} pages usually support AI search visibility?`,
      answer: `The strongest starting points are usually ${industry.missingAssets
        .slice(0, 3)
        .map(asset => asset.toLowerCase())
        .join(
          ", "
        )}, and a clear contact or booking path. The right page list depends on the business model and what proof already exists.`,
    },
    {
      question: `How does lead response affect ${industry.shortName} visibility work?`,
      answer:
        "Visibility creates opportunity, but slow response can still lose the buyer. Calls, forms, chat, booking, CRM notes, missed-call recovery, and AI receptionist routing should be checked when the business already receives demand or expects more after cleanup.",
    },
    {
      question: `What should ${industry.shortName} sites fix first?`,
      answer:
        brief?.firstFixPriority ??
        "Fix the public facts, commercial pages, FAQs, schema, internal links, and contact path before scaling informational content.",
    },
    {
      question: `How do buyers compare ${industry.shortName} providers?`,
      answer: brief
        ? brief.decisionCriteria
            .map(criterion => `${criterion.title}: ${criterion.copy}`)
            .join(" ")
        : "Buyers compare service fit, location, proof, process, reviews, and the next step before contacting a provider.",
    },
    {
      question: `What objections should ${industry.shortName} pages answer?`,
      answer: brief
        ? brief.objections
            .map(objection => `${objection.title}: ${objection.copy}`)
            .join(" ")
        : "The page should answer whether the business handles the exact problem, whether it is trustworthy, and what happens after contact.",
    },
    {
      question: `What should ${industry.shortName} visibility content avoid claiming?`,
      answer:
        "It should avoid guaranteed AI recommendations, fake reviews, fake awards, fake locations, unsupported ratings, and schema that is not backed by visible content. The safer goal is clearer public evidence, not invented authority.",
    },
  ];
}

export const relatedIndustrySlugsBySlug: Record<string, string[]> = {
  hvac: ["plumbing", "electrical", "home-restoration"],
  plumbing: ["hvac", "electrical", "home-restoration"],
  electrical: ["hvac", "plumbing", "home-restoration"],
  roofing: ["home-restoration", "landscaping", "pest-control"],
  "cleaning-services": ["pest-control", "home-restoration", "landscaping"],
  landscaping: ["roofing", "pest-control", "cleaning-services"],
  "med-spas": ["salons-spas", "veterinary-clinics", "law-firms"],
  "salons-spas": ["med-spas", "cleaning-services", "veterinary-clinics"],
  "law-firms": ["real-estate-teams", "med-spas", "auto-repair"],
  "pest-control": ["home-restoration", "cleaning-services", "landscaping"],
  "home-restoration": ["roofing", "plumbing", "pest-control"],
  "auto-repair": ["electrical", "law-firms", "real-estate-teams"],
  "veterinary-clinics": ["med-spas", "salons-spas", "cleaning-services"],
  "real-estate-teams": ["law-firms", "roofing", "landscaping"],
};

export function getRelatedIndustries(slug?: string) {
  const relatedSlugs = slug ? (relatedIndustrySlugsBySlug[slug] ?? []) : [];
  return relatedSlugs
    .map(relatedSlug => getIndustry(relatedSlug))
    .filter((industry): industry is Industry => Boolean(industry));
}

export const resourceTopics = [
  {
    slug: "ai-search-local-business",
    title: "AI Search for Local Businesses",
    copy: "How ChatGPT, Gemini, Perplexity, and Grok change the way buyers discover local companies.",
    formats: ["Founder video", "Search article", "Short social breakdown"],
  },
  {
    slug: "entity-clarity",
    title: "Entity Clarity and Trust Signals",
    copy: "Why a business needs consistent public facts before AI systems can confidently explain it.",
    formats: ["Report framework", "YouTube topic", "FAQ cluster"],
  },
  {
    slug: "service-page-strategy",
    title: "Service Page Strategy",
    copy: "How to turn vague service lists into useful pages that answer buying intent.",
    formats: [
      "Website teardown",
      "Implementation guide",
      "Client education post",
    ],
  },
  {
    slug: "location-page-strategy",
    title: "Location Page Strategy",
    copy: "How to create local context without doorway-page spam or fake location claims.",
    formats: ["Local SEO article", "Voice search script", "Build log"],
  },
  {
    slug: "faq-answer-engine-formatting",
    title: "FAQ and Answer-Engine Formatting",
    copy: "How to write answers that help people, Google, voice assistants, and LLMs understand the business.",
    formats: ["FAQ cluster", "Social carousel", "Prompt checklist"],
  },
  {
    slug: "schema-structured-data",
    title: "Schema and Machine-Readable Trust",
    copy: "Where Organization, LocalBusiness, Service, FAQ, Article, and breadcrumb schema fit after the content is clear.",
    formats: ["Technical article", "Implementation checklist", "Report add-on"],
  },
  {
    slug: "lead-capture-after-discovery",
    title: "Lead Capture After Discovery",
    copy: "What happens after a buyer finds you: forms, chat, booking, CRM handoff, AI receptionist, and follow-up.",
    formats: ["Revenue workflow", "CiviveOS build", "Founder demo"],
  },
  {
    slug: "build-in-public",
    title: "Build in Public as Proof",
    copy: "How Civive turns its own website, content, schema, and visibility work into public proof of process.",
    formats: ["Build log", "YouTube series", "Founder note"],
  },
];

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intent: string;
  updated: string;
  publishedDate: string;
  lastModified: string;
  readTime: string;
  summary: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  finalCta: {
    title: string;
    copy: string;
  };
  sections: Array<{
    eyebrow: string;
    title: string;
    copy: string;
    bullets?: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "ai-search-readiness-checklist",
    title:
      "AI Search Readiness Checklist for Local Service Businesses | Civive Unlimited",
    description:
      "A practical AI search readiness checklist for local service businesses that need clearer services, locations, trust signals, schema, FAQs, and lead capture.",
    eyebrow: "Checklist",
    intent:
      "Checklist intent for AI search readiness and local visibility cleanup",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "7 min read",
    summary:
      "AI search readiness means a buyer, Google, and an answer engine can quickly understand who you are, what you do, where you work, why you can be trusted, and how to contact you. Use this checklist before creating more content.",
    primaryCta: { label: "Get Your Free Visibility Report", href: "/contact" },
    secondaryCta: {
      label: "See the visibility system",
      href: "/visibility-system",
    },
    finalCta: {
      title: "Turn the checklist into a real fix order.",
      copy: "Civive can inspect the public signals, show what is unclear, and map the next implementation step without inventing proof or publishing thin pages.",
    },
    sections: [
      {
        eyebrow: "Start here",
        title: "Can the business be understood in one pass?",
        copy: "The first readiness test is clarity. If the homepage, Google profile, and main service pages use vague language, AI systems have to guess. Guessing is where better-organized competitors win.",
        bullets: [
          "The homepage names the business, audience, primary services, location, and next step.",
          "The main offer is visible above the fold without relying on slogans.",
          "The same service language appears on the website, Google Business Profile, and public profiles.",
          "The contact path is visible on desktop and mobile.",
        ],
      },
      {
        eyebrow: "Service proof",
        title: "Are the services specific enough to match buyer questions?",
        copy: "AI search does not just need a list of capabilities. It needs enough context to connect a problem or buyer question to a service the business actually provides.",
        bullets: [
          "Core services are separated by intent instead of grouped into one generic paragraph.",
          "Urgent, problem-aware, cost, comparison, and process questions are answered where they matter.",
          "Each major service has a clear CTA and a path back to the main report or contact page.",
        ],
      },
      {
        eyebrow: "Trust signals",
        title: "Is trust visible without inventing proof?",
        copy: "Do not fake logos, reviews, ratings, or case studies. Real trust signals are enough when they are placed clearly and explained in useful language.",
        bullets: [
          "Reviews are connected to service categories when they are real and visible.",
          "Licensing, insurance, credentials, policies, or process details are shown where relevant.",
          "Photos, examples, or build notes are used only when they are real.",
          "Claims are specific enough to be believed and modest enough to be safe.",
        ],
      },
      {
        eyebrow: "Machine context",
        title: "Can crawlers parse the page structure?",
        copy: "Structured data works best after visible content is clear. Schema should support the page, not make unsupported claims on behalf of it.",
        bullets: [
          "Every indexable page has one H1, unique metadata, canonical URL, robots meta, OG tags, and Twitter card tags.",
          "Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, and Article schema are used only where the visible page supports them.",
          "Sitemap, robots.txt, and llms.txt point crawlers to the canonical www URLs.",
        ],
      },
      {
        eyebrow: "Conversion path",
        title: "Does the lead path work after the visitor is convinced?",
        copy: "Visibility without response is leakage. The site should make the next action obvious and preserve context for follow-up.",
        bullets: [
          "Forms, phone links, booking paths, and chat entry points work on mobile.",
          "The CTA matches intent: report for strategy, contact for implementation, receptionist for lead response.",
          "Lead context can be routed into CRM notes, tags, or follow-up workflows.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is AI search readiness?",
        answer:
          "AI search readiness is the degree to which AI systems, search engines, and buyers can understand a business from its public information: services, location, proof, FAQs, schema, reviews, and lead paths.",
      },
      {
        question: "Should a business add schema before fixing content?",
        answer:
          "Schema should support real visible content. If the page is vague, unsupported schema will not solve the underlying clarity problem and can create trust or compliance risk.",
      },
      {
        question: "What should be fixed first?",
        answer:
          "Fix the public facts first: business name, service language, location or service area, primary offer, proof, and contact path. Then expand service pages, FAQs, schema, and supporting content.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "AI Search Visibility System", href: "/visibility-system" },
      { label: "AI Search Visibility FAQ", href: "/faq" },
    ],
  },
  {
    slug: "ai-search-vs-local-seo",
    title: "AI Search vs Local SEO: What Service Businesses Need to Know",
    description:
      "A practical comparison of AI search visibility and local SEO for service businesses, including what overlaps, what changes, and what to fix first.",
    eyebrow: "Comparison",
    intent: "Comparison intent for AI search visibility versus local SEO",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "8 min read",
    summary:
      "AI search visibility and local SEO overlap, but they are not identical. Local SEO helps a business compete in maps, organic search, and local discovery. AI search visibility asks whether answer engines can confidently summarize, compare, and recommend that business.",
    primaryCta: { label: "Get Your Free Visibility Report", href: "/contact" },
    secondaryCta: { label: "View industry pages", href: "/industries" },
    finalCta: {
      title: "Use AI search and local SEO together.",
      copy: "Civive reviews the public signals that affect both rankings and AI recommendations, then turns the overlap into a cleaner implementation sequence.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title:
          "AI search does not replace local SEO. It raises the clarity bar.",
        copy: "Local SEO still matters: Google Business Profile, reviews, local pages, citations, technical SEO, and useful service content are still foundational. AI search adds another test: can a machine explain the business accurately from public evidence?",
        bullets: [
          "Local SEO asks whether the business can rank and earn clicks.",
          "AI search asks whether the business can be understood, summarized, compared, and recommended.",
          "The strongest strategy serves both humans and machines with the same clear public evidence.",
        ],
      },
      {
        eyebrow: "Overlap",
        title: "Where local SEO and AI search visibility share the same work.",
        copy: "The overlap is large enough that businesses should not treat AI visibility as a gimmick. Most early wins are better versions of work that already mattered.",
        bullets: [
          "Accurate business facts and consistent service language.",
          "Specific reviews, service pages, FAQs, and local context.",
          "Fast, crawlable, mobile-friendly pages with clean metadata and schema.",
          "A contact path that lets qualified buyers act quickly.",
        ],
      },
      {
        eyebrow: "Difference",
        title: "Where AI search changes the implementation.",
        copy: "AI systems often answer in summaries instead of showing a traditional ranked list. That makes entity clarity, concise definitions, comparison language, and structured answers more important.",
        bullets: [
          "Pages should start with direct answers before adding detail.",
          "The site should explain who the business helps, when it is a fit, and when it is not.",
          "FAQs should answer buyer questions in natural language, not just keyword variants.",
          "Proof should be easy to quote, summarize, and connect to a service.",
        ],
      },
      {
        eyebrow: "Mistake",
        title: "Do not chase AI search with fake authority.",
        copy: "Fake reviews, fake locations, fake clients, and unsupported schema are not shortcuts. They create reputational and indexing risk while making the site less trustworthy.",
        bullets: [
          "Do not add Review or AggregateRating schema unless real visible reviews support it.",
          "Do not create city pages for places the business does not genuinely serve.",
          "Do not publish generic AI-written articles that do not support a commercial or educational role.",
        ],
      },
      {
        eyebrow: "Sequence",
        title: "The best order is foundation, pages, proof, then automation.",
        copy: "A service business should fix entity clarity first, then build buyer-intent pages, then add proof and supporting resources, then strengthen lead capture and follow-up.",
        bullets: [
          "Report the current public facts.",
          "Clarify the homepage, core services, FAQs, schema, and sitemap.",
          "Build supporting content around buyer questions, cost, comparison, checklists, and mistakes.",
          "Connect discovery to booking, CRM, follow-up, and AI receptionist systems.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is AI search visibility just SEO renamed?",
        answer:
          "No. It overlaps with SEO, but AI search visibility focuses more heavily on entity clarity, answer formatting, summaries, structured context, and whether a system can recommend the business with confidence.",
      },
      {
        question: "Does Google Business Profile still matter?",
        answer:
          "Yes. Google Business Profile remains one of the strongest local business evidence sources. AI visibility work should align the site, services, reviews, FAQs, and profile language.",
      },
      {
        question: "Should service businesses still create local SEO pages?",
        answer:
          "Yes, when the pages are real and useful. Location or service-area pages should include genuine local context, service details, proof, FAQs, and conversion paths instead of duplicated doorway content.",
      },
    ],
    relatedLinks: [
      { label: "Visibility System", href: "/visibility-system" },
      { label: "Industries", href: "/industries" },
      {
        label: "AI Search Readiness Checklist",
        href: "/resources/ai-search-readiness-checklist",
      },
    ],
  },
  {
    slug: "ai-search-audit-cost",
    title: "How Much Should a Visibility Report Cost?",
    description:
      "A practical guide to Visibility Report pricing, scope, deliverables, and what local service businesses should expect before paying for implementation.",
    eyebrow: "Cost guide",
    intent: "Cost and pricing intent for Visibility Report services",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "6 min read",
    summary:
      "A Visibility Report should be priced around the depth of inspection, the number of public surfaces reviewed, and whether the provider only diagnoses issues or also maps implementation. The cheapest report is not always the best if it produces no fix order.",
    primaryCta: { label: "Request report pricing", href: "/contact" },
    secondaryCta: { label: "See report scope", href: "/ai-search-audit" },
    finalCta: {
      title: "Price the report around the fix order.",
      copy: "Civive can inspect the current footprint, separate quick wins from rebuild work, and show which visibility fixes are worth paying for first.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title: "Report cost depends on depth, not just page count.",
        copy: "A useful report reviews the business as an entity, not just a website. The price should reflect how many public surfaces are inspected and how actionable the output is.",
        bullets: [
          "Light scans can identify obvious issues but usually miss implementation priority.",
          "Deeper reports review homepage clarity, service pages, Google profile alignment, reviews, FAQs, schema, sitemap, robots, internal links, and lead capture.",
          "Implementation planning costs more because it turns findings into a build sequence.",
        ],
      },
      {
        eyebrow: "What affects price",
        title: "The main pricing drivers are scope, risk, and actionability.",
        copy: "A single-location service business with a small site is different from a multi-service company with many locations, old content, duplicate pages, and CRM handoff issues.",
        bullets: [
          "Number of services, locations, and public profiles reviewed.",
          "Whether competitors and AI-answer examples are included.",
          "Depth of technical SEO, schema, internal-link, and lead-capture review.",
          "Whether the deliverable includes briefs, priorities, and implementation recommendations.",
        ],
      },
      {
        eyebrow: "What to expect",
        title: "A good report should leave you knowing what to fix first.",
        copy: "The output should not be a vague score. It should show what is unclear, why it matters, what page or system is affected, and what the next step should be.",
        bullets: [
          "A priority map of visibility gaps.",
          "Notes on entity clarity, services, location or service area, and proof.",
          "Metadata, schema, sitemap, robots, and internal-link observations.",
          "Lead-capture and follow-up risks that could waste new visibility.",
        ],
      },
      {
        eyebrow: "Red flags",
        title: "Avoid reports that sell certainty they cannot prove.",
        copy: "No honest provider can guarantee that ChatGPT, Google, Gemini, or Perplexity will recommend a business on demand. The right promise is cleaner public evidence and a stronger implementation path.",
        bullets: [
          "Guaranteed rankings or AI answer placement.",
          "Fake reviews, fake case studies, fake awards, or fake location pages.",
          "Schema added for claims not visible on the page.",
          "A long report with no conversion or implementation plan.",
        ],
      },
      {
        eyebrow: "Best use",
        title: "Use the report to avoid building the wrong pages first.",
        copy: "The highest value is sequencing. A business may need service pages, FAQ improvements, schema, Google profile cleanup, review strategy, lead-capture fixes, or AI receptionist routing. The report should tell you which comes first.",
        bullets: [
          "Buyer-intent pages usually beat generic blog posts.",
          "Entity and technical cleanup should happen before heavy content expansion.",
          "Lead capture should be fixed before visibility increases demand.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a free AI search report useful?",
        answer:
          "A short free report can be useful for finding obvious gaps. A paid report should go deeper, prioritize fixes, and explain what should be implemented first.",
      },
      {
        question: "Should I pay for implementation right away?",
        answer:
          "Not until the scope is clear. The report should identify whether the next step is content, schema, technical cleanup, Google profile alignment, lead capture, or response automation.",
      },
      {
        question: "Can report pricing be standardized?",
        answer:
          "Some parts can be standardized, but businesses with more services, locations, old content, or CRM complexity require deeper review and more careful implementation planning.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "Contact Civive Unlimited", href: "/contact" },
      {
        label: "AI Search vs Local SEO",
        href: "/resources/ai-search-vs-local-seo",
      },
    ],
  },
  {
    slug: "what-does-an-ai-search-audit-include",
    title: "What Does a Visibility Report Include?",
    description:
      "A clear breakdown of what a Visibility Report should inspect, including entity clarity, services, Google Business Profile alignment, schema, content, internal links, and lead capture.",
    eyebrow: "Report scope",
    intent: "Buyer intent for Visibility Report deliverables and scope",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "7 min read",
    summary:
      "A Visibility Report should inspect whether a business is easy for buyers, Google, and answer engines to understand. The deliverable should identify unclear public facts, weak service signals, missing structured data, thin supporting content, and lead-capture leaks.",
    primaryCta: { label: "Request a visibility report", href: "/contact" },
    secondaryCta: { label: "See report page", href: "/ai-search-audit" },
    finalCta: {
      title: "Get the report scope before building more pages.",
      copy: "Civive can review the current public footprint and turn the findings into a practical cleanup order for search, AI answers, and lead capture.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title: "The report should inspect the business as an entity.",
        copy: "A useful AI search report is not just a title-tag scan. It checks whether the public web can understand the business, the offer, the audience, the service area, the proof, and the next step.",
        bullets: [
          "Business name, phone, email, location, canonical domain, and social profiles are consistent.",
          "The homepage clearly explains who the business helps and what it does.",
          "The primary offer is connected to a conversion path instead of buried in vague copy.",
          "The public facts match Google Business Profile and other important profiles.",
        ],
      },
      {
        eyebrow: "Service clarity",
        title: "The report should separate services by search intent.",
        copy: "A service list is not enough. The report should identify which services deserve their own pages, which can stay grouped, and which buyer questions need direct answers.",
        bullets: [
          "Core service pages are mapped to commercial, problem, comparison, cost, and FAQ intent.",
          "Weak or duplicate pages are flagged for improvement, merge, redirect, or noindex decisions.",
          "Internal links move visitors from supporting education into the commercial report or contact path.",
        ],
      },
      {
        eyebrow: "Machine context",
        title: "The report should review technical SEO and schema together.",
        copy: "Clean schema cannot rescue unclear content, and good content should not be hidden behind messy technical signals. The report should evaluate both as one search surface.",
        bullets: [
          "Canonical tags, robots meta, sitemap, robots.txt, status codes, and public crawlability.",
          "Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, and Article JSON-LD where visible content supports it.",
          "No unsupported reviews, ratings, fake authors, fake locations, or invisible claims in schema.",
        ],
      },
      {
        eyebrow: "Authority depth",
        title:
          "The report should identify the content cluster, not just one page.",
        copy: "Topical authority comes from a connected map: homepage, commercial pages, pillars, subpillars, resources, proof, and conversion pages. The report should show where the map is missing.",
        bullets: [
          "Buyer-intent pages that should exist before generic blog posts.",
          "Supporting articles that answer checklist, comparison, alternative, cost, mistake, and how-to searches.",
          "Proof pages or build notes that can be created only from real work and visible evidence.",
        ],
      },
      {
        eyebrow: "Revenue path",
        title: "The report should include lead capture and follow-up risk.",
        copy: "Visibility is only useful if a qualified buyer can take action. The report should check whether forms, calls, booking, chat, CRM routing, and follow-up preserve the visitor's intent.",
        bullets: [
          "Mobile CTAs and forms are easy to find and use.",
          "Phone, email, booking, and contact routes are consistent.",
          "Lead context can move into CRM notes, tags, workflows, or an AI receptionist handoff.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an AI search report different from a website report?",
        answer:
          "Yes. It includes website checks, but it also reviews whether the business is understandable across public facts, services, reviews, profiles, schema, FAQs, answer formatting, and conversion paths.",
      },
      {
        question: "Should the report include implementation recommendations?",
        answer:
          "Yes. The most valuable output is the fix order: what to clean up first, which pages matter, which claims need proof, and which lead-capture gaps waste demand.",
      },
      {
        question: "Should the report create schema automatically?",
        answer:
          "Not blindly. Schema should be recommended or implemented only when the visible page supports the claim. Unsupported schema creates trust and indexing risk.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      {
        label: "Visibility Report Cost",
        href: "/resources/ai-search-audit-cost",
      },
      {
        label: "AI Search Readiness Checklist",
        href: "/resources/ai-search-readiness-checklist",
      },
    ],
  },
  {
    slug: "ai-search-audit-alternatives",
    title: "Visibility Report Alternatives for Local Service Businesses",
    description:
      "Compare Visibility Report alternatives, including DIY cleanup, traditional local SEO, Google Business Profile optimization, content strategy, and conversion automation.",
    eyebrow: "Alternatives",
    intent:
      "Alternative intent for businesses comparing AI search report options",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "8 min read",
    summary:
      "The best alternative to a Visibility Report depends on the business problem. Some companies need DIY public-fact cleanup, some need local SEO, some need Google Business Profile work, and some need lead-capture automation before more visibility.",
    primaryCta: { label: "Compare your options", href: "/contact" },
    secondaryCta: {
      label: "See the visibility system",
      href: "/visibility-system",
    },
    finalCta: {
      title: "Choose the path that fits the real bottleneck.",
      copy: "Civive can help separate visibility problems from conversion problems so the next spend goes into the work that actually changes the business outcome.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title: "Alternatives work when they match the bottleneck.",
        copy: "A report is useful when the business does not know what to fix first. If the problem is already obvious, a narrower alternative may be enough.",
        bullets: [
          "Use DIY cleanup when public facts are wrong or inconsistent.",
          "Use local SEO when rankings, location pages, and Google Business Profile signals are the main gap.",
          "Use conversion automation when leads are already coming in but response is slow or inconsistent.",
          "Use a full report when service clarity, schema, content, profiles, and lead capture are tangled together.",
        ],
      },
      {
        eyebrow: "DIY cleanup",
        title: "DIY is a good first step for obvious fact problems.",
        copy: "If the business name, phone, service language, location, hours, or contact path are inconsistent, the owner can often fix those before paying for a deeper engagement.",
        bullets: [
          "Update website footer, contact page, Google profile, and social profiles.",
          "Make the homepage say the service, audience, location, and next step clearly.",
          "Remove unsupported claims, dead links, and confusing service labels.",
        ],
      },
      {
        eyebrow: "Local SEO",
        title:
          "Traditional local SEO is still valuable when search demand is clear.",
        copy: "A good local SEO engagement can improve Google Business Profile alignment, service pages, reviews, citations, and local content. The risk is treating AI search as only another keyword surface.",
        bullets: [
          "Good fit: map rankings, service-area content, review strategy, and citation consistency.",
          "Weak fit: no work on entity clarity, answer formatting, schema support, or lead response.",
          "Best version: local SEO plus AI-readable summaries, direct answers, and clean structured data.",
        ],
      },
      {
        eyebrow: "Content strategy",
        title: "Content helps only after the commercial path is clear.",
        copy: "Publishing more articles before the service pages and contact path are clear usually creates crawl waste. Supporting content should be built around buyer questions and internal links.",
        bullets: [
          "Prioritize cost, comparison, alternative, checklist, mistakes, and implementation intent.",
          "Avoid generic posts that do not support a commercial page.",
          "Use internal links to move readers toward the report, relevant service page, or contact path.",
        ],
      },
      {
        eyebrow: "Automation",
        title:
          "Lead response systems are the right alternative when demand already exists.",
        copy: "If calls, forms, and chats already happen but response is slow, the business may need an AI receptionist, booking flow, CRM routing, and follow-up before it needs more visibility.",
        bullets: [
          "Missed-call recovery and fast follow-up can create revenue without waiting for rankings.",
          "Booking and CRM handoff preserve the context search traffic creates.",
          "Visibility and automation work best together once the public signals are clear.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I do AI search readiness myself?",
        answer:
          "Yes, if the issues are simple. Start by making the business facts, service language, location, proof, FAQs, and contact path consistent across the website and public profiles.",
      },
      {
        question: "Should I hire a local SEO agency instead?",
        answer:
          "Maybe. A strong local SEO agency is useful for rankings, profile optimization, reviews, local pages, and citations. Make sure the work also improves entity clarity, answer formatting, schema, and conversion paths.",
      },
      {
        question: "When is an AI search report worth it?",
        answer:
          "It is worth it when the business has several overlapping problems and needs a clear fix order before paying for pages, schema, profile cleanup, or automation.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      {
        label: "AI Search vs Local SEO",
        href: "/resources/ai-search-vs-local-seo",
      },
      { label: "AI Receptionist", href: "/ai-receptionist" },
    ],
  },
  {
    slug: "best-ai-search-audit-for-service-businesses",
    title: "Best Visibility Report for Service Businesses: How to Choose",
    description:
      "How local service businesses should choose an AI search report provider without falling for fake certainty, shallow scans, unsupported schema, or generic SEO reports.",
    eyebrow: "Best-fit guide",
    intent: "Best provider intent for choosing a Visibility Report",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "8 min read",
    summary:
      "The best AI search report provider for a service business is the one that connects public visibility signals to revenue action: clearer services, trustworthy proof, crawlable structure, valid schema, and a lead path that actually works.",
    primaryCta: { label: "Ask Civive to report it", href: "/contact" },
    secondaryCta: { label: "See report scope", href: "/ai-search-audit" },
    finalCta: {
      title: "Pick the provider who can turn findings into action.",
      copy: "Civive focuses the report on practical signal cleanup, buyer-intent pages, schema that matches visible content, and lead paths that support revenue.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title: "The best report is specific, honest, and implementation-ready.",
        copy: "A strong provider does not promise guaranteed AI recommendations. They show what public evidence is unclear, what machines can and cannot parse, and what should be fixed first.",
        bullets: [
          "The report maps findings to pages, profiles, schema, and conversion paths.",
          "The provider refuses fake reviews, fake locations, fake awards, and unsupported structured data.",
          "The output gives a fix order, not only a score.",
        ],
      },
      {
        eyebrow: "Selection criteria",
        title: "Choose a provider who understands local service intent.",
        copy: "HVAC, plumbing, roofing, med spas, law firms, restoration, and other local services do not win with generic AI content. The report should understand urgent, local, trust-heavy buyer behavior.",
        bullets: [
          "They separate service, problem, cost, comparison, emergency, local, and FAQ intent.",
          "They understand Google Business Profile, reviews, service areas, and conversion friction.",
          "They can explain how visibility connects to calls, forms, booking, CRM, and follow-up.",
        ],
      },
      {
        eyebrow: "Deliverables",
        title: "Look for a clear fix order and page map.",
        copy: "The best report should tell the business what to improve, merge, create, noindex, or support with internal links. It should not be a pile of disconnected observations.",
        bullets: [
          "Homepage and core service clarity recommendations.",
          "Schema, sitemap, robots, canonical, and metadata checks.",
          "Buyer-intent content gaps prioritized before low-value informational posts.",
          "Lead-capture and response recommendations where demand would otherwise leak.",
        ],
      },
      {
        eyebrow: "Red flags",
        title: "Avoid vendors selling certainty or fake authority.",
        copy: "AI search is not a slot machine where a vendor can guarantee placement. Treat guaranteed recommendations, fake ratings, and mass-produced pages as risk signals.",
        bullets: [
          "Promises that ChatGPT, Gemini, or Perplexity will recommend the business on demand.",
          "Review, AggregateRating, award, client, or case-study schema without visible proof.",
          "Dozens of near-duplicate pages created only to capture keywords.",
        ],
      },
      {
        eyebrow: "Best fit",
        title: "The right provider should improve both ranking and response.",
        copy: "Search visibility creates opportunity. A serious provider should also care about whether the business can answer, book, and follow up with the lead after the click or recommendation.",
        bullets: [
          "The report supports local SEO, AI-search clarity, and conversion.",
          "Implementation can include pages, schema, profile cleanup, and automation.",
          "The work can be reused across future content, sales assets, and client delivery systems.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who needs an AI search report provider?",
        answer:
          "A provider is useful when the business has unclear services, thin pages, inconsistent public facts, weak schema, poor internal links, or lead-response gaps that require a prioritized plan.",
      },
      {
        question: "What should I ask before hiring someone?",
        answer:
          "Ask what they inspect, how they avoid unsupported schema, how they prioritize pages, how they handle Google Business Profile alignment, and whether the deliverable includes a fix order.",
      },
      {
        question: "Can the same provider implement the fixes?",
        answer:
          "Yes, if they can show the implementation path clearly. The report should make it obvious whether the next step is content, technical cleanup, profile alignment, schema, or lead response automation.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      {
        label: "What the report includes",
        href: "/resources/what-does-an-ai-search-audit-include",
      },
      {
        label: "Report alternatives",
        href: "/resources/ai-search-audit-alternatives",
      },
    ],
  },
  {
    slug: "ai-search-visibility-mistakes",
    title: "AI Search Visibility Mistakes Local Businesses Should Avoid",
    description:
      "Common AI search visibility mistakes local service businesses make, including vague services, fake proof, unsupported schema, thin content, and broken lead paths.",
    eyebrow: "Mistakes",
    intent:
      "Mistakes intent for AI search visibility and local service business SEO",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "7 min read",
    summary:
      "Most AI search visibility mistakes are clarity mistakes. The business makes it hard for buyers and machines to understand the service, location, proof, process, and next step, then tries to compensate with keywords or unsupported schema.",
    primaryCta: { label: "Find your visibility gaps", href: "/contact" },
    secondaryCta: {
      label: "Use the checklist",
      href: "/resources/ai-search-readiness-checklist",
    },
    finalCta: {
      title: "Fix the clarity mistakes before scaling content.",
      copy: "Civive can identify which public signals are hurting understanding and which pages, schema, links, or lead paths should be fixed first.",
    },
    sections: [
      {
        eyebrow: "Mistake 1",
        title: "Using vague service language.",
        copy: "A business cannot expect AI systems to recommend it for specific problems if the site only uses broad slogans and generic service lists.",
        bullets: [
          "Name the service categories buyers actually search for.",
          "Explain who each service is for and what problem it solves.",
          "Connect each major service to a contact, booking, quote, or report path.",
        ],
      },
      {
        eyebrow: "Mistake 2",
        title: "Treating schema like a magic ranking trick.",
        copy: "Schema helps machines understand visible content. It should not be used to claim reviews, ratings, services, locations, authors, awards, or proof that the page does not show.",
        bullets: [
          "Use Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, and Article schema where supported.",
          "Do not use Review or AggregateRating schema unless real visible reviews support it.",
          "Keep JSON-LD aligned with the page the visitor can actually see.",
        ],
      },
      {
        eyebrow: "Mistake 3",
        title: "Publishing content that does not support a buying path.",
        copy: "A random blog archive can waste crawl budget and confuse the topical map. Supporting content should answer specific buyer questions and link to commercial pages.",
        bullets: [
          "Prioritize cost, alternatives, comparison, checklist, mistakes, examples, and implementation queries.",
          "Avoid semantic duplicates that compete with existing pages.",
          "Use contextual internal links instead of generic related posts.",
        ],
      },
      {
        eyebrow: "Mistake 4",
        title: "Ignoring Google Business Profile and public consistency.",
        copy: "AI search visibility does not live only on the website. Mismatched categories, services, phone numbers, locations, and descriptions make the business harder to trust.",
        bullets: [
          "Keep name, address, phone, email, services, and service areas consistent.",
          "Align website service language with Google Business Profile services.",
          "Use reviews and profile content as real evidence, not fake proof.",
        ],
      },
      {
        eyebrow: "Mistake 5",
        title: "Winning attention but losing the lead.",
        copy: "If a buyer finds the business and the form, phone, booking, or chat path fails, the visibility work leaks revenue.",
        bullets: [
          "Make the CTA visible on desktop and mobile.",
          "Route form context into CRM notes, tags, or follow-up where possible.",
          "Use AI receptionist or missed-call recovery when response speed is the bottleneck.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the biggest AI search visibility mistake?",
        answer:
          "The biggest mistake is unclear public information. If services, location, proof, FAQs, schema, and next steps are vague or inconsistent, AI systems have less evidence to summarize or recommend the business.",
      },
      {
        question: "Can too much content hurt the site?",
        answer:
          "Yes, when pages are thin, duplicated, or disconnected from a clear topical map. It is better to publish fewer pages that each serve a unique intent and support a commercial path.",
      },
      {
        question: "Is unsupported schema risky?",
        answer:
          "Yes. Schema should match visible content. Unsupported review, rating, location, award, or service claims can create trust, compliance, and indexing risk.",
      },
    ],
    relatedLinks: [
      {
        label: "AI Search Readiness Checklist",
        href: "/resources/ai-search-readiness-checklist",
      },
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "Visibility System", href: "/visibility-system" },
    ],
  },
  {
    slug: "ai-search-implementation-plan-service-businesses",
    title: "AI Search Implementation Plan for Service Businesses",
    description:
      "A practical implementation sequence for local service businesses improving AI search visibility, from entity cleanup and service pages to schema, proof, internal links, and lead response.",
    eyebrow: "Implementation",
    intent: "How-to and implementation intent for AI search visibility systems",
    updated: "April 24, 2026",
    publishedDate: "2026-04-24",
    lastModified: "2026-04-24",
    readTime: "9 min read",
    summary:
      "The best AI search implementation plan starts with entity cleanup, then fixes commercial pages, then adds schema and supporting content, then strengthens proof and lead response. Do not scale articles before the business is understandable.",
    primaryCta: { label: "Map your implementation", href: "/contact" },
    secondaryCta: {
      label: "See the visibility system",
      href: "/visibility-system",
    },
    finalCta: {
      title: "Turn the implementation plan into a build sequence.",
      copy: "Civive can use the report to decide which signals to fix first, which pages to create, and where automation should support the new demand.",
    },
    sections: [
      {
        eyebrow: "Step 1",
        title: "Clean up the entity before adding pages.",
        copy: "Search engines and answer systems need a stable entity: business name, canonical domain, services, location, contact details, profiles, and public descriptions that agree.",
        bullets: [
          "Centralize business facts in the site code or CMS.",
          "Align homepage, footer, contact page, Google Business Profile, and public profiles.",
          "Fix duplicate domains, inconsistent phone numbers, and outdated descriptions.",
        ],
      },
      {
        eyebrow: "Step 2",
        title: "Strengthen the commercial pages first.",
        copy: "The homepage, report page, main service pages, industry pages, and contact page should be clear before supporting content expands.",
        bullets: [
          "Each commercial page gets one primary intent and one conversion goal.",
          "Add direct-answer intros, decision criteria, FAQs, proof where real, and clear CTAs.",
          "Use internal links from home, pillars, support pages, and proof pages into the commercial path.",
        ],
      },
      {
        eyebrow: "Step 3",
        title: "Add schema only where the visible content supports it.",
        copy: "JSON-LD should reinforce the page. It should not create fake authority. The implementation plan should define which schema types belong on which routes.",
        bullets: [
          "Organization and WebSite schema site-wide.",
          "WebPage and BreadcrumbList on indexable pages.",
          "Service schema on service pages, FAQPage only for visible FAQs, Article schema only for real articles.",
        ],
      },
      {
        eyebrow: "Step 4",
        title: "Build supporting content around buyer intent.",
        copy: "After the money pages are clear, publish support pages that answer the questions buyers ask before they contact, compare, or buy.",
        bullets: [
          "Checklist, cost, alternatives, best-fit, mistakes, scope, implementation, and FAQ pages.",
          "Industry-specific pages for verticals with distinct service and trust signals.",
          "Related-resource sections and contextual links that support the topical map.",
        ],
      },
      {
        eyebrow: "Step 5",
        title: "Connect visibility to response speed.",
        copy: "The final implementation layer is operational. Search traffic should move into forms, calls, booking, chat, CRM notes, follow-up, and receptionist workflows without losing context.",
        bullets: [
          "Test forms, phone links, booking links, and mobile CTAs.",
          "Route leads into CRM fields, tags, pipelines, and follow-up workflows.",
          "Use missed-call recovery or AI receptionist support when lead response is the revenue bottleneck.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should be implemented first for AI search visibility?",
        answer:
          "Start with entity cleanup and commercial-page clarity. If the business facts, services, location, proof, and next step are unclear, more content will not solve the root problem.",
      },
      {
        question: "How many pages should a service business build?",
        answer:
          "Only as many as there are unique search intents worth serving. Core service, industry, cost, comparison, alternative, checklist, and FAQ pages usually matter before generic articles.",
      },
      {
        question: "When should lead automation be added?",
        answer:
          "Add lead automation when the business has demand or is about to create more. Fast response, booking, CRM handoff, and follow-up prevent new visibility from turning into missed revenue.",
      },
    ],
    relatedLinks: [
      { label: "Visibility System", href: "/visibility-system" },
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "CiviveOS", href: "/civive-os" },
    ],
  },
  {
    slug: "chatgpt-business-recommendations-local-service-businesses",
    title:
      "How Local Service Businesses Can Become Easier for ChatGPT to Recommend",
    description:
      "A practical guide for local service businesses that want clearer public evidence for ChatGPT, Gemini, Grok, Perplexity, Google, and buyers.",
    eyebrow: "AI recommendations",
    intent:
      "AI-answer visibility intent for local service businesses that want to be easier for AI tools to understand and cite",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "8 min read",
    summary:
      "No provider can honestly guarantee a business will be recommended by ChatGPT, Gemini, Grok, Perplexity, or Google. What a service business can do is make its public evidence clearer, more consistent, and easier for those systems to understand.",
    primaryCta: { label: "Get Your Free Visibility Report", href: "/contact" },
    secondaryCta: {
      label: "See the visibility system",
      href: "/visibility-system",
    },
    finalCta: {
      title: "Make the business easier for AI systems to understand.",
      copy: "Civive can inspect the public footprint, find the weak evidence, and map the safest fix sequence for Google and AI-answer visibility.",
    },
    sections: [
      {
        eyebrow: "Direct answer",
        title: "AI recommendations start with clear public evidence.",
        copy: "A local service business becomes easier for AI tools to recommend when its website, Google profile, reviews, services, locations, FAQs, schema, and conversion paths all tell the same accurate story. The goal is not to trick an AI system. The goal is to remove ambiguity so the business can be understood when a buyer asks for help.",
        bullets: [
          "Name the business, services, service area, and ideal buyer clearly.",
          "Explain the problems each service solves in buyer language.",
          "Show real proof, policies, process details, and contact options where they are visible to people.",
          "Use schema, metadata, sitemap, robots, and internal links to reinforce the same facts.",
        ],
      },
      {
        eyebrow: "What AI tools need",
        title: "Give answer engines stable entities, not scattered hints.",
        copy: "AI systems summarize from public information. If the homepage says one thing, the service pages say another, and the Google profile uses different categories, the business becomes harder to classify. Stable entities help search engines and answer systems connect the brand to the right services and local intent.",
        bullets: [
          "Keep the brand name, phone, email, domain, location, and service area consistent.",
          "Use one canonical www domain and make sure important pages are crawlable.",
          "Connect service pages, industry pages, resources, and contact paths with descriptive internal links.",
          "Avoid unsupported claims, fake locations, fake awards, fake reviews, or inflated schema.",
        ],
      },
      {
        eyebrow: "What to fix first",
        title: "Strengthen the pages AI tools would use as source material.",
        copy: "The strongest first move is usually not publishing more articles. It is improving the pages that explain the business: homepage, service pages, industry pages, report or offer pages, contact page, FAQs, and public profiles. Supporting resources should then answer the questions buyers and AI systems ask before choosing a provider.",
        bullets: [
          "Use direct-answer intros that define the service and who it helps.",
          "Add decision criteria, cost context, process details, and mistake warnings where appropriate.",
          "Publish FAQs that answer real buyer questions and support FAQ schema only when visible.",
          "Link support articles back to the report, visibility system, industry hub, and contact path.",
        ],
      },
      {
        eyebrow: "How this supports Google",
        title:
          "AI visibility and Google visibility overlap more than they conflict.",
        copy: "Google, Bing, maps surfaces, AI overviews, answer engines, and buyers all benefit from clear service information, crawlable pages, internal links, useful FAQs, consistent business facts, and strong conversion paths. A clean topical map helps every system decide what the business is about and which page best answers a query.",
        bullets: [
          "Use one page for one primary intent so pages do not compete with each other.",
          "Build buyer-intent resources around cost, comparison, alternatives, best fit, mistakes, templates, and implementation.",
          "Use breadcrumbs, related resources, and contextual links to show parent-child topic relationships.",
          "Refresh pages when services, offers, pricing context, or public facts change.",
        ],
      },
      {
        eyebrow: "Lead path",
        title: "Do not win the answer and lose the lead.",
        copy: "Better visibility creates more opportunities only if the visitor can act. AI-answer and Google traffic should land on pages with clear CTAs, working phone links, useful forms, and a follow-up path that preserves context.",
        bullets: [
          "Match the CTA to the page intent: report for diagnosis, contact for implementation, receptionist for response leakage.",
          "Make phone, form, and booking actions easy on mobile.",
          "Route lead context into CRM notes, tags, pipelines, or follow-up when possible.",
          "Use missed-call recovery or AI receptionist support when response speed is the bottleneck.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a business guarantee it will be recommended by ChatGPT?",
        answer:
          "No. No honest provider can guarantee recommendations in ChatGPT, Gemini, Grok, Perplexity, or Google. The controllable work is improving public evidence, clarity, crawlability, authority signals, and conversion paths.",
      },
      {
        question:
          "What makes a local business easier for AI tools to understand?",
        answer:
          "Consistent business facts, clear services, visible proof, useful FAQs, schema that matches the page, strong internal links, accurate local signals, and a clean contact path all make the business easier to understand.",
      },
      {
        question: "Should a business optimize for AI tools or Google first?",
        answer:
          "Start with the shared foundation: clear entity information, service pages, crawlability, metadata, schema, FAQs, and proof. These support both Google visibility and AI-answer understanding.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "Visibility System", href: "/visibility-system" },
      {
        label: "AI Search Implementation Plan",
        href: "/resources/ai-search-implementation-plan-service-businesses",
      },
      { label: "Industries Civive serves", href: "/industries" },
    ],
  },
  {
    slug: "ai-search-audit-for-home-service-businesses",
    title: "Visibility Report for Home Service Businesses",
    description:
      "How HVAC, plumbing, roofing, cleaning, restoration, pest control, landscaping, and other home service companies should approach AI search readiness.",
    eyebrow: "Home services",
    intent:
      "Buyer and industry-fit intent for home service businesses evaluating an AI search report",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "8 min read",
    summary:
      "Home service businesses need AI search readiness because buyers often ask urgent, local, problem-aware questions. The report should connect service clarity, service-area signals, proof, reviews, FAQs, schema, and fast response.",
    primaryCta: { label: "Report my home service visibility", href: "/contact" },
    secondaryCta: {
      label: "See all industries",
      href: "/industries",
    },
    finalCta: {
      title: "Turn home-service demand into a clearer path to contact.",
      copy: "Civive can inspect the public evidence, find the confusing service and location signals, and map the fixes that help buyers and answer engines understand why to contact the business.",
    },
    sections: [
      {
        eyebrow: "Best fit",
        title: "Home service AI search is problem-aware and local.",
        copy: "A homeowner usually asks for help around a specific issue, location, urgency, or trust concern. That means the website has to explain not only the service, but when to call, what happens next, where the business operates, and why the provider is credible.",
        bullets: [
          "HVAC, plumbing, electrical, roofing, restoration, pest control, cleaning, and landscaping pages need distinct service intent.",
          "Emergency, seasonal, maintenance, repair, replacement, and inspection queries should not all collapse into one vague page.",
          "Service-area language should be accurate and useful, not a fake location network.",
          "The lead path should support calls, forms, booking, and after-hours response when relevant.",
        ],
      },
      {
        eyebrow: "Report scope",
        title:
          "The report should test whether buyers can understand the offer quickly.",
        copy: "For home services, the first report layer is clarity: what the business does, which jobs it wants, where it works, how someone contacts it, and what proof supports the choice. If those facts are scattered, AI systems and buyers have to work too hard.",
        bullets: [
          "Homepage and main service pages explain the core jobs in direct language.",
          "Industry and service pages answer cost, timing, process, warranty, and readiness questions where appropriate.",
          "Reviews, credentials, photos, policies, or process proof are visible when real.",
          "Phone, form, and booking CTAs work on mobile and preserve the request context.",
        ],
      },
      {
        eyebrow: "Local signals",
        title:
          "Google Business Profile and service areas must agree with the site.",
        copy: "A home service company is often evaluated across the website, Google Business Profile, maps results, reviews, directories, and local citations. Mismatched names, phone numbers, categories, descriptions, and service areas weaken the entity.",
        bullets: [
          "Use the same business facts across the site footer, contact page, Google profile, and public listings.",
          "Align service names on the website with real Google profile services where possible.",
          "Do not invent offices, fake city pages, or unsupported local schema.",
          "Use local context only when it is real and useful to the buyer.",
        ],
      },
      {
        eyebrow: "Answer structure",
        title:
          "FAQs, schema, and internal links help each service become clearer.",
        copy: "Home service pages should answer the questions that make a buyer hesitate: when to call, what it costs, what is included, how scheduling works, what emergencies qualify, and what happens after submitting a request.",
        bullets: [
          "Add visible FAQs before adding FAQPage schema.",
          "Use Service schema only when the visible page clearly supports the service.",
          "Link service pages to related industry pages, supporting resources, and contact CTAs.",
          "Use descriptive anchors instead of repeating the same exact-match phrase everywhere.",
        ],
      },
      {
        eyebrow: "Revenue path",
        title: "Visibility should connect to fast lead response.",
        copy: "Home service leads decay quickly. If the business improves visibility but misses calls, delays form response, or loses after-hours requests, the SEO work produces leakage instead of revenue.",
        bullets: [
          "Use click-to-call and request-report CTAs in the visible page flow.",
          "Prepare CRM notes, tags, or fields for service type, urgency, location, and preferred contact method.",
          "Add missed-call recovery or AI receptionist support when response speed is hurting close rates.",
          "Review the contact path after every major SEO or content expansion.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Which home service businesses benefit most from an AI search report?",
        answer:
          "Businesses with service-area demand, urgent calls, unclear service pages, inconsistent Google profile signals, weak FAQs, or slow lead response usually benefit most because the report connects visibility to buyer action.",
      },
      {
        question: "Should a home service company create city pages?",
        answer:
          "Only when each page is real, useful, and supported by accurate service-area context. Thin or fake local pages can create doorway-page risk and should be avoided.",
      },
      {
        question: "How does AI search readiness help home service leads?",
        answer:
          "It makes the business easier to understand when buyers or answer engines compare providers by service, location, urgency, trust, process, and next step.",
      },
    ],
    relatedLinks: [
      { label: "Industries Civive serves", href: "/industries" },
      { label: "Visibility Report", href: "/ai-search-audit" },
      {
        label: "AI Search Readiness Checklist",
        href: "/resources/ai-search-readiness-checklist",
      },
      { label: "AI Receptionist", href: "/ai-receptionist" },
    ],
  },
  {
    slug: "ai-search-visibility-service-page-template",
    title: "AI Search Visibility Service Page Template",
    description:
      "A practical service page template for AI search visibility, local SEO, answer engines, internal links, FAQs, schema, and lead conversion.",
    eyebrow: "Template",
    intent:
      "Template and tool intent for service businesses improving a page for AI search visibility",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "9 min read",
    summary:
      "A strong service page should define the service, who it helps, when to use it, what is included, what proof supports it, what questions buyers ask, and what action to take next. This template gives that page a clean structure.",
    primaryCta: { label: "Have Civive map the page", href: "/contact" },
    secondaryCta: {
      label: "Start with the checklist",
      href: "/resources/ai-search-readiness-checklist",
    },
    finalCta: {
      title:
        "Use the template, then connect it to the whole visibility system.",
      copy: "Civive can turn this structure into a prioritized service-page plan with metadata, internal links, schema, FAQs, and conversion paths aligned to the business.",
    },
    sections: [
      {
        eyebrow: "Page purpose",
        title: "Give each service page one clear job.",
        copy: "A service page should not be a catch-all brochure. It should answer one primary search intent, explain the service in buyer language, and move the visitor toward the right next step. That clarity also helps search engines and answer engines classify the page.",
        bullets: [
          "Primary topic: the specific service or problem the page targets.",
          "Business goal: call, quote, booking, visibility report request, or consultation.",
          "Topical role: commercial page, subpillar, local page, or support page.",
          "Entity purpose: connect the brand to a real service, audience, location, and proof.",
        ],
      },
      {
        eyebrow: "Above the fold",
        title: "Start with the answer before the sales copy.",
        copy: "The first screen should make the page understandable without scrolling. Use a clear H1, direct-answer intro, service-area or audience context, proof where real, and a CTA that matches the visitor's intent.",
        bullets: [
          "H1: the service name and buyer context.",
          "Intro: what the service is, who it helps, and when to use it.",
          "CTA: call, book, request a visibility report, or contact depending on the offer.",
          "Trust: real reviews, credentials, guarantees, process details, or examples only when visible and accurate.",
        ],
      },
      {
        eyebrow: "Required sections",
        title: "Answer the questions a buyer and an AI system would both ask.",
        copy: "The strongest service pages explain fit, problems solved, process, inclusions, exclusions, cost factors, timing, service areas, proof, FAQs, and what happens next. This gives both humans and machines more complete context.",
        bullets: [
          "Who this is for and who it is not for.",
          "Common problems, symptoms, or use cases.",
          "What is included and what is not included.",
          "Process, timeline, preparation, and handoff.",
          "Pricing factors or how pricing is determined when exact pricing is not appropriate.",
          "Related services, industries, resources, and contact path.",
        ],
      },
      {
        eyebrow: "Machine layer",
        title: "Add metadata and schema after the visible content is real.",
        copy: "Technical SEO should reinforce the page structure. Each indexable service page needs unique metadata, a canonical URL, robots meta, Open Graph data, Twitter card metadata, breadcrumbs, internal links, and JSON-LD that matches visible content.",
        bullets: [
          "Use Service schema when the page clearly describes the service.",
          "Use FAQPage schema only when the FAQs are visible on the page.",
          "Use BreadcrumbList schema for nested pages.",
          "Avoid Review, AggregateRating, award, client, or case-study schema unless the proof is real and visible.",
        ],
      },
      {
        eyebrow: "Internal links",
        title: "Connect the page into the topical map.",
        copy: "A service page should not sit alone. It should receive links from the homepage, related pillars, support articles, industry pages, and proof pages. It should also link outward to resources that help the visitor choose.",
        bullets: [
          "Link up to the pillar or main offer page.",
          "Link sideways to related services, industries, and comparison resources.",
          "Link down to FAQs, templates, checklists, and implementation resources.",
          "Link forward to contact, booking, report, or lead-response pages.",
        ],
      },
      {
        eyebrow: "Conversion",
        title: "Make the next step obvious and measurable.",
        copy: "A technically strong page still fails if the buyer cannot act. Every commercial service page should make the next step clear and make it easy to preserve the request context after the visitor submits a form, calls, books, or starts a chat.",
        bullets: [
          "Use CTAs near the top, mid-page, and final section.",
          "Make phone and form actions mobile-friendly.",
          "Ask only for the information needed to continue the conversation.",
          "Route context into CRM, follow-up, or AI receptionist workflows when possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a service page be for AI search visibility?",
        answer:
          "It should be long enough to answer the buyer's real decision questions without padding. Depth matters, but only when each section clarifies fit, process, proof, cost, FAQs, internal links, or next steps.",
      },
      {
        question: "Should every service get its own page?",
        answer:
          "Only services with distinct search intent, buyer questions, proof, and conversion value need separate indexable pages. Overlapping services should be consolidated or clearly separated to avoid cannibalization.",
      },
      {
        question: "What schema belongs on a service page?",
        answer:
          "Use WebPage, BreadcrumbList, and Service schema when supported by visible content. Add FAQPage schema only if visible FAQs are on the page. Do not add fake review or rating schema.",
      },
    ],
    relatedLinks: [
      {
        label: "AI Search Readiness Checklist",
        href: "/resources/ai-search-readiness-checklist",
      },
      {
        label: "AI Search Implementation Plan",
        href: "/resources/ai-search-implementation-plan-service-businesses",
      },
      { label: "Visibility System", href: "/visibility-system" },
      { label: "Visibility Report", href: "/ai-search-audit" },
    ],
  },
  {
    slug: "google-business-profile-ai-search-readiness",
    title: "Google Business Profile AI Search Readiness for Local Businesses",
    description:
      "How local service businesses should align Google Business Profile, services, reviews, categories, website content, and AI search visibility signals.",
    eyebrow: "Google profile",
    intent:
      "Buyer and implementation intent for Google Business Profile cleanup as part of AI search readiness",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "8 min read",
    summary:
      "Google Business Profile is one of the clearest public evidence surfaces for a local service business. AI search readiness improves when the profile, website, reviews, categories, services, and contact path all agree.",
    primaryCta: { label: "Report my public signals", href: "/contact" },
    secondaryCta: {
      label: "Compare AI search and local SEO",
      href: "/resources/ai-search-vs-local-seo",
    },
    finalCta: {
      title:
        "Align the Google profile with the website before scaling content.",
      copy: "Civive can inspect the public profile, service language, website pages, and lead path to find the entity gaps that weaken local and AI-search visibility.",
    },
    sections: [
      {
        eyebrow: "Why it matters",
        title: "The Google profile is public evidence, not just a map listing.",
        copy: "For a local service business, Google Business Profile often confirms the business category, phone number, service area, hours, reviews, photos, and primary services. If those facts conflict with the website, AI systems and buyers get a weaker signal.",
        bullets: [
          "Use the same business name, phone, website, location, and service-area language wherever possible.",
          "Keep primary and secondary categories aligned with the services the business actually wants to sell.",
          "Make sure the website page linked from the profile clearly explains the same offer.",
          "Do not invent locations, services, reviews, or credentials to look bigger than the business is.",
        ],
      },
      {
        eyebrow: "Service alignment",
        title: "Profile services should match real service pages.",
        copy: "A profile that lists services the website never explains leaves buyers and answer engines with thin context. A website that publishes service pages not reflected in the profile creates the opposite problem. The two surfaces should reinforce each other.",
        bullets: [
          "Map each high-value service to a visible page or section on the website.",
          "Use buyer language for urgent, seasonal, maintenance, repair, replacement, or consultation needs.",
          "Avoid stuffing categories or services that the business does not actively provide.",
          "Link service resources back to the report, visibility system, and contact path.",
        ],
      },
      {
        eyebrow: "Reviews",
        title: "Reviews should support the real service story.",
        copy: "Reviews can help explain what customers value, which services are trusted, and where the business is active. They should never be faked or represented with schema unless the review content is real and visible.",
        bullets: [
          "Look for reviews that mention specific services, response speed, location, quality, or outcomes.",
          "Use compliant review requests after real customer interactions.",
          "Do not use Review or AggregateRating schema unless the page visibly supports it.",
          "Use review themes to decide which FAQs, proof sections, or service explanations need improvement.",
        ],
      },
      {
        eyebrow: "Local consistency",
        title:
          "Service-area businesses need accuracy more than fake city coverage.",
        copy: "A service-area business can explain where it works without pretending to have offices in every city. Accurate service-area language helps local SEO and AI-answer systems understand the business while avoiding doorway-page risk.",
        bullets: [
          "Name the real operating base and realistic service area.",
          "Explain dispatch, travel, emergency, or appointment boundaries when useful.",
          "Build location pages only when each page has unique, useful local context.",
          "Use the same public phone, domain, and core description across the profile and site.",
        ],
      },
      {
        eyebrow: "Conversion",
        title: "Profile clicks need a clean handoff path.",
        copy: "A buyer who clicks from Google should land on a page that continues the same promise. If the website is vague, slow, broken, or disconnected from follow-up, the profile may win attention but lose revenue.",
        bullets: [
          "Send profile clicks to a page with clear services, CTAs, and contact options.",
          "Use click-to-call, forms, booking, or chat based on how the business actually handles leads.",
          "Route source and service context into CRM notes or follow-up where possible.",
          "Review the profile after major website, service, phone, or offer changes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Google Business Profile affect AI search visibility?",
        answer:
          "It can support it because the profile is a public source of business facts, service categories, reviews, photos, hours, and contact information. It works best when it agrees with the website and other public profiles.",
      },
      {
        question: "Should profile services match website service pages?",
        answer:
          "Yes. The strongest setup is when high-value profile services have clear supporting website pages or sections that explain the service, audience, location context, proof, and next step.",
      },
      {
        question: "Can a business add review schema from Google reviews?",
        answer:
          "Only use review or rating schema when the visible page supports it and the implementation follows platform and search guidelines. Do not add fake, hidden, or unsupported review markup.",
      },
    ],
    relatedLinks: [
      { label: "Visibility Report", href: "/ai-search-audit" },
      { label: "Visibility System", href: "/visibility-system" },
      {
        label: "AI Search vs Local SEO",
        href: "/resources/ai-search-vs-local-seo",
      },
      { label: "Industries Civive serves", href: "/industries" },
    ],
  },
  {
    slug: "location-pages-ai-search-without-doorway-pages",
    title: "Location Pages for AI Search Without Doorway Page Risk",
    description:
      "A risk-aware guide to service-area and location pages for AI search visibility, local SEO, useful content, internal links, and crawl-safe expansion.",
    eyebrow: "Local pages",
    intent:
      "Risk-aware local SEO and AI search intent for building location pages without doorway spam",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "8 min read",
    summary:
      "Location pages should only exist when they help a real buyer in a real market. Thin city swaps, fake offices, duplicate content, and unsupported local claims create risk instead of authority.",
    primaryCta: { label: "Review my local page plan", href: "/contact" },
    secondaryCta: {
      label: "See AI search vs local SEO",
      href: "/resources/ai-search-vs-local-seo",
    },
    finalCta: {
      title: "Build local visibility without creating doorway pages.",
      copy: "Civive can map which locations deserve real pages, which should remain service-area mentions, and where internal links, FAQs, schema, and conversion paths need to be strengthened first.",
    },
    sections: [
      {
        eyebrow: "Core rule",
        title: "A location page must serve a unique local intent.",
        copy: "A location page is useful when it explains how the business serves that area in a way a buyer could not get from a generic service page. If the only difference is a city name swapped into the same template, it is not a strong page.",
        bullets: [
          "Create pages for real markets with enough demand, service relevance, and useful local context.",
          "Avoid fake addresses, fake offices, fake local teams, and copied city paragraphs.",
          "Use service-area explanations when the business travels to customers instead of serving from a storefront.",
          "Do not index pages that are thin, duplicated, or not ready to help a buyer.",
        ],
      },
      {
        eyebrow: "Useful content",
        title: "Local pages need more than a city name.",
        copy: "A strong local page explains the service mix, response expectations, nearby service context, common problems, scheduling path, and proof that is accurate for that market. It should help a buyer decide whether the business is a fit.",
        bullets: [
          "Explain which services are available in that area and any realistic limits.",
          "Answer local buyer questions about timing, travel, emergencies, estimates, or preparation.",
          "Reference real proof only when it is visible and accurate.",
          "Link to the main service page, industry page, relevant resources, and contact path.",
        ],
      },
      {
        eyebrow: "AI search angle",
        title: "Answer engines need local context they can trust.",
        copy: "AI systems may summarize providers by service, geography, urgency, and trust signals. If the location page is vague or unsupported, it gives them little usable evidence. If it is fake, it creates reputational and indexing risk.",
        bullets: [
          "Use accurate service-area and operating-base language.",
          "Keep NAP details consistent across the site and profile ecosystem.",
          "Use LocalBusiness or ProfessionalService schema only when visible content supports it.",
          "Use BreadcrumbList and WebPage schema to place the page in the topical map.",
        ],
      },
      {
        eyebrow: "Internal links",
        title: "Local pages should not become orphaned city silos.",
        copy: "A local page should fit into a clear hierarchy. The homepage and relevant service pages can link to important markets, location pages should link back to the parent service or industry page, and supporting resources should reinforce the same topic cluster.",
        bullets: [
          "Link parent service pages to important local pages when useful.",
          "Link local pages back to the service, industry hub, and contact page.",
          "Use related resources for cost, checklist, mistakes, profile readiness, and implementation questions.",
          "Avoid excessive exact-match anchor text or footer-only city dumps.",
        ],
      },
      {
        eyebrow: "Decision filter",
        title:
          "Improve, consolidate, noindex, or do not create weak local pages.",
        copy: "Not every city or service area deserves an indexable page. A safer local SEO system chooses page status intentionally before publishing at scale.",
        bullets: [
          "Improve pages with real demand and weak content.",
          "Merge pages that target the same intent without meaningful differences.",
          "Noindex or remove thin pages that do not support search or buyers.",
          "Redirect retired URLs to the closest useful page when they have links or traffic value.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a doorway page?",
        answer:
          "A doorway page is a thin or duplicative page created mainly to rank for a variation, often a city or keyword, without providing unique value. Local pages should avoid that pattern.",
      },
      {
        question: "Can a service-area business create location pages?",
        answer:
          "Yes, but only when each page is accurate, useful, and distinct. The page should explain real service coverage and buyer context without pretending the business has a physical location there.",
      },
      {
        question: "Should weak local pages be deleted?",
        answer:
          "Not automatically. First decide whether to improve, merge, redirect, noindex, or remove the page based on usefulness, traffic, links, duplication, and internal-link impact.",
      },
    ],
    relatedLinks: [
      {
        label: "Google Business Profile readiness",
        href: "/resources/google-business-profile-ai-search-readiness",
      },
      {
        label: "AI Search vs Local SEO",
        href: "/resources/ai-search-vs-local-seo",
      },
      { label: "Visibility System", href: "/visibility-system" },
      { label: "Industries Civive serves", href: "/industries" },
    ],
  },
  {
    slug: "schema-for-ai-search-local-businesses",
    title: "Schema for AI Search and Local Service Businesses",
    description:
      "A practical guide to Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, Article, and LocalBusiness schema for AI search visibility.",
    eyebrow: "Schema",
    intent:
      "Technical SEO and implementation intent for local business schema that supports AI search visibility",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "9 min read",
    summary:
      "Schema helps machines understand visible content. It should reinforce accurate business facts, page purpose, services, FAQs, breadcrumbs, and articles. It should not invent reviews, ratings, awards, clients, locations, or proof.",
    primaryCta: { label: "Report my schema and pages", href: "/contact" },
    secondaryCta: {
      label: "See visibility mistakes",
      href: "/resources/ai-search-visibility-mistakes",
    },
    finalCta: {
      title: "Use schema as reinforcement, not decoration.",
      copy: "Civive can identify which schema belongs on each page, which markup is unsupported, and which visible content should be fixed before JSON-LD is added.",
    },
    sections: [
      {
        eyebrow: "Principle",
        title: "Schema must match what visitors can see.",
        copy: "JSON-LD is strongest when it clarifies real content. If the page does not visibly show a review, rating, award, case study, location, service, person, or FAQ, the schema should not claim it. Unsupported markup can create trust and indexing risk.",
        bullets: [
          "Add schema after the page has a clear purpose and visible content.",
          "Use central business facts so Organization and contact details stay consistent.",
          "Keep canonical URLs, breadcrumbs, and schema URLs aligned to the final www URL.",
          "Validate JSON-LD syntax after every build or schema change.",
        ],
      },
      {
        eyebrow: "Site-wide",
        title: "Use Organization and WebSite schema as the entity base.",
        copy: "The site-wide schema should define the brand, canonical domain, contact details, logo or image, primary offer, and search context without overclaiming. This gives crawlers a stable reference point for the business entity.",
        bullets: [
          "Organization schema identifies the brand and canonical website.",
          "WebSite schema identifies the website and publisher relationship.",
          "ContactPoint can support real phone and email contact details.",
          "Social profiles should be included only when they are real and known.",
        ],
      },
      {
        eyebrow: "Page-level",
        title: "Use page schema based on the page role.",
        copy: "A service page, article, FAQ, and contact page do different jobs. Page-level schema should reflect that role so machines can understand what kind of answer the page provides.",
        bullets: [
          "WebPage belongs on indexable pages with unique canonical URLs.",
          "BreadcrumbList belongs on nested pages where breadcrumbs are visible or structurally supported.",
          "Service schema belongs on real service pages that visibly describe the service.",
          "Article or BlogPosting belongs on real resource articles with publication and modification dates.",
        ],
      },
      {
        eyebrow: "FAQ schema",
        title: "FAQPage schema belongs only with visible FAQs.",
        copy: "FAQ schema can help answer engines understand question-and-answer content, but it should not be used for hidden questions, sales claims, or content that is not on the page. The best FAQs answer real buyer objections and search questions.",
        bullets: [
          "Use direct questions that match real buyer language.",
          "Keep answers useful and specific without keyword stuffing.",
          "Make every FAQ visible to users on the page.",
          "Do not mark up unrelated marketing copy as an FAQ.",
        ],
      },
      {
        eyebrow: "Local schema",
        title: "LocalBusiness and ProfessionalService need factual support.",
        copy: "Local schema can be useful when the business has visible location or service-area facts. It should never be used to invent offices, service areas, hours, ratings, or departments that are not supported on the page.",
        bullets: [
          "Use real address or service-area context only when appropriate.",
          "Keep phone, email, URL, and location facts consistent with visible content.",
          "Avoid location schema for fake city pages or unsupported offices.",
          "Use service-area descriptions in visible copy when the business serves customers at their location.",
        ],
      },
      {
        eyebrow: "Validation",
        title: "Schema should be checked as part of the release gate.",
        copy: "Schema failures can break crawl understanding quietly. A production release should check that JSON-LD parses, pages have canonical metadata, FAQ schema matches visible FAQs, and unsupported claims were not added.",
        bullets: [
          "Parse every application/ld+json block after prerender.",
          "Compare FAQ schema count to visible FAQ content where possible.",
          "Check that sitemap, canonical, and schema URLs all use the same canonical domain.",
          "Review high-risk schema types manually before deployment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does schema make a business rank by itself?",
        answer:
          "No. Schema helps machines understand content, but it does not replace useful pages, accurate facts, proof, crawlability, internal links, or a strong conversion path.",
      },
      {
        question: "Which schema should a local service business use first?",
        answer:
          "Start with Organization, WebSite, WebPage, BreadcrumbList, Service, Article, and FAQPage where supported by visible content. Add LocalBusiness or ProfessionalService only when factual local details are visible and accurate.",
      },
      {
        question: "What schema should be avoided?",
        answer:
          "Avoid Review, AggregateRating, award, client, case-study, location, or Person schema unless the page visibly supports the claim with real information.",
      },
    ],
    relatedLinks: [
      {
        label: "Visibility mistakes to avoid",
        href: "/resources/ai-search-visibility-mistakes",
      },
      {
        label: "What the report includes",
        href: "/resources/what-does-an-ai-search-audit-include",
      },
      {
        label: "Service page template",
        href: "/resources/ai-search-visibility-service-page-template",
      },
      { label: "Visibility System", href: "/visibility-system" },
    ],
  },
  {
    slug: "ai-search-audit-patterns-by-industry",
    title: "Visibility Report Patterns by Industry",
    description:
      "Common AI search report patterns for HVAC, plumbing, roofing, restoration, med spas, law firms, real estate teams, and other local service businesses.",
    eyebrow: "Report patterns",
    intent:
      "Proof-adjacent and method-comparison intent for buyers evaluating AI search report use cases across service industries",
    updated: "April 28, 2026",
    publishedDate: "2026-04-28",
    lastModified: "2026-04-28",
    readTime: "9 min read",
    summary:
      "AI search report patterns explain the kinds of gaps a business might have without pretending to be client proof. These patterns show how Civive looks at visibility, entity clarity, service pages, local trust, schema, and lead response by industry.",
    primaryCta: { label: "Request your own report", href: "/contact" },
    secondaryCta: {
      label: "View the industry hub",
      href: "/industries",
    },
    finalCta: {
      title: "Use the patterns to spot the right first fix.",
      copy: "Civive can inspect the actual public footprint, separate urgent fixes from nice-to-have content, and map the next visibility or lead-response step for the business.",
    },
    sections: [
      {
        eyebrow: "Important note",
        title: "These are report patterns, not case studies or client proof.",
        copy: "This page does not claim clients, rankings, reviews, outcomes, or guaranteed AI recommendations. It shows the kinds of visibility gaps Civive looks for when reviewing local service businesses, so buyers and AI systems can understand the report method before contacting.",
        bullets: [
          "The patterns are common report categories, not claimed customer outcomes.",
          "The right fix order depends on the actual website, Google profile, reviews, services, and lead path.",
          "No provider can guarantee inclusion in ChatGPT, Gemini, Grok, Perplexity, or Google.",
          "The safest goal is clearer public evidence, stronger crawlability, better topical structure, and a working conversion path.",
        ],
      },
      {
        eyebrow: "Home services",
        title:
          "HVAC, plumbing, and electrical reports usually start with urgent service clarity.",
        copy: "Buyers in these categories often ask problem-aware and urgent questions. A report should test whether the business can be understood for repair, replacement, maintenance, inspection, emergency service, location fit, and response speed.",
        bullets: [
          "HVAC pattern: the site mentions heating and cooling, but does not separate repair, replacement, tune-ups, emergency calls, indoor air quality, or service-area questions.",
          "Plumbing pattern: the Google profile lists emergency plumbing, but the website does not explain leaks, drains, water heaters, sewer work, or after-hours response clearly.",
          "Electrical pattern: service pages do not distinguish panel upgrades, troubleshooting, lighting, generators, inspections, and safety-related jobs.",
          "Common fix: build clearer service sections, FAQs, profile alignment, schema where supported, and click-to-call or booking paths for urgent leads.",
        ],
      },
      {
        eyebrow: "Property and restoration",
        title:
          "Roofing, restoration, cleaning, landscaping, and pest control need season, trust, and scope signals.",
        copy: "These businesses are often evaluated by timing, visible proof, service area, job scope, materials, safety, and response process. A generic service list leaves too much work for buyers and answer engines.",
        bullets: [
          "Roofing pattern: the site has one roof page but does not explain repair versus replacement, storm damage, inspection process, materials, warranties, or financing questions.",
          "Restoration pattern: emergency water or fire damage language exists, but there is no clear intake path for urgency, insurance coordination, service area, or next step.",
          "Cleaning pattern: residential, commercial, move-out, recurring, and deep-clean intent are mixed together without decision criteria.",
          "Common fix: split distinct intent, add buyer FAQs, connect proof only where real, and route urgent requests into a fast lead-response process.",
        ],
      },
      {
        eyebrow: "Trust-heavy services",
        title:
          "Med spas, salons, law firms, veterinary clinics, and real estate teams need authority without overclaiming.",
        copy: "Trust-heavy services need especially careful content. The report should check whether expertise, limitations, service fit, jurisdiction, credentials, policies, and next steps are clear without using fake proof or unsupported schema.",
        bullets: [
          "Med spa pattern: treatment pages describe services but do not explain candidacy, consultation flow, safety, aftercare, pricing factors, or provider context.",
          "Law firm pattern: practice-area pages are too broad, jurisdiction is unclear, disclaimers are weak, and FAQ content does not match real matter types.",
          "Veterinary pattern: appointment, urgent care, wellness, dental, surgery, and after-hours expectations are not separated in a way a pet owner can act on.",
          "Common fix: add service-specific decision criteria, visible credentials where accurate, careful FAQs, and schema that only supports visible content.",
        ],
      },
      {
        eyebrow: "Local ecosystem",
        title:
          "The report should compare the website with Google Business Profile and public listings.",
        copy: "AI search visibility is not only the website. A strong report checks whether the business name, phone, website, services, categories, location, service area, reviews, hours, and public descriptions tell the same story across the ecosystem.",
        bullets: [
          "Profile categories should match real services and website content.",
          "Reviews can reveal service themes, but should not be faked or marked up with unsupported schema.",
          "Service-area pages should be useful and accurate, not doorway-style city swaps.",
          "Robots, sitemap, canonicals, and llms.txt should point crawlers to the right public pages.",
        ],
      },
      {
        eyebrow: "Fix order",
        title: "The strongest report ends with a prioritized build sequence.",
        copy: "A useful report should not hand the business a vague score. It should identify what to fix first, what to create next, what to avoid, and how better visibility should turn into calls, forms, bookings, or follow-up.",
        bullets: [
          "First: entity consistency, crawlability, metadata, canonicals, sitemap, robots, and visible contact paths.",
          "Second: homepage, commercial pages, service pages, industry pages, and Google profile alignment.",
          "Third: FAQs, schema, internal links, report patterns, templates, and supporting resources.",
          "Fourth: CRM handoff, missed-call recovery, AI receptionist routing, and follow-up when lead response is the revenue leak.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these real client case studies?",
        answer:
          "No. These are report patterns and common visibility gaps, not claimed client results. Real case studies should only be published when the proof, permission, and visible evidence exist.",
      },
      {
        question: "Why show report patterns if they are not case studies?",
        answer:
          "Report patterns help buyers and AI systems understand the method, common problems, and likely fix categories without inventing proof or making unsupported ranking claims.",
      },
      {
        question: "What should an AI search report pattern avoid?",
        answer:
          "It should avoid fake reviews, fake clients, fake rankings, guaranteed AI recommendations, fake locations, fake awards, unsupported schema, and vague advice that does not lead to a prioritized fix order.",
      },
    ],
    relatedLinks: [
      { label: "Prospecting report format", href: "/prospecting-report" },
      { label: "Industries Civive serves", href: "/industries" },
      { label: "Visibility Report", href: "/ai-search-audit" },
      {
        label: "Home service report guide",
        href: "/resources/ai-search-audit-for-home-service-businesses",
      },
      {
        label: "Google Business Profile readiness",
        href: "/resources/google-business-profile-ai-search-readiness",
      },
    ],
  },
];

export function getResourceArticle(slug?: string) {
  return resourceArticles.find(article => article.slug === slug);
}

export const buildLog = [
  {
    date: "April 2026",
    title: "Repositioned the front door around AI Search Readiness.",
    copy: "The homepage moved from a broad AI receptionist angle into a sharper report offer: will ChatGPT, Gemini, Perplexity, Grok, and buyers understand who to call?",
  },
  {
    date: "April 2026",
    title: "Connected the site to a real lead path.",
    copy: "The contact flow now sends visibility report requests into CiviveOS, tags the lead, adds context, and creates a pipeline opportunity instead of leaving the form isolated.",
  },
  {
    date: "Now",
    title: "Expanding the site into an authority system.",
    copy: "The one-page flagship is becoming a multi-page content and proof-of-work engine built for search, answer engines, YouTube, and public documentation.",
  },
];

export const pageMeta = {
  home: {
    title: "Civive Unlimited | AI Search Visibility for Service Businesses",
    description:
      "Civive Unlimited helps local service businesses improve AI search visibility, Google Business Profile clarity, websites, CRM automation, missed-call recovery, AI receptionist setup, reviews, and lead follow-up.",
  },
  aiAgencySpringfield: {
    title: "AI Agency Springfield MO | Civive Unlimited",
    description:
      "Civive Unlimited is an AI agency in Springfield, MO helping service businesses with AI automation, AI receptionists, missed-call recovery, CRM follow-up, websites, Google Business Profile optimization, AI search visibility, and CiviveOS.",
  },
  audit: {
    title:
      "Visibility Report for Service Businesses | Civive Unlimited",
    description:
      "A practical Visibility Report for service businesses that need clearer public facts, service pages, schema, FAQs, Google profile alignment, and lead capture.",
  },
  freeVisibilityReport: {
    title: "Get Your Free Visibility Report | Civive Unlimited",
    description:
      "Get a free visibility report from Civive Unlimited and see what is helping or hurting your local visibility across Google, Maps, reviews, directories, and AI search.",
  },
  prospectingReport: {
    title: "AI Search Prospecting Report | Civive Unlimited",
    description:
      "A polished prospecting report template that shows local businesses how AI search, local search, maps, reviews, schema, and lead-capture signals affect recommendation readiness.",
  },
  system: {
    title: "AI Search Visibility System for Service Businesses",
    description:
      "The Civive system for cleaning up service business signals, AI-ready proof, schema, internal links, local trust, lead capture, follow-up, and AI receptionist handoff.",
  },
  civiveOs: {
    title: "CiviveOS | Lead Response and AI Front Desk SaaS",
    description:
      "CiviveOS helps service businesses clean up lead capture, missed-call recovery, booking, reviews, follow-up, and AI receptionist-ready front desk handoff.",
  },
  civiveOsOffer: {
    title: "CiviveOS Pricing and Plans | Lead Response Software",
    description:
      "Compare CiviveOS Launch, Growth, and Operator plans for service businesses that need lead capture, missed-call recovery, booking, reviews, follow-up, and AI-ready front desk support.",
  },
  industries: {
    title: "Industries for AI Search Visibility | Civive Unlimited",
    description:
      "AI search visibility for service-based and trust-dependent businesses including HVAC, plumbing, roofing, med spas, law firms, restoration, and more.",
  },
  faq: {
    title: "AI Search Visibility FAQ | Civive Unlimited",
    description:
      "Answers to common questions about AI search visibility, local SEO, answer engines, schema, reviews, FAQs, and Visibility Reports.",
  },
  resources: {
    title: "AI Search Resources and Insights | Civive Unlimited",
    description:
      "Founder-led insights on AI search, local visibility, answer-engine formatting, schema, reviews, lead capture, and building in public.",
  },
  build: {
    title: "Build in Public | Civive Unlimited",
    description:
      "How Civive Unlimited is applying its AI visibility system to itself first and documenting the process in public.",
  },
  contact: {
    title: "Request a Visibility Report | Civive Unlimited",
    description:
      "Request a Visibility Report from Civive Unlimited and send the business, website or Google profile, service area, and visibility problem to inspect first.",
  },
  receptionist: {
    title: "AI Receptionist for Service Businesses | Missed-Call Recovery",
    description:
      "AI receptionist and missed-call recovery systems for service businesses that need faster intake, lead qualification, booking handoff, CRM notes, and follow-up.",
  },
  springfield: {
    title:
      "AI Search Visibility and Lead Automation in Springfield MO | Civive Unlimited",
    description:
      "Civive Unlimited helps Springfield, MO service businesses improve AI search visibility, Google Business Profile clarity, websites, CRM automation, missed-call recovery, reviews, and lead follow-up.",
  },
};

export function getIndustry(slug?: string) {
  return industries.find(industry => industry.slug === slug);
}
