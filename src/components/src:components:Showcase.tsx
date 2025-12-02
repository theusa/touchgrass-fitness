import React from 'react';

const MODALITIES = [
  { title: "Forest Bathing", subtitle: "Literally just walking", emoji: "🌲", color: "bg-pop-green" },
  { title: "Urban Parkour", subtitle: "Jump on benches", emoji: "🏢", color: "bg-pop-blue" },
  { title: "Cold Plunge", subtitle: "Scream internally", emoji: "❄️", color: "bg-pop-blue" },
  { title: "Dog Chasing", subtitle: "High intensity", emoji: "🐕", color: "bg-pop-yellow" },
  { title: "Rock Throwing", subtitle: "Stress relief", emoji: "🪨", color: "bg-pop-red" },
  { title: "Sun Napping", subtitle: "Recovery", emoji: "😴", color: "bg-pop-yellow" },
];

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-cream">
       
       <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-ink">
             FUN STUFF WE DO
          </h2>
          <p className="font-bold text-xl mt-4">
             If it feels like a chore, we don't do it.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {MODALITIES.map((mod, i) => (
             <div 
               key={i} 
               className={`${mod.color} p-8 rounded-3xl border-4 border-ink shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all cursor-pointer group`}
             >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform inline-block">
                   {mod.emoji}
                </div>
                <h3 className="font-display text-3xl text-ink mb-2">
                   {mod.title}
                </h3>
                <p className="font-bold text-ink/70 bg-white/50 inline-block px-2 rounded-md">
                   {mod.subtitle}
                </p>
             </div>
          ))}
       </div>

    </section>
  );
};