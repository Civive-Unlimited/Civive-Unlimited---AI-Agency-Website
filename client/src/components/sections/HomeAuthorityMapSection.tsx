import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { site } from "@/content/site";

const authorityPaths = [
  {
    title: "Work with a Springfield AI agency",
    eyebrow: "Local agency",
    copy: "See how Civive acts as an AI agency in Springfield, MO for service businesses that need visibility, automation, lead response, and booking systems.",
    href: "/ai-agency-springfield-mo",
    cta: "Open the local AI agency page",
  },
  {
    title: "Diagnose the visibility problem",
    eyebrow: "Report",
    copy: "Use the Visibility Report when the business needs a fix order for public facts, services, reviews, FAQs, schema, links, and lead capture.",
    href: "/services/visibility-report",
    cta: "Read the report path",
  },
  {
    title: "Align the Google Business Profile",
    eyebrow: "Local profile",
    copy: "Clean up categories, services, description, contact details, booking paths, and website alignment so the profile reinforces the same local signals.",
    href: "/services/google-business-profile-optimization",
    cta: "Open GBP optimization",
  },
  {
    title: "Build the AI search visibility system",
    eyebrow: "Pillar",
    copy: "Turn the report into clearer pages, stronger entity signals, better internal links, structured answers, and conversion-ready public evidence.",
    href: "/visibility-system",
    cta: "Explore the system",
  },
  {
    title: "Understand AI recommendation readiness",
    eyebrow: "AI answers",
    copy: "See what makes a local service business easier for ChatGPT, Gemini, Grok, Perplexity, Google, and buyers to understand without fake ranking guarantees.",
    href: "/resources/chatgpt-business-recommendations-local-service-businesses",
    cta: "Read the AI answer guide",
  },
  {
    title: "Catch and follow up with demand",
    eyebrow: "Operating base",
    copy: "Use CRM lead follow-up when calls, forms, chat, booking, reviews, CRM notes, or follow-up are leaking revenue.",
    href: "/services/crm-lead-follow-up",
    cta: "Open CRM follow-up",
  },
  {
    title: "Add AI receptionist support carefully",
    eyebrow: "Front desk",
    copy: "Layer in AI receptionist support when intake, routing, escalation, booking, and handoff rules are ready enough to protect the customer experience.",
    href: "/services/ai-receptionist",
    cta: "Compare receptionist fit",
  },
  {
    title: "Recover missed calls",
    eyebrow: "Speed",
    copy: "Use missed-call text back when unanswered calls need a fast response, useful intake, and a clear follow-up path.",
    href: "/services/missed-call-recovery",
    cta: "Open missed-call recovery",
  },
  {
    title: "Improve review automation",
    eyebrow: "Reputation",
    copy: "Create a clean review request and feedback path so real customer experience turns into stronger public trust signals.",
    href: "/services/review-automation",
    cta: "Open review automation",
  },
  {
    title: "Build a clearer service website",
    eyebrow: "Website",
    copy: "Use website design when the service pages, local trust, forms, calls, booking, and AI-search readability need a stronger base.",
    href: "/services/website-design-service-businesses",
    cta: "Open website design",
  },
  {
    title: "Serve Springfield, MO",
    eyebrow: "Service area",
    copy: "See the local page for Springfield service businesses that need AI search visibility, Google profile clarity, CRM automation, and lead follow-up.",
    href: "/service-areas/springfield-mo",
    cta: "Open Springfield page",
  },
  {
    title: "Learn the implementation sequence",
    eyebrow: "Resource",
    copy: "Use the implementation guide to see how entity cleanup, service pages, FAQs, schema, proof, links, and lead response fit together.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
    cta: "Read the guide",
  },
];

export default function HomeAuthorityMapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="authority-map"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-10 h-px opacity-35 homepage-circuit-line" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16"
          >
            <div className="max-w-xl">
              <p className="homepage-eyebrow">Civive authority map</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Choose the page that matches the business bottleneck.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
                The site is intentionally connected. A buyer should be able to
                move from visibility diagnosis to implementation, lead response,
                AI receptionist fit, pricing, and contact without guessing the
                next step.
              </p>
              <a
                href={site.visibilityReportRequestUrl}
                className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                Ask where to start
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {authorityPaths.map((path, index) => (
                <motion.a
                  key={path.href}
                  href={path.href}
                  initial={false}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.08 + index * 0.035 }}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/34">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white/92 group-hover:text-white">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {path.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white">
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
