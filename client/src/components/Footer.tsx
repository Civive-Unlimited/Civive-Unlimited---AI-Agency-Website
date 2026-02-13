import { Youtube, Twitter, Github, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@CiviveUnlimited", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/civiveunltd", label: "X (Twitter)" },
    { icon: Github, href: "https://github.com/CIVIVEUNLTD", label: "GitHub" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/30 bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329647955/sAkXjyNGjbClshEs.jpg"
                alt="Civive Unlimited"
                className="h-8 w-8 rounded-lg object-cover"
                loading="lazy"
              />
              <span className="font-['Syne'] font-bold text-lg gradient-text">
                CIVIVE UNLIMITED
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-sm text-muted-foreground leading-relaxed">
              AI-powered growth systems for small businesses. Built by a technician who understands real work.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Syne'] font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "AI Search", href: "#ai-search" },
                { label: "Pricing", href: "#pricing" },
                { label: "Our Story", href: "#story" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Syne'] font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+14179526436" className="flex items-center gap-2 font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> (417) 952-6436
              </a>
              <a href="mailto:ceo@civiveunlimited.com" className="flex items-center gap-2 font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> ceo@civiveunlimited.com
              </a>
              <div className="flex items-center gap-2 font-['Space_Grotesk'] text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Springfield, MO
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-['Syne'] font-bold text-foreground mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block font-['Space_Grotesk'] text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Space_Grotesk'] text-xs text-muted-foreground">
            &copy; {currentYear} Civive Unlimited. All rights reserved.
          </p>
          <p className="font-['Syne'] text-xs text-muted-foreground">
            Built with <span className="text-[oklch(0.55_0.25_300)]">&#9829;</span> in Springfield, Missouri
          </p>
        </div>
      </div>
    </footer>
  );
}
