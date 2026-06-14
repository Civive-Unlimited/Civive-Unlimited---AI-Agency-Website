import {
  AuthoritySection,
  AuthorityShell,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { pageMeta, site } from "@/content/site";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";

const nextSteps = [
  "Open the kit and run the 24-point check against the business website, Google profile, reviews, and main contact path.",
  "Mark the first three leaks that would make a buyer hesitate before calling, booking, or requesting a quote.",
  "Send Civive the business name, service area, website or Google profile, and the strongest leak you found so the paid audit can focus on the right public evidence.",
];

export default function AISearchTrustLeakFieldKitThankYouPage() {
  return (
    <>
      <Seo
        {...pageMeta.fieldKitThankYou}
        path={site.fieldKitThankYouUrl}
        robots="noindex,follow"
      />
      <AuthorityShell>
        <PageHero
          eyebrow="Field kit download"
          title="Use the kit before the first-fix audit read."
          copy="This page is for buyers and Mason handoff. Download the printable field kit, run the inspection, then send the strongest leak back to Civive so the audit starts with useful context."
          primaryCta={{
            label: "Download the field kit",
            href: site.fieldKitDownloadUrl,
          }}
          secondaryCta={{
            label: "See audit details",
            href: "/ai-search-trust-audit",
          }}
        >
          <div className="homepage-panel rounded-lg p-5 sm:p-6">
            <FileText className="h-7 w-7 text-[#19c2ff]" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold text-white">
              AI Search and Trust Leak Field Kit
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66">
              Printable HTML format. Use the browser print command to save as
              PDF if you want an offline copy.
            </p>
            <a
              href={site.fieldKitDownloadUrl}
              className="homepage-primary-button mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Download kit
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Next steps"
              title="Make the first pass before paying for bigger fixes."
              copy="The kit is most useful when the owner marks real evidence instead of guessing from memory."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {nextSteps.map(item => (
                <div key={item} className="flex gap-4 py-5">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[#19c2ff]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection className="border-t border-white/[0.08]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="homepage-eyebrow">Need the outside read?</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Send the strongest leak back to Civive.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              The audit can move faster when the owner has already marked the
              website, profile, review, service-page, or lead-path issue that
              matters most.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Send Civive the leak
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/ai-search-trust-audit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Read audit details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </AuthoritySection>
      </AuthorityShell>
    </>
  );
}

