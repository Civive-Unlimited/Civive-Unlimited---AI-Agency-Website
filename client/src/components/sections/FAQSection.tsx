import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { homepageFaqs } from "@/content/site";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-14 h-px opacity-28 homepage-circuit-line" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            The new search questions business owners need to ask.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            AI visibility is not magic. It is clarity, proof, structure, and a
            cleaner path from search intent to booked opportunity.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-[oklch(0.31_0.05_275/0.12)] border-y border-[oklch(0.31_0.05_275/0.14)]">
          {homepageFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.04 }}
                className={
                  isOpen
                    ? "bg-[linear-gradient(180deg,rgba(18,12,28,0.1),rgba(10,12,20,0.02))]"
                    : ""
                }
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-0 py-5 text-left transition-colors hover:bg-white/[0.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.58_0.16_290)/0.18] sm:px-0 sm:py-6"
                >
                  <div className="min-w-0">
                    <span className="block text-lg font-medium leading-snug text-foreground sm:text-xl">
                      {faq.question}
                    </span>
                  </div>

                  <span className="mt-1 flex flex-shrink-0 items-center justify-center text-white/48">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white/76" : ""
                      }`}
                    />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.24 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[42rem] px-0 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-0 sm:pb-6 sm:text-[0.96rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground"
        >
          Have a business-specific visibility question? Bring it to the audit.
          We will walk through what is helping you, what is hurting you, and
          what to fix first.
        </motion.p>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.32 }}
          className="mt-8 text-center"
        >
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Read the full FAQ
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
