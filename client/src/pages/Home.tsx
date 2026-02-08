import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import GHLShowcaseSection from "@/components/sections/GHLShowcaseSection";
import AISearchSection from "@/components/sections/AISearchSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import StorySection from "@/components/sections/StorySection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CompetitorSpyModal from "@/components/CompetitorSpyModal";

export default function Home() {
  const [isSpyModalOpen, setIsSpyModalOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenSpyModal={() => setIsSpyModalOpen(true)} />
      <InfrastructureSection />
      <ServicesSection />
      <GHLShowcaseSection />
      <AISearchSection />
      <PricingSection />
      <ResultsSection />
      <ProcessSection />
      <StorySection />
      <FAQSection />
      <ContactSection />
      <CompetitorSpyModal
        isOpen={isSpyModalOpen}
        onClose={() => setIsSpyModalOpen(false)}
      />
    </>
  );
}
