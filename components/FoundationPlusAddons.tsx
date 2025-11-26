
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, ChevronRight, Target, FileText, Clock, Sparkles, CalendarDays, 
  CalendarCheck, LayoutTemplate, Bell, Layers, Zap, Copy, BarChart3, MessageSquare 
} from 'lucide-react';

interface FoundationPlusAddonsProps {
  onBack: () => void;
  onNavigateToFoundationPlus: () => void;
  onNavigateToHowItWorks: () => void;
}

const FoundationPlusAddons = ({ onBack, onNavigateToFoundationPlus, onNavigateToHowItWorks }: FoundationPlusAddonsProps) => {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 overflow-x-hidden selection:bg-brand-blue/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 h-[72px] flex items-center">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4 text-sm font-medium overflow-hidden whitespace-nowrap">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 shrink-0">
              <Home size={16} /> <span className="hidden sm:inline">Home</span>
            </button>
            <ChevronRight size={14} className="text-slate-600 shrink-0" />
            <button onClick={onNavigateToHowItWorks} className="text-slate-400 hover:text-white transition-colors shrink-0">How It Works</button>
            <ChevronRight size={14} className="text-slate-600 shrink-0" />
            <span className="text-white truncate">Foundation+ Add-ons</span>
          </div>
          <button 
            onClick={onNavigateToFoundationPlus}
            className="hidden sm:flex bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/20"
          >
            Activate Foundation+
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 mb-24 relative">
          {/* Background decoration */}
          <div className="absolute top-0 center w-full max-w-3xl h-[400px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-4 block">// WHAT FOUNDATION+ ADDS</span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                You did the thinking once. Foundation+ turns it into <span className="text-brand-blue">weekly execution.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Your 8-module Foundation+ audit powers three core engines: Weekly Content Blueprints, an AI-ready Content Pillar Prompt Library, and an interactive Content Calendar that keeps you consistent without burning out.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onNavigateToFoundationPlus}
                  className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Target size={18} className="group-hover:scale-110 transition-transform"/> Activate Foundation+ system
                </button>
                <button 
                  onClick={onNavigateToHowItWorks}
                  className="px-6 py-3 rounded-full font-medium text-slate-300 border border-slate-700 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                   <FileText size={18} /> Review audit process
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                  <Clock size={16} className="text-brand-cyan" /> <span>Sunday 8pm: Weekly drop</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                  <Sparkles size={16} className="text-brand-cyan" /> <span>40 AI-ready prompts/mo</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 sm:col-span-2 md:col-span-1">
                  <CalendarDays size={16} className="text-brand-cyan" /> <span>Interactive calendar</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual: Stacked Engines */}
            <div className="relative h-[400px] flex items-center justify-center perspective-1000">
              {[
                { 
                  title: "Engine 3: Calendar", 
                  icon: LayoutTemplate, 
                  color: "bg-slate-800", 
                  border: "border-slate-700",
                  text: "text-slate-400",
                  y: 40, scale: 0.9, z: 0 
                },
                { 
                  title: "Engine 2: Prompt Library", 
                  icon: Sparkles, 
                  color: "bg-slate-900", 
                  border: "border-slate-600",
                  text: "text-brand-cyan",
                  y: 20, scale: 0.95, z: 10
                },
                { 
                  title: "Engine 1: Weekly Blueprint", 
                  icon: CalendarCheck, 
                  color: "bg-slate-950", 
                  border: "border-brand-blue",
                  text: "text-brand-blue",
                  y: 0, scale: 1, z: 20
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: card.y + 100 }}
                  animate={{ opacity: 1, y: card.y }}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                  className={`absolute w-full max-w-sm p-6 rounded-2xl border ${card.border} ${card.color} shadow-2xl flex items-center gap-4`}
                  style={{ zIndex: card.z, scale: card.scale }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 ${card.text}`}>
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${i === 2 ? 'text-white' : 'text-slate-300'}`}>{card.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">Foundation+ System</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engine 1: Weekly Blueprint */}
        <section className="py-24 bg-slate-950 border-y border-white/5">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              
              <div className="lg:w-1/3">
                <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-2 block">ENGINE #1</span>
                <h2 className="font-display text-3xl font-bold mb-6">Weekly Content Blueprint</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Delivered every Sunday at 8pm — a concrete 7-day execution plan that knows your brand, audience, and constraints.
                </p>
                
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <Bell size={18} className="text-brand-blue" />
                    <span className="text-sm text-slate-300"><strong>Sunday 20:00</strong> delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers size={18} className="text-brand-blue" />
                    <span className="text-sm text-slate-300"><strong>Capacity-aware</strong> (3-6 posts/week)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="text-brand-blue" />
                    <span className="text-sm text-slate-300"><strong>Platform-specific</strong> formatting</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-brand-blue">BLUEPRINT PREVIEW: MONDAY</span>
                    <span className="text-xs text-slate-500">Educational Carousel</span>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Topic Template</label>
                      <div className="text-lg font-medium text-white">
                        "3 Mistakes [Your Target Customer] Makes with [Their Problem]"
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Structure</label>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li className="flex gap-2"><span className="text-brand-blue">1.</span> Hook: "You're wasting money on X..."</li>
                          <li className="flex gap-2"><span className="text-brand-blue">2-4.</span> Mistake #1, #2, #3</li>
                          <li className="flex gap-2"><span className="text-brand-blue">5.</span> CTA: "Follow for more insights"</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Visual Direction</label>
                        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                          Use brand background. Bold text for headlines. Max 15 words per slide to keep it scannable.
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800">
                      <div className="flex gap-4">
                        <div className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded">Post: 07:00 - 09:00</div>
                        <div className="bg-slate-800 text-slate-400 text-xs font-bold px-3 py-1 rounded">#HashtagsReady</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Engine 2: Prompt Library */}
        <section className="py-24 bg-brand-bg relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

           <div className="container mx-auto px-4 lg:px-6 relative z-10">
              <div className="flex flex-col lg:flex-row-reverse gap-16">
                 
                 <div className="lg:w-1/3">
                    <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-2 block">ENGINE #2</span>
                    <h2 className="font-display text-3xl font-bold mb-6">Content Pillar Prompt Library</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      40 AI-ready prompts per month — already loaded with your business context from the audit. No generic "write a caption" nonsense.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { label: "Educational", count: 10 },
                         { label: "Social Proof", count: 8 },
                         { label: "Behind Scenes", count: 8 },
                         { label: "Product/Sales", count: 7 },
                       ].map((pillar, i) => (
                         <div key={i} className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                            <span className="text-sm text-slate-300">{pillar.label}</span>
                            <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded">{pillar.count}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="lg:w-2/3">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-1 shadow-2xl">
                       <div className="bg-[#0D1117] rounded-xl p-6 font-mono text-sm overflow-hidden relative">
                          <div className="absolute top-4 right-4 text-slate-600 flex gap-2">
                             <Copy size={16} />
                          </div>
                          
                          <div className="text-brand-cyan mb-4 font-bold">// PROMPT #1: Customer Success Story</div>
                          
                          <div className="space-y-4 text-slate-300">
                             <p><span className="text-purple-400">CONTEXT:</span></p>
                             <div className="pl-4 border-l border-slate-700 space-y-1 text-slate-400">
                                <p>Business: [Auto-Filled from Audit]</p>
                                <p>Customer: [Auto-Filled from Audit]</p>
                                <p>Tone: Professional but warm</p>
                             </div>

                             <p><span className="text-purple-400">GOAL:</span></p>
                             <p>Generate 3 caption variations for an Instagram post featuring a transformation.</p>

                             <p><span className="text-purple-400">REQUIREMENTS:</span></p>
                             <ul className="list-disc list-inside pl-2 space-y-1 text-slate-400">
                                <li>Include at least one clear social proof element</li>
                                <li>Show urgency without sounding desperate</li>
                                <li>Format: Hook → Story → Result → CTA</li>
                             </ul>
                          </div>

                          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                             <button className="bg-brand-cyan text-slate-950 px-4 py-2 rounded font-bold text-xs hover:bg-white transition-colors">
                                Generate Variations
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* Engine 3: Calendar */}
        <section className="py-24 bg-slate-950 border-t border-white/5">
           <div className="container mx-auto px-4 lg:px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                 <span className="text-emerald-400 font-mono text-sm font-bold tracking-wider mb-2 block">ENGINE #3</span>
                 <h2 className="font-display text-3xl font-bold mb-4">Content Calendar Dashboard</h2>
                 <p className="text-slate-400">
                   A visual monthly calendar that ties your weekly blueprints and prompt library into one simple execution view.
                   Drag, drop, and actually ship.
                 </p>
              </div>

              <div className="relative max-w-5xl mx-auto">
                 {/* Abstract Calendar UI */}
                 <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl p-6 lg:p-10">
                    <div className="flex justify-between items-center mb-8">
                       <h3 className="font-bold text-white text-xl">October 2025</h3>
                       <div className="flex gap-2">
                          <button className="p-2 hover:bg-slate-800 rounded text-slate-400"><LayoutTemplate size={18}/></button>
                          <button className="p-2 hover:bg-slate-800 rounded text-slate-400"><CalendarDays size={18}/></button>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-4 text-center mb-4">
                       {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                         <div key={d} className="text-xs font-bold text-slate-500 uppercase">{d}</div>
                       ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2 lg:gap-4">
                       {Array.from({length: 28}).map((_, i) => {
                          const hasPost = [1, 3, 4, 6, 8, 10, 11, 13, 15, 17, 18, 20, 22, 24, 25, 27].includes(i);
                          const isSpecial = [3, 11, 22].includes(i);
                          return (
                            <div key={i} className="aspect-square bg-slate-950 border border-slate-800 rounded-lg p-2 relative group hover:border-brand-blue/50 transition-colors">
                               <span className="text-xs text-slate-600">{i + 1}</span>
                               {hasPost && (
                                 <div className={`mt-2 p-1.5 rounded border text-[8px] leading-tight font-medium truncate
                                   ${isSpecial ? 'bg-brand-blue/20 border-brand-blue/40 text-brand-blue' : 'bg-slate-800 border-slate-700 text-slate-300'}
                                 `}>
                                   {isSpecial ? 'Blueprint Drop' : 'Planned Post'}
                                 </div>
                               )}
                               {hasPost && !isSpecial && (
                                  <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-emerald-500"></div>
                               )}
                            </div>
                          )
                       })}
                    </div>
                 </div>

                 {/* Floating Features */}
                 <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
                       <div className="mb-3 text-emerald-400"><Zap size={20}/></div>
                       <h4 className="font-bold text-white mb-2">Drag & Drop</h4>
                       <p className="text-xs text-slate-400">Move weekly blueprint suggestions onto days that fit your schedule.</p>
                    </div>
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
                       <div className="mb-3 text-brand-blue"><MessageSquare size={20}/></div>
                       <h4 className="font-bold text-white mb-2">Prompt Linking</h4>
                       <p className="text-xs text-slate-400">Click a post to see exactly which prompt and context generated it.</p>
                    </div>
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
                       <div className="mb-3 text-purple-400"><BarChart3 size={20}/></div>
                       <h4 className="font-bold text-white mb-2">Smart History</h4>
                       <p className="text-xs text-slate-400">Track what you actually shipped vs planned to improve future blueprints.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-purple-500/10 pointer-events-none"></div>
           <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Let Foundation+ handle the planning. <br/> You focus on actually showing up.</h2>
              <p className="text-lg text-slate-300 mb-10">
                Your audit gives us the context. The system gives you weekly blueprints, prompts, and a calendar that respects your reality instead of ignoring it.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                   onClick={onNavigateToFoundationPlus}
                   className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                   <Target size={20} className="text-brand-blue" /> Activate Foundation+ now
                </button>
                <button 
                   onClick={onNavigateToHowItWorks}
                   className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors"
                >
                   Review what's included
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-500">
                 <span>✓ Weekly blueprints</span>
                 <span>✓ Context-aware prompts</span>
                 <span>✓ Interactive calendar</span>
              </div>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-xl">Marka+</div>
              <p className="text-slate-500 text-sm mt-1">Strategic thinking for AI-powered founders.</p>
            </div>
            <div className="text-slate-600 text-xs">
              © 2025 Marka+.
            </div>
        </div>
      </footer>

    </div>
  );
};

export default FoundationPlusAddons;
