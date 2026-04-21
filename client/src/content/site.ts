export const site = {
  name: "Civive Unlimited",
  domain: "https://www.civiveunlimited.com",
  email: "ceo@civiveunlimited.com",
  phone: "(417) 386-2441",
  phoneHref: "tel:+14173862441",
  location: "Springfield, MO",
  primaryOffer: "AI Search Readiness Audit",
};

export const navLinks = [
  { href: "/#how-it-works", label: "What AI Reads" },
  { href: "/visibility-system", label: "Visibility System" },
  { href: "/civive-os", label: "Civive OS" },
  { href: "/industries", label: "Industries" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
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

export const visibilitySystemLayers = [
  {
    title: "Signal cleanup",
    copy: "Tighten the public facts: what the business does, who it serves, where it works, and which problems it solves.",
    items: ["Website message", "Service language", "Location consistency", "Google profile alignment"],
  },
  {
    title: "AI-ready proof",
    copy: "Turn trust into structured evidence that humans, Google, and answer engines can understand.",
    items: ["FAQs", "Service pages", "Schema", "Reviews", "Founder or operator context"],
  },
  {
    title: "Lead capture and handoff",
    copy: "Make the path from discovery to response clean enough that a qualified lead does not disappear.",
    items: ["Audit forms", "Booking paths", "AI assistant", "CRM notes", "Follow-up automations"],
  },
];

export const faqs = [
  {
    question: "Are people really using ChatGPT to find businesses?",
    answer:
      "Yes. Buyers are increasingly using ChatGPT, Gemini, Perplexity, Grok, and voice assistants to narrow options before they visit a website or call a business. That does not replace Google, but it changes what needs to be clear across your public presence.",
  },
  {
    question: "Why would AI skip a good business?",
    answer:
      "AI systems need evidence. If your services, locations, reviews, FAQs, schema, and public profiles are thin, mismatched, or unclear, a competitor with cleaner signals can look easier to explain and recommend.",
  },
  {
    question: "What signals does AI search look for?",
    answer:
      "It can use website copy, service pages, Google Business Profile data, reviews, FAQs, structured data, social profiles, local mentions, media, and the language other sources use to describe the business.",
  },
  {
    question: "Do reviews matter for AI search visibility?",
    answer:
      "Yes, but not as magic ranking fuel. Reviews give public evidence about trust, service quality, locations, problems solved, and customer language. Specific reviews are easier for humans and machines to understand than vague star counts alone.",
  },
  {
    question: "Do FAQs and schema matter?",
    answer:
      "They matter because they make expertise easier to parse. FAQs answer natural-language questions. Schema gives machines structured context. Neither guarantees placement, but both reduce confusion.",
  },
  {
    question: "Is this just SEO with a different name?",
    answer:
      "There is overlap with local SEO, but the target is broader. AI visibility work is about making the business understandable across search engines, answer engines, maps, profiles, content, and conversion paths.",
  },
  {
    question: "How is this different from local SEO?",
    answer:
      "Local SEO often focuses on rankings, citations, Google profile optimization, and content. AI visibility keeps those pieces but also asks whether an answer engine can confidently summarize, compare, and recommend the business.",
  },
  {
    question: "What happens in the AI Search Readiness Audit?",
    answer:
      "Civive reviews the message, services, locations, Google profile, reviews, FAQs, schema opportunities, public consistency, and lead capture path. The output is a priority map of what to fix first.",
  },
  {
    question: "Can a business with no content still improve visibility?",
    answer:
      "Yes. The first wins often come from clarity: better service language, stronger FAQs, cleaner Google profile alignment, and a better contact or booking path. Deeper content can be layered after the basics are coherent.",
  },
  {
    question: "How long does this take?",
    answer:
      "The audit creates the priority order first. Some fixes can be done quickly. Larger work such as service pages, location pages, schema, review strategy, and automation should be implemented in controlled stages.",
  },
];

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

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    shortName: "HVAC",
    intro: "HVAC buyers often search during discomfort, urgency, or seasonal pressure. Clear service, location, review, and emergency response signals matter.",
    customerQuestions: ["Who repairs AC near me?", "Which HVAC company is trusted for emergency service?", "Who installs heat pumps in my area?"],
    skipReasons: ["No clear emergency or repair pages", "Weak city/service alignment", "Reviews do not mention actual HVAC problems"],
    trustSignals: ["Licensed and insured language", "Repair, replacement, and maintenance clarity", "Seasonal service FAQs", "Recent review language"],
    missingAssets: ["AC repair page", "Furnace repair page", "Service area page", "Financing or estimate explanation"],
    fixes: ["Clarify service categories", "Add buyer questions", "Align Google Business Profile services", "Create structured HVAC FAQ content"],
    faqs: [
      {
        question: "What would Civive check for an HVAC company?",
        answer: "Service pages, emergency language, seasonal FAQs, review specificity, Google profile service categories, location coverage, and the booking or call path.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortName: "Plumbing",
    intro: "Plumbing searches are usually problem-first. Buyers ask about leaks, drains, water heaters, emergencies, and who can respond quickly.",
    customerQuestions: ["Who fixes a leaking pipe near me?", "Best plumber for water heater replacement?", "Emergency drain cleaning near me"],
    skipReasons: ["Generic service lists", "No emergency intent page", "Thin proof around response and trust"],
    trustSignals: ["Emergency availability", "Problem-specific pages", "Clear service area", "Review mentions for repairs"],
    missingAssets: ["Water heater page", "Drain cleaning page", "Emergency plumbing FAQ", "Service area language"],
    fixes: ["Build problem pages", "Rewrite FAQs around real buyer questions", "Connect reviews to service categories", "Improve contact path"],
    faqs: [
      {
        question: "Why do plumbers need AI search clarity?",
        answer: "Plumbing buyers often search from a specific urgent problem. AI and Google need clear evidence that the business handles that exact issue in that area.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortName: "Electrical",
    intro: "Electrical customers need safety, licensing, and clear service fit. The site has to reduce risk quickly.",
    customerQuestions: ["Who can install an EV charger?", "Licensed electrician near me?", "Can someone fix a breaker problem today?"],
    skipReasons: ["No license or safety context", "Service pages are too broad", "No clear residential/commercial split"],
    trustSignals: ["License and insurance clarity", "Panel, EV charger, lighting, and repair pages", "Safety FAQs", "Strong local proof"],
    missingAssets: ["EV charger page", "Panel upgrade page", "Emergency repair page", "Safety and permit FAQs"],
    fixes: ["Clarify project types", "Add safety-focused answers", "Align GBP categories", "Improve quote request flow"],
    faqs: [
      {
        question: "What makes an electrical company easier for AI to recommend?",
        answer: "Clear service categories, safety proof, licensing language, local service area, and FAQs that answer project-specific questions.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    intro: "Roofing buyers compare trust, storm response, financing, warranties, and whether the company handles their exact roofing need.",
    customerQuestions: ["Best roofer for storm damage?", "Who does roof replacement near me?", "How do I know if I need roof repair or replacement?"],
    skipReasons: ["No storm or repair intent pages", "Weak warranty proof", "Photos and reviews are disconnected"],
    trustSignals: ["Project photos", "Warranty language", "Storm damage pages", "Insurance claim guidance", "Review specificity"],
    missingAssets: ["Roof repair page", "Storm damage page", "Replacement guide", "FAQ about insurance and inspections"],
    fixes: ["Add inspection clarity", "Structure proof around job types", "Clean up service area pages", "Add schema and FAQs"],
    faqs: [
      {
        question: "Can roofers use AI visibility without fake proof?",
        answer: "Yes. Real photos, clear service pages, warranty explanations, process details, and honest FAQs create useful proof without inventing claims.",
      },
    ],
  },
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    shortName: "Cleaning",
    intro: "Cleaning buyers care about trust, reliability, scope, recurring service, move-outs, offices, and whether the company fits their situation.",
    customerQuestions: ["Best house cleaning near me?", "Who does move-out cleaning?", "Commercial cleaning company for small offices"],
    skipReasons: ["No clear residential/commercial split", "Pricing and scope are vague", "No trust or process details"],
    trustSignals: ["Checklist clarity", "Recurring service explanation", "Reviews by service type", "Before/after proof when real"],
    missingAssets: ["Move-out cleaning page", "Recurring cleaning page", "Commercial cleaning page", "Scope FAQ"],
    fixes: ["Clarify service packages", "Add scope answers", "Align booking path", "Create location and service content"],
    faqs: [
      {
        question: "What should cleaning companies explain for AI search?",
        answer: "Service type, location, scope, recurring options, trust standards, and how a buyer books or requests an estimate.",
      },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    intro: "Landscaping demand changes by season and project type. AI visibility depends on making those services easy to distinguish.",
    customerQuestions: ["Who does lawn care near me?", "Best landscaper for cleanup?", "Who installs mulch or hardscaping?"],
    skipReasons: ["Seasonal services are unclear", "No project/service separation", "Weak photo and review context"],
    trustSignals: ["Seasonal service pages", "Project photos", "Maintenance plans", "Service area clarity"],
    missingAssets: ["Lawn care page", "Spring cleanup page", "Hardscape page", "Seasonal FAQ"],
    fixes: ["Separate maintenance and projects", "Add seasonal content", "Map reviews to service types", "Improve estimate CTA"],
    faqs: [
      {
        question: "Why does landscaping need separate service pages?",
        answer: "Lawn care, cleanups, hardscaping, and maintenance answer different buyer questions. AI systems need those distinctions to understand fit.",
      },
    ],
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    shortName: "Med Spas",
    intro: "Med spa search is trust-heavy. Buyers need treatment clarity, safety, credentials, realistic expectations, and easy consultation paths.",
    customerQuestions: ["Best med spa for Botox near me?", "Who does laser treatments?", "What treatment is right for my skin concern?"],
    skipReasons: ["Treatment pages are thin", "Credentials are hard to find", "FAQs do not handle safety and expectations"],
    trustSignals: ["Provider credentials", "Treatment-specific pages", "Safety FAQs", "Real policies and consultation path"],
    missingAssets: ["Treatment pages", "Provider context", "FAQ by concern", "Consultation CTA"],
    fixes: ["Clarify treatment categories", "Add concern-based answers", "Structure provider proof", "Improve booking path"],
    faqs: [
      {
        question: "Can med spas improve AI visibility ethically?",
        answer: "Yes. The work should focus on accurate treatment information, credential clarity, safety expectations, and transparent consultation paths.",
      },
    ],
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    shortName: "Salons & Spas",
    intro: "Salon and spa buyers search by service, style, trust, availability, and local reputation.",
    customerQuestions: ["Best salon for color near me?", "Spa facial near me", "Who does bridal hair and makeup?"],
    skipReasons: ["Services are buried in menus", "Style proof is disconnected from pages", "Booking friction is high"],
    trustSignals: ["Service menu clarity", "Stylist or provider context", "Review language", "Booking availability"],
    missingAssets: ["Service pages", "Provider profiles", "Style-specific FAQs", "Booking explanation"],
    fixes: ["Turn services into answerable pages", "Connect social proof to site structure", "Clarify booking path", "Add local intent content"],
    faqs: [
      {
        question: "What should salons make clear for answer engines?",
        answer: "Services, styles, location, provider expertise, appointment process, and the questions clients ask before booking.",
      },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    shortName: "Law Firms",
    intro: "Legal search requires authority, practice-area clarity, jurisdiction, disclaimers, and enough specificity to match the right matter.",
    customerQuestions: ["Best attorney for a car accident near me?", "Who handles estate planning in my city?", "Do I need a lawyer for this issue?"],
    skipReasons: ["Practice areas are vague", "Jurisdiction is unclear", "No useful educational answers"],
    trustSignals: ["Practice area pages", "Attorney context", "Jurisdiction clarity", "Educational FAQs", "Ethical disclaimers"],
    missingAssets: ["Matter-specific pages", "Attorney bio depth", "FAQ by practice area", "Clear consultation CTA"],
    fixes: ["Clarify practice-area structure", "Add natural-language legal questions", "Align local presence", "Improve consultation path"],
    faqs: [
      {
        question: "Can law firms use AI visibility without crossing ethical lines?",
        answer: "Yes. The content should be educational, jurisdiction-aware, properly disclaimed, and focused on helping people understand fit before a consultation.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    shortName: "Pest Control",
    intro: "Pest control buyers search by pest type, urgency, safety, and recurring protection.",
    customerQuestions: ["Who treats termites near me?", "Best pest control for ants?", "Is pest treatment safe for pets?"],
    skipReasons: ["No pest-specific pages", "Safety questions unanswered", "Recurring plans unclear"],
    trustSignals: ["Pest-specific service pages", "Safety FAQs", "Treatment process", "Local reviews"],
    missingAssets: ["Termite page", "Ant or roach pages", "Safety FAQ", "Plan explanation"],
    fixes: ["Create pest-specific answer pages", "Add treatment and safety context", "Align Google services", "Improve estimate capture"],
    faqs: [
      {
        question: "Why do pest companies need pest-specific pages?",
        answer: "A termite search and an ant search are different intents. Specific pages give AI and buyers clearer evidence of fit.",
      },
    ],
  },
  {
    slug: "home-restoration",
    name: "Home Restoration",
    shortName: "Restoration",
    intro: "Restoration buyers are often in crisis. Trust, response speed, insurance familiarity, and exact service type matter.",
    customerQuestions: ["Who handles water damage near me?", "Emergency restoration company", "Mold remediation after a leak"],
    skipReasons: ["Emergency intent is unclear", "Insurance process is vague", "Services are grouped too broadly"],
    trustSignals: ["Emergency pages", "Water, fire, mold service clarity", "Insurance process", "Response expectations"],
    missingAssets: ["Water damage page", "Fire restoration page", "Mold remediation FAQ", "Insurance guidance"],
    fixes: ["Structure services by damage type", "Add crisis-focused FAQs", "Clarify response path", "Align local pages"],
    faqs: [
      {
        question: "What matters most for restoration visibility?",
        answer: "Clear emergency services, local availability, trust signals, insurance process, and fast contact options.",
      },
    ],
  },
  {
    slug: "auto-repair",
    name: "Auto Repair",
    shortName: "Auto Repair",
    intro: "Auto repair buyers search by symptom, repair type, make, trust, and proximity.",
    customerQuestions: ["Mechanic for brake repair near me?", "Why is my check engine light on?", "Best auto shop for diagnostics"],
    skipReasons: ["No symptom or repair pages", "Trust proof is thin", "Scheduling path is unclear"],
    trustSignals: ["Repair-specific pages", "ASE or technician context", "Diagnostic FAQs", "Review language"],
    missingAssets: ["Brake repair page", "Diagnostics page", "Maintenance page", "Appointment FAQ"],
    fixes: ["Add repair-specific pages", "Answer symptom queries", "Clarify scheduling", "Align profile categories"],
    faqs: [
      {
        question: "How can auto shops show up for problem searches?",
        answer: "By building clear pages and FAQs around common symptoms, repairs, maintenance, diagnostics, location, and trust signals.",
      },
    ],
  },
  {
    slug: "veterinary-clinics",
    name: "Veterinary Clinics",
    shortName: "Veterinary",
    intro: "Veterinary searches combine urgency, trust, care type, species, location, and appointment availability.",
    customerQuestions: ["Vet near me accepting new patients?", "Emergency vet for my dog?", "Cat dental cleaning near me"],
    skipReasons: ["Services are not clearly separated", "New-patient process is unclear", "Urgent care language is vague"],
    trustSignals: ["Care-type pages", "New patient guidance", "Team context", "Reviews by service", "Appointment path"],
    missingAssets: ["New patient page", "Dental care page", "Urgent care FAQ", "Species or care-specific pages"],
    fixes: ["Clarify care categories", "Add appointment answers", "Structure service FAQs", "Improve local profile alignment"],
    faqs: [
      {
        question: "What should a veterinary clinic make clear?",
        answer: "Services, species served, new-patient availability, urgent care policy, location, team trust, and appointment process.",
      },
    ],
  },
  {
    slug: "real-estate-teams",
    name: "Real Estate Teams",
    shortName: "Real Estate",
    intro: "Real estate discovery depends on local expertise, niche clarity, neighborhood context, and trust signals.",
    customerQuestions: ["Best realtor for selling in my area?", "Who helps first-time buyers?", "Real estate agent near me for relocation"],
    skipReasons: ["No niche or local expertise pages", "Thin neighborhood context", "Trust proof is scattered"],
    trustSignals: ["Neighborhood guides", "Buyer/seller pages", "Team context", "Process FAQs", "Real local content"],
    missingAssets: ["Seller page", "Buyer page", "Neighborhood content", "Consultation flow"],
    fixes: ["Clarify buyer and seller paths", "Create local answer content", "Structure team proof", "Improve lead handoff"],
    faqs: [
      {
        question: "How can real estate teams use build-in-public content?",
        answer: "Market notes, neighborhood explainers, buyer and seller questions, and documented process can become search and social proof over time.",
      },
    ],
  },
];

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
    formats: ["Audit framework", "YouTube topic", "FAQ cluster"],
  },
  {
    slug: "service-page-strategy",
    title: "Service Page Strategy",
    copy: "How to turn vague service lists into useful pages that answer buying intent.",
    formats: ["Website teardown", "Implementation guide", "Client education post"],
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
    formats: ["Technical article", "Implementation checklist", "Audit add-on"],
  },
  {
    slug: "lead-capture-after-discovery",
    title: "Lead Capture After Discovery",
    copy: "What happens after a buyer finds you: forms, chat, booking, CRM handoff, AI receptionist, and follow-up.",
    formats: ["Revenue workflow", "Civive OS build", "Founder demo"],
  },
  {
    slug: "build-in-public",
    title: "Build in Public as Proof",
    copy: "How Civive turns its own website, content, schema, and visibility work into public proof of process.",
    formats: ["Build log", "YouTube series", "Founder note"],
  },
];

export const buildLog = [
  {
    date: "April 2026",
    title: "Repositioned the front door around AI Search Readiness.",
    copy: "The homepage moved from a broad AI receptionist angle into a sharper audit offer: will ChatGPT, Gemini, Perplexity, Grok, and buyers understand who to call?",
  },
  {
    date: "April 2026",
    title: "Connected the site to a real lead path.",
    copy: "The contact flow now sends audit requests into Civive OS, tags the lead, adds context, and creates a pipeline opportunity instead of leaving the form isolated.",
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
      "Civive Unlimited helps local service businesses become easier for AI search, Google, answer engines, and buyers to understand, trust, and choose.",
  },
  audit: {
    title: "AI Search Readiness Audit | Civive Unlimited",
    description:
      "A practical audit for local businesses that need clearer website, Google profile, review, FAQ, schema, and lead capture signals for AI search visibility.",
  },
  prospectingReport: {
    title: "AI Search Prospecting Report | Civive Unlimited",
    description:
      "A polished prospecting report template that shows local businesses how AI search, local search, maps, reviews, schema, and lead-capture signals affect recommendation readiness.",
  },
  system: {
    title: "AI Search Visibility System | Civive Unlimited",
    description:
      "The Civive system for cleaning up business signals, creating AI-ready proof, and connecting search visibility to lead capture and follow-up.",
  },
  civiveOs: {
    title: "Civive OS | Lead Response and AI Front Desk SaaS",
    description:
      "Civive OS is the operating system for service businesses that need cleaner lead capture, faster follow-up, booking, reviews, and AI front desk support.",
  },
  civiveOsOffer: {
    title: "Civive OS Offer | Plans for Lead Response and AI Front Desk",
    description:
      "Civive OS plans for service businesses that need cleaner lead capture, missed-call recovery, booking, reviews, follow-up, and AI front desk support.",
  },
  industries: {
    title: "Industries for AI Search Visibility | Civive Unlimited",
    description:
      "AI search visibility for service-based and trust-dependent businesses including HVAC, plumbing, roofing, med spas, law firms, restoration, and more.",
  },
  faq: {
    title: "AI Search Visibility FAQ | Civive Unlimited",
    description:
      "Answers to common questions about AI search visibility, local SEO, answer engines, schema, reviews, FAQs, and AI Search Readiness Audits.",
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
    title: "Contact Civive Unlimited | Get an AI Search Audit",
    description:
      "Request an AI Search Readiness Audit from Civive Unlimited and start finding the public signals that need to be cleaned up first.",
  },
  receptionist: {
    title: "AI Receptionist for Service Businesses | Civive Unlimited",
    description:
      "AI receptionist systems for service businesses that need to capture and route leads after search visibility brings the right buyer in.",
  },
};

export function getIndustry(slug?: string) {
  return industries.find((industry) => industry.slug === slug);
}
