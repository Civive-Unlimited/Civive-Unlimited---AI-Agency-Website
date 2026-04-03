import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const scrollToId = (id: string) => {
  const element = document.querySelector(`#${id}`);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {

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
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Every missed call is lost money.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Space_Grotesk'] text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Civive Unlimited gives service businesses an AI receptionist that answers
            calls, captures leads, follows up fast, and helps book appointments so
            opportunities do not slip through the cracks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="w-full sm:w-auto magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold text-base py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToId("how-it-works")}
              className="w-full sm:w-auto magnetic-btn bg-secondary/50 hover:bg-secondary text-foreground font-['Space_Grotesk'] font-semibold text-base py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 border border-border/50"
            >
              See how it works
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-muted-foreground"
          >
            {[
              "Answers 24/7",
              "Captures every lead",
              "Helps book appointments",
              "Works after hours",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-['Space_Grotesk'] text-sm text-foreground/85">
                  {item}
                </span>
                {index < 3 && <div className="hidden sm:block h-4 w-px bg-border/50" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
