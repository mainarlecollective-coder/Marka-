
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, Check, Sparkles, Target, Brain, 
  Gift, Clock, TrendingUp, User, Users, ChevronDown, 
  ArrowRight
} from 'lucide-react';

interface PricingPageProps {
  onBack: () => void;
  onNavigateToTrial: () => void;
  onNavigateToFoundationPlus: () => void;
  onNavigateToFAQ: () => void;
}

const PricingPage = ({ onBack, onNavigateToTrial, onNavigateToFoundationPlus, onNavigateToFAQ }: PricingPageProps) => {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 overflow-x-hidden selection:bg-brand-blue/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 h-[72px] flex items-center">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm font-medium">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Home size={16} /> Home
            </button>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-white">Pricing</span>
          </div>
          <button 
            onClick={onNavigateToTrial}
            className="hidden sm:flex bg-brand-cyan text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors"
          >
            Start Free Audit
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 mb-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[880px] h-[880px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[880px] h-[880px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="text-center max-w-4xl mx-auto">
                <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-4 block">// PRICING</span>
                <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    One free on-ramp. <br/>
                    One operating system.
                </h1>
                <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Trial+ is your free strategic audit and expert AI prompt. Foundation+ is the paid layer that turns that audit into a weekly marketing system. Both are cheaper than guessing.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <button 
                        onClick={onNavigateToTrial}
                        className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group hover:scale-105"
                    >
                        <Sparkles size={18} className="text-brand-cyan group-hover:scale-110 transition-transform"/> Start with free Trial+
                    </button>
                    <button 
                        onClick={onNavigateToFoundationPlus}
                        className="px-8 py-4 rounded-full font-medium text-slate-300 border border-slate-700 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                    >
                        <Target size={18} /> Join Foundation+ early access
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                        <Gift size={14} className="text-brand-emerald" /> Trial+ is free forever
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                        <Clock size={14} className="text-brand-cyan" /> Set up once, reuse monthly
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                        <TrendingUp size={14} className="text-brand-blue" /> Designed to pay for itself
                    </div>
                </div>
            </div>
        </section>

        {/* Plan Highlight Section */}
        <section className="container mx-auto px-4 lg:px-6 mb-24">
            <div className="text-center mb-12">
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider block mb-2">// CHOOSE YOUR STARTING POINT</span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">Trial+ if you want to explore. <br/> Foundation+ if you’re ready to run on rails.</h2>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-slate-900 p-1 rounded-full border border-slate-800 flex relative">
                    <motion.div 
                        className="absolute top-1 bottom-1 bg-slate-700 rounded-full z-0"
                        layoutId="billingToggle"
                        initial={false}
                        animate={{ 
                            left: billingInterval === 'monthly' ? 4 : '50%', 
                            width: 'calc(50% - 4px)' 
                        }}
                    />
                    <button 
                        onClick={() => setBillingInterval('monthly')}
                        className={`px-6 py-2 rounded-full text-sm font-bold relative z-10 transition-colors ${billingInterval === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Monthly billing
                    </button>
                    <button 
                        onClick={() => setBillingInterval('yearly')}
                        className={`px-6 py-2 rounded-full text-sm font-bold relative z-10 transition-colors ${billingInterval === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                        Yearly <span className="text-brand-emerald text-[10px] ml-1">– 2 mo free</span>
                    </button>
                </div>
            </div>
            <p className="text-center text-xs text-slate-500 mb-8 -mt-8 italic">Yearly pricing will be offered first to early-access cohorts.</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Trial+ Plan */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-slate-600 transition-colors">
                    <div className="mb-6">
                        <span className="inline-block bg-brand-cyan/10 text-brand-cyan text-xs font-bold px-3 py-1 rounded-full mb-4">FREE FOREVER</span>
                        <h3 className="text-2xl font-display font-bold">Trial+</h3>
                        <div className="mt-4 mb-2">
                           <span className="text-4xl font-bold font-display">Rp 0</span>
                        </div>
                        <p className="text-slate-400 text-sm">one-time audit, unlimited reuse</p>
                    </div>
                    <p className="text-slate-300 text-sm mb-8 min-h-[40px]">
                        Founders who like using AI directly and want a serious starting point without commitment.
                    </p>
                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            "Full strategic audit (multi-module form)",
                            "Expert-level long-form AI prompt",
                            "Usage guide with example follow-ups",
                            "Reuse prompt every month across any AI",
                            "No credit card. No trial expiry."
                        ].map((feat, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-400">
                                <Check size={18} className="text-slate-500 shrink-0" /> {feat}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-slate-950 p-4 rounded-xl mb-6 border border-slate-800">
                        <p className="text-xs text-slate-500 italic">"You get a sharper brain + a sharper AI prompt. Execution is still DIY."</p>
                    </div>
                    <button 
                        onClick={onNavigateToTrial}
                        className="w-full py-4 rounded-xl border border-slate-600 hover:bg-slate-800 transition-colors font-bold text-slate-200"
                    >
                        Start free Trial+ audit
                    </button>
                </div>

                {/* Foundation+ Plan */}
                <div className="bg-gradient-to-br from-slate-900 to-brand-blue/10 border border-brand-blue/40 rounded-2xl p-8 flex flex-col shadow-2xl relative overflow-hidden transform md:scale-105">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px]"></div>
                    <div className="mb-6 relative z-10">
                        <span className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-lg shadow-brand-blue/20">RECOMMENDED</span>
                        <h3 className="text-2xl font-display font-bold text-white">Foundation+</h3>
                        <div className="mt-4 mb-2 flex items-baseline gap-2">
                           <span className="text-4xl font-bold font-display text-white">
                               {billingInterval === 'monthly' ? 'Rp 399k' : 'Rp 3.9jt'}
                           </span>
                           <span className="text-slate-400 text-sm">/ {billingInterval === 'monthly' ? 'mo' : 'yr'}</span>
                        </div>
                        <p className="text-slate-400 text-sm">cancel anytime, keep your audit</p>
                    </div>
                    <p className="text-slate-200 text-sm mb-8 min-h-[40px] relative z-10">
                        Founders who want their marketing to run on a weekly system instead of willpower.
                    </p>
                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                        <li className="flex gap-3 text-sm text-white font-bold">
                            <Check size={18} className="text-brand-blue shrink-0" /> Everything in Trial+ included
                        </li>
                        {[
                            "90-day strategy blueprint written for you",
                            "Weekly Content Blueprint (Sunday 8pm)",
                            "40-prompt content library / month",
                            "Interactive calendar dashboard",
                            "Light human support for iteration"
                        ].map((feat, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-300">
                                <Check size={18} className="text-brand-blue shrink-0" /> {feat}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-slate-950/50 p-4 rounded-xl mb-6 border border-brand-blue/20 relative z-10">
                        <p className="text-xs text-brand-blue/80 italic">"You log in each week to a ready-to-execute plan instead of starting from a blank page."</p>
                    </div>
                    <button 
                        onClick={onNavigateToFoundationPlus}
                        className="w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-600 hover:shadow-lg hover:shadow-brand-blue/25 transition-all font-bold text-white relative z-10"
                    >
                        Join Foundation+ early access
                    </button>
                </div>
            </div>
            
        </section>

        {/* Cost Narrative */}
        <section className="bg-slate-950 py-24 border-y border-white/5">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-3xl mx-auto">
                     <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-2 block">// WHAT YOU’RE REALLY PAYING FOR</span>
                     <h2 className="font-display text-3xl font-bold mb-6">Not "more features" — fewer bad decisions.</h2>
                     <p className="text-lg text-slate-400 mb-6">
                        The expensive part of marketing is not tools. It’s months of random execution with no clear strategy. Marka+ exists to compress the time between "I should do something about marketing" and "I know exactly what to do this week."
                     </p>
                     <p className="text-lg text-slate-400 mb-8">
                        Trial+ gives you the foundational thinking and a serious AI prompt so you stop asking vague questions and getting generic answers. Foundation+ costs less than a single month of a junior marketing hire — but gives you a reusable system that keeps you honest every week.
                     </p>
                     
                     <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex gap-4">
                        <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center shrink-0 border border-slate-800">
                            <Brain className="text-brand-cyan" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Founder-level ROI</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">If Foundation+ doesn’t help you reclaim at least a few hours a week and avoid even one bad marketing bet, it likely pays for itself.</p>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Comparison Table */}
        <section className="container mx-auto px-4 lg:px-6 py-24">
            <div className="text-center mb-16">
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-2 block">// HOW IT COMPARES</span>
                <h2 className="font-display text-3xl font-bold">Marka+ vs DIY AI vs Traditional Agencies.</h2>
            </div>
            
            <div className="overflow-x-auto pb-4">
                <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="text-left py-6 px-4 text-xs font-mono text-slate-500 uppercase tracking-wider w-1/4">Dimension</th>
                            <th className="text-left py-6 px-4 text-sm font-bold text-brand-cyan w-1/5">Trial+</th>
                            <th className="text-left py-6 px-4 text-sm font-bold text-brand-blue w-1/5 bg-brand-blue/5 rounded-t-lg">Foundation+</th>
                            <th className="text-left py-6 px-4 text-sm font-bold text-slate-400 w-1/5">DIY with AI</th>
                            <th className="text-left py-6 px-4 text-sm font-bold text-slate-400 w-1/5">Agency</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {[
                           { dim: "Approx. monthly cost", t: "Rp 0", f: "≈ Rp 399k – 699k", diy: "Rp 200k – 500k", ag: "Rp 5–20jt+" },
                           { dim: "Who does the thinking?", t: "You + AI (prompt guided)", f: "You + System + AI", diy: "You alone", ag: "Them (often siloed)" },
                           { dim: "Strategy clarity", t: "Good (if you prompt well)", f: "High (structured & recurring)", diy: "Variable", ag: "High (on paper)" },
                           { dim: "Weekly execution", t: "DIY", f: "Weekly Blueprint delivered", diy: "Ad-hoc / Random", ag: "Campaign based" },
                           { dim: "Context reuse", t: "Single expert prompt", f: "Audit powers entire system", diy: "Re-explain every time", ag: "Locked in their heads" },
                           { dim: "Control & Flexibility", t: "Full control", f: "High control + guidance", diy: "High cognitive load", ag: "Low control" },
                        ].map((row, i) => (
                            <tr key={i} className="group hover:bg-slate-900/30 transition-colors">
                                <td className="py-6 px-4 text-sm font-medium text-slate-300 group-hover:text-white">{row.dim}</td>
                                <td className="py-6 px-4 text-sm text-slate-400">{row.t}</td>
                                <td className="py-6 px-4 text-sm text-slate-200 bg-brand-blue/5 font-medium">{row.f}</td>
                                <td className="py-6 px-4 text-sm text-slate-500">{row.diy}</td>
                                <td className="py-6 px-4 text-sm text-slate-500">{row.ag}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-center text-xs text-slate-500 mt-6 italic">Indicative pricing based on typical market rates.</p>
        </section>

        {/* Decision Pills */}
        <section className="container mx-auto px-4 lg:px-6 mb-24">
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-slate-800 p-2 rounded-lg"><User size={20} className="text-brand-cyan"/></div>
                        <h3 className="font-bold text-white text-lg">Choose Trial+ if...</h3>
                    </div>
                    <ul className="space-y-3">
                        {[
                            "You’re still exploring your positioning or offers.",
                            "You enjoy working directly with ChatGPT / Claude.",
                            "You’re comfortable turning strategy docs into actions.",
                            "You’re budget-constrained but willing to invest time."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-slate-900 border border-brand-blue/30 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/10 blur-2xl"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="bg-brand-blue/20 p-2 rounded-lg"><Users size={20} className="text-brand-blue"/></div>
                        <h3 className="font-bold text-white text-lg">Choose Foundation+ if...</h3>
                    </div>
                    <ul className="space-y-3 relative z-10">
                        {[
                            "You believe in your offer and need consistent execution.",
                            "You want your weeks pre-planned to focus on shipping.",
                            "You’re tired of starting from zero in Notion every month.",
                            "You want support without paying agency retainers."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-slate-900 to-brand-blue/20 opacity-40 pointer-events-none"></div>
            <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center max-w-3xl">
                <h2 className="font-display text-4xl font-bold mb-6">Start free. Upgrade only if it works.</h2>
                <p className="text-xl text-slate-300 mb-10">
                    Run the Trial+ audit, paste your prompt into AI, and see what happens. If you love the clarity but want a system around it, Foundation+ is ready.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                        onClick={onNavigateToTrial}
                        className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                        <Sparkles size={20} className="text-brand-cyan" /> Start free Trial+ audit
                    </button>
                    <button 
                        onClick={onNavigateToFoundationPlus}
                        className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                        <Target size={20} /> Join Foundation+ early access
                    </button>
                </div>
            </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-xl">Marka+</div>
              <p className="text-slate-500 text-sm mt-1">Strategic thinking for AI-powered founders.</p>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
               <button onClick={onNavigateToFAQ} className="hover:text-white">FAQ</button>
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
            <div className="text-slate-600 text-xs">
              © 2025 Marka+.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
