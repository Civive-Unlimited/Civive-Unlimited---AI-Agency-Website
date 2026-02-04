import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, Rocket, Trophy } from "lucide-react";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      week: "Week 1",
      title: "The Digital Foundation",
      description: "We build your AI-powered website and set up your AIO (AI Optimization) so you show up when people ask Siri, ChatGPT, or Google for help.",
      icon: Globe,
      color: "from-[oklch(0.75_0.18_220)] to-[oklch(0.65_0.20_240)]",
    },
    {
      week: "Week 2",
      title: "The AI Employee",
      description: "We deploy your 24/7 AI chatbot and missed-call text-back system. You'll never lose a lead to a missed call again.",
      icon: Bot,
      color: "from-[oklch(0.65_0.20_260)] to-[oklch(0.55_0.22_280)]",
    },
    {
      week: "Week 3",
      title: "The Growth Engine",
      description: "We launch your social media automation and ChatGPT-powered ads. Your brand starts showing up everywhere, automatically.",
      icon: Rocket,
      color: "from-[oklch(0.55_0.25_300)] to-[oklch(0.45_0.22_320)]",
    },
    {
      week: "Week 4",
      title: "The Hand-Off",
      description: "We train you on the dashboard, show you how to track leads, and set you up for long-term success. You're now running a smarter business.",
      icon: Trophy,
      color: "from-[oklch(0.60_0.18_180)] to-[oklch(0.50_0.16_200)]",
    },
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The 30-Day Sprint</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            From "I need help" to "My business runs itself" in just 4 weeks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.75_0.18_220)] via-[oklch(0.55_0.25_300)] to-[oklch(0.65_0.20_260)] hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card p-6 sm:p-8 inline-block text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color}`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-['JetBrains_Mono'] text-sm text-[oklch(0.75_0.18_220)]">
                      {step.week}
                    </span>
                  </div>
                  <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] ring-4 ring-background z-10" />

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
