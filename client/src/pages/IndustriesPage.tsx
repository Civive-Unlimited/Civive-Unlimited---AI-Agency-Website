import {
  AuthoritySection,
  AuthorityShell,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { industries, industryHubFaqs, pageMeta, site } from "@/content/site";

const industrySignalPatterns = [
  {
    title: "Urgent problem searches",
    copy: "HVAC, plumbing, electrical, pest control, restoration, roofing, and auto repair often need pages that prove response speed, exact service fit, location coverage, and a reliable call path.",
  },
  {
    title: "Trust-before-booking searches",
    copy: "Med spas, salons, veterinary clinics, cleaning services, law firms, and real estate teams need clearer proof, process, credentials, reviews, FAQs, and appointment guidance before a buyer is comfortable taking the next step.",
  },
  {
    title: "Project and comparison searches",
    copy: "Landscaping, roofing, real estate, restoration, and professional services usually need project examples, decision criteria, service-area context, and comparison language that helps AI systems explain the best fit honestly.",
  },
];

const industryPillarLinks = [
  {
    href: "/ai-agency-springfield-mo",
    label: "Local AI agency",
    copy: "See how Civive supports Springfield service businesses with AI visibility, automation, receptionist setup, CRM follow up, and lead recovery.",
  },
  {
    href: "/ai-search-report",
    label: "Visibility Report",
    copy: "Diagnose the public facts, schema, FAQs, service pages, reviews, and lead path first.",
  },
  {
    href: "/visibility-system",
    label: "AI Search Visibility System",
    copy: "Turn the report findings into clearer pages, structured answers, internal links, and proof.",
  },
  {
    href: "/resources/ai-search-implementation-plan-service-businesses",
    label: "Implementation plan",
    copy: "Sequence entity cleanup, commercial pages, schema, resources, and lead response without creating thin content.",
  },
  {
    href: "/ai-receptionist",
    label: "AI receptionist",
    copy: "Protect the lead after discovery with faster intake, qualification, booking handoff, and follow-up.",
  },
  {
    href: "/civive-os",
    label: "CiviveOS",
    copy: "Connect visibility work to the lead-response operating base for conversations, booking, reviews, and CRM handoff.",
  },
  {
    href: site.visibilityReportRequestUrl,
    label: "Request a visibility report",
    copy: "Send the business, service area, website or Google profile, and the visibility problem to inspect first.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Seo {...pageMeta.industries} path="/industries" />
      <AuthorityShell>
        <PageHero
          eyebrow="Industries for AI Search Visibility"
          title="AI search visibility pages for local service businesses where trust and timing decide the call."
          copy="Civive helps service-based and trust-dependent businesses make their public signals easier for Google, ChatGPT, Gemini, Perplexity, Grok, maps, and buyers to understand. Each industry page explains the questions, proof, skipped-signal risks, and conversion paths that matter for that category."
          primaryCta={{
            label: "Get Your Free Visibility Report",
            href: "/contact",
          }}
          secondaryCta={{ label: "See the report", href: "/ai-search-report" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <p className="mt-5 text-sm leading-6 text-white/68">
              Industry SEO for AI search is not a list of keywords. It is a
              structured map of buyer questions, services, locations, trust
              signals, FAQs, schema, and lead response paths that prove why a
              business should be considered.
            </p>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="How this hub works"
              title="The industry pages are subpillars, not random landing pages."
              copy="Each page has one topical job: explain how AI search visibility changes for that type of business, then route the visitor into the report, implementation plan, lead-response system, or contact path."
            />
            <div className="grid gap-3">
              {industryPillarLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group border-y border-white/[0.08] px-0 py-5 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-medium text-white/92 transition-colors group-hover:text-white">
                    {link.label}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">
                    {link.copy}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industry pages"
              title="Each category has different questions, proof, and skipped-signal risks."
              copy="These pages give each industry a clean parent-child place in the topical map. They support the commercial report page, the visibility-system pillar, and the lead-response pages without creating duplicate doorway content."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map(industry => (
                <a
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group border-y border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/34">
                    Industry subpillar
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-white/92 transition-colors group-hover:text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                    {industry.intro}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Intent patterns"
              title="AI search needs different evidence depending on the buyer moment."
              copy="A strong industry strategy separates urgent problem intent, trust-before-booking intent, project comparison intent, local intent, and response-speed intent. That is how a page becomes useful instead of generic."
            />
            <div className="grid gap-4">
              {industrySignalPatterns.map(pattern => (
                <div
                  key={pattern.title}
                  className="border-y border-white/[0.08] py-6"
                >
                  <h3 className="text-xl font-medium text-white/92">
                    {pattern.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {pattern.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industry FAQ"
              title="Questions this hub answers for buyers and answer engines."
              copy="These answers are visible on the page and also support FAQ schema, so the structured data matches what visitors can actually read."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {industryHubFaqs.map(faq => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-xl font-medium text-white/92">
                    {faq.question}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Start with the industry fit, then inspect the signals that decide the call."
          copy="The report maps the business-specific gaps across service language, local proof, reviews, structured answers, schema, internal links, and lead capture."
        />
      </AuthorityShell>
    </>
  );
}
