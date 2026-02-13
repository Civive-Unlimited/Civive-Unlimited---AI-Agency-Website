import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Phone, Building2, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const counters = [
    { icon: Users, value: "—", label: "Leads Captured", suffix: "", subtext: "Launching Q1 2026" },
    { icon: Phone, value: "—", label: "AI Calls Answered", suffix: "", subtext: "Launching Q1 2026" },
    { icon: Building2, value: "5", label: "Founding Partner Spots", suffix: "", subtext: "3 Remaining" },
  ];

  const partnerSlots = [
    { status: "open", title: "Business #1", subtitle: "This Could Be You" },
    { status: "open", title: "Business #2", subtitle: "This Could Be You" },
    { status: "open", title: "Business #3", subtitle: "This Could Be You" },
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@CiviveUnlimited", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/civiveunltd", label: "X (Twitter)" },
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
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Real Results. Real Time.</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            We're building in public. Watch the numbers grow as we help businesses scale.
          </p>
        </motion.div>

        {/* Live Counters */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <counter.icon className="w-8 h-8 text-[oklch(0.75_0.18_220)] mx-auto mb-4" />
              <div className="font-['JetBrains_Mono'] text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {counter.value}{counter.suffix}
              </div>
              <div className="font-['Space_Grotesk'] text-foreground/80 font-medium">
                {counter.label}
              </div>
              {counter.subtext && (
                <div className="font-['Space_Grotesk'] text-xs text-muted-foreground mt-1">
                  {counter.subtext}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Partner Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="font-['Syne'] text-2xl font-bold text-center mb-8">
            Founding Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partnerSlots.map((slot, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center border-dashed border-2 border-[oklch(0.75_0.18_220)/0.3] hover:border-[oklch(0.75_0.18_220)/0.6] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.2] to-[oklch(0.55_0.25_300)/0.2] mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="font-['Syne'] font-bold text-foreground mb-1">
                  {slot.title}
                </h4>
                <p className="font-['Space_Grotesk'] text-sm text-[oklch(0.75_0.18_220)]">
                  {slot.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Follow the Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="font-['Syne'] text-xl font-bold mb-6">
            Follow the Build
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                className="magnetic-btn border-[oklch(0.75_0.18_220)/0.3] hover:border-[oklch(0.75_0.18_220)] hover:bg-[oklch(0.75_0.18_220)/0.1]"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
