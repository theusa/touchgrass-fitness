import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimalGym } from './components/AnimalGym';
import { ActivityGenerator } from './components/ActivityGenerator';
import { Philosophy } from './components/Philosophy';
import { Showcase } from './components/Showcase';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans overflow-x-hidden selection:bg-pop-yellow">
      
      <Navbar />

      <main>
        <Hero />
        
        {/* Marquee Separator */}
        <div className="bg-pop-yellow border-y-4 border-ink py-4 overflow-hidden rotate-1 scale-105 z-20 relative shadow-hard">
           <div className="animate-marquee whitespace-nowrap font-display text-4xl text-ink uppercase">
              Touch Grass • Get Strong • Be Happy • Touch Grass • Get Strong • Be Happy • Touch Grass • Get Strong • Be Happy • Touch Grass • Get Strong • Be Happy •
           </div>
        </div>

        <Philosophy />
        <AnimalGym />
        
        {/* Marquee Separator Reverse */}
        <div className="bg-pop-blue border-y-4 border-ink py-4 overflow-hidden -rotate-1 scale-105 z-20 relative shadow-hard">
           <div className="animate-marquee whitespace-nowrap font-display text-4xl text-cream uppercase" style={{ animationDirection: 'reverse' }}>
              No Treadmills • No Fluorescents • Just Vibes • No Treadmills • No Fluorescents • Just Vibes • No Treadmills • No Fluorescents • Just Vibes •
           </div>
        </div>

        <Showcase />
        <ActivityGenerator />
      </main>

      <footer className="py-24 px-6 bg-ink text-cream relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-12 md:mb-0">
             <h2 className="font-display text-6xl md:text-8xl text-pop-green mb-4">
               TOUCH<br/>GRASS
             </h2>
             <p className="font-mono text-cream/60">
                © 2024. Don't be a sad cow.
             </p>
          </div>
          <div className="flex flex-col gap-4 font-display text-2xl uppercase tracking-widest">
            <a href="#" className="hover:text-pop-yellow transition-colors hover:-translate-y-1 transform">Instagram</a>
            <a href="#" className="hover:text-pop-blue transition-colors hover:-translate-y-1 transform">Twitter</a>
            <a href="#" className="hover:text-pop-red transition-colors hover:-translate-y-1 transform">Merch</a>
          </div>
        </div>
      </footer>
    </div>
  );
}