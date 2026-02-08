import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

/*
 * 4-TIER HIGH-TICKET PRICING
 * Foundation → Growth System → AI Search Domination → Market Domination
 * Growth System is the "popular" anchor
 */

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Foundation",
      icon: Zap,
      tagline: "Get Found. Get Calls.",
      setup: "$497",
      monthly: "$197",
      period: "/mo",
      popular: false,
      color: "border-[oklch(0.75_0.18_220)/0.3]",
      buttonClass: "bg-secondary/50 hover:bg-secondary text-foreground",
      features: [
        "Custom AI Website",
        "Google Business Optimization",
        "70+ Listing Sync",
        "Missed-Call Text Back",
        "Basic Review Automation",
        "CRM Setup",
        "Monthly Performance Report",
      ],
      bestFor: "New businesses that need a professional online presence fast.",
    },
    {
      name: "Growth System",
      icon: Rocket,
      tagline: "The Full AI Workforce",
      setup: "$997",
      monthly: "$997",
      period: "/mo",
      popular: true,
      color: "border-[oklch(0.75_0.18_220)]",
      buttonClass: "bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] text-white hover:opacity-90",
      features: [
        "Everything in Foundation",
        "24/7 AI Voice Receptionist",
        "AI Web Chat Widget",
        "Unified Inbox (SMS, Email, Social)",
        "Pipeline Automation",
        "Text-to-Pay Invoicing",
        "Smart Appointment Reminders",
        "Social Media Posting",
        "Database Reactivation Campaign",
        "Weekly Strategy Calls",
        "Dedicated Account Manager",
      ],
      bestFor: "Businesses ready to automate lead capture and conversion.",
    },
    {
      name: "AI Search Domination",
      icon: Star,
      tagline: "Own the AI Answer",
      setup: "$2,497",
      monthly: "$1,497",
      period: "/mo",
      popular: false,
      color: "border-[oklch(0.55_0.25_300)/0.5]",
      buttonClass: "bg-gradient-to-r from-[oklch(0.55_0.25_300)] to-[oklch(0.45_0.22_280)] text-white hover:opacity-90",
      features: [
        "Everything in Growth System",
        "AI Search Optimization (AIO)",
        "Schema Markup & Structured Data",
        "Google AI Overview Targeting",
        "ChatGPT & Perplexity Optimization",
        "Voice Search Optimization (Siri/Alexa)",
        "Authority Content Strategy",
        "Competitor AI Search Monitoring",
        "Monthly AI Search Ranking Report",
        "Priority Support",
      ],
      bestFor: "Businesses that want to dominate AI-powered search results.",
    },
    {
      name: "Market Domination",
      icon: Crown,
      tagline: "Total Market Control",
      setup: "$4,997",
      monthly: "$2,497",
      period: "/mo",
      popular: false,
      color: "border-[oklch(0.75_0.20_60)/0.4]",
      buttonClass: "bg-gradient-to-r from-[oklch(0.75_0.20_60)] to-[oklch(0.65_0.22_40)] text-white hover:opacity-90",
      features: [
        "Everything in AI Search Domination",
        "Facebook & Instagram Ad Management",
        "Google Ads Management",
        "Custom Funnel Building",
        "Advanced Workflow Automation",
        "Multi-Location Support",
        "White-Glove Onboarding",
        "Bi-Weekly Strategy Sessions",
        "Dedicated Slack Channel",
        "Custom Integrations",
      ],
      bestFor: "Businesses ready to own their entire local market.",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Choose Your Growth Path</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Every plan includes the full GoHighLevel platform. No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`glass-card p-6 sm:p-8 relative ${tier.color} ${
                tier.popular ? "ring-2 ring-[oklch(0.75_0.18_220)] scale-[1.02]" : ""
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] text-white text-xs font-['Space_Grotesk'] font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-6">
                <tier.icon className="w-8 h-8 text-[oklch(0.75_0.18_220)] mx-auto mb-3" />
                <h3 className="font-['Syne'] text-xl font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="font-['Space_Grotesk'] text-sm text-muted-foreground mt-1">
                  {tier.tagline}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6 pb-6 border-b border-border/30">
                <div className="font-['Space_Grotesk'] text-xs text-muted-foreground mb-1">
                  Setup: {tier.setup}
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-['Syne'] text-4xl font-bold gradient-text">
                    {tier.monthly}
                  </span>
                  <span className="font-['Space_Grotesk'] text-muted-foreground text-sm mb-1">
                    {tier.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[oklch(0.65_0.20_180)] flex-shrink-0 mt-0.5" />
                    <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Best For */}
              <p className="font-['Space_Grotesk'] text-xs text-muted-foreground italic mb-6">
                Best for: {tier.bestFor}
              </p>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center magnetic-btn font-['Space_Grotesk'] font-semibold py-3 rounded-lg transition-all ${tier.buttonClass}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Founding Partner Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3">
            <Star className="w-4 h-4 text-[oklch(0.75_0.20_60)]" />
            <span className="font-['Space_Grotesk'] text-sm text-foreground">
              <strong>Founding Partner Discount:</strong> First 5 clients lock in these rates for life.
            </span>
            <Star className="w-4 h-4 text-[oklch(0.75_0.20_60)]" />
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
