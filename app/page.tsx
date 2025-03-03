import ExploreNFTs from "@/components/marketplace/ExploreNfts";
import { HeroSection } from "@/components/marketplace/Herosection";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      <ExploreNFTs />
    </section>
  );
}
