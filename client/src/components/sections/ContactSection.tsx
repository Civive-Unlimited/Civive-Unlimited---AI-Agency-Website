import { motion, useInView } from "framer-motion";
import {
  CalendarCheck2,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

/*
 * CONTACT SECTION
 * Native HTML form for GHL tracking compatibility
 * Honeypot spam protection included
 * SMS consent checkbox for A2P 10DLC compliance
 */

const reassuranceItems = [
  "We build it around your business.",
  "We keep the setup practical and simple.",
  "We focus on lead response and booked appointments.",
  "We only recommend what makes sense for your business.",
];

const expectationItems = [
  "We review how your calls are handled now.",
  "We map where missed leads are slipping away.",
  "We show how the AI receptionist fits your workflow.",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(417) 952-6436", href: "tel:+14179526436" },
  { icon: Mail, label: "Email", value: "ceo@civiveunlimited.com", href: "mailto:ceo@civiveunlimited.com" },
  { icon: MapPin, label: "Location", value: "Springfield, MO", href: null },
  { icon: Clock, label: "Fast follow up", value: "Demo requests reviewed quickly", href: null },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

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
        toast.success("Demo request sent. We'll follow up soon.", {
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
    <section id="contact" className="relative overflow-hidden py-24" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.12),transparent_60%)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/35 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[oklch(0.75_0.18_220)]" />
            <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
              Final step
            </span>
          </div>
          <h2 className="mt-7 font-['Syne'] text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Book a demo</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-['Space_Grotesk'] text-lg leading-relaxed text-muted-foreground">
            Tell us about your business and we&apos;ll show you how an AI receptionist can
            help you answer faster, capture more leads, and keep more appointments moving.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="rounded-[1.8rem] border border-border/45 bg-[linear-gradient(145deg,rgba(18,24,38,0.88),rgba(12,16,28,0.94))] p-6 backdrop-blur-2xl sm:p-7">
              <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                What to expect
              </div>
              <h3 className="mt-3 font-['Syne'] text-2xl font-bold text-foreground">
                A clear walkthrough, not a vague sales call
              </h3>
              <p className="mt-4 font-['Space_Grotesk'] text-sm leading-relaxed text-muted-foreground">
                We keep the demo practical. You&apos;ll see where calls are being missed, how the
                receptionist flow works, and what the next setup path would actually look like.
              </p>

              <div className="mt-6 space-y-3">
                {expectationItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.14 + index * 0.06 }}
                    className="flex items-start gap-3 rounded-2xl border border-border/35 bg-background/18 px-4 py-3"
                  >
                    <CalendarCheck2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.75_0.18_220)]" />
                    <span className="font-['Space_Grotesk'] text-sm text-foreground/82">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-border/45 bg-background/26 p-6 backdrop-blur-2xl sm:p-7">
              <h3 className="font-['Syne'] text-xl font-bold text-foreground">Get In Touch</h3>
              <div className="mt-6 grid gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-2xl border border-border/35 bg-background/18 px-4 py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.15] to-[oklch(0.55_0.25_300)/0.15]">
                      <item.icon className="h-5 w-5 text-[oklch(0.75_0.18_220)]" />
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-xs text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-['Space_Grotesk'] text-sm text-foreground transition-colors hover:text-[oklch(0.75_0.18_220)]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-['Space_Grotesk'] text-sm text-foreground">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-border/45 bg-background/22 p-6 backdrop-blur-2xl sm:p-7">
              <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Why this stays focused
              </div>
              <div className="mt-5 grid gap-3">
                {reassuranceItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.22 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                    <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.16),transparent_58%)] blur-3xl" />

            <div className="relative rounded-[1.95rem] border border-border/50 bg-background/30 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-7">
              {isSubmitted ? (
                <div className="py-14 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.20_180)/0.2] to-[oklch(0.55_0.25_300)/0.2]">
                    <CheckCircle className="h-8 w-8 text-[oklch(0.65_0.20_180)]" />
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Demo request received
                  </div>
                  <h3 className="mt-3 font-['Syne'] text-3xl font-bold text-foreground">
                    You&apos;re in
                  </h3>
                  <p className="mx-auto mt-4 max-w-md font-['Space_Grotesk'] text-muted-foreground">
                    Your demo request is in. We&apos;ll follow up soon, and you can call directly if
                    you want to move faster.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="magnetic-btn mt-8 rounded-lg bg-secondary/50 px-6 py-3 font-['Space_Grotesk'] font-semibold text-foreground transition-all hover:bg-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7 flex flex-col gap-4 border-b border-border/35 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        Demo request
                      </div>
                      <h3 className="mt-3 font-['Syne'] text-2xl font-bold text-foreground sm:text-[2rem]">
                        See how the receptionist would fit your business
                      </h3>
                    </div>
                    <div className="rounded-full border border-border/40 bg-background/26 px-3 py-2 font-['Space_Grotesk'] text-xs text-foreground/75">
                      Focused on calls, lead capture, and booking flow
                    </div>
                  </div>

                  <form
                    action="https://services.leadconnectorhq.com/funnels/submit"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="full_name"
                          required
                          placeholder="John Smith"
                          className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                        />
                      </div>
                      <div>
                        <label htmlFor="business" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          id="business"
                          name="company_name"
                          required
                          placeholder="Smith's HVAC"
                          className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@smithshvac.com"
                          className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="(417) 952-6436"
                          required={smsConsent}
                          className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                        />
                        <p className="mt-1.5 font-['Space_Grotesk'] text-xs text-muted-foreground">
                          Add a mobile number if you want SMS updates about your demo request and appointments.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                        What matters most right now?
                      </label>
                      <select
                        id="service"
                        name="service_interest"
                        className="w-full rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                      >
                        <option value="">Select an option...</option>
                        <option value="never-miss-calls">Never miss calls</option>
                        <option value="faster-lead-follow-up">Faster lead follow-up</option>
                        <option value="more-booked-appointments">More booked appointments</option>
                        <option value="after-hours-coverage">After-hours coverage</option>
                        <option value="not-sure-yet">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block font-['Space_Grotesk'] text-sm text-foreground">
                        Tell us about your business
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="What happens when a customer calls and your team cannot answer right away?"
                        className="w-full resize-none rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 font-['Space_Grotesk'] text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.5]"
                      />
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-border/35 bg-background/18 p-4">
                      <input
                        type="checkbox"
                        id="sms_consent"
                        name="sms_consent"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border/50 bg-secondary/30 text-[oklch(0.75_0.18_220)] focus:ring-[oklch(0.75_0.18_220)/0.5]"
                      />
                      <label htmlFor="sms_consent" className="font-['Space_Grotesk'] text-xs leading-relaxed text-muted-foreground">
                        By checking this box, I agree to receive conversational SMS from Civive Unlimited about my demo request, appointments, and service updates at the phone number provided. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. View our{" "}
                        <a href="/privacy" className="text-[oklch(0.75_0.18_220)] hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms" className="text-[oklch(0.75_0.18_220)] hover:underline">
                          Terms of Service
                        </a>
                        .
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="magnetic-btn flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] py-4 font-['Space_Grotesk'] text-base font-semibold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Book My Demo"
                      )}
                    </button>

                    <p className="text-center font-['Space_Grotesk'] text-xs text-muted-foreground">
                      No fluff. No hard pitch. Just a clear look at how the receptionist could fit your business.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
