import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-cream bg-pattern-dots pt-20">
      
      {/* Floating Elements (Background) */}
      <div className="absolute top-20 left-10 md:left-40 animate-float">
         <div className="text-8xl md:text-9xl rotate-12 drop-shadow-lg opacity-80">🌱</div>
      </div>
      <div className="absolute bottom-40 right-10 md:right-40 animate-wiggle">
         <div className="text-8xl md:text-9xl -rotate-12 drop-shadow-lg opacity-80">🐄</div>
      </div>
      <div className="absolute top-40 right-20 animate-spin-slow">
         <div className="text-6xl md:text-8xl drop-shadow-lg opacity-60">☀️</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        <div className="inline-block bg-pop-yellow border-4 border-ink px-6 py-2 rounded-full rotate-2 mb-8 shadow-hard animate-bounce-crazy">
           <span className="font-bold font-mono text-sm md:text-base uppercase">Warning: May Cause Joy</span>
        </div>
        
        <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] text-ink drop-shadow-xl text-stroke mb-8">
          TOUCH<br/>
          <span className="text-pop-green">GRASS</span>
        </h1>

        <p className="font-bold text-lg md:text-2xl max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-ink shadow-hard">
           Bored of the gym? Us too. Go outside. Lift a rock. Chase a squirrel (don't catch it). 
           Return to your animal self.
        </p>

        <button 
            onClick={() => document.getElementById('activity-generator')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-block"
          >
             <div className="absolute inset-0 bg-ink translate-y-2 translate-x-2 rounded-xl group-hover:translate-y-3 group-hover:translate-x-3 transition-transform"></div>
             <div className="relative bg-pop-red border-4 border-ink px-12 py-6 rounded-xl hover:-translate-y-1 hover:-translate-x-1 transition-transform">
               <span className="font-display text-2xl md:text-3xl text-cream uppercase tracking-wider">
                  Generate Chaos
               </span>
             </div>
        </button>
      </div>

    </section>
  );
};