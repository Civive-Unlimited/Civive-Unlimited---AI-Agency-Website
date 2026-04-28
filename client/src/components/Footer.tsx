import { Mail, MapPin, Phone } from "lucide-react";
import civiveLogo from "@/assets/civive-hero-logo.jpg";
import { seoConfig } from "@/content/seo";
import { site } from "@/content/site";

const footerGroups = [
  {
    title: "Audit",
    links: [
      { href: "/ai-search-audit", label: "AI Search Readiness Audit" },
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
      { href: "/civive-os", label: "Civive OS" },
      { href: "/civive-os-offer", label: "Civive OS pricing" },
      { href: "/ai-receptionist", label: "AI Receptionist" },
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
      { href: "/faq", label: "FAQ" },
      { href: "/build-in-public", label: "Build in Public" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              {seoConfig.defaultDescription}. Built to make your website, Google
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
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>{site.location}</span>
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

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p>AI Search Visibility for Service Businesses - {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
