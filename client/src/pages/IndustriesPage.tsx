import {
  AuthoritySection,
  AuthorityShell,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { industries, pageMeta } from "@/content/site";

export default function IndustriesPage() {
  return (
    <>
      <Seo {...pageMeta.industries} path="/industries" />
      <AuthorityShell>
        <PageHero
          eyebrow="Industries"
          title="AI visibility for service businesses where trust and timing decide the call."
          copy="Civive focuses on businesses where buyers ask who to call, where to go, who to trust, and who can respond. The work changes by industry, but the core problem stays the same: public signals need to be clear."
          primaryCta={{ label: "Get AI Search Audit", href: "/contact" }}
          secondaryCta={{ label: "See the audit", href: "/ai-search-audit" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Fit</p>
            <p className="mt-5 text-sm leading-6 text-white/68">
              Best for service-based and trust-dependent businesses where local
              intent, speed, reviews, and clear service pages influence who gets
              contacted first.
            </p>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industry pages"
              title="Each category has different questions, proof, and skipped-signal risks."
              copy="These pages are built as reusable templates that can grow into deeper industry playbooks over time."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <a
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group border-b border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
                >
                  <h2 className="text-xl font-medium text-white/92 transition-colors group-hover:text-white">
                    {industry.name}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                    {industry.intro}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="mx-auto max-w-4xl">
            <p className="homepage-eyebrow">Who this is for</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              If the buyer needs confidence before contacting you, your public
              evidence matters.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
              The same principle applies across home services, professional
              services, health-adjacent services, local teams, and appointment-led
              businesses. When AI search summarizes options, the businesses with
              clearer service, location, review, FAQ, and booking signals become
              easier to choose.
            </p>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Start with your category, then inspect the signals that matter most."
          copy="The audit maps the business-specific gaps across service language, local proof, reviews, structured answers, and lead capture."
        />
      </AuthorityShell>
    </>
  );
}
