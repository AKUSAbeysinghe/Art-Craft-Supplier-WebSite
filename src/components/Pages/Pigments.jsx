import React, { useEffect, useState } from "react";
import PigmentBanner from "../../assets/Mains/Colours.jpg";

const Pigments = () => {
  const [allPigments, setAllPigments] = useState([]);
  const [filteredPigments, setFilteredPigments] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  // Subcategory IDs for Pigments (Category 4)
  const SUBCATEGORY_IDS = {
    ALL: "all",
    WATERCOLOR: 16,
    ACRYLIC: 17,
    OIL: 18,
    NATURAL_EARTH: 19,
    METALLIC: 20,
    MICA: 21,
    FLUORESCENT: 22,
  };

  const fetchPigments = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const pigmentItems = data.data.filter(item => Number(item.category_id) === 4);
        setAllPigments(pigmentItems);
        setFilteredPigments(pigmentItems);
      } else {
        setError("Failed to load pigments");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPigments();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPigments(allPigments);
    } else {
      const filtered = allPigments.filter(
        item => Number(item.sub_category_id) === activeFilter
      );
      setFilteredPigments(filtered);
    }
  }, [activeFilter, allPigments]);

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
            Colors
          </p>
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            Premium Pigments
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
            Pure, vibrant, and lightfast pigments for watercolor, acrylic, oil, and mixed media artists.
          </p>
        </header>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-10 flex flex-wrap gap-3">
          {[
            { label: "All Pigments", value: "all" },
            { label: "Watercolor", value: SUBCATEGORY_IDS.WATERCOLOR },
            { label: "Acrylic", value: SUBCATEGORY_IDS.ACRYLIC },
            { label: "Oil", value: SUBCATEGORY_IDS.OIL },
            { label: "Natural Earth", value: SUBCATEGORY_IDS.NATURAL_EARTH },
            { label: "Metallic", value: SUBCATEGORY_IDS.METALLIC },
            { label: "Mica", value: SUBCATEGORY_IDS.MICA },
            { label: "Fluorescent", value: SUBCATEGORY_IDS.FLUORESCENT },
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
            <p className="col-span-2 text-center py-20 text-zinc-500">Loading premium pigments...</p>
          ) : error ? (
            <p className="col-span-2 text-center py-12 text-red-600">{error}</p>
          ) : filteredPigments.length === 0 ? (
            <p className="col-span-2 text-center py-20 text-zinc-500">No pigments found in this category.</p>
          ) : (
            filteredPigments.map((pigment) => (
              <div
                key={pigment.id}
                className="bg-white border border-zinc-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-stone-100 overflow-hidden">
                  <img
                    src={
                      pigment.image_url
                        ? `http://localhost/ART_CRAFT_DB/${pigment.image_url}`
                        : "https://via.placeholder.com/600x400?text=Pigment"
                    }
                    alt={pigment.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400?text=Pigment";
                    }}
                  />
                  {pigment.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                      {pigment.sub_category_name || "Pigment"}
                    </p>
                    <span className="text-2xl font-semibold text-zinc-900">
                      Rs. {formatPrice(pigment.price)}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif italic font-medium text-zinc-900 mb-4 leading-tight">
                    {pigment.name}
                  </h2>

                  {pigment.description && (
                    <p className="text-zinc-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                      {pigment.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm mb-6">
                    <span className="text-emerald-700 font-medium">
                      In Stock: {pigment.stock}
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(pigment)}
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
              src={PigmentBanner}
              alt="Premium artist pigments"
              className="w-full h-auto object-cover max-h-[620px] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* ==================== THE ART OF PIGMENTS SECTION ==================== */}
      <section className="bg-[#eae8e1] text-[#2d2c2a] px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase mb-4">
            COLOR &amp; PURITY
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-medium tracking-tight mb-8">
            The Essence of Color
          </h2>
          
          <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto mb-12">
            From rich earth tones to brilliant metallics and shimmering micas — each pigment is selected for its intensity, lightfastness, and artistic potential.
          </p>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">7</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">CATEGORIES</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">100%</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">PURE PIGMENT</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c59b4e]">LIGHTFAST</div>
              <div className="text-sm tracking-widest text-stone-500 mt-2">PROFESSIONAL GRADE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pigments;