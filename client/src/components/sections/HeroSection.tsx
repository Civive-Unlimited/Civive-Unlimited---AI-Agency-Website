import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck2,
  Phone,
  PhoneCall,
} from "lucide-react";

const checklistItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
];

const leadDetails = [
  "Name: Sarah M.",
  "Service: HVAC repair",
  "Phone: Captured",
  "Urgency: Today",
];

const signalLabels = [
  { label: "Signal received", className: "left-6 top-8 sm:left-8" },
  { label: "Lead captured", className: "right-6 top-18 text-right sm:right-8" },
  { label: "Booking path", className: "left-10 bottom-18 sm:left-12" },
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(133,77,255,0.16),transparent_20%),radial-gradient(circle_at_22%_18%,rgba(86,182,255,0.08),transparent_16%),linear-gradient(180deg,rgba(5,6,14,0.96),rgba(6,7,15,0.98)_36%,rgba(5,6,12,1)_100%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(oklch(0.55_0.25_300)_1px,transparent_1px),linear-gradient(90deg,oklch(0.55_0.25_300)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,oklch(0.56_0.16_290/0.18),transparent_58%)]" />
      <div className="absolute -right-12 top-10 h-80 w-80 bg-[radial-gradient(circle,rgba(117,78,255,0.16),transparent_62%)]" />
      <div className="absolute left-[6%] right-[6%] top-[16%] h-[52vh] rounded-[2.8rem] border border-[oklch(0.31_0.05_275/0.10)] [mask-image:linear-gradient(180deg,transparent,black_16%,black_82%,transparent)]" />
      <div className="absolute left-[6%] top-[20%] hidden h-[52vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.56_0.16_290/0.42),transparent)] lg:block" />
      <div className="absolute right-[8%] top-[16%] hidden h-[46vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.72_0.15_235/0.26),transparent)] lg:block" />
      <div className="homepage-circuit-line absolute left-[10%] right-[10%] top-28 h-px opacity-50" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-16 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.92fr)] lg:gap-16">
          <div className="max-w-3xl lg:pr-6">
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
              className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.92] text-foreground sm:text-5xl md:text-6xl lg:text-[4.8rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-[1.15rem]"
            >
              Civive Unlimited gives service businesses an AI receptionist that answers
              calls, captures leads, follows up fast, and helps book appointments so
              opportunities do not slip through the cracks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
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
                className="homepage-outline-button magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-white/[0.04] sm:w-auto"
              >
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-11 grid max-w-xl gap-x-10 gap-y-4 border-t border-[oklch(0.31_0.05_275/0.22)] pt-6 sm:grid-cols-2"
            >
              {checklistItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground/82">
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
            className="mx-auto w-full max-w-[620px]"
          >
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[oklch(0.31_0.05_275/0.30)] bg-[linear-gradient(180deg,rgba(14,13,24,0.94),rgba(8,9,17,0.98))] px-6 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:px-8 sm:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.56_0.16_290/0.65),oklch(0.72_0.15_235/0.40),transparent)]" />
              <div className="absolute left-8 right-8 top-[30%] h-px bg-[linear-gradient(90deg,transparent,rgba(155,110,255,0.24),transparent)]" />
              <div className="absolute right-0 top-0 h-48 w-48 bg-[radial-gradient(circle,rgba(117,78,255,0.16),transparent_68%)]" />
              <div className="absolute left-0 bottom-0 h-44 w-44 bg-[radial-gradient(circle,rgba(86,182,255,0.08),transparent_70%)]" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[oklch(0.32_0.06_275/0.40)] bg-[linear-gradient(180deg,rgba(22,16,35,0.92),rgba(12,11,22,0.96))] text-[oklch(0.72_0.15_235)]">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Incoming call</p>
                    <p className="mt-1 max-w-[16rem] text-sm text-muted-foreground">
                      New service lead routed instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[oklch(0.31_0.05_275/0.26)] bg-[rgba(12,10,22,0.72)] px-3 py-1.5 text-xs text-foreground/72">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.15_235)]" />
                  Active
                </div>
              </div>

              <div className="relative mt-8 min-h-[420px]">
                <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.26)] bg-[radial-gradient(circle_at_center,rgba(18,21,36,0.78),rgba(10,10,18,0.2)_58%,transparent_70%)]" />
                <div className="absolute left-1/2 top-1/2 h-[12.75rem] w-[12.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.31_0.05_275/0.34)]" />
                <div className="absolute left-1/2 top-1/2 h-[7.75rem] w-[7.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.72_0.15_235/0.34)] bg-[radial-gradient(circle,rgba(91,189,255,0.18),rgba(95,74,255,0.12)_42%,rgba(10,11,20,0.18)_78%)] shadow-[0_0_80px_rgba(115,84,255,0.12)]" />
                <div className="absolute left-1/2 top-1/2 h-[1.1rem] w-[1.1rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,oklch(0.75_0.18_220),oklch(0.56_0.16_290))] shadow-[0_0_24px_oklch(0.56_0.16_290/0.45)]" />

                {signalLabels.map((item) => (
                  <div key={item.label} className={`absolute ${item.className}`}>
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[oklch(0.77_0.08_285)]">
                      {item.label}
                    </div>
                  </div>
                ))}

                <div className="absolute left-6 top-22 max-w-[10rem] sm:left-8">
                  <p className="text-sm text-muted-foreground">Lead details captured</p>
                  <div className="mt-4 space-y-2">
                    {leadDetails.map((item) => (
                      <div key={item} className="border-b border-[oklch(0.31_0.05_275/0.18)] pb-2 text-sm text-foreground/84 last:border-b-0 last:pb-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8">
                  <div className="flex items-center justify-between gap-3 border-t border-[oklch(0.31_0.05_275/0.22)] pt-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.31_0.05_275/0.30)] bg-[rgba(22,14,34,0.58)] text-[oklch(0.56_0.16_290)]">
                        <CalendarCheck2 className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">Next step moving</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Qualified leads push toward booking or follow-up.
                        </p>
                      </div>
                    </div>
                    <span className="hidden text-sm text-[oklch(0.72_0.15_235)] sm:block">Follow-up queued</span>
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
