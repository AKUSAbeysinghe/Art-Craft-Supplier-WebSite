import React, { useEffect, useState } from "react";
import SupplimentBanner from "../../assets/Suppliments/Can Magnesium Glycinate Lower Blood Sugar_ Here’s What the Science Says.jpg";

/* ================= ICONS ================= */
const CapsuleIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M10 14L4.5 8.5a4.24 4.24 0 016-6L16 8m-6 6l7.5-7.5a4.24 4.24 0 016 6L16 20a4.24 4.24 0 01-6 0" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6l10 10" strokeLinecap="round" />
  </svg>
);

const StrengthIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M7 13v-2l2-2 2 2v2m4 0v-2l2-2 2 2v2" strokeLinecap="round" />
    <path d="M5 13h14v3a4 4 0 01-4 4H9a4 4 0 01-4-4v-3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M19 5C12 5 6 9 6 16c0 2 1 3 3 3 7 0 11-6 10-14z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16c2-2 4-4 8-6" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 12l2 2 3.5-4" strokeLinecap="round" />
  </svg>
);

/* ================= HEADER ================= */
const SupplementsHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Vitamins", "Sports Nutrition", "Wellness"];

  return (
    <section className="bg-emerald-50/50 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h4 className="text-[#2E7D56] font-semibold uppercase tracking-wide text-sm mb-4">Supplements</h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Nutrition that powers <br /> your wellness journey.
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Premium vitamins, sports nutrition and wellness essentials — trusted products to support energy, performance and everyday health.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#supplement-products" className="px-8 py-4 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47]">
              Explore Supplements
            </a>
            <a href="/nutrition-consult" className="px-8 py-4 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white">
              Get Expert Advice
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={SupplimentBanner} alt="Supplements" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-8 border-b border-gray-200 pb-4 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg font-medium transition ${
              activeTab === tab ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

/* ================= PRODUCT CARD (Fixed Image) ================= */
const SupplementCard = ({ item }) => (
  <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition">
    <div className="relative">
      <img
        src={
          item.image_url
            ? `http://localhost/pharmacy-project/${item.image_url}`
            : "https://via.placeholder.com/600x400?text=Supplements"
        }
        alt={item.name}
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/600x400?text=Image+Failed";
        }}
      />

      {item.popular && (
        <div className="absolute top-4 left-4 bg-[#2E7D56] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Best Seller
        </div>
      )}

      <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-semibold">
        Rs. {new Intl.NumberFormat("en-LK").format(item.price || 0)}
      </div>
    </div>

    <div className="p-7">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <p className="mt-3 text-gray-600 line-clamp-2">
        {item.description || "Premium supplements for wellness and performance"}
      </p>
      <a
        href={`/product/${item.id}`}
        className="block mt-6 text-center py-4 bg-[#2E7D56] text-white rounded-xl hover:bg-[#256a47]"
      >
        View Details
      </a>
    </div>
  </div>
);

/* ================= PRODUCT SECTION ================= */
const ProductSection = ({ title, subtitle, items, bg }) => (
  <section className={`${bg} py-20 px-6`} id="supplement-products">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-600">{subtitle}</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.length > 0 ? (
        items.map(item => <SupplementCard key={item.id} item={item} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products available</p>
      )}
    </div>
  </section>
);

/* ================= WHY CHOOSE ================= */
const WhyChooseSupplements = () => {
  const benefits = [
    { icon: <CapsuleIcon />, title: "Premium Quality", desc: "Carefully selected trusted brands" },
    { icon: <StrengthIcon />, title: "Performance Support", desc: "Fuel recovery and endurance" },
    { icon: <LeafIcon />, title: "Wellness Focus", desc: "Support everyday wellbeing" },
    { icon: <ShieldIcon />, title: "Expert Guidance", desc: "Trusted supplement advice" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Choose Our Supplements?</h2>
        <p className="mt-4 text-gray-600">Quality nutrition backed by expertise.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-emerald-50 flex items-center justify-center text-[#2E7D56]">
                {b.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= CTA ================= */
const CallToAction = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-[32px] bg-[#2E7D56] px-10 md:px-20 py-20 text-center text-white shadow-xl">
        <h2 className="text-5xl font-bold">Ready To Elevate Your Wellness?</h2>
        <p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
          Shop premium supplements or talk to a nutrition expert.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="/shop-supplements" className="px-10 py-4 bg-white text-[#2E7D56] rounded-xl font-semibold hover:scale-105 transition">
            Shop Now
          </a>
          <a href="/nutrition-consult" className="px-10 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#2E7D56] transition">
            Free Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ================= MAIN ================= */
const Supplements = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost/pharmacy-project/api/get_products.php?category_id=2"); // Correct ID = 2 for Supplements
        const data = await res.json();

        if (data.success) {
          setProducts(data.data || []);
        } else {
          setError("Could not load supplements");
        }
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter using sub_category_name (more reliable)
  const vitamins = products.filter(i => 
    i.sub_category_name?.toLowerCase().includes("vitamin") || 
    i.sub_category_name?.toLowerCase().includes("mineral")
  );

  const sportsNutrition = products.filter(i => 
    i.sub_category_name?.toLowerCase().includes("sport") || 
    i.sub_category_name?.toLowerCase().includes("protein")
  );

  const herbalWellness = products.filter(i => 
    i.sub_category_name?.toLowerCase().includes("herbal") || 
    i.sub_category_name?.toLowerCase().includes("wellness")
  );

  return (
    <div className="bg-white">
      {error && <div className="p-4 bg-red-100 text-red-700 text-center">{error}</div>}
      {loading && <div className="py-20 text-center">Loading Supplements...</div>}

      <SupplementsHeader />

      <ProductSection
        title="Vitamins & Minerals"
        subtitle="Daily essentials for immunity and energy."
        items={vitamins}
        bg="bg-white"
      />

      <ProductSection
        title="Sports Nutrition"
        subtitle="Fuel performance and recovery."
        items={sportsNutrition}
        bg="bg-[#f7faf8]"
      />

      <ProductSection
        title="Herbal Wellness"
        subtitle="Natural support for balanced living."
        items={herbalWellness}
        bg="bg-white"
      />

      <WhyChooseSupplements />
      <CallToAction />
    </div>
  );
};

export default Supplements;