import {
  AuthoritySection,
  AuthorityShell,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import ContactSection from "@/components/sections/ContactSection";
import { pageMeta } from "@/content/site";

export default function FreeVisibilityReportPage() {
  return (
    <>
      <Seo {...pageMeta.freeVisibilityReport} path="/free-visibility-report" />
      <AuthorityShell>
        <PageHero
          eyebrow="$99 Audit Fit Check"
          title="See if the $99 audit fits before you pay."
          copy="Send the business name, website or Google profile, service area, and the main trust or visibility problem. Civive does a short public-source pre-check first. If the audit can produce useful findings, we send the paid link. If not, we tell you the better next step."
          primaryCta={{ label: "Use the form below", href: "#contact" }}
          secondaryCta={{
            label: "See the $99 audit",
            href: "/ai-search-trust-audit",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              This free step is not a report. It is a quick fit check so we do
              not sell the $99 AI Search and Trust Leak Audit when there is not
              enough public evidence, or when another problem should come first.
              The paid audit is where the 3 to 5 findings and first fix are
              delivered.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-3">
              <p>Enough public evidence</p>
              <p>$99 audit fit</p>
              <p>Honest next step</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What to send"
              title="The better the context, the more honest the recommendation."
              copy="The strongest request gives enough public context to decide whether a paid audit can create value, without turning the free step into the paid deliverable."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {[
                "Business name and public website or Google profile.",
                "Primary services and the local area you want to serve.",
                "What you want ChatGPT, Gemini, Grok, Perplexity, Google, and buyers to understand.",
                "Whether calls, forms, booking, reviews, or follow-up are leaking leads.",
              ].map(item => (
                <p key={item} className="py-5 text-sm leading-6 text-white/66">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <ContactSection />
      </AuthorityShell>
    </>
  );
}
