import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { industries } from "@/content/site";

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,oklch(0.55_0.25_300/0.08),transparent_72%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-18">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="homepage-eyebrow">Built for local demand</p>
            <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              If customers ask who to call, AI search can shape your revenue.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              This matters most for service businesses where trust, location,
              reviews, and speed decide who gets contacted first.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-white/60">
              If your business depends on being found at the exact moment of
              need, your public signals need to be clean.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry, index) => (
              <motion.a
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.12 + index * 0.02 }}
                className="group border-b border-white/[0.08] pb-3 text-base font-medium text-foreground transition-colors hover:border-white/[0.22] hover:text-white sm:text-lg"
              >
                {industry.name}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="lg:col-start-2"
          >
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              View the industries hub
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
