import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  ListChecks,
  Star,
  Crosshair,
  Bot,
  PhoneOff,
  Inbox,
  Database,
  BarChart3,
  Mic,
} from "lucide-react";

/*
 * AI INFRASTRUCTURE STACK SECTION
 * 3-Column Grid: CAPTURE → CONVERT → SCALE
 * Replaces old generic ServicesSection
 */

export default function InfrastructureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const columns = [
    {
      phase: "01",
      title: "CAPTURE",
      subtitle: "Visibility",
      description: "Get found everywhere your customers are searching.",
      color: "from-[oklch(0.75_0.18_220)] to-[oklch(0.65_0.20_240)]",
      borderColor: "border-[oklch(0.75_0.18_220)/0.4]",
      glowColor: "oklch(0.75 0.18 220 / 0.15)",
      items: [
        {
          icon: ListChecks,
          title: "70+ Listing Sync",
          desc: "Instant fix for Google, Yelp, Bing, Siri, and 70+ directories. One click, everywhere.",
        },
        {
          icon: Star,
          title: "Reputation Engine",
          desc: "Automated review generation. Turn every happy customer into a 5-star review.",
        },
        {
          icon: Crosshair,
          title: "Competitor Intel",
          desc: "Real-time tracking of local rivals. Know what they're doing before they do it.",
        },
      ],
    },
    {
      phase: "02",
      title: "CONVERT",
      subtitle: "The AI Workforce",
      description: "Turn every interaction into a booked appointment.",
      color: "from-[oklch(0.55_0.25_300)] to-[oklch(0.45_0.22_280)]",
      borderColor: "border-[oklch(0.55_0.25_300)/0.4]",
      glowColor: "oklch(0.55 0.25 300 / 0.15)",
      items: [
        {
          icon: Mic,
          title: "24/7 AI Voice Receptionist",
          desc: "Human-sounding AI answers calls, qualifies leads, and books appointments around the clock.",
        },
        {
          icon: PhoneOff,
          title: "Missed-Call Text Back",
          desc: "Instantly engages missed calls via SMS. Never lose a lead to voicemail again.",
        },
        {
          icon: Inbox,
          title: "Unified Inbox",
          desc: "Consolidates Facebook, Instagram, SMS, and Email into one conversation stream.",
        },
      ],
    },
    {
      phase: "03",
      title: "SCALE",
      subtitle: "Growth",
      description: "Automate growth and unlock hidden revenue.",
      color: "from-[oklch(0.65_0.20_180)] to-[oklch(0.55_0.18_200)]",
      borderColor: "border-[oklch(0.65_0.20_180)/0.4]",
      glowColor: "oklch(0.65 0.20 180 / 0.15)",
      items: [
        {
          icon: Database,
          title: "Database Reactivation",
          desc: "AI calls your old leads to generate instant cash from contacts you already have.",
        },
        {
          icon: BarChart3,
          title: "Pipeline Automation",
          desc: "Visual CRM dashboard. Leads move through your funnel automatically.",
        },
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Eye className="w-4 h-4 text-[oklch(0.75_0.18_220)]" />
            <span className="text-sm font-['Space_Grotesk'] text-muted-foreground">
              Powered by GoHighLevel
            </span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The AI Infrastructure Stack</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-3xl mx-auto">
            A complete technology platform that captures leads, converts them automatically, and scales your revenue. This isn't marketing—it's infrastructure.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {columns.map((col, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + colIndex * 0.15 }}
              className={`glass-card p-6 sm:p-8 ${col.borderColor} relative overflow-hidden`}
              style={{
                boxShadow: `0 0 40px ${col.glowColor}`,
              }}
            >
              {/* Phase Number */}
              <div className="absolute top-4 right-4 font-['JetBrains_Mono'] text-6xl font-bold opacity-[0.06] text-foreground">
                {col.phase}
              </div>

              {/* Column Header */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${col.color} mb-3`}>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-white tracking-wider">
                    {col.title}
                  </span>
                </div>
                <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-1">
                  {col.subtitle}
                </h3>
                <p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
                  {col.description}
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {col.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${col.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] font-semibold text-foreground text-sm">
                        {item.title}
                      </div>
                      <div className="font-['Space_Grotesk'] text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
