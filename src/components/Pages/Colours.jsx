import React from 'react';
import Banner from "../../assets/Mains/BannerPic.jpg";

const PigmentCollectionPage = () => {
  const allPigments = [
    {
      name: 'Vermilion',
      origin: 'China',
      price: '$28.00',
      weight: '15g',
      colorBg: 'bg-[#e03e2d]',
    },
    {
      name: 'Cobalt Blue',
      origin: 'France',
      price: '$45.00',
      weight: '15g',
      colorBg: 'bg-[#0051ba]',
    },
    {
      name: 'Cadmium Yellow',
      origin: 'Germany',
      price: '$38.00',
      weight: '15g',
      colorBg: 'bg-[#ffd000]',
    },
    {
      name: 'Viridian',
      origin: 'Italy',
      price: '$32.00',
      weight: '15g',
      colorBg: 'bg-[#00a86b]',
    },
    {
      name: 'Burnt Sienna',
      origin: 'Italy',
      price: '$24.00',
      weight: '15g',
      colorBg: 'bg-[#a35e38]',
    },
    {
      name: 'Ultramarine',
      origin: 'Afghanistan',
      price: '$52.00',
      weight: '15g',
      colorBg: 'bg-[#3300ff]',
    },
    {
      name: 'Ivory Black',
      origin: 'UK',
      price: '$18.00',
      weight: '15g',
      colorBg: 'bg-[#1c1c1e]',
    },
    {
      name: 'Yellow Ochre',
      origin: 'France',
      price: '$22.00',
      weight: '15g',
      colorBg: 'bg-[#cf822b]',
    },
    {
      name: 'Terra Verte',
      origin: 'Cyprus',
      price: '$26.00',
      weight: '15g',
      colorBg: 'bg-[#4a6344]',
    },
    {
      name: 'Alizarin Crimson',
      origin: 'Netherlands',
      price: '$34.00',
      weight: '15g',
      colorBg: 'bg-[#e31b32]',
    },
    {
      name: 'Cerulean Blue',
      origin: 'Germany',
      price: '$48.00',
      weight: '15g',
      colorBg: 'bg-[#0082b4]',
    },
    {
      name: 'Raw Umber',
      origin: 'Italy',
      price: '$20.00',
      weight: '15g',
      colorBg: 'bg-[#826647]',
    },
  ];

  const pencilSet = {
    name: 'Graphite Sketching Set',
    series: 'Muted Carbon Edition',
    description: 'Twelve finely graded professional drawing pencils housed in a vintage-inspired weathered tin case.',
    price: '$64.00',
    quantity: '12 Pieces',
    imageUrl: Banner,        // ← Fixed here
  };

  return (
    <div className="font-sans">
      {/* 1. Hero Section */}
      <section className="bg-[#FAF9F6] min-h-[400px] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 select-none">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#71717a] font-medium mb-4">
            The Collection
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic font-normal text-[#09090b] tracking-tight mb-8">
            The Pigment Wall
          </h1>
          <p className="text-xl md:text-2xl text-[#4b5563] font-light leading-relaxed max-w-3xl">
            Each pigment is sourced directly from its traditional origin, ground to
            our exacting specifications, and stored in hand-blown glass.
          </p>
        </div>
      </section>

      {/* 2. All Pigments Grid */}
      <section className="bg-[#FAF9F6] p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif italic text-center mb-12 text-[#09090b]">
            Our Pigment Collection
          </h2>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allPigments.map((pigment, index) => (
              <div
                key={index}
                className="flex flex-col group cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`w-full aspect-square ${pigment.colorBg} transition-opacity duration-300 group-hover:opacity-95 rounded-sm shadow-sm`} />
                <div className="mt-5 font-sans text-left">
                  <h3 className="text-xl font-semibold text-[#09090b] mb-1">
                    {pigment.name}
                  </h3>
                  <p className="text-sm text-[#71717a] mb-1">
                    Origin: {pigment.origin}
                  </p>
                  <p className="text-sm text-[#71717a]">
                    <span className="font-bold text-[#09090b]">{pigment.price}</span>
                    <span className="mx-1">/</span>
                    <span>{pigment.weight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Pencil Set - Full Width + Full Color */}
      <section className="bg-[#FAF9F6] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="bg-white border border-[#e4e4e7] p-6 md:p-8 rounded-sm shadow-sm">
            {/* Full Width Image - Full Color */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#f4f4f5] overflow-hidden relative mb-8 rounded-sm">
              <img
                src={pencilSet.imageUrl}
                alt={pencilSet.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Product Info */}
            <div className="max-w-2xl mx-auto text-left">
              <span className="text-xs uppercase tracking-[0.15em] text-[#71717a] font-medium block mb-1">
                {pencilSet.series}
              </span>
              <h3 className="text-3xl font-serif font-normal italic text-[#09090b] mb-4">
                {pencilSet.name}
              </h3>
              <p className="text-base text-[#4b5563] leading-relaxed mb-8 font-light">
                {pencilSet.description}
              </p>
              <hr className="border-[#e4e4e7] my-6" />
              <div className="flex items-center justify-between text-lg">
                <p className="text-[#71717a]">
                  Contains: <span className="text-[#09090b] font-medium">{pencilSet.quantity}</span>
                </p>
                <p className="font-bold text-[#09090b]">
                  {pencilSet.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Archive Section */}
      <section className="bg-[#1e222b] min-h-[400px] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 select-none">
        <div className="max-w-5xl mx-auto w-full text-left">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#9ca3af] font-medium mb-5">
            The Archive
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal text-white tracking-tight mb-8">
            Understanding Your Pigments
          </h1>
          <p className="text-lg md:text-xl text-[#9ca3af] font-light leading-relaxed max-w-4xl mb-10">
            Every pigment has a story — from the lapis mines of Afghanistan to the ochre cliffs of France.
            Our archive traces the lineage of each color, its chemical composition, and its historical
            significance in the artist's palette.
          </p>
          <a
            href="#explore"
            className="inline-flex items-center text-[#d97706] hover:text-[#f59e0b] font-medium text-base tracking-wide transition-colors duration-200 group"
          >
            Explore the Archive
            <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PigmentCollectionPage;