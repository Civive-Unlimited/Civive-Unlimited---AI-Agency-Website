import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ResultsSection from "@/components/sections/ResultsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResultsSection />
      <div id="faq">
        <FAQSection />
      </div>
      <ContactSection />
    </>
  );
}
