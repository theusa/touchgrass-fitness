import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-24 bg-pop-yellow">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-cream border-4 border-ink p-8 md:p-16 shadow-hard-xl rotate-1">
           <h2 className="font-display text-5xl md:text-7xl mb-8 text-ink">
              THE <span className="text-pop-red">MANIFESTO</span>
           </h2>
           
           <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="bg-pop-blue text-cream font-display text-4xl p-4 border-4 border-ink rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                    1
                 </div>
                 <div>
                    <h3 className="font-display text-3xl mb-4">GYMS ARE BORING</h3>
                    <p className="font-bold text-xl leading-relaxed opacity-80">
                       Running on a treadmill is like being a hamster in a very expensive cage. 
                       We believe in running away from imaginary zombies in the park instead.
                    </p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="bg-pop-green text-cream font-display text-4xl p-4 border-4 border-ink rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                    2
                 </div>
                 <div>
                    <h3 className="font-display text-3xl mb-4">MENTAL GAINS > BICEP GAINS</h3>
                    <p className="font-bold text-xl leading-relaxed opacity-80">
                       A six-pack is cool, but have you ever felt the serotonin rush of 
                       throwing a big rock into a lake? That's the real medicine.
                    </p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="bg-pop-red text-cream font-display text-4xl p-4 border-4 border-ink rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                    3
                 </div>
                 <div>
                    <h3 className="font-display text-3xl mb-4">VARIETY IS QUEEN</h3>
                    <p className="font-bold text-xl leading-relaxed opacity-80">
                       One day you lift. The next you crawl. The next you dance poorly. 
                       Keep the body guessing and the spirit laughing.
                    </p>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};