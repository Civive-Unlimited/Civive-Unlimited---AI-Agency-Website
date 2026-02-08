import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Phone,
  Star,
  Calendar,
  CreditCard,
  BarChart3,
  Globe,
  Users,
  Mail,
  Megaphone,
  Bot,
  Workflow,
  Bell,
  FileText,
  Zap,
  Shield,
} from "lucide-react";

/*
 * GHL SHOWCASE SECTION
 * Visual walkthrough of the GoHighLevel platform features
 * Shows prospects the enterprise-grade system behind our services
 */

export default function GHLShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Bot, title: "AI Voice Agent", desc: "24/7 phone receptionist that books appointments" },
    { icon: MessageSquare, title: "AI Web Chat", desc: "Instant answers on your website, always on" },
    { icon: Phone, title: "Missed-Call Text Back", desc: "Auto-text every missed call in seconds" },
    { icon: Star, title: "Review Automation", desc: "Generate 5-star reviews on autopilot" },
    { icon: Calendar, title: "Smart Scheduling", desc: "Online booking with automated reminders" },
    { icon: CreditCard, title: "Text-to-Pay", desc: "Send invoices, get paid instantly via text" },
    { icon: BarChart3, title: "Visual Pipeline", desc: "Track every lead from first touch to close" },
    { icon: Globe, title: "70+ Listing Sync", desc: "Fix your info across Google, Yelp, Bing, Siri" },
    { icon: Users, title: "Smart CRM", desc: "Every contact, conversation, and deal in one place" },
    { icon: Mail, title: "Email Campaigns", desc: "Automated nurture sequences that convert" },
    { icon: Megaphone, title: "Social Planner", desc: "Schedule posts across all platforms" },
    { icon: Workflow, title: "Workflow Builder", desc: "If-this-then-that automation for your business" },
    { icon: Bell, title: "Appointment Reminders", desc: "End no-shows with smart SMS reminders" },
    { icon: FileText, title: "Funnel Builder", desc: "Landing pages that capture and convert" },
    { icon: Zap, title: "Database Reactivation", desc: "AI calls old leads to generate instant revenue" },
    { icon: Shield, title: "Reputation Dashboard", desc: "Monitor all reviews across every platform" },
  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Zap className="w-4 h-4 text-[oklch(0.75_0.18_220)]" />
            <span className="text-sm font-['Space_Grotesk'] text-muted-foreground">
              Enterprise Platform
            </span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">One Platform. Everything You Need.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-3xl mx-auto">
            Powered by GoHighLevel, the same platform used by 1.4 million businesses. We configure, customize, and manage it all for you.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="glass-card p-4 sm:p-5 group hover:scale-[1.03] transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.15] to-[oklch(0.55_0.25_300)/0.15] mb-3 group-hover:from-[oklch(0.75_0.18_220)/0.3] group-hover:to-[oklch(0.55_0.25_300)/0.3] transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[oklch(0.75_0.18_220)]" />
              </div>
              <h4 className="font-['Syne'] text-sm sm:text-base font-bold text-foreground mb-1">
                {feature.title}
              </h4>
              <p className="font-['Space_Grotesk'] text-xs text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-['Space_Grotesk'] text-muted-foreground text-sm mb-4">
            All 16+ features included in every plan. No hidden add-ons.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-3 px-8 rounded-lg transition-all"
          >
            See Pricing
          </a>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
