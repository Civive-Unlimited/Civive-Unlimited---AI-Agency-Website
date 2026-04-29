import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  FinalCta,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import ContactSection from "@/components/sections/ContactSection";
import { auditChecks, auditPageFaqs, pageMeta, site } from "@/content/site";

const auditDeliverables = [
  "Visibility gap list",
  "Priority fix order",
  "Simple visibility score",
  "Recommended next steps",
  "Lead capture and follow-up review",
  "Optional CiviveOS implementation path",
];

const outcomeCards = [
  {
    title: "Find the gaps",
    copy: "See where your website, Google profile, service pages, reviews, FAQs, schema, and public profiles make the business hard to understand.",
  },
  {
    title: "Know what to fix first",
    copy: "Leave with a clean priority order instead of a pile of random SEO tasks that may not move the business forward.",
  },
  {
    title: "Connect visibility to leads",
    copy: "Review the path from search discovery to call, form, booking, CRM handoff, follow-up, reviews, and missed-call recovery.",
  },
];

const proofItems = [
  {
    title: "Built on Civive first",
    copy: "Civive Unlimited is applying the same process to its own website, content, local pages, schema, resources, conversion paths, and AI/search signals.",
  },
  {
    title: "Operator-led, not vanity marketing",
    copy: "Scott Berry built Civive for real local operators. With 25 years in HVAC and service business operations, the work stays tied to calls, leads, bookings, and follow-up.",
  },
  {
    title: "No fake guarantees",
    copy: "The audit does not promise instant rankings or magic ChatGPT placement. It finds the public evidence that needs to be clearer so buyers and answer engines can trust the business faster.",
  },
];

const internalLinks = [
  { label: "Civive Unlimited homepage", href: "/" },
  { label: "AI Search Visibility System", href: "/visibility-system" },
  { label: "CiviveOS", href: "/civive-os" },
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "Resources", href: "/resources" },
  { label: "Springfield HVAC visibility example", href: "/industries/hvac" },
  { label: "Contact Civive", href: "/contact" },
];

export default function AuditPage() {
  return (
    <>
      <Seo {...pageMeta.audit} path="/ai-search-audit" />
      <AuthorityShell>
        <PageHero
          eyebrow="AI Search Visibility Audit"
          title="See if your business shows up in Google and AI search."
          copy="Civive Unlimited checks how your business appears across Google, Google Maps, ChatGPT, Gemini, Perplexity, and public local search signals, then gives you a clear fix order."
          primaryCta={{ label: "Request My AI Visibility Audit", href: "#contact" }}
          secondaryCta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">What you get</p>
            <ul className="mt-6 space-y-4">
              {auditDeliverables.map((item) => (
                <li key={item} className="border-b border-white/[0.08] pb-4 text-sm leading-6 text-white/72 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why it matters"
              title="Customers are not only searching on Google anymore."
              copy="Local buyers ask ChatGPT, Gemini, Perplexity, Google, and Maps who to call. If your business is not clear, consistent, and trusted online, you can get skipped before the customer ever reaches your site."
            />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {outcomeCards.map((item) => (
                <div key={item.title} className="rounded-[1.7rem] border border-white/[0.08] bg-white/[0.025] p-6">
                  <h3 className="text-xl font-medium text-white/92">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="What it checks"
              title="The audit looks where recommendation confidence is created."
              copy="Good businesses get skipped when their public evidence is hard to parse. The audit turns that invisible problem into a visible fix list."
            />
            <EditorialList items={auditChecks} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Why Civive can help"
              title="Built for real local operators, not vanity marketing."
              copy="Civive is led by Scott Berry, founder of Civive Unlimited, with 25 years in HVAC and service business operations. The audit is built for businesses that care about being found, getting contacted, and following up fast."
            />
            <EditorialList items={proofItems} />
          </div>
        </AuthoritySection>

        <ContactSection />

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Audit FAQ"
              title="Straight answers before you request the audit."
              copy="The audit gives you a fix order. It does not pretend one page change can force AI tools or Google to recommend a business overnight."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {auditPageFaqs.map((item) => (
                <div key={item.question} className="py-6">
                  <h3 className="text-xl font-medium text-white/92">{item.question}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
            <div>
              <p className="homepage-eyebrow">Internal paths</p>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Pages that support this audit.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/64">
                The audit connects search visibility to the rest of the Civive system: website clarity, local service proof, AI receptionist, CiviveOS, resources, and contact paths.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {internalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm font-medium text-white/72 transition-colors hover:border-white/[0.16] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </AuthoritySection>

        <FinalCta
          title="Start with the audit, then build only what the evidence says matters."
          copy="Send the business, website or Google profile, service area, and main visibility concern. Civive will map the fastest path from unclear signals to recommendation readiness."
        />
      </AuthorityShell>
    </>
  );
}
