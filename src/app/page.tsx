import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemCycle from "@/components/EcosystemCycle";
import ProductShowcase from "@/components/ProductShowcase";
import ImpactCalculator from "@/components/ImpactCalculator";
import ArticlesSection from "@/components/ArticlesSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PartnershipModal from "@/components/PartnershipModal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <EcosystemCycle />
      <ProductShowcase />
      <ImpactCalculator />
      <ArticlesSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
      <PartnershipModal />
    </main>
  );
}
