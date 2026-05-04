import React, { useEffect, useState } from "react";
import FitnessBanner from "../../assets/Fitness/Mind & Body Harmony_ How Physical Activity Boosts Your Mood.jpg";

/* ================= ICONS ================= */
const DumbbellIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M6 9v6M18 9v6M4 10v4M20 10v4M8 8h8v8H8V8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FlameIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 2C10 6 14 7 12 12C10 17 6 18 6 22c4-2 10-2 12-8 2-6-2-10-6-12z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M4 12h4l2-4 4 8 2-4h4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12c0 6 6 10 10 12 4-2 10-6 10-12S16 2 12 6 2 6 2 12z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ================= HEADER ================= */
const FitnessHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Equipment", "Training", "Recovery"];

  return (
    <section className="bg-emerald-50/50 py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h4 className="text-[#2E7D56] font-semibold uppercase tracking-wide text-sm mb-4">Fitness</h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Train stronger. <br /> Live healthier.
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Premium fitness equipment, training essentials and recovery tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#fitness-products" className="px-8 py-4 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47]">
              Shop Fitness
            </a>
            <a href="/fitness-consult" className="px-8 py-4 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white">
              Get Expert Advice
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={FitnessBanner} alt="Fitness" className="w-full h-[420px] object-cover" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex items-center gap-8 border-b border-gray-200 pb-4 flex-wrap">
        {tabs.map((tab) => (
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

/* ================= FIXED PRODUCT CARD (Main Fix Here) ================= */
const FitnessCard = ({ item }) => (
  <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition">
    <div className="relative">
      <img
        src={
          item.image_url
            ? `http://localhost/pharmacy-project/${item.image_url}`
            : "https://via.placeholder.com/600x400?text=No+Image"
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
          Top Pick
        </div>
      )}

      <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full font-semibold">
        Rs. {new Intl.NumberFormat("en-LK").format(item.price || 0)}
      </div>
    </div>

    <div className="p-7">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <p className="mt-3 text-gray-600 line-clamp-2">
        {item.description || "Premium fitness equipment"}
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
  <section id="fitness-products" className={`${bg} py-20 px-6`}>
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-600">{subtitle}</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.length ? (
        items.map((item) => <FitnessCard key={item.id} item={item} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products available in this category</p>
      )}
    </div>
  </section>
);

/* ================= WHY CHOOSE & CTA (unchanged) ================= */
const WhyChooseFitness = () => {
  const benefits = [
    { icon: <DumbbellIcon />, title: "Premium Equipment", desc: "Built for performance" },
    { icon: <FlameIcon />, title: "Performance Focus", desc: "Train harder and smarter" },
    { icon: <HeartPulseIcon />, title: "Recovery Support", desc: "Improve recovery time" },
    { icon: <LightningIcon />, title: "Expert Guidance", desc: "Professional fitness support" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Why Choose Our Fitness Collection?</h2>
        <p className="mt-4 text-gray-600">Designed for strength and performance.</p>

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

const CallToAction = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-[32px] bg-[#2E7D56] px-10 md:px-20 py-20 text-center text-white shadow-xl">
        <h2 className="text-5xl font-bold">Ready To Reach Your Goals?</h2>
        <p className="mt-6 text-lg text-emerald-100 max-w-2xl mx-auto">
          Start your fitness journey with premium gear and expert guidance.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="/shop-fitness" className="px-10 py-4 bg-white text-[#2E7D56] rounded-xl font-semibold hover:scale-105 transition">
            Shop Fitness
          </a>
          <a href="/personal-training" className="px-10 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-[#2E7D56] transition">
            Training Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ================= MAIN ================= */
const Fitness = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost/pharmacy-project/api/get_products.php?category_id=3");
        const data = await res.json();

        if (data.success) {
          setProducts(data.data || []);
        } else {
          setError("Could not load fitness products");
        }
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products
  const cardio = products.filter((i) => i.sub_category_name?.toLowerCase().includes("cardio"));
  const strength = products.filter((i) => i.sub_category_name?.toLowerCase().includes("strength"));
  const recovery = products.filter((i) =>
    i.sub_category_name?.toLowerCase().includes("accessories") ||
    i.sub_category_name?.toLowerCase().includes("recovery")
  );

  return (
    <div className="bg-white">
      {error && <div className="p-4 bg-red-100 text-red-700 text-center">{error}</div>}
      {loading && <div className="py-20 text-center">Loading Fitness Products...</div>}

      <FitnessHeader />

      <ProductSection title="Cardio Equipment" subtitle="Endurance and cardio gear" items={cardio} bg="bg-white" />
      <ProductSection title="Strength Training" subtitle="Build muscle and power" items={strength} bg="bg-[#f7faf8]" />
      <ProductSection title="Accessories & Recovery" subtitle="Recovery and support tools" items={recovery} bg="bg-white" />

      <WhyChooseFitness />
      <CallToAction />
    </div>
  );
};

export default Fitness;