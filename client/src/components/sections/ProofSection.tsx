import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const proofItems = [
  {
    title: "The buyer never sees you.",
    copy: "AI search can answer the question before the customer opens a map result. If you are not in that answer, the lead is gone quietly.",
  },
  {
    title: "Unclear signals look risky.",
    copy: "A thin website, mismatched services, weak FAQs, missing schema, and stale profiles make a real business look harder to trust.",
  },
  {
    title: "Competitors become the default.",
    copy: "The business with cleaner proof, stronger local signals, and consistent language becomes easier for AI to explain and recommend.",
  },
];

export default function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(123,92,255,0.08),transparent_72%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-18">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">The painful part</p>

              <blockquote className="mt-4 max-w-[29rem] text-3xl font-medium leading-[1.08] text-white sm:text-4xl lg:text-[3.25rem]">
                AI search does not recommend businesses it cannot{" "}
                <span className="text-white/72">understand.</span>
              </blockquote>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/62">
                It does not call you to clarify. It does not wait for your team
                to fix the website later. It gives the buyer another name.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="border-y border-white/[0.08] lg:grid lg:grid-cols-3"
            >
              {proofItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`py-7 sm:py-8 lg:px-8 ${
                    index < proofItems.length - 1
                      ? "border-b border-white/[0.08] lg:border-b-0 lg:border-r"
                      : ""
                  } lg:border-white/[0.08]`}
                >
                  <h3 className="text-xl font-medium text-white/92">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/62">
                    {item.copy}
                  </p>
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
