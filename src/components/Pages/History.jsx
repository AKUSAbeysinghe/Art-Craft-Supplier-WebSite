import React from "react";

const OurHistory = () => {
  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">
      {/* ==================== HERO HEADER ==================== */}
      <div className="pt-24 pb-16 px-8 md:px-16 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">
            Since 1998
          </p>
          <h1 className="text-6xl md:text-7xl font-serif italic font-medium tracking-tight mb-6">
            Our History
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            A legacy of craftsmanship, passion, and dedication to the arts
          </p>
        </div>
      </div>

      {/* ==================== STORY SECTION ==================== */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="prose prose-lg max-w-none text-zinc-700 leading-relaxed">
          <p className="text-2xl font-serif italic text-zinc-800 mb-12">
            What began as a small family workshop in 1998 has grown into one of Sri Lanka’s most trusted names in artist materials.
          </p>
          <div className="space-y-16">
            {/* 1998 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-6xl font-serif text-amber-700 font-light">1998</div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-medium mb-4">The Beginning</h3>
                <p className="text-zinc-600">
                  Founded by Master Artist Mr. Ruwan Perera in a small garage in Colombo, with a dream to bring high-quality art supplies to Sri Lankan artists.
                </p>
              </div>
            </div>

            {/* 2005 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-6xl font-serif text-amber-700 font-light">2005</div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-medium mb-4">First Store &amp; Workshop</h3>
                <p className="text-zinc-600">
                  Opened our first retail store and began importing premium brushes, papers, and pigments directly from Japan, Italy, and Germany.
                </p>
              </div>
            </div>

            {/* 2012 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-6xl font-serif text-amber-700 font-light">2012</div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-medium mb-4">Expansion</h3>
                <p className="text-zinc-600">
                  Launched our own line of handcrafted brushes and started working with local artisans to preserve traditional Sri Lankan craft techniques.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-6xl font-serif text-amber-700 font-light">2020</div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-medium mb-4">Digital Journey</h3>
                <p className="text-zinc-600">
                  During the pandemic, we moved online to serve artists across the country, while maintaining the same personal touch and quality.
                </p>
              </div>
            </div>

            {/* Today */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-6xl font-serif text-amber-700 font-light">Today</div>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-medium mb-4">Our Legacy Continues</h3>
                <p className="text-zinc-600">
                  Three generations strong, we continue to serve thousands of artists, students, and institutions with honesty, quality, and passion for the arts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== VALUES SECTION ==================== */}
      <section className="bg-[#eae8e1] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-serif italic mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">

            {/* Craftsmanship */}
            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3">Craftsmanship</h3>
              <p className="text-zinc-600">Every product is chosen with care and respect for traditional methods.</p>
            </div>

            {/* Authenticity */}
            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3">Authenticity</h3>
              <p className="text-zinc-600">We bring only the finest materials from around the world and support local makers.</p>
            </div>

            {/* Community */}
            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v-2c0-.656-.126-1.284-.356-1.852M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.852m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-3">Community</h3>
              <p className="text-zinc-600">Supporting artists, art schools, and creative minds across Sri Lanka.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <div className="py-24 px-6 text-center bg-zinc-900 text-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl font-serif italic mb-8">
            “Art is not just what we create — it is how we live.”
          </p>
          <p className="text-amber-400 font-medium">— Ruwan Perera, Founder</p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;