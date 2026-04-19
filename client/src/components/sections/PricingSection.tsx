import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const checkoutLinks = {
  launchMonthly: "https://buy.stripe.com/3cI00k5NDa7YdiWcktebu0p",
  launchAnnual: "https://buy.stripe.com/4gMaEY5ND3JA0waesBebu0q",
  growthMonthly: "https://buy.stripe.com/00w3cw8ZP3JAdiW709ebu0r",
  growthAnnual: "https://buy.stripe.com/7sY4gA8ZP7ZQ0wa709ebu0s",
  operatorMonthly: "https://buy.stripe.com/6oU14o5NDgwm6Uy709ebu0t",
  operatorAnnual: "https://buy.stripe.com/cNi3cw7VL4NEceS1FPebu0u",
};

const plans = [
  {
    name: "Civive Launch",
    icon: CalendarCheck,
    price: "$197",
    annual: "$1,970/year",
    monthlyHref: checkoutLinks.launchMonthly,
    annualHref: checkoutLinks.launchAnnual,
    description:
      "Starter CRM, calendar, lead capture, and missed-call recovery for a service business that needs the basics live now.",
    snapshot: "Lead Response snapshot",
    bestFor: "Solo operators and small local teams starting from scattered follow-up.",
    features: [
      "CRM, opportunities, calendar, and forms",
      "Missed-call text back",
      "Web chat and reputation tools",
      "2-way SMS and email conversations",
      "Lead Response onboarding snapshot",
    ],
  },
  {
    name: "Civive Growth",
    icon: MessageSquareText,
    price: "$297",
    annual: "$2,970/year",
    monthlyHref: checkoutLinks.growthMonthly,
    annualHref: checkoutLinks.growthAnnual,
    description:
      "The lead-response layer for teams that want every inquiry captured, organized, followed up, and moved toward a booked job.",
    snapshot: "Lead Response snapshot",
    bestFor: "Service businesses with active inbound leads and review/reputation needs.",
    featured: true,
    features: [
      "Everything in Launch",
      "Email marketing tools",
      "Lead response and review workflows",
      "Unified inbox for faster handoff",
      "Cleaner Growth OS operating base",
    ],
  },
  {
    name: "Civive Operator",
    icon: Bot,
    price: "$497",
    annual: "$4,970/year",
    monthlyHref: checkoutLinks.operatorMonthly,
    annualHref: checkoutLinks.operatorAnnual,
    description:
      "The AI front desk tier: reception, routing, pipeline context, and a stronger automation base built to feel like an operator.",
    snapshot: "Universal Receptionist snapshot",
    bestFor: "Teams ready to add an AI employee to answer, qualify, and recover leads.",
    features: [
      "Everything in Growth",
      "AI Employee add-on enabled",
      "Civive AI Receptionist foundation",
      "Universal Receptionist pipeline",
      "Workflow, funnels, sites, reporting, and campaigns",
    ],
  },
];

const platformSignals = [
  "Stripe checkout live",
  "Civive-owned snapshots attached",
  "No setup fee for launch",
  "Monthly links ready to sell",
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(25,194,255,0.28),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0),rgba(8,13,22,0.74)_42%,rgba(5,6,11,0)_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="homepage-eyebrow">Civive Growth OS</p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Start selling the system, not another software login.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              These are the live white-label SaaS plans connected to the GoHighLevel backend, Civive snapshots, and Stripe Checkout.
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {platformSignals.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-3 border-t border-white/[0.08] pt-3 text-sm text-white/74"
                >
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-[#19c2ff]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white/72 transition-colors hover:text-white"
            >
              Want the audit first?
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="space-y-4">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, delay: 0.08 + index * 0.08 }}
                className={`relative overflow-hidden rounded-[1.6rem] border p-5 transition-colors sm:p-6 ${
                  plan.featured
                    ? "border-[#19c2ff]/45 bg-[linear-gradient(135deg,rgba(25,194,255,0.14),rgba(13,16,28,0.82)_38%,rgba(80,95,255,0.12))]"
                    : "border-white/[0.08] bg-[linear-gradient(180deg,rgba(13,16,26,0.62),rgba(7,10,18,0.72))]"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.04] text-[#19c2ff]">
                            <plan.icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-2xl font-semibold text-foreground">
                            {plan.name}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                      {plan.featured && (
                        <span className="hidden rounded-full border border-[#19c2ff]/30 bg-[#19c2ff]/10 px-3 py-1 text-xs font-medium text-[#b9edff] sm:inline-flex">
                          Best first push
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
                      <span className="text-4xl font-semibold tracking-normal text-white">
                        {plan.price}
                      </span>
                      <span className="pb-1 text-sm text-muted-foreground">per month</span>
                      <span className="pb-1 text-sm text-white/44">or {plan.annual}</span>
                    </div>

                    <p className="mt-4 border-t border-white/[0.08] pt-4 text-xs leading-6 text-white/54">
                      {plan.snapshot}. {plan.bestFor}
                    </p>
                  </div>

                  <div>
                    <div className="grid gap-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                      <a
                        href={plan.monthlyHref}
                        className="homepage-primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Start monthly
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href={plan.annualHref}
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-white/72 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        Annual
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="homepage-section-divider mt-20" />
    </section>
  );
}
