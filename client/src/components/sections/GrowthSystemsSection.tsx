import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const systemGroups = [
  {
    title: "Follow-up systems",
    items: [
      "Lead reactivation",
      "Speed-to-lead automations",
      "Missed-call text back flows",
    ],
  },
  {
    title: "Pipeline systems",
    items: [
      "CRM workflow cleanup",
      "Routing and handoff logic",
      "Appointment and nurture sequences",
    ],
  },
  {
    title: "Conversion systems",
    items: [
      "Website conversion improvements",
      "Local visibility support",
      "Revenue-focused customer journeys",
    ],
  },
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function GrowthSystemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="growth-systems"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-10 h-px opacity-35 homepage-circuit-line" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">Beyond the front door</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.05rem] lg:leading-[1.03]">
                Civive is bigger than one tool.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                The homepage leads with AI receptionist because missed calls and slow response are
                one of the fastest revenue leaks to fix. Once that front door is tight, Civive can
                help build the systems around it.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
                That includes follow-up automation, CRM workflow cleanup, website conversion
                improvements, and other practical growth systems that make the whole operation run
                better.
              </p>

              <button
                onClick={scrollToContact}
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                Ask about the full system
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {systemGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.6rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(15,14,26,0.82),rgba(8,11,18,0.72))] p-6 shadow-[0_24px_90px_rgba(8,8,18,0.26)]"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/42">
                    {group.title}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-white/76"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
