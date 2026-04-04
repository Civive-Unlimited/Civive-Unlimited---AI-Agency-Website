import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What does the AI receptionist do?",
    answer:
      "It answers incoming calls, captures lead details, responds professionally, and helps move callers toward booking or the right next step.",
  },
  {
    question: "Can it answer calls after hours?",
    answer:
      "Yes. It can answer when you are closed, busy, or unavailable so leads do not hit voicemail and disappear.",
  },
  {
    question: "Can it capture customer information?",
    answer:
      "Yes. It can collect key details like name, phone number, service need, and other information needed for follow up.",
  },
  {
    question: "Can it help book appointments?",
    answer:
      "Yes. Depending on the setup, it can help move callers toward booking and route them to the right next step.",
  },
  {
    question: "What kinds of businesses is this for?",
    answer:
      "It fits service businesses and local appointment-based businesses like HVAC, plumbing, electrical, roofing, med spas, salons, law firms, real estate, and similar businesses that rely on calls and booked appointments.",
  },
  {
    question: "How fast can this be set up?",
    answer:
      "Setup timing depends on the business and workflow needs, but the goal is to get you live quickly without dragging the process out.",
  },
  {
    question: "How does it work with our current workflow?",
    answer:
      "The setup is shaped around how your business handles calls now, so the receptionist supports the workflow instead of forcing a messy process change.",
  },
  {
    question: "What happens if I want more automation later?",
    answer:
      "The website is focused on the AI receptionist offer first, but more automation and custom setup can be added later if it makes sense for your business.",
  },
];

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
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            Questions? Answers.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before booking a demo.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-border/25 rounded-[1.6rem] border border-border/30 bg-[rgba(11,14,22,0.78)] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 + index * 0.04 }}
                className={isOpen ? "bg-white/[0.02]" : ""}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.75_0.18_220)/0.28] sm:px-7 sm:py-6"
                >
                  <div className="min-w-0">
                    <span className="block text-lg font-medium leading-snug text-foreground sm:text-xl">
                      {faq.question}
                    </span>
                  </div>

                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/30 bg-background/70 text-[oklch(0.75_0.18_220)]">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
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
                  <p className="max-w-[42rem] px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-7 sm:pb-6 sm:text-[0.96rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground"
        >
          If you have a workflow question that is specific to your business, bring it to
          the demo and we&apos;ll walk through it directly.
        </motion.p>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
