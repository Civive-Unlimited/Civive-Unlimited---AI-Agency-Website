import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Phone,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const trustItems = [
  "Answers 24/7",
  "Captures every lead",
  "Helps book appointments",
  "Works after hours",
];

const flowSteps = [
  {
    label: "Incoming call",
    detail: "New service lead calling now",
    icon: PhoneCall,
    tone: "from-[oklch(0.75_0.18_220)/0.3] to-[oklch(0.55_0.25_300)/0.2]",
  },
  {
    label: "Instant answer",
    detail: "AI receptionist responds right away",
    icon: Sparkles,
    tone: "from-[oklch(0.65_0.20_180)/0.28] to-[oklch(0.75_0.18_220)/0.16]",
  },
  {
    label: "Lead captured",
    detail: "Name, need, and contact details collected",
    icon: CheckCircle2,
    tone: "from-[oklch(0.75_0.18_220)/0.22] to-[oklch(0.65_0.20_180)/0.18]",
  },
  {
    label: "Next step moved forward",
    detail: "Booking or follow-up path triggered",
    icon: CalendarCheck2,
    tone: "from-[oklch(0.55_0.25_300)/0.22] to-[oklch(0.75_0.18_220)/0.16]",
  },
];

const scrollToId = (id: string) => {
  const element = document.querySelector(`#${id}`);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 140,
    damping: 20,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 140,
    damping: 20,
    mass: 0.6,
  });
  const glowX = useTransform(pointerX, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["35%", "65%"]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, oklch(0.75 0.18 220 / 0.22), transparent 45%)`;

  const handlePanelMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPanel = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/78 to-background" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.75 0.18 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 220) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[oklch(0.75_0.18_220)/0.08] to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="inline-flex items-center gap-3 rounded-full border border-border/45 bg-background/30 px-4 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.65_0.20_180)] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.20_180)]" />
              </span>
              <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
                Built for service businesses that rely on calls
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-8 max-w-4xl font-['Syne'] text-4xl font-bold leading-[1.02] text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              Every missed call is lost money.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-7 max-w-2xl font-['Space_Grotesk'] text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Civive Unlimited gives service businesses an AI receptionist that answers
              calls, captures leads, follows up fast, and helps book appointments so
              opportunities do not slip through the cracks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => scrollToId("contact")}
                className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] px-8 py-4 font-['Space_Grotesk'] text-base font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all hover:opacity-90 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToId("how-it-works")}
                className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/45 bg-background/24 px-8 py-4 font-['Space_Grotesk'] text-base font-semibold text-foreground backdrop-blur-xl transition-all hover:bg-background/34 sm:w-auto"
              >
                See how it works
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.38 + index * 0.06 }}
                  className="group relative overflow-hidden rounded-[1.15rem] border border-border/40 bg-background/24 px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.75_0.18_220)/0.08] via-transparent to-[oklch(0.55_0.25_300)/0.08] opacity-70 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.75_0.18_220)/0.12]">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.65_0.20_180)]" />
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm text-foreground/85">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="relative mx-auto w-full max-w-[640px] lg:justify-self-end"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[1.9rem] bg-[radial-gradient(circle_at_center,oklch(0.75_0.18_220/0.18),transparent_55%)] blur-3xl" />

            <motion.div
              onMouseMove={handlePanelMove}
              onMouseLeave={resetPanel}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-[1.85rem] border border-border/45 bg-background/30 p-4 shadow-[0_22px_72px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-5"
            >
              <motion.div
                style={{ background: glowBackground }}
                className="pointer-events-none absolute inset-0 rounded-[1.85rem]"
              />

              <div className="relative overflow-hidden rounded-[1.45rem] border border-border/35 bg-[linear-gradient(160deg,rgba(15,23,42,0.86),rgba(10,14,24,0.94))] p-5 sm:p-6">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-[oklch(0.75_0.18_220)/0.16] blur-3xl" />
                  <div className="absolute -bottom-12 left-0 h-40 w-40 rounded-full bg-[oklch(0.55_0.25_300)/0.14] blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Live receptionist flow
                    </div>
                    <h3 className="mt-3 font-['Syne'] text-2xl font-bold text-foreground sm:text-[1.85rem]">
                      Never miss a lead again
                    </h3>
                  </div>

                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full border border-border/40 bg-background/30 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
                  >
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.65_0.20_180)] opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.20_180)]" />
                      </span>
                      <span className="font-['Space_Grotesk'] text-xs text-foreground/80">
                        Active now
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="relative mt-8 space-y-4">
                  {flowSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.28 + index * 0.1 }}
                      style={{
                        transform: `translateZ(${index === 1 ? 34 : 18}px)`,
                        marginLeft: index % 2 === 0 ? "0px" : "28px",
                      }}
                      className="relative rounded-[1.25rem] border border-border/38 bg-background/40 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:p-4.5"
                    >
                      {index < flowSteps.length - 1 && (
                        <div className="pointer-events-none absolute left-8 top-full h-5 w-px bg-gradient-to-b from-[oklch(0.75_0.18_220)/0.7] to-transparent" />
                      )}

                      <div className="flex items-start gap-4">
                        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.tone}`}>
                          <step.icon className="h-5 w-5 text-[oklch(0.88_0.05_220)]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div className="font-['Space_Grotesk'] text-sm font-semibold text-foreground">
                              {step.label}
                            </div>
                            <span className="rounded-full border border-border/40 bg-background/28 px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-xl">
                              Step {index + 1}
                            </span>
                          </div>
                          <p className="mt-2 font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.72 }}
                  style={{ transform: "translateZ(44px)" }}
                  className="relative mt-6 flex flex-wrap gap-3"
                >
                  <div className="rounded-full border border-border/40 bg-background/26 px-3 py-2 font-['Space_Grotesk'] text-xs text-foreground/80 backdrop-blur-2xl">
                    Follow-up triggered
                  </div>
                  <div className="rounded-full border border-border/40 bg-background/26 px-3 py-2 font-['Space_Grotesk'] text-xs text-foreground/80 backdrop-blur-2xl">
                    Booking path ready
                  </div>
                  <div className="rounded-full border border-border/40 bg-background/26 px-3 py-2 font-['Space_Grotesk'] text-xs text-foreground/80 backdrop-blur-2xl">
                    No voicemail drop-off
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="section-divider" />
    </section>
  );
}
