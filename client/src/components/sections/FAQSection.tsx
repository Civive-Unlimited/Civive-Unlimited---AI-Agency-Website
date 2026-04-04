import { motion, useInView } from "framer-motion";
import { ChevronDown, MessageSquareText, ShieldCheck } from "lucide-react";
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
    <section id="faq" className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.10),transparent_62%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/45 bg-background/30 px-4 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
            <MessageSquareText className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
            <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
              Practical questions, clear answers
            </span>
          </div>

          <h2 className="mt-6 font-['Syne'] text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Questions? Answers.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-['Space_Grotesk'] text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before booking a demo.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`relative overflow-hidden rounded-[1.5rem] border backdrop-blur-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-[oklch(0.75_0.18_220)/0.32] bg-[linear-gradient(145deg,rgba(25,39,68,0.22),rgba(14,18,30,0.88))] shadow-[0_16px_42px_rgba(0,0,0,0.18)]"
                    : "border-border/40 bg-background/24 hover:border-[oklch(0.75_0.18_220)/0.25]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                >
                  <div className="min-w-0">
                    <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Question {index + 1}
                    </div>
                    <span className="mt-2 block font-['Syne'] text-xl font-semibold text-foreground sm:text-[1.35rem]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[1rem] border transition-all duration-300 ${
                      isOpen
                        ? "border-[oklch(0.75_0.18_220)/0.32] bg-[oklch(0.75_0.18_220)/0.10]"
                        : "border-border/35 bg-background/24"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 text-[oklch(0.75_0.18_220)] transition-transform duration-300 ${
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
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                    <div className="h-px w-full bg-gradient-to-r from-[oklch(0.75_0.18_220)/0.28] via-border/30 to-transparent" />
                    <p className="mt-5 max-w-[42rem] font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-3 rounded-full border border-border/40 bg-background/22 px-5 py-3 text-center shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
        >
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
          <span className="font-['Space_Grotesk'] text-sm text-foreground/78">
            If you have a workflow question that is specific to your business, bring it to the demo and we&apos;ll walk through it directly.
          </span>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
