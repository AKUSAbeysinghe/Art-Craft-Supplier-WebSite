// import React from 'react';
// import MainBannerImage from "../assets/Mains/MainBannerImage.jpg";

// export default function AtelierDrawerSection() {
//   // Mock data representing the elements found in the drawer 
//   const drawerItems = [
//     { id: 1, name: 'Pure Pigments', count: '7 Shades', desc: 'Hand-ground raw mineral powders.' },
//     { id: 2, name: 'Artisan Brushes', count: '5 Varieties', desc: 'Natural hair with weathered wooden handles.' },
//     { id: 3, name: 'Vine Charcoal', count: '30 Sticks', desc: 'Raw willow charcoal for deep, tactile sketching.' },
//   ];

//   return (
//     <section class="w-full bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-20">
//       <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Left Column: Image Container styled like a premium framed showcase */}
//         <div class="col-span-1 lg:col-span-7">
//           <div class="relative overflow-hidden rounded-lg bg-[#EAE7E0] p-4 shadow-xl shadow-black/5 ring-1 ring-black/5">
//             {/* Replace src with your actual hosted image path */}
//             <img 
//               src={MainBannerImage}
//               alt="Artisan drawer containing jars of colored pigments, paintbrushes, and charcoal sticks" 
//               class="w-full h-auto object-cover rounded shadow-inner"
//             />
//             {/* Decorative subtle overlay mimicking studio light */}
//             <div class="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none"></div>
//           </div>
//         </div>

//         {/* Right Column: Editorial Product Breakdown */}
//         <div class="col-span-1 lg:col-span-5 space-y-8">
//           <div class="space-y-3">
//             <span class="text-xs font-semibold tracking-widest text-[#C58B2B] uppercase block">Inside the Atelier</span>
//             <h2 class="text-3xl md:text-4xl font-serif text-[#11161B] leading-tight">The Content of the Drawer</h2>
//             <p class="text-sm md:text-base text-gray-600 font-light leading-relaxed">
//               A curated look into the fundamental mediums of classic Parisian artistry. Every jar and handle carries a legacy of formulation dating back to 1887.
//             </p>
//           </div>

//           <hr class="border-gray-200" />

//           {/* Interactive List / Details Grid */}
//           <div class="space-y-6">
//             {drawerItems.map((item) => (
//               <div key={item.id} class="group flex items-start justify-between p-3 rounded-md hover:bg-white/60 transition-all duration-300 cursor-pointer">
//                 <div class="space-y-1">
//                   <h3 class="font-serif text-lg text-[#11161B] group-hover:text-[#C58B2B] transition-colors">
//                     {item.name}
//                   </h3>
//                   <p class="text-xs text-gray-500 max-w-xs">{item.desc}</p>
//                 </div>
//                 <span class="text-xs font-medium tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full uppercase">
//                   {item.count}
//                 </span>
//               </div>
//             ))}
//           </div>
          
//         </div>

//       </div>
//     </section>
//   );
// }





import React from 'react';
import MainBannerImage from "../assets/Mains/paint.jpg";

export default function AtelierDrawerSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Image Showcase - Slightly Increased Height */}
        <div className="relative overflow-hidden rounded-lg bg-[#EAE7E0] p-4 shadow-xl shadow-black/5 ring-1 ring-black/5">
          <img 
            src={MainBannerImage}
            alt="Artisan drawer with pigments, brushes, and charcoal" 
            className="w-full h-[460px] md:h-[520px] lg:h-[560px] object-cover rounded shadow-inner"
          />
          
          {/* Subtle decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
