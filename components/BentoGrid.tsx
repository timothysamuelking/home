import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  step: number;
  stepText: string;
  title: string;
  price?: string;
  priceLabel?: string;
  image: string;
  features: { label: string; value: string }[];
  ctaText: string;
}

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isIntersecting;
};

const PricingCard: React.FC<PricingCardProps & { index: number }> = ({ step, stepText, title, price, priceLabel, image, features, ctaText, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${index * 150}ms` }}
        className={`group bg-white rounded-card shadow-soft hover:shadow-card transition-all duration-700 ease-out flex flex-col overflow-hidden border border-gray-100 h-full transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
        {/* Header Image Area */}
        <div className="h-48 bg-gray-200 relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            
            {/* Step Badge */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 px-6 flex items-center gap-3 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0">
                    {step}
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-brand-dark font-heading">{stepText}</span>
            </div>
        </div>

        <div className="p-10 flex flex-col flex-grow">
            <h3 className="text-4xl font-heading font-bold uppercase leading-none mb-8 text-brand-dark">{title}</h3>
            
            {price && (
                <div className="mb-8 pb-8 border-b border-gray-100">
                    <h2 className="text-5xl font-bold font-heading text-brand-dark">{price}</h2>
                    {priceLabel && <p className="text-gray-500 text-sm mt-2">{priceLabel}</p>}
                </div>
            )}

            <ul className="space-y-6 flex-grow mb-10">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base">
                        <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-brand-dark" strokeWidth={4} />
                        </div>
                        <div>
                            <strong className="block text-brand-dark text-sm uppercase tracking-wide mb-1">{feature.label}</strong>
                            <span className="text-gray-600 leading-snug block">{feature.value}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <a href="#ai-tool" className="w-full bg-brand-red text-white py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-red-700 transition-colors shadow-lg block text-center">
                {ctaText}
            </a>
        </div>
    </div>
  );
};

export const BentoGrid: React.FC = () => {
  const cards = [
    {
      step: 1,
      stepText: "Learn At Your Own Pace",
      title: "On-Demand Course",
      price: "$499",
      priceLabel: "One-time payment",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      ctaText: "Get the Course",
      features: [
        { label: "Investment:", value: "From $499" },
        { label: "Best For:", value: "Solopreneurs & Small Business Owners" },
        { label: "You'll Get:", value: "Your 5 Soundbites and the skills to craft clear messaging." },
        { label: "Why Choose This:", value: "Inexpensive, flexible, and trusted by thousands." }
      ]
    },
    {
      step: 2,
      stepText: "Get It Done in 48 Hours",
      title: "Live Workshop",
      price: "$1,999",
      priceLabel: "Per person",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
      ctaText: "Register for Workshop",
      features: [
        { label: "Investment:", value: "From $1,999" },
        { label: "Best For:", value: "Business leaders who want results fast." },
        { label: "You'll Get:", value: "Two days of hands-on coaching from StoryBrand experts." },
        { label: "Why Choose This:", value: "Immersive environment with expert guidance." }
      ]
    },
    {
      step: 3,
      stepText: "Align Your Team",
      title: "Team Workshop",
      price: "$24,999",
      priceLabel: "For the whole team",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      ctaText: "Apply for Team Workshop",
      features: [
        { label: "Investment:", value: "$24,999" },
        { label: "Best For:", value: "Companies that want a shared language." },
        { label: "You'll Get:", value: "A private facilitator working exclusively with your team." },
        { label: "Why Choose This:", value: "Your entire team becomes Soundbite Specialists." }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white mb-12">
      <div className="w-[86%] mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-brand-dark uppercase tracking-tighter">
                Get Your Five Soundbites
            </h2>
            <p className="text-xl text-gray-600 max-w-[80%] mx-auto font-sans">
              <strong>From Simple to Premium — Choose the Path That Fits Your Business</strong><br/>
              Every option leads to the same outcome: 5 clear soundbites that make your business impossible to ignore.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <PricingCard key={idx} {...card} index={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};