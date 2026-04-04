import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Cleaning",
  "Landscaping",
  "Med Spas",
  "Real Estate Teams",
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">Built for service businesses</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            If inbound calls drive revenue, this is built for you.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            From HVAC and plumbing to med spas, real estate teams, and local service
            businesses, the system works anywhere missed calls turn into missed work.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.08 + index * 0.04 }}
                className="rounded-[1.2rem] border border-border/28 bg-white/[0.02] px-5 py-5"
              >
                <p className="text-base font-medium text-foreground">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
