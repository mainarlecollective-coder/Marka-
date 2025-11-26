
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Sparkles, ArrowDownRight, Clock, FileText, ListChecks, 
  MessageCircle, Target, Cpu, Brain, MousePointerClick, 
  Eye, Repeat, RefreshCw, CalendarCheck, LayoutTemplate, 
  ArrowRight, Check, ArrowLeft, Home, BookOpen
} from 'lucide-react';

interface HowItWorksProps {
  onBack: () => void;
  onStartAudit: () => void;
  onNavigateToFoundationPlus: () => void;
  onNavigateToFAQ: () => void;
}

const SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const OrbitingIcons = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Center Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-cyan/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-bg border border-brand-cyan rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
        <Sparkles className="text-brand-cyan w-8 h-8" />
      </div>

      {/* Orbit 1 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/5"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
          <Cpu className="w-5 h-5 text-brand-blue" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
          <Brain className="w-5 h-5 text-brand-emerald" />
        </div>
      </motion.div>

      {/* Orbit 2 */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-white/5"
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
          <Target className="w-4 h-4 text-brand-rose" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700">
          <FileText className="w-4 h-4 text-amber-500" />
        </div>
      </motion.div>
    </div>
  );
};

const HowItWorks = ({ onBack, onStartAudit, onNavigateToFoundationPlus, onNavigateToFAQ }: HowItWorksProps) => {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 overflow-x-hidden selection:bg-brand-cyan/30">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 h-[72px] flex items-center">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <Home size={16} /> Home
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white text-sm font-medium">How It Works</span>
          </div>
          <button 
            onClick={onStartAudit}
            className="hidden sm:flex bg-brand-cyan text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors"
          >
            Start Audit
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Split */}
        <motion.section 
          initial="hidden" animate="visible" variants={SECTION_VARIANTS}
          className="container mx-auto px-4 lg:px-6 mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-4 block">// HOW MARKA+ ACTUALLY WORKS</span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                From honest audit → expert prompt → <span className="text-brand-cyan">real strategy.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Trial+ guides you through a strategic audit and turns your answers into a long-form AI prompt. Foundation+ builds on that same audit to deliver done-with-you strategy and execution support every month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onStartAudit}
                  className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles size={18} className="text-brand-cyan group-hover:scale-110 transition-transform"/> Start free with Trial+
                </button>
                <button 
                  onClick={onNavigateToFoundationPlus}
                  className="px-6 py-3 rounded-full font-medium text-slate-300 border border-slate-700 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  See Foundation+ upgrades <ArrowDownRight size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <Clock size={14} /> ~18–25 mins
                 </div>
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <FileText size={14} /> Single audit, two paths
                 </div>
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <Sparkles size={14} /> AI-native workflows
                 </div>
              </div>
            </div>

            {/* Right Visual: Orbiting Icons & Stacked Panels */}
            <div className="relative">
               <div className="hidden lg:block absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
               <OrbitingIcons />
               
               <div className="grid grid-cols-2 gap-4 mt-12 relative z-10">
                  {[
                    { title: "Step 1: Audit", icon: ListChecks, desc: "Answer guided questions." },
                    { title: "Step 2: Prompt", icon: Sparkles, desc: "We compile expert context." },
                    { title: "Step 3A: DIY", icon: MessageCircle, desc: "Paste to AI for strategy." },
                    { title: "Step 3B: Done-With-You", icon: Target, desc: "We build your plan." },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl hover:border-brand-cyan/30 transition-colors"
                    >
                       <div className="mb-2 text-brand-cyan"><item.icon size={20} /></div>
                       <h3 className="font-bold text-sm text-slate-200">{item.title}</h3>
                       <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Horizontal */}
        <section className="bg-slate-950 py-24 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">// TRIAL+ CAMPAIGN JOURNEY</span>
              <h2 className="font-display text-3xl font-bold mt-4 mb-4">What actually happens when you start.</h2>
              <p className="text-slate-400">Think of Trial+ as a mini-campaign: from first click to having a 90-day strategy draft.</p>
            </div>

            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-800"></div>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { icon: MousePointerClick, title: "Start Audit", desc: "No card. Just one focused session.", time: "~30s" },
                  { icon: ListChecks, title: "Modules 1-5", desc: "Answer strategic business questions.", time: "~20m" },
                  { icon: Eye, title: "Review", desc: "Check the snapshot of your business.", time: "~2m" },
                  { icon: Sparkles, title: "Compile", desc: "We structure the expert prompt.", time: "~5s" },
                  { icon: MessageCircle, title: "Paste", desc: "Get your strategy from ChatGPT.", time: "~5m" },
                  { icon: Repeat, title: "Iterate", desc: "Reuse the prompt monthly.", time: "∞" },
                ].map((step, i) => (
                  <div key={i} className="relative pt-6 md:pt-12">
                     <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-cyan z-10"></div>
                     <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl h-full hover:-translate-y-1 transition-transform">
                        <div className="flex justify-between items-start mb-4">
                          <step.icon className="text-brand-cyan w-6 h-6" />
                          <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">{step.time}</span>
                        </div>
                        <h3 className="font-bold text-sm text-slate-200 mb-2">{step.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Two Paths / Cards */}
        <section className="py-24 container mx-auto px-4 lg:px-6">
           <div className="text-center mb-16">
              <span className="text-brand-blue font-mono text-sm font-bold tracking-wider">// TWO PATHS, ONE FOUNDATION</span>
              <h2 className="font-display text-3xl font-bold mt-4">Trial+ builds the foundation. <br className="hidden md:block"/> Foundation+ builds on top of it.</h2>
           </div>

           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Trial+ Card */}
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col">
                 <div className="mb-6 flex justify-between items-start">
                    <div>
                       <span className="text-xs font-bold bg-brand-cyan/10 text-brand-cyan px-2 py-1 rounded tracking-wider">TRIAL+</span>
                       <h3 className="text-2xl font-display font-bold mt-2">DIY with a serious prompt</h3>
                    </div>
                    <span className="text-sm font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">Free forever</span>
                 </div>
                 
                 <div className="space-y-4 mb-8 flex-1">
                    {[
                      "Guided multi-module strategic audit.",
                      "Long-form, context-rich AI prompt output.",
                      "Works with ChatGPT, Claude, Gemini.",
                      "You drive the AI conversation."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                         <Check size={18} className="text-slate-500 shrink-0" />
                         <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                 </div>

                 <div className="bg-slate-950 rounded-lg p-4 mb-6 text-xs text-slate-400 space-y-1 font-mono">
                    <p>Cost: Rp 0</p>
                    <p>Time: ~20 mins once</p>
                    <p>Output: 1 expert prompt</p>
                 </div>

                 <button onClick={onStartAudit} className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition-colors font-bold text-sm">
                    Start with Trial+
                 </button>
              </div>

              {/* Foundation+ Card */}
              <div id="foundation-plus-section" className="bg-gradient-to-br from-slate-900 to-brand-blue/10 border border-brand-blue/30 rounded-2xl p-8 flex flex-col relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px]"></div>
                 <div className="mb-6 flex justify-between items-start relative z-10">
                    <div>
                       <span className="text-xs font-bold bg-brand-blue/20 text-brand-blue px-2 py-1 rounded tracking-wider">FOUNDATION+</span>
                       <h3 className="text-2xl font-display font-bold mt-2">Done-with-you strategy</h3>
                    </div>
                    <span className="text-sm font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">Paid upgrade</span>
                 </div>
                 
                 <div className="space-y-4 mb-8 flex-1 relative z-10">
                    {[
                      "We use your audit as onboarding.",
                      "You get a written 90-day strategy.",
                      "Monthly strategy refreshes.",
                      "Weekly execution ingredients.",
                      "Templates & Light human support."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                         <Check size={18} className="text-brand-blue shrink-0" />
                         <span className="text-sm text-slate-200">{item}</span>
                      </div>
                    ))}
                 </div>

                 <div className="bg-slate-950/50 rounded-lg p-4 mb-6 text-xs text-slate-300 space-y-1 font-mono relative z-10">
                    <p>Cost: Monthly subscription</p>
                    <p>Time: Focus on executing</p>
                    <p>Output: Strategy docs & actions</p>
                 </div>

                 <button 
                   onClick={onNavigateToFoundationPlus}
                   className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/20 transition-all font-bold text-sm relative z-10"
                 >
                    See Foundation+ Upgrades
                 </button>
              </div>
           </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-slate-950 border-y border-white/5">
           <div className="container mx-auto px-4 lg:px-6">
              <div className="mb-12">
                 <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">// INSIDE TRIAL+</span>
                 <h2 className="font-display text-3xl font-bold mt-4">What’s actually inside the free experience?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   { icon: BookOpen, title: "Guided strategic thinking", body: "We explain why each question matters so you learn strategy as you go.", tag: "Educational" },
                   { icon: ListChecks, title: "Whole-business snapshot", body: "Model, stage, revenue, customers, competitors - captured in one flow.", tag: "Comprehensive" },
                   { icon: Cpu, title: "Prompt engineered for AI", body: "Answers compiled into an AI-ready prompt with clear roles and constraints.", tag: "AI-Native" },
                   { icon: FileText, title: "One prompt, many uses", body: "Generate a 90-day strategy now; reuse it later with updates.", tag: "Reusable" },
                   { icon: Target, title: "Tool-agnostic", body: "Paste into GPT-4, Claude, or Gemini. The value is in the context.", tag: "Flexible" },
                   { icon: Clock, title: "Respectful of time", body: "Designed to be completed in one focused sitting. Every question has a job.", tag: "Focused" },
                 ].map((item, i) => (
                   <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-brand-cyan/20 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                         <item.icon className="text-brand-cyan" size={24} />
                         <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider border border-slate-700 px-2 py-0.5 rounded">{item.tag}</span>
                      </div>
                      <h3 className="font-bold text-slate-200 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 container mx-auto px-4 lg:px-6">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="font-display text-3xl font-bold">See the difference day-to-day.</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left py-4 px-4 text-sm font-mono text-slate-500 uppercase tracking-wider">Dimension</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-brand-cyan w-1/3">Trial+ (Free)</th>
                      <th className="text-left py-4 px-4 text-sm font-bold text-brand-blue w-1/3">Foundation+ (Paid)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { dim: "Starting point", trial: "Complete audit once.", found: "Same audit reused." },
                      { dim: "Main output", trial: "1 long-form AI prompt.", found: "Strategy docs & weekly actions." },
                      { dim: "Who drives AI", trial: "You prompt & interpret.", found: "We design & structure it." },
                      { dim: "Time spent", trial: "Prompting & thinking.", found: "Executing specific actions." },
                      { dim: "Support", trial: "None / DIY.", found: "Light human support." },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                        <td className="py-4 px-4 text-sm font-medium text-slate-300">{row.dim}</td>
                        <td className="py-4 px-4 text-sm text-slate-400">{row.trial}</td>
                        <td className="py-4 px-4 text-sm text-slate-400">{row.found}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>
        </section>

        {/* Story Strip */}
        <section className="py-24 bg-slate-950 border-t border-white/5">
           <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
              <h2 className="font-display text-2xl font-bold mb-12 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan text-sm">✓</div>
                 Example Journey
              </h2>
              
              <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
                 {[
                   { time: "Month 0", title: "Finishes Trial+ Audit", body: "A founder spends 20 minutes on Trial+, gets their prompt, and uses ChatGPT to generate a detailed 90-day plan." },
                   { time: "Month 1", title: "Implements a few pieces", body: "They implement parts of the plan but get stuck prioritizing and staying consistent week to week." },
                   { time: "Month 2", title: "Upgrades to Foundation+", body: "They upgrade and import their existing Trial+ audit. No new onboarding form required." },
                   { time: "Month 3+", title: "Runs on a clear rhythm", body: "Each month they receive a refined strategy overview, and each week they get specific execution ingredients." },
                 ].map((step, i) => (
                   <div key={i} className="relative pl-10">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600"></div>
                      <span className="text-xs font-mono text-brand-cyan mb-1 block">{step.time}</span>
                      <h3 className="font-bold text-lg text-slate-200 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400 max-w-xl leading-relaxed">{step.body}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 opacity-30 pointer-events-none"></div>
           <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Start with Trial+. Upgrade only if it earns your trust.</h2>
              <p className="text-lg text-slate-300 mb-10">Run one honest audit, use the prompt, and then decide if you want a done-with-you foundation on top.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                   onClick={onStartAudit}
                   className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                   <Sparkles size={20} className="text-brand-cyan" /> Start free Trial+ audit
                </button>
                <button 
                   onClick={onNavigateToFoundationPlus}
                   className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors"
                >
                   Talk about Foundation+
                </button>
              </div>
              <div className="mt-8 flex justify-center gap-8 text-xs font-mono text-slate-500">
                 <span>✓ Same audit powers both</span>
                 <span>✓ No credit card</span>
                 <span>✓ Upgrade anytime</span>
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

export default HowItWorks;
