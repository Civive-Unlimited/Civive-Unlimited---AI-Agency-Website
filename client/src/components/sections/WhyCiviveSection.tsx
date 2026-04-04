import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const supportPoints = [
  "Built around your workflow",
  "Fast setup, practical rollout",
  "Clear next steps for every caller",
  "Expandable when your systems grow",
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
    <section className="relative overflow-hidden py-20 sm:py-24" ref={ref}>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">Why Civive Unlimited</p>
              <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                Focused on response, not fluff.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We build practical systems that help businesses answer faster, capture
                more leads, and keep more appointments moving. The goal is not to sound
                impressive. The goal is to stop lead loss and make the business more responsive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="homepage-panel rounded-[1.6rem] p-6 sm:p-7"
            >
              <div className="grid gap-5">
                {supportPoints.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.42, delay: 0.12 + index * 0.05 }}
                    className={`flex items-center gap-4 pb-5 ${
                      index < supportPoints.length - 1 ? "border-b border-border/25" : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/30 bg-white/[0.03] text-[oklch(0.65_0.20_180)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-base text-foreground/84">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.48, delay: 0.18 }}
            className="homepage-panel mt-8 rounded-[1.5rem] px-6 py-6 sm:px-7"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-foreground">
                  Need more than call handling?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Civive Unlimited also builds the systems around it — websites,
                  follow-up automation, CRM workflows, email campaigns, and custom setups.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="homepage-outline-button magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.04]"
              >
                Ask about additional systems
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
