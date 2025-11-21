import React from 'react';
import { Check, TrendingDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      text: (
        <>
          Your product is <span className="font-bold">hard to explain</span>
        </>
      ),
    },
    {
      text: (
        <>
            You're <span className="font-bold">working way too hard</span> to make the sale
        </>
      ),
    },
    {
      text: (
        <>
          Customers only "get it" <span className="font-bold">after a long conversation</span>
        </>
      ),
    },
    {
      text: (
        <>
          Marketing <span className="font-bold">dollars are wasted</span> because your message doesn't stick
        </>
      ),
    },
    {
      text: (
        <>
          Your <span className="font-bold">competitors get the attention</span> you deserve
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-bold">Growth stalls</span> because your message isn't clear
        </>
      ),
    },
  ];

  return (
    <div id="problem" className="w-[86%] mx-auto mb-12 relative z-20">
        <section className="py-24 md:py-32 bg-gradient-to-t from-white to-[#F5F1E7] rounded-brand shadow-xl w-full">
        <div className="w-full px-10 flex flex-col items-center text-center">
            {/* Top Icon */}
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-10 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <TrendingDown className="text-white w-10 h-10" strokeWidth={2.5} />
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[0.85] uppercase mb-16 tracking-tighter text-brand-dark max-w-[90%]">
            Confusing Messages Don't Just Get Ignored,{' '}
            <span className="text-brand-red block mt-2">They Cost You Sales</span>
            </h2>

            {/* Checklist */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left w-full max-w-[90%] mx-auto">
            {problems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1.5">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-md">
                    <Check className="text-white w-3.5 h-3.5" strokeWidth={4} />
                    </div>
                </div>
                <p className="text-lg text-brand-dark font-sans leading-snug">
                    {item.text}
                </p>
                </div>
            ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-20 max-w-[80%] mx-auto">
                <p className="text-xl md:text-2xl text-brand-dark font-sans leading-relaxed">
                    In a world of attention deficit, we must be clear. <br/>
                    <strong className="font-bold text-black">The answer to confusion is always NO!</strong>
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    The solution? Get the video that will grow your business.
                </p>
            </div>
            
            <a href="#ai-tool" className="mt-10 bg-brand-red text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl transform hover:-translate-y-1 font-sans uppercase tracking-wide inline-block">
                Get Your Video
            </a>
        </div>
        </section>
    </div>
  );
};