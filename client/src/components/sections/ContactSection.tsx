import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

/*
 * CONTACT SECTION
 * Native HTML form for GHL tracking compatibility
 * Honeypot spam protection included
 */

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const promises = [
    "I answer my own phone.",
    "I do the actual work (no outsourcing).",
    "I only take clients I know I can help.",
    "I'm building this for the long haul.",
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(417) 595-6484", href: "tel:+14175956484" },
    { icon: Mail, label: "Email", value: "ceo@civiveunlimited.com", href: "mailto:ceo@civiveunlimited.com" },
    { icon: MapPin, label: "Location", value: "Springfield, MO", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Build Your Growth System</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Tell us about your business and we'll show you exactly how we'd grow it. No pressure. No BS. Just a real conversation about results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Info + Promise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.15] to-[oklch(0.55_0.25_300)/0.15]">
                      <item.icon className="w-5 h-5 text-[oklch(0.75_0.18_220)]" />
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-xs text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="font-['Space_Grotesk'] text-sm text-foreground hover:text-[oklch(0.75_0.18_220)] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-['Space_Grotesk'] text-sm text-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Promise */}
            <div className="glass-card p-6">
              <h4 className="font-['Syne'] font-bold text-foreground mb-4">My Promise</h4>
              <div className="space-y-3">
                {promises.map((promise, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[oklch(0.65_0.20_180)] flex-shrink-0" />
                    <span className="font-['Space_Grotesk'] text-sm text-foreground/80">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              <form
                action="https://services.leadconnectorhq.com/funnels/submit"
                method="POST"
                className="space-y-5"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text" id="name" name="full_name" required placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text" id="business" name="company_name" required placeholder="Smith's HVAC"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email" id="email" name="email" required placeholder="john@smithshvac.com"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel" id="phone" name="phone" placeholder="(417) 555-1234"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                    What are you interested in?
                  </label>
                  <select
                    id="service" name="service_interest"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="foundation">Foundation Plan ($197/mo)</option>
                    <option value="growth">Growth System ($997/mo)</option>
                    <option value="ai-search">AI Search Domination ($1,497/mo)</option>
                    <option value="domination">Market Domination ($2,497/mo)</option>
                    <option value="audit">Free Business Audit</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-['Space_Grotesk'] text-sm text-foreground mb-1.5">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="What's your biggest challenge right now? What would success look like in 90 days?"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground font-['Space_Grotesk'] text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-4 rounded-lg transition-all text-base"
                >
                  Get My Free Growth Plan
                </button>

                <p className="text-center font-['Space_Grotesk'] text-xs text-muted-foreground">
                  No spam. No pressure. Just a real conversation about growing your business.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
