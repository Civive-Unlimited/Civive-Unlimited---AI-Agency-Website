import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const promises = [
    "I answer my own phone.",
    "I do the actual work (no outsourcing).",
    "I only take clients I know I can help.",
    "I'm building this for the long haul.",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent!", {
      description: "I'll get back to you within 24 hours. Talk soon!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* My Promise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">My Promise to You</span>
            </h2>
            
            <p className="font-['Space_Grotesk'] text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm not a faceless agency. I'm a builder who's obsessed with helping businesses win. 
              When you work with Civive Unlimited, you work directly with me.
            </p>

            <div className="space-y-4 mb-8">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[oklch(0.75_0.18_220)] flex-shrink-0" />
                  <span className="font-['Space_Grotesk'] text-foreground">
                    {promise}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="glass-card p-6 mb-8">
              <p className="font-['Space_Grotesk'] text-muted-foreground text-sm mb-4">
                I'm currently accepting <span className="text-[oklch(0.55_0.25_300)] font-semibold">2-3 new clients per month</span> to 
                ensure every partner gets my full attention.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:417-952-6436"
                  className="flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.18_220)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-['Space_Grotesk']">417-952-6436</span>
                </a>
                <a 
                  href="mailto:ceo@civiveunlimited.com"
                  className="flex items-center gap-3 text-foreground hover:text-[oklch(0.75_0.18_220)] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-['Space_Grotesk']">ceo@civiveunlimited.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-['Syne'] text-2xl font-bold text-foreground mb-2">
                Let's Talk
              </h3>
              <p className="font-['Space_Grotesk'] text-muted-foreground mb-6">
                Tell me about your business and what you're looking to achieve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      required
                      placeholder="John Smith"
                      className="bg-background/50 border-border/50 focus:border-[oklch(0.75_0.18_220)]"
                    />
                  </div>
                  <div>
                    <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-2 block">
                      Business Name
                    </label>
                    <Input
                      required
                      placeholder="Smith's HVAC"
                      className="bg-background/50 border-border/50 focus:border-[oklch(0.75_0.18_220)]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@smithshvac.com"
                      className="bg-background/50 border-border/50 focus:border-[oklch(0.75_0.18_220)]"
                    />
                  </div>
                  <div>
                    <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="bg-background/50 border-border/50 focus:border-[oklch(0.75_0.18_220)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-2 block">
                    What's your biggest challenge right now?
                  </label>
                  <Textarea
                    required
                    placeholder="Tell me about your business, your goals, and what's holding you back..."
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-[oklch(0.75_0.18_220)] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-6 text-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
