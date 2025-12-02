import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Send, Star } from 'lucide-react';

export const ActivityGenerator: React.FC = () => {
  const [view, setView] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    goal: 'Touch Grass' 
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // SIMULATE SERVER REQUEST
    // To make this live:
    // 1. Create a free account on formspree.io
    // 2. Create a new form
    // 3. Replace this setTimeout with:
    //    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //      method: "POST",
    //      body: JSON.stringify(formData),
    //      headers: { 'Content-Type': 'application/json' }
    //    });
    
    setTimeout(() => {
      setLoading(false);
      setView('success');
      console.log("Form Submitted:", formData);
    }, 1500);
  };

  return (
    <section id="activity-generator" className="py-24 bg-cream relative overflow-hidden">
       
       {/* Decorative Elements */}
       <div className="absolute top-20 left-10 animate-spin-slow opacity-20 hidden md:block">
          <Star className="w-24 h-24 text-pop-yellow fill-current" />
       </div>
       <div className="absolute bottom-20 right-10 animate-bounce-crazy opacity-20 hidden md:block">
          <div className="w-16 h-16 rounded-full bg-pop-red"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12">
             <div className="inline-block bg-pop-green px-4 py-1 rounded-full border-2 border-ink font-bold text-xs uppercase mb-4 shadow-hard">
                Accepting New Humans
             </div>
             <h2 className="font-display text-5xl md:text-7xl text-ink">
                JOIN THE <span className="text-pop-blue">HERD</span>
             </h2>
             <p className="font-bold text-xl mt-6 max-w-2xl mx-auto opacity-70">
                Ready to ditch the fluorescent lights and reclaim your wild self? 
                Drop your info below. We'll reach out to schedule your first session.
             </p>
          </div>

          <div className="bg-white border-4 border-ink rounded-3xl p-8 md:p-12 shadow-hard-xl transition-all duration-300">
            
             {/* VIEW: FORM */}
             {view === 'form' && (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block font-bold mb-2 uppercase text-sm tracking-wider">Name</label>
                         <input 
                           required
                           type="text" 
                           placeholder="Jane Doe"
                           className="w-full p-4 rounded-xl border-4 border-ink bg-gray-50 font-bold focus:outline-none focus:ring-4 focus:ring-pop-yellow transition-all"
                           value={formData.name}
                           onChange={e => setFormData({...formData, name: e.target.value})}
                         />
                      </div>
                      
                      <div>
                         <label className="block font-bold mb-2 uppercase text-sm tracking-wider">Phone (Optional)</label>
                         <input 
                           type="tel" 
                           placeholder="(555) 123-4567"
                           className="w-full p-4 rounded-xl border-4 border-ink bg-gray-50 font-bold focus:outline-none focus:ring-4 focus:ring-pop-yellow transition-all"
                           value={formData.phone}
                           onChange={e => setFormData({...formData, phone: e.target.value})}
                         />
                      </div>
                   </div>

                   <div>
                      <label className="block font-bold mb-2 uppercase text-sm tracking-wider">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="jane@example.com"
                        className="w-full p-4 rounded-xl border-4 border-ink bg-gray-50 font-bold focus:outline-none focus:ring-4 focus:ring-pop-yellow transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                   </div>

                   <div>
                      <label className="block font-bold mb-2 uppercase text-sm tracking-wider">What's the Goal?</label>
                      <select 
                        className="w-full p-4 rounded-xl border-4 border-ink bg-gray-50 font-bold focus:outline-none focus:ring-4 focus:ring-pop-yellow transition-all appearance-none cursor-pointer"
                        value={formData.goal}
                        onChange={e => setFormData({...formData, goal: e.target.value})}
                      >
                         <option value="Touch Grass">Just want to Touch Grass</option>
                         <option value="Get Strong">Get Strong & Carry Logs</option>
                         <option value="Mental Health">Mental Reset / Stress Relief</option>
                         <option value="Adventure">Train for an Adventure</option>
                         <option value="Chaos">Pure Chaos (Surprise Me)</option>
                      </select>
                   </div>

                   <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-pop-red text-cream font-display text-2xl py-5 rounded-xl border-4 border-ink shadow-hard hover:translate-y-1 hover:shadow-none hover:bg-pop-blue transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                         {loading ? (
                           <>Sending...</>
                         ) : (
                           <>LET'S GO 🚀</>
                         )}
                      </button>
                      <p className="text-center mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                         No Spam. Only Good Vibes.
                      </p>
                   </div>
                </form>
             )}

             {/* VIEW: SUCCESS */}
             {view === 'success' && (
                <div className="text-center py-12 animate-in zoom-in-90 duration-500">
                   <div className="inline-flex items-center justify-center w-24 h-24 bg-pop-green text-cream rounded-full border-4 border-ink mb-6 animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                   </div>
                   <h3 className="font-display text-4xl mb-4">You're In!</h3>
                   <p className="font-bold text-xl text-gray-600 mb-8 max-w-md mx-auto">
                      We've received your signal. A real human (probably eating a protein bar) will text or email you shortly.
                   </p>
                   <button 
                     onClick={() => {
                        setView('form');
                        setFormData({ name: '', email: '', phone: '', goal: 'Touch Grass' });
                     }}
                     className="bg-cream text-ink font-bold px-8 py-3 rounded-full border-4 border-ink hover:bg-pop-yellow transition-all"
                   >
                      Send Another One
                   </button>
                </div>
             )}

          </div>
       </div>
    </section>
  );
};