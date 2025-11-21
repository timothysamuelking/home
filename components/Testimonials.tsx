import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="w-[86%] mx-auto">
        {/* Logos */}
        <p className="text-center text-sm font-bold text-gray-400 tracking-widest uppercase mb-12">Trusted by thousands of brands</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale mb-24">
             {/* Simple text placeholders for logos to avoid external dependencies that might break */}
             <span className="text-3xl font-serif font-bold">Pantheon</span>
             <span className="text-3xl font-bold font-sans">INTEL</span>
             <span className="text-3xl font-bold font-serif italic">Berkshire</span>
             <span className="text-3xl font-bold font-mono">Algolia</span>
             <span className="text-3xl font-bold">Dauphin</span>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gray-50 rounded-3xl p-10 flex flex-col md:flex-row gap-12 md:gap-16 items-center border border-gray-100 shadow-soft">
            <div className="w-full md:w-1/3">
                <img 
                    src="https://perch-saffron-9lfh.squarespace.com/s/timothy-king-headshot.JPG" 
                    alt="Business Executive" 
                    className="rounded-2xl w-full object-cover shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
            </div>
            <div className="w-full md:w-2/3 space-y-8">
                <div className="flex text-brand-gold gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold leading-tight text-brand-dark">
                    "Before Sam, we were wasting money on marketing that didn't work. After clarifying our message, our revenue doubled in just 12 months."
                </h3>
                <div>
                    <p className="font-bold text-xl text-gray-900">James Smith</p>
                    <p className="text-gray-500 text-lg">CEO, FinTech Solutions</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};