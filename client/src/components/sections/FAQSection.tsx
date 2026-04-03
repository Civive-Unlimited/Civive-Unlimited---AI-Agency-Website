import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does the AI receptionist do?",
      answer: "It answers incoming calls, captures lead details, responds professionally, and helps move callers toward booking or the right next step.",
    },
    {
      question: "Can it answer calls after hours?",
      answer: "Yes. The AI receptionist can answer calls when you are closed, busy, or unavailable so leads do not go to voicemail and disappear.",
    },
    {
      question: "Can it capture customer information?",
      answer: "Yes. It can collect key details like name, phone number, service need, and other important information so you have what you need for follow up.",
    },
    {
      question: "Can it help book appointments?",
      answer: "Yes. Depending on the setup, it can help move callers toward booking and route them to the right next step.",
    },
    {
      question: "What kinds of businesses is this for?",
      answer: "It is a strong fit for service businesses and local appointment based businesses like HVAC, plumbing, electrical, roofing, med spas, salons, law firms, real estate, and similar businesses that rely on calls and booked appointments.",
    },
    {
      question: "How fast can this be set up?",
      answer: "Setup timing depends on the business and workflow needs, but the goal is to get you live quickly without dragging the process out.",
    },
    {
      question: "Do I need to be tech savvy to use it?",
      answer: "No. We handle the setup and keep the experience simple so you can focus on running your business.",
    },
    {
      question: "What happens if I want more automation later?",
      answer: "The website is focused on the AI receptionist offer first, but additional automation and custom setup options can be discussed later if they make sense for your business.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Questions? Answers.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Everything you need to know before booking a demo.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-['Syne'] font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[oklch(0.75_0.18_220)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 font-['Space_Grotesk'] text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
