import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Hero Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/J3m67B7PrlBhxWTfJXdOiD/sandbox/V1gqjDxB005ARii1hcDsca-img-1_1770181400000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSjNtNjdCN1BybEJoeFdUZkpYZE9pRC9zYW5kYm94L1YxZ3FqRHhCMDA1QVJpaTFoY0RzY2EtaW1nLTFfMTc3MDE4MTQwMDAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ptFmdK3zSDhgNS-4jNCIzxeTwB6HUiwqNBNm-dLHTtLV84xB0MLcWthm228DjDYaDu9fYzW9cI0B47Y-uxl2nvTHUUW-~HLai3~Cce8NiVLflEFS7q0V8MV9p7fxbUyTcK6IaWBsEFA5yT05mqHICI~sPpuxGaXF9nkLjkFbKYfB6pP63gKx7QI-MMfUJFX~tKlbT8XpDxqJ9hmyAqJzVZC5t-jZOFT7IrG40Aa1LUmu-6GLgmmvFJ3CIQDlLiW~pZme9TBiSnz6RRaadP1qlYspMDmbIMJAeWH2ZVKKKdfsBg0tAdNjY7dd59M7ODtzHxoK8fEX6FeynBVtm7PIlQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Zap className="w-4 h-4 text-[oklch(0.75_0.18_220)]" />
            <span className="text-sm font-['Space_Grotesk'] text-muted-foreground">
              AI-Powered Business Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Stop Working{" "}
            <span className="text-muted-foreground italic">for</span> Your Business.
            <br />
            <span className="gradient-text text-glow-blue">Start Scaling with AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Space_Grotesk'] text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We give small businesses the "Unfair Advantage" they deserve. Custom AI websites, 
            automated lead systems, and ads that actually talk to your customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold px-8 py-6 text-lg group"
            >
              Get Your Unfair Advantage
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("#free-tools")}
              variant="outline"
              size="lg"
              className="magnetic-btn border-[oklch(0.75_0.18_220)/0.5] hover:border-[oklch(0.75_0.18_220)] hover:bg-[oklch(0.75_0.18_220)/0.1] font-['Space_Grotesk'] font-semibold px-8 py-6 text-lg"
            >
              Get Your Free Business Audit
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-4 font-['Space_Grotesk']">
              Built for businesses that refuse to be limited
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.75_0.18_220)]" />
                <span className="text-sm font-['Space_Grotesk']">24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.25_300)]" />
                <span className="text-sm font-['Space_Grotesk']">Results in 30 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.20_260)]" />
                <span className="text-sm font-['Space_Grotesk']">No Long-Term Contracts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.18_220)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
