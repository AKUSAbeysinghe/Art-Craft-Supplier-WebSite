import React from 'react';

export default function HeroSection() {
  return (
    <section class="w-full bg-[#FAF9F6] py-20 px-8 md:px-16 lg:px-24 flex flex-col items-start justify-center min-h-[500px]">
      <div class="max-w-2xl space-y-6">
        
        {/* Established Badge */}
        <div class="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 bg-white/50">
          Est. 1887 Paris, France
        </div>

        {/* Heading */}
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif text-[#11161B] leading-[1.1] tracking-tight">
          <span class="italic block font-normal">Tools for the</span>
          <span class="font-normal block">Tactile Soul</span>
        </h1>

        {/* Subtext / Description */}
        <p class="text-lg md:text-xl text-[#525B65] font-light leading-relaxed max-w-lg pt-2">
          Opening our drawer reveals a world of pure pigment, hand-pressed papers, and brushes that hold a century of history.
        </p>

        {/* Call to Action Button */}
        <div class="pt-4">
          <button class="bg-[#C58B2B] hover:bg-[#B07A22] text-white font-medium text-sm px-8 py-3.5 rounded shadow-sm transition-colors duration-200 tracking-wide">
            Explore the Atelier
          </button>
        </div>

      </div>
    </section>
  );
}