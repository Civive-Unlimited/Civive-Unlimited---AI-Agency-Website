import { motion, useInView } from "framer-motion";
import {
  ArrowRightCircle,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Phone,
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
  "AI receptionist answers instantly",
  "Captures lead details clearly",
  "Keeps the business responsive",
  "Helps move people toward booking",
];

const steps = [
  {
    icon: PhoneCall,
    title: "A lead calls your business",
    description:
      "A real prospect reaches out when they need service now, often while your team is busy, driving, or already with a customer.",
  },
  {
    icon: Sparkles,
    title: "The AI receptionist answers instantly",
    description:
      "Instead of a missed call or dead voicemail, the caller gets an immediate first response that feels polished and consistent.",
  },
  {
    icon: CheckCircle2,
    title: "It captures the lead and responds professionally",
    description:
      "Key details get collected, the conversation stays clear, and the business looks responsive instead of overloaded.",
  },
  {
    icon: CalendarCheck2,
    title: "It helps book the appointment or move the lead to the next step",
    description:
      "Qualified callers get pushed toward booking, routed to follow-up, or handed off cleanly so fewer leads slip through the cracks.",
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
    <section id="how-it-works" className="relative overflow-hidden py-24" ref={ref}>
      <div className="absolute inset-x-0 top-8 h-48 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.12),transparent_58%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/35 px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.65_0.20_180)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.20_180)]" />
            </span>
            <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
              Built to stop call-driven revenue leaks
            </span>
          </div>

          <h2 className="mt-7 font-['Syne'] text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">How it works</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-['Space_Grotesk'] text-lg leading-relaxed text-muted-foreground">
            When calls get missed, revenue slips away quietly. This system answers
            faster, captures the lead, and keeps the next step moving while your team
            stays focused on the work.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[1.8rem] border border-border/45 bg-background/30 p-6 backdrop-blur-2xl sm:p-7"
          >
            <div className="grid gap-6">
              <div className="rounded-[1.4rem] border border-border/40 bg-[linear-gradient(145deg,rgba(18,24,38,0.88),rgba(12,16,28,0.94))] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[oklch(0.55_0.25_300)/0.14]">
                    <Clock3 className="h-5 w-5 text-[oklch(0.75_0.18_220)]" />
                  </div>
                  <div>
                    <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      The problem
                    </div>
                    <h3 className="mt-1 font-['Syne'] text-2xl font-bold text-foreground">
                      Missed calls cost more than the call
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {problemPoints.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.14 + index * 0.05 }}
                      className="flex items-start gap-3 rounded-2xl border border-border/35 bg-background/20 px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[oklch(0.55_0.25_300)]" />
                      <span className="font-['Space_Grotesk'] text-sm leading-relaxed text-foreground/80">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-border/40 bg-background/25 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[oklch(0.75_0.18_220)/0.14]">
                    <Phone className="h-5 w-5 text-[oklch(0.75_0.18_220)]" />
                  </div>
                  <div>
                    <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      The fix
                    </div>
                    <h3 className="mt-1 font-['Syne'] text-2xl font-bold text-foreground">
                      A receptionist flow that stays on
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {solutionPoints.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.2 + index * 0.06 }}
                      className="rounded-2xl border border-border/35 bg-background/20 px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                        <span className="font-['Space_Grotesk'] text-sm text-foreground/82">
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative rounded-[1.9rem] border border-border/45 bg-background/28 p-6 backdrop-blur-2xl sm:p-7"
          >
            <div className="pointer-events-none absolute left-[2.35rem] top-24 bottom-28 hidden w-px bg-gradient-to-b from-[oklch(0.75_0.18_220)/0.75] via-[oklch(0.65_0.20_180)/0.35] to-transparent lg:block" />

            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Live system flow
                </div>
                <h3 className="mt-2 font-['Syne'] text-2xl font-bold text-foreground sm:text-[2rem]">
                  Responsive from the first ring
                </h3>
              </div>
              <div className="rounded-full border border-border/45 bg-background/35 px-3 py-2 font-['Space_Grotesk'] text-xs text-foreground/75 backdrop-blur-xl">
                Built for conversion
              </div>
            </div>

            <div className="relative mt-8 grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.24 + index * 0.08 }}
                  className={`relative rounded-[1.35rem] border border-border/40 p-4 backdrop-blur-xl sm:p-5 ${
                    index === 1
                      ? "bg-[linear-gradient(145deg,rgba(32,56,94,0.34),rgba(18,24,38,0.86))] shadow-[0_16px_50px_rgba(0,0,0,0.28)]"
                      : "bg-background/24"
                  } ${index % 2 === 1 ? "lg:ml-7" : ""}`}
                >
                  {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute left-7 top-full hidden h-5 w-px bg-gradient-to-b from-[oklch(0.75_0.18_220)/0.65] to-transparent lg:block" />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${
                        index === 1
                          ? "bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.3] to-[oklch(0.55_0.25_300)/0.18]"
                          : "bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.16] to-[oklch(0.55_0.25_300)/0.12]"
                      }`}
                    >
                      <step.icon className="h-5 w-5 text-[oklch(0.82_0.08_220)]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="font-['Syne'] text-xl font-bold text-foreground">
                          {step.title}
                        </h4>
                        <span className="rounded-full border border-border/40 bg-background/30 px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="mx-auto mt-8 max-w-6xl rounded-[1.8rem] border border-border/45 bg-background/24 p-6 backdrop-blur-2xl sm:p-7"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Outcomes
              </div>
              <h3 className="mt-2 font-['Syne'] text-2xl font-bold text-foreground sm:text-[2rem]">
                Better response speed, better lead handling, fewer leaks
              </h3>
            </div>
            <p className="max-w-xl font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground">
              The goal is simple: keep your business responsive, protect demand you are
              already generating, and make it easier for real prospects to take the next step.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.52 + index * 0.05 }}
                className="group rounded-2xl border border-border/40 bg-background/22 px-4 py-4 transition-colors hover:border-[oklch(0.75_0.18_220)/0.35]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.75_0.18_220)/0.12]">
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.65_0.20_180)]" />
                  </span>
                  <span className="font-['Space_Grotesk'] text-sm text-foreground/84">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
