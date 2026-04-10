import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const proofItems = [
  {
    eyebrow: "Availability",
    title: "Answers when your team can’t",
    copy: "Built to respond when your business is on a job, after hours, or simply unavailable to pick up live.",
  },
  {
    eyebrow: "Capture",
    title: "Keeps leads from slipping away",
    copy: "Collects the details needed to keep the opportunity alive instead of letting the call end in silence.",
  },
  {
    eyebrow: "Follow-up",
    title: "Moves the conversation forward",
    copy: "Supports a faster next step so more inbound opportunities have a real chance to turn into booked work.",
  },
];

const supportLines = [
  "Built in GoHighLevel",
  "Shaped around real workflows",
  "Clear handoff logic",
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(123,92,255,0.10),transparent_72%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">Proof without fluff</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.03]">
                The first response decides whether the lead survives.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                Civive’s AI receptionist is built to answer, capture, and follow up
                when your team can’t. The point is not to look technical. The point is
                to keep real opportunities from disappearing.
              </p>

              <div className="mt-8 rounded-[1.9rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(15,14,26,0.84),rgba(8,10,18,0.76))] p-6 shadow-[0_24px_90px_rgba(8,8,18,0.30)] backdrop-blur-sm sm:p-7">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-white/42">
                  Core statement
                </p>

                <blockquote className="mt-4 text-xl font-medium leading-8 tracking-[-0.02em] text-white/92 sm:text-2xl sm:leading-9">
                  “Civive’s AI receptionist is built to answer, capture, and follow up when your team can’t.”
                </blockquote>

                <p className="mt-4 text-sm leading-6 text-white/56">
                  Performance metrics can be added later once there is enough live data to publish them honestly.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {supportLines.map((line) => (
                  <span
                    key={line}
                    className="rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2 text-sm text-white/72"
                  >
                    {line}
                  </span>
                ))}
              </div>

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
              className="grid gap-4"
            >
              {proofItems.map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(17,16,29,0.88),rgba(8,11,18,0.76))] p-6 shadow-[0_24px_90px_rgba(8,8,18,0.26)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(115,109,255,0.7),transparent)] opacity-70" />

                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-4 text-xl font-medium tracking-[-0.02em] text-white/92">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/62">
                    {item.copy}
                  </p>

                  <div
                    className={`mt-6 h-1 w-16 rounded-full ${
                      index === 0
                        ? "bg-[#8a63ff]"
                        : index === 1
                          ? "bg-[#49b4ff]"
                          : "bg-[#7d8cff]"
                    }`}
                  />
                </div>
              ))}

              <div className="rounded-[1.8rem] border border-[rgba(138,99,255,0.18)] bg-[linear-gradient(180deg,rgba(24,20,44,0.76),rgba(10,12,20,0.88))] p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
                  Why this section works
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
                  It shows confidence without fake screenshots, fake dashboards, or made-up percentages.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
