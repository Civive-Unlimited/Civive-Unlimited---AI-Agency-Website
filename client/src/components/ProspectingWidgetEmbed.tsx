import { AlertCircle, PhoneCall, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";

type ProspectingWidgetEmbedProps = {
  variant?: "section" | "page";
};

const prospectingWidgetScript =
  "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
const prospectingWidgetId = "69fb28f3ffdd24df7c793978";

export default function ProspectingWidgetEmbed({
  variant = "section",
}: ProspectingWidgetEmbedProps) {
  const isPage = variant === "page";
  const HeadingTag = isPage ? "h1" : "h2";
  const widgetHostRef = useRef<HTMLDivElement | null>(null);
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const [hasWidgetError, setHasWidgetError] = useState(false);

  useEffect(() => {
    const host = widgetHostRef.current;
    if (!host) return;

    let isActive = true;
    setIsWidgetReady(false);
    setHasWidgetError(false);
    host.innerHTML = "";

    const loadWidgetTimer = window.setTimeout(() => {
      if (!isActive) return;

      const script = document.createElement("script");
      script.src = prospectingWidgetScript;
      script.async = true;
      script.setAttribute("data-widget-id", prospectingWidgetId);
      script.addEventListener("load", () => {
        if (isActive) {
          setIsWidgetReady(true);
          trackWebsiteEvent("widget_load", {
            placement: isPage ? "free_visibility_report_page" : "homepage",
            widgetId: prospectingWidgetId,
            destination: prospectingWidgetScript,
          });
        }
      });
      script.addEventListener("error", () => {
        if (!isActive) return;
        setHasWidgetError(true);
        setIsWidgetReady(false);
        trackWebsiteEvent("widget_error", {
          placement: isPage ? "free_visibility_report_page" : "homepage",
          widgetId: prospectingWidgetId,
          destination: prospectingWidgetScript,
        });
      });

      host.appendChild(script);
    }, 350);

    return () => {
      isActive = false;
      window.clearTimeout(loadWidgetTimer);
      host.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="free-visibility-report"
      className={`relative isolate max-w-full overflow-hidden ${
        isPage
          ? "min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-24"
          : "scroll-mt-24 py-18 sm:scroll-mt-28 sm:py-22"
      }`}
      aria-labelledby="free-visibility-report-title"
    >
      <div className="absolute inset-0 bg-[#02050e]" />
      <div className="absolute inset-0 bg-[linear-gradient(136deg,rgba(3,8,22,0.98)_0%,rgba(5,10,26,0.96)_48%,rgba(8,4,17,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(25,194,255,0.14),transparent_34%,rgba(139,92,246,0.16)_72%,transparent_100%)]" />
      <div className="absolute inset-x-[5%] top-14 h-px bg-[linear-gradient(90deg,transparent,rgba(25,194,255,0.52),rgba(139,92,246,0.28),transparent)]" />
      <div className="absolute left-1/2 top-16 h-80 w-[min(44rem,88vw)] -translate-x-1/2 bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_68%)] blur-2xl" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(120,178,255,0.88)_1px,transparent_1px),linear-gradient(90deg,rgba(120,178,255,0.88)_1px,transparent_1px)] [background-size:104px_104px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="homepage-eyebrow text-[#9fdcff]">Free visibility scan</p>
          <HeadingTag
            id="free-visibility-report-title"
            className={`mt-4 text-balance font-semibold text-white ${
              isPage
                ? "text-4xl sm:text-5xl lg:text-[4.15rem] lg:leading-[1.02]"
                : "text-3xl sm:text-4xl lg:text-[3.35rem] lg:leading-[1.03]"
            }`}
          >
            Get Your Free Visibility Report
          </HeadingTag>
          <p className="mx-auto mt-5 max-w-[21rem] text-sm leading-6 text-white/72 sm:max-w-2xl sm:text-[1.05rem] sm:leading-7">
            {isPage
              ? "See what is helping or hurting your local visibility across Google, Maps, reviews, directories, and AI search."
              : "See how your business shows up across Google, Maps, reviews, directories, and AI search."}
          </p>
          <div className="mx-auto mt-6 flex max-w-[18rem] flex-wrap justify-center gap-2 text-xs font-medium text-white/64 sm:max-w-2xl">
            <span className="rounded-full border border-white/[0.1] bg-white/[0.045] px-3 py-2">
              No spam
            </span>
            <span className="rounded-full border border-white/[0.1] bg-white/[0.045] px-3 py-2">
              Local visibility scan
            </span>
            <span className="rounded-full border border-white/[0.1] bg-white/[0.045] px-3 py-2">
              Clear next fixes
            </span>
          </div>
        </div>

        <div className="mx-auto mt-9 w-full max-w-[calc(100vw-2rem)] overflow-hidden px-0 sm:mt-11 sm:max-w-4xl">
          <div className="relative overflow-hidden rounded-[1.1rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(8,13,29,0.92),rgba(4,7,16,0.96))] p-0 shadow-[0_30px_90px_rgba(0,0,0,0.38),0_0_58px_rgba(25,194,255,0.11)] sm:rounded-[1.7rem] sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(25,194,255,0.74),rgba(139,92,246,0.44),transparent)]" />
            <div className="relative min-h-[32rem] overflow-hidden rounded-[1rem] bg-[#060a15] text-white sm:min-h-[34rem] sm:rounded-[1.15rem]">
              {!isWidgetReady && !hasWidgetError && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#060a15] px-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19c2ff]/20 bg-[#19c2ff]/10 text-[#9fdcff]">
                    <Search className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      Loading the visibility report...
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/58">
                      This checks the public signals buyers and AI tools use
                      before they decide who to call.
                    </p>
                  </div>
                </div>
              )}

              {hasWidgetError && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-[#060a15] px-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ffcf6a]/20 bg-[#ffcf6a]/10 text-[#ffcf6a]">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      The report form did not load.
                    </p>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/62">
                      Call or text Civive and send your business name, website,
                      and service area. I can still review the visibility path.
                    </p>
                  </div>
                  <a
                    href={site.phoneHref}
                    data-cta-destination={site.phoneHref}
                    onClick={() =>
                      trackWebsiteEvent("cta_click", {
                        placement: isPage
                          ? "free_visibility_report_widget_error"
                          : "homepage_widget_error",
                        label: `Call ${site.phone}`,
                        destination: site.phoneHref,
                      })
                    }
                    className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Call {site.phone}
                  </a>
                  <a
                    href={site.visibilityReportRequestUrl}
                    data-cta-destination={site.visibilityReportRequestUrl}
                    onClick={() =>
                      trackWebsiteEvent("cta_click", {
                        placement: isPage
                          ? "free_visibility_report_widget_error"
                          : "homepage_widget_error",
                        label: "Open visibility report request form",
                        destination: site.visibilityReportRequestUrl,
                      })
                    }
                    className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    Open visibility report request form
                  </a>
                </div>
              )}

              <div
                ref={widgetHostRef}
                className="prospecting-widget-host mx-auto min-h-[32rem] w-full max-w-full sm:min-h-[34rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
