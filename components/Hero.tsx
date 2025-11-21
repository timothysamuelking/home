import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="w-full bg-white flex justify-center items-center pt-28 pb-12">
      {/* The Black Box Container - 86% width = 7% margin on left/right */}
      <div className="w-[86%] mx-auto relative bg-[#050505] rounded-card overflow-hidden shadow-2xl min-h-[85vh] flex items-center px-8 py-16 md:p-16 lg:p-20">
        
        {/* Dark Cinematic Background Overlay (Inside the box) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Base dark color */}
            <div className="absolute inset-0 bg-[#050505]"></div>
            
            {/* Subtle blurred image in background */}
            <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Audience Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            
            {/* Gradient fades */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#050505]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40"></div>
        </div>

        {/* Content */}
        <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Content */}
            <div className={`flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold text-white leading-[0.85] uppercase tracking-tightest">
                Clarify Your Message So <br className="hidden lg:block" />
                Customers Choose You and <br className="hidden lg:block" />
                Your Business Grows
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-sans font-light mx-auto lg:mx-0">
                If customers can't understand your business, they'll move on. Professional video gets their attention and grows your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto justify-center lg:justify-start">
                <a 
                    href="#ai-tool"
                    className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/30 font-sans uppercase tracking-wide text-center w-full sm:w-auto">
                    Get Your Video
                </a>
                <a href="#problem" className="px-10 py-5 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-brand-dark transition-all font-sans uppercase tracking-wide text-center bg-white/5 backdrop-blur-sm w-full sm:w-auto">
                    Free Guide
                </a>
                </div>
            </div>

            {/* RIGHT: Visual Composition */}
            <div className={`relative mt-10 lg:mt-0 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                
                {/* The Gold Circle Container */}
                <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                    
                    {/* Gold Circle Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FDB000] to-[#D4AF37] opacity-100 shadow-[0_0_60px_-15px_rgba(253,176,0,0.3)]"></div>
                    
                    {/* Texture overlay on gold */}
                    <div className="absolute inset-0 rounded-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>

                    {/* Person Image - Masked to Circle bottom */}
                    <div className="absolute inset-1 rounded-full overflow-hidden border-[6px] border-[#FDB000]/50">
                        <img 
                            src="https://perch-saffron-9lfh.squarespace.com/s/timothy-king-headshot.JPG" 
                            alt="Sam King" 
                            className="w-full h-full object-cover object-top scale-150 translate-y"
                        />
                    </div>

                    {/* Floating Book Element */}
                    <div className="absolute -bottom-6 -right-6 md:bottom-0 md:right-0 w-32 md:w-48 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                        <div className="aspect-[2/3] bg-brand-red rounded-r-lg border-l-8 border-red-900 flex flex-col p-4 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-[0.6rem] font-bold px-2 py-1 rounded-bl-md uppercase tracking-tight">Over 20 Million Dollars in Revenue</div>
                            <h3 className="font-heading text-lg md:text-xl leading-none mt-6 opacity-90">BEGINNER'S GUIDE TO</h3>
                            <h2 className="font-heading text-2xl md:text-4xl font-bold leading-[0.85] mb-2">VIDEO<br/></h2>
                            <div className="mt-auto">
                                <p className="text-[0.6rem] uppercase opacity-80 font-bold tracking-wider">Sam King</p>
                                <div className="w-6 h-6 bg-white/20 rounded-full mt-2 flex items-center justify-center">
                                    <svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Caption - Left Side (Hidden on very small screens) */}
                    <div className="absolute top-1/2 -left-8 md:-left-24 transform -translate-y-1/2 w-48 text-right hidden md:block z-20">
                        <p className="text-white/90 text-sm font-sans leading-tight drop-shadow-md">
                            The Videos That Sell Strategy was created by <br/>
                            <span className="font-heading font-bold text-xl text-white uppercase mt-1 block">Sam King</span>
                            <span className="text-[10px] opacity-75 uppercase tracking-wide">Author of Videos That Sell</span>
                        </p>
                    </div>
                </div>

            </div>

            </div>
        </div>
      </div>
    </section>
  );
};