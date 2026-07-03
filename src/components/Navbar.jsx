// import React, { useState } from "react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="w-full bg-[#FAF9F6] border-b border-gray-100 py-5 sticky top-0 z-50">
//       <div className="max-w-[1480px] mx-auto px-6 md:px-12 lg:px-16">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a
//             href="/"
//             className="text-2xl md:text-3xl font-serif font-semibold italic text-gray-900 tracking-wide hover:opacity-80 transition-colors"
//           >
//             Sennelier & Son
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium tracking-wider text-gray-600">
//             <a href="/colors" className="hover:text-gray-900 transition-colors uppercase">
//               Colours
//             </a>
//             <a href="/pigments" className="hover:text-gray-900 transition-colors uppercase">
//               Pigments
//             </a>
//             <a href="/brushes" className="hover:text-gray-900 transition-colors uppercase">
//               Brushes
//             </a>
//             <a href="/papers" className="hover:text-gray-900 transition-colors uppercase">
//               Papers
//             </a>
//             <a href="/pens" className="hover:text-gray-900 transition-colors uppercase">
//               Pens
//             </a>
//             <a href="/techniques" className="hover:text-gray-900 transition-colors uppercase">
//               Techniques
//             </a>
//             <a href="/history" className="hover:text-gray-900 transition-colors uppercase">
//               Our History
//             </a>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-6 py-6 border-t border-gray-200 bg-[#FAF9F6]">
//             <nav className="flex flex-col space-y-6 text-base font-medium text-gray-700">
//               <a 
//                 href="/colors" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Colours
//               </a>
//               <a 
//                 href="/pigments" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Pigments
//               </a>
//               <a 
//                 href="/brushes" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Brushes
//               </a>
//               <a 
//                 href="/papers" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Papers
//               </a>
//               <a 
//                 href="/pens" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Pens
//               </a>
//               <a 
//                 href="/techniques" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Techniques
//               </a>
//               <a 
//                 href="/history" 
//                 className="hover:text-gray-900 transition-colors px-2 py-1"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Our History
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }




import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF9F6] border-b border-gray-100 py-5 sticky top-0 z-50">
      <div className="max-w-[1480px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-serif font-semibold italic text-gray-900 tracking-wide hover:opacity-80 transition-colors"
          >
            Sennelier & Son
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider text-gray-600">
            <a href="/colors" className="hover:text-gray-900 transition-colors uppercase">
              Colours
            </a>
            <a href="/pigments" className="hover:text-gray-900 transition-colors uppercase">
              Pigments
            </a>
            <a href="/brushes" className="hover:text-gray-900 transition-colors uppercase">
              Brushes
            </a>
            <a href="/papers" className="hover:text-gray-900 transition-colors uppercase">
              Papers
            </a>
            <a href="/pens" className="hover:text-gray-900 transition-colors uppercase">
              Pens
            </a>
            <a href="/archieve" className="hover:text-gray-900 transition-colors uppercase">
              Archive
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-5 text-base font-medium text-gray-700">
              <a 
                href="/colors" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Colours
              </a>
              <a 
                href="/pigments" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pigments
              </a>
              <a 
                href="/brushes" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Brushes
              </a>
              <a 
                href="/papers" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Papers
              </a>
              <a 
                href="/pens" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pens
              </a>
              <a 
                href="/archieve" 
                className="hover:text-gray-900 transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Archive
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}