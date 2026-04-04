import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProofSection from "@/components/sections/ProofSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyCiviveSection from "@/components/sections/WhyCiviveSection";

export default function Home() {
  return (
    <div className="homepage-shell">
      <HeroSection />
      <ResultsSection />
      <IndustriesSection />
      <WhyCiviveSection />
      <ProofSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
