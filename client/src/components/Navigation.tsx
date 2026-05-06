import { useEffect, useState } from "react";
import { ChevronDown, MessageCircle, Menu, X } from "lucide-react";
import civiveHeaderLogo from "@/assets/civive-header-logo.webp";
import { navLinks } from "@/content/site";

const compactNavLabels = new Set(["FAQ", "Resources", "Build in Public"]);
const primaryNavLinks = navLinks.filter((link) => !compactNavLabels.has(link.label));
const moreNavLinks = navLinks.filter((link) => compactNavLabels.has(link.label));

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

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
      if (window.location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    window.location.href = href;
  };

  const openChat = () => {
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new Event("civive:open-chat"));
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/[0.08] bg-[linear-gradient(180deg,rgba(7,7,12,0.9),rgba(7,8,14,0.72))] py-3 backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[minmax(18rem,1.05fr)_auto_minmax(8.5rem,0.7fr)] lg:gap-5 xl:grid-cols-[minmax(19rem,1.05fr)_auto_minmax(11rem,0.85fr)] xl:gap-8">
            <a
              href="#"
              className="group flex min-w-0 items-center gap-4 lg:min-w-[18rem] xl:min-w-[19rem]"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  window.location.href = "/";
                }
              }}
            >
              <img
                src={civiveHeaderLogo}
                alt="Civive Unlimited"
                width={546}
                height={126}
                className="h-12 w-auto max-w-[13rem] object-contain transition-transform group-hover:scale-[1.01] sm:h-14 sm:max-w-[16rem] lg:h-[4.25rem] lg:max-w-[18rem] xl:h-[4.5rem] xl:max-w-[19rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </a>

            <div className="hidden items-center rounded-full border border-white/[0.09] bg-white/[0.035] p-1 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md lg:flex">
              {primaryNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-white/66 transition-colors hover:bg-white/[0.07] hover:text-white xl:px-4"
                >
                  {link.label}
                </a>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((open) => !open)}
                  onBlur={() => window.setTimeout(() => setIsMoreOpen(false), 120)}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-white/66 transition-colors hover:bg-white/[0.07] hover:text-white xl:px-4"
                  aria-haspopup="menu"
                  aria-expanded={isMoreOpen}
                >
                  More
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isMoreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMoreOpen && (
                    <div
                      className="absolute right-0 top-[calc(100%+0.65rem)] w-52 overflow-hidden rounded-2xl border border-white/[0.1] bg-[rgba(9,10,18,0.96)] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
                      role="menu"
                    >
                      {moreNavLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(link.href);
                          }}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.07] hover:text-white"
                          role="menuitem"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            </div>

            <div className="hidden items-center justify-end gap-2 lg:flex">
              <button
                type="button"
                onClick={openChat}
                className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium text-white/72 transition-colors hover:bg-white/[0.05] hover:text-white xl:inline-flex xl:px-4"
              >
                <MessageCircle className="h-4 w-4" />
                Ask AI
              </button>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center whitespace-nowrap rounded-full border border-white/[0.13] bg-white/[0.055] px-4 py-2.5 text-sm font-medium text-white/92 transition-colors hover:bg-white/[0.1] xl:px-5"
              >
                Get Audit
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
      </nav>

      {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(6,6,11,0.97),rgba(8,8,14,0.99))] backdrop-blur-md lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-7 pt-16">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="text-2xl font-semibold text-foreground transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="mt-3 w-64 rounded-full border border-white/[0.12] bg-white/[0.05] py-4 text-center text-base font-medium text-white transition-colors hover:bg-white/[0.1]"
              >
                Get AI Search Audit
              </a>

              <button
                type="button"
                onClick={openChat}
                className="w-64 rounded-full border border-white/[0.12] bg-white/[0.04] py-4 text-center text-base font-medium text-white/82 transition-colors hover:bg-white/[0.09] hover:text-white"
              >
                Ask Civive AI
              </button>
            </div>
          </div>
        )}
    </>
  );
}
