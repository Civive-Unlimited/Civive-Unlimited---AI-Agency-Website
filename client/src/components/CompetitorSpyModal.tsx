import { motion, AnimatePresence } from "framer-motion";
import { X, Radar, Shield } from "lucide-react";

interface CompetitorSpyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompetitorSpyModal({ isOpen, onClose }: CompetitorSpyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg glass-card p-8 border-[oklch(0.75_0.18_220)/0.5] overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scanner Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] flex items-center justify-center">
                  <Radar className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[oklch(0.75_0.18_220)]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-center mb-3">
              <span className="gradient-text">See Who You Are Competing Against</span>
            </h2>

            {/* Body */}
            <p className="font-['Space_Grotesk'] text-muted-foreground text-center text-sm mb-6 leading-relaxed">
              Our AI scans your local market to reveal exactly where your competitors are stealing your leads. Enter your details to generate the report.
            </p>

            {/* Native HTML Form - NO React handlers */}
            <form
              action="https://link.msgsndr.com/widget/form/submit"
              method="POST"
              className="space-y-4"
            >
              {/* Hidden tracking field */}
              <input type="hidden" name="formId" value="competitor-spy-report" />

              <div>
                <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-[oklch(0.75_0.18_220)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.75_0.18_220)] text-foreground font-['Space_Grotesk'] text-sm transition-colors"
                />
              </div>

              <div>
                <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-1.5 block">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  required
                  placeholder="Smith's HVAC"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-[oklch(0.75_0.18_220)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.75_0.18_220)] text-foreground font-['Space_Grotesk'] text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@smithshvac.com"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-[oklch(0.75_0.18_220)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.75_0.18_220)] text-foreground font-['Space_Grotesk'] text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-1.5 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-[oklch(0.75_0.18_220)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.75_0.18_220)] text-foreground font-['Space_Grotesk'] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Space_Grotesk'] text-sm text-muted-foreground mb-1.5 block">
                  Business Address <span className="text-[oklch(0.55_0.25_300)]">(Required for Local Scan)</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="123 Main St, Springfield, MO 65802"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-[oklch(0.75_0.18_220)] focus:outline-none focus:ring-1 focus:ring-[oklch(0.75_0.18_220)] text-foreground font-['Space_Grotesk'] text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full magnetic-btn bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.55_0.25_300)] hover:opacity-90 text-white font-['Space_Grotesk'] font-semibold py-4 text-base rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Radar className="w-5 h-5" />
                Generate My Competitor Report
              </button>
            </form>

            {/* Trust */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="font-['Space_Grotesk'] text-xs text-muted-foreground">
                Your data is secure. We never share your information.
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
