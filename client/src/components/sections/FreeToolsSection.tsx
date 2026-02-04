import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Calculator, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FreeToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    {
      icon: Search,
      title: "AI Business Audit",
      description: "Get a full health report on your online presence in 60 seconds. We'll show you your visibility grade (A-F), where your business info is wrong across the web, which directories you're missing from, and how you stack up against your top 3 local competitors.",
      highlight: "Most businesses are shocked by what they find.",
      cta: "Get Your Free Audit",
    },
    {
      icon: ClipboardCheck,
      title: "AI Readiness Quiz",
      description: "Not sure where to start? Take our 2-minute quiz to discover which AI tools fit your business best and get an estimated ROI based on your industry.",
      highlight: "Personalized recommendations in minutes.",
      cta: "Take the Quiz",
    },
    {
      icon: Calculator,
      title: "Missed Opportunity Calculator",
      description: "How much money are you leaving on the table? Enter your average job value and we'll show you exactly how much you're losing to missed calls, no-shows, and slow follow-up.",
      highlight: "The numbers might surprise you.",
      cta: "Calculate Your Losses",
    },
  ];

  const handleToolClick = (toolName: string) => {
    toast.info(`${toolName} - Coming Soon!`, {
      description: "We're putting the finishing touches on this tool. Leave your email below and we'll notify you when it's ready.",
    });
  };

  return (
    <section id="free-tools" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Not Ready Yet? Start Here.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            Free tools to help you understand where you stand and what's possible.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.2] to-[oklch(0.55_0.25_300)/0.2] mb-6 group-hover:scale-110 transition-transform">
                <tool.icon className="w-7 h-7 text-[oklch(0.75_0.18_220)]" />
              </div>

              <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-3">
                {tool.title}
              </h3>

              <p className="font-['Space_Grotesk'] text-muted-foreground text-sm leading-relaxed mb-4">
                {tool.description}
              </p>

              <p className="font-['Space_Grotesk'] text-[oklch(0.55_0.25_300)] text-sm font-semibold mb-6">
                {tool.highlight}
              </p>

              <Button
                onClick={() => handleToolClick(tool.title)}
                className="w-full magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold group"
              >
                {tool.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
