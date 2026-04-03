import { motion, useInView } from "framer-motion";
import { CheckCircle2, Phone, CalendarCheck2, ArrowRightCircle } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Phone,
    title: "A lead calls your business",
    description:
      "Someone reaches out when they need help, often when your team is busy, after hours, or already on another job.",
  },
  {
    icon: CheckCircle2,
    title: "The AI receptionist answers instantly",
    description:
      "Instead of rolling to voicemail or getting missed, the call gets picked up right away with a consistent first response.",
  },
  {
    icon: ArrowRightCircle,
    title: "It captures the lead and responds professionally",
    description:
      "Key details are collected, the caller gets a clear response, and the conversation stays moving instead of stalling out.",
  },
  {
    icon: CalendarCheck2,
    title: "It helps book the appointment or move the lead to the next step",
    description:
      "Qualified callers get pushed toward booking, follow-up, or the right handoff so fewer opportunities slip away.",
  },
];

const benefits = [
  "Answers calls 24/7",
  "Captures more leads",
  "Responds faster",
  "Helps book more appointments",
  "Works after hours",
  "Reduces missed opportunities",
];

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How it works</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-3xl mx-auto">
            When someone calls your business, your AI receptionist answers instantly,
            captures the lead, and helps move them toward the next step.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.18] to-[oklch(0.55_0.25_300)/0.18] mb-5">
                <step.icon className="h-7 w-7 text-[oklch(0.75_0.18_220)]" />
              </div>
              <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Step {index + 1}
              </div>
              <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="glass-card max-w-6xl mx-auto p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/20 px-4 py-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                <span className="font-['Space_Grotesk'] text-sm text-foreground/85">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
