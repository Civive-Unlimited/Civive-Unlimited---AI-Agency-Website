import { Globe, Mail, MapPin, Phone } from "lucide-react";
import civiveLogo from "@/assets/civive-hero-logo.jpg";
import { seoConfig } from "@/content/seo";
import { areasServed, site } from "@/content/site";

const footerGroups = [
  {
    title: "Audit",
    links: [
      {
        href: "/services/ai-search-visibility-audit",
        label: "AI Search Visibility Audit",
      },
      { href: "/ai-search-audit", label: "Audit details" },
      { href: "/contact", label: "Request an audit" },
      {
        href: "/resources/what-does-an-ai-search-audit-include",
        label: "What the audit includes",
      },
      {
        href: "/resources/ai-search-audit-cost",
        label: "AI search audit cost",
      },
    ],
  },
  {
    title: "Systems",
    links: [
      { href: "/visibility-system", label: "AI Search Visibility System" },
      {
        href: "/services/google-business-profile-optimization",
        label: "GBP Optimization",
      },
      { href: "/services/ai-receptionist", label: "AI Receptionist" },
      {
        href: "/services/missed-call-recovery",
        label: "Missed Call Recovery",
      },
      {
        href: "/services/crm-lead-follow-up",
        label: "CRM Lead Follow Up",
      },
      { href: "/civive-os", label: "CiviveOS" },
      { href: "/civive-os-offer", label: "CiviveOS pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Resource hub" },
      {
        href: "/resources/ai-search-readiness-checklist",
        label: "AI search checklist",
      },
      {
        href: "/resources/ai-search-vs-local-seo",
        label: "AI search vs local SEO",
      },
      {
        href: "/resources/ai-search-implementation-plan-service-businesses",
        label: "Implementation plan",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/industries", label: "Industries" },
      { href: "/service-areas/springfield-mo", label: "Springfield, MO" },
      { href: "/faq", label: "FAQ" },
      { href: "/build-in-public", label: "Build in Public" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerDescription = seoConfig.defaultDescription.replace(/\.+$/, ".");

  return (
    <footer className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(5,5,10,0.96),rgba(7,7,12,0.99))]">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_1.6fr] xl:gap-14">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={civiveLogo}
                alt={site.name}
                className="h-9 w-9 rounded-xl border border-white/[0.12] object-cover"
                loading="lazy"
              />
              <span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,176,230,0.72))] bg-clip-text text-base font-semibold text-transparent">
                {site.name.toUpperCase()}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              {footerDescription} Built to make your website, Google
              profile, reviews, schema, and lead capture easier for buyers and
              AI tools to understand.
            </p>

            <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>{site.email}</span>
              </a>
              <a
                href={site.website}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Globe className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>{site.website}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>
                  {site.addressLines.map(line => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map(group => (
              <div key={group.title}>
                <p className="homepage-eyebrow">{group.title}</p>
                <div className="mt-5 grid gap-3">
                  {group.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="w-fit text-left text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-8">
          <p className="homepage-eyebrow">Areas served</p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm text-muted-foreground">
            {areasServed.map(area => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p>AI Search Visibility for Service Businesses - {site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
