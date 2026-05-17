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
          eyebrow="Free Visibility Report"
          title="See what is helping or hurting your local visibility."
          copy="Send your business, website or Google profile, service area, and the main visibility problem. Civive will use the public evidence to find the first practical fix order."
          primaryCta={{ label: "Use the form below", href: "#contact" }}
          secondaryCta={{
            label: "See what the report checks",
            href: "/ai-search-report",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              The free report request is now handled through Civive's
              first-party form so the copy, consent language, tracking, and lead
              routing stay consistent with the Visibility Report brand.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-3">
              <p>Google and Maps</p>
              <p>AI answer engines</p>
              <p>Lead capture</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What to send"
              title="A useful request gives enough context to inspect the real public footprint."
              copy="The strongest request includes the website or Google Business Profile, the service area, the services you want to be understood for, and where the current lead path feels weak."
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
