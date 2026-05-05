import { ArrowRight, CheckCircle, Radar, Search } from "lucide-react";
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
  "Grok",
  "Website Messaging",
  "FAQ Schema",
  "LocalBusiness Schema",
  "Reviews",
  "Google Business Profile",
  "Social Consistency",
];

const scanSignals = [
  { label: "Website message", status: "Clear enough to quote", score: "82" },
  { label: "Google profile", status: "Needs service alignment", score: "64" },
  { label: "Review evidence", status: "Specific trust language", score: "78" },
  { label: "FAQ + schema", status: "Missing answer structure", score: "41" },
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
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.14] mix-blend-screen [mask-image:linear-gradient(90deg,transparent,black_24%,black_78%,transparent)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,9,0.99),rgba(7,7,13,0.98)_38%,rgba(6,6,11,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,9,0.96),rgba(4,4,9,0.82)_42%,rgba(4,4,9,0.96)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-[linear-gradient(180deg,rgba(120,91,255,0.13),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-[42%] bg-[linear-gradient(90deg,transparent,rgba(22,181,255,0.075))]" />
      </div>

      <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(156,114,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(156,114,255,0.8)_1px,transparent_1px)] [background-size:132px_132px]" />
      <div className="absolute left-[5%] right-[5%] top-[14%] hidden h-[72vh] rounded-[2.5rem] border border-white/[0.04] [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)] lg:block" />
      <div className="absolute left-[8%] right-[8%] top-28 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(145,96,255,0.16),transparent)] lg:block" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 py-8 sm:py-14 lg:min-h-[calc(100svh-170px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,0.68fr)] lg:items-center lg:gap-12 lg:py-10 xl:gap-16">
          <div className="w-full max-w-[78rem]">
            <p className="homepage-eyebrow digital-accent">
              AI Search Visibility - ChatGPT - Gemini - Perplexity - Grok
            </p>

            <div className="mt-6 max-w-[72rem] sm:mt-8">
              <h1
                className="hero-tech-title text-[1.45rem] leading-[1.22] text-white sm:text-[2.05rem] md:text-[2.5rem] lg:text-[2.85rem] xl:text-[3.05rem]"
              >
                <span className="block">Your next customer</span>
                <span className="hero-tech-accent block text-[#19c2ff]">asked ChatGPT</span>
                <span className="block">who to call.</span>
                <span className="hero-tech-accent block text-white/42">Did it name you?</span>
              </h1>
            </div>

            <p
              className="hero-support-copy mt-7 max-w-[39rem] text-base leading-8 text-white/72 sm:mt-9 sm:text-[1.08rem]"
            >
              Your next customer may ask ChatGPT, Gemini, Perplexity, or Grok
              who to call before they ever visit a website. Civive cleans up the
              public signals that help AI and buyers understand why your
              business belongs on the shortlist.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
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
            </div>

            <div className="mt-10 grid max-w-[35rem] gap-x-8 gap-y-4 sm:grid-cols-2">
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
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="homepage-panel relative overflow-hidden rounded-[2rem] p-6 xl:p-7">
              <div className="hero-scan-sweep" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="homepage-eyebrow digital-accent">Live audit model</p>
                    <h2 className="mt-3 text-3xl leading-none text-white xl:text-4xl">
                      Can AI explain why a buyer should call?
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-[#19c2ff]">
                    <Radar className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {scanSignals.map((signal) => (
                    <div key={signal.label} className="border-t border-white/[0.08] pt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="digital-accent text-sm text-white/78">
                            {signal.label}
                          </p>
                          <p className="mt-1 text-sm text-white/52">
                            {signal.status}
                          </p>
                        </div>
                        <div className="digital-accent text-sm text-[#19c2ff]">
                          {signal.score}
                        </div>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          style={{ width: `${signal.score}%` }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#19c2ff,#8b5cf6)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-5">
                  <div>
                    <p className="digital-accent text-2xl text-white">9</p>
                    <p className="mt-1 text-sm text-white/52">signals checked</p>
                  </div>
                  <div>
                    <p className="digital-accent text-2xl text-white">72h</p>
                    <p className="mt-1 text-sm text-white/52">first cleanup map</p>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3 text-sm text-white/62">
                  <CheckCircle className="h-4 w-4 text-[#19c2ff]" />
                  Website, GBP, reviews, FAQs, schema, and lead path.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/[0.08] bg-[rgba(9,9,15,0.48)] py-4">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex min-w-max items-center gap-10 pr-10 [animation:hero-marquee_44s_linear_infinite]">
            {[...featureStripItems, ...featureStripItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className={`digital-accent text-sm ${
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
