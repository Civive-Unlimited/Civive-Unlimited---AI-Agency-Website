import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const systemGroups = [
  {
    title: "Signal cleanup",
    items: [
      "Website message alignment",
      "Google Business Profile clarity",
      "Service and location consistency",
    ],
  },
  {
    title: "AI-ready proof",
    items: [
      "FAQ and service page structure",
      "LocalBusiness and service schema",
      "Review and trust signal mapping",
    ],
  },
  {
    title: "Lead capture",
    items: [
      "Audit-focused contact flow",
      "Booking and follow-up paths",
      "CRM and automation handoff",
    ],
  },
];

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
          <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-18">
            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">AI Visibility Growth System</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.15rem] lg:leading-[1.03]">
                Fix the signals that decide who gets recommended.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                Civive turns scattered online presence into a clear, connected
                proof system that AI search, Google, and real buyers can
                understand fast.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/visibility-system"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
                >
                  Build the visibility system
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/civive-os"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/58 transition-colors hover:text-white"
                >
                  Connect lead response
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="border-y border-white/[0.08] sm:grid sm:grid-cols-3 sm:gap-0"
            >
              {systemGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="py-6 sm:border-r sm:border-white/[0.08] sm:px-6 sm:py-8 last:border-r-0"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
                    0{index + 1}
                  </p>

                  <p className="mt-4 text-xl font-medium text-white/92">
                    {group.title}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {group.items.map(item => (
                      <li
                        key={item}
                        className="border-b border-white/[0.08] pb-3 text-sm leading-6 text-white/74 last:border-b-0 last:pb-0"
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
