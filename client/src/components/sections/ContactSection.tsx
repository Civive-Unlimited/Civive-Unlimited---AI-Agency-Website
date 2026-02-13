import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

/*
 * CONTACT SECTION
 * Native HTML form for GHL tracking compatibility
 * Honeypot spam protection included
 * SMS consent checkbox for A2P 10DLC compliance
 */

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  const promises = [
    "I answer my own phone.",
    "I do the actual work (no outsourcing).",
    "I only take clients I know I can help.",
    "I'm building this for the long haul.",
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(417) 952-6436", href: "tel:+14179526436" },
    { icon: Mail, label: "Email", value: "ceo@civiveunlimited.com", href: "mailto:ceo@civiveunlimited.com" },
    { icon: MapPin, label: "Location", value: "Springfield, MO", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok || response.redirected) {
        setIsSubmitted(true);
        toast.success("Message sent! We'll get back to you within 24 hours.", {
          duration: 6000,
        });
        form.reset();
        setSmsConsent(false);
      } else {
        toast.error("Something went wrong. Please try calling us directly at (417) 952-6436.");
      }
    } catch {
      toast.error("Network error. Please try calling us directly at (417) 952-6436.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.65_0.20_180)/0.2] to-[oklch(0.55_0.25_300)/0.2] mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[oklch(0.65_0.20_180)]" />
                  </div>
                  <h3 className="font-['Syne'] text-2xl font-bold text-foreground mb-3">
                    Message Received!
                  </h3>
                  <p className="font-['Space_Grotesk'] text-muted-foreground mb-6">
                    We'll get back to you within 24 hours. In the meantime, feel free to call us directly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="magnetic-btn bg-secondary/50 hover:bg-secondary text-foreground font-['Space_Grotesk'] font-semibold py-3 px-6 rounded-lg transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  action="https://services.leadconnectorhq.com/funnels/submit"
                  method="POST"
                  onSubmit={handleSubmit}
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
                        type="tel" id="phone" name="phone" placeholder="(417) 952-6436"
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

                  {/* SMS Consent — Required for A2P 10DLC compliance */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="sms_consent"
                      name="sms_consent"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border/50 bg-secondary/30 text-[oklch(0.75_0.18_220)] focus:ring-[oklch(0.75_0.18_220)/0.5] flex-shrink-0"
                    />
                    <label htmlFor="sms_consent" className="font-['Space_Grotesk'] text-xs text-muted-foreground leading-relaxed">
                      I consent to receive text messages from Civive Unlimited at the phone number provided. Msg & data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for help. View our{" "}
                      <a href="/privacy" className="text-[oklch(0.75_0.18_220)] hover:underline">Privacy Policy</a>{" "}& {" "}
                      <a href="/terms" className="text-[oklch(0.75_0.18_220)] hover:underline">Terms of Service</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-4 rounded-lg transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get My Free Growth Plan"
                    )}
                  </button>

                  <p className="text-center font-['Space_Grotesk'] text-xs text-muted-foreground">
                    No spam. No pressure. Just a real conversation about growing your business.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
