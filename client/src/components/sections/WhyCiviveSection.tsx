import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "We start with the question buyers are asking.",
    copy: "Who should I call? Who is trusted nearby? Who handles this exact problem? Your site has to answer those questions in language humans and AI can both understand.",
  },
  {
    number: "02",
    title: "We align every public signal.",
    copy: "Website, Google Business Profile, reviews, FAQs, service pages, schema, and social profiles need to tell the same story. Confusion kills confidence.",
  },
  {
    number: "03",
    title: "We build for proof, not hype.",
    copy: "AI search needs evidence: clear services, locations, authority, customer outcomes, and structured context. Pretty pages are not enough.",
  },
  {
    number: "04",
    title: "We connect visibility to revenue.",
    copy: "Once buyers can find and trust you, we tighten the next step: contact forms, booking flows, follow-up, and lead automation.",
  },
];

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
          <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-18">
            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="homepage-eyebrow">Why Civive Unlimited</p>

              <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.15rem] lg:leading-[1.03]">
                Make your business impossible to misunderstand.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem]">
                This is not old SEO with new buzzwords. It is the cleanup work
                local businesses need when buyers start letting AI narrow the
                options before anyone clicks.
              </p>

              <a
                href="/ai-search-audit"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                Get the readiness audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="border-y border-white/[0.08]"
            >
              {principles.map((item, index) => (
                <div
                  key={item.number}
                  className={`grid gap-4 py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7 ${
                    index < principles.length - 1
                      ? "border-b border-white/[0.08]"
                      : ""
                  }`}
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">
                    {item.number}
                  </p>

                  <div>
                    <h3 className="text-xl font-medium text-white/92">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/62">
                      {item.copy}
                    </p>
                  </div>
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
