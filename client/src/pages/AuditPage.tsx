import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { auditChecks, pageMeta } from "@/content/site";

const processSteps = [
  {
    title: "Capture the current public story",
    copy: "Start with the website, Google profile, services, locations, reviews, FAQs, and contact path as they exist right now.",
  },
  {
    title: "Find what AI and buyers cannot understand",
    copy: "Identify vague services, missing local context, weak proof, inconsistent language, thin answers, and unclear handoff points.",
  },
  {
    title: "Prioritize the highest-leverage fixes",
    copy: "Turn the findings into a practical sequence: what to clean first, what to create next, and what can wait.",
  },
  {
    title: "Map the implementation path",
    copy: "Connect the audit to service pages, FAQs, schema, profile cleanup, review strategy, lead capture, and follow-up when appropriate.",
  },
];

const deliverables = [
  "A plain-English priority map of visibility gaps",
  "Notes on website message, service, and location clarity",
  "Google Business Profile and review signal observations",
  "FAQ, schema, and answer-engine opportunities",
  "Lead capture and handoff recommendations",
  "A recommended next implementation sequence",
];

export default function AuditPage() {
  return (
    <>
      <Seo {...pageMeta.audit} path="/ai-search-audit" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Readiness Audit"
          title={
            <>
              Find the signals that make your business easier or harder to
              recommend.
            </>
          }
          copy="A practical audit for service businesses that want ChatGPT, Gemini, Perplexity, Google, maps, voice search, and real buyers to understand who they are, what they do, where they work, and why they should be trusted."
          primaryCta={{ label: "Get AI Search Audit", href: "/contact" }}
          secondaryCta={{ label: "Explore the system", href: "/visibility-system" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Audit output</p>
            <ul className="mt-6 space-y-4">
              {deliverables.slice(0, 5).map((item) => (
                <li key={item} className="border-b border-white/[0.08] pb-4 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </PageHero>

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
              eyebrow="Process"
              title="A clear sequence, not a vague score."
              copy="The goal is to leave with a practical operating map that can become implementation work, content, schema, or lead-system cleanup."
            />
            <EditorialList items={processSteps} />
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
                Civive reviews the business as a public entity: message, services,
                locations, proof, structured context, and conversion path. The
                output is a usable fix order, not a pile of abstract SEO language.
              </p>
            </div>
            <div>
              <p className="homepage-eyebrow">What it is not</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Not a promise of instant rankings or fake authority.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/64">
                No fake reviews, no rented logos, no invented case studies, and no
                magic placement claims. The work is about making the real business
                clearer, more useful, and easier to trust.
              </p>
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
