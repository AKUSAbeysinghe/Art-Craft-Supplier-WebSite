import React, { useEffect, useState } from "react";
import PensBanner from "../../assets/Mains/Pens.jpg";

const Pens = () => {
  const [allPens, setAllPens] = useState([]);
  const [filteredPens, setFilteredPens] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  // Subcategory IDs for Pens (Category 3)
  const SUBCATEGORY_IDS = {
    ALL: "all",
    DRAWING: 11,          // Drawing Pens
    FINELINER: 12,        // Fineliner Pens
    BRUSH: 13,            // Brush Pens
    CALLIGRAPHY: 14,      // Calligraphy Pens
    PAINT: 15,            // Paint Pens
    METALLIC: 16,         // Metallic Pens
  };

  const fetchPens = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const penItems = data.data.filter(item => Number(item.category_id) === 3);
        setAllPens(penItems);
        setFilteredPens(penItems);
      } else {
        setError("Failed to load pens");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPens();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPens(allPens);
    } else {
      const filtered = allPens.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredPens(filtered);
    }
  }, [activeFilter, allPens]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">
      {/* ==================== HEADER ==================== */}
      <div className="p-8 md:p-16">
        <header className="max-w-5xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">
            Instruments
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Fine Pens
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
            Precision tools for artists, illustrators, and calligraphers. From smooth fineliners to expressive brush pens.
          </p>
        </header>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-10 flex flex-wrap gap-3">
          {[
            { label: "All Pens", value: "all" },
            { label: "Drawing Pens", value: SUBCATEGORY_IDS.DRAWING },
            { label: "Fineliner Pens", value: SUBCATEGORY_IDS.FINELINER },
            { label: "Brush Pens", value: SUBCATEGORY_IDS.BRUSH },
            { label: "Calligraphy Pens", value: SUBCATEGORY_IDS.CALLIGRAPHY },
            { label: "Paint Pens", value: SUBCATEGORY_IDS.PAINT },
            { label: "Metallic Pens", value: SUBCATEGORY_IDS.METALLIC },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all border ${
                activeFilter === filter.value
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid with Exact Images */}
        <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            <p className="col-span-2 text-center py-20 text-zinc-500">Loading fine pens...</p>
          ) : error ? (
            <p className="col-span-2 text-center py-12 text-red-600">{error}</p>
          ) : filteredPens.length === 0 ? (
            <p className="col-span-2 text-center py-20 text-zinc-500">No pens found in this category.</p>
          ) : (
            filteredPens.map((pen) => (
              <div
                key={pen.id}
                className="bg-white border border-zinc-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-stone-100 overflow-hidden">
                  <img
                    src={
                      pen.image_url
                        ? `http://localhost/ART_CRAFT_DB/${pen.image_url}`
                        : "https://via.placeholder.com/600x400?text=Pen"
                    }
                    alt={pen.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Pen";
                    }}
                  />
                  {pen.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                      {pen.sub_category_name || "Pen"}
                    </p>
                    <span className="text-2xl font-semibold text-zinc-900">
                      Rs. {formatPrice(pen.price)}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif italic font-medium text-zinc-900 mb-4 leading-tight">
                    {pen.name}
                  </h2>

                  {pen.description && (
                    <p className="text-zinc-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                      {pen.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm mb-6">
                    <span className="text-emerald-700 font-medium">
                      In Stock: {pen.stock}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(pen)}
                    className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded font-medium transition-colors"
                  >
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* ==================== IMAGE BANNER ==================== */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#eae8e4] p-4 sm:p-6 md:p-8 rounded-sm shadow-sm">
          <div className="overflow-hidden rounded-sm bg-stone-100">
            <img
              src={PensBanner}
              alt="Fine artist pens"
              className="w-full h-auto object-cover max-h-[620px] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* ==================== THE ART OF PEN SECTION ==================== */}
      <section className="bg-[#eae8e1] text-[#2d2c2a] px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase mb-4">
            PRECISION &amp; EXPRESSION
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-medium tracking-tight mb-8">
            The Art of the Pen
          </h2>
          
          <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Every stroke tells a story. Our collection brings together the finest drawing, calligraphy, and brush pens for artists who value control and beauty in every line.
          </p>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">0.05</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">MM TIP PRECISION</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">6</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">SPECIALTY TYPES</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">100%</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">ARCHIVAL INK</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pens;