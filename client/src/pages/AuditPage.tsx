import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { auditChecks, auditPageFaqs, pageMeta, site } from "@/content/site";

const processSteps = [
  {
    title: "Capture the current public footprint",
    copy: "Review the website, Google Business Profile, service language, location or service-area signals, reviews, FAQs, schema, sitemap, internal links, and contact path as they exist right now.",
  },
  {
    title: "Find what buyers and AI systems cannot understand",
    copy: "Identify vague services, missing local context, weak proof, inconsistent public facts, thin answers, unsupported schema, duplicate intent, and unclear handoff points.",
  },
  {
    title: "Prioritize the fixes by business impact",
    copy: "Separate urgent public-fact cleanup, commercial-page improvements, schema opportunities, content gaps, and lead-capture fixes so the business does not waste money on the wrong next page.",
  },
  {
    title: "Map the implementation path",
    copy: "Connect the findings to service pages, FAQs, schema, profile cleanup, review strategy, internal links, lead capture, booking, CRM handoff, and follow-up when appropriate.",
  },
];

const deliverables = [
  {
    title: "Priority map",
    copy: "A plain-English fix order showing what is unclear, why it matters, and which page, profile, or system should be improved first.",
  },
  {
    title: "Entity and service clarity review",
    copy: "Checks for business facts, homepage positioning, service naming, service-area language, Google profile alignment, and public consistency.",
  },
  {
    title: "Technical SEO and schema review",
    copy: "Canonical, robots, sitemap, metadata, internal-link, WebPage, Service, FAQPage, Article, Organization, and WebSite schema observations where supported by visible content.",
  },
  {
    title: "Buyer-intent content map",
    copy: "Recommendations for service, problem, comparison, cost, alternative, checklist, mistakes, FAQ, and proof pages that support the commercial path.",
  },
  {
    title: "Lead-capture and response review",
    copy: "Review of forms, phone links, booking paths, chat, CRM handoff, follow-up needs, and whether an AI receptionist or missed-call flow belongs in the next step.",
  },
  {
    title: "Implementation sequence",
    copy: "A practical order for cleanup, page creation, schema, profile work, proof building, and automation so the business can move without guessing.",
  },
];

const fitSignals = [
  {
    title: "Good fit",
    copy: "The business has real services and demand, but the website, profile, schema, content, or response path is unclear enough that AI systems and buyers may skip it.",
  },
  {
    title: "Also a fit",
    copy: "The business is preparing to invest in SEO, content, ads, or automation and wants the public signals cleaned up before spending more on traffic.",
  },
  {
    title: "Not the first move",
    copy: "If the business has no real offer, no service capacity, or no way to answer leads, fix operations first. Visibility will only expose the bottleneck faster.",
  },
];

const pricingDrivers = [
  {
    title: "Simple footprint",
    copy: "One location, clear services, small site, and a mostly working contact path usually need a lighter audit and a shorter implementation map.",
  },
  {
    title: "Messy footprint",
    copy: "Multiple services, inconsistent public facts, thin pages, duplicate content, weak Google profile alignment, or unclear lead routing need deeper review.",
  },
  {
    title: "Implementation depth",
    copy: "An audit that only identifies issues is lighter. An audit that turns findings into page briefs, schema recommendations, and build sequencing is more valuable.",
  },
];

const objectionHandlers = [
  {
    title: "Is this just SEO?",
    copy: "It overlaps with SEO, but the audit is broader: it asks whether buyers, search engines, and answer systems can understand, summarize, compare, and trust the business.",
    href: "/resources/ai-search-vs-local-seo",
  },
  {
    title: "Can I do this myself?",
    copy: "Some public-fact cleanup can be DIY. The audit is useful when the issues overlap and you need a fix order before paying for content, schema, profile cleanup, or automation.",
    href: "/resources/ai-search-audit-alternatives",
  },
  {
    title: "What does it cost?",
    copy: "Cost depends on footprint depth, number of services and locations, public profile complexity, and whether implementation planning is included.",
    href: "/resources/ai-search-audit-cost",
  },
  {
    title: "How do I choose a provider?",
    copy: "Choose someone who can connect visibility signals to real business outcomes without fake reviews, unsupported schema, or guaranteed AI placement claims.",
    href: "/resources/best-ai-search-audit-for-service-businesses",
  },
];

const supportResources = [
  {
    title: "Springfield AI agency",
    copy: "See how Civive connects the audit to local AI agency services, AI automation, lead capture, and booked jobs for Springfield service businesses.",
    href: "/ai-agency-springfield-mo",
  },
  {
    title: "What the audit includes",
    copy: "A deeper breakdown of the surfaces and deliverables the audit should inspect.",
    href: "/resources/what-does-an-ai-search-audit-include",
  },
  {
    title: "AI search readiness checklist",
    copy: "A practical checklist for facts, services, proof, schema, content, and lead capture.",
    href: "/resources/ai-search-readiness-checklist",
  },
  {
    title: "AI search visibility mistakes",
    copy: "The avoidable mistakes that create indexing, reputation, and conversion risk.",
    href: "/resources/ai-search-visibility-mistakes",
  },
  {
    title: "Implementation plan",
    copy: "The sequence for turning audit findings into pages, schema, proof, links, and lead response.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
];

export default function AuditPage() {
  return (
    <>
      <Seo {...pageMeta.audit} path="/ai-search-audit" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Visibility Audit"
          title={
            <>
              Find the signals that make your business easier or harder to
              recommend.
            </>
          }
          copy="A practical audit for service businesses that want ChatGPT, Gemini, Perplexity, Grok, voice search, and real buyers to understand who they are, what they do, where they work, and why they should be trusted."
          primaryCta={{ label: "Get an AI Search Visibility Audit", href: "/contact" }}
          secondaryCta={{
            label: "Explore the system",
            href: "/visibility-system",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              An AI Search Visibility Audit finds the public signals that help or
              hurt recommendation confidence, then turns them into a prioritized
              implementation map for search, AI answers, and lead capture.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-3">
              <p>Entity clarity</p>
              <p>Schema and content gaps</p>
              <p>Lead path readiness</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Business facts"
              title="The audit starts by making the public facts consistent."
              copy="These are the Civive Unlimited NAP and contact signals used across the site, footer, metadata, and structured data."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {[
                { title: "Business", copy: site.name },
                { title: "Address", copy: site.addressDisplay },
                { title: "Phone", copy: site.phone },
                { title: "Email", copy: site.email },
                { title: "Website", copy: site.website },
                { title: "Primary market", copy: site.location },
              ].map(item => (
                <div
                  key={item.title}
                  className="grid gap-3 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]"
                >
                  <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-white/42">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-6 text-white/72">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Who it is for"
              title="Use the audit when visibility, trust, and response are all connected."
              copy="The audit is strongest when the business is real, but the public evidence is fragmented. It keeps the next spend focused on what will actually make the company easier to understand and contact."
            />
            <EditorialList items={fitSignals} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What it checks"
              title="The audit looks where recommendation confidence is created."
              copy="Good businesses get skipped when their public evidence is hard to parse. The audit turns that invisible problem into a visible fix list."
            />
            <EditorialList items={auditChecks} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Deliverables"
              title="What you should walk away with."
              copy="A useful audit should be specific enough to guide implementation. If the output cannot become a page map, schema plan, profile cleanup, or lead-response fix, it is not sharp enough."
            />
            <EditorialList items={deliverables} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Process"
              title="A clear sequence, not a vague score."
              copy="The goal is to leave with a practical operating map that can become implementation work, content, schema, or lead-system cleanup."
            />
            <EditorialList items={processSteps} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Pricing logic"
              title="The audit cost should match the complexity of the footprint."
              copy="The point is not to buy the longest report. The point is to buy enough inspection depth to avoid building the wrong thing first."
            />
            <EditorialList items={pricingDrivers} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="homepage-eyebrow">What it is</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                A readiness audit for AI search, local search, and buyer trust.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/64">
                Civive reviews the business as a public entity: message,
                services, locations, proof, structured context, and conversion
                path. The output is a usable fix order, not a pile of abstract
                SEO language.
              </p>
            </div>
            <div>
              <p className="homepage-eyebrow">What it is not</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Not a promise of instant rankings or fake authority.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/64">
                No fake reviews, no rented logos, no invented case studies, and
                no magic placement claims. The work is about making the real
                business clearer, more useful, and easier to trust.
              </p>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Objection handling"
              title="The audit should answer the buying questions before the call."
              copy="These are the comparison, cost, and trust questions buyers ask before they decide whether an AI search audit is worth doing."
            />
            <EditorialList items={objectionHandlers} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Supporting resources"
              title="Read the pages that support this audit path."
              copy="This cluster exists so the commercial page is backed by useful, crawlable support content instead of floating by itself."
            />
            <EditorialList items={supportResources} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Audit FAQs"
              title="Short answers for buyers and answer engines."
              copy="These questions are visible on-page and included in JSON-LD only because the answers are actually present here."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {auditPageFaqs.map(faq => (
                <div key={faq.question} className="py-7">
                  <h2 className="text-xl font-medium text-white/92">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Start with the audit, then build only what the evidence says matters."
          copy="Bring the business, website, Google profile, and service area. Civive will map the fastest path from unclear signals to recommendation readiness."
        />
      </AuthorityShell>
    </>
  );
}
