import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { faqs, pageMeta } from "@/content/site";

export default function FAQPage() {
  return (
    <>
      <Seo {...pageMeta.faq} path="/faq" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Visibility FAQ"
          title="Plain answers to the questions business owners are starting to ask."
          copy="AI search visibility overlaps with SEO, but it is not just another keyword tactic. These answers explain how clarity, trust, structure, reviews, schema, and lead capture fit together."
          primaryCta={{ label: "Get a Free Fit Check", href: "/contact" }}
          secondaryCta={{ label: "Read resources", href: "/resources" }}
        />

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Natural-language answers"
              title="Built for search intent, voice search, and real decision-making."
              copy="These are written in the same shape buyers and operators use when they ask ChatGPT, Google, or a trusted advisor what matters."
            />
            <EditorialList
              items={faqs.map(faq => ({
                title: faq.question,
                copy: faq.answer,
              }))}
            />
          </div>
        </AuthoritySection>

        <FinalCta
          title="Have a business-specific version of one of these questions?"
          copy="Bring it to the report. Civive will inspect the public evidence and map the fixes that make the answer clearer."
        />
      </AuthorityShell>
    </>
  );
}
