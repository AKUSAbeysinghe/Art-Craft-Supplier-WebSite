import React from 'react';

export default function FooterQuote() {
  return (
    <section className="w-full bg-[#EAE7E0] py-16 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
      
      {/* Left Column: Negative space placeholder */}
      <div className="hidden lg:block lg:col-span-7"></div>

      {/* Right Column: Premium Dark Card */}
      <div className="col-span-1 lg:col-span-5 bg-[#1C1F26] p-10 md:p-14 text-center flex flex-col justify-center items-center shadow-xl shadow-black/10 min-h-[380px]">
        <div className="w-full max-w-sm space-y-8">
          
          {/* Header Typography */}
          <h3 className="text-3xl md:text-4xl font-serif italic font-normal text-white tracking-wide">
            A Note from the Atelier
          </h3>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            “The quality of your materials determines the depth of your expression. 
            Choose with intention.”
          </blockquote>

          <div className="pt-4">
            <p className="text-amber-500 text-sm tracking-widest font-medium">
              — SENNELIER &amp; SON
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}