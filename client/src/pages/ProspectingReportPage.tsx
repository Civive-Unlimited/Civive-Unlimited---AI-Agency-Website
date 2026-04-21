import Seo from "@/components/Seo";
import { createProspectingReport, defaultProspectingReport, type ReportStatus } from "@/content/prospectingReport";
import { pageMeta, site } from "@/content/site";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  Eye,
  FileText,
  Globe2,
  MapPin,
  Printer,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

const statusStyles: Record<ReportStatus, { label: string; className: string; icon: typeof CheckCircle2 }> = {
  strong: {
    label: "Strong",
    className: "border-emerald-300/35 bg-emerald-300/[0.08] text-emerald-100",
    icon: CheckCircle2,
  },
  watch: {
    label: "Watch",
    className: "border-sky-300/35 bg-sky-300/[0.08] text-sky-100",
    icon: Activity,
  },
  gap: {
    label: "Gap",
    className: "border-amber-300/35 bg-amber-300/[0.09] text-amber-100",
    icon: AlertTriangle,
  },
};

function scoreTone(score: number) {
  if (score >= 80) return "from-emerald-300 to-sky-300";
  if (score >= 64) return "from-sky-300 to-cyan-200";
  if (score >= 45) return "from-amber-200 to-sky-300";
  return "from-rose-300 to-amber-200";
}

export default function ProspectingReportPage() {
  const [report, setReport] = useState(defaultProspectingReport);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setReport(createProspectingReport(new URLSearchParams(window.location.search)));
  }, []);

  const summaryText = useMemo(
    () =>
      `${report.prospect.businessName} scored ${report.score}/100 in the Civive AI Search Prospecting Report. ${report.scoreLabel}. Fastest wins: ${report.fastWins.join(" ")}`,
    [report],
  );

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Seo {...pageMeta.prospectingReport} path="/prospecting-report" />
      <main className="prospecting-report-page min-h-screen overflow-hidden bg-[#05060a] pt-24 text-white sm:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(96,210,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(96,210,255,0.65)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute left-0 top-0 h-[42rem] w-full bg-[radial-gradient(circle_at_24%_0%,rgba(87,207,255,0.18),transparent_34%),radial-gradient(circle_at_78%_6%,rgba(172,108,255,0.12),transparent_32%)]" />

        <section className="relative">
          <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-18">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="grid gap-10 lg:grid-cols-[1.05fr_0.72fr] lg:items-end"
            >
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-white/56">
                  <span className="digital-accent rounded-full border border-white/[0.12] bg-white/[0.045] px-3 py-2">
                    AI Search Prospecting Report
                  </span>
                  <span>{report.generatedAt}</span>
                  <span className="hidden h-1 w-1 rounded-full bg-white/28 sm:block" />
                  <span>{site.location}</span>
                </div>

                <p className="homepage-eyebrow digital-accent">Prepared by {site.name}</p>
                <h1 className="hero-tech-title mt-5 max-w-5xl text-[1.55rem] leading-[1.18] text-white sm:text-[2.15rem] md:text-[2.7rem] lg:text-[3.15rem]">
                  {report.prospect.businessName}
                </h1>
                <p className="hero-support-copy mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  A customer-facing visibility report that shows how clearly this business can be understood by AI
                  search, local search, maps, and buyers before they decide who to call.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-4">
                    <Globe2 className="h-4 w-4 text-sky-200" />
                    <span className="truncate">{report.prospect.website}</span>
                  </div>
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-4">
                    <MapPin className="h-4 w-4 text-emerald-200" />
                    <span>{report.prospect.market}</span>
                  </div>
                  <div className="flex items-center gap-2 border-y border-white/[0.08] py-4">
                    <Target className="h-4 w-4 text-amber-200" />
                    <span>{report.prospect.category}</span>
                  </div>
                </div>
              </div>

              <aside className="prospecting-print-break border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="digital-accent text-xs uppercase text-white/46">Recommendation confidence</p>
                    <p className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{report.scoreLabel}</p>
                  </div>
                  <Radar className="h-7 w-7 text-sky-200" />
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-[8.5rem_1fr] sm:items-center">
                  <div className="relative grid aspect-square place-items-center rounded-full border border-white/[0.09] bg-black/24">
                    <div
                      className={`absolute inset-2 rounded-full bg-gradient-to-br ${scoreTone(report.score)} opacity-[0.22] blur-xl`}
                    />
                    <div className="relative text-center">
                      <div className={`gradient-text bg-gradient-to-br ${scoreTone(report.score)} text-5xl font-bold`}>
                        {report.score}
                      </div>
                      <div className="digital-accent mt-1 text-[0.65rem] uppercase text-white/46">out of 100</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm leading-6 text-white/66">
                    <p>{report.recommendation}</p>
                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${scoreTone(report.score)}`}
                        style={{ width: `${report.score}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="prospecting-report-actions mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex flex-1 items-center justify-center gap-2 border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.11]"
                  >
                    <Printer className="h-4 w-4" />
                    Print / PDF
                  </button>
                  <button
                    type="button"
                    onClick={copySummary}
                    className="inline-flex flex-1 items-center justify-center gap-2 border border-white/[0.12] px-4 py-3 text-sm font-semibold text-white/78 transition-colors hover:bg-white/[0.07] hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? "Copied" : "Copy brief"}
                  </button>
                </div>
              </aside>
            </motion.div>
          </div>
        </section>

        <ReportBand>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
            <SectionLead
              icon={Sparkles}
              eyebrow="Executive readout"
              title="What this means in plain English"
              copy="This is the part that makes the report feel valuable: not raw SEO noise, but a clear explanation of what a buyer or AI assistant can understand right now."
            />
            <div className="grid gap-4">
              {report.executiveSummary.map((item, index) => (
                <div
                  key={item}
                  className="prospecting-print-break border-b border-white/[0.08] pb-5"
                >
                  <div className="digital-accent text-xs text-white/38">{String(index + 1).padStart(2, "0")}</div>
                  <p className="mt-2 text-lg leading-8 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ReportBand>

        <ReportBand>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
            <SectionLead
              icon={ClipboardCheck}
              eyebrow="Signal scorecard"
              title="The 8 checks that decide whether the business looks recommendation-ready"
              copy="Each score points to a fixable signal. The goal is not to shame the business. The goal is to make the invisible gap obvious enough to act on."
            />
            <div className="grid gap-3">
              {report.scorecard.map((item) => {
                const style = statusStyles[item.status];
                const Icon = style.icon;
                return (
                  <div
                    key={item.label}
                    className="prospecting-print-break grid gap-5 border border-white/[0.08] bg-white/[0.025] p-5 sm:grid-cols-[7rem_1fr_auto] sm:items-start"
                  >
                    <div>
                      <div className="text-3xl font-semibold text-white">{item.score}</div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                        <div className={`h-full bg-gradient-to-r ${scoreTone(item.score)}`} style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">{item.label}</h2>
                      <p className="mt-2 text-sm leading-6 text-white/62">{item.finding}</p>
                      <p className="mt-3 text-sm leading-6 text-white/82">{item.priority}</p>
                    </div>
                    <div className={`inline-flex items-center gap-2 border px-3 py-2 text-xs font-semibold ${style.className}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {style.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ReportBand>

        <ReportBand>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionLead
                icon={Eye}
                eyebrow="Evidence map"
                title="What AI, Google, and buyers are being asked to figure out"
                copy="A strong report should show why the prospect is being contacted. These findings turn a cold pitch into a specific business case."
              />
              <div className="mt-9 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {report.evidence.map((item) => (
                  <div key={item.label} className="prospecting-print-break grid gap-4 py-6 md:grid-cols-[10rem_1fr]">
                    <p className="digital-accent text-xs uppercase text-white/42">{item.label}</p>
                    <div>
                      <p className="text-base leading-7 text-white/82">{item.signal}</p>
                      <p className="mt-2 text-sm leading-6 text-amber-100/78">{item.risk}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prospecting-print-break border border-white/[0.1] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6">
              <p className="homepage-eyebrow">Buyer questions</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">Questions this business should answer before the call</h2>
              <div className="mt-7 space-y-4">
                {report.buyerQuestions.map((question) => (
                  <div key={question} className="flex gap-3 border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
                    <Search className="mt-1 h-4 w-4 flex-none text-sky-200" />
                    <p className="text-sm leading-6 text-white/72">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ReportBand>

        <ReportBand>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
            <SectionLead
              icon={Zap}
              eyebrow="Revenue leakage"
              title="Where the business can lose the lead before anyone notices"
              copy="No fake math. No invented dollar amount. Just the practical moments where unclear signals, weak proof, or slow response can cost calls and form fills."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {report.revenueRisks.map((risk) => (
                <div key={risk} className="prospecting-print-break border-t border-white/[0.1] pt-5">
                  <ShieldCheck className="h-5 w-5 text-amber-200" />
                  <p className="mt-4 text-base leading-7 text-white/78">{risk}</p>
                </div>
              ))}
            </div>
          </div>
        </ReportBand>

        <ReportBand>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
            <SectionLead
              icon={FileText}
              eyebrow="30-day fix plan"
              title="The fastest practical path from unclear to recommendation-ready"
              copy="This gives the prospect a believable path forward and positions Civive as the operator who can actually execute it."
            />
            <div className="grid gap-4">
              {report.cleanupPlan.map((step, index) => (
                <div
                  key={step.phase}
                  className="prospecting-print-break grid gap-5 border-l border-white/[0.12] py-2 pl-6 sm:grid-cols-[7rem_1fr]"
                >
                  <div>
                    <p className="digital-accent text-xs text-white/42">{step.phase}</p>
                    <p className="mt-2 text-sm text-white/42">Phase {index + 1}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/66">{step.work}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ReportBand>

        <section className="relative border-t border-white/[0.08] px-4 py-16 sm:py-20">
          <div className="container mx-auto">
            <div className="prospecting-print-break grid gap-10 border border-white/[0.1] bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="homepage-eyebrow">Recommended next step</p>
                <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Turn this report into a cleaned-up public presence and a faster lead response system.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/66">
                  Civive can start with the AI Search Readiness Audit, then build the practical fix pack: clearer
                  service language, FAQs, schema, profile alignment, contact path, CRM handoff, and follow-up.
                </p>
              </div>
              <a
                href="/contact"
                className="homepage-primary-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Request cleanup plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ReportBand({ children }: { children: ReactNode }) {
  return (
    <section className="relative border-t border-white/[0.08] px-4 py-14 sm:py-16">
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

function SectionLead({
  icon: Icon,
  eyebrow,
  title,
  copy,
}: {
  icon: typeof Activity;
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-5 inline-grid h-11 w-11 place-items-center border border-white/[0.1] bg-white/[0.045]">
        <Icon className="h-5 w-5 text-sky-200" />
      </div>
      <p className="homepage-eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-white/64">{copy}</p>
    </div>
  );
}
