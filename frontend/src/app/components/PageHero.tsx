import HeroBackground from "./HeroBackground";
import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

// Centred navy hero shared by the About, Contact and Blog pages.
export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0A2744] via-[#0D3B66] to-[#14507F] pt-16 relative overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">{title}</h1>
        <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-5"></div>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
