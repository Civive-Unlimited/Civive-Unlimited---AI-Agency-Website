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
          eyebrow="Free Fit Check"
          title="Find out whether the $99 audit is the right first move."
          copy="Send the business name, website or Google profile, service area, and the main visibility problem. Civive will check fit and point you to the right next step without giving away the paid audit."
          primaryCta={{ label: "Use the form below", href: "#contact" }}
          secondaryCta={{
            label: "See the $99 audit",
            href: "/ai-search-trust-audit",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              The free fit check is intake. It helps decide whether the business
              fits the $99 AI Search and Trust Leak Audit, a call, or no offer.
              The paid audit is where the 3 to 5 findings and first fix are
              delivered.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-3">
              <p>Business fit</p>
              <p>Public source fit</p>
              <p>Right next step</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What to send"
              title="A useful fit check gives enough context to route the buyer cleanly."
              copy="The strongest request includes the website or Google Business Profile, the service area, the services the business sells, and where the current trust or lead path feels weak."
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
