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
          <p><strong className="text-foreground">Effective Date:</strong> February 7, 2026</p>
          <p>These Terms of Service govern your use of the Civive Unlimited website and services. By using our website or engaging our services, you agree to these terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Services</h2>
          <p>Civive Unlimited provides AI-powered business growth solutions including website development, lead generation, automation, and marketing services. Specific deliverables and timelines are outlined in individual service agreements.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Payment Terms</h2>
          <p>Setup fees are due before work begins. Monthly retainer fees are billed on the first of each month. All prices are in USD. Late payments may result in service suspension after a 7-day grace period.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Cancellation</h2>
          <p>You may cancel your monthly retainer at any time with 30 days written notice. Setup fees are non-refundable once work has begun. We reserve the right to terminate services for non-payment or violation of these terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Intellectual Property</h2>
          <p>Upon full payment, you own all custom work created specifically for your business. We retain the right to use anonymized case studies and portfolio examples. Third-party tools and platforms (GoHighLevel, etc.) are subject to their own terms.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Limitation of Liability</h2>
          <p>Civive Unlimited is not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for services in the preceding 3 months. We do not guarantee specific business results, rankings, or revenue outcomes.</p>

          <h2 className="font-['Syne'] text-xl font-bold text-foreground mt-8">Contact Us</h2>
          <p>If you have questions about these Terms, contact us at:<br />
          Email: ceo@civiveunlimited.com<br />
          Phone: (417) 595-6484</p>
        </div>
      </div>
    </div>
  );
}
