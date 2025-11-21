import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BentoGrid } from './components/BentoGrid';
import { AIBrandScript } from './components/AIBrandScript';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white font-sans">
      <Navbar />
      <Hero />
      
      <ProblemSection />

      <BentoGrid />
      <AIBrandScript />
      <Testimonials />
      
      {/* Final CTA */}
      <section className="py-24 bg-brand-red text-center">
        <div className="w-[86%] mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-10 uppercase max-w-4xl mx-auto leading-none">
                Clarify Your Message & Grow Your Business
            </h2>
            <a 
                href="#ai-tool"
                className="bg-brand-dark text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-black transition-transform transform hover:-translate-y-1 shadow-xl font-sans uppercase tracking-wide inline-block">
                Start Your BrandScript Now
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;