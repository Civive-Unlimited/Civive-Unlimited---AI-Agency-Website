import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { legalPageMeta } from "@/prerender-routes";
import { site } from "@/content/site";

export default function Privacy() {
  return (
    <>
      <Seo {...legalPageMeta.privacy} path="/privacy" />
      <main className="homepage-shell legal-page min-h-screen py-24 text-foreground">
        <div className="container mx-auto max-w-3xl px-4">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <h1 className="mb-8 text-3xl font-semibold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Effective Date:</strong>{" "}
              February 28, 2026
            </p>
            <p>
              {site.name} ("we," "us," or "our") respects your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, submit a
              form, request a visibility report, book an appointment, purchase a
              software subscription, or communicate with us by email, phone, or
              text message.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              when you fill out our contact forms, request a complimentary
              visibility report, book an appointment, purchase a software
              subscription, or contact us directly. This may include your name,
              email address, phone number, business name, billing contact
              details, subscription selection, and any message content you
              submit.
            </p>
            <p>
              Payments are processed by Stripe. We do not store full card
              numbers on our website. Stripe may collect payment, billing,
              fraud-prevention, and transaction information according to its own
              privacy terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to respond to your inquiries,
              provide our services, send service-related updates, send SMS
              communications when you have opted in, improve our website, and
              comply with legal obligations.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              SMS Communications
            </h2>
            <p>
              If you provide your mobile number and explicitly consent to
              receive text messages, we may send conversational SMS about your
              audit fit request, appointments, onboarding, and service updates.
              Message frequency varies. Message and data rates may apply. You
              can opt out at any time by replying STOP, and you can reply HELP
              for help.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              How We Share Information
            </h2>
            <p>
              We do not sell your personal information. We may share information
              with service providers who help us operate our business, such as
              CRM, website hosting, analytics, scheduling, and communications
              providers, solely to support our business operations and client
              communication.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p>
              We use trusted business operations, CRM, scheduling,
              communications, hosting, analytics, and form-processing providers
              to operate the site, manage inquiries, and improve performance.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us at {site.email}.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
              <br />
              Email: {site.email}
              <br />
              Phone: {site.phone}
              <br />
              Location: {site.location}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
