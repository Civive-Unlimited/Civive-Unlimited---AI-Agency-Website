import { motion, useInView } from "framer-motion";
import { ArrowRight, CalendarCheck2, PhoneCall, Sparkles } from "lucide-react";
import { useRef } from "react";

const responseBreakdowns = [
  "Missed calls turn into lost revenue.",
  "Voicemail creates friction for ready buyers.",
  "Slow follow-up weakens trust fast.",
];

const processSteps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "A lead calls your business",
    description:
      "Someone reaches out when they need service now, often while your team is already busy, on-site, or unavailable.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "The AI receptionist responds instantly",
    description:
      "Instead of a missed call or voicemail dead end, the caller gets a fast, professional first response that keeps the opportunity alive.",
  },
  {
    number: "03",
    icon: CalendarCheck2,
    title: "The lead moves toward the next step",
    description:
      "Caller details are captured, expectations stay clear, and the conversation can move toward booking, routing, or fast follow-up.",
  },
];

const outcomes = [
  "More live opportunities protected",
  "Fewer leads slipping through the cracks",
  "Better response without more chaos",
  "A stronger first impression",
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
      <div className="absolute inset-x-0 top-10 h-px opacity-35 homepage-circuit-line" />
      <div className="absolute left-[8%] top-28 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(121,93,255,0.10),transparent_70%)] blur-3xl lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">How it works</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1.02]">
                A better first response changes the whole lead path.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                Most service businesses do not need more noise. They need a cleaner
                way to answer faster, capture more opportunities, and stop losing
                momentum at the first point of contact.
              </p>

              <div className="mt-8 space-y-3">
                {responseBreakdowns.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/[0.08] pb-3 text-sm text-white/74"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8a63ff]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(14,13,24,0.74),rgba(8,10,18,0.54))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)]">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
                  The shift
                </p>
                <p className="mt-4 text-lg leading-8 text-white/88">
                  From missed calls and scattered follow-up to a calmer, faster front
                  door that keeps more leads moving.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute left-[1.15rem] top-3 bottom-24 hidden w-px bg-[linear-gradient(180deg,rgba(138,99,255,0.34),rgba(73,180,255,0.14),transparent)] sm:block" />

              <div className="space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="relative overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(16,15,28,0.88),rgba(8,11,18,0.74))] p-6 shadow-[0_24px_90px_rgba(8,8,18,0.26)] sm:p-7"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(138,99,255,0.65),transparent)] opacity-80" />

                      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="flex items-center gap-4 sm:w-[10rem] sm:flex-col sm:items-start sm:gap-5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03] text-white/88">
                            <Icon className="h-4.5 w-4.5" />
                          </div>

                          <div>
                            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
                              Step {step.number}
                            </p>
                            <p className="mt-2 text-sm text-white/56">
                              {index === 0
                                ? "Inbound call"
                                : index === 1
                                  ? "Immediate response"
                                  : "Next-step momentum"}
                            </p>
                          </div>
                        </div>

                        <div className="max-w-xl">
                          <h3 className="text-xl font-medium tracking-[-0.02em] text-white/92">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-white/62 sm:text-[0.98rem]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white/74"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/82">
                One clear system
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
