import React from 'react';
import GallaryImage1 from "../assets/Mains/GallaryImage1.jpg";
import GallaryImage2 from "../assets/Mains/GallaryImage2.jpg";

export default function StudioTableGallery() {
  return (
    <section class="w-full bg-[#EAE7E0] py-16 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto space-y-10">
        
        {/* Header Block */}
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-300 pb-6 space-y-4 sm:space-y-0">
          <div class="space-y-2">
            <h2 class="text-4xl md:text-5xl font-serif italic text-gray-900 tracking-wide font-medium">
              The Studio Table
            </h2>
            <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Current Inspiration From Our Community
            </p>
          </div>
          
          {/* Top Right Action Link */}
          <a 
            href="#" 
            class="group flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors duration-200"
          >
            <span class="border-b border-transparent group-hover:border-gray-900 transition-all pb-0.5">
              View the Full Gallery
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2.5" 
              stroke="currentColor" 
              class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Media Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Feature Card (Takes up roughly 7/12 width) */}
          <div class="col-span-1 lg:col-span-7 relative group overflow-hidden rounded-md bg-gray-200 shadow-sm">
            {/* Absolute Badge */}
            <div class="absolute top-4 left-4 bg-[#E6DFBC] text-[#4A4736] font-mono font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-sm z-10 rotate-[-1deg]">
              Feature: Wet Media
            </div>
            
            {/* Gallery Image 1 */}
            <img 
              src={GallaryImage2} // Replace with your image source
              alt="Art studio table filled with used paint tubes, a canvas painting, and water cup" 
              class="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Right Feature Card (Takes up roughly 5/12 width) */}
          <div class="col-span-1 lg:col-span-5 group overflow-hidden rounded-md bg-gray-200 shadow-sm">
            {/* Gallery Image 2 */}
            <img 
              src={GallaryImage1} // Replace with your image source
              alt="Hand dipping a traditional wooden fountain pen into a clear glass ink jar under warm lighting" 
              class="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}