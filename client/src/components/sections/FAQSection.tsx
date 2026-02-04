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
      question: "How quickly will I see results?",
      answer: "Most partners see their first AI-captured leads within the first week. By the end of the 30-Day Sprint, you'll have a fully operational system generating leads, booking appointments, and automating follow-ups. The ROI typically pays for itself within the first 3 captured leads.",
    },
    {
      question: "Do I need to be tech-savvy to use this?",
      answer: "Absolutely not. We build everything for you and train you on a simple dashboard. If you can use a smartphone, you can manage your AI systems. Plus, we're always a phone call away if you need help.",
    },
    {
      question: "What if I only need one or two services?",
      answer: "That's exactly what our Starter tier is for. Pick any 2 services from our menu for $147/mo. As your business grows, you can easily upgrade to access more tools.",
    },
    {
      question: "What's the difference between AIO and traditional SEO?",
      answer: "Traditional SEO focuses on ranking in Google's blue links. AIO (AI Optimization) ensures your business shows up when people ask Siri, ChatGPT, Google's AI summaries, or Gemini for recommendations. It's the next evolution of being found online.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No long-term contracts, no cancellation fees. We believe in earning your business every month. If we're not delivering results, you shouldn't be locked in.",
    },
    {
      question: "Why should I trust a new agency?",
      answer: "Fair question. Here's the honest answer: I don't have a thousand clients yet, but I have something better—the drive to make my first partners wildly successful. You get my full attention, not a junior account manager. Plus, as a Founding Partner, you lock in the lowest rates for life.",
    },
    {
      question: "What industries do you work with?",
      answer: "Any service-based business that relies on leads and appointments: HVAC, plumbing, electrical, roofing, landscaping, auto repair, law firms, dental offices, real estate, and more. If you need customers to find you and book with you, we can help.",
    },
    {
      question: "How is this different from other marketing agencies?",
      answer: "Three things: (1) I'm a tradesman who understands your world—I've been on roofs and in crawlspaces. (2) We use AI to automate what other agencies charge humans to do. (3) Transparent pricing with no BS. You know exactly what you're paying for.",
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
            Everything you need to know before we start building together.
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
