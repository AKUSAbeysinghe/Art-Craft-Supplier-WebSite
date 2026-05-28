import React from 'react';
import BrushBanner from "../../assets/Brushes/ColourBrush.jpg";

const BrushesPensPage = () => {
  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">

      {/* ==================== 1. BRUSHES & PENS SECTION ==================== */}
      <div className="p-8 md:p-16">
        <header className="max-w-5xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">
            Instruments
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Brushes & Pens
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
            Each brush is hand-tied by master craftsmen using traditional techniques passed down through generations.
          </p>
        </header>

        <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kolinsky Sable */}
          <div className="bg-white border border-zinc-100 shadow-sm p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  Kolinsky Sable
                </p>
                <span className="text-sm font-bold text-zinc-900">$32.00</span>
              </div>
              <h2 className="text-xl font-serif italic font-medium text-zinc-900">
                Series 7 Kolinsky
              </h2>
            </div>
            
            <div className="space-y-1.5 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Type</span>
                <span className="text-zinc-800">Round</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Size Range</span>
                <span className="text-zinc-800">000–12</span>
              </div>
            </div>
          </div>

          {/* Goat Hair */}
          <div className="bg-white border border-zinc-100 shadow-sm p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  Goat Hair
                </p>
                <span className="text-sm font-bold text-zinc-900">$18.50</span>
              </div>
              <h2 className="text-xl font-serif italic font-medium text-zinc-900">
                Flat Hake Brush
              </h2>
            </div>
            
            <div className="space-y-1.5 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Type</span>
                <span className="text-zinc-800">Wash</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Size Range</span>
                <span className="text-zinc-800">1&quot;–3&quot;</span>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* ==================== 2. IMAGE BANNER ==================== */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#eae8e4] p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
          <div className="overflow-hidden rounded-sm bg-stone-100">
            <img
              src={BrushBanner}    // ← Replace with your actual image path
              alt="Handcrafted artist brushes"
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>

      {/* ==================== 3. THE ART OF THE BRUSH SECTION ==================== */}
      <section className="bg-[#eae8e1] text-[#2d2c2a] font-sans px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase mb-4">
            Featured
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-medium tracking-tight mb-8">
            The Art of the Brush
          </h2>
          
          <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-3xl mb-12">
            A great brush is an extension of the hand. Our collection features brushes tied by master craftsmen in Kumano, Japan — a region with over 180 years of brush-making tradition.
          </p>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <div className="text-3xl md:text-4xl font-serif italic text-[#c59b4e] mb-1">
                180+
              </div>
              <div className="text-sm text-stone-500 tracking-wide">
                Years of tradition
              </div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-serif italic text-[#c59b4e] mb-1">
                23
              </div>
              <div className="text-sm text-stone-500 tracking-wide">
                Master craftsmen
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrushesPensPage;