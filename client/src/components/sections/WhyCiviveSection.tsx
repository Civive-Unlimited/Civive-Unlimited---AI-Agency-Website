import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "Operator-first rollout",
    copy: "The setup should fit how the business actually handles calls, handoffs, and booking pressure.",
  },
  {
    number: "02",
    title: "Revenue before complexity",
    copy: "The first goal is to protect inbound demand and stop preventable lead loss before adding more layers.",
  },
  {
    number: "03",
    title: "Custom where it matters",
    copy: "The system should feel tailored to the business, not like a recycled AI template dressed up as strategy.",
  },
  {
    number: "04",
    title: "Built to expand later",
    copy: "Once call handling is solid, more follow-up, CRM, and conversion systems can be layered in cleanly.",
  },
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function WhyCiviveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-civive"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-16 h-px opacity-35 homepage-circuit-line" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">Why Civive Unlimited</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.03]">
                Serious systems for businesses that cannot afford weak response.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                Civive is not built around fluff, fake dashboards, or generic automation talk.
                The work starts with a practical question: where is revenue leaking out of the
                first response, and what is the cleanest way to fix it?
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
                That is why the offer leads with AI receptionist first. It is one of the fastest,
                clearest ways to make the business more responsive without adding more chaos.
              </p>

              <button
                onClick={scrollToContact}
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[1.6rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(15,14,26,0.84),rgba(8,11,18,0.72))] p-6 shadow-[0_24px_90px_rgba(8,8,18,0.24)]"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] text-white/92">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/62">
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
