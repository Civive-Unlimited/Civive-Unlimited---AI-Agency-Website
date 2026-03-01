import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-['Space_Grotesk'] text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
        <h1 className="font-['Syne'] text-3xl sm:text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
        <div className="prose prose-invert max-w-none font-['Space_Grotesk'] text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p><strong className="text-foreground">Effective Date:</strong> February 28, 2026</p>
          <p>These Terms of Service govern your use of the Civive Unlimited website and services. By using our website, submitting a form, requesting an audit, booking an appointment, or engaging our services, you agree to these terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Services</h2>
          <p>Civive Unlimited provides AI-powered business growth solutions including websites, lead generation systems, automation, CRM setup, and marketing services. Specific deliverables, timelines, and scope are defined in individual service agreements or approved proposals.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Communications Consent</h2>
          <p>If you provide your phone number and opt in, you agree that Civive Unlimited may send you conversational SMS regarding your audit request, appointments, onboarding, and service-related updates. Message frequency varies. Message and data rates may apply. Consent to receive SMS is not a condition of purchase. You may opt out at any time by replying STOP, and you can reply HELP for assistance.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Payment Terms</h2>
          <p>Setup fees are due before work begins. Monthly retainer fees are billed on the first of each month. All prices are in USD. Late payments may result in service suspension after a 7-day grace period.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Cancellation</h2>
          <p>You may cancel recurring services according to the terms of your individual agreement. Setup fees are non-refundable once work has begun unless otherwise stated in writing. We reserve the right to pause or terminate services for non-payment, abuse, or violation of these terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Intellectual Property</h2>
          <p>Upon full payment, you own all custom work created specifically for your business. We retain the right to use anonymized case studies and portfolio examples. Third-party tools and platforms (GoHighLevel, etc.) are subject to their own terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Limitation of Liability</h2>
          <p>Civive Unlimited is not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for services in the preceding 3 months. We do not guarantee specific business results, rankings, or revenue outcomes.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Contact Us</h2>
          <p>If you have questions about these Terms, contact us at:<br />
          Email: ceo@civiveunlimited.com<br />
          Phone: (417) 952-6436<br />
          Location: Springfield, Missouri</p>
        </div>
      </div>
    </div>
  );
}
