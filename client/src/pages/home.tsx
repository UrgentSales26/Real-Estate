import React from 'react';
import HeroSection from "@/components/home/hero-section";
import PropertyOwnerCTA from "@/components/home/property-owner-cta";
import NewlyListedProperties from "@/components/home/newly-listed-properties";
import NewProjectsBanner from "@/components/home/new-projects-banner";
import TopUrgentSales from "@/components/home/top-urgent-sales";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopUrgentSales />
      <NewProjectsBanner />
      <NewlyListedProperties />
      <PropertyOwnerCTA />
    </main>
  );
}