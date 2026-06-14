import {
  AuthoritySection,
  AuthorityShell,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { pageMeta } from "@/content/site";
import civiveLogo from "@/assets/civive-unlimited-approved-logo.webp";
import civiveMark from "@/assets/civive-unlimited-approved-mark.webp";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Globe2,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const auditCheckoutUrl = "https://buy.stripe.com/aFa9AU4Jz7ZQ1Aebgpebu0K";

const auditSignals = [
  {
    title: "Website clarity",
    copy: "Can a buyer and an AI answer engine understand who you serve, what you do, and how to contact you?",
    icon: Globe2,
  },
  {
    title: "Google and public profile signals",
    copy: "Are categories, services, location, business facts, and public descriptions pointing in the same direction?",
    icon: MapPinned,
  },
  {
    title: "Reviews and trust path",
    copy: "Do the visible reviews, proof, FAQs, and credibility cues make the next step feel safe?",
    icon: Star,
  },
  {
    title: "Booking or quote path",
    copy: "Is the call, form, booking, or quote flow obvious enough for a ready buyer to act?",
    icon: CalendarCheck,
  },
  {
    title: "AI search readability",
    copy: "Can ChatGPT, Gemini, Perplexity, and search crawlers parse the business without guessing?",
    icon: Search,
  },
];

const deliverables = [
  "3 to 5 public trust leaks, written in plain English.",
  "The first fix I would make if this were my business.",
  "A short source list showing which public pages or profiles were checked.",
  "A simple next-step path if the audit finds a larger visibility or lead leak.",
];

const fitChecks = [
  "You run a local service, appointment, quote, or trust-dependent business.",
  "You can provide a website, Google profile, public social page, or directory profile.",
  "You want a practical first fix, not a giant SEO report full of filler.",
  "You are comfortable with Civive checking only public-facing information.",
];

const processSteps = [
  {
    title: "Pay through Stripe",
    copy: "The branded page explains the offer. Stripe handles the secure checkout.",
  },
  {
    title: "Send the public footprint",
    copy: "Business name, city or service area, website or Google profile, and the main service you sell.",
  },
  {
    title: "Get the first fix order",
    copy: "Civive returns the main leaks and the first move that should clean up trust or lead flow.",
  },
];

function CheckoutButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={auditCheckoutUrl}
      target="_blank"
      rel="noreferrer"
      className={`homepage-primary-button inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto ${className}`}
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default function AISearchTrustAuditPage() {
  return (
    <>
      <Seo {...pageMeta.aiSearchTrustAudit} path="/ai-search-trust-audit" />
      <AuthorityShell>
        <section className="relative overflow-hidden border-b border-white/[0.08] py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.96fr_0.72fr] lg:items-center lg:gap-16">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-4">
                  <img
                    src={civiveLogo}
                    alt="Civive Unlimited"
                    className="h-10 w-auto sm:h-12"
                  />
                  <span className="rounded-full border border-[#19c2ff]/30 bg-[#19c2ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#bcecff]">
                    $99 public trust path review
                  </span>
                </div>

                <h1 className="hero-tech-title mt-8 max-w-[58rem] text-[1.75rem] leading-[1.16] text-white sm:text-[2.35rem] md:text-[3rem] lg:text-[3.55rem]">
                  Find the trust leaks before a local buyer calls someone else.
                </h1>
                <p className="hero-support-copy mt-7 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                  Civive checks the public path a buyer sees before they call:
                  website, profile, reviews, service area, booking or quote
                  flow, and AI-search clarity. You get 3 to 5 findings and the
                  first fix I would make.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CheckoutButton label="Start the $99 audit" />
                  <a
                    href="#what-gets-checked"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full px-2 py-4 text-center text-sm font-medium text-white/70 transition-colors hover:text-white sm:w-auto"
                  >
                    See what gets checked
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-8 grid gap-3 text-sm text-white/64 sm:grid-cols-3">
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-3">
                    <ShieldCheck
                      className="h-4 w-4 text-[#19c2ff]"
                      aria-hidden="true"
                    />
                    Public sources only
                  </div>
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-3">
                    <CheckCircle2
                      className="h-4 w-4 text-[#19c2ff]"
                      aria-hidden="true"
                    />
                    3 to 5 findings
                  </div>
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-3">
                    <CreditCard
                      className="h-4 w-4 text-[#19c2ff]"
                      aria-hidden="true"
                    />
                    Secure Stripe checkout
                  </div>
                </div>
              </div>

              <div className="homepage-panel relative overflow-hidden rounded-lg p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#19c2ff]/70 to-transparent" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="homepage-eyebrow">Civive audit checkout</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      AI Search and Trust Leak Audit
                    </h2>
                  </div>
                  <img
                    src={civiveMark}
                    alt=""
                    className="h-12 w-12 rounded-full border border-white/[0.08] object-cover"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-8 border-y border-white/[0.08] py-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/58">One-time audit</p>
                      <p className="mt-2 text-5xl font-semibold text-white">
                        $99
                      </p>
                    </div>
                    <span className="rounded-full border border-[#b86cff]/30 bg-[#b86cff]/10 px-3 py-1 text-xs font-semibold text-[#e7d0ff]">
                      Fast first fix
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-white/68">
                    Built for local businesses that need a clear, public-source
                    read on what makes buyers hesitate before they call, book,
                    or request a quote.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Website and profile clarity",
                    "Review and public trust signals",
                    "Booking, quote, or contact path",
                  ].map(item => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3 text-sm text-white/72 last:border-b-0"
                    >
                      <span>{item}</span>
                      <CheckCircle2
                        className="h-4 w-4 text-[#19c2ff]"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                <CheckoutButton
                  label="Pay securely with Stripe"
                  className="mt-7 w-full sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <AuthoritySection id="what-gets-checked">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="What gets checked"
              title="The audit follows the buyer path from search to trust to contact."
              copy="This is not a bloated report. It is a short review of the public signals that can make a serious local buyer pause, bounce, or choose a competitor."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {auditSignals.map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="homepage-panel-muted rounded-lg p-5"
                  >
                    <Icon
                      className="h-5 w-5 text-[#19c2ff]"
                      aria-hidden="true"
                    />
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
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="What you get"
              title="A clear first move, not a generic pile of AI advice."
              copy="The point is to help an owner see what is hurting trust right now and what should be fixed first."
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
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeader
              eyebrow="Good fit"
              title="Buy this when you need a practical outside read on your public trust path."
              copy="Mason can offer this when the prospect has a real public footprint and a clear business reason to inspect it."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {fitChecks.map(item => (
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
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="How it works"
              title="The branded page sells the audit. Stripe handles the payment."
              copy="That keeps the sales page sharp while still using a secure checkout link for the transaction."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="border-y border-white/[0.08] py-6"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#bcecff]">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-4 text-xl font-semibold text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {step.copy}
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
            <p className="homepage-eyebrow mt-6">Ready buyer link</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Start with the $99 audit when the first leak is unclear.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              If the business already knows it needs a full build, book a
              conversation. If the problem is unclear, the audit is the cleaner
              first step.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CheckoutButton label="Start the $99 audit" />
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Ask Civive first
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </AuthoritySection>
      </AuthorityShell>
    </>
  );
}
