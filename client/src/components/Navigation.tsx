import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

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

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[oklch(0.31_0.05_275/0.18)] bg-[linear-gradient(180deg,rgba(8,8,15,0.62),rgba(9,10,18,0.48))] py-3 backdrop-blur-sm"
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
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329647955/sAkXjyNGjbClshEs.jpg"
                alt="Civive Unlimited"
                className="h-9 w-9 rounded-lg border border-[oklch(0.36_0.05_228/0.45)] object-cover transition-transform group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(164,191,214,0.76))] bg-clip-text text-base font-semibold tracking-[-0.02em] text-transparent sm:block">
                CIVIVE UNLIMITED
              </span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-[oklch(0.77_0.08_285)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="homepage-primary-button magnetic-btn rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Book a demo
              </a>
            </div>

            <button
              className="rounded-lg border border-transparent p-2 text-foreground transition-colors hover:border-[oklch(0.31_0.05_275/0.28)] hover:bg-white/[0.02] md:hidden"
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
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,rgba(6,8,15,0.97),rgba(8,11,20,0.98))] backdrop-blur-md md:hidden"
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
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-semibold text-foreground transition-colors hover:text-[oklch(0.75_0.18_220)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="homepage-primary-button magnetic-btn mt-3 w-64 rounded-xl py-4 text-center text-base font-semibold text-white transition-opacity hover:opacity-90"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                Book a demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
