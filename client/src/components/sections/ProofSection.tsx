import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const implementationLines = [
  "Practical rollout",
  "Clear handoff logic",
  "Built around how your team works",
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,oklch(0.55_0.25_300/0.06),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">Built for real business pressure</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            The point is simple: fewer missed opportunities.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            When calls are handled quickly and consistently, the business looks more
            responsive, ad spend works harder, and more appointments keep moving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-14 max-w-6xl overflow-hidden border-y border-[oklch(0.31_0.05_275/0.14)]"
        >
          <div className="grid lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: 0.12 }}
              className="px-0 py-7 sm:py-9 lg:border-r lg:border-[oklch(0.31_0.05_275/0.14)] lg:px-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Testimonial space
              </p>
              <p className="mt-5 text-2xl font-medium leading-tight tracking-[-0.02em] text-foreground">
                &ldquo;Most businesses do not have a lead problem. They have a response
                problem.&rdquo;
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Client proof and case studies can live here as they are added.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: 0.17 }}
              className="border-t border-[oklch(0.31_0.05_275/0.14)] px-0 py-7 sm:py-9 lg:border-r lg:border-t-0 lg:border-[oklch(0.31_0.05_275/0.14)] lg:px-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Results space
              </p>
              <p className="mt-5 max-w-sm text-xl font-medium leading-relaxed tracking-[-0.02em] text-foreground sm:text-2xl">
                Results snapshots, before-and-after improvements, and booked-appointment wins can live here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, delay: 0.22 }}
              className="border-t border-[oklch(0.31_0.05_275/0.14)] px-0 py-7 sm:py-9 lg:border-t-0 lg:px-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Implementation confidence
              </p>
              <p className="mt-5 max-w-sm text-xl font-medium leading-relaxed tracking-[-0.02em] text-foreground sm:text-2xl">
                Built to fit real workflows, not force a generic setup.
              </p>

              <div className="mt-6 space-y-3">
                {implementationLines.map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.58_0.16_290)]" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.26 }}
          className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-[oklch(0.31_0.05_275/0.14)] pt-6 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Want to see what this could look like for your business?
          </p>

          <button
            onClick={scrollToContact}
            className="homepage-outline-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[oklch(0.75_0.18_220)/0.45] hover:text-[oklch(0.75_0.18_220)]"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
