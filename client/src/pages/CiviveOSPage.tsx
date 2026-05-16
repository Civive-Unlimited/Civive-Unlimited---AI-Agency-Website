import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { civiveOsFaqs, pageMeta, site } from "@/content/site";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  MessageSquareText,
  PhoneIncoming,
} from "lucide-react";

const operatingLayers = [
  {
    title: "Capture",
    copy: "Calls, forms, chats, and messages land in one lead-response surface instead of disappearing across tools.",
  },
  {
    title: "Recover",
    copy: "Missed calls and slow replies get a cleaner follow-up path before the lead cools off.",
  },
  {
    title: "Book",
    copy: "Calendars, conversations, and opportunities stay connected so the next step is obvious.",
  },
  {
    title: "Prove",
    copy: "Reviews, reputation movement, and follow-up activity become part of the same operating rhythm.",
  },
];

const workflows = [
  {
    icon: PhoneIncoming,
    title: "A lead reaches out",
    copy: "The inquiry can come from the website, phone, chat, form, or an AI-search-driven visit.",
  },
  {
    icon: MessageSquareText,
    title: "CiviveOS catches the thread",
    copy: "The business gets one place to see the conversation, contact, source, and next action.",
  },
  {
    icon: CalendarCheck,
    title: "The next step is pushed forward",
    copy: "Booking, reply, review request, follow-up, or pipeline movement can happen without manual chaos.",
  },
  {
    icon: Bot,
    title: "AI front desk can be layered in",
    copy: "When the team is ready, the AI receptionist can help answer, qualify, route, and recover leads.",
  },
];

const fitChecks = [
  "You miss calls or take too long to reply.",
  "Leads arrive from too many disconnected places.",
  "Reviews and follow-up only happen when someone remembers.",
  "You want an AI receptionist, but the operating base is not ready yet.",
  "You need a cleaner system before adding more traffic.",
];

const planSnapshot = [
  {
    name: "Launch",
    price: "$197/mo",
    copy: "Lead inbox, missed-call text back, web chat, calendar, and guided setup.",
  },
  {
    name: "Growth",
    price: "$297/mo",
    copy: "Adds campaigns, lead-response workflows, review movement, and stronger handoff.",
  },
  {
    name: "Operator",
    price: "$497/mo",
    copy: "AI-ready operating base. AI receptionist and AI employees stay optional add-ons.",
  },
];

const decisionPath = [
  {
    title: "Start with the report when demand is unclear",
    copy: "If the public footprint is vague, the site is thin, or the business does not know why AI or Google would recommend it, diagnose the visibility problem first.",
    href: "/ai-search-audit",
  },
  {
    title: "Use the visibility system when the public signals need cleanup",
    copy: "The visibility system turns report findings into pages, FAQs, internal links, schema, proof, and a cleaner route to contact.",
    href: "/visibility-system",
  },
  {
    title: "Use CiviveOS when the lead path is leaking",
    copy: "If calls, forms, chat, booking, reviews, CRM notes, or follow-up are scattered, CiviveOS gives the business an operating base.",
  },
  {
    title: "Layer in the AI receptionist when rules are ready",
    copy: "Receptionist support works best after service intake, routing, escalation, calendar, and follow-up rules are clear.",
    href: "/ai-receptionist",
  },
];

const supportLinks = [
  {
    title: "Visibility Report",
    copy: "Diagnose whether the first bottleneck is demand, clarity, trust, or response.",
    href: "/ai-search-audit",
  },
  {
    title: "AI Search Implementation Plan",
    copy: "Review the sequence for turning report findings into pages, schema, proof, links, and lead systems.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
  {
    title: "CiviveOS Pricing",
    copy: "Compare Launch, Growth, and Operator when the business is ready to choose a plan.",
    href: "/civive-os-offer",
  },
];

export default function CiviveOSPage() {
  return (
    <>
      <Seo {...pageMeta.civiveOs} path="/civive-os" />
      <AuthorityShell>
        <PageHero
          eyebrow="CiviveOS"
          title="CiviveOS for service businesses that need cleaner lead capture, booking, and AI front desk readiness."
          copy="CiviveOS gives a service business one clean place to catch leads, move conversations, book jobs, request reviews, and prepare for AI reception when the timing is right."
          primaryCta={{
            label: "View CiviveOS pricing",
            href: "/civive-os-offer",
          }}
          secondaryCta={{
            label: "Start with Visibility Report",
            href: "/ai-search-audit",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              <p>
                Use CiviveOS when the business already gets calls, forms,
                chats, or booking requests and the main leak is slow response,
                scattered handoff, weak review movement, or no clear follow-up.
              </p>
              <p>
                If the business is not getting enough qualified demand yet,
                start with the Visibility Report and visibility system.
              </p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why it exists"
              title="Visibility creates demand. CiviveOS keeps that demand from leaking."
              copy="The website can make a business easier to find and trust. CiviveOS handles what happens after someone asks for help."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {workflows.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-5 py-7 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-white/[0.1] bg-white/[0.035] text-[#19c2ff]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="homepage-eyebrow">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
            <SectionHeader
              eyebrow="Good fit"
              title="Use CiviveOS when the business needs a better front desk before it needs more noise."
              copy="This is for teams that want the lead path cleaned up, not another generic login with no operating discipline."
            />
            <div className="border-y border-white/[0.08] py-6">
              {fitChecks.map(item => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-white/[0.08] py-4 text-sm leading-6 text-white/72 last:border-b-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#19c2ff]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Decision path"
              title="Choose the layer that matches the real bottleneck."
              copy="CiviveOS is strongest when there is already lead intent to protect. The report and visibility system come first when public evidence is still unclear."
            />
            <EditorialList items={decisionPath} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
            <SectionHeader
              eyebrow="Software plans"
              title="Plans start at $197/month. AI employees stay optional."
              copy="The page should make the offer obvious without forcing buyers into a wall of pricing before they understand the system."
            />
            <div className="border-y border-white/[0.08]">
              {planSnapshot.map(plan => (
                <div
                  key={plan.name}
                  className="grid gap-4 border-b border-white/[0.08] py-6 last:border-b-0 sm:grid-cols-[8rem_8rem_minmax(0,1fr)] sm:items-start"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    CiviveOS {plan.name}
                  </h3>
                  <p className="text-xl font-semibold text-white/90">
                    {plan.price}
                  </p>
                  <p className="text-sm leading-6 text-white/62">{plan.copy}</p>
                </div>
              ))}
              <div className="py-7">
                <a
                  href="/civive-os-offer"
                  className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  View full offer
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <SectionHeader
              eyebrow="Connected pages"
              title="CiviveOS sits between visibility work and AI receptionist implementation."
              copy="These pages explain the upstream visibility layer, the implementation sequence, and the pricing path."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {supportLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {link.title}
                  </h3>
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
              eyebrow="CiviveOS FAQs"
              title="Questions service businesses ask before choosing the operating base."
              copy="These answers are visible on-page, so the FAQ schema only describes content buyers can actually read."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {civiveOsFaqs.map(item => (
                <div key={item.question} className="py-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.question}
                  </h3>
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
            <p className="homepage-eyebrow">Offer page</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Move from visibility cleanup into a real lead-response system.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              Review Launch, Growth, and Operator when you are ready to choose
              the operating base behind the front desk.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/civive-os-offer"
                className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                View the offer
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.visibilityReportRequestUrl}
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
