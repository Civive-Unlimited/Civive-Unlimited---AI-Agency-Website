import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { pageMeta } from "@/content/site";

const receptionistPieces = [
  {
    title: "Lead capture after discovery",
    copy: "When AI search, Google, or a referral sends a buyer to the business, the system should capture the question, urgency, service need, and contact details.",
  },
  {
    title: "Booking and routing logic",
    copy: "The assistant should know when to book, when to collect information, when to escalate, and when to hand the conversation to a human.",
  },
  {
    title: "CRM and follow-up context",
    copy: "The conversation should leave useful notes, tags, source context, and next steps so the business can respond cleanly.",
  },
  {
    title: "Missed-call and after-hours support",
    copy: "For service businesses, the best lead often arrives when the team is busy. The system should reduce silent lead loss.",
  },
];

const fitSignals = [
  {
    title: "You already get calls or form fills",
    copy: "The assistant makes the handoff cleaner once there is real intent to capture.",
  },
  {
    title: "Speed matters in your category",
    copy: "Urgent or competitive categories benefit when response time does not depend on a perfect human moment.",
  },
  {
    title: "You need better qualification",
    copy: "The system can collect service type, location, timing, and issue details before the handoff.",
  },
];

export default function AIReceptionistPage() {
  return (
    <>
      <Seo {...pageMeta.receptionist} path="/ai-receptionist" />
      <AuthorityShell>
        <PageHero
          eyebrow="Secondary offer"
          title="Once the right lead finds you, make sure the lead does not get lost."
          copy="AI Receptionist is the downstream conversion layer. It supports the visibility system by helping capture, qualify, route, and follow up with buyers after they discover the business."
          primaryCta={{ label: "Get AI Search Audit", href: "/contact" }}
          secondaryCta={{ label: "Explore visibility system", href: "/visibility-system" }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Sequence</p>
            <div className="mt-6 space-y-4 text-sm leading-6 text-white/72">
              <p>1. Get found.</p>
              <p>2. Get trusted.</p>
              <p>3. Capture the lead.</p>
              <p>4. Automate the response.</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What it does"
              title="A practical receptionist layer for service businesses."
              copy="This is not the homepage's main offer. It is the logical next step when visibility starts creating more conversations."
            />
            <EditorialList items={receptionistPieces} />
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

        <FinalCta
          title="Start with visibility, then strengthen the response layer."
          copy="The audit shows whether the business is findable and understandable. The receptionist layer helps protect the opportunity once the buyer reaches out."
        />
      </AuthorityShell>
    </>
  );
}
