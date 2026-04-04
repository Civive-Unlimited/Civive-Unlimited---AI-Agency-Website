import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Phone,
  PhoneCall,
  UserRound,
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
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,12,0.56),rgba(5,8,17,0.88)_34%,rgba(5,8,16,0.97)_100%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.024] [background-image:linear-gradient(oklch(0.75_0.18_220)_1px,transparent_1px),linear-gradient(90deg,oklch(0.55_0.25_300)_1px,transparent_1px)] [background-size:76px_76px]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.16),transparent_56%)]" />
      <div className="absolute right-0 top-12 h-72 w-72 bg-[radial-gradient(circle,oklch(0.55_0.25_300/0.14),transparent_62%)]" />
      <div className="absolute left-[4%] top-[22%] hidden h-[52vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.75_0.18_220/0.46),oklch(0.55_0.25_300/0.2),transparent)] lg:block" />
      <div className="absolute right-[6%] top-[18%] hidden h-[44vh] w-px bg-[linear-gradient(180deg,transparent,oklch(0.55_0.25_300/0.3),transparent)] lg:block" />
      <div className="absolute left-[4%] right-[4%] top-[18%] h-[48vh] rounded-[2.4rem] border border-[oklch(0.32_0.05_230/0.14)] [mask-image:linear-gradient(180deg,transparent,black_15%,black_80%,transparent)]" />
      <div className="homepage-circuit-line absolute left-[8%] right-[8%] top-28 h-px opacity-60" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-14 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.9fr)] lg:gap-14">
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
              className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.94] text-foreground sm:text-5xl md:text-6xl lg:text-[4.55rem]"
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
              className="mt-10 grid max-w-xl gap-x-8 gap-y-4 border-t border-[oklch(0.33_0.05_228/0.26)] pt-6 sm:grid-cols-2"
            >
              {checklistItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground/82">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border bg-[linear-gradient(180deg,rgba(10,13,22,0.9),rgba(9,11,18,0.92))] ${
                      index < 2 ? "text-[oklch(0.75_0.18_220)]" : "text-[oklch(0.65_0.20_180)]"
                    }`}
                    style={{ borderColor: index < 2 ? "oklch(0.36 0.05 228 / 0.55)" : "oklch(0.34 0.04 275 / 0.45)" }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto w-full max-w-[560px]"
          >
            <div className="homepage-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.75_0.18_220/0.75),oklch(0.55_0.25_300/0.48),transparent)]" />
              <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,oklch(0.75_0.18_220/0.12),transparent_70%)]" />
              <div className="absolute inset-y-6 right-6 w-px bg-[linear-gradient(180deg,transparent,oklch(0.55_0.25_300/0.18),transparent)]" />
              <div className="flex items-center justify-between gap-4 border-b border-[oklch(0.33_0.05_228/0.5)] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[oklch(0.36_0.05_228/0.55)] bg-[linear-gradient(180deg,oklch(0.14_0.02_250/0.98),oklch(0.11_0.02_250/0.98))] text-[oklch(0.75_0.18_220)] shadow-[0_0_24px_oklch(0.75_0.18_220/0.12)]">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Incoming call</p>
                    <p className="mt-1 max-w-[16rem] text-sm text-muted-foreground">
                      New service lead routed instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[oklch(0.36_0.05_228/0.42)] bg-[linear-gradient(180deg,rgba(10,13,22,0.92),rgba(9,11,18,0.94))] px-3 py-1.5 text-xs text-foreground/78">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.20_180)] shadow-[0_0_10px_oklch(0.65_0.20_180/0.45)]" />
                  Active
                </div>
              </div>

              <div className="grid gap-4 pt-5">
                <div className="rounded-[1.2rem] border border-[oklch(0.33_0.05_228/0.44)] bg-[linear-gradient(180deg,rgba(11,14,24,0.8),rgba(9,12,20,0.84))] p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.33_0.05_228/0.42)] bg-[linear-gradient(180deg,rgba(14,18,30,0.9),rgba(10,13,22,0.94))] text-foreground/80">
                      <UserRound className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Lead details captured</p>
                      <p className="mt-1 max-w-[22rem] text-sm text-muted-foreground">
                        The call is handled clearly without dropping the handoff.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {leadDetails.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-[oklch(0.30_0.04_230/0.36)] bg-[rgba(8,11,18,0.72)] px-3 py-2 text-sm text-foreground/82"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-[oklch(0.31_0.05_275/0.4)] bg-[linear-gradient(180deg,rgba(13,15,26,0.8),rgba(9,11,20,0.84))] p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.31_0.05_275/0.4)] bg-[linear-gradient(180deg,rgba(29,15,42,0.56),rgba(15,12,25,0.74))] text-[oklch(0.75_0.18_220)]">
                      <CalendarCheck2 className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-foreground">
                          Next step already moving
                        </p>
                        <span className="rounded-full border border-[oklch(0.31_0.05_275/0.35)] bg-[rgba(20,15,30,0.66)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[oklch(0.76_0.1_285)]">
                          Routing
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Qualified callers get pushed toward booking, routed correctly,
                        or queued for fast follow-up instead of slipping into voicemail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-[oklch(0.33_0.05_228/0.42)] bg-[rgba(7,10,17,0.78)] px-4 py-3">
                  <span className="text-sm text-foreground/80">System status</span>
                  <span className="text-sm text-[oklch(0.75_0.18_220)]">Follow-up queued</span>
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
