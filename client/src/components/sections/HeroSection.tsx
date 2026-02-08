import { motion } from "framer-motion";
import { ArrowRight, Radar, Phone } from "lucide-react";

interface HeroSectionProps {
  onOpenSpyModal: () => void;
}

export default function HeroSection({ onOpenSpyModal }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 220) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 220) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.65_0.20_180)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.65_0.20_180)]" />
            </span>
            <span className="text-sm font-['Space_Grotesk'] text-muted-foreground">
              Now Accepting Founding Partners
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Stop Losing Leads.</span>
            <br />
            <span className="gradient-text text-glow-blue">Start Dominating.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Space_Grotesk'] text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We install AI-powered infrastructure that captures every lead, converts
            calls 24/7, and scales your business on autopilot. Built on the same
            platform used by 1.4 million businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenSpyModal}
              className="w-full sm:w-auto magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold text-base py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Radar className="w-5 h-5" />
              Spy on Your Competitors
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto magnetic-btn bg-secondary/50 hover:bg-secondary text-foreground font-['Space_Grotesk'] font-semibold text-base py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 border border-border/50"
            >
              <Phone className="w-5 h-5" />
              Book a Free Call
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_220)/0.3] to-[oklch(0.55_0.25_300)/0.3] border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-foreground/60">
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <span className="font-['Space_Grotesk'] text-sm">
                <strong className="text-foreground">3 spots left</strong> at
                founding rates
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border/50" />
            <span className="font-['Space_Grotesk'] text-sm">
              Springfield, MO & Nationwide
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
