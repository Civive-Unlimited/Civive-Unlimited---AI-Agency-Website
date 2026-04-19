import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { legalPageMeta } from "@/prerender-routes";
import { site } from "@/content/site";

export default function Privacy() {
  return (
    <>
      <Seo {...legalPageMeta.privacy} path="/privacy" />
      <main className="homepage-shell min-h-screen py-24 text-foreground">
        <div className="container mx-auto max-w-3xl px-4">
          <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <h1 className="mb-8 text-3xl font-semibold text-white sm:text-4xl">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p><strong className="text-foreground">Effective Date:</strong> February 28, 2026</p>
          <p>Civive Unlimited ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit a form, request an audit, book an appointment, or communicate with us by email, phone, or text message.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide when you fill out our contact forms, request a complimentary audit, book an appointment, or contact us directly. This may include your name, email address, phone number, business name, and any message content you submit.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, send service-related updates, send SMS communications when you have opted in, improve our website, and comply with legal obligations.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">SMS Communications</h2>
          <p>If you provide your mobile number and explicitly consent to receive text messages, we may send conversational SMS about your audit request, appointments, onboarding, and service updates. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP, and you can reply HELP for help.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">How We Share Information</h2>
          <p>We do not sell your personal information. We may share information with service providers who help us operate our business, such as CRM, website hosting, analytics, scheduling, and communications providers, solely to support our business operations and client communication.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Third-Party Services</h2>
          <p>We use GoHighLevel (GHL) as our CRM platform to manage leads and communications. Your data may be processed through GHL's systems. We also use Vercel for website hosting and may use analytics or form-processing tools to operate the site and improve performance.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us at ceo@civiveunlimited.com.</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:<br />
          Email: {site.email}<br />
          Phone: {site.phone}<br />
          Location: Springfield, Missouri</p>
          </div>
        </div>
      </main>
    </>
  );
}
