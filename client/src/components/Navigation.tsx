import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import civiveLogo from "@/assets/civive-hero-logo.jpg";
import { navLinks } from "@/content/site";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/[0.08] bg-[linear-gradient(180deg,rgba(7,7,12,0.82),rgba(7,8,14,0.58))] py-3 backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="group flex items-center gap-3"
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
                src={civiveLogo}
                alt="Civive Unlimited"
                className="h-9 w-9 rounded-xl border border-white/[0.14] object-cover transition-transform group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="hidden sm:block">
                <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-white/42">
                  Civive Unlimited
                </span>
                <span className="block text-sm font-medium text-white/92">
                  AI Search Visibility
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-4 md:flex lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.href);
                  }}
                  className="whitespace-nowrap text-sm text-white/62 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium text-white/72 transition-colors hover:bg-white/[0.05] hover:text-white lg:px-4"
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
                className="inline-flex items-center whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/92 transition-colors hover:bg-white/[0.08] lg:px-5"
              >
                Get Audit
              </a>
            </div>

            <button
              className="rounded-full border border-white/[0.08] bg-white/[0.03] p-2 text-foreground transition-colors hover:bg-white/[0.08] md:hidden"
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
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(6,6,11,0.97),rgba(8,8,14,0.99))] backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-7 pt-16">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
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
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="mt-3 w-64 rounded-full border border-white/[0.12] bg-white/[0.05] py-4 text-center text-base font-medium text-white transition-colors hover:bg-white/[0.1]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                Get AI Search Audit
              </motion.a>

              <motion.button
                type="button"
                onClick={openChat}
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
