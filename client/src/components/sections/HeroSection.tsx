import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  MapPinned,
  PhoneCall,
  Search,
  Star,
  UserRoundCheck,
} from "lucide-react";
import scottFounderPhoto from "@/assets/scott-berry-founder.webp";
import { site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";

const trustSignals = [
  "AI search clarity",
  "Google profile alignment",
  "Missed-call recovery",
  "Booking follow-up",
];

const commandCenterItems: {
  label: string;
  detail: string;
  icon: LucideIcon;
  tone: "blue" | "purple";
}[] = [
  {
    label: "New lead captured",
    detail: "Source and intent logged",
    icon: UserRoundCheck,
    tone: "blue",
  },
  {
    label: "Missed call recovered",
    detail: "Fast response path ready",
    icon: PhoneCall,
    tone: "purple",
  },
  {
    label: "AI receptionist answered",
    detail: "Intake and routing handled",
    icon: Bot,
    tone: "blue",
  },
  {
    label: "Google profile optimized",
    detail: "Services and facts aligned",
    icon: MapPinned,
    tone: "purple",
  },
  {
    label: "Review request sent",
    detail: "Reputation loop connected",
    icon: Star,
    tone: "blue",
  },
  {
    label: "Booked job created",
    detail: "Lead moved into pipeline",
    icon: CalendarCheck2,
    tone: "purple",
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
    );
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrame = 0;
    let nextX = section.clientWidth * 0.62;
    let nextY = section.clientHeight * 0.28;

    const syncSpotlightState = () => {
      section.dataset.spotlightEnabled =
        pointerQuery.matches && !reducedMotionQuery.matches ? "true" : "false";
    };

    const writeMousePosition = () => {
      animationFrame = 0;
      section.style.setProperty("--mouse-x", `${nextX}px`);
      section.style.setProperty("--mouse-y", `${nextY}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!pointerQuery.matches || reducedMotionQuery.matches) return;

      const bounds = section.getBoundingClientRect();
      nextX = event.clientX - bounds.left;
      nextY = event.clientY - bounds.top;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(writeMousePosition);
      }
    };

    syncSpotlightState();
    section.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    pointerQuery.addEventListener("change", syncSpotlightState);
    reducedMotionQuery.addEventListener("change", syncSpotlightState);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      pointerQuery.removeEventListener("change", syncSpotlightState);
      reducedMotionQuery.removeEventListener("change", syncSpotlightState);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Homepage hero"
      className="hero-spotlight-shell relative isolate overflow-hidden pt-20 sm:pt-[5.75rem] lg:pt-[5.5rem]"
    >
      <div className="absolute inset-0 bg-[#02050e]" />
      <div className="absolute inset-0 bg-[linear-gradient(132deg,rgba(2,8,22,0.98)_0%,rgba(4,11,27,0.96)_42%,rgba(5,3,12,0.99)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(25,194,255,0.13),transparent_28%,rgba(139,92,246,0.11)_68%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(120,178,255,0.88)_1px,transparent_1px),linear-gradient(90deg,rgba(120,178,255,0.88)_1px,transparent_1px)] [background-size:112px_112px]" />
      <div className="absolute inset-x-[6%] top-24 h-px bg-[linear-gradient(90deg,transparent,rgba(32,194,255,0.38),rgba(139,92,246,0.22),transparent)]" />
      <div className="hero-cursor-spotlight" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(5,6,12,0.98))]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-7 py-5 sm:py-7 lg:grid-cols-[minmax(0,0.98fr)_minmax(24rem,0.68fr)] lg:items-start lg:gap-10 lg:py-6 xl:gap-12">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="homepage-eyebrow max-w-[40rem] text-[#9fdcff]">
              AI Search Visibility + Lead Recovery for Service Businesses
            </p>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04 }}
              className="homepage-hero-title mt-4 max-w-[50rem] text-balance text-white sm:mt-5"
            >
              Get found. Get called. Get booked.
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="hero-support-copy mt-5 max-w-[44rem] text-lg leading-8 text-white/78 sm:text-xl"
            >
              Civive Unlimited helps local service businesses improve AI search
              visibility, Google Business Profile clarity, websites, CRM
              automation, missed-call recovery, AI receptionist setup, reviews,
              and lead follow-up.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={site.visibilityReportRequestUrl}
                data-cta-destination={site.visibilityReportRequestUrl}
                onClick={() =>
                  trackWebsiteEvent("cta_click", {
                    placement: "homepage_hero",
                    label: "Get a Free Fit Check",
                    destination: site.visibilityReportRequestUrl,
                  })
                }
                className="homepage-primary-button inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19c2ff]/70 sm:w-auto"
              >
                <Search className="h-4.5 w-4.5" />
                Get a Free Fit Check
                <ArrowRight className="h-4.5 w-4.5" />
              </a>

              <a
                href={site.phoneHref}
                data-cta-destination={site.phoneHref}
                onClick={() =>
                  trackWebsiteEvent("cta_click", {
                    placement: "homepage_hero",
                    label: `Call ${site.phone}`,
                    destination: site.phoneHref,
                  })
                }
                className="homepage-secondary-button inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.055] px-7 py-4 text-base font-semibold text-white/88 shadow-[0_14px_38px_rgba(0,0,0,0.18)] transition-colors hover:bg-white/[0.09] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
              >
                <PhoneCall className="h-4.5 w-4.5 text-[#19c2ff]" />
                Call 417-386-2441
              </a>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-6 hidden max-w-[40rem] gap-3 lg:grid lg:grid-cols-2"
            >
              {trustSignals.map(signal => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm font-medium text-white/68 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#19c2ff]" />
                  <span>{signal}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.1 }}
            className="relative z-10 mx-auto flex w-full max-w-[33rem] flex-col gap-3.5 lg:mx-0 lg:justify-self-end"
            aria-label="Founder and CiviveOS command center"
          >
            <div className="premium-hover-surface founder-trust-card relative overflow-hidden rounded-[1.25rem] border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-3">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(25,194,255,0.72),transparent)]" />
              <div className="grid grid-cols-[7.75rem_minmax(0,1fr)] gap-3.5 sm:grid-cols-[11.25rem_minmax(0,1fr)] sm:gap-4">
                <div className="relative min-h-[10.75rem] overflow-hidden rounded-[0.95rem] bg-[#070a12] sm:min-h-[12.5rem]">
                  <img
                    src={scottFounderPhoto}
                    alt="Scott Berry, founder of Civive Unlimited"
                    width={1200}
                    height={1470}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_35%] saturate-[0.98]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(2,5,14,0.72))]" />
                </div>

                <div className="flex min-w-0 flex-col justify-center py-1 pr-1">
                  <div>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                      Scott Berry
                    </h2>
                    <p className="mt-2 text-base font-semibold text-white/72">
                      Founder, Civive Unlimited
                    </p>
                  </div>

                  <p className="mt-4 max-w-[19rem] text-base leading-7 text-white/76">
                    25 years in HVAC and service business operations
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-hover-surface command-center-card relative overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-[linear-gradient(180deg,rgba(9,14,29,0.88),rgba(5,7,15,0.92))] p-3.5 shadow-[0_26px_78px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-4">
              <div className="hero-scan-sweep opacity-70" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-3">
                  <div>
                    <p className="homepage-eyebrow text-[#9fdcff]">
                      CiviveOS command center
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Visibility turns into booked work.
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-[#19c2ff]/25 bg-[#19c2ff]/10 text-[#19c2ff]">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-3 grid gap-2.5 md:grid-cols-2">
                  {commandCenterItems.map(item => {
                    const Icon = item.icon;
                    const accentClass =
                      item.tone === "blue"
                        ? "border-[#19c2ff]/18 bg-[#19c2ff]/9 text-[#19c2ff]"
                        : "border-[#8b5cf6]/20 bg-[#8b5cf6]/10 text-[#b69cff]";

                    return (
                      <div
                        key={item.label}
                        className="command-outcome-card min-h-[5.25rem] rounded-[0.95rem] border border-white/[0.085] bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      >
                        <div
                          className={`command-outcome-icon mb-2.5 flex h-7 w-7 items-center justify-center rounded-lg border ${accentClass}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-[0.95rem] font-bold leading-snug text-white/92">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-white/56">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
