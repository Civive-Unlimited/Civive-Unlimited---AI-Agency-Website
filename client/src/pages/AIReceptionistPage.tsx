import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { aiReceptionistFaqs, pageMeta } from "@/content/site";

const receptionistPieces = [
  {
    title: "Missed-call recovery",
    copy: "When the team cannot answer, the system should quickly acknowledge the lead, collect the reason for calling, and create a follow-up path instead of letting the buyer disappear.",
  },
  {
    title: "Service intake",
    copy: "The receptionist should collect the service type, location, timing, urgency, access notes, and contact details needed for a useful human or calendar handoff.",
  },
  {
    title: "Booking and escalation rules",
    copy: "The assistant should know when to book, when to collect more detail, when to route to a person, and when not to overstep the business rules.",
  },
  {
    title: "CRM and follow-up context",
    copy: "Every conversation should leave usable notes, tags, source context, and next actions so the lead can be followed up without rediscovery.",
  },
];

const fitSignals = [
  {
    title: "You already get calls, chats, or form fills",
    copy: "The receptionist makes sense once there is real intent to capture. If demand is low, the audit and visibility system should come first.",
  },
  {
    title: "Speed matters in your category",
    copy: "Urgent or competitive categories benefit when response time does not depend on a perfect human moment.",
  },
  {
    title: "Your team needs cleaner qualification",
    copy: "The system can collect service type, location, timing, and issue details before the handoff so the next response is specific.",
  },
  {
    title: "After-hours leads are valuable",
    copy: "If evenings, weekends, or busy job windows produce leads, the system should give those buyers a useful first response.",
  },
];

const workflowSteps = [
  {
    title: "Trigger",
    copy: "A missed call, website form, chat, booking request, or AI-search-driven visitor creates an intake moment.",
  },
  {
    title: "Understand",
    copy: "The receptionist identifies the service need, location, urgency, timing, contact information, and whether a human should take over.",
  },
  {
    title: "Route",
    copy: "The system books, tags, notes, escalates, or queues the lead based on the business rules instead of sending everyone into one generic inbox.",
  },
  {
    title: "Follow up",
    copy: "The lead context moves into CRM notes, text/email follow-up, calendar handoff, or review and nurture workflows where appropriate.",
  },
];

const comparisonRows = [
  {
    option: "Voicemail",
    bestFor: "Low-volume teams that can call back fast",
    limitation:
      "No intake, no qualification, no immediate reassurance, and easy lead loss when competitors answer faster.",
  },
  {
    option: "Basic website chatbot",
    bestFor: "Simple website questions and static FAQs",
    limitation:
      "Often disconnected from phone calls, calendar rules, CRM notes, and real service routing.",
  },
  {
    option: "Answering service",
    bestFor: "Human backup for strict call coverage",
    limitation:
      "Can be expensive or shallow if scripts, CRM context, and follow-up workflows are weak.",
  },
  {
    option: "AI receptionist",
    bestFor:
      "Fast intake, missed-call recovery, qualification, routing, and follow-up context",
    limitation:
      "Needs clear rules, escalation boundaries, and a clean operating base before it should handle sensitive conversations.",
  },
];

const implementationChecks = [
  {
    title: "Offer and service map",
    copy: "Define the services, service areas, disqualifiers, urgency rules, and words the business actually uses with customers.",
  },
  {
    title: "Escalation boundaries",
    copy: "Decide what the assistant can answer, what it should collect, and what must move to a human immediately.",
  },
  {
    title: "Calendar and CRM handoff",
    copy: "Connect booking, notes, tags, source page, pipeline stage, and follow-up so every lead has a next action.",
  },
  {
    title: "Compliance and consent",
    copy: "Keep SMS consent, privacy language, opt-out language, and customer communication rules visible and consistent.",
  },
];

const supportLinks = [
  {
    title: "AI automation agency in Springfield",
    copy: "See how the receptionist layer fits into the wider local AI agency system for Springfield service businesses.",
    href: "/ai-agency-springfield-mo",
  },
  {
    title: "AI Search Visibility Audit",
    copy: "Use the audit when the business needs more demand or clearer public signals before adding automation.",
    href: "/ai-search-audit",
  },
  {
    title: "CiviveOS",
    copy: "Use CiviveOS when the lead-response operating base needs to be cleaned up before adding more AI.",
    href: "/civive-os",
  },
  {
    title: "Implementation plan",
    copy: "Review the sequence for turning audit findings into schema, pages, internal links, and lead systems.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
];

export default function AIReceptionistPage() {
  return (
    <>
      <Seo {...pageMeta.receptionist} path="/ai-receptionist" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI receptionist and missed-call recovery"
          title="Capture, qualify, and route service leads before they cool off."
          copy="An AI receptionist is the downstream conversion layer for service businesses. It helps answer, qualify, book, route, and follow up after a buyer finds the business through AI search, Google, referrals, calls, forms, or chat."
          primaryCta={{ label: "Get an AI Search Visibility Audit", href: "/contact" }}
          secondaryCta={{
            label: "Explore CiviveOS",
            href: "/civive-os",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Direct answer</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
              <p>
                Use an AI receptionist when the business already has calls,
                forms, chats, or booking requests and the biggest leak is slow
                response, poor intake, or unclear routing.
              </p>
              <p>
                If the business is not getting enough qualified demand yet,
                start with the AI Search Visibility Audit and visibility cleanup.
              </p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What it does"
              title="A practical receptionist layer, not a generic bot."
              copy="The goal is to protect revenue after discovery. The assistant should collect enough context to make the next human or automated step useful."
            />
            <EditorialList items={receptionistPieces} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="Workflow"
              title="The handoff needs a real operating path."
              copy="A strong receptionist flow is built around the actual lead journey: trigger, understand, route, and follow up."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="border-y border-white/[0.08] py-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="When it fits"
              title="Use it where lead response speed and handoff quality matter."
              copy="The right assistant should be custom to the business, offer, calendar, routing rules, and CRM workflow."
            />
            <EditorialList items={fitSignals} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Comparison"
              title="AI receptionist is not voicemail, and it is not just a website chatbot."
              copy="The right choice depends on lead volume, urgency, budget, escalation risk, and how clean the business's operating base already is."
            />
            <div className="border-y border-white/[0.08]">
              {comparisonRows.map(row => (
                <div
                  key={row.option}
                  className="grid gap-4 border-b border-white/[0.08] py-6 last:border-b-0 lg:grid-cols-[10rem_1fr_1.2fr]"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {row.option}
                  </h2>
                  <p className="text-sm leading-6 text-white/70">
                    {row.bestFor}
                  </p>
                  <p className="text-sm leading-6 text-white/52">
                    {row.limitation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Implementation criteria"
              title="Build the rules before giving AI the front desk."
              copy="This is where sloppy automation gets dangerous. The assistant should know what it can do, what it cannot do, and where the lead goes next."
            />
            <EditorialList items={implementationChecks} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <SectionHeader
              eyebrow="Connected pages"
              title="Use the right page for the right stage of the lead system."
              copy="These are intentionally connected so search visibility, lead response, software, and conversion do not sit in separate silos."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {supportLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group border-y border-white/[0.08] py-6 transition-colors hover:border-white/[0.22]"
                >
                  <h2 className="text-xl font-semibold text-white/92 group-hover:text-white">
                    {link.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {link.copy}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-medium text-white/70 group-hover:text-white">
                    Open page
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeader
              eyebrow="AI receptionist FAQs"
              title="Questions service businesses ask before adding AI to the front desk."
              copy="These answers are visible on-page, so the FAQ schema has real content to support it."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {aiReceptionistFaqs.map(item => (
                <div key={item.question} className="py-6">
                  <h2 className="text-xl font-semibold text-white">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Find the leak first, then build the right response layer."
          copy="The audit shows whether the business has a visibility problem, a conversion problem, or both. The receptionist layer protects the opportunity once the buyer reaches out."
        />
      </AuthorityShell>
    </>
  );
}
