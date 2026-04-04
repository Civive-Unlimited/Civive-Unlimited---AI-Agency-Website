import { motion, useInView } from "framer-motion";
import { CheckCircle, Loader2, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const nextSteps = [
  "We look at how calls are handled now.",
  "We show where leads are slipping away.",
  "We map the best fit for your booking flow.",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(417) 952-6436", href: "tel:+14179526436" },
  { icon: Mail, label: "Email", value: "ceo@civiveunlimited.com", href: "mailto:ceo@civiveunlimited.com" },
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
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:scroll-mt-28 sm:py-24"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,oklch(0.75_0.18_220/0.12),transparent_54%)]" />
      <div className="absolute right-[8%] top-16 h-44 w-44 bg-[radial-gradient(circle,oklch(0.55_0.25_300/0.12),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">Book a demo</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            See how the receptionist fits your business.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your business and we&apos;ll show you how an AI receptionist can
            help you answer faster, capture more leads, and keep more appointments moving.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-md"
          >
            <p className="homepage-eyebrow">What happens next</p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              A direct demo, built around real call flow.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We keep this practical. The goal is to show where response speed,
              lead capture, and booking flow can be tightened without adding more chaos.
            </p>

            <div className="mt-8 space-y-3">
              {nextSteps.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/82">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4 border-t border-border/25 pt-8">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 inline-flex text-sm text-foreground transition-colors hover:text-[oklch(0.75_0.18_220)]"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
              <p className="text-sm text-muted-foreground">Fast follow up on demo requests.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="homepage-panel relative overflow-hidden rounded-[1.65rem] p-6 sm:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.75_0.18_220/0.78),oklch(0.55_0.25_300/0.52),transparent)]" />
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.20_180)/0.12] text-[oklch(0.65_0.20_180)]">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-foreground">You&apos;re in</h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Your demo request is in. We&apos;ll follow up soon, and you can call directly if
                  you want to move faster.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="homepage-outline-button magnetic-btn mt-8 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.04]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="border-b border-border/30 pb-5">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Book a demo
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Focused on calls, lead capture, and booking flow.
                  </p>
                </div>

                <form
                  action="https://services.leadconnectorhq.com/funnels/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-5"
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
                      <label htmlFor="name" className="mb-1.5 block text-sm text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="full_name"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="mb-1.5 block text-sm text-foreground">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="company_name"
                        required
                        placeholder="Smith's HVAC"
                        className="w-full rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@smithshvac.com"
                        className="w-full rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm text-foreground">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(417) 952-6436"
                        required={smsConsent}
                        className="w-full rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
                      />
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Add a mobile number for quick SMS updates about your demo request and appointments.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm text-foreground">
                      What matters most right now?
                    </label>
                    <select
                      id="service"
                      name="service_interest"
                      className="w-full rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
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
                    <label htmlFor="message" className="mb-1.5 block text-sm text-foreground">
                      Tell us about your business
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What happens when a lead calls and your team cannot answer right away?"
                      className="w-full resize-none rounded-xl border border-[oklch(0.30_0.04_230/0.42)] bg-[linear-gradient(180deg,rgba(9,12,20,0.82),rgba(7,10,17,0.86))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.28]"
                    />
                  </div>

                  <div className="rounded-[1.1rem] border border-[oklch(0.30_0.04_230/0.34)] bg-[linear-gradient(180deg,rgba(11,14,24,0.54),rgba(8,11,18,0.6))] p-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="sms_consent"
                        name="sms_consent"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border/50 bg-secondary/30 text-[oklch(0.75_0.18_220)] focus:ring-[oklch(0.75_0.18_220)/0.5]"
                      />
                      <label htmlFor="sms_consent" className="text-xs leading-relaxed text-muted-foreground">
                        By checking this box, I agree to receive conversational SMS from
                        Civive Unlimited about my demo request, appointments, and service
                        updates at the phone number provided. Message frequency varies. Msg
                        & data rates may apply. Reply STOP to opt out or HELP for help.
                        Consent is not a condition of purchase. View our{" "}
                        <a href="/privacy" className="text-[oklch(0.75_0.18_220)] hover:text-[oklch(0.78_0.08_230)] hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms" className="text-[oklch(0.75_0.18_220)] hover:text-[oklch(0.78_0.08_230)] hover:underline">
                          Terms of Service
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="homepage-primary-button magnetic-btn flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book a demo"
                    )}
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    Clear demo. Practical next steps.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      <div className="homepage-section-divider" />
    </section>
  );
}
