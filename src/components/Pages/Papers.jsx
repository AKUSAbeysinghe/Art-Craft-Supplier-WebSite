import React from 'react';
import PaperBannerImage from "../../assets/Papers/PaperBanner.jpg";

const PaperArchivesPage = () => {
  const products = [
    {
      id: 1,
      title: 'Arches Cold Press',
      origin: 'France',
      weight: '300gsm',
      sheets: '10',
      price: '$48.00',
      unit: 'PER PAD',
      imageSrc: '/images/arches.jpg' // ← Replace with your actual image
    },
    {
      id: 2,
      title: 'Khadi Handmade Rag',
      origin: 'India',
      weight: '320gsm',
      sheets: '5',
      price: '$32.00',
      unit: 'PER PAD',
      imageSrc: '/images/khadi.jpg' // ← Replace with your actual image
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">

      {/* ==================== 1. PAPER ARCHIVES HEADER ==================== */}
      <header className="bg-[#faf9f6] text-zinc-900 font-sans px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Surfaces
          </p>
          
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Paper Archives
          </h1>
          
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            From the cotton fields of India to the historic mills of France — every sheet tells a story of craft and tradition.
          </p>
        </div>
      </header>

   

      {/* ==================== 3. PAPER PRODUCT GRID ==================== */}
      <div className="bg-[#faf9f6] px-4 py-12 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-zinc-100 shadow-sm flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {/* Origin Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-widest text-zinc-800 uppercase px-3 py-1.5 shadow-sm">
                  {product.origin}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-serif italic font-medium text-zinc-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <div className="space-y-2 border-b border-zinc-100 pb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Weight</span>
                      <span className="text-zinc-800 font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Sheets</span>
                      <span className="text-zinc-800 font-medium">{product.sheets}</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-baseline pt-4 mt-auto">
                  <span className="text-lg font-bold text-zinc-900">
                    {product.price}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-zinc-300 uppercase">
                    {product.unit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



         {/* ==================== 2. IMAGE BANNER ==================== */}
         <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#eae8e4] p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
          <div className="overflow-hidden rounded-sm bg-stone-100">
            <img
              src={PaperBannerImage}   // ← Change to your actual image
              alt="Vintage artist papers and handmade sheets"
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PaperArchivesPage;