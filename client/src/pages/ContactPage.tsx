import {
  AuthorityShell,
  PageHero,
} from "@/components/AuthorityPage";
import Seo from "@/components/Seo";
import ContactSection from "@/components/sections/ContactSection";
import { pageMeta } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <Seo {...pageMeta.contact} path="/contact" />
      <AuthorityShell>
        <PageHero
          eyebrow="Contact Civive"
          title="Request the AI Search Readiness Audit."
          copy="Send the business, website or Google profile, service area, and the visibility problem you want solved first. Civive will start with the highest-impact public signals."
          primaryCta={{ label: "Use the form below", href: "#contact" }}
          secondaryCta={{ label: "See what the audit checks", href: "/ai-search-audit" }}
        />
        <ContactSection />
      </AuthorityShell>
    </>
  );
}
