import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Search,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/*
 * AI SEARCH OPTIMIZATION SECTION
 * Explains why AI Search matters and positions the high-ticket tier
 * Google AI Overviews, ChatGPT search, Perplexity, Siri
 */

export default function AISearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const threats = [
    "Google AI Overviews now answer 40% of searches without a click",
    "ChatGPT Search is replacing traditional Google searches for millions",
    "Perplexity AI pulls answers from structured data—not your website",
    "Siri and Alexa recommend businesses based on AI-readable data",
  ];

  const solutions = [
    {
      icon: Brain,
      title: "Schema Markup & Structured Data",
      desc: "We make your business machine-readable so AI systems can find and recommend you.",
    },
    {
      icon: Globe,
      title: "AI Overview Optimization",
      desc: "Position your business as the answer when Google's AI summarizes search results.",
    },
    {
      icon: Search,
      title: "Conversational Query Targeting",
      desc: "Optimize for how people actually talk to AI: 'Who's the best plumber near me?'",
    },
    {
      icon: TrendingUp,
      title: "Authority Building",
      desc: "Build the citation network and content depth that AI systems trust and reference.",
    },
  ];

  return (
    <section id="ai-search" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.22_25)/0.15] border border-[oklch(0.65_0.22_25)/0.3] mb-6">
            <AlertTriangle className="w-4 h-4 text-[oklch(0.75_0.20_60)]" />
            <span className="text-sm font-['Space_Grotesk'] text-[oklch(0.75_0.20_60)]">
              Critical for 2025-2026
            </span>
          </div>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Search Is Replacing Google.</span>
            <br />
            <span className="text-foreground">Is Your Business Ready?</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-3xl mx-auto">
            The way customers find businesses is changing faster than ever. AI-powered search engines are answering questions directly—without sending traffic to your website. If you're not optimized for AI search, you're becoming invisible.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 border-[oklch(0.65_0.22_25)/0.3]"
          >
            <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-2">
              The Threat
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-6">
              Most businesses don't realize they're already losing customers to AI search:
            </p>
            <div className="space-y-4">
              {threats.map((threat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[oklch(0.65_0.22_25)] flex-shrink-0 mt-0.5" />
                  <span className="font-['Space_Grotesk'] text-sm text-foreground/80">
                    {threat}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[oklch(0.65_0.22_25)/0.1] border border-[oklch(0.65_0.22_25)/0.2]">
              <p className="font-['Space_Grotesk'] text-sm text-foreground/90 font-semibold">
                Bottom line: If AI can't read your business data, AI can't recommend your business.
              </p>
            </div>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 sm:p-8 border-[oklch(0.65_0.20_180)/0.3]"
          >
            <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-2">
              Our Solution
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-6">
              We make your business the answer AI gives:
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.20_180)/0.2] to-[oklch(0.55_0.18_200)/0.2] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-4 h-4 text-[oklch(0.65_0.20_180)]" />
                  </div>
                  <div>
                    <div className="font-['Space_Grotesk'] font-semibold text-foreground text-sm">
                      {solution.title}
                    </div>
                    <div className="font-['Space_Grotesk'] text-xs text-muted-foreground mt-0.5">
                      {solution.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[oklch(0.65_0.20_180)/0.1] border border-[oklch(0.65_0.20_180)/0.2]">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-[oklch(0.65_0.20_180)]" />
                <span className="font-['Space_Grotesk'] text-sm text-foreground font-semibold">
                  Result:
                </span>
              </div>
              <p className="font-['Space_Grotesk'] text-xs text-muted-foreground">
                When someone asks ChatGPT, Google, or Siri "Who's the best [your service] near me?"—your business is the answer.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Get AI Search Optimized
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
