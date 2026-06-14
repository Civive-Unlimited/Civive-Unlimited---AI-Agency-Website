import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { aiAgencySpringfieldFaqs, pageMeta, site } from "@/content/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whatCiviveDoes = [
  {
    title: "AI search visibility",
    copy: "Make the business easier for Google, Maps, ChatGPT, Gemini, Perplexity, and buyers to understand.",
    href: "/ai-search-report",
  },
  {
    title: "AI automation",
    copy: "Use practical automation for intake, lead routing, reminders, follow up, reviews, and reactivation.",
    href: "/visibility-system",
  },
  {
    title: "AI receptionist setup",
    copy: "Help service businesses answer, qualify, route, and document more leads without pretending AI should handle everything.",
    href: "/services/ai-receptionist",
  },
  {
    title: "Missed-call recovery",
    copy: "Text back quickly after missed calls, capture the need, and keep the lead from going cold.",
    href: "/services/missed-call-recovery",
  },
  {
    title: "CRM and lead follow-up automation",
    copy: "Organize contacts, opportunities, reminders, estimate follow up, booking handoff, and pipeline movement.",
    href: "/services/crm-lead-follow-up",
  },
  {
    title: "Google Business Profile optimization",
    copy: "Clean up categories, services, descriptions, photos, reviews, Q&A, service areas, and website alignment.",
    href: "/services/google-business-profile-optimization",
  },
  {
    title: "Service business websites",
    copy: "Build pages that explain who the business helps, where it works, what it does, why it is trusted, and how to contact it.",
    href: "/services/website-design-service-businesses",
  },
  {
    title: "Review automation and CiviveOS",
    copy: "Support reputation, lead response, booking, conversations, and follow up through a cleaner operating base.",
    href: "/civive-os",
  },
];

const workWithCiviveOptions = [
  {
    title: "Done For You AI Growth Systems",
    copy: "Civive can help build and improve the systems your business needs to get found, capture leads, answer faster, follow up, request reviews, and book more jobs. This is for service businesses that want the work handled instead of trying to figure everything out alone.",
    cta: "See If the $99 Audit Fits",
    href: site.visibilityReportRequestUrl,
  },
  {
    title: "Set Up + Handoff",
    copy: "Civive can set up the core visibility, follow-up, receptionist, review, and automation systems, then show you or your team how to use them. This is for owners who want help getting everything in place but still want control of the system after launch.",
    cta: "Start With a Report",
    href: "/ai-search-report",
  },
  {
    title: "CiviveOS",
    copy: "CiviveOS gives service business owners the tools, reports, templates, workflows, and guidance to work through their visibility and lead systems themselves. This is for owners who want to subscribe to the system and use Civive’s tools to improve their website, Google Business Profile, follow-up, reviews, and AI readiness.",
    cta: "Explore CiviveOS",
    href: "/civive-os",
  },
];

const visibilitySignals = [
  "Clear service pages",
  "Google Business Profile clarity",
  "Consistent entity signals",
  "Structured data that matches visible content",
  "Real reviews and trust signals",
  "Springfield and Missouri relevance",
  "Content that answers buyer questions directly",
];

const automationItems = [
  {
    title: "Missed-call text back",
    copy: "Respond quickly when a local buyer calls and no one can answer.",
    href: "/services/missed-call-recovery",
  },
  {
    title: "Lead routing",
    copy: "Send the right lead context to the right place instead of dumping every inquiry into one inbox.",
  },
  {
    title: "Appointment and estimate follow up",
    copy: "Keep prospects moving after the first conversation, quote request, or booking attempt.",
  },
  {
    title: "Review requests and CRM reminders",
    copy: "Turn completed work and stale opportunities into clear next actions.",
    href: "/services/crm-lead-follow-up",
  },
  {
    title: "Pipeline automation",
    copy: "Track where each lead stands so follow up is not dependent on memory.",
    href: "/civive-os",
  },
  {
    title: "Customer reactivation",
    copy: "Reach back into old contacts with useful, approved campaigns when there is a real reason to reconnect.",
  },
];

const receptionistItems = [
  "AI receptionist",
  "Missed-call recovery",
  "Text-back automation",
  "After-hours lead capture",
  "Appointment request handling",
  "Lead qualification",
];

const profileItems = [
  "Categories",
  "Services",
  "Descriptions",
  "Photos",
  "Reviews",
  "Q&A",
  "Local consistency",
  "Service area clarity",
];

const websiteSignals = [
  "Who the business helps",
  "Where the business works",
  "What services it provides",
  "What problems it solves",
  "What makes it trustworthy",
  "How a visitor should contact or book",
];

const industryLinks = [
  { label: "HVAC companies", href: "/industries/hvac" },
  { label: "Plumbers", href: "/industries/plumbing" },
  { label: "Electricians", href: "/industries/electrical" },
  { label: "Roofers", href: "/industries/roofing" },
  { label: "Contractors", href: "/industries" },
  { label: "Med spas", href: "/industries/med-spas" },
  { label: "Real estate teams", href: "/industries/real-estate-teams" },
  { label: "Law firms", href: "/industries/law-firms" },
  { label: "Other local service businesses", href: "/industries" },
];

const bigCompanySystems = [
  "People watching leads",
  "People running ads",
  "People fixing the website",
  "People answering phones",
  "People following up",
  "People requesting reviews",
];

const processSteps = [
  {
    title: "Report your visibility",
    copy: "Start with the website, Google Business Profile, services, service area, content, schema, and lead path.",
  },
  {
    title: "Find where leads are being lost",
    copy: "Look for missed calls, slow replies, weak forms, unclear booking, scattered CRM notes, and follow up gaps.",
  },
  {
    title: "Fix your search and AI clarity",
    copy: "Make the business, services, location, trust signals, and answers easier for Google, AI tools, and buyers to understand.",
  },
  {
    title: "Install lead capture and follow-up systems",
    copy: "Connect calls, forms, chat, booking, reminders, missed-call recovery, and CRM follow up into one practical flow.",
  },
  {
    title: "Track what is working and improve it",
    copy: "Use the data from leads, bookings, replies, reviews, and pipeline movement to keep tightening the system.",
  },
];

const credibility = [
  {
    title: "Built by Scott Berry",
    copy: "Civive is built by Scott Berry, not a faceless software shop using generic AI language.",
  },
  {
    title: "25+ year HVAC journeyman",
    copy: "Scott understands what it feels like when calls, jobs, customers, scheduling, and follow up have to work in the real world.",
  },
  {
    title: "Built for local service businesses",
    copy: "The systems are made for operators that need visibility, speed, follow up, and booked jobs, not theory.",
  },
  {
    title: "Based in Springfield, Missouri",
    copy: "Civive is local to Springfield and focused on helping service businesses compete with clearer systems.",
  },
  {
    title: "Practical systems, not theory",
    copy: "The work is about getting found, answering faster, following up automatically, and making the next step clear.",
  },
  {
    title: "Focused on booked work",
    copy: "Visibility is only useful when it turns into calls, forms, appointments, follow up, and real conversations.",
  },
];

export default function AIAgencySpringfieldPage() {
  return (
    <>
      <Seo {...pageMeta.aiAgencySpringfield} path="/ai-agency-springfield-mo" />
      <AuthorityShell>
        <PageHero
          eyebrow="Springfield AI agency"
          title="AI Agency in Springfield, MO for Service Businesses"
          copy="Civive Unlimited is an AI agency in Springfield, Missouri helping service businesses get found online, capture more leads, respond faster, and book more jobs with AI search visibility, AI receptionists, missed-call recovery, CRM automation, websites, Google Business Profile improvements, and CiviveOS."
          primaryCta={{
            label: "See If the $99 Audit Fits",
            href: "/contact",
          }}
          secondaryCta={{
            label: "See How Civive Helps Service Businesses",
            href: "/visibility-system",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">
              DONE FOR YOU, HANDED OFF, OR DO IT YOURSELF
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              <h2 className="text-xl font-semibold leading-snug text-white/92">
                AI systems built around how service businesses actually work.
              </h2>
              <p>
                Some business owners want the work done for them. Some want the
                system set up and handed over. Others want the tools, reports,
                templates, and workflows to run the system themselves.
              </p>
              <p>Civive supports all three.</p>
              <p>
                We can help build the visibility, follow-up, receptionist,
                website, review, and automation systems for you, set them up and
                show your team how to use them, or give you CiviveOS so you can
                work through the system yourself.
              </p>
              <p>
                The goal is simple: get found, respond faster, stop losing
                leads, and book more jobs.
              </p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What Civive does"
              title="AI systems for Springfield service businesses that need real leads, faster response, and cleaner follow-up."
              copy="Civive helps smaller companies install systems that bigger companies usually have: clearer visibility, faster intake, cleaner follow up, and a better path from search to booked work."
            />
            <EditorialList items={whatCiviveDoes} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="Ways to work"
              title="Three Ways to Work With Civive"
              copy="Every service business owner works differently. Some want Civive to build the system for them. Some want it set up, handed over, and explained so their team can run it. Others want to subscribe to CiviveOS and work through the system themselves."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {workWithCiviveOptions.map(option => (
                <a
                  key={option.title}
                  href={option.href}
                  className="group flex min-h-[20rem] flex-col justify-between border-y border-white/[0.08] py-7 transition-colors hover:border-white/[0.22]"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-white/92 group-hover:text-white">
                      {option.title}
                    </h2>
                    <p className="mt-5 text-sm leading-6 text-white/62">
                      {option.copy}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/76 transition-colors group-hover:text-white">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="AI search visibility"
              title="Being found is no longer only about having a basic website."
              copy="Springfield service businesses need public signals that help Google and AI answer engines understand who they help, where they work, and why a buyer should trust them."
            />
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {visibilitySignals.map(signal => (
                  <div
                    key={signal}
                    className="flex gap-3 border-b border-white/[0.08] pb-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#19c2ff]" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="/ai-search-report"
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    Visibility Report
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Find the signals that make your business easier or harder to
                    recommend.
                  </p>
                </a>
                <a
                  href="/visibility-system"
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    AI Search Visibility System
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Turn visibility findings into clearer pages, links, schema,
                    and lead capture.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="AI automation"
              title="Automation should help you capture and follow up with leads."
              copy="AI automation for service businesses should be practical. It should help the owner answer faster, route leads, follow up, request reviews, and keep the pipeline from going stale."
            />
            <EditorialList items={automationItems} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="AI receptionist"
              title="Many local businesses lose money because the first response is too slow."
              copy="Missed calls, after-hours inquiries, weak intake, and no follow up can hand the job to a competitor. Civive helps build a response layer with clear rules and a clean handoff."
            />
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {receptionistItems.map(item => (
                  <p
                    key={item}
                    className="border-b border-white/[0.08] pb-3 text-sm text-white/70"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["/ai-receptionist", "AI receptionist"],
                  ["/services/ai-receptionist", "AI receptionist setup"],
                  ["/services/missed-call-recovery", "Missed-call recovery"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="group border-y border-white/[0.08] py-5 text-sm font-medium text-white/70 transition-colors hover:border-white/[0.22] hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Google Business Profile"
              title="Google Business Profile optimization affects Maps, trust, and AI understanding."
              copy="For a Springfield service business, the profile should reinforce the same story as the website: what you do, where you work, how to contact you, and why buyers should trust the next step."
            />
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {profileItems.map(item => (
                  <p
                    key={item}
                    className="border-b border-white/[0.08] pb-3 text-sm text-white/70"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="/services/google-business-profile-optimization"
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    Google Business Profile optimization
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Align categories, services, descriptions, reviews, and the
                    website path.
                  </p>
                </a>
                <a
                  href="/service-areas/springfield-mo"
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    Springfield service area
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    See how Civive supports Springfield service businesses.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Websites"
              title="A local service business website should do more than look good."
              copy="The page should explain the business clearly enough for a buyer, Google, and AI tools to know what problem it solves and what step to take next."
            />
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {websiteSignals.map(signal => (
                  <p
                    key={signal}
                    className="border-b border-white/[0.08] pb-3 text-sm text-white/70"
                  >
                    {signal}
                  </p>
                ))}
              </div>
              <a
                href="/services/website-design-service-businesses"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors hover:text-white"
              >
                Website design for service businesses
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Who we help"
              title="Built for local service businesses where speed and trust decide the job."
              copy="Civive works best for service businesses that need buyers to understand the offer quickly and need the lead path to keep moving after the first touch."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryLinks.map(link => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="group border-y border-white/[0.08] py-5 transition-colors hover:border-white/[0.22]"
                >
                  <h3 className="text-lg font-semibold text-white/88 group-hover:text-white">
                    {link.label}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-white/56 group-hover:text-white/80">
                    Open industry path
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why AI systems matter"
              title="Bigger companies often win because they have people and systems watching every step."
              copy="Smaller service businesses usually do not have a full marketing department, front desk team, follow-up team, review team, and web team. Civive helps install practical systems so smaller companies can compete without hiring a large team."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {bigCompanySystems.map(item => (
                <p
                  key={item}
                  className="border-b border-white/[0.08] pb-3 text-sm text-white/70"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="The Civive process"
              title="A simple path from unclear signals to better lead handling."
              copy="The process starts with what is visible now, then moves into the few fixes most likely to help the business get found, answer faster, and book more work."
            />
            <EditorialList items={processSteps} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why Civive"
              title="Why work with Civive Unlimited."
              copy="Civive Unlimited is based in Springfield, Missouri and built around the real problems service businesses face: visibility, speed, follow-up, and booked jobs. The page does not use fake testimonials, fake awards, or fake results."
            />
            <EditorialList items={credibility} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="FAQs"
              title="Questions Springfield service businesses ask before hiring a local AI agency."
              copy="Clear answers for service business owners comparing AI agencies, automation systems, and lead follow-up help."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {aiAgencySpringfieldFaqs.map(faq => (
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

        <FinalCta
          title="Ready to make your business easier to find and faster to respond?"
          copy="Start with a Visibility Report. Civive will look at the public signals, lead path, follow up gaps, and the systems that can help turn more demand into booked jobs."
          primaryCta={{
            label: "See If the $99 Audit Fits",
            href: "/contact",
          }}
          secondaryCta={{
            label: "Explore CiviveOS",
            href: "/civive-os",
          }}
        />
      </AuthorityShell>
    </>
  );
}
