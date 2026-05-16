import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { buildLog } from "@/content/site";

export default function BuildInPublicPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-10 h-px opacity-35 homepage-circuit-line" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-18"
          >
            <div className="max-w-xl">
              <p className="homepage-eyebrow">Built on Civive first</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                The company is the first proof-of-work case study.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
                Civive is early by design, so the trust layer is not fake client
                logos. It is the public process: this site, the report structure,
                the content engine, the schema plan, the assistant, and the lead
                path being built in the open.
              </p>
              <a
                href="/build-in-public"
                className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                Read the build in public page
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {buildLog.map((item, index) => (
                <motion.div
                  key={`${item.date}-${item.title}`}
                  initial={false}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.08 + index * 0.04 }}
                  className="grid gap-4 py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                    {item.date}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium text-white/92">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">{item.copy}</p>
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
