import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import PricingSection from "@/components/sections/PricingSection";
import { civiveOsOfferFaqs, civiveOsPlans, pageMeta } from "@/content/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const decisionChecks = [
  {
    title: "Is slow lead response the first leak?",
    copy: "If calls, forms, chats, or messages already arrive but replies are scattered, CiviveOS should come before another traffic push.",
  },
  {
    title: "Does the business need review and follow-up movement?",
    copy: "Growth is usually the stronger starting point when the team needs campaigns, review requests, and tighter handoff from lead to booked job.",
  },
  {
    title: "Is the team ready for AI receptionist support?",
    copy: "Operator prepares the intake, routing, qualification, and handoff fields, but paid AI receptionist and AI employee add-ons stay separate.",
  },
  {
    title: "Should visibility be fixed first?",
    copy: "If the business is not getting enough qualified demand, start with the AI Search Visibility Audit before buying a larger operating base.",
    href: "/ai-search-audit",
  },
];

const implementationSteps = [
  {
    title: "Confirm business facts and lead paths",
    copy: "We line up the offer, service area, phone, forms, booking path, inbox, and public facts so the system is not built on bad assumptions.",
  },
  {
    title: "Connect the operating base",
    copy: "Forms, conversations, calendar, opportunities, missed-call response, and follow-up paths move into one cleaner front desk workflow.",
  },
  {
    title: "Configure response and reputation movement",
    copy: "The system is shaped around missed-call text back, booking handoff, email/SMS follow-up, review requests, and internal visibility.",
  },
  {
    title: "Prepare AI-ready fields when needed",
    copy: "Operator customers can prepare service intake, routing, qualification, escalation, and handoff fields before adding AI receptionist support.",
  },
];

const boundaries = [
  "AI receptionist and AI employees are optional add-ons, not included by default in the Operator software plan.",
  "An AI Search Visibility Audit may still be the first move if the business has weak demand, unclear pages, or inconsistent public facts.",
  "SMS sender readiness, A2P registration, and account-level permissions may require setup before texting can run at full strength.",
  "Civive does not use fake reviews, fake locations, fake proof, unsupported schema, or inflated claims to make the offer look stronger.",
];

const supportLinks = [
  {
    title: "CiviveOS",
    copy: "Read the system overview before choosing a plan.",
    href: "/civive-os",
  },
  {
    title: "AI Receptionist",
    copy: "See where the front desk layer fits after the operating base is ready.",
    href: "/ai-receptionist",
  },
  {
    title: "AI Search Audit",
    copy: "Use the audit first when demand, public facts, or search visibility are the bigger constraint.",
    href: "/ai-search-audit",
  },
];

export default function CiviveOSOfferPage() {
  return (
    <>
      <Seo {...pageMeta.civiveOsOffer} path="/civive-os-offer" />
      <AuthorityShell>
        <PageHero
          eyebrow="CiviveOS pricing and plans"
          title="Choose the lead-response operating base before adding more AI."
          copy="CiviveOS plans give service businesses the capture, booking, review, follow-up, and AI-ready front desk foundation behind the audit and visibility system."
          primaryCta={{ label: "Compare plans", href: "#offer" }}
          secondaryCta={{ label: "Ask what fits first", href: "/contact" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <div className="mt-5 space-y-5 text-sm leading-6 text-white/72">
              <p>
                Start with Launch at $197/month when the business needs the
                basics cleaned up. Choose Growth at $297/month when workflows
                and review movement matter. Choose Operator at $497/month when
                the team wants an AI-ready operating base.
              </p>
              <p>
                The AI receptionist is not bundled into the software plan by
                default. That keeps the pricing honest and lets the system get
                ready before more automation is added.
              </p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="How to choose"
              title="Pick the plan based on the leak, not the fanciest feature."
              copy="The right plan depends on whether the business needs basic capture, stronger follow-up, or an AI-ready front desk foundation."
            />
            <div className="border-y border-white/[0.08]">
              {civiveOsPlans.map(plan => (
                <div
                  key={plan.name}
                  className="grid gap-4 border-b border-white/[0.08] py-6 last:border-b-0 lg:grid-cols-[9rem_7rem_minmax(0,1fr)]"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {plan.name}
                  </h2>
                  <p className="text-xl font-semibold text-white/88">
                    {plan.price}/mo
                  </p>
                  <div>
                    <p className="text-sm leading-6 text-white/66">
                      {plan.bestFor}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/46">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <PricingSection />

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Decision criteria"
              title="Before choosing a plan, answer the operational question underneath it."
              copy="This keeps the offer tied to the actual buyer intent: capture leads, recover missed opportunities, book cleaner, and avoid adding AI on top of chaos."
            />
            <EditorialList items={decisionChecks} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="After checkout"
              title="The first job is to make the lead path visible and usable."
              copy="CiviveOS is not just another login. It should become the operating surface where lead response, booking, follow-up, and reputation movement are easier to control."
            />
            <EditorialList items={implementationSteps} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Boundaries"
              title="What the plan does not promise by default."
              copy="Strong SEO and conversion pages should remove confusion before it becomes a bad-fit sale."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {boundaries.map(item => (
                <div key={item} className="flex gap-4 py-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c2ff]" />
                  <p className="text-sm leading-6 text-white/66">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <SectionHeader
              eyebrow="Connected pages"
              title="Use the right page for the right stage of the buying path."
              copy="The offer page links back into the system overview, AI receptionist page, audit path, and contact route so buyers and crawlers do not hit a dead end."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {supportLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {link.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {link.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white">
                    Open page
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="CiviveOS pricing FAQs"
              title="Questions service businesses ask before choosing a plan."
              copy="These answers are visible on-page, so the FAQ schema only describes content visitors can actually read."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {civiveOsOfferFaqs.map(item => (
                <div key={item.question} className="py-6">
                  <h2 className="text-xl font-semibold text-white">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection className="border-t border-white/[0.08]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="homepage-eyebrow">Next step</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Choose a plan if the lead path is ready. Ask first if it is not.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              If you already know the business needs a cleaner operating base,
              compare the plans above. If the biggest leak is unclear, request
              an audit conversation first.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#offer"
                className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Compare plans
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Ask what fits first
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AuthoritySection>
      </AuthorityShell>
    </>
  );
}
