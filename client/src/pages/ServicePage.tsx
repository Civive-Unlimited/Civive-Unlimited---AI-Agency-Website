import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { getServicePage, type ServicePageContent } from "@/content/site";
import NotFound from "@/pages/NotFound";

export default function ServicePage({ slug }: { slug?: string }) {
  const service = getServicePage(slug);

  if (!service) {
    return <NotFound />;
  }

  const relatedServices = service.relatedSlugs
    .map(relatedSlug => getServicePage(relatedSlug))
    .filter(
      (related): related is ServicePageContent => related !== undefined
    );
  const localAgencyAnchorBySlug: Record<string, string> = {
    "crm-lead-follow-up":
      "AI lead follow-up automation for Springfield service businesses",
    "missed-call-recovery":
      "missed-call recovery from a local AI agency",
    "google-business-profile-optimization":
      "Springfield AI visibility and Google profile support",
    "website-design-service-businesses":
      "AI systems for Springfield service businesses",
    "review-automation":
      "local AI agency for review and follow-up systems",
  };
  const localAgencyAnchor =
    localAgencyAnchorBySlug[service.slug] ?? "AI agency in Springfield, MO";

  return (
    <>
      <Seo {...service.meta} path={`/services/${service.slug}`} />
      <AuthorityShell>
        <PageHero
          eyebrow={service.name}
          title={service.h1}
          copy={service.intro}
          primaryCta={{ label: service.primaryCta, href: "/contact" }}
          secondaryCta={{
            label: "Springfield service area",
            href: "/service-areas/springfield-mo",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Local signal</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              Built for local service businesses in Springfield, Missouri and
              Missouri markets where Google, Maps, AI answers, and fast
              follow-up all affect who gets contacted.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-2">
              <a href="/" className="transition-colors hover:text-white">
                Civive Unlimited homepage
              </a>
              <a
                href="/ai-search-audit"
                className="transition-colors hover:text-white"
              >
                AI Search Visibility Audit
              </a>
              <a
                href="/ai-agency-springfield-mo"
                className="transition-colors hover:text-white"
              >
                {localAgencyAnchor}
              </a>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Problem"
              title={service.problem.title}
              copy={service.problem.copy}
            />
            <EditorialList items={service.fixes} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What Civive fixes"
              title="The work connects visibility, trust, and lead response."
              copy="The goal is not more disconnected tools. The goal is a cleaner public footprint and a lead path the owner can actually operate."
            />
            <EditorialList items={service.deliverables} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Who it is for"
              title="Best fit for service businesses that need clearer demand signals."
              copy="Civive keeps the copy plain and the scope practical so owners can see what changes, why it matters, and how it connects to booked work."
            />
            <EditorialList items={service.audience} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeader
              eyebrow="Related services"
              title="Internal paths that support this service."
              copy="These links connect the service page back to the audit, homepage, Springfield service area, and related implementation pages."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="/"
                className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
              >
                <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                  Civive Unlimited
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  Start at the homepage for the full visibility and lead
                  automation foundation.
                </p>
              </a>
              <a
                href="/ai-search-audit"
                className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
              >
                <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                  AI Search Visibility Audit
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  Use the audit to find the right fix order before building more
                  pages or automation.
                </p>
              </a>
              {relatedServices.map(related => (
                <a
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {related.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {related.meta.description}
                  </p>
                </a>
              ))}
              <a
                href="/ai-agency-springfield-mo"
                className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
              >
                <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                  Springfield AI agency
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  See how Civive connects this service into a wider local AI
                  agency system for visibility, lead capture, follow up, and
                  booking.
                </p>
              </a>
              <a
                href="/service-areas/springfield-mo"
                className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
              >
                <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                  Springfield, MO service area
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  See how Civive supports Springfield service businesses with
                  local visibility and lead automation.
                </p>
              </a>
            </div>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Start with the service that fixes the first real leak."
          copy="Bring the website, Google Business Profile, service area, and the services that matter most. Civive will help map the fastest practical fix."
          primaryCta={{ label: service.primaryCta, href: "/contact" }}
          secondaryCta={{
            label: "Read the audit page",
            href: "/ai-search-audit",
          }}
        />
      </AuthorityShell>
    </>
  );
}
