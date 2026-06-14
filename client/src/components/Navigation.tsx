import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import civiveHeaderLogo from "@/assets/civive-unlimited-approved-logo.webp";
import { navLinks, site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";

const actionNavLabels = new Set(["Free Fit Check"]);
const compactNavLabels = new Set(["FAQ", "Resources", "Build in Public"]);
const paidAuditPath = "/ai-search-trust-audit";
const paidAuditCheckoutUrl = "https://buy.stripe.com/aFa9AU4Jz7ZQ1Aebgpebu0K";
const primaryNavLinks = navLinks.filter(
  link => !compactNavLabels.has(link.label) && !actionNavLabels.has(link.label)
);
const moreNavLinks = navLinks.filter(link => compactNavLabels.has(link.label));

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const isPaidAuditPage = location === paidAuditPath;
  const navCta = isPaidAuditPage
    ? {
        href: paidAuditCheckoutUrl,
        label: "Start $99 Audit",
        mobileLabel: "Start the $99 Audit",
      }
    : {
        href: site.visibilityReportRequestUrl,
        label: "Free Fit Check",
        mobileLabel: "Get a Free Fit Check",
      };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navigateTo = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    if (href.startsWith("/")) {
      setLocation(href);
      return;
    }

    window.location.assign(href);
  };

  const openChat = (placement: string) => {
    setIsMobileMenuOpen(false);
    trackWebsiteEvent("chat_open", {
      placement,
      label: "Ask AI",
      destination: "civive:open-chat",
    });
    window.dispatchEvent(new Event("civive:open-chat"));
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-white/[0.08] bg-[linear-gradient(180deg,rgba(7,7,12,0.9),rgba(7,8,14,0.72))] py-2.5 backdrop-blur-md" : "bg-transparent py-3"}`}
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[minmax(14.5rem,0.92fr)_auto_minmax(8.5rem,0.7fr)] lg:gap-5 xl:grid-cols-[minmax(15.5rem,0.92fr)_auto_minmax(11rem,0.85fr)] xl:gap-8">
            <a
              href="#"
              className="group flex min-w-0 items-center gap-4 lg:min-w-[14.5rem] xl:min-w-[15.5rem]"
              onClick={e => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                if (location === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  setLocation("/");
                }
              }}
            >
              <img
                src={civiveHeaderLogo}
                alt={site.name}
                width={1040}
                height={350}
                className="h-10 w-auto max-w-[10.5rem] object-contain transition-transform group-hover:scale-[1.01] sm:h-11 sm:max-w-[12.75rem] lg:h-[3.35rem] lg:max-w-[14.25rem] xl:h-[3.6rem] xl:max-w-[15.25rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </a>

            <div className="hidden items-center rounded-full border border-white/[0.09] bg-white/[0.035] p-1 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md lg:flex">
              {primaryNavLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="nav-link-premium whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-white/66 transition-colors hover:bg-white/[0.07] hover:text-white xl:px-4"
                >
                  {link.label}
                </a>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMoreOpen(open => !open)}
                  onBlur={() =>
                    window.setTimeout(() => setIsMoreOpen(false), 120)
                  }
                  className="nav-link-premium inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-white/66 transition-colors hover:bg-white/[0.07] hover:text-white xl:px-4"
                  aria-haspopup="menu"
                  aria-expanded={isMoreOpen}
                >
                  More
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isMoreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-[calc(100%+0.65rem)] w-52 overflow-hidden rounded-2xl border border-white/[0.1] bg-[rgba(9,10,18,0.96)] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
                      role="menu"
                    >
                      {moreNavLinks.map(link => (
                        <a
                          key={link.href}
                          href={link.href}
                          onMouseDown={e => e.preventDefault()}
                          onClick={e => {
                            e.preventDefault();
                            navigateTo(link.href);
                          }}
                          className="nav-link-premium block rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.07] hover:text-white"
                          role="menuitem"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden items-center justify-end gap-2 lg:flex">
              <button
                type="button"
                onClick={() => openChat("desktop_navigation")}
                className="nav-link-premium hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium text-white/72 transition-colors hover:bg-white/[0.05] hover:text-white xl:inline-flex xl:px-4"
              >
                <MessageCircle className="h-4 w-4" />
                Ask AI
              </button>
              <a
                href={navCta.href}
                data-cta-destination={navCta.href}
                onClick={e => {
                  e.preventDefault();
                  trackWebsiteEvent("cta_click", {
                    placement: "desktop_navigation",
                    label: navCta.label,
                    destination: navCta.href,
                  });
                  navigateTo(navCta.href);
                }}
                className="homepage-secondary-button inline-flex items-center whitespace-nowrap rounded-full border border-white/[0.13] bg-white/[0.055] px-4 py-2.5 text-sm font-medium text-white/92 transition-colors hover:bg-white/[0.1] xl:px-5"
              >
                {navCta.label}
              </a>
            </div>

            <button
              className="justify-self-end rounded-full border border-white/[0.08] bg-white/[0.03] p-2 text-foreground transition-colors hover:bg-white/[0.08] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(6,6,11,0.97),rgba(8,8,14,0.99))] backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-7 pt-16">
              {primaryNavLinks.concat(moreNavLinks).map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="text-2xl font-semibold text-foreground transition-colors hover:text-white"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={navCta.href}
                data-cta-destination={navCta.href}
                onClick={e => {
                  e.preventDefault();
                  trackWebsiteEvent("cta_click", {
                    placement: "mobile_navigation",
                    label: navCta.mobileLabel,
                    destination: navCta.href,
                  });
                  navigateTo(navCta.href);
                }}
                className="mt-3 w-64 rounded-full border border-white/[0.12] bg-white/[0.05] py-4 text-center text-base font-medium text-white transition-colors hover:bg-white/[0.1]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                {navCta.mobileLabel}
              </motion.a>

              <motion.button
                type="button"
                onClick={() => openChat("mobile_navigation")}
                className="w-64 rounded-full border border-white/[0.12] bg-white/[0.04] py-4 text-center text-base font-medium text-white/82 transition-colors hover:bg-white/[0.09] hover:text-white"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08 }}
              >
                Ask Civive AI
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
