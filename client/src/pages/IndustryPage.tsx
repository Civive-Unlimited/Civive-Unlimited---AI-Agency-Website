import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { getIndustry } from "@/content/site";
import NotFound from "@/pages/NotFound";

type IndustryPageProps = {
  slug?: string;
};

function toItems(items: string[], copy: string) {
  return items.map((item) => ({ title: item, copy }));
}

export default function IndustryPage({ slug }: IndustryPageProps) {
  const industry = getIndustry(slug);

  if (!industry) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={`${industry.name} AI Search Visibility | Civive Unlimited`}
        description={`AI Search Readiness Audit and visibility signal cleanup for ${industry.name} businesses that need clearer services, trust signals, reviews, FAQs, schema, and lead capture.`}
        path={`/industries/${industry.slug}`}
      />
      <AuthorityShell>
        <PageHero
          eyebrow={`${industry.name} AI Search Visibility`}
          title={
            <>
              Help AI search understand why a buyer should call your{" "}
              {industry.shortName} business.
            </>
          }
          copy={industry.intro}
          primaryCta={{ label: "Get AI Search Audit", href: "/contact" }}
          secondaryCta={{ label: "View all industries", href: "/industries" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Buyer questions</p>
            <ul className="mt-6 space-y-4">
              {industry.customerQuestions.map((question) => (
                <li key={question} className="border-b border-white/[0.08] pb-4 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0">
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why businesses get skipped"
              title={`Common AI visibility gaps for ${industry.name}.`}
              copy="The issue is usually not that the business is bad. It is that the public evidence is too thin, mismatched, or hard to connect to the buyer's question."
            />
            <EditorialList
              items={toItems(
                industry.skipReasons,
                "This can make a competitor with cleaner public signals easier for AI search, maps, and buyers to understand.",
              )}
            />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="homepage-eyebrow">Trust signals</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                What should be easier to verify.
              </h2>
              <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {industry.trustSignals.map((signal) => (
                  <p key={signal} className="py-4 text-sm leading-6 text-white/70">
                    {signal}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="homepage-eyebrow">Usually missing</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Pages and proof that often need cleanup.
              </h2>
              <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {industry.missingAssets.map((asset) => (
                  <p key={asset} className="py-4 text-sm leading-6 text-white/70">
                    {asset}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What Civive reviews"
              title={`A practical fix path for ${industry.name}.`}
              copy="The audit identifies the highest-leverage cleanup work first, then maps what should become service pages, FAQs, schema, profile updates, or lead-system improvements."
            />
            <EditorialList
              items={toItems(
                industry.fixes,
                "This is reviewed against the business model, service area, buyer intent, and public proof that already exists.",
              )}
            />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industry FAQ"
              title={`${industry.name} questions worth answering clearly.`}
              copy="Specific answers help buyers decide faster and give answer engines better language to work with."
            />
            <EditorialList items={industry.faqs.map((faq) => ({ title: faq.question, copy: faq.answer }))} />
          </div>
        </AuthoritySection>

        <FinalCta
          title={`See what AI search can understand about your ${industry.shortName} business now.`}
          copy="The audit starts with the real public signals already online, then turns the gaps into a priority map."
        />
      </AuthorityShell>
    </>
  );
}
