import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroLogo from "@/assets/civive-hero-logo.jpg";

const checklistItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,8,0.98),rgba(6,6,11,0.98)_38%,rgba(5,5,10,1)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(112,74,255,0.26),transparent_52%)]" />
        <div className="absolute right-[6%] top-[10%] h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(118,79,255,0.18),transparent_60%)]" />
        <div className="absolute left-[9%] top-[34%] h-52 w-52 bg-[radial-gradient(circle,rgba(76,166,255,0.08),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.9)_1px,transparent_1px)] [background-size:124px_124px]" />
      <div className="absolute left-[5%] right-[5%] top-[15%] hidden h-[66vh] rounded-[3.5rem] border border-white/[0.04] [mask-image:linear-gradient(180deg,transparent,black_12%,black_86%,transparent)] lg:block" />
      <div className="absolute left-[6%] top-[18%] hidden h-[58vh] w-px bg-[linear-gradient(180deg,transparent,rgba(145,96,255,0.22),transparent)] lg:block" />
      <div className="absolute right-[7%] top-[18%] hidden h-[54vh] w-px bg-[linear-gradient(180deg,transparent,rgba(76,166,255,0.14),transparent)] lg:block" />
      <div className="absolute left-[10%] right-[10%] top-28 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.14),transparent)] lg:block" />
      <div className="pointer-events-none absolute bottom-12 right-[8%] hidden text-[10vw] font-semibold uppercase tracking-[-0.08em] text-white/[0.03] xl:block">
        CIVIVE
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(620px,1.18fr)] lg:gap-10">
          <div className="max-w-[34rem] lg:pr-8">
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
              className="mt-6 max-w-[8.2ch] text-4xl font-semibold leading-[0.86] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[5.9rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-8 max-w-[31rem] text-lg leading-relaxed text-white/66 sm:text-[1.08rem]"
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
            className="mx-auto flex w-full max-w-[760px] items-center justify-center"
          >
            <div className="relative w-full max-w-[700px]">
              <div className="absolute inset-0 rounded-[3.5rem] bg-[radial-gradient(circle_at_center,rgba(108,80,255,0.18),transparent_50%)] blur-3xl" />
              <div className="absolute -left-10 top-1/2 hidden h-px w-28 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.28),transparent)] lg:block" />
              <div className="absolute -right-10 top-1/2 hidden h-px w-28 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(76,166,255,0.18),transparent)] lg:block" />

              <div className="relative overflow-hidden rounded-[3.5rem] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(13,12,23,0.44),rgba(7,8,14,0.16))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:p-5">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.38),rgba(76,166,255,0.18),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(105,78,255,0.08),transparent_56%)]" />

                <div className="relative overflow-hidden rounded-[2.8rem] border border-white/[0.06]">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,7,12,0.08),rgba(6,6,10,0.52))]" />
                  <div className="absolute inset-x-0 top-[14%] z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.18),transparent)]" />
                  <div className="absolute bottom-[16%] left-[10%] right-[10%] z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(76,166,255,0.16),transparent)]" />
                  <img
                    src={heroLogo}
                    alt="Civive Unlimited brand mark"
                    className="h-[34rem] w-full object-cover object-[50%_18%] opacity-72 contrast-125 saturate-110 sm:h-[40rem] lg:h-[44rem]"
                  />
                  <div className="absolute inset-y-0 left-[14%] z-20 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)] sm:block" />
                  <div className="absolute inset-y-0 right-[14%] z-20 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.06),transparent)] sm:block" />

                  <div className="absolute bottom-0 left-0 right-0 z-30 grid gap-4 border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,8,13,0.14),rgba(7,7,12,0.54))] px-6 py-5 backdrop-blur-sm sm:grid-cols-[1.2fr_0.8fr] sm:px-8 sm:py-6">
                    <div>
                      <p className="homepage-eyebrow text-white/46">Never miss a lead again</p>
                      <p className="mt-3 max-w-[26rem] text-sm leading-6 text-white/72 sm:text-[0.98rem]">
                        A premium first-response system for businesses that cannot
                        afford to let ready buyers disappear into voicemail.
                      </p>
                    </div>
                    <div className="border-t border-white/[0.08] pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/40">
                        Civive Unlimited
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/64">
                        Calm intake. Clear capture. Better next-step momentum.
                      </p>
                    </div>
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
