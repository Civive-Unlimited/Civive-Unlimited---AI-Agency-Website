import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Starter",
      description: "Pick any 2 services from our menu",
      setup: "$197",
      setupOriginal: null,
      monthly: "$147",
      features: [
        "Choose ANY 2 services",
        "Basic CRM access",
        "Email support",
        "Monthly check-in call",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Foundation",
      description: "The 'Never Miss a Lead' suite",
      setup: "$497",
      setupOriginal: null,
      monthly: "$297",
      features: [
        "AI Web Chat",
        "Missed Call Text-Back",
        "Google Business Integration",
        "Full CRM access",
        "Review Automation",
        "Priority email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      description: "Full lead gen + automation",
      setup: "$997",
      setupOriginal: null,
      monthly: "$497",
      features: [
        "Everything in Foundation",
        "AI Voice Agent",
        "Social Media Posting",
        "Facebook/Instagram Ads",
        "Google Ads Management",
        "Pipeline Automation",
        "2-Way SMS",
        "Weekly strategy calls",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      description: "Multi-location, advanced needs",
      setup: "Custom",
      setupOriginal: null,
      monthly: "$997+",
      features: [
        "Everything in Growth",
        "Multi-location support",
        "Custom integrations",
        "Dedicated account manager",
        "Priority support",
        "Custom reporting",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">No Corporate BS. Just Results.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Founding Partner Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="glass-card p-6 text-center border-[oklch(0.55_0.25_300)/0.5]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-[oklch(0.55_0.25_300)]" />
              <span className="font-['Syne'] font-bold text-[oklch(0.55_0.25_300)]">
                FOUNDING PARTNER DEAL
              </span>
              <Star className="w-5 h-5 text-[oklch(0.55_0.25_300)]" />
            </div>
            <p className="font-['Space_Grotesk'] text-foreground">
              <span className="font-bold">50% off all setup fees</span> for our first 10 partners.
              <br />
              <span className="text-muted-foreground text-sm">
                Lock in your rate for life. Prices will increase after launch.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`glass-card p-6 sm:p-8 relative ${
                tier.popular ? "ring-2 ring-[oklch(0.55_0.25_300)]" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] text-white text-xs font-['Space_Grotesk'] font-semibold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-1">
                  {tier.name}
                </h3>
                <p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="font-['JetBrains_Mono'] text-3xl font-bold gradient-text">
                  {tier.monthly}
                  <span className="text-sm text-muted-foreground font-normal">/mo</span>
                </div>
                <div className="font-['Space_Grotesk'] text-sm text-muted-foreground mt-1">
                  {tier.setup} setup
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[oklch(0.75_0.18_220)] mt-0.5 flex-shrink-0" />
                    <span className="font-['Space_Grotesk'] text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full magnetic-btn font-['Space_Grotesk'] font-semibold ${
                  tier.popular
                    ? "bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
