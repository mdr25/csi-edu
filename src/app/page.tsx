import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import LeadershipSection from "@/components/LeadershipSection";
import LearningBrewingSection from "@/components/LearningBrewingSection";
import MethodologySection from "@/components/MethodologySection";
import ProductSection from "@/components/ProductSection";
import ProgramPlanner from "@/components/ProgramPlanner";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ArticlesSection from "@/components/ArticlesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PartnershipModal from "@/components/PartnershipModal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-navy-900 selection:text-white">
      <Navbar />
      <Hero />
      <SolutionsSection />
      <LeadershipSection />
      <LearningBrewingSection />
      <MethodologySection />
      <ProductSection />
      <ProgramPlanner />
      <CaseStudiesSection />
      <ArticlesSection />
      <CtaSection />
      <Footer />
      <PartnershipModal />
    </main>
  );
}
