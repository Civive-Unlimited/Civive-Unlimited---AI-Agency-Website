import { Youtube, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@CiviveUnlimited", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/civiveunltd", label: "X (Twitter)" },
    { icon: Github, href: "https://github.com/CIVIVEUNLTD", label: "GitHub" },
  ];

  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329647955/sAkXjyNGjbClshEs.jpg"
                alt="Civive Unlimited"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="font-['Syne'] font-bold text-lg tracking-tight gradient-text">
                CIVIVE UNLIMITED
              </span>
            </a>
            <p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
              © {currentYear} Civive Unlimited. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="font-['Syne'] text-sm text-muted-foreground">
            Built with <span className="text-[oklch(0.55_0.25_300)]">♥</span> in Springfield, Missouri
          </p>
          <p className="font-['Space_Grotesk'] text-xs text-muted-foreground/60 mt-2">
            "I'm a tradesman who mastered the machine. Let's build your future, unlimited."
          </p>
        </div>
      </div>
    </footer>
  );
}
