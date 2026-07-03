import React from "react";

const Techniques = () => {
  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">
      {/* ==================== HEADER ==================== */}
      <div className="p-8 md:p-16">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">
            Learn &amp; Create
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Art Techniques
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Master traditional and modern techniques with the finest tools and materials.
          </p>
        </header>
      </div>

      {/* ==================== TECHNIQUES GRID ==================== */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Technique 1 */}
          <div className="bg-white border border-zinc-100 shadow-sm overflow-hidden group">
            <div className="h-80 bg-stone-200 relative">
              <img 
                src="https://via.placeholder.com/800x600/ddd/666?text=Watercolor+Technique" 
                alt="Watercolor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 text-sm font-medium">Watercolor</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif italic mb-3">Wet-on-Wet Watercolor</h3>
              <p className="text-zinc-600 mb-6">
                Learn to create soft gradients and beautiful blooms using our premium watercolor papers and pigments.
              </p>
              <a href="#" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                Explore Tutorial →
              </a>
            </div>
          </div>

          {/* Technique 2 */}
          <div className="bg-white border border-zinc-100 shadow-sm overflow-hidden group">
            <div className="h-80 bg-stone-200 relative">
              <img 
                src="https://via.placeholder.com/800x600/ddd/666?text=Ink+Drawing" 
                alt="Ink Drawing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 text-sm font-medium">Pen &amp; Ink</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif italic mb-3">Pen &amp; Ink Illustration</h3>
              <p className="text-zinc-600 mb-6">
                Master fine line work and cross-hatching with our archival fineliners and drawing pens.
              </p>
              <a href="#" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                Explore Tutorial →
              </a>
            </div>
          </div>

          {/* Technique 3 */}
          <div className="bg-white border border-zinc-100 shadow-sm overflow-hidden group">
            <div className="h-80 bg-stone-200 relative">
              <img 
                src="https://via.placeholder.com/800x600/ddd/666?text=Calligraphy" 
                alt="Calligraphy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 text-sm font-medium">Calligraphy</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif italic mb-3">Modern Calligraphy</h3>
              <p className="text-zinc-600 mb-6">
                Learn elegant lettering using brush pens and calligraphy tools from our collection.
              </p>
              <a href="#" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                Explore Tutorial →
              </a>
            </div>
          </div>

          {/* Technique 4 */}
          <div className="bg-white border border-zinc-100 shadow-sm overflow-hidden group">
            <div className="h-80 bg-stone-200 relative">
              <img 
                src="https://via.placeholder.com/800x600/ddd/666?text=Acrylic+Pouring" 
                alt="Acrylic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 text-sm font-medium">Acrylic</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif italic mb-3">Acrylic Pouring</h3>
              <p className="text-zinc-600 mb-6">
                Create stunning fluid art using high-quality acrylic pigments and pouring mediums.
              </p>
              <a href="#" className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium">
                Explore Tutorial →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== BANNER / CTA ==================== */}
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        <div className="bg-[#eae8e4] p-8 md:p-12 rounded-sm text-center">
          <h2 className="text-3xl font-serif italic mb-4">Want to Learn More?</h2>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">
            Join our monthly workshops and live demonstrations
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/${'94771234567'}?text=I'm%20interested%20in%20your%20art%20techniques%20workshops`, '_blank')}
            className="bg-zinc-900 hover:bg-black text-white px-10 py-4 rounded font-medium transition-colors"
          >
            Inquire About Workshops
          </button>
        </div>
      </div>

      {/* ==================== FOOTER NOTE ==================== */}
      <div className="bg-zinc-900 text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl font-serif italic mb-6">
            “Technique is the bridge between imagination and creation.”
          </p>
          <p className="text-amber-400">— Our Studio Philosophy</p>
        </div>
      </div>
    </div>
  );
};

export default Techniques;