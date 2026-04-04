import { motion, useInView } from "framer-motion";
import {
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const problemPoints = [
  "Missed calls turn into lost opportunities.",
  "Slow follow-up weakens trust fast.",
  "Voicemail creates a dead end for ready buyers.",
  "Ad spend gets wasted when calls go nowhere.",
  "A weak first response costs you booked appointments.",
];

const solutionPoints = [
  "AI receptionist answers instantly.",
  "It captures lead details clearly.",
  "It keeps the business responsive.",
  "It helps move people toward booking.",
];

const steps = [
  {
    icon: PhoneCall,
    title: "A lead calls your business",
    description:
      "A real prospect reaches out when they need service now, often while your team is busy or already with a customer.",
  },
  {
    icon: Sparkles,
    title: "The AI receptionist answers instantly",
    description:
      "Instead of a missed call or voicemail dead end, the caller gets an immediate first response that feels polished and clear.",
  },
  {
    icon: CheckCircle2,
    title: "It captures the lead and responds professionally",
    description:
      "Key details are collected, expectations stay clear, and the conversation keeps moving instead of stalling out.",
  },
  {
    icon: CalendarCheck2,
    title: "It helps book the appointment or move the lead to the next step",
    description:
      "Qualified callers get pushed toward booking, routed to the right handoff, or set up for fast follow-up.",
  },
];

const outcomes = [
  "Never miss opportunities",
  "Stay responsive after hours",
  "Reduce admin load",
  "Improve customer experience",
  "Increase booked appointments",
  "Keep leads from falling through the cracks",
];

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.11),transparent_62%)]" />
      <div className="absolute inset-x-0 top-24 h-px opacity-55 homepage-circuit-line" />
      <div className="absolute left-[10%] top-10 h-36 w-36 bg-[radial-gradient(circle,oklch(0.55_0.25_300/0.08),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">How it works</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            Every call either moves forward or gets lost.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            When someone calls your business, your AI receptionist answers instantly,
            captures the lead, and helps move them toward the next step.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="homepage-panel rounded-[1.6rem] p-6 sm:p-7"
          >
            <div className="grid gap-8">
              <div>
                <p className="homepage-eyebrow">The problem</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  Missed calls quietly drain booked revenue.
                </h3>
                <div className="mt-5 space-y-3">
                  {problemPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.55_0.25_300)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[oklch(0.33_0.05_228/0.42)] pt-8">
                <p className="homepage-eyebrow">The fix</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  A calmer, faster first response.
                </h3>
                <div className="mt-5 grid gap-3">
                  {solutionPoints.map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-xl border px-4 py-3 text-sm text-foreground/84 ${
                        index === 0
                          ? "border-[oklch(0.75_0.18_220)/0.30] bg-[oklch(0.75_0.18_220)/0.08]"
                          : "border-[oklch(0.30_0.04_230/0.34)] bg-[rgba(11,14,24,0.54)]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="homepage-panel rounded-[1.6rem] p-6 sm:p-7"
          >
            <div className="flex items-end justify-between gap-4 border-b border-[oklch(0.33_0.05_228/0.42)] pb-5">
              <div>
                <p className="homepage-eyebrow">Flow</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  Responsive from the first ring.
                </h3>
              </div>
              <div className="hidden rounded-full border border-border/35 bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/72 sm:block">
                One clear system
              </div>
            </div>

            <div className="relative mt-6">
              <div className="absolute left-5 top-3 bottom-3 w-px bg-[linear-gradient(180deg,oklch(0.75_0.18_220/0.7),oklch(0.55_0.25_300/0.3),transparent)]" />
              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.48, delay: 0.18 + index * 0.06 }}
                    className="relative pl-14"
                  >
                    <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.33_0.05_228/0.42)] bg-[linear-gradient(180deg,rgba(12,15,24,0.96),rgba(8,10,17,0.98))] text-[oklch(0.75_0.18_220)] shadow-[0_0_18px_oklch(0.75_0.18_220/0.08)]">
                      <step.icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="rounded-[1.15rem] border border-[oklch(0.30_0.04_230/0.34)] bg-[linear-gradient(180deg,rgba(11,14,24,0.64),rgba(8,11,18,0.74))] px-5 py-4">
                      <h4 className="text-lg font-medium text-foreground">{step.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-8 max-w-6xl"
        >
          <div className="border-t border-[oklch(0.33_0.05_228/0.36)] pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="homepage-eyebrow">Outcomes</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  Better lead handling without adding chaos.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                The goal is simple: stay responsive, protect the demand you already
                generate, and make it easier for real prospects to take the next step.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[oklch(0.30_0.04_230/0.34)] bg-[linear-gradient(180deg,rgba(10,13,22,0.54),rgba(7,10,17,0.64))] px-4 py-4 text-sm text-foreground/84 transition-colors hover:border-[oklch(0.36_0.07_228/0.48)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
