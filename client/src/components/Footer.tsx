import { Mail, MapPin, Phone } from "lucide-react";
import civiveLogo from "@/assets/civive-hero-logo.jpg";
import { navLinks, site } from "@/content/site";

const navigateTo = (href: string) => {
  if (href === "/") {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.href = "/";
    return;
  }

  if (href.startsWith("/#")) {
    const sectionId = href.replace("/#", "");
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  }

  window.location.href = href;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(5,5,10,0.96),rgba(7,7,12,0.99))]">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.6fr] lg:gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={civiveLogo}
                alt="Civive Unlimited"
                className="h-9 w-9 rounded-xl border border-white/[0.12] object-cover"
                loading="lazy"
              />
              <span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,176,230,0.72))] bg-clip-text text-base font-semibold text-transparent">
                CIVIVE UNLIMITED
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              AI search visibility systems for local service businesses. Built
              to make your website, Google profile, reviews, schema, and lead
              capture easier for buyers and AI tools to understand.
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

          <div>
            <p className="homepage-eyebrow">Navigate</p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="w-fit text-left text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href="/ai-receptionist" className="w-fit text-sm text-muted-foreground transition-colors hover:text-white">
                AI Receptionist
              </a>
              <a href="/ai-agency-springfield-mo" className="w-fit text-sm text-muted-foreground transition-colors hover:text-white">
                AI Agency Springfield MO
              </a>
              <a href="/contact" className="w-fit text-sm text-muted-foreground transition-colors hover:text-white">
                Get Audit
              </a>
            </div>
          </div>

          <div>
            <p className="homepage-eyebrow">Legal</p>
            <div className="mt-5 grid gap-3">
              <a href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Civive Unlimited. All rights reserved.</p>
          <p>AI Search Visibility for Service Businesses - Springfield, MO</p>
        </div>
      </div>
    </footer>
  );
}
