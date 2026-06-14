import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { fieldKitFaqs, pageMeta, site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Download,
  ExternalLink,
  FileText,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const kitModules = [
  {
    title: "Public trust path map",
    copy: "Trace the buyer path from search result to website, profile, reviews, proof, contact, booking, and follow-up so the leak is visible.",
    icon: MapPinned,
  },
  {
    title: "AI search readiness prompts",
    copy: "Use plain prompts to test whether ChatGPT, Gemini, Perplexity, Grok, and Google can understand the business without guessing.",
    icon: Search,
  },
  {
    title: "Service-page clarity worksheet",
    copy: "Turn vague service copy into buyer-language sections for fit, process, cost, proof, FAQs, and next step.",
    icon: FileText,
  },
  {
    title: "7-day fix order",
    copy: "Prioritize the first fixes by trust, lead capture, review/profile clarity, and response risk instead of random content tasks.",
    icon: ClipboardCheck,
  },
];

const outcomes = [
  {
    title: "Know what is confusing buyers",
    copy: "The kit helps an owner spot vague services, weak proof, mismatched profile facts, stale review signals, and hard-to-find contact steps.",
  },
  {
    title: "Stop buying random fixes",
    copy: "Before paying for ads, SEO, content, a new website, or automation, the owner gets a cleaner order for what should be fixed first.",
  },
  {
    title: "Make the $99 audit sharper",
    copy: "When the buyer also purchases the audit, the field kit gives them the same language Civive uses to explain the findings.",
  },
];

const deliverables = [
  "A 24-point AI search and public trust checklist.",
  "A buyer-path worksheet for website, Google profile, reviews, proof, and lead capture.",
  "A service-page template for the questions buyers and AI tools need answered.",
  "A prompt pack for checking how AI tools summarize the business.",
  "A 7-day fix order for the first cleanup pass.",
  "Plain-language examples Mason can use when explaining the leak to prospects.",
];

const fitSignals = [
  "A local service owner asks for the notes before buying the full audit.",
  "A prospect wants to understand AI search visibility but is not ready for a build.",
  "The business has a website or Google profile but the trust path looks unclear.",
  "The owner is about to spend on ads, SEO, content, or a rebuild and needs a sharper first move.",
];

function CheckoutButton({
  label,
  placement,
  className = "",
}: {
  label: string;
  placement: string;
  className?: string;
}) {
  return (
    <a
      href={site.fieldKitCheckoutUrl}
      target="_blank"
      rel="noreferrer"
      data-cta-destination={site.fieldKitCheckoutUrl}
      onClick={() =>
        trackWebsiteEvent("cta_click", {
          placement,
          label,
          destination: site.fieldKitCheckoutUrl,
        })
      }
      className={`homepage-primary-button inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto ${className}`}
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default function AISearchTrustLeakFieldKitPage() {
  return (
    <>
      <Seo {...pageMeta.fieldKit} path={site.fieldKitPageUrl} />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search and Trust Leak Field Kit"
          title="A practical kit for finding the public trust leaks before bigger fixes."
          copy="Built for local service owners who want to understand why buyers, Google, and AI tools may hesitate before calling. The live checkout bundles the field kit with the $99 public-source audit so the buyer gets the self-serve map and Civive's first-fix read."
          primaryCta={{
            label: "Get the kit with the $99 audit",
            href: site.fieldKitCheckoutUrl,
          }}
          secondaryCta={{
            label: "See what is inside",
            href: "#inside",
          }}
        >
          <div className="homepage-panel relative overflow-hidden rounded-lg p-5 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#19c2ff]/70 to-transparent" />
            <p className="homepage-eyebrow">Instant-use training asset</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Field Kit + $99 Audit
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66">
              The field kit gives the owner the checklist, worksheets, prompts,
              and fix order. The audit adds Civive's outside read on the public
              footprint.
            </p>
            <div className="mt-7 border-y border-white/[0.08] py-6">
              <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:items-end sm:text-left">
                <div>
                  <p className="text-sm text-white/58">Current live bundle</p>
                  <p className="mt-2 text-5xl font-semibold text-white">$99</p>
                </div>
                <span className="rounded-full border border-[#19c2ff]/30 bg-[#19c2ff]/10 px-3 py-1 text-xs font-semibold text-[#bcecff]">
                  Stripe checkout
                </span>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-white/66">
              {[
                "AI search and trust checklist",
                "Buyer-path worksheet",
                "Civive first-fix audit read",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-4 w-4 text-[#19c2ff]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <CheckoutButton
              label="Buy through Stripe"
              placement="field_kit_hero_card"
              className="mt-7 w-full sm:w-full"
            />
          </div>
        </PageHero>

        <AuthoritySection id="inside">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="What is inside"
              title="The kit turns vague visibility advice into an owner checklist."
              copy="It is meant to be used at the desk with the business website, Google profile, reviews, and contact path open. No fake scoring. No ranking promises. Just a clear inspection path."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {kitModules.map(module => {
                const Icon = module.icon;
                return (
                  <div
                    key={module.title}
                    className="homepage-panel-muted rounded-lg p-5"
                  >
                    <Icon
                      className="h-5 w-5 text-[#19c2ff]"
                      aria-hidden="true"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-white">
                      {module.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/64">
                      {module.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why buy it"
              title="A business owner can make a better first move after one focused pass."
              copy="The value is not more information. The value is knowing which public signal is most likely making buyers hesitate."
            />
            <EditorialList items={outcomes} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Deliverables"
              title="What the buyer gets from the field kit."
              copy="Mason can sell this as a practical, self-serve first step when someone wants useful notes before a deeper done-for-you engagement."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {deliverables.map(item => (
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

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Mason fit"
              title="Sell it when the buyer wants knowledge before implementation."
              copy="This is not a cold-blast offer. It is strongest when the prospect already showed interest in the notes, the audit, the price, or a public trust problem."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {fitSignals.map(item => (
                <div
                  key={item}
                  className="border-y border-white/[0.08] py-5 text-sm leading-6 text-white/68"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "No fake guarantees",
                copy: "The kit does not promise rankings, AI recommendations, reviews, leads, or booked jobs.",
              },
              {
                icon: Download,
                title: "Usable after purchase",
                copy: "The fulfillment page gives the buyer the printable kit and the next-step path.",
              },
              {
                icon: CreditCard,
                title: "Live Stripe checkout",
                copy: "The active checkout starts the paid audit bundle while the standalone low-ticket link waits for live Stripe setup.",
              },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-y border-white/[0.08] py-6">
                  <Icon className="h-5 w-5 text-[#19c2ff]" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Field kit FAQs"
              title="Short answers for buyers and answer engines."
              copy="The page keeps the product honest: this is a practical training asset and audit bridge, not a magic visibility promise."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {fieldKitFaqs.map(faq => (
                <div key={faq.question} className="py-7">
                  <h2 className="text-xl font-medium text-white/92">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection className="border-t border-white/[0.08]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#19c2ff]/30 bg-[#19c2ff]/10">
              <Sparkles className="h-6 w-6 text-[#bcecff]" aria-hidden="true" />
            </div>
            <p className="homepage-eyebrow mt-6">Ready buyer path</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Give the owner the map, then add the outside read.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              The field kit helps the buyer understand the leak. The $99 audit
              gives them Civive's first-fix recommendation from public sources.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CheckoutButton
                label="Get the kit with the $99 audit"
                placement="field_kit_final_cta"
              />
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
