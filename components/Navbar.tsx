import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Default to dark text because the page background is white now
  const navLinkClass = `text-[15px] font-medium font-sans transition-colors ${
    isScrolled ? 'text-brand-dark hover:text-brand-red' : 'text-brand-dark hover:text-brand-red'
  }`;

  const buttonClass = 'bg-brand-red text-white hover:bg-red-700 inline-block text-center';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-[86%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
             <a href="#hero" className="relative flex flex-col items-center justify-center p-2 group cursor-pointer">
                <div className={`px-2 py-1 text-xs font-bold border-2 z-10 transition-colors bg-white text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                   SAM
                </div>
                <div className={`px-2 py-1 text-xs font-bold border-2 -mt-2 ml-4 transition-colors bg-white text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                   KING
                </div>
             </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#testimonials" className={navLinkClass}>Become a Guide</a>
            <a href="#pricing" className={navLinkClass}>On-Demand Course</a>
            <a href="#pricing" className={navLinkClass}>In-Person Training</a>
            <a href="#ai-tool" className={`px-8 py-3 rounded-full font-bold text-sm transition-colors font-sans uppercase tracking-wide shadow-lg ${buttonClass}`}>
              Get Your 5 Soundbites
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 z-50 text-brand-dark`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] flex justify-end ${
            isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
         {/* Backdrop */}
         <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
         />
         
         {/* Side Drawer */}
         <div 
            className={`relative w-[85%] max-w-md h-full bg-white shadow-2xl flex flex-col p-8 gap-8 overflow-y-auto transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
         >
             <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                <div className="flex flex-col items-start">
                   <span className="font-heading font-bold text-2xl uppercase">StoryBrand</span>
                </div>
                <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                >
                    <X />
                </button>
             </div>

             <div className="flex flex-col gap-6">
                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold text-gray-900 hover:text-brand-red transition-colors uppercase">Become a Guide</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold text-gray-900 hover:text-brand-red transition-colors uppercase">On-Demand Course</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold text-gray-900 hover:text-brand-red transition-colors uppercase">In-Person Training</a>
                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold text-gray-900 hover:text-brand-red transition-colors uppercase">Books</a>
             </div>

             <div className="mt-auto space-y-4">
                <a href="#ai-tool" onClick={() => setIsMobileMenuOpen(false)} className="block text-center bg-brand-red text-white w-full py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-md uppercase font-sans">
                    Get Your 5 Soundbites
                </a>
                <button className="bg-white border-2 border-brand-dark text-brand-dark w-full py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors uppercase font-sans">
                    Sign In
                </button>
             </div>
         </div>
      </div>
    </>
  );
};