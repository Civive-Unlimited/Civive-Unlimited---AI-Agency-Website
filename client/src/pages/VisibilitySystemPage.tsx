import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import {
  pageMeta,
  visibilitySystemFaqs,
  visibilitySystemLayers,
} from "@/content/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const implementationAreas = [
  {
    title: "Messaging clarity",
    copy: "Make the business, audience, services, service area, and buying reason clear enough to understand without interpretation.",
  },
  {
    title: "Service and location alignment",
    copy: "Connect what the business sells to the places it actually serves, without thin pages or fake local claims.",
  },
  {
    title: "Public business consistency",
    copy: "Reduce conflicting facts across the site, Google profile, listings, social profiles, and public mentions.",
  },
  {
    title: "FAQ and answer formatting",
    copy: "Answer the exact questions buyers ask in language that can support voice search, AI summaries, and human decision-making.",
  },
  {
    title: "Schema and structured context",
    copy: "Use structured data only after the page content is real, clear, and worthy of being parsed.",
  },
  {
    title: "Lead capture readiness",
    copy: "Make sure forms, booking, chat, phone, CRM notes, and follow-up do not lose the buyer after discovery.",
  },
];

const implementationSequence = [
  {
    title: "Diagnose the weak signal",
    copy: "Use the report to identify whether the issue is entity clarity, service depth, local proof, schema, reviews, or the lead path.",
    href: "/ai-search-report",
  },
  {
    title: "Clarify the money pages",
    copy: "Strengthen the homepage, service pages, industry pages, and conversion pages before publishing more low-intent content.",
  },
  {
    title: "Structure answers and proof",
    copy: "Add direct answers, FAQs, comparison logic, examples, proof-of-work, and schema that matches visible content.",
    href: "/resources/ai-search-readiness-checklist",
  },
  {
    title: "Connect the internal map",
    copy: "Link pillar, commercial, industry, resource, and contact pages so buyers and crawlers can follow the topic without dead ends.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
  {
    title: "Protect the lead after discovery",
    copy: "Use forms, booking, chat, CRM context, follow-up, CiviveOS, or an AI receptionist when response speed is the revenue leak.",
    href: "/civive-os",
  },
];

const fitSignals = [
  "The business is real, but AI tools or search snippets would struggle to explain why someone should choose it.",
  "The site has service pages, FAQs, reviews, and profile content, but they do not reinforce one clear story.",
  "The company wants more local visibility without using fake locations, fake reviews, doorway pages, or unsupported schema.",
  "Search traffic exists or is being built, but forms, calls, booking, and follow-up still leak qualified buyers.",
];

const connectedPages = [
  {
    title: "AI agency for service businesses",
    copy: "See the local commercial page for Springfield service businesses that need AI visibility, automation, CRM follow up, and faster response.",
    href: "/ai-agency-springfield-mo",
  },
  {
    title: "Visibility Report",
    copy: "Start here when the weak signals need to be diagnosed and prioritized.",
    href: "/ai-search-report",
  },
  {
    title: "CiviveOS",
    copy: "Move here when the lead-response operating base needs to catch demand.",
    href: "/civive-os",
  },
  {
    title: "CiviveOS Pricing",
    copy: "Compare plans when the business is ready to choose the operating base.",
    href: "/civive-os-offer",
  },
  {
    title: "AI Receptionist",
    copy: "Use this path when missed calls, intake, routing, or after-hours response are the leak.",
    href: "/ai-receptionist",
  },
  {
    title: "Implementation Plan",
    copy: "Read the sequence for turning report findings into pages, schema, links, and lead systems.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
];

export default function VisibilitySystemPage() {
  return (
    <>
      <Seo {...pageMeta.system} path="/visibility-system" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Visibility System"
          title="AI Search Visibility System for service businesses that need cleaner signals and better lead capture."
          copy="The report finds the weak signals. The visibility system fixes them through clearer messaging, service structure, public proof, schema-ready content, internal links, and a cleaner lead path."
          primaryCta={{
            label: "Get Your Free Visibility Report",
            href: "/contact",
          }}
          secondaryCta={{ label: "See the report", href: "/ai-search-report" }}
        >
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {visibilitySystemLayers.map((layer, index) => (
              <div key={layer.title} className="py-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                  0{index + 1}
                </p>
                <h2 className="hero-side-title mt-3 text-2xl text-white">
                  {layer.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {layer.copy}
                </p>
              </div>
            ))}
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Direct answer"
              title="The system turns unclear public evidence into a connected search and lead asset."
              copy="A service business needs more than keywords. It needs clean facts, specific services, visible proof, crawlable answers, structured data, and a next step that preserves the buyer's intent."
            />
            <EditorialList items={implementationAreas} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {visibilitySystemLayers.map(layer => (
              <div
                key={layer.title}
                className="border-y border-white/[0.08] py-7"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/62">
                  {layer.copy}
                </p>
                <ul className="mt-6 space-y-3">
                  {layer.items.map(item => (
                    <li
                      key={item}
                      className="border-b border-white/[0.08] pb-3 text-sm text-white/74 last:border-b-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="Implementation sequence"
              title="Fix the core signals before expanding the content footprint."
              copy="This keeps the site from becoming a random blog. Each page should support a clear intent, internal-link role, schema role, and conversion path."
            />
            <EditorialList items={implementationSequence} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Good fit"
              title="Use this system when the business deserves to be understood better."
              copy="The goal is not to trick search engines. The goal is to make real expertise, service fit, location relevance, and next steps easier to verify."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {fitSignals.map(item => (
                <div key={item} className="flex gap-4 py-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c2ff]" />
                  <p className="text-sm leading-6 text-white/66">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="mx-auto max-w-4xl">
            <p className="homepage-eyebrow">How it connects</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Get found, get trusted, capture the lead, automate the response.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
              AI visibility is only valuable if it turns into a real
              conversation. That is why the system includes the handoff: contact
              paths, booking, CRM context, follow-up, and when it fits, an AI
              receptionist that keeps the lead from getting lost.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {connectedPages.map(page => (
                <a
                  key={page.href}
                  href={page.href}
                  className="group border-y border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {page.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {page.copy}
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
              eyebrow="Visibility system FAQs"
              title="Questions buyers ask before turning a report into implementation."
              copy="These answers are visible on-page, so the FAQ schema describes real content instead of hidden markup."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {visibilitySystemFaqs.map(item => (
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

        <FinalCta
          title="Build the visibility system from the report outward."
          copy="Start with what is unclear now. Then turn the highest-impact fixes into pages, answers, structured context, internal links, and lead systems."
        />
      </AuthorityShell>
    </>
  );
}
