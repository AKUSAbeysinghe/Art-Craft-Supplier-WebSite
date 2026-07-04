import React from 'react';

export default function SiteFooter() {
  const currentYearRoman = 'MMXXVI'; // Updated to current year (2026)

  const shopLinks = [
    { label: 'The Pigment Wall', href: '/colors' },
    { label: 'Brushes', href: '/brushes' },
    { label: 'Papers', href: '/papers' },
    { label: 'Pens', href: '/pens' },
  ];

  const archiveLinks = [
    { label: 'Our History', href: '/history' },
    { label: 'Pigment Map', href: '/pigment-map' },
    { label: 'Studio Basics', href: '/studio-basics' },
    { label: 'Techniques', href: '/techniques' },
  ];

  return (
    <footer className="w-full bg-[#FAF9F6] text-[#11161B] py-16 px-6 md:px-12 lg:px-20 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Brand & Manifesto */}
        <div className="md:col-span-5 lg:col-span-6 space-y-5">
          <h2 className="text-3xl font-serif italic font-medium tracking-wide">
            Sennelier & Son
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-sm">
            Supplying the world's most discerning artists with traditional pigments and hand-crafted tools since the late 19th century.
          </p>
        </div>

        {/* Right Columns: Nav Links */}
        <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 gap-8 md:pt-2">
          
          {/* Shop Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Shop
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gray-600 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Archive
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {archiveLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gray-600 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Row: Socials & Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200/40 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {/* Instagram */}
          <a 
            href="https://instagram.com/sennelier_son" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors duration-200" 
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039H9.33a2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
          </a>
          
          {/* Pinterest */}
          <a 
            href="https://pinterest.com/sennelier_son" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-black hover:border-black transition-colors duration-200" 
            aria-label="Pinterest"
          >
            <span className="font-serif font-bold italic text-lg leading-none transform -translate-y-0.5">P</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] font-sans font-medium tracking-[0.2em] text-gray-400 uppercase">
          &copy; {currentYearRoman} Sennelier & Son Artisans
        </p>

      </div>
    </footer>
  );
}