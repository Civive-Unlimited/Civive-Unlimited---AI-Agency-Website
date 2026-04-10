import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const checklistItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
];

const capabilityItems = [
  "Answers inbound calls",
  "Captures caller details",
  "Supports after-hours response",
  "Helps move leads toward booking",
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,10,0.98),rgba(5,6,13,0.98)_34%,rgba(5,6,11,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(122,74,255,0.20),transparent_54%)]" />
        <div className="absolute right-[4%] top-[14%] h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(110,77,255,0.18),transparent_62%)]" />
        <div className="absolute left-[10%] top-[24%] h-40 w-40 bg-[radial-gradient(circle,rgba(76,166,255,0.08),transparent_72%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.01] [background-image:linear-gradient(rgba(156,114,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.9)_1px,transparent_1px)] [background-size:108px_108px]" />
      <div className="absolute left-[6%] right-[6%] top-[18%] hidden h-[56vh] rounded-[3rem] border border-white/[0.04] [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)] lg:block" />
      <div className="absolute left-[7%] top-[19%] hidden h-[54vh] w-px bg-[linear-gradient(180deg,transparent,rgba(145,96,255,0.22),transparent)] lg:block" />
      <div className="absolute right-[8%] top-[18%] hidden h-[48vh] w-px bg-[linear-gradient(180deg,transparent,rgba(76,166,255,0.14),transparent)] lg:block" />
      <div className="absolute left-[10%] right-[10%] top-28 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.16),transparent)] lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-14 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] lg:gap-12">
          <div className="max-w-[38rem] lg:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm font-medium uppercase tracking-[0.16em] text-[rgb(170,150,255)]"
            >
              AI receptionist for service businesses
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-6 max-w-[8.8ch] text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[5.15rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-8 max-w-[35rem] text-lg leading-relaxed text-white/68 sm:text-[1.12rem]"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#4aa8ff,#8a63ff)] px-7 py-4 text-base font-medium text-white shadow-[0_12px_28px_rgba(76,120,255,0.18)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                <Phone className="h-4.5 w-4.5" />
                Book a demo
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <button
                onClick={() => scrollToId("how-it-works")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.02] px-7 py-4 text-base font-medium text-white/88 transition-colors hover:bg-white/[0.04] sm:w-auto"
              >
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-14 grid max-w-[32rem] gap-x-10 gap-y-4 border-t border-white/[0.08] pt-6 sm:grid-cols-2"
            >
              {checklistItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/74"
                >
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
            className="mx-auto flex w-full max-w-[640px] items-center justify-center"
          >
            <div className="relative w-full max-w-[560px]">
              <div className="absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle_at_center,rgba(108,80,255,0.16),transparent_46%)] blur-3xl" />
              <div className="absolute -left-8 top-1/2 hidden h-px w-20 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.34),transparent)] lg:block" />
              <div className="absolute -right-8 top-1/2 hidden h-px w-20 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(76,166,255,0.22),transparent)] lg:block" />

              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(14,13,24,0.72),rgba(8,9,16,0.40))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-[6px] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.46),rgba(76,166,255,0.22),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,80,255,0.08),transparent_58%)]" />

                <div className="relative z-10">
                  <div className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-[0.7rem] uppercase tracking-[0.22em] text-white/58">
                    Civive Unlimited
                  </div>

                  <div className="mt-8">
                    <p className="text-[2.4rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[3.25rem]">
                      Never miss
                    </p>
                    <p className="mt-2 text-[2.4rem] font-semibold leading-none tracking-[-0.06em] text-transparent sm:text-[3.25rem] bg-[linear-gradient(135deg,#90c8ff_0%,#8a63ff_55%,#5ae4ff_100%)] bg-clip-text">
                      a lead again.
                    </p>
                  </div>

                  <p className="mt-6 max-w-[28rem] text-sm leading-7 text-white/64 sm:text-[0.98rem]">
                    Built to answer, capture, and follow up when your team is
                    busy, off-site, or unavailable.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {capabilityItems.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white/78"
                      >
                        <div
                          className={`mb-3 h-1 w-10 rounded-full ${
                            index % 2 === 0 ? "bg-[#8a63ff]" : "bg-[#49b4ff]"
                          }`}
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-[rgba(138,99,255,0.18)] bg-[linear-gradient(180deg,rgba(23,20,40,0.82),rgba(10,12,20,0.62))] px-5 py-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/42">
                      Front-door offer
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                      Civive starts with AI receptionist because the first
                      response is where revenue is either protected or lost.
                    </p>
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
