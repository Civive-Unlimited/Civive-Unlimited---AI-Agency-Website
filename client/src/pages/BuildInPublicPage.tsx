import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { buildLog, pageMeta } from "@/content/site";

const selfApplication = [
  {
    title: "The site is the visibility testbed",
    copy: "Homepage positioning, service pages, industry pages, FAQs, resources, and internal links are being built as the same system Civive sells.",
  },
  {
    title: "The content becomes public proof",
    copy: "YouTube, social posts, founder notes, and resource pages can document what changed, why it changed, and what was learned.",
  },
  {
    title: "The assistant and lead path are part of the system",
    copy: "AI visibility should not stop at a page view. The website, chat assistant, contact form, CRM handoff, and follow-up need to work together.",
  },
  {
    title: "The proof is process before portfolio",
    copy: "Until client case studies exist, trust comes from specificity, consistency, useful explanations, and public execution.",
  },
];

const testingNow = [
  {
    title: "Can the site explain Civive clearly?",
    copy: "Every page should make the business easier for a human buyer and an answer engine to understand.",
  },
  {
    title: "Can the content map create YouTube and social topics?",
    copy: "The resource hub is structured so each insight can become a video, article, short post, or report talking point.",
  },
  {
    title: "Can the lead path capture intent cleanly?",
    copy: "The report form, AI assistant, CRM tags, and follow-up path are part of the operating system, not an afterthought.",
  },
];

export default function BuildInPublicPage() {
  return (
    <>
      <Seo {...pageMeta.build} path="/build-in-public" />
      <AuthorityShell>
        <PageHero
          eyebrow="Build in Public"
          title="Civive is applying the visibility system to itself first."
          copy="The business is early. There are no fake case studies, no borrowed logos, and no pretend portfolio. The first proof is the public build: the site, content, schema-ready structure, AI assistant, lead capture, and founder-led documentation."
          primaryCta={{ label: "See If the $99 Audit Fits", href: "/contact" }}
          secondaryCta={{ label: "Explore resources", href: "/resources" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Proof rule</p>
            <p className="mt-5 text-sm leading-6 text-white/68">
              No fake testimonials. No fake metrics. No authority theater. The
              proof layer is execution, documentation, and visible improvement.
            </p>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Current log"
              title="What is being built, tested, and documented."
              copy="This page can grow into a public archive of strategy decisions, website changes, content experiments, assistant improvements, and visibility lessons."
            />
            <EditorialList items={buildLog} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Self-application"
              title="Everything Civive builds for itself becomes a reusable delivery asset."
              copy="The goal is not to look bigger than the business is. The goal is to build the operating surface that future clients can understand, inspect, and buy into."
            />
            <EditorialList items={selfApplication} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Testing now"
              title="The questions guiding the build."
              copy="These are the practical checks that turn build-in-public into proof of thought, proof of process, and proof of execution."
            />
            <EditorialList items={testingNow} />
          </div>
        </AuthoritySection>

        <FinalCta
          title="If this is the kind of system you want for your business, start with the report."
          copy="The same clarity work being applied to Civive can be applied to a service business that needs better AI, Google, and buyer visibility."
        />
      </AuthorityShell>
    </>
  );
}
