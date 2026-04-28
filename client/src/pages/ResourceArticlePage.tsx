import {
  AuthoritySection,
  AuthorityShell,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { getResourceArticle } from "@/content/site";
import NotFound from "@/pages/NotFound";

type ResourceArticlePageProps = {
  slug?: string;
};

export default function ResourceArticlePage({
  slug,
}: ResourceArticlePageProps) {
  const article = getResourceArticle(slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        path={`/resources/${article.slug}`}
        type="article"
      />
      <AuthorityShell>
        <PageHero
          eyebrow={article.eyebrow}
          title={article.title.replace(" | Civive Unlimited", "")}
          copy={article.summary}
          primaryCta={article.primaryCta}
          secondaryCta={article.secondaryCta}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Intent</p>
            <p className="mt-5 text-sm leading-6 text-white/68">
              {article.intent}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/62 sm:grid-cols-2">
              <p>Updated: {article.updated}</p>
              <p>{article.readTime}</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-16">
            <SectionHeader
              eyebrow="Direct answer"
              title="What this page helps you decide."
              copy={article.summary}
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {article.sections.map(section => (
                <article key={section.title} className="py-8">
                  <p className="homepage-eyebrow">{section.eyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-white/64">
                    {section.copy}
                  </p>
                  {section.bullets && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map(item => (
                        <li
                          key={item}
                          className="border-b border-white/[0.08] pb-3 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-16">
            <SectionHeader
              eyebrow="Buyer questions"
              title="FAQs this topic should answer before a sales call."
              copy="These answers are written for buyers first, then formatted clearly enough for search engines and answer systems to parse."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {article.faqs.map(faq => (
                <div key={faq.question} className="py-7">
                  <h2 className="text-xl font-medium text-white/92">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="mx-auto max-w-4xl">
            <p className="homepage-eyebrow">Internal next steps</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Use this article as a doorway into the right implementation path.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {article.relatedLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-y border-white/[0.08] py-5 text-sm font-medium text-white/74 transition-colors hover:border-white/[0.22] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <FinalCta title={article.finalCta.title} copy={article.finalCta.copy} />
      </AuthorityShell>
    </>
  );
}
