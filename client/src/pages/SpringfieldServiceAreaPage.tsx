import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { areasServed, pageMeta, servicePages } from "@/content/site";

const springfieldProblems = [
  {
    title: "The business is findable by name but weak for non-branded searches",
    copy: "Owners can show up when someone already knows them, but lose demand when buyers search by service, area, problem, or urgency.",
  },
  {
    title:
      "The Google Business Profile and website do not reinforce each other",
    copy: "Categories, services, descriptions, contact paths, and local language need to match so Google, Maps, and buyers get the same signal.",
  },
  {
    title: "Calls and forms arrive but the follow-up path is slow",
    copy: "Missed calls, scattered inboxes, weak booking paths, and manual follow-up can waste the local visibility the business already has.",
  },
];

const springfieldWorkflow = [
  {
    title: "Clarify the public facts",
    copy: "Start with name, address, phone, website, service area, categories, services, and the plain-language offer.",
  },
  {
    title: "Strengthen the service pages",
    copy: "Build distinct pages for the services buyers search for, then connect them to the homepage, report path, and local page.",
  },
  {
    title: "Connect lead response",
    copy: "Make calls, forms, booking, missed-call recovery, CRM notes, reviews, and follow-up part of the same operating system.",
  },
];

const localVisibilityReasons = [
  {
    title: "AI answers need clean entities",
    copy: "ChatGPT, Gemini, Perplexity, and other tools work better when the business has clear facts, services, locations, and answers in crawlable places.",
  },
  {
    title: "Maps decisions happen fast",
    copy: "A Springfield buyer comparing providers may decide from a profile, service page, review signal, or first response before reading a long site.",
  },
  {
    title: "Lead speed protects the ranking work",
    copy: "Local visibility creates opportunity, but missed-call recovery, booking, and follow-up help keep that opportunity from leaking.",
  },
];

export default function SpringfieldServiceAreaPage() {
  return (
    <>
      <Seo {...pageMeta.springfield} path="/service-areas/springfield-mo" />
      <AuthorityShell>
        <PageHero
          eyebrow="Springfield, Missouri"
          title="AI Search Visibility and Lead Automation for Springfield Service Businesses"
          copy="Civive Unlimited helps Springfield service businesses make their website, Google Business Profile, service pages, reviews, schema, calls, forms, booking, and follow-up easier for buyers and AI tools to understand."
          primaryCta={{
            label: "Get a Free Fit Check",
            href: "/contact",
          }}
          secondaryCta={{ label: "Book a Call", href: "/contact" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Local focus</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              Civive is based in Springfield, MO and supports Missouri service
              businesses that need clearer local search signals and a better
              path from discovery to booked work.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-2">
              <a href="/" className="transition-colors hover:text-white">
                Civive Unlimited
              </a>
              <a
                href="/ai-search-report"
                className="transition-colors hover:text-white"
              >
                Visibility Report
              </a>
              <a
                href="/ai-agency-springfield-mo"
                className="transition-colors hover:text-white"
              >
                AI agency in Springfield, MO
              </a>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Local AI agency"
              title="Civive also serves as a local AI agency for Springfield service businesses."
              copy="The Springfield service-area work connects into the broader AI agency system: AI search visibility, AI automation, AI receptionist setup, missed-call recovery, CRM lead follow up, Google Business Profile optimization, websites, reviews, and CiviveOS."
            />
            <div className="border-y border-white/[0.08] py-7">
              <p className="text-base leading-7 text-white/68">
                If the business needs a practical local partner instead of a
                generic software shop, start with the{" "}
                <a
                  href="/ai-agency-springfield-mo"
                  className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Springfield AI agency page
                </a>
                . It explains how Civive helps smaller service businesses get
                found, answer faster, follow up automatically, and turn more
                leads into booked jobs.
              </p>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Who Civive helps"
              title="Local operators that win or lose revenue when buyers search by need."
              copy="The work is built for service businesses where trust, location, reviews, response speed, and a clear offer affect who gets contacted first."
            />
            <EditorialList
              items={areasServed.slice(2).map(area => ({
                title: area,
                copy: `${area} need public signals that explain the services offered, the market served, and the fastest way for a buyer to contact or book.`,
              }))}
            />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Problems"
              title="Where Springfield service businesses lose money online."
              copy="The most expensive leaks are usually not mysterious. They come from unclear signals, weak service pages, inconsistent profile facts, and slow follow-up."
            />
            <EditorialList items={springfieldProblems} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <SectionHeader
              eyebrow="Services available in Springfield"
              title="The local visibility and lead-response services Civive can support."
              copy="Each service has a distinct role, so the site can rank and convert without turning into duplicate service copy."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {servicePages.map(service => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {service.intro}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="How the system works"
              title="Clean public signals first, then connect the lead path."
              copy="Civive starts with what buyers and machines can see, then connects the site and profile to the response system behind it."
            />
            <EditorialList items={springfieldWorkflow} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Industries served"
              title="Built for practical local service categories."
              copy="These categories depend on being understood at the exact moment a buyer needs help."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areasServed.slice(2).map(area => (
                <a
                  key={area}
                  href="/industries"
                  className="border-b border-white/[0.08] pb-3 text-base font-medium text-white/82 transition-colors hover:border-white/[0.22] hover:text-white"
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why local visibility matters"
              title="Search visibility and lead response need to support each other."
              copy="Showing up is only useful when the business is easy to understand, easy to trust, and easy to contact."
            />
            <EditorialList items={localVisibilityReasons} />
          </div>
        </AuthoritySection>

        <FinalCta
          title="Make the Springfield signals match the business people can actually hire."
          copy="Send the website, Google Business Profile, service area, and the services that matter most. Civive will map what to clean up first."
          primaryCta={{
            label: "Get a Free Fit Check",
            href: "/contact",
          }}
          secondaryCta={{ label: "Book a Call", href: "/contact" }}
        />
      </AuthorityShell>
    </>
  );
}
