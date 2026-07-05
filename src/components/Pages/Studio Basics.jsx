import React from "react";
import Stu1 from "../../assets/studio/1.jpg";
import Stu2 from "../../assets/studio/2.jpg";
import Stu3 from "../../assets/studio/3.jpg";
import Stu4 from "../../assets/studio/4.jpg";
import Stu5 from "../../assets/studio/5.jpg";
import Stu6 from "../../assets/studio/6.jpg";
import EndBanner from "../../assets/studio/end.jpg";

const StudioBasics = () => {
  const WHATSAPP_NUMBER = '94771234567';

  // Hardcoded Studio Basics Products
  const products = [
    {
      id: 1,
      name: "Professional Round Brush Set",
      category_name: "Brushes",
      price: 2450,
      stock: 24,
      description: "Set of 12 high-quality synthetic brushes perfect for watercolor, acrylic, and gouache painting.",
      image: Stu1,
      popular: "1"
    },
    {
      id: 2,
      name: "A4 Cold Press Watercolor Paper",
      category_name: "Paper",
      price: 1850,
      stock: 42,
      description: "100% cotton 300gsm watercolor paper. Excellent for wet techniques and holds color beautifully.",
      image: Stu2,
      popular: "1"
    },
    {
      id: 3,
      name: "Student Acrylic Paint Set",
      category_name: "Paints",
      price: 3250,
      stock: 18,
      description: "12 vibrant colors in 12ml tubes. Rich pigmentation and smooth consistency ideal for beginners.",
      image: Stu3,
      popular: "1"
    },
    {
      id: 4,
      name: "Sketchbook 140gsm",
      category_name: "Sketchbooks",
      price: 1250,
      stock: 35,
      description: "A5 landscape sketchbook with 100 pages. Perfect for daily sketching and mixed media.",
      image: Stu4,
      popular: "0"
    },
    {
      id: 5,
      name: "Charcoal Drawing Kit",
      category_name: "Drawing",
      price: 1650,
      stock: 27,
      description: "Complete charcoal set including sticks, pencils, kneaded eraser and blending stumps.",
      image: Stu5,
      popular: "1"
    },
    {
      id: 6,
      name: "Palette Knife Set",
      category_name: "Tools",
      price: 980,
      stock: 31,
      description: "Stainless steel palette knives for oil and acrylic painting. Different shapes for texture work.",
      image: Stu6,
      popular: "0"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in Studio Basics:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">
      {/* ==================== HEADER ==================== */}
      <div className="p-8 md:p-16">
        <header className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">
            Essentials
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Studio Basics
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            The fundamental tools every artist needs to create with confidence.
          </p>
        </header>

        {/* Products Grid */}
        <main className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-zinc-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Image - FIXED */}
                <div className="relative h-80 bg-stone-100 overflow-hidden">
                  <img
                    src={item.image}           // ← Fixed: Using local import
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Studio+Item";
                    }}
                  />
                  {item.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Essential
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                      {item.category_name || "Studio Basic"}
                    </p>
                    <span className="text-2xl font-semibold text-zinc-900">
                      Rs. {formatPrice(item.price)}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif italic font-medium text-zinc-900 mb-4 leading-tight">
                    {item.name}
                  </h2>

                  {item.description && (
                    <p className="text-zinc-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm mb-6">
                    <span className="text-emerald-700 font-medium">
                      In Stock: {item.stock}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(item)}
                    className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded font-medium transition-colors"
                  >
                    Add to Studio – Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ==================== BANNER ==================== */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#eae8e4] p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
          <div className="overflow-hidden rounded-sm bg-stone-100">
            <img
              src={EndBanner}
              alt="Artist studio setup with basics"
              className="w-full h-auto object-cover max-h-[620px] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* ==================== WHY STUDIO BASICS ==================== */}
      <section className="bg-[#eae8e1] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
            Build Your Foundation
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            A well-equipped studio starts with quality basics. From reliable brushes and versatile papers 
            to essential pigments and tools — we’ve curated everything you need to begin creating.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudioBasics;