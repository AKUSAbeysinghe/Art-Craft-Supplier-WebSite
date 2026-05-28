import React from 'react';

export default function PigmentBrowser() {
  // Collection of pigment data matching the layout image colors
  const pigments = [
    { name: 'VERMILION', colorBg: 'bg-[#E63E2D]' },
    { name: 'COBALT', colorBg: 'bg-[#0047AB]' },
    { name: 'CADMIUM', colorBg: 'bg-[#FFD300]' },
    { name: 'JADE', colorBg: 'bg-[#00A86B]' },
    { name: 'SEPIA', colorBg: 'bg-[#4B3621]' },
    { name: 'BYZANTIUM', colorBg: 'bg-[#702963]' },
    { name: 'IVORY', colorBg: 'bg-[#FFFFF0]', textColor: 'text-gray-900' },
    { name: 'CARBON', colorBg: 'bg-[#1C1C1C]' },
  ];

  return (
    <section class="w-full bg-[#181A20] py-16 px-6 md:px-12 lg:px-20 text-white">
      <div class="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 space-y-2 sm:space-y-0">
          <h2 class="text-3xl md:text-4xl font-serif italic font-medium tracking-wide">
            Browse by Pigment
          </h2>
          <span class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            48 Traditional Shades
          </span>
        </div>

        {/* Color Palette Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#181A20] border border-[#181A20]">
          {pigments.map((pigment, idx) => (
            <div 
              key={idx} 
              class={`aspect-square relative flex items-end p-6 cursor-pointer overflow-hidden group transition-transform duration-300 ${pigment.colorBg}`}
            >
              {/* Subtle hover overlay to darken color blocks slightly */}
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200"></div>
              
              {/* Label */}
              <span class={`relative text-xs font-bold tracking-wider uppercase z-10 ${pigment.textColor || 'text-white'}`}>
                {pigment.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}