import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartAudit: () => void;
}

const Hero = ({ onStartAudit }: HeroProps) => {
  const [step, setStep] = useState(0);

  // Animation sequence loop
  useEffect(() => {
    // A simplified customized loop
    let isMounted = true;
    const runLoop = async () => {
        while(isMounted) {
            setStep(0);
            await new Promise(r => setTimeout(r, 500)); // Start
            if(!isMounted) break;
            setStep(1); // Bad prompt typed
            await new Promise(r => setTimeout(r, 1000)); // Wait
            if(!isMounted) break;
            setStep(2); // Bad output
            await new Promise(r => setTimeout(r, 3000)); // Read bad output
            if(!isMounted) break;
            setStep(3); // Switch focus
            await new Promise(r => setTimeout(r, 1500)); // Good prompt typing
            if(!isMounted) break;
            setStep(4); // Good output
            await new Promise(r => setTimeout(r, 6000)); // Read good output
        }
    }
    
    runLoop();

    return () => { isMounted = false; };
  }, []);

  return (
    <section id="hero" className="relative min-h-[900px] pt-32 pb-16 flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-brand-cyan/30 bg-brand-cyan/10">
            <span className="text-brand-cyan font-mono text-xs tracking-wider font-semibold">
              // STRATEGIC AI FOR FOUNDERS
            </span>
          </div>
          
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Stop Asking AI for <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan">
              Generic Marketing Garbage.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
            Marka+ turns your business into a strategic, context-rich prompt so AI finally gives you real marketing strategy instead of recycled templates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={onStartAudit}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue p-[1px]"
            >
              <div className="relative bg-slate-900 group-hover:bg-slate-900/50 transition-colors rounded-full px-8 py-4 flex items-center gap-2">
                 <span className="font-semibold text-white relative z-10">Start Free Strategic Audit</span>
                 <ArrowRight className="w-4 h-4 text-white relative z-10 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-20 group-hover:opacity-100 transition-opacity blur-md"></div>
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all font-medium"
            >
              See how it works ↓
            </button>
          </div>
          
          <p className="text-sm text-slate-500 font-mono">
            ✓ Free • ✓ No credit card • ✓ ~20 min • ✓ Keep the prompt
          </p>
        </motion.div>

        {/* Right Column: Demo */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-xl perspective-1000">
          <div className="relative grid gap-4">
            
            {/* Bad Prompt Card */}
            <motion.div 
              animate={{ 
                opacity: step >= 3 ? 0.3 : 1,
                scale: step >= 3 ? 0.95 : 1,
                filter: step >= 3 ? 'blur(2px)' : 'blur(0px)'
              }}
              className="bg-slate-900/90 border border-brand-rose/20 rounded-xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-rose"></div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-brand-rose font-mono text-xs font-bold">✗ BAD INPUT</span>
              </div>
              <div className="font-mono text-sm text-slate-300 mb-4 bg-slate-950/50 p-3 rounded">
                "Give me a marketing strategy"
              </div>
              
              <AnimatePresence>
                {step >= 2 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2 border-t border-slate-800 pt-3"
                  >
                    <div className="h-2 w-3/4 bg-slate-800 rounded animate-pulse"></div>
                    <div className="h-2 w-1/2 bg-slate-800 rounded animate-pulse"></div>
                    <div className="text-xs text-brand-rose/80 font-mono mt-2">
                      → Generic outputs: "Post on TikTok", "Run Ads"
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Good Prompt Card */}
            <motion.div 
              animate={{ 
                opacity: step >= 3 ? 1 : 0.4,
                scale: step >= 3 ? 1.05 : 0.95,
                boxShadow: step >= 3 ? '0 0 40px rgba(6, 182, 212, 0.15)' : 'none',
                y: step >= 3 ? -10 : 0
              }}
              className="bg-slate-900/95 border border-brand-cyan/30 rounded-xl p-6 shadow-2xl relative overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan"></div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-brand-cyan font-mono text-xs font-bold">✓ TRIAL+ STRATEGIC PROMPT</span>
              </div>
              
              <div className="font-mono text-xs text-slate-400 mb-4 bg-slate-950/80 p-3 rounded space-y-1 h-32 overflow-hidden relative">
                 {step >= 3 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <p className="text-brand-cyan">BUSINESS OVERVIEW:</p>
                        <p>SaaS, $500 LTV, Bootstrap</p>
                        <p className="text-brand-cyan mt-1">GOALS:</p>
                        <p>1. Acquire 50 users via SEO</p>
                        <p className="text-brand-cyan mt-1">CONSTRAINTS:</p>
                        <p>No ad budget, 1 founder</p>
                    </motion.div>
                 ) : (
                    <span className="animate-pulse">Waiting for input...</span>
                 )}
              </div>

              <AnimatePresence>
                {step >= 4 && (
                   <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="space-y-2 border-t border-slate-800 pt-3"
                 >
                   <div className="text-xs text-brand-emerald font-mono mb-1">→ STRATEGIC OUTPUT:</div>
                   <div className="text-xs text-slate-300">
                     • Focus purely on long-tail SEO for "Founders"
                   </div>
                   <div className="text-xs text-slate-300">
                     • Ignore paid ads due to budget constraints
                   </div>
                   <div className="text-xs text-slate-300">
                     • 90-Day execution roadmap tailored to 1 person
                   </div>
                 </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
        <ChevronDown className="w-4 h-4 opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;