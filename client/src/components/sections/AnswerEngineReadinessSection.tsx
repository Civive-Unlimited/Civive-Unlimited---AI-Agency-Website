import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  MapPinned,
  MessageSquareText,
  Route,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useRef } from "react";

const evidenceSignals = [
  {
    title: "Business facts",
    copy: "Name, phone, website, address or service area, founder context, and contact path match across the site and public profiles.",
    icon: ShieldCheck,
  },
  {
    title: "Service fit",
    copy: "The site explains the exact jobs the business wants, who each service helps, what problems it solves, and when to call.",
    icon: FileSearch,
  },
  {
    title: "Local relevance",
    copy: "Service-area language, Google Business Profile signals, directions, reviews, and local pages point to the same real market.",
    icon: MapPinned,
  },
  {
    title: "Trust evidence",
    copy: "Real reviews, policies, credentials, photos, process notes, and proof are visible without fake awards or unsupported claims.",
    icon: Star,
  },
  {
    title: "Structured answers",
    copy: "FAQs, headings, schema, internal links, sitemap, robots, and llms.txt help crawlers parse what the page already says.",
    icon: MessageSquareText,
  },
  {
    title: "Lead path",
    copy: "Calls, forms, booking, CRM handoff, missed-call recovery, and follow-up are clear enough that new visibility can turn into a job.",
    icon: Route,
  },
];

const riskSignals = [
  "Vague slogans that never name the service, market, or next step.",
  "Schema that claims reviews, ratings, locations, or services the page does not show.",
  "Thin city pages, copied service pages, fake proof, and disconnected profile facts.",
  "Forms, phone links, booking links, or follow-up paths that fail after the visitor is convinced.",
];

export default function AnswerEngineReadinessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="answer-engine-readiness"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16"
          >
            <div className="max-w-xl">
              <p className="homepage-eyebrow">Answer engine readiness</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Make the business easy for AI to explain without guessing.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
                ChatGPT, Gemini, Grok, Perplexity, Google, and voice assistants
                can only work with public evidence they can access, parse, and
                trust. The Visibility Report looks for the signals that reduce
                confusion before a buyer ever calls.
              </p>
              <div className="mt-8 border-y border-white/[0.08] py-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-4 w-4 flex-shrink-0 text-[#ffcf6a]" />
                  <p className="text-sm leading-6 text-white/62">
                    No honest provider can guarantee placement inside an AI
                    answer. The practical goal is clearer facts, stronger
                    crawlability, better proof, and a cleaner lead path.
                  </p>
                </div>
              </div>
              <a
                href="/ai-search-report"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-colors hover:text-white"
              >
                See the Visibility Report
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {evidenceSignals.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={false}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.42,
                        delay: 0.08 + index * 0.035,
                      }}
                      className="border-y border-white/[0.08] py-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#19c2ff]/18 bg-[#19c2ff]/8 text-[#9fdcff]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white/92">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/58">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="border-y border-white/[0.08] py-6">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="homepage-eyebrow">What hurts trust</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      These shortcuts make the site harder to believe.
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {riskSignals.map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#19c2ff]" />
                        <p className="text-sm leading-6 text-white/62">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="/resources/schema-for-ai-search-local-businesses"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Search className="h-4 w-4" />
                Read the schema and answer-structure guide
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
