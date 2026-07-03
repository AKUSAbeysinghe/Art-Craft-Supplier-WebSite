import React, { useEffect, useState } from "react";

const StudioBasics = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  const fetchStudioBasics = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        // You can adjust this filter according to your preference
        // For example: popular items, or specific categories, or all products
        const basics = data.data.filter(item => 
          item.popular === "1" || 
          Number(item.stock) > 5
        ).slice(0, 8); // Show top 8 items

        setProducts(basics);
      } else {
        setError("Failed to load products");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudioBasics();
  }, []);

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
          {isLoading ? (
            <p className="text-center py-20 text-zinc-500">Loading studio essentials...</p>
          ) : error ? (
            <p className="text-center py-12 text-red-600">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-80 bg-stone-100 overflow-hidden">
                    <img
                      src={
                        item.image_url
                          ? `http://localhost/ART_CRAFT_DB/${item.image_url}`
                          : "https://via.placeholder.com/600x400?text=Studio+Essential"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Art+Tool"}
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
          )}
        </main>
      </div>

      {/* ==================== BANNER ==================== */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#eae8e4] p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
          <div className="overflow-hidden rounded-sm bg-stone-100">
            <img
              src="https://via.placeholder.com/1200x600/ddd/666?text=Artist+Studio+Setup"
              alt="Complete artist studio basics"
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