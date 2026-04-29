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
  getIndustry,
  getIndustryAuthorityBrief,
  getIndustryFaqs,
  getRelatedIndustries,
} from "@/content/site";
import NotFound from "@/pages/NotFound";

type IndustryPageProps = {
  slug?: string;
};

function toItems(items: string[], copyForItem: (item: string) => string) {
  return items.map(item => ({ title: item, copy: copyForItem(item) }));
}

export default function IndustryPage({ slug }: IndustryPageProps) {
  const industry = getIndustry(slug);

  if (!industry) {
    return <NotFound />;
  }

  const relatedIndustries = getRelatedIndustries(industry.slug);
  const industryFaqs = getIndustryFaqs(industry);
  const authorityBrief = getIndustryAuthorityBrief(industry);
  const auditContactHref = `/contact?intent=ai-search-audit&industry=${industry.slug}`;

  const industryImplementationLinks = [
    {
      title: "Start with the AI Search Visibility Audit",
      href: "/ai-search-audit",
      copy: `Use the audit to inspect the ${industry.shortName} site's public facts, service pages, schema opportunities, Google profile alignment, reviews, FAQs, and contact path before creating more content.`,
    },
    {
      title: "Build the visibility system after the gaps are clear",
      href: "/visibility-system",
      copy: `Turn the highest-impact ${industry.shortName} findings into clearer service pages, answer-ready FAQs, honest proof, internal links, and structured data that matches visible content.`,
    },
    {
      title: "Follow the implementation sequence",
      href: "/resources/ai-search-implementation-plan-service-businesses",
      copy: "Prioritize entity cleanup, commercial pages, schema, supporting content, and lead response in that order so the site gets clearer instead of just larger.",
    },
    {
      title: "Protect the lead response path",
      href: "/ai-receptionist",
      copy: `If ${industry.shortName} leads already arrive through calls, forms, chat, or booking requests, AI receptionist and missed-call recovery work can reduce lost opportunities after discovery.`,
    },
    {
      title: "Connect the work to CiviveOS",
      href: "/civive-os",
      copy: "CiviveOS provides the lead-response operating base for conversations, booking, reviews, follow-up, and AI-ready handoff after visibility improves.",
    },
  ];

  return (
    <>
      <Seo
        title={`${industry.name} AI Search Visibility | Civive Unlimited`}
        description={`AI Search Visibility Audit and visibility signal cleanup for ${industry.name} businesses that need clearer services, trust signals, reviews, FAQs, schema, and lead capture.`}
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
          primaryCta={{ label: "Get an AI Search Visibility Audit", href: auditContactHref }}
          secondaryCta={{ label: "View all industries", href: "/industries" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Buyer questions</p>
            <ul className="mt-6 space-y-4">
              {industry.customerQuestions.map(question => (
                <li
                  key={question}
                  className="border-b border-white/[0.08] pb-4 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Direct answer"
              title={`${industry.name} AI search visibility depends on specific buyer evidence.`}
              copy={
                authorityBrief?.answerSummary ??
                `A ${industry.shortName} business becomes easier for Google, AI answers, and buyers to understand when its services, service area, proof, reviews, FAQs, schema, and response path all describe the same real-world offer.`
              }
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-y border-white/[0.08] py-6">
                <p className="homepage-eyebrow">Search moment</p>
                <h3 className="mt-4 text-xl font-medium text-white/92">
                  What the buyer is trying to decide.
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {authorityBrief?.searchMoment ??
                    "The page should answer the real questions a buyer asks before calling, booking, or requesting an estimate."}
                </p>
              </div>
              <div className="border-y border-white/[0.08] py-6">
                <p className="homepage-eyebrow">First fix priority</p>
                <h3 className="mt-4 text-xl font-medium text-white/92">
                  What should be clarified before more content.
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {authorityBrief?.firstFixPriority ??
                    "Clarify the real service, location, proof, FAQs, schema, and response path before scaling supporting articles."}
                </p>
              </div>
            </div>
          </div>
        </AuthoritySection>

        {authorityBrief && (
          <AuthoritySection>
            <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
              <SectionHeader
                eyebrow="How buyers choose"
                title={`${industry.name} pages should answer the decision criteria, not just name the service.`}
                copy="Google and AI answer engines need enough visible evidence to understand why a provider fits the search. These criteria turn the page from a keyword target into a useful decision asset."
              />
              <div className="grid gap-4">
                {authorityBrief.decisionCriteria.map(criterion => (
                  <div
                    key={criterion.title}
                    className="border-y border-white/[0.08] py-6"
                  >
                    <h3 className="text-xl font-medium text-white/92">
                      {criterion.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      {criterion.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AuthoritySection>
        )}

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
                item =>
                  `${item} can make a stronger competitor easier for Google, maps, AI search, and buyers to understand. The fix is to turn the real service, location, proof, and next-step context into visible page content instead of leaving it implied.`
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
                {industry.trustSignals.map(signal => (
                  <div key={signal} className="py-4">
                    <h3 className="text-lg font-medium text-white/90">
                      {signal}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      This should be visible in the page copy, reviews, FAQs,
                      profile details, or conversion path so the business is
                      easier to verify without guesswork.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="homepage-eyebrow">Usually missing</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Pages and proof that often need cleanup.
              </h2>
              <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {industry.missingAssets.map(asset => (
                  <div key={asset} className="py-4">
                    <h3 className="text-lg font-medium text-white/90">
                      {asset}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      If this asset reflects a real offer, it should either
                      exist as a clear page, be folded into the right parent
                      page, or be intentionally left out to avoid thin overlap.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AuthoritySection>

        {authorityBrief && (
          <AuthoritySection>
            <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
              <SectionHeader
                eyebrow="Objection handling"
                title={`Questions a ${industry.shortName} buyer may hesitate on before contacting anyone.`}
                copy="Objection sections help visitors decide faster and give AI systems clearer language for comparison, without inventing fake proof or making unsupported promises."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {authorityBrief.objections.map(objection => (
                  <div
                    key={objection.title}
                    className="border-y border-white/[0.08] py-6"
                  >
                    <h3 className="text-xl font-medium text-white/92">
                      {objection.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      {objection.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AuthoritySection>
        )}

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
                item =>
                  `${item} should be evaluated against the ${industry.shortName} business model, service area, buyer intent, Google profile, public proof, and lead-response path before more pages are created.`
              )}
            />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Connected implementation path"
              title={`Where a ${industry.shortName} visibility fix should connect next.`}
              copy="Search engines and AI systems understand sites better when parent, child, sibling, support, and conversion pages are connected with descriptive links. These are the paths a serious industry page should support."
            />
            <EditorialList items={industryImplementationLinks} />
          </div>
        </AuthoritySection>

        {relatedIndustries.length > 0 && (
          <AuthoritySection>
            <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
              <SectionHeader
                eyebrow="Related industry patterns"
                title={`Adjacent categories that share ${industry.shortName} search behavior.`}
                copy="Lateral links help crawlers and buyers understand which industries share urgent-intent, trust-first, local-proof, or project-comparison patterns without making duplicate pages compete with each other."
              />
              <div className="grid gap-3 sm:grid-cols-3">
                {relatedIndustries.map(relatedIndustry => (
                  <a
                    key={relatedIndustry.slug}
                    href={`/industries/${relatedIndustry.slug}`}
                    className="group border-y border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/34">
                      Sibling subpillar
                    </p>
                    <h3 className="mt-3 text-xl font-medium text-white/92 transition-colors group-hover:text-white">
                      {relatedIndustry.name}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                      {relatedIndustry.intro}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </AuthoritySection>
        )}

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industry FAQ"
              title={`${industry.name} questions worth answering clearly.`}
              copy="Specific answers help buyers decide faster and give answer engines better language to work with."
            />
            <EditorialList
              items={industryFaqs.map(faq => ({
                title: faq.question,
                copy: faq.answer,
              }))}
            />
          </div>
        </AuthoritySection>

        <FinalCta
          title={`See what AI search can understand about your ${industry.shortName} business now.`}
          copy="The audit starts with the real public signals already online, then turns the gaps into a priority map."
          primaryCta={{
            label: `Audit my ${industry.shortName} visibility`,
            href: auditContactHref,
          }}
          secondaryCta={{
            label: "Compare all industries",
            href: "/industries",
          }}
        />
      </AuthorityShell>
    </>
  );
}
