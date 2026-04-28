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
import { civiveOsIncludedFeatures, civiveOsPlans } from "@/content/site";

const iconMap = {
  calendar: CalendarCheck,
  message: MessageSquareText,
  bot: Bot,
};

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="offer"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:scroll-mt-28 sm:py-20"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(25,194,255,0.28),transparent)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.52fr_1.48fr] lg:gap-16">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="homepage-eyebrow digital-accent">Civive OS Offer</p>
            <h2 className="hero-tech-title mt-5 max-w-xl text-[1.45rem] leading-[1.24] text-foreground sm:text-[1.9rem] md:text-[2.25rem]">
              Civive OS plans.
            </h2>
            <p className="hero-support-copy mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              Civive OS is sold as its own lead-response system. Choose the
              level of capture, follow-up, reputation, and AI front desk support
              your business needs right now.
            </p>

            <div className="mt-10 border-y border-white/[0.08] py-6">
              <p className="homepage-eyebrow">Every plan starts with</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {civiveOsIncludedFeatures.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={false}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.04 }}
                    className="flex items-start gap-3 text-sm leading-6 text-white/72"
                  >
                    <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#19c2ff]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <a
              href="/civive-os"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/72 transition-colors hover:text-white"
            >
              Review the system first
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="border-y border-white/[0.08]">
            {civiveOsPlans.map((plan, index) => {
              const PlanIcon =
                iconMap[plan.iconKey as keyof typeof iconMap] ?? CalendarCheck;

              return (
                <motion.article
                  key={plan.name}
                  initial={false}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.48, delay: 0.08 + index * 0.08 }}
                  className={`relative grid gap-7 border-b border-white/[0.08] py-8 last:border-b-0 lg:grid-cols-[0.8fr_1.05fr_0.45fr] lg:items-start lg:gap-8 ${
                    plan.featured ? "bg-white/[0.025]" : ""
                  }`}
                >
                  <div className="flex gap-4 px-0 lg:pl-7">
                    <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center border border-white/[0.1] bg-white/[0.035] text-[#19c2ff]">
                      <PlanIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-white">
                          Civive OS {plan.name}
                        </h3>
                        {plan.featured && (
                          <span className="border border-[#19c2ff]/30 bg-[#19c2ff]/10 px-3 py-1 text-xs font-medium text-[#b9edff]">
                            Strongest starting point
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/62">
                        {plan.description}
                      </p>
                      <p className="mt-4 text-xs leading-6 text-white/44">
                        {plan.bestFor}
                      </p>
                      {plan.note && (
                        <p className="mt-4 border-l border-[#19c2ff]/40 pl-4 text-xs leading-6 text-[#b9edff]/78">
                          {plan.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-2 lg:border-l lg:border-white/[0.08] lg:pl-7">
                    {plan.includes.map(feature => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-white/76"
                      >
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="lg:pr-7">
                    <div className="flex flex-wrap items-end gap-x-3 gap-y-1 lg:block">
                      <span className="text-4xl font-semibold tracking-normal text-white">
                        {plan.price}
                      </span>
                      <span className="pb-1 text-sm text-muted-foreground lg:mt-1 lg:block">
                        per month
                      </span>
                      <span className="pb-1 text-sm text-white/44 lg:mt-3 lg:block">
                        {plan.annual}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3">
                      <a
                        href={plan.monthlyHref}
                        className="homepage-primary-button inline-flex min-h-12 min-w-[9.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Start monthly
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href={plan.annualHref}
                        className="inline-flex min-h-12 min-w-[9.5rem] items-center justify-center whitespace-nowrap rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-white/72 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        Start annual
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="homepage-section-divider mt-20" />
    </section>
  );
}
