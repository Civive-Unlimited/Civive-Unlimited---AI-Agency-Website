import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { legalPageMeta } from "@/prerender-routes";
import { site } from "@/content/site";

export default function Terms() {
  return (
    <>
      <Seo {...legalPageMeta.terms} path="/terms" />
      <main className="homepage-shell legal-page min-h-screen py-24 text-foreground">
        <div className="container mx-auto max-w-3xl px-4">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <h1 className="mb-8 text-3xl font-semibold text-white sm:text-4xl">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Effective Date:</strong>{" "}
              February 28, 2026
            </p>
            <p>
              These Terms of Service govern your use of the {site.name} website,
              services, and software subscriptions. By using our website,
              submitting a form, requesting a visibility report, booking an
              appointment, purchasing a subscription, or engaging our services,
              you agree to these terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Services
            </h2>
            <p>
              {site.name} provides AI-powered business growth solutions
              including websites, lead generation systems, automation, CRM
              setup, marketing services, and subscription access to CiviveOS.
              Specific deliverables, timelines, and scope are defined in
              checkout pages, individual service agreements, or approved
              proposals.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Communications Consent
            </h2>
            <p>
              If you provide your phone number and opt in, you agree that Civive
              Unlimited may send you conversational SMS regarding your fit check
              request, appointments, onboarding, and service-related updates.
              Message frequency varies. Message and data rates may apply.
              Consent to receive SMS is not a condition of purchase. You may opt
              out at any time by replying STOP, and you can reply HELP for
              assistance.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Payment Terms
            </h2>
            <p>
              Setup fees are due before work begins unless a checkout page
              states otherwise. CiviveOS subscriptions are billed through Stripe
              according to the plan, billing interval, trial terms, credits, and
              price shown at checkout. All prices are in USD. Late, failed,
              disputed, or canceled payments may result in service suspension,
              account pause, or loss of access.
            </p>
            <p>
              Some usage-based services, add-ons, phone, messaging, email, AI,
              and third-party platform features may create additional usage
              charges or require separate approval before activation.
              Subscription access may depend on third-party platform
              availability, carrier rules, payment processor rules, and
              compliance requirements.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Cancellation
            </h2>
            <p>
              You may cancel recurring services according to the terms of your
              individual agreement, checkout terms, or the subscription
              management options made available to you. Setup fees are
              non-refundable once work has begun unless otherwise stated in
              writing. We reserve the right to pause or terminate services for
              non-payment, abuse, compliance risk, or violation of these terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Intellectual Property
            </h2>
            <p>
              Upon full payment, you own all custom work created specifically
              for your business. We retain the right to use anonymized case
              studies and portfolio examples. Third-party tools and platforms
              used to deliver services are subject to their own terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p>
              {site.name} is not liable for any indirect, incidental, or
              consequential damages. Our total liability shall not exceed the
              amount paid for services in the preceding 3 months. We do not
              guarantee specific business results, rankings, or revenue
              outcomes.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms, contact us at:
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
