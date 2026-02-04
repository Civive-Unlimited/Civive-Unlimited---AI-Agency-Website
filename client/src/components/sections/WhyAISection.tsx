import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Zap } from "lucide-react";

export default function WhyAISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: TrendingUp,
      value: "67%",
      label: "More Leads",
      description: "Businesses using AI chatbots capture 67% more leads",
    },
    {
      icon: Clock,
      value: "12hrs",
      label: "Saved Weekly",
      description: "AI voice agents cut admin time by 12 hours per week",
    },
    {
      icon: Zap,
      value: "<30s",
      label: "Response Time",
      description: "AI responds in under 30 seconds vs. 8+ minutes traditional",
    },
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
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The Window Is Open.{" "}
            <span className="text-muted-foreground">But It Won't Stay Open Forever.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-3xl mx-auto leading-relaxed">
            Right now, AI is the best-kept secret in small business. Your competitors are either 
            already building this or they're about to. The question isn't "Should I use AI?" 
            It's "Can I afford to be the last one to start?"
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.2] to-[oklch(0.55_0.25_300)/0.2] mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-[oklch(0.75_0.18_220)]" />
              </div>
              <div className="font-['JetBrains_Mono'] text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="font-['Syne'] text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="font-['Syne'] text-xl sm:text-2xl font-semibold text-foreground">
            You're still early.{" "}
            <span className="gradient-text">Let's build your advantage before it becomes the baseline.</span>
          </p>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
