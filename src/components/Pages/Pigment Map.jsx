import React from "react";

const PigmentMap = () => {
  const pigments = [
    { name: "Ultramarine Blue", category: "Watercolor / Acrylic", hex: "#3B4CC0", lightfast: "Excellent", opacity: "Transparent" },
    { name: "Cadmium Yellow", category: "Oil / Acrylic", hex: "#FFCC00", lightfast: "Excellent", opacity: "Opaque" },
    { name: "Alizarin Crimson", category: "Watercolor", hex: "#C81E2C", lightfast: "Good", opacity: "Transparent" },
    { name: "Phthalo Green", category: "All Mediums", hex: "#0B8B4E", lightfast: "Excellent", opacity: "Transparent" },
    { name: "Burnt Sienna", category: "Natural Earth", hex: "#8C4A2B", lightfast: "Excellent", opacity: "Opaque" },
    { name: "Titanium White", category: "All Mediums", hex: "#F5F5F5", lightfast: "Excellent", opacity: "Opaque" },
    { name: "Gold Mica", category: "Metallic / Mica", hex: "#D4AF37", lightfast: "Good", opacity: "Semi-Opaque" },
    { name: "Fluorescent Pink", category: "Specialty", hex: "#FF0088", lightfast: "Fair", opacity: "Transparent" },
  ];

  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">
      {/* Header */}
      <div className="p-8 md:p-16">
        <header className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-purple-600 uppercase mb-3">
            Color Library
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Pigment Map
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Explore our curated collection of professional-grade pigments with detailed characteristics.
          </p>
        </header>
      </div>

      {/* Pigment Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pigments.map((pigment, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Color Swatch */}
              <div 
                className="h-56 flex items-end p-6 relative"
                style={{ backgroundColor: pigment.hex }}
              >
                <div className="absolute top-4 right-4 bg-black/70 text-white text-[10px] px-3 py-1 rounded-full font-mono">
                  {pigment.hex}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">{pigment.name}</h3>
                <p className="text-sm text-purple-700 mb-4">{pigment.category}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Lightfastness</span>
                    <span className="font-medium">{pigment.lightfast}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Opacity</span>
                    <span className="font-medium">{pigment.opacity}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(`https://wa.me/94771234567?text=I'm%20interested%20in%20${encodeURIComponent(pigment.name)}`, '_blank')}
                  className="mt-6 w-full bg-zinc-900 hover:bg-black text-white py-3 rounded text-sm font-medium transition-colors"
                >
                  Inquire About This Pigment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend / Info Bar */}
      <div className="bg-[#eae8e1] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-serif italic mb-10">Understanding Pigments</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center text-sm">
            <div>
              <div className="font-semibold mb-2 text-amber-700">Lightfastness</div>
              <p className="text-zinc-600">How well the color resists fading when exposed to light.</p>
            </div>
            <div>
              <div className="font-semibold mb-2 text-amber-700">Opacity</div>
              <p className="text-zinc-600">Transparent pigments allow layers to show through. Opaque ones cover previous layers.</p>
            </div>
            <div>
              <div className="font-semibold mb-2 text-amber-700">Permanence</div>
              <p className="text-zinc-600">All our professional pigments are chosen for maximum archival quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Banner */}
      <div className="bg-zinc-900 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-2xl font-serif italic mb-6">
            The right pigment can transform your work from good to extraordinary.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/94771234567?text=I%20would%20like%20help%20choosing%20pigments%20for%20my%20studio', '_blank')}
            className="bg-white text-zinc-900 px-10 py-4 rounded font-medium hover:bg-amber-100 transition-colors"
          >
            Get Personalized Pigment Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default PigmentMap;