import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const checklistItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
];

const heroSignals = [
  {
    title: "Signal",
    copy: "Calls get answered while your team is on-site, unavailable, or off the clock.",
  },
  {
    title: "Capture",
    copy: "Lead details stay intact so the next step is clear instead of getting lost in voicemail.",
  },
  {
    title: "Momentum",
    copy: "The conversation moves toward booking, routing, or fast follow-up without added chaos.",
  },
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
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,8,0.98),rgba(6,6,12,0.98)_38%,rgba(5,5,10,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(110,72,255,0.24),transparent_52%)]" />
        <div className="absolute right-[6%] top-[10%] h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(110,77,255,0.20),transparent_58%)]" />
        <div className="absolute left-[10%] top-[32%] h-52 w-52 bg-[radial-gradient(circle,rgba(74,166,255,0.08),transparent_72%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.9)_1px,transparent_1px)] [background-size:120px_120px]" />
      <div className="absolute left-[4%] right-[4%] top-[16%] hidden h-[62vh] rounded-[3.25rem] border border-white/[0.04] [mask-image:linear-gradient(180deg,transparent,black_12%,black_86%,transparent)] lg:block" />
      <div className="absolute left-[6%] top-[18%] hidden h-[58vh] w-px bg-[linear-gradient(180deg,transparent,rgba(145,96,255,0.22),transparent)] lg:block" />
      <div className="absolute right-[7%] top-[18%] hidden h-[52vh] w-px bg-[linear-gradient(180deg,transparent,rgba(76,166,255,0.14),transparent)] lg:block" />
      <div className="absolute left-[10%] right-[10%] top-28 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.14),transparent)] lg:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden text-center text-[13vw] font-semibold uppercase tracking-[-0.08em] text-white/[0.03] lg:block">
        Civive Unlimited
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-14 py-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(560px,1.12fr)] lg:gap-8">
          <div className="max-w-[34rem] lg:pr-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="homepage-eyebrow"
            >
              AI receptionist for service businesses
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-6 max-w-[8.6ch] text-4xl font-semibold leading-[0.88] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[5.65rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-8 max-w-[32rem] text-lg leading-relaxed text-white/66 sm:text-[1.08rem]"
            >
              Civive Unlimited gives service businesses an AI receptionist that
              answers calls, captures leads, follows up fast, and helps book
              appointments so opportunities do not slip through the cracks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-12 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => scrollToId("contact")}
                className="homepage-primary-button inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                <Phone className="h-4.5 w-4.5" />
                Book a demo
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <button
                onClick={() => scrollToId("how-it-works")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-7 py-4 text-base font-medium text-white/88 transition-colors hover:bg-white/[0.06] sm:w-auto"
              >
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-14 grid max-w-[32rem] gap-x-8 gap-y-4 border-t border-white/[0.08] pt-6 sm:grid-cols-2"
            >
              {checklistItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/72">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index < 2 ? "bg-[#49b4ff]" : "bg-[#9b6cff]"
                    }`}
                  />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto flex w-full max-w-[700px] items-center justify-center"
          >
            <div className="relative w-full max-w-[620px]">
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(108,80,255,0.2),transparent_48%)] blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(28,18,52,0.82),rgba(10,10,18,0.12)_58%,transparent_72%)] lg:h-[34rem] lg:w-[34rem]" />
              <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] lg:h-[25rem] lg:w-[25rem]" />
              <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(138,99,255,0.34)] lg:h-[18rem] lg:w-[18rem]" />
              <div className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(74,180,255,0.24)] bg-[radial-gradient(circle,rgba(91,189,255,0.2),rgba(90,72,255,0.18)_48%,rgba(8,10,18,0.26)_100%)] shadow-[0_0_120px_rgba(103,78,255,0.12)] lg:h-[11.5rem] lg:w-[11.5rem]" />
              <div className="absolute left-1/2 top-1/2 h-[2.75rem] w-[2.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#5ae4ff,#8a63ff)] shadow-[0_0_24px_rgba(104,123,255,0.34)]" />
              <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(138,99,255,0.24),rgba(73,180,255,0.18),transparent)]" />
              <div className="absolute left-1/2 top-[15%] h-[16%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(138,99,255,0.22),transparent)]" />
              <div className="absolute left-[10%] top-[18%] hidden h-px w-[18%] bg-[linear-gradient(90deg,transparent,rgba(138,99,255,0.18),transparent)] lg:block" />
              <div className="absolute right-[10%] top-[70%] hidden h-px w-[16%] bg-[linear-gradient(90deg,transparent,rgba(73,180,255,0.16),transparent)] lg:block" />

              <div className="relative overflow-hidden rounded-[3rem] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(14,12,24,0.44),rgba(8,9,16,0.12))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:px-8 sm:py-9">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.4),rgba(76,166,255,0.16),transparent)]" />
                <div className="relative min-h-[31rem] sm:min-h-[34rem]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/54">
                    <Sparkles className="h-3.5 w-3.5" />
                    Response System
                  </div>

                  <div className="mt-8 max-w-[14rem]">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/42">
                      Front-door offer
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      One premium intake layer built to answer, capture, and keep momentum alive.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 grid gap-5 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                    {heroSignals.map((item, index) => (
                      <div key={item.title} className="relative">
                        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/42">
                          {item.title}
                        </p>
                        <p className="mt-3 max-w-[13rem] text-sm leading-6 text-white/66">
                          {item.copy}
                        </p>
                        {index < heroSignals.length - 1 ? (
                          <div className="absolute right-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)] sm:block" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
