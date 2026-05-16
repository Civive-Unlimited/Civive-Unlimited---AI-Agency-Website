import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { auditChecks } from "@/content/site";

export default function AuditChecksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="audit-checks"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16"
          >
            <div className="max-w-xl">
              <p className="homepage-eyebrow">What the report checks</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                The public signals that decide whether you are easy to recommend.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
                The visibility report is not a vague AI report. It looks at the real places where
                buyers, Google, maps, voice assistants, and answer engines try to
                understand your business.
              </p>
              <a
                href="/ai-search-audit"
                className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                See the report page
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {auditChecks.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={false}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.08 + index * 0.03 }}
                  className="grid gap-4 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium text-white/92">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">{item.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
