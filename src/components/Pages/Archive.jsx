import React, { useState } from 'react';
import InkBottle from "../../assets/Archieves/InkBottle.jpg";
import BrushLady from "../../assets/Archieves/BrushLady.jpg";

const articles = [
  {
    id: 1,
    category: 'Pigment History',
    date: 'March 2024',
    title: 'The History of Ultramarine',
    description: "From the mines of Afghanistan to the palettes of the Renaissance masters — the story of the world's most precious blue."
  },
  {
    id: 2,
    category: 'Craft',
    date: 'February 2024',
    title: 'Japanese Brush Making Tradition',
    description: 'Inside the workshops of Kumano, where 23 master craftsmen continue a 180-year legacy of hand-tied brushes.'
  },
  {
    id: 3,
    category: 'Technique',
    date: 'January 2024',
    title: 'Understanding Paper Grain',
    description: 'How the direction of cotton fibers affects watercolor flow, and why it matters for your technique.'
  },
  {
    id: 4,
    category: 'Pigment History',
    date: 'December 2023',
    title: 'The Chemistry of Ochre',
    description: "From the cliffs of Roussillon to your palette — the geological journey of earth's oldest pigment."
  }
];

const ArchivePage = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="bg-[#faf9f6] text-zinc-900 font-sans min-h-screen">

      {/* ==================== 1. ARCHIVE HEADER ==================== */}
      <header className="bg-[#faf9f6] text-zinc-900 font-sans px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Journal & History
          </p>
          
          <h1 className="text-5xl md:text-6xl font-serif italic font-medium tracking-tight mb-6">
            The Archive
          </h1>
          
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Stories from the studio, histories of the craft, and dispatches from artists around the world.
          </p>
        </div>
      </header>

      {/* ==================== 2. FEATURED SECTION ==================== */}
      <div className="bg-[#faf9f6] p-4 sm:p-8 md:p-12 flex justify-center items-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Featured Block */}
          <article className="relative md:col-span-2 group overflow-hidden bg-stone-900 aspect-[4/3] md:aspect-auto md:h-full min-h-[400px]">
            <img
              src={BrushLady}
              alt="Oil paint tubes scattered near a landscape canvas"
              className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
              <p className="text-[10px] font-bold tracking-[0.2em] text-stone-300 uppercase mb-2">
                Featured
              </p>
              <h2 className="text-3xl md:text-4xl font-serif italic font-medium tracking-tight mb-4">
                The Wet Media Revival
              </h2>
              <p className="text-sm md:text-base text-stone-200 max-w-xl leading-relaxed">
                Why a new generation of artists is returning to traditional water-based techniques in an age of digital creation.
              </p>
            </div>
          </article>

          {/* Right Column - Image + Newsletter */}
          <div className="flex flex-col gap-6">
            
            {/* Top Image Card */}
            <div className="w-full aspect-[4/3] overflow-hidden bg-stone-100">
              <img
                src={InkBottle}
                alt="Fountain pen nib dipping inside ink bottle"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Newsletter Card */}
            <div className="bg-[#1c1e24] text-white p-6 md:p-8 flex flex-col justify-between flex-grow min-h-[220px]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">
                  Newsletter
                </p>
                <p className="text-sm md:text-base text-stone-300 leading-relaxed">
                  Receive monthly dispatches on pigment history, technique guides, and studio visits.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="mt-6 flex items-end border-b border-stone-600 pb-1.5 focus-within:border-white transition-colors duration-300">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent text-sm w-full focus:outline-none placeholder-stone-500 text-stone-100 pr-4"
                />
                <button
                  type="submit"
                  className="text-[11px] font-bold tracking-widest text-stone-300 hover:text-white uppercase transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 3. ARTICLE GRID SECTION ==================== */}
      <div className="bg-[#faf9f6] p-6 sm:p-12 md:p-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-10 text-center md:text-left">
            All Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-zinc-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:border-zinc-200"
              >
                <div>
                  {/* Category & Date */}
                  <div className="flex justify-between items-baseline mb-4 text-[10px] font-bold uppercase tracking-[0.15em]">
                    <span className="text-zinc-400">{article.category}</span>
                    <span className="text-zinc-300 font-normal tracking-normal normal-case sm:uppercase sm:tracking-wider">
                      {article.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-serif italic font-medium text-zinc-900 tracking-tight mb-4 leading-snug">
                    {article.title}
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  {article.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ArchivePage;