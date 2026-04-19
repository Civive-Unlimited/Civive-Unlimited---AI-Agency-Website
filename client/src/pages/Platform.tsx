import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import heroLogo from "@/assets/civive-hero-logo.jpg";
import Seo from "@/components/Seo";
import { pageMeta } from "@/content/site";

const checkoutLinks = {
  launchMonthly: "https://buy.stripe.com/dRmbJ28ZP7ZQ2Eibgpebu0D",
  launchAnnual: "https://buy.stripe.com/8x25kE1xn1BsbaOfwFebu0E",
  growthMonthly: "https://buy.stripe.com/00wdRa6RH2Fw1AegAJebu0F",
  growthAnnual: "https://buy.stripe.com/bJe3cw7VLgwmgv83NXebu0G",
  operatorMonthly: "https://buy.stripe.com/7sY14oek993U92Gaclebu0H",
  operatorAnnual: "https://buy.stripe.com/aFabJ27VL3JA0wa2JTebu0I",
};

const platformSignals = [
  "White-label client login",
  "CRM, inbox, calendar, sites",
  "Stripe checkout ready",
  "AI receptionist upgrade path",
];

const coreFeatures = [
  {
    icon: MessageSquareText,
    title: "Unified customer inbox",
    text: "Texts, email, chat, social messages, missed calls, and follow-up stay in one operating surface.",
  },
  {
    icon: CalendarDays,
    title: "Booking and pipeline control",
    text: "Calendars, opportunities, reminders, estimates, and handoff steps are built around real local-service workflows.",
  },
  {
    icon: Workflow,
    title: "Automation that works after hours",
    text: "Lead capture, missed-call text back, nurture, reviews, and reactivation can keep moving when the team is busy.",
  },
  {
    icon: Bot,
    title: "AI front desk path",
    text: "Upgrade into Civive Operator when the business needs a voice receptionist and automation layer.",
  },
];

const plans = [
  {
    name: "Civive Launch",
    price: "$197",
    annual: "$1,970",
    description: "CRM, calendar, lead capture, review basics, and the essentials to stop losing inbound demand.",
    monthlyLink: checkoutLinks.launchMonthly,
    annualLink: checkoutLinks.launchAnnual,
    features: [
      "2-way text and email conversations",
      "Calendar and appointment tools",
      "CRM contacts and opportunities",
      "Web chat and forms",
      "Missed-call text back",
      "$10 complimentary usage credits",
    ],
  },
  {
    name: "Civive Growth",
    price: "$297",
    annual: "$2,970",
    description: "The better default for service businesses that want lead response plus email marketing and review momentum.",
    monthlyLink: checkoutLinks.growthMonthly,
    annualLink: checkoutLinks.growthAnnual,
    featured: true,
    features: [
      "Everything in Civive Launch",
      "Email marketing",
      "Google Business Profile messaging",
      "Reputation management",
      "Text-to-pay and invoices",
      "$25 complimentary usage credits",
    ],
  },
  {
    name: "Civive Operator",
    price: "$497",
    annual: "$4,970",
    description: "The full AI front-desk operating system with funnels, workflows, sites, memberships, and AI employee add-ons.",
    monthlyLink: checkoutLinks.operatorMonthly,
    annualLink: checkoutLinks.operatorAnnual,
    features: [
      "Everything in Civive Growth",
      "Funnels, websites, and workflows",
      "AI Employee and Voice AI path",
      "Affiliate manager and memberships",
      "Advanced reporting",
      "$100 complimentary usage credits",
    ],
  },
];

const implementationSteps = [
  "Choose the plan and complete checkout.",
  "The account is created under Civive's white-label SaaS system.",
  "We review the new account before opening client access.",
  "The business gets the branded login, CRM, inbox, calendar, and first response tools.",
];

const scrollToPlans = () => {
  document.getElementById("platform-plans")?.scrollIntoView({ behavior: "smooth" });
};

export default function Platform() {
  return (
    <>
      <Seo {...pageMeta.platform} path="/platform" />
      <main className="homepage-shell relative overflow-hidden pt-20">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,10,0.98),rgba(6,8,16,0.98)_44%,rgba(5,6,12,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(113,191,255,0.34),rgba(139,92,246,0.32),transparent)]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(118,165,255,0.72)_1px,transparent_1px),linear-gradient(90deg,rgba(118,165,255,0.72)_1px,transparent_1px)] [background-size:92px_92px]" />
        <img
          src={heroLogo}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-[50%_20%] opacity-22 mix-blend-screen saturate-125 lg:block"
        />
        <div className="absolute inset-y-0 right-0 hidden w-[62%] bg-[linear-gradient(90deg,rgba(5,6,12,1),rgba(5,6,12,0.8)_28%,rgba(5,6,12,0.28)_100%)] lg:block" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 lg:grid-cols-[0.94fr_1.06fr] lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <p className="homepage-eyebrow">Civive Growth OS</p>
              <h1 className="mt-5 max-w-[10ch] text-5xl font-semibold leading-[0.9] text-white sm:text-6xl lg:text-[6.3rem]">
                Sell the system, not the chaos.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                A white-label business operating platform for service companies that need CRM,
                calendars, follow-up, missed-call recovery, review flow, and an AI front desk path
                under one Civive-branded login.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={scrollToPlans}
                  className="homepage-primary-button inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                >
                  See plans
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
                <a
                  href="tel:+14173862441"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-7 py-4 text-base font-medium text-white/88 transition-colors hover:bg-white/[0.06] sm:w-auto"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span className="whitespace-nowrap">Call (417) 386-2441</span>
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-3 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
                {platformSignals.map((signal, index) => (
                  <div key={signal} className="flex items-center gap-3 text-sm text-white/72">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index % 2 === 0 ? "bg-[#4eb8ff]" : "bg-[#48e08f]"
                      }`}
                    />
                    {signal}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(12,15,28,0.88),rgba(7,9,17,0.94))] shadow-[0_26px_90px_rgba(0,0,0,0.34)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={heroLogo}
                      alt="Civive Unlimited"
                      className="h-9 w-9 rounded-lg border border-white/[0.1] object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">Civive Growth OS</p>
                      <p className="text-xs text-white/48">Client workspace</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-[#48e08f]/25 bg-[#48e08f]/10 px-3 py-1 text-xs text-[#a8f6ca]">
                    Ready
                  </div>
                </div>

                <div className="grid min-h-[34rem] grid-cols-[6.8rem_1fr] sm:grid-cols-[11.5rem_1fr]">
                  <div className="border-r border-white/[0.08] bg-[linear-gradient(180deg,rgba(5,7,13,0.98),rgba(10,14,28,0.98))] px-3 py-5">
                    <div className="space-y-2">
                      {["Inbox", "Contacts", "Calendar", "Pipeline", "Reviews", "Automations"].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-xs ${
                            index === 0
                              ? "bg-[linear-gradient(90deg,rgba(101,207,255,0.18),rgba(139,92,246,0.16))] text-white"
                              : "text-white/48"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        ["Response", "Instant"],
                        ["Missed calls", "Recovered"],
                        ["Pipeline", "Visible"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-4">
                          <p className="text-xs uppercase tracking-[0.16em] text-white/36">{label}</p>
                          <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-lg border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))]">
                      <div className="border-b border-white/[0.08] px-4 py-3">
                        <p className="text-sm font-medium text-white">Today&apos;s lead flow</p>
                      </div>
                      <div className="divide-y divide-white/[0.07]">
                        {[
                          ["New website lead", "Booked estimate", "2m ago"],
                          ["Missed call", "Text-back sent", "18m ago"],
                          ["Review request", "Waiting on reply", "41m ago"],
                          ["Quote follow-up", "Customer opened", "1h ago"],
                        ].map(([event, state, time]) => (
                          <div key={event} className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3">
                            <div>
                              <p className="text-sm text-white/86">{event}</p>
                              <p className="mt-1 text-xs text-white/44">{state}</p>
                            </div>
                            <p className="text-xs text-white/36">{time}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-[#65cfff]/15 bg-[#65cfff]/[0.055] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-[#a8dcff]">AI front desk</p>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                          Upgrade path for voice intake, qualification, and after-hours capture.
                        </p>
                      </div>
                      <div className="rounded-lg border border-[#48e08f]/15 bg-[#48e08f]/[0.052] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-[#a8f6ca]">Launch control</p>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                          New accounts stay paused until Civive reviews the setup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="homepage-eyebrow">What clients get</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              One operating system for the messy middle between lead and revenue.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/66">
              Civive Growth OS gives local teams the tools they actually need to answer,
              capture, follow up, book, invoice, and review without stitching five apps together.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-[linear-gradient(180deg,rgba(10,12,23,0.94),rgba(7,9,17,0.96))] p-6 sm:p-8">
                <feature.icon className="h-6 w-6 text-[oklch(0.75_0.18_220)]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="homepage-section-divider" />
      </section>

      <section id="platform-plans" className="relative scroll-mt-24 py-20 sm:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="homepage-eyebrow">Plans that can sell today</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Three SaaS packages. Direct checkout. Branded onboarding.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/66">
              These links connect to the live SaaS Configurator products already built for Civive Unlimited.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-lg border p-6 sm:p-7 ${
                  plan.featured
                    ? "border-[oklch(0.75_0.18_220)/0.48] bg-[linear-gradient(180deg,rgba(15,20,36,0.96),rgba(8,11,20,0.98))]"
                    : "border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,12,23,0.82),rgba(7,9,17,0.92))]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-[#48e08f]/20 bg-[#48e08f]/10 px-3 py-1 text-xs text-[#a8f6ca]">
                    <Star className="h-3.5 w-3.5" />
                    Best default
                  </div>
                )}
                <h3 className="pr-24 text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-white/62">{plan.description}</p>

                <div className="mt-6 border-y border-white/[0.08] py-6">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-[-0.055em] text-white">{plan.price}</span>
                    <span className="pb-1 text-sm text-white/48">/mo</span>
                  </div>
                  <p className="mt-2 text-sm text-white/48">{plan.annual} per year</p>
                </div>

                <div className="mt-6 grow space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/76">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#48e08f]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={plan.monthlyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Start monthly
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={plan.annualLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-sm font-medium text-white/78 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    Start annual
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="homepage-section-divider" />
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="homepage-eyebrow">Launch flow</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
                Checkout is live. Account creation stays controlled.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/66">
                New accounts stay paused on creation so Civive can review the setup before a client starts using it.
                That keeps sales fast without letting messy accounts go live unchecked.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+14173862441"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-6 py-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/[0.06]"
                >
                  <Phone className="h-4 w-4" />
                  <span className="whitespace-nowrap">Call before checkout</span>
                </a>
                <a
                  href="mailto:ceo@civiveunlimited.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.025] px-6 py-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/[0.06]"
                >
                  Ask a question
                </a>
              </div>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {implementationSteps.map((step, index) => (
                <div key={step} className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:items-start">
                  <div className="font-mono text-sm text-white/36">0{index + 1}</div>
                  <p className="text-lg leading-7 text-white/78">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="homepage-section-divider" />
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto h-7 w-7 text-[oklch(0.75_0.18_220)]" />
            <p className="homepage-eyebrow mt-5">Ready to sell</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Civive Growth OS is the platform offer.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/66">
              Use this page for software-first buyers. Use the homepage for AI receptionist demos.
              Both paths point to the same revenue engine: faster lead response and a cleaner operating system.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={scrollToPlans}
                className="homepage-primary-button inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Choose a plan
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
              <div className="flex items-center gap-2 text-sm text-white/52">
                <ShieldCheck className="h-4 w-4 text-[#48e08f]" />
                Branded checkout links verified in GHL SaaS Configurator
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
