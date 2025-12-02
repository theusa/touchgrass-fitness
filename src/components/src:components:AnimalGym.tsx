import React, { useState } from 'react';

type Animal = 'Cow' | 'Frog' | 'Duck';
type Exercise = 'Lift' | 'Cardio' | 'Yoga';

export const AnimalGym: React.FC = () => {
  const [animal, setAnimal] = useState<Animal>('Cow');
  const [exercise, setExercise] = useState<Exercise | null>(null);

  // Define emoji/visuals for animals
  const getAnimalEmoji = () => {
    switch(animal) {
      case 'Cow': return '🐮';
      case 'Frog': return '🐸';
      case 'Duck': return '🦆';
    }
  };

  // Define Styles based on state
  const getTransformStyle = () => {
    if (!exercise) return 'scale(1)';

    switch(exercise) {
      case 'Lift': 
        // Getting "WIDE" / Buff
        return 'scale(1.8, 0.8) translateY(10px)'; 
      case 'Cardio': 
        // Getting Lean/Fast + Skew
        return 'scale(0.8, 1.1) skew(-10deg) translateX(20px)';
      case 'Yoga': 
        // Floating / Rotating
        return 'translateY(-40px) rotate(180deg) scale(0.9)';
    }
  };

  const getResultText = () => {
    if (!exercise) return "Pick an activity to start training!";
    
    if (exercise === 'Lift') {
       if (animal === 'Cow') return "ABSOLUTE UNIT";
       if (animal === 'Frog') return "SWOLE TOAD";
       if (animal === 'Duck') return "THICC QUACK";
    }
    if (exercise === 'Cardio') {
       if (animal === 'Cow') return "FAST MOOVER";
       if (animal === 'Frog') return "SPEED HOPPER";
       if (animal === 'Duck') return "AERO DYNAMIC";
    }
    if (exercise === 'Yoga') {
       return "ASCENDED MASTER";
    }
  };

  return (
    <section id="gym" className="py-24 bg-pop-blue border-t-4 border-ink overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-cream text-stroke mb-4">THE ANIMAL GYM</h2>
          <p className="font-bold text-xl text-ink bg-cream inline-block px-4 py-2 border-2 border-ink shadow-hard rounded-lg">
             Customize your creature. See the gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           
           {/* Controls */}
           <div className="md:col-span-4 space-y-8">
              
              {/* Animal Selector */}
              <div className="bg-cream p-6 rounded-2xl border-4 border-ink shadow-hard">
                 <h3 className="font-display text-2xl mb-4">1. Pick Fighter</h3>
                 <div className="flex gap-4">
                    {['Cow', 'Frog', 'Duck'].map((a) => (
                       <button 
                         key={a}
                         onClick={() => { setAnimal(a as Animal); setExercise(null); }}
                         className={`flex-1 py-4 text-3xl rounded-xl border-4 border-ink transition-all ${animal === a ? 'bg-pop-yellow shadow-hard translate-y-[-4px]' : 'bg-white hover:bg-gray-100'}`}
                       >
                          {a === 'Cow' ? '🐮' : a === 'Frog' ? '🐸' : '🦆'}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Exercise Selector */}
              <div className="bg-cream p-6 rounded-2xl border-4 border-ink shadow-hard">
                 <h3 className="font-display text-2xl mb-4">2. Pick Grind</h3>
                 <div className="flex flex-col gap-3">
                    {['Lift', 'Cardio', 'Yoga'].map((e) => (
                       <button 
                         key={e}
                         onClick={() => setExercise(e as Exercise)}
                         className={`w-full py-3 px-4 text-left font-bold text-lg rounded-xl border-4 border-ink transition-all flex justify-between items-center ${exercise === e ? 'bg-pop-green shadow-hard translate-x-2' : 'bg-white hover:bg-gray-100'}`}
                       >
                          <span>{e}</span>
                          <span>{e === 'Lift' ? '🏋️‍♀️' : e === 'Cardio' ? '🚴' : '🧘'}</span>
                       </button>
                    ))}
                 </div>
              </div>

           </div>

           {/* Stage */}
           <div className="md:col-span-8 relative">
              <div className="bg-white rounded-3xl border-4 border-ink h-[500px] shadow-hard-xl flex flex-col items-center justify-center relative overflow-hidden bg-pattern-grid">
                 
                 {/* Result Text */}
                 <div className="absolute top-8 text-center z-20">
                    <h2 className={`font-display text-5xl md:text-7xl text-pop-red text-stroke-white transition-all duration-300 ${exercise ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                       {getResultText()}
                    </h2>
                 </div>

                 {/* The Animal */}
                 <div 
                    className="text-[150px] md:text-[220px] transition-all duration-700 ease-in-out cursor-pointer select-none z-10"
                    style={{ 
                       transform: getTransformStyle(),
                       filter: exercise === 'Lift' ? 'drop-shadow(0px 20px 0px rgba(0,0,0,0.2))' : 'none'
                    }}
                 >
                    {getAnimalEmoji()}
                 </div>

                 {/* Props based on exercise */}
                 {exercise === 'Lift' && (
                    <div className="absolute bottom-20 font-display text-4xl text-ink animate-bounce">
                       HEAVY WEIGHTS
                    </div>
                 )}
                 {exercise === 'Cardio' && (
                    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] animate-pulse"></div>
                 )}
                 {exercise === 'Yoga' && (
                    <div className="absolute w-60 h-60 bg-pop-yellow rounded-full blur-3xl opacity-50 -z-0 animate-pulse"></div>
                 )}

              </div>
           </div>

        </div>
      </div>
    </section>
  );
};