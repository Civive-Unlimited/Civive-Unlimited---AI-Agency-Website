import { motion, useInView } from "framer-motion";
import { CheckCircle, Globe, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";

const nextSteps = [
  "We review the public facts, service language, Google profile, schema, and lead path you send.",
  "We separate visibility issues from website, profile, content, schema, or response-speed issues.",
  "We map the next fixes so the business knows what to clean up before building more pages or automation.",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call or text",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: site.website,
    href: site.website,
  },
  {
    icon: MapPin,
    label: "Address",
    value: site.addressDisplay,
  },
];

const reportRequestSignals = [
  "Website or Google profile URL",
  "Service area and top services",
  "What you want AI and buyers to understand",
  "Whether calls, forms, booking, or follow-up are leaking leads",
];

const defaultConfirmationMessage =
  "Your request was received. We'll review it and follow up.";
const defaultFormErrorMessage = `Something went wrong. Please call or text Civive at ${site.phone}.`;

function safeFormErrorMessage(result: unknown) {
  if (!result || typeof result !== "object") return defaultFormErrorMessage;

  const payload = result as { errors?: string[]; message?: string };
  const message = payload.errors?.[0] || payload.message || "";

  if (
    /token|key|secret|authorization|permission|scope|highlevel|leadconnector|civiveos/i.test(
      message
    )
  ) {
    return defaultFormErrorMessage;
  }

  return message || defaultFormErrorMessage;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(
    defaultConfirmationMessage
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const getField = (name: string) => String(formData.get(name) || "").trim();
    const offer = getField("offer");
    const sourcePage = window.location.href;

    trackWebsiteEvent("form_submit", {
      form: "ai-search-visibility-report",
      offer,
      destination: "/api/lead",
      sourcePage,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: getField("full_name"),
          companyName: getField("company_name"),
          email: getField("email"),
          phone: getField("phone"),
          website: getField("website"),
          serviceArea: getField("service_area"),
          serviceInterest: getField("service_interest"),
          message: getField("message"),
          smsConsent,
          offer,
          sourcePage,
          _honey: getField("_honey"),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok) {
        trackWebsiteEvent("form_submit_success", {
          form: "ai-search-visibility-report",
          offer,
          destination: "/api/lead",
          status: response.status,
        });
        setIsSubmitted(true);
        setConfirmationMessage(result?.message || defaultConfirmationMessage);
        toast.success(result?.message || defaultConfirmationMessage, {
          duration: 6000,
        });
        form.reset();
        setSmsConsent(false);
      } else {
        trackWebsiteEvent("form_submit_error", {
          form: "ai-search-visibility-report",
          offer,
          destination: "/api/lead",
          status: response.status,
        });
        toast.error(safeFormErrorMessage(result));
      }
    } catch {
      trackWebsiteEvent("form_submit_error", {
        form: "ai-search-visibility-report",
        offer,
        destination: "/api/lead",
        status: "network-error",
      });
      toast.error(
        `Network error. Please call or text Civive at ${site.phone}.`
      );
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
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,oklch(0.55_0.25_300/0.10),transparent_58%)]" />
      <div className="absolute right-[8%] top-16 h-44 w-44 bg-[radial-gradient(circle,oklch(0.72_0.15_235/0.06),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="homepage-eyebrow">Visibility Report</p>
          <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            Send the context Civive needs to find the first visibility gap.
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-md lg:pt-6"
          >
            <p className="homepage-eyebrow">What happens next</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A practical visibility report starts with the public evidence
              buyers and AI systems can already see. The form routes the
              business details into the lead system so the first follow-up can
              stay specific.
            </p>

            <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
              {nextSteps.map(item => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/82"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[oklch(0.65_0.20_180)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Best request includes
              </p>
              <div className="mt-4 space-y-3">
                {reportRequestSignals.map(item => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/78"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[oklch(0.65_0.20_180)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-4 border-t border-white/[0.08] pt-8">
              {contactInfo.map(item => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      data-cta-destination={item.href}
                      onClick={() =>
                        trackWebsiteEvent("cta_click", {
                          placement: "contact_info",
                          label: item.label,
                          destination: item.href,
                        })
                      }
                      className="mt-1 inline-flex text-sm text-foreground transition-colors hover:text-[oklch(0.75_0.18_220)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="homepage-panel relative overflow-hidden rounded-[2.2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.56_0.16_290/0.58),oklch(0.72_0.15_235/0.26),transparent)]" />
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.20_180)/0.12] text-[oklch(0.65_0.20_180)]">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-foreground">
                  Fit check request received
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {confirmationMessage}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="homepage-outline-button magnetic-btn mt-8 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.04]"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="border-b border-white/[0.08] pb-5">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Request your Visibility Report
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Send enough context to inspect the public signals, then
                    Civive can follow up around the highest-impact fix order.
                  </p>
                </div>

                <form
                  action="/api/lead"
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
                  <input
                    type="hidden"
                    name="offer"
                    value="ai-search-visibility-report"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="full_name"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="company_name"
                        required
                        placeholder="Smith's HVAC"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@smithshvac.com"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={site.phone}
                        required={true}
                        aria-required="true"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="mb-1.5 block text-sm text-foreground"
                    >
                      Website or Google Business Profile *
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      required
                      placeholder="https://yourbusiness.com"
                      className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service_area"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Service Area
                      </label>
                      <input
                        type="text"
                        id="service_area"
                        name="service_area"
                        placeholder="Springfield, MO and nearby cities"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm text-foreground"
                      >
                        Main Concern
                      </label>
                      <select
                        id="service"
                        name="service_interest"
                        className="w-full rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                      >
                        <option value="">Select an option...</option>
                        <option value="ai-search-visibility">
                          Showing up in AI search
                        </option>
                        <option value="website-message-clarity">
                          Website message clarity
                        </option>
                        <option value="google-business-profile">
                          Google Business Profile signals
                        </option>
                        <option value="faq-schema-service-pages">
                          FAQs, schema, and service pages
                        </option>
                        <option value="lead-capture-follow-up">
                          Lead capture and follow-up
                        </option>
                        <option value="not-sure-yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm text-foreground"
                    >
                      Tell us what you want AI, Google, and buyers to understand
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What services should you be understood for, where do you serve, and what feels unclear or broken right now?"
                      className="w-full resize-none rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(9,12,20,0.72),rgba(7,10,17,0.8))] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-[oklch(0.36_0.07_228/0.7)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.18_220)/0.24]"
                    />
                  </div>

                  <div className="rounded-[1.4rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(14,13,24,0.24),rgba(8,11,18,0.3))] p-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="sms_consent"
                        name="sms_consent"
                        checked={smsConsent}
                        onChange={e => setSmsConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-border/50 bg-secondary/30 text-[oklch(0.75_0.18_220)] focus:ring-[oklch(0.75_0.18_220)/0.5]"
                      />
                      <label
                        htmlFor="sms_consent"
                        className="text-xs leading-relaxed text-muted-foreground"
                      >
                        By checking this box, I agree to receive SMS from Civive
                        Unlimited about my fit check request, appointments, and
                        updates. Message frequency varies. Msg & data rates may
                        apply. Reply STOP to opt out.{" "}
                        <a
                          href="/privacy"
                          className="text-[oklch(0.75_0.18_220)] hover:text-[oklch(0.78_0.08_230)] hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        &{" "}
                        <a
                          href="/terms"
                          className="text-[oklch(0.75_0.18_220)] hover:text-[oklch(0.78_0.08_230)] hover:underline"
                        >
                          Terms
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
                      "Get a Free Fit Check"
                    )}
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    Free fit check first. Paid audits include the findings and
                    first fix.
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
