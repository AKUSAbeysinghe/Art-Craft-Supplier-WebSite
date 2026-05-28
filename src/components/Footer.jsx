import React from 'react';

export default function SiteFooter() {
  const currentYearRoman = 'MMXXIV'; // Matches the image's "MMXXIV" (2024)

  const shopLinks = [
    { label: 'The Pigment Wall', href: '#' },
    { label: 'Brushes & Pens', href: '#' },
    { label: 'Paper Archives', href: '#' },
    { label: 'Studio Basics', href: '#' },
  ];

  const archiveLinks = [
    { label: 'Our History', href: '#' },
    { label: 'Pigment Map', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Techniques', href: '#' },
  ];

  return (
    <footer class="w-full bg-[#FAF9F6] text-[#11161B] py-16 px-6 md:px-12 lg:px-20 border-t border-gray-200/60">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Brand & Manifesto */}
        <div class="md:col-span-5 lg:col-span-6 space-y-5">
          <h2 class="text-3xl font-serif italic font-medium tracking-wide">
            Sennelier & Son
          </h2>
          <p class="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-sm">
            Supplying the world's most discerning artists with traditional pigments and hand-crafted tools since the late 19th century.
          </p>
        </div>

        {/* Right Columns: Nav Links Layout Container */}
        <div class="md:col-span-7 lg:col-span-6 grid grid-cols-2 gap-8 md:pt-2">
          
          {/* Shop Column */}
          <div class="space-y-4">
            <h4 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Shop
            </h4>
            <ul class="space-y-3 text-sm font-medium">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} class="hover:text-gray-600 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive Column */}
          <div class="space-y-4">
            <h4 class="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Archive
            </h4>
            <ul class="space-y-3 text-sm font-medium">
              {archiveLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} class="hover:text-gray-600 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Row: Socials & Copyright */}
      <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200/40 flex flex-col space-y-6">
        
        {/* Social Icons Container */}
        <div class="flex items-center space-x-4">
          {/* Instagram Button */}
          <a href="#" class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors duration-200" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-[1.039H9.33a2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
          </a>
          
          {/* Pinterest-like Icon Button */}
          <a href="#" class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors duration-200" aria-label="Pinterest">
            <span class="font-serif font-bold italic text-xs leading-none transform -translate-y-[0.5px]">P</span>
          </a>
        </div>

        {/* Copyright Text */}
        <p class="text-[10px] font-sans font-medium tracking-[0.2em] text-gray-400 uppercase">
          &copy; {currentYearRoman} Sennelier & Son Artisans
        </p>

      </div>
    </footer>
  );
}