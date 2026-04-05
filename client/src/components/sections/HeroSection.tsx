import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, Phone, RadioTower } from "lucide-react";

const checklistItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
];

const orbitLabels = [
  {
    title: "Signal received",
    body: "Incoming call recognized immediately.",
    className: "left-0 top-10 sm:left-2",
  },
  {
    title: "Lead captured",
    body: "Need and urgency logged cleanly.",
    className: "right-0 top-22 text-right sm:right-2",
  },
  {
    title: "Booking path",
    body: "Next step routed without delay.",
    className: "left-4 bottom-18 sm:left-8",
  },
];

const scrollToId = (id: string) => {
  const element = document.querySelector(`#${id}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(122,74,255,0.18),transparent_18%),radial-gradient(circle_at_30%_16%,rgba(87,130,255,0.08),transparent_14%),linear-gradient(180deg,rgba(4,4,10,0.98),rgba(5,6,13,0.98)_34%,rgba(5,6,11,1)_100%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(oklch(0.55_0.25_300)_1px,transparent_1px),linear-gradient(90deg,oklch(0.55_0.25_300)_1px,transparent_1px)] [background-size:108px_108px]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,oklch(0.56_0.16_290/0.22),transparent_54%)]" />
      <div className="absolute right-[2%] top-[14%] h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(110,77,255,0.20),transparent_62%)]" />
      <div className="absolute left-[8%] top-[28%] h-36 w-36 bg-[radial-gradient(circle,rgba(90,160,255,0.08),transparent_70%)]" />
      <div className="absolute left-[6%] right-[6%] top-[18%] h-[56vh] rounded-[3rem] border border-[oklch(0.31_0.05_275/0.08)] [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)]" />
      <div className="absolute left-[7%] top-[19%] hidden h-[54vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.56_0.16_290/0.36),transparent)] lg:block" />
      <div className="absolute right-[8%] top-[18%] hidden h-[48vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.72_0.15_235/0.18),transparent)] lg:block" />
      <div className="homepage-circuit-line absolute left-[10%] right-[10%] top-28 h-px opacity-40" />
      <div className="absolute left-[12%] top-[42%] hidden w-[18%] border-t border-[oklch(0.31_0.05_275/0.14)] lg:block" />
      <div className="absolute right-[14%] top-[32%] hidden w-[12%] border-t border-[oklch(0.72_0.15_235/0.14)] lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-14 py-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(520px,1.04fr)] lg:gap-12">
          <div className="max-w-[38rem] lg:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="homepage-eyebrow"
            >
              AI receptionist for service businesses
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-6 max-w-[8.8ch] text-4xl font-semibold leading-[0.9] text-foreground sm:text-5xl md:text-6xl lg:text-[5.15rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-8 max-w-[35rem] text-lg leading-relaxed text-muted-foreground sm:text-[1.12rem]"
            >
              Civive Unlimited gives service businesses an AI receptionist that answers
              calls, captures leads, follows up fast, and helps book appointments so
              opportunities do not slip through the cracks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-12 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => scrollToId("contact")}
                className="homepage-primary-button magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToId("how-it-works")}
                className="homepage-outline-button magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-white/[0.03] sm:w-auto"
              >
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-14 grid max-w-[32rem] gap-x-10 gap-y-4 border-t border-[oklch(0.31_0.05_275/0.18)] pt-6 sm:grid-cols-2"
            >
              {checklistItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground/76">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index < 2 ? "bg-[oklch(0.72_0.15_235)]" : "bg-[oklch(0.58_0.16_290)]"
                    }`}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto w-full max-w-[640px]"
          >
            <div className="relative min-h-[34rem] overflow-hidden sm:min-h-[38rem]">
              <div className="absolute inset-x-[6%] top-10 h-px bg-[linear-gradient(90deg,transparent,oklch(0.56_0.16_290/0.34),transparent)]" />
              <div className="absolute inset-x-[14%] bottom-14 h-px bg-[linear-gradient(90deg,transparent,oklch(0.72_0.15_235/0.22),transparent)]" />
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.16)] bg-[radial-gradient(circle_at_center,rgba(25,18,42,0.62),rgba(9,9,16,0.08)_58%,transparent_74%)] sm:h-[30rem] sm:w-[30rem]" />
              <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.28)] sm:h-[21rem] sm:w-[21rem]" />
              <div className="absolute left-1/2 top-1/2 h-[11.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.72_0.15_235/0.24)] bg-[radial-gradient(circle,rgba(72,179,255,0.12),rgba(95,74,255,0.16)_42%,rgba(8,10,17,0.12)_82%)] shadow-[0_0_90px_rgba(110,77,255,0.14)] sm:h-[13rem] sm:w-[13rem]" />
              <div className="absolute left-1/2 top-1/2 h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.34)] bg-[linear-gradient(180deg,rgba(17,14,29,0.94),rgba(8,9,16,0.98))] sm:h-[8.75rem] sm:w-[8.75rem]" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,oklch(0.75_0.18_220),oklch(0.58_0.16_290))] shadow-[0_0_28px_oklch(0.56_0.16_290/0.52)]" />
              <div className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[oklch(0.31_0.05_275/0.14)] sm:h-[26rem] sm:w-[26rem]" />

              <div className="absolute left-1/2 top-[8.3rem] flex -translate-x-1/2 items-center gap-3 rounded-full border border-[oklch(0.31_0.05_275/0.22)] bg-[rgba(10,10,18,0.54)] px-4 py-2 text-sm text-foreground/80 backdrop-blur-sm sm:top-[7.8rem]">
                <Phone className="h-4.5 w-4.5 text-[oklch(0.72_0.15_235)]" />
                <span>Incoming call</span>
                <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.15_235)] shadow-[0_0_12px_oklch(0.72_0.15_235/0.4)]" />
              </div>

              <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full [background:conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(93,73,255,0.0)_38deg,rgba(93,73,255,0.48)_88deg,rgba(89,189,255,0.38)_118deg,transparent_168deg,transparent_360deg)] opacity-70 sm:h-[21rem] sm:w-[21rem]" />

              {orbitLabels.map((item) => (
                <div key={item.title} className={`absolute max-w-[11rem] ${item.className}`}>
                  <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[oklch(0.77_0.08_285)]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/72">
                    {item.body}
                  </p>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(123,86,255,0.22),rgba(90,179,255,0.12),transparent)]" />

              <div className="absolute bottom-8 left-[8%] right-[8%] flex flex-col gap-4 border-t border-[oklch(0.31_0.05_275/0.18)] pt-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[oklch(0.77_0.08_285)]">
                    <RadioTower className="h-3.5 w-3.5" />
                    System control
                  </div>
                  <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-muted-foreground">
                    One intelligent line for response, lead capture, routing, and follow-up.
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-foreground/76 sm:text-right">
                  <div className="border-b border-[oklch(0.31_0.05_275/0.14)] pb-2">
                    Lead details captured
                  </div>
                  <div className="border-b border-[oklch(0.31_0.05_275/0.14)] pb-2">
                    Appointment path ready
                  </div>
                  <div className="text-[oklch(0.72_0.15_235)]">Follow-up queued</div>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.28)] bg-[linear-gradient(180deg,rgba(17,14,29,0.96),rgba(9,10,17,0.98))] shadow-[0_0_22px_rgba(105,76,255,0.16)]">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.72_0.15_235/0.24)] bg-[radial-gradient(circle,rgba(92,188,255,0.24),rgba(91,74,255,0.14)_58%,transparent_100%)]">
                    <CalendarCheck2 className="h-4.5 w-4.5 text-[oklch(0.78_0.10_235)]" />
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
