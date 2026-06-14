import {
  AuthoritySection,
  AuthorityShell,
  EditorialList,
  PageHero,
  SectionHeader,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import ContactSection from "@/components/sections/ContactSection";
import { contactPageFaqs, pageMeta } from "@/content/site";

const requestPath = [
  {
    title: "Send the business and public footprint",
    copy: "Include the website, Google Business Profile, service area, and the services you most want buyers or AI systems to understand.",
  },
  {
    title: "Civive checks the highest-impact signals first",
    copy: "The fit check starts with business type, public footprint, service area, and whether there is enough evidence for a paid audit or a better next step.",
  },
  {
    title: "You get a practical next-step conversation",
    copy: "The follow-up is about fit: whether the $99 audit makes sense, whether a call is better, or whether the business should wait.",
  },
];

const requestPrep = [
  {
    title: "Best details to include",
    copy: "Business name, site or GBP link, service area, top services, main visibility concern, and whether calls/forms/chats are already coming in.",
  },
  {
    title: "If you do not know the problem yet",
    copy: "That is fine. Send the public footprint and choose Not sure yet. The fit check separates a paid audit fit from a website, profile, schema, or response problem.",
  },
  {
    title: "If the lead path is the issue",
    copy: "Mention missed calls, slow follow-up, bad form routing, booking friction, or CRM gaps so Civive can route the request to the right offer.",
  },
];

const conversionResources = [
  {
    title: "AI agency in Springfield, MO",
    copy: "Use the local AI agency page if you want visibility, AI automation, CRM follow up, missed-call recovery, or receptionist help for a Springfield service business.",
    href: "/ai-agency-springfield-mo",
  },
  {
    title: "What the report includes",
    copy: "See the public signals and deliverables Civive checks before recommending implementation.",
    href: "/resources/what-does-a-visibility-report-include",
  },
  {
    title: "Implementation plan",
    copy: "Review the cleanup sequence from entity clarity to service pages, schema, proof, and lead response.",
    href: "/resources/ai-search-implementation-plan-service-businesses",
  },
  {
    title: "AI receptionist",
    copy: "If response speed is the bottleneck, see how the lead path can be supported after visibility improves.",
    href: "/ai-receptionist",
  },
];

export default function ContactPage() {
  return (
    <>
      <Seo {...pageMeta.contact} path="/contact" />
      <AuthorityShell>
        <PageHero
          eyebrow="Contact Civive"
          title="Request a free fit check before buying the audit."
          copy="Send the business, website or Google profile, service area, and the visibility problem you want solved first. Civive will tell you whether the $99 audit, a call, or another next step fits."
          primaryCta={{ label: "Use the form below", href: "#contact" }}
          secondaryCta={{
            label: "See the $99 audit",
            href: "/ai-search-trust-audit",
          }}
        >
          <div className="border-y border-white/[0.08] py-7">
            <p className="homepage-eyebrow">Fastest useful request</p>
            <p className="mt-5 text-sm leading-6 text-white/72">
              Website or Google profile, service area, primary services, and the
              question: where do you want buyers or AI systems to understand you
              better?
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-2">
              <p>AI search visibility</p>
              <p>Lead-capture handoff</p>
            </div>
          </div>
        </PageHero>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Request path"
              title="The contact page should qualify the next step, not give away the audit."
              copy="Someone arriving here from the audit page, a comparison article, or an industry page should know what to send and why the paid audit is still the deliverable."
            />
            <EditorialList items={requestPath} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Before you submit"
              title="A stronger fit check creates a cleaner recommendation."
              copy="The form is intentionally simple, but the more context it carries, the easier it is to route the buyer without blurring free intake and paid findings."
            />
            <EditorialList items={requestPrep} />
          </div>
        </AuthoritySection>

        <ContactSection />

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Useful before or after submitting"
              title="Read the pages that make the request sharper."
              copy="These pages answer the common scope, sequencing, and lead-response questions that usually come up before implementation."
            />
            <EditorialList items={conversionResources} />
          </div>
        </AuthoritySection>

        <AuthoritySection>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <SectionHeader
              eyebrow="Contact FAQs"
              title="Short answers before you send the request."
              copy="These answers are visible on the page and included in JSON-LD because they directly support the contact and fit-check request intent."
            />
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {contactPageFaqs.map(faq => (
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
      </AuthorityShell>
    </>
  );
}
