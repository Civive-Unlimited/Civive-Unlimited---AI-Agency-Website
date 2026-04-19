import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import civiveHeroLogo from "@/assets/civive-hero-logo.jpg";

const trustItems = [
  "ChatGPT clarity",
  "Gemini-ready signals",
  "Perplexity source footprint",
  "Google profile alignment",
];

const featureStripItems = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Google AI",
  "Website Messaging",
  "FAQ Schema",
  "LocalBusiness Schema",
  "Reviews",
  "Google Business Profile",
  "Social Consistency",
];

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <div className="absolute inset-0">
        <img
          src={civiveHeroLogo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.16] mix-blend-screen [mask-image:linear-gradient(90deg,transparent,black_28%,black_82%,transparent)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,9,0.99),rgba(7,7,13,0.98)_38%,rgba(6,6,11,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,9,0.96),rgba(4,4,9,0.82)_42%,rgba(4,4,9,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(118,79,255,0.16),transparent_52%)]" />
        <div className="absolute right-[4%] top-[46%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(76,166,255,0.12),transparent_62%)] blur-3xl" />
        <div className="absolute left-[6%] top-[58%] h-40 w-40 bg-[radial-gradient(circle,rgba(76,166,255,0.06),transparent_70%)] blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.8)_1px,transparent_1px)] [background-size:132px_132px]" />
      <div className="absolute left-[5%] right-[5%] top-[14%] hidden h-[72vh] rounded-[3.5rem] border border-white/[0.04] [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)] lg:block" />
      <div className="absolute left-[8%] right-[8%] top-28 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.16),transparent)] lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="py-8 sm:py-14 lg:flex lg:min-h-[calc(100svh-180px)] lg:items-center lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-[78rem]"
          >
            <p className="homepage-eyebrow">
              AI Search Visibility - ChatGPT - Gemini - Perplexity
            </p>

            <div className="mt-6 max-w-[72rem] sm:mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-[2.95rem] leading-[0.96] text-white sm:text-[4.8rem] md:text-[5.65rem] lg:text-[6.55rem]"
              >
                <span className="block">Your next customer</span>
                <span className="block italic text-[#19c2ff]">asked ChatGPT</span>
                <span className="block">who to call.</span>
                <span className="block italic text-white/36">Did it name you?</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="mt-8 max-w-[38rem] text-base leading-8 text-white/68 sm:mt-10 sm:text-[1.08rem]"
            >
              Customers are asking ChatGPT, Gemini, Perplexity, and Google who
              they should trust. If your website, Google Business Profile,
              reviews, FAQs, schema, and socials send weak signals, AI search
              can skip you before the buyer ever sees your name.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => scrollToId("contact")}
                className="homepage-primary-button inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                <Search className="h-4.5 w-4.5" />
                Get AI Search Audit
              </button>

              <button
                onClick={() => scrollToId("audit-checks")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-2 py-4 text-base font-medium text-white/72 transition-colors hover:text-white sm:w-auto"
              >
                See what AI checks
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-12 hidden max-w-[34rem] gap-x-8 gap-y-4 2xl:grid 2xl:grid-cols-2"
            >
              {trustItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/68">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0 ? "bg-[#49b4ff]" : "bg-[#9b6cff]"
                    }`}
                  />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-white/[0.08] bg-[rgba(9,9,15,0.48)] py-4">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex min-w-max items-center gap-10 pr-10 [animation:hero-marquee_44s_linear_infinite]">
            {[...featureStripItems, ...featureStripItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`text-sm font-medium ${
                  index % 3 === 1 ? "text-[#19c2ff]/90" : "text-white/62"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
