import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import WhyAISection from "@/components/sections/WhyAISection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsSection from "@/components/sections/ResultsSection";
import PricingSection from "@/components/sections/PricingSection";
import FreeToolsSection from "@/components/sections/FreeToolsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import LiquidBackground from "@/components/LiquidBackground";

/*
 * CIVIVE UNLIMITED - HOME PAGE
 * Design Philosophy: Kinetic Industrial Futurism
 * Single-page "Scrollytelling" experience
 */

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Liquid Mesh Background */}
      <LiquidBackground mousePosition={mousePosition} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* The Story - Architecture of Efficiency */}
        <StorySection />

        {/* Why AI, Why Now */}
        <WhyAISection />

        {/* Services - 6-Box Bento Grid */}
        <ServicesSection />

        {/* The Process - 30-Day Sprint */}
        <ProcessSection />

        {/* Real Results - Live Dashboard */}
        <ResultsSection />

        {/* Pricing - 4 Tiers */}
        <PricingSection />

        {/* Free Tools */}
        <FreeToolsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact - My Promise */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
