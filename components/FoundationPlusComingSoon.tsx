import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Sparkles, Target, FileText, CalendarCheck, Cpu, CalendarDays, 
  Brain, MessageCircle, Wrench, Users, LayoutTemplate, Clock, TrendingUp, Inbox, Check
} from 'lucide-react';

interface FoundationPlusComingSoonProps {
  onBack: () => void;
  onNavigateToTrial: () => void;
}

const BackgroundCosmos = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {/* Radial Gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[920px] bg-brand-cyan/5 rounded-full blur-[100px] opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-[840px] h-[840px] bg-indigo-500/10 rounded-full blur-[100px] opacity-20"></div>
    
    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [transform:perspective(1000px)_rotateX(60deg)] origin-top opacity-30"></div>
    
    {/* Particles (Simplified) */}
    <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-slate-400 rounded-full w-1 h-1"
                initial={{ 
                    x: Math.random() * window.innerWidth, 
                    y: Math.random() * window.innerHeight,
                    opacity: Math.random() 
                }}
                animate={{ 
                    y: [null, Math.random() * window.innerHeight],
                    opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ 
                    duration: 10 + Math.random() * 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            />
        ))}
    </div>
  </div>
);

const OrbitingSystem = () => {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto flex items-center justify-center">
            {/* Core */}
            <div className="relative z-10 w-24 h-24 bg-slate-900 border border-brand-cyan/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                <Target size={32} className="text-brand-cyan mb-1 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Marka+</span>
                <span className="text-[8px] text-brand-cyan">OS CORE</span>
            </div>

            {/* Orbit 1 */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[70%] h-[70%] border border-slate-700/50 rounded-full"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
                    <FileText size={16} className="text-brand-blue" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
                    <CalendarCheck size={16} className="text-emerald-500" />
                </div>
            </motion.div>

            {/* Orbit 2 */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-slate-800/50 rounded-full"
            >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
                    <Cpu size={16} className="text-purple-500" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
                    <CalendarDays size={16} className="text-amber-500" />
                </div>
            </motion.div>
        </div>
    )
}

const FoundationPlusComingSoon = ({ onBack, onNavigateToTrial }: FoundationPlusComingSoonProps) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden selection:bg-brand-cyan/30 relative">
      <BackgroundCosmos />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 h-[72px] flex items-center">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <ArrowLeft size={16} /> Home
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white text-sm font-medium">Foundation+</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full">
            <Wrench size={12} className="text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wide">System In Build</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative z-10">
        
        {/* Hero */}
        <section className="container mx-auto px-4 lg:px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2 text-center lg:text-left">
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-4 block">// FOUNDATION+ STATUS</span>
                <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  The system is being <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">assembled.</span>
                </h1>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  You’re early. Foundation+ is where your Marka+ audit turns into a complete marketing operating system. Right now, we’re wiring everything together so it feels like one clean experience instead of a pile of features.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button 
                    onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group"
                  >
                    <Sparkles size={18} className="text-brand-cyan group-hover:scale-110 transition-transform"/> Get on early access list
                  </button>
                  <button 
                    onClick={onNavigateToTrial}
                    className="px-6 py-4 rounded-full font-medium text-slate-300 border border-slate-700 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                  >
                    Keep using Trial+ for now
                  </button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500">
                   <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                      <Wrench size={14} /> In active build
                   </div>
                   <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                      <Users size={14} /> Limited early access
                   </div>
                </div>
             </div>

             <div className="lg:w-1/2">
                <OrbitingSystem />
             </div>
          </div>
        </section>

        {/* Build Timeline */}
        <section className="container mx-auto px-4 lg:px-6 mb-32 max-w-4xl">
            <div className="text-center mb-16">
                <span className="text-brand-blue font-mono text-sm font-bold tracking-wider">// BUILDING THE SYSTEM</span>
                <h2 className="font-display text-3xl font-bold mt-4">What we’re building before you get full access</h2>
            </div>

            <div className="space-y-8 relative">
                {/* Connector Line */}
                <div className="absolute top-8 bottom-8 left-8 md:left-1/2 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>
                
                {[
                    { 
                        title: "Phase 1: Audit as Brain", 
                        status: "completed", 
                        icon: Brain, 
                        desc: "Lock in the Foundation+ audit structure so it captures business context.",
                        badge: "DONE"
                    },
                    { 
                        title: "Phase 2: Strategy Blueprint Engine", 
                        status: "in_progress", 
                        icon: Target, 
                        desc: "Convert audit data into a repeatable strategy blueprint format.",
                        badge: "CURRENT FOCUS",
                        progress: 55
                    },
                    { 
                        title: "Phase 3: Blueprint & Prompt Engine", 
                        status: "queued", 
                        icon: CalendarCheck, 
                        desc: "Wire strategy into weekly content blueprints and 40-prompt library.",
                        badge: "COMING NEXT"
                    },
                    { 
                        title: "Phase 4: Calendar Layer", 
                        status: "queued", 
                        icon: CalendarDays, 
                        desc: "Build interactive content calendar and tracking.",
                        badge: "PLANNED"
                    }
                ].map((phase, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1"></div>
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 z-10 flex items-center justify-center
                            ${phase.status === 'completed' ? 'border-emerald-500 text-emerald-500' : 
                              phase.status === 'in_progress' ? 'border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-slate-700 text-slate-700'}
                        ">
                            <phase.icon size={14} />
                        </div>
                        <div className="flex-1 pl-20 md:pl-0 md:px-12">
                            <div className={`p-6 rounded-xl border transition-all
                                ${phase.status === 'in_progress' ? 'bg-slate-900 border-brand-cyan/30' : 'bg-slate-900/50 border-slate-800'}
                            `}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-200">{phase.title}</h3>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded
                                        ${phase.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                                          phase.status === 'in_progress' ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-slate-800 text-slate-500'}
                                    `}>{phase.badge}</span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed mb-3">{phase.desc}</p>
                                {phase.progress && (
                                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-cyan" style={{ width: `${phase.progress}%` }}></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Experience Preview */}
        <section className="container mx-auto px-4 lg:px-6 mb-32">
             <div className="text-center mb-16">
                <span className="text-purple-400 font-mono text-sm font-bold tracking-wider">// A GLIMPSE</span>
                <h2 className="font-display text-3xl font-bold mt-4">How Foundation+ will feel to use</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: LayoutTemplate, title: "Single Control Panel", desc: "No tab-jumping between strategy docs and calendars." },
                    { icon: Sparkles, title: "AI Assistant", desc: "Prompts prebuilt from your audit. Zero setup time." },
                    { icon: Clock, title: "Weekly Rhythm", desc: "Review week and lock blueprint in <30 mins." },
                    { icon: TrendingUp, title: "Performance Memory", desc: "System leans into what works over time." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-white/10 transition-colors">
                        <div className="mb-4 text-slate-400"><item.icon size={24}/></div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist" className="container mx-auto px-4 lg:px-6 mb-24">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]"></div>
                
                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-4">Be one of the first.</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Joining the waitlist does not lock you into anything. It simply puts you at the front of the line for early access and special pricing.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                    <Inbox size={18} className="text-slate-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Priority Access</h4>
                                    <p className="text-xs text-slate-500">We invite waitlist members in small cohorts first.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                    <Users size={18} className="text-slate-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Shape the Product</h4>
                                    <p className="text-xs text-slate-500">Early members help define defaults for blueprints.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8">
                        {formState === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={32} className="text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">You're on the list.</h3>
                                <p className="text-slate-400 mb-6">We'll email you as soon as the first cohort opens.</p>
                                <button onClick={onNavigateToTrial} className="text-brand-cyan font-bold hover:underline">
                                    Back to Trial+
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Business Type</label>
                                    <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors">
                                        <option value="">Select one...</option>
                                        <option value="service">Service business / agency</option>
                                        <option value="info">Info / coaching</option>
                                        <option value="product">Product / e-commerce</option>
                                        <option value="saas">B2B SaaS</option>
                                        <option value="local">Local business</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Primary Channel</label>
                                    <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors">
                                        <option value="">Select one...</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="tiktok">TikTok</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>
                                <button 
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full bg-brand-cyan text-slate-950 font-bold py-4 rounded-lg hover:bg-white transition-colors mt-4 flex items-center justify-center gap-2"
                                >
                                    {formState === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                                    {!formState && <Sparkles size={18} />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Footer Status */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-950/90 border-t border-slate-800 py-3 backdrop-blur z-40">
            <div className="container mx-auto px-4 flex justify-between items-center text-xs font-mono text-slate-500">
                <div className="hidden md:flex gap-6">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span> Blueprint Engine: Building...</span>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Calendar UI: Planned</span>
                </div>
                <div>
                    Marka+ Foundation™ Early Access
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default FoundationPlusComingSoon;