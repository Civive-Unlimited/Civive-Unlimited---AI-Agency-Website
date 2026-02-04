import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  Phone, 
  Star, 
  Bot, 
  Megaphone, 
  Workflow,
  PhoneCall,
  Globe,
  CreditCard,
  Bell,
  Users,
  Search
} from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Never Miss a Lead",
      description: "We make sure every person who tries to reach you gets an answer instantly.",
      icon: MessageSquare,
      color: "from-[oklch(0.75_0.18_220)] to-[oklch(0.65_0.20_240)]",
      features: [
        { icon: MessageSquare, label: "AI Web Chat", desc: "Your 24/7 digital receptionist" },
        { icon: PhoneCall, label: "Missed Call Text-Back", desc: "The 'Safety Net' that saves every call" },
        { icon: Globe, label: "Google Business Integration", desc: "Chat with customers from search" },
      ],
      size: "large",
    },
    {
      title: "Reputation & Ranking",
      description: "We make you the most trusted and visible name in your local market.",
      icon: Star,
      color: "from-[oklch(0.55_0.25_300)] to-[oklch(0.45_0.22_280)]",
      features: [
        { icon: Search, label: "AIO (AI Optimization)", desc: "Top answer for Siri, ChatGPT, Gemini" },
        { icon: Star, label: "Review Automation", desc: "Turn customers into 5-star reviews" },
      ],
      size: "medium",
    },
    {
      title: "Business on Autopilot",
      description: "We handle the paperwork and follow-ups so you can focus on the work.",
      icon: Workflow,
      color: "from-[oklch(0.65_0.20_260)] to-[oklch(0.55_0.18_240)]",
      features: [
        { icon: CreditCard, label: "Text-to-Pay Invoicing", desc: "Get paid faster, zero friction" },
        { icon: Bell, label: "Smart Appointment Reminders", desc: "End the 'No-Show' problem" },
        { icon: Users, label: "Digital Rolodex (CRM)", desc: "One place for every contact" },
      ],
      size: "medium",
    },
    {
      title: "AI Voice Agent",
      description: "Your phone never goes unanswered. AI handles calls like a pro.",
      icon: Phone,
      color: "from-[oklch(0.70_0.19_200)] to-[oklch(0.60_0.17_220)]",
      features: [
        { icon: Bot, label: "24/7 AI Phone Receptionist", desc: "Answers, books, qualifies" },
        { icon: Phone, label: "Voicemail Drop", desc: "Leave messages instantly" },
        { icon: MessageSquare, label: "Call Recording & Transcription", desc: "Every conversation saved" },
      ],
      size: "medium",
    },
    {
      title: "Content & Ads Engine",
      description: "Stop wasting money on clicks. We build ads that start conversations.",
      icon: Megaphone,
      color: "from-[oklch(0.60_0.22_320)] to-[oklch(0.50_0.20_300)]",
      features: [
        { icon: Megaphone, label: "Facebook & Instagram Ads", desc: "AI-optimized campaigns" },
        { icon: Search, label: "Google Ads Management", desc: "Show up when they search" },
        { icon: MessageSquare, label: "Social Media Posting", desc: "Automated content everywhere" },
      ],
      size: "large",
    },
    {
      title: "Advanced Automation",
      description: "Your business runs itself. Leads flow, messages send, deals close.",
      icon: Bot,
      color: "from-[oklch(0.65_0.18_180)] to-[oklch(0.55_0.16_200)]",
      features: [
        { icon: Workflow, label: "Pipeline Automation", desc: "Leads move automatically" },
        { icon: MessageSquare, label: "2-Way SMS Conversations", desc: "Text from one number" },
        { icon: Star, label: "Reputation Management", desc: "Monitor all reviews in one place" },
      ],
      size: "medium",
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Civive Essential Toolkit</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Everything you need to capture leads, build reputation, and automate your business.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`glass-card p-6 sm:p-8 group hover:scale-[1.02] transition-all duration-300 ${
                service.size === "large" ? "lg:col-span-2" : ""
              }`}
              style={{
                transform: `translateZ(${(index % 3) * 10}px)`,
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <div 
                    key={fIndex}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-[oklch(0.75_0.18_220)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-['Space_Grotesk'] font-semibold text-foreground text-sm">
                        {feature.label}
                      </div>
                      <div className="font-['Space_Grotesk'] text-xs text-muted-foreground">
                        {feature.desc}
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
