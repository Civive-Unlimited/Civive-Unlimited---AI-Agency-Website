import Seo from "@/components/Seo";
import PricingSection from "@/components/sections/PricingSection";
import { pageMeta } from "@/content/site";

export default function CiviveOSOfferPage() {
  return (
    <>
      <Seo {...pageMeta.civiveOsOffer} path="/civive-os-offer" />
      <main className="homepage-shell relative overflow-hidden pt-20 sm:pt-24">
        <PricingSection />
      </main>
    </>
  );
}
