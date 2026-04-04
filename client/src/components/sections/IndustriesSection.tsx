import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industryRows = [
  ["HVAC", "Plumbing"],
  ["Electrical", "Roofing"],
  ["Cleaning", "Landscaping"],
  ["Med Spas", "Real Estate Teams"],
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p className="homepage-eyebrow">Built for service businesses</p>
            <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              If inbound calls drive revenue, this is built for you.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From HVAC and plumbing to med spas, real estate teams, and local service
              businesses, the system works anywhere missed calls turn into missed work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border-y border-border/20"
          >
            {industryRows.map((row, rowIndex) => (
              <motion.div
                key={row.join("-")}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.12 + rowIndex * 0.05 }}
                className={`grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] ${
                  rowIndex < industryRows.length - 1 ? "border-b border-border/20" : ""
                }`}
              >
                <div className="py-5 sm:py-6">
                  <p className="text-lg font-medium tracking-[-0.01em] text-foreground sm:text-[1.15rem]">
                    {row[0]}
                  </p>
                </div>
                <div className="hidden bg-border/20 sm:block" />
                <div className="border-t border-border/15 py-5 sm:border-t-0 sm:py-6 sm:pl-8">
                  <p className="text-lg font-medium tracking-[-0.01em] text-foreground sm:text-[1.15rem]">
                    {row[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
