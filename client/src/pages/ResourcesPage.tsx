import {
  AuthoritySection,
  AuthorityShell,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { pageMeta, resourceArticles, resourceTopics } from "@/content/site";

const contentLoops = [
  {
    title: "Founder video",
    copy: "A practical breakdown from the Civive build, an audit observation, or a visibility cleanup decision.",
  },
  {
    title: "Search article",
    copy: "A crawlable explanation that can support SEO, AEO, GEO, voice search, and future internal links.",
  },
  {
    title: "Social post",
    copy: "A short public note, lesson, checklist, or before/after explanation pulled from the same source idea.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Seo {...pageMeta.resources} path="/resources" />
      <AuthorityShell>
        <PageHero
          eyebrow="Resources and Insights"
          title="The content engine for AI search, local visibility, and the Civive build."
          copy="This hub is the foundation for topical authority. It is designed to turn real work into articles, YouTube topics, social posts, founder notes, audit education, and future sales enablement."
          primaryCta={{ label: "Get an AI Search Visibility Audit", href: "/contact" }}
          secondaryCta={{
            label: "Read the public build",
            href: "/build-in-public",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">No fake archive</p>
            <p className="mt-5 text-sm leading-6 text-white/68">
              The structure is live now. Individual articles can be added as the
              Civive build creates real examples, decisions, and lessons worth
              publishing.
            </p>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeader
              eyebrow="Published resources"
              title="Start with the buyer-intent resources that support the audit."
              copy="These pages are intentionally tied to checklist, comparison, cost, alternative, best-fit, mistakes, scope, and implementation intent so they support the commercial audit page instead of becoming a random blog."
            />
            <div className="grid gap-4">
              {resourceArticles.map(article => (
                <a
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/38">
                    <span>{article.eyebrow}</span>
                    <span>{article.readTime}</span>
                    <span>Updated {article.updated}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white/92 transition-colors group-hover:text-white">
                    {article.title.replace(" | Civive Unlimited", "")}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62">
                    {article.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeader
              eyebrow="Pillar topics"
              title="A topical authority map that can grow without becoming random."
              copy="Each topic is useful on the website, in YouTube planning, in short social posts, and in future client education."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {resourceTopics.map((topic, index) => (
                <div
                  key={topic.slug}
                  className="grid gap-5 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="text-xl font-medium text-white/92">
                      {topic.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                      {topic.copy}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topic.formats.map(format => (
                        <span
                          key={format}
                          className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/58"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {contentLoops.map(loop => (
              <div
                key={loop.title}
                className="border-y border-white/[0.08] py-7"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {loop.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/62">
                  {loop.copy}
                </p>
              </div>
            ))}
          </div>
        </AuthoritySection>

        <FinalCta
          title="Use the audit to create the first useful content map."
          copy="The same questions that expose weak visibility signals can become service pages, FAQs, articles, videos, and social proof-of-work notes."
        />
      </AuthorityShell>
    </>
  );
}
