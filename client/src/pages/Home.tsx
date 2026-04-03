import { useState } from "react";
import CompetitorSpyModal from "@/components/CompetitorSpyModal";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ResultsSection from "@/components/sections/ResultsSection";

export default function Home() {
  const [isSpyModalOpen, setIsSpyModalOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenSpyModal={() => setIsSpyModalOpen(true)} />
      <ResultsSection />
      <FAQSection />
      <ContactSection />
      <CompetitorSpyModal
        isOpen={isSpyModalOpen}
        onClose={() => setIsSpyModalOpen(false)}
      />
    </>
  );
}
