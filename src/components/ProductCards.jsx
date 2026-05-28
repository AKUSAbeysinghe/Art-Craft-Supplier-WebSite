import React from 'react';
import Paper from "../assets/Mains/product-paper-CvXQCDHy.jpg";
import Brush from "../assets/Mains/FlatBrush.jpg";
import Pencill from "../assets/Mains/Pencills.jpg";

export default function ProductCollection() {
  const products = [
    {
      id: '1',
      refCode: 'REF. 0922-G',
      title: 'Graphite Set No. 4',
      category: 'Drawing & Sketching',
      price: '$42.00',
      imageSrc: Pencill, // Replace with your actual image path
      rotationClass: '-rotate-2 hover:rotate-0',
    },
    {
      id: '2',
      refCode: 'REF. 1102-B',
      title: 'Flat Hake Brush',
      category: 'Wash Techniques',
      price: '$18.50',
      imageSrc: Brush, // Replace with your actual image path
      rotationClass: 'rotate-1 hover:rotate-0',
    },
    {
      id: '3',
      refCode: 'REF. 0045-P',
      title: 'Cotton Rag Paper',
      category: 'Surfaces',
      price: '$34.00',
      imageSrc: Paper, // Replace with your actual image path
      rotationClass: '-rotate-1 lg:rotate-2 hover:rotate-0',
    },
  ];

  return (
    <section class="w-full bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-20">
      <div class="max-w-6xl mx-auto">
        
        {/* Product Grid Layout */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12 pt-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              class="flex flex-col items-center group cursor-pointer"
            >
              {/* Polaroid Frame Container */}
              <div class={`relative w-full aspect-[4/5] max-w-[340px] bg-white p-4 shadow-md border border-gray-100 transition-all duration-300 ease-out transform ${product.rotationClass} group-hover:shadow-xl`}>
                
                {/* Product Image Area */}
                <div class="w-full h-[82%] overflow-hidden bg-gray-50 relative">
                  <img 
                    src={product.imageSrc} 
                    alt={product.title} 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlapping Floating Tag */}
                <div class="absolute bottom-2 left-2 right-6 bg-white p-3 shadow-md border border-gray-50 max-w-[180px] z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <span class="block text-[9px] font-mono tracking-wider text-gray-400 font-semibold mb-0.5">
                    {product.refCode}
                  </span>
                  <h3 class="font-serif text-sm font-medium text-gray-900 tracking-tight leading-tight">
                    {product.title}
                  </h3>
                </div>

              </div>

              {/* Outside-of-Frame Details */}
              <div class="mt-8 text-center space-y-1">
                <p class="font-serif italic text-sm text-gray-500 tracking-wide">
                  {product.category}
                </p>
                <p class="font-sans font-semibold text-base text-gray-900">
                  {product.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}