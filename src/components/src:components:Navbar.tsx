import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex justify-between items-center pointer-events-none">
        
        {/* Logo Pill */}
        <div 
          className="bg-cream border-4 border-ink px-6 py-3 rounded-full shadow-hard pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollTo('hero')}
        >
          <h1 className="font-display text-xl md:text-2xl text-ink">
            TOUCH<span className="text-pop-green">GRASS</span>
          </h1>
        </div>

        {/* Desktop Menu Pills */}
        <div className="hidden md:flex gap-4 pointer-events-auto">
          {['Philosophy', 'Gym', 'Vibe Check'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="bg-cream border-4 border-ink px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-pop-yellow hover:-translate-y-1 hover:shadow-hard transition-all"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('activity-generator')}
            className="bg-pop-red border-4 border-ink px-6 py-2 rounded-full font-bold uppercase text-cream hover:bg-pop-blue hover:-translate-y-1 hover:shadow-hard transition-all"
          >
            Start Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden bg-pop-yellow border-4 border-ink p-2 rounded-full shadow-hard pointer-events-auto" 
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-pop-blue z-[60] flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 bg-cream border-4 border-ink p-2 rounded-full hover:rotate-90 transition-transform" onClick={() => setIsOpen(false)}>
           <X className="w-8 h-8" />
        </button>
        
        <div className="space-y-6 text-center">
          {['Philosophy', 'Gym', 'Vibe Check'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="block text-6xl font-display text-cream text-stroke-white hover:text-pop-yellow transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};