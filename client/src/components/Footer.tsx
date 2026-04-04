import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Why Civive", href: "#why-civive" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Additional Systems", href: "#contact", secondary: true },
];

const navigateTo = (href: string) => {
  if (href === "#") {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.href = "/";
    return;
  }

  if (window.location.pathname === "/") {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  window.location.href = `/${href}`;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.33_0.05_228/0.34)] bg-[linear-gradient(180deg,rgba(5,7,13,0.96),rgba(7,9,16,0.99))]">
      <div className="container mx-auto px-4 py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329647955/sAkXjyNGjbClshEs.jpg"
                alt="Civive Unlimited"
                className="h-9 w-9 rounded-lg border border-[oklch(0.36_0.05_228/0.42)] object-cover"
                loading="lazy"
              />
              <span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(165,191,214,0.72))] bg-clip-text text-base font-semibold tracking-[-0.02em] text-transparent">
                CIVIVE UNLIMITED
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              AI receptionist systems for service businesses.
            </p>
          </div>

          <div>
            <p className="homepage-eyebrow">Navigate</p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <button
                  key={`${link.label}-${link.href}`}
                  onClick={() => navigateTo(link.href)}
                  className={`w-fit text-left text-sm transition-colors hover:text-[oklch(0.78_0.08_230)] ${
                    link.secondary ? "text-foreground/68" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="homepage-eyebrow">Contact</p>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+14179526436"
                className="flex items-center gap-3 transition-colors hover:text-[oklch(0.78_0.08_230)]"
              >
                <Phone className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>(417) 952-6436</span>
              </a>
              <a
                href="mailto:ceo@civiveunlimited.com"
                className="flex items-center gap-3 transition-colors hover:text-[oklch(0.78_0.08_230)]"
              >
                <Mail className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>ceo@civiveunlimited.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
                <span>Springfield, MO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[oklch(0.33_0.05_228/0.28)] pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <a href="/privacy" className="transition-colors hover:text-[oklch(0.78_0.08_230)]">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-[oklch(0.78_0.08_230)]">
              Terms of Service
            </a>
          </div>

          <p>&copy; {currentYear} Civive Unlimited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
