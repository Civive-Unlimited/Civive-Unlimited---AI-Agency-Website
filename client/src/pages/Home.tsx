import Seo from "@/components/Seo";
import AuditChecksSection from "@/components/sections/AuditChecksSection";
import BuildInPublicPreviewSection from "@/components/sections/BuildInPublicPreviewSection";
import FAQSection from "@/components/sections/FAQSection";
import GrowthSystemsSection from "@/components/sections/GrowthSystemsSection";
import HeroSection from "@/components/sections/HeroSection";
import HomeAuthorityMapSection from "@/components/sections/HomeAuthorityMapSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProofSection from "@/components/sections/ProofSection";
import ProspectingWidgetEmbed from "@/components/ProspectingWidgetEmbed";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyCiviveSection from "@/components/sections/WhyCiviveSection";
import { pageMeta } from "@/content/site";

export default function Home() {
  return (
    <>
      <Seo {...pageMeta.home} path="/" />
      <main className="homepage-shell relative overflow-hidden">
        <HeroSection />
        <ResultsSection />
        <ProspectingWidgetEmbed />
        <AuditChecksSection />
        <ProofSection />
        <WhyCiviveSection />
        <GrowthSystemsSection />
        <HomeAuthorityMapSection />
        <IndustriesSection />
        <BuildInPublicPreviewSection />
        <FAQSection />
      </main>
    </>
  );
}
