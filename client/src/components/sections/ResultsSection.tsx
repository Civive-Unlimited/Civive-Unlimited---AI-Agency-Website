import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    eyebrow: "The question",
    title: "A buyer asks AI who to hire",
    description:
      "They may not search ten websites anymore. They ask ChatGPT, Gemini, Perplexity, or Grok for the best local option and expect a short answer.",
  },
  {
    number: "02",
    eyebrow: "The scan",
    title: "AI reads the signals you left behind",
    description:
      "Your website, service pages, Google Business Profile, reviews, FAQs, schema, and social profiles become evidence. If those signals are thin or inconsistent, trust drops fast.",
  },
  {
    number: "03",
    eyebrow: "The result",
    title: "The shortlist forms without you",
    description:
      "If AI cannot clearly understand what you do, where you serve, and why customers trust you, it may recommend a competitor before you ever know the lead existed.",
  },
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-10 h-px opacity-35 homepage-circuit-line" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-18">
            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">How AI search skips businesses</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.2rem] lg:leading-[1.02]">
                You can lose the job before the first click.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                The search journey is moving upstream. AI systems are forming
                answers before a customer visits your website, checks your
                reviews, or calls your office.
              </p>
            </motion.div>

            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="space-y-0 border-y border-white/[0.08]"
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid gap-5 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8 sm:py-8 ${
                    index < processSteps.length - 1 ? "border-b border-white/[0.08]" : ""
                  }`}
                >
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
                      {step.number}
                    </p>
                    <p className="mt-2 text-sm text-white/52">{step.eyebrow}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white/92">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[40rem] text-sm leading-6 text-white/62 sm:text-[0.98rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
            >
              Check your AI visibility
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-sm text-white/58">
              One audit. Clear fixes. No guessing.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
