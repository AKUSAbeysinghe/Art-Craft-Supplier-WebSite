import React, { useState } from 'react';

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call (replace with real backend endpoint later)
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Simulate success (you can replace this with real fetch/axios call)
      setStatus('success');
      setMessage('Thank you! You’re now part of the circle.');
      setEmail(''); // Clear the input

    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="w-full bg-[#EAE7E0] py-16 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
      
      {/* Left Column: Negative space placeholder */}
      <div className="hidden lg:block lg:col-span-7"></div>

      {/* Right Column: Premium Dark Newsletter Card */}
      <div className="col-span-1 lg:col-span-5 bg-[#1C1F26] p-10 md:p-14 text-center flex flex-col justify-center items-center shadow-xl shadow-black/10 min-h-[380px]">
        <div className="w-full max-w-sm space-y-6">
          
          {/* Header Typography */}
          <h3 className="text-3xl md:text-4xl font-serif italic font-normal text-white tracking-wide">
            Join the Circle
          </h3>

          {/* Description Text */}
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
            Receive monthly dispatches on pigment history and rare techniques.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="pt-6 relative flex items-end border-b border-gray-600 focus-within:border-gray-400 transition-colors pb-1">
            
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email" 
              required
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none pr-20 py-1 font-light tracking-wide disabled:opacity-50"
            />

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success' || !email}
              className="absolute right-0 bottom-1 text-xs font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'SUBSCRIBING...' : 'Sign Up'}
            </button>
          </form>

          {/* Status Messages */}
          {message && (
            <p className={`text-sm pt-2 transition-all ${
              status === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {message}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}