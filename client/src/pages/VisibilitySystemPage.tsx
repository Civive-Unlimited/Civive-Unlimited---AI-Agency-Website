import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import { pageMeta, visibilitySystemLayers } from "@/content/site";

const implementationAreas = [
  {
    title: "Messaging clarity",
    copy: "Make the business, audience, services, service area, and buying reason clear enough to understand without interpretation.",
  },
  {
    title: "Service and location alignment",
    copy: "Connect what the business sells to the places it actually serves, without thin pages or fake local claims.",
  },
  {
    title: "Public business consistency",
    copy: "Reduce conflicting facts across the site, Google profile, listings, social profiles, and public mentions.",
  },
  {
    title: "FAQ and answer formatting",
    copy: "Answer the exact questions buyers ask in language that can support voice search, AI summaries, and human decision-making.",
  },
  {
    title: "Schema and structured context",
    copy: "Use structured data only after the page content is real, clear, and worthy of being parsed.",
  },
  {
    title: "Lead capture readiness",
    copy: "Make sure forms, booking, chat, phone, CRM notes, and follow-up do not lose the buyer after discovery.",
  },
];

export default function VisibilitySystemPage() {
  return (
    <>
      <Seo {...pageMeta.system} path="/visibility-system" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Visibility System"
          title="A cleanup system for the signals AI, Google, and buyers use to choose."
          copy="The audit finds the weak signals. The visibility system fixes them through clearer messaging, service structure, public proof, schema-ready content, and a cleaner lead path."
          primaryCta={{ label: "Get AI Search Audit", href: "/contact" }}
          secondaryCta={{ label: "See the audit", href: "/ai-search-audit" }}
        >
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {visibilitySystemLayers.map((layer, index) => (
              <div key={layer.title} className="py-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/36">
                  0{index + 1}
                </p>
                <h2 className="hero-side-title mt-3 text-2xl text-white">{layer.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/64">{layer.copy}</p>
              </div>
            ))}
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Implementation"
              title="Civive is not just selling a report."
              copy="The system is built to turn the findings into public assets that make the business easier to understand, verify, cite, contact, and follow up with."
            />
            <EditorialList items={implementationAreas} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {visibilitySystemLayers.map((layer) => (
              <div key={layer.title} className="border-y border-white/[0.08] py-7">
                <h2 className="text-2xl font-semibold text-white">{layer.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/62">{layer.copy}</p>
                <ul className="mt-6 space-y-3">
                  {layer.items.map((item) => (
                    <li key={item} className="border-b border-white/[0.08] pb-3 text-sm text-white/74 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="mx-auto max-w-4xl">
            <p className="homepage-eyebrow">How it connects</p>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Get found, get trusted, capture the lead, automate the response.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/64 sm:text-lg">
              AI visibility is only valuable if it turns into a real conversation.
              That is why the system includes the handoff: contact paths, booking,
              CRM context, follow-up, and when it fits, an AI receptionist that
              keeps the lead from getting lost.
            </p>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Build the visibility system from the audit outward."
          copy="Start with what is unclear now. Then turn the highest-impact fixes into pages, answers, structured context, and lead systems."
        />
      </AuthorityShell>
    </>
  );
}
