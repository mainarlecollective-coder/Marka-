
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, ChevronRight, Sparkles, Target, CircleCheck, Clock, Infinity as InfinityIcon, 
  ListChecks, FileText, CalendarCheck, Cpu, CalendarDays, Brain, Map, 
  Compass, Users, MessageCircle, Check, ArrowRight 
} from 'lucide-react';

interface WhatYouGetProps {
  onBack: () => void;
  onNavigateToWizard: () => void;
  onNavigateToFoundation: () => void;
  onNavigateToFoundationPlus: () => void;
}

const WhatYouGet = ({ onBack, onNavigateToWizard, onNavigateToFoundation, onNavigateToFoundationPlus }: WhatYouGetProps) => {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 overflow-x-hidden selection:bg-brand-cyan/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 h-[72px] flex items-center">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm font-medium">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Home size={16} /> Home
            </button>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-white">What You Get</span>
          </div>
          <button 
            onClick={onNavigateToWizard}
            className="hidden sm:flex bg-brand-cyan text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors"
          >
            Start Audit
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20">

        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-4 block">// WHAT YOU ACTUALLY GET</span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Not just "ideas" — concrete assets you can use <span className="text-brand-cyan">this week.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Trial+ gives you a serious strategic prompt you can reuse. Foundation+ layers on strategy docs, weekly blueprints, prompt libraries, and calendars so your marketing runs on rails, not vibes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onNavigateToWizard}
                  className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles size={18} className="text-brand-cyan group-hover:scale-110 transition-transform"/> Start free with Trial+
                </button>
                <button 
                  onClick={onNavigateToFoundationPlus}
                  className="px-6 py-3 rounded-full font-medium text-slate-300 border border-slate-700 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <Target size={18} /> Explore Foundation+
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <CircleCheck size={14} className="text-emerald-500" /> Same audit powers both tiers
                 </div>
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <Clock size={14} /> ~18–25 min once for Trial+
                 </div>
                 <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-md border border-slate-800">
                    <InfinityIcon size={14} /> Reusable systems
                 </div>
              </div>
            </motion.div>

            {/* Right Visual: Orbiting Pills */}
            <div className="relative h-[400px] flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-3xl scale-75 animate-pulse"></div>
               <div className="relative w-full max-w-md h-full">
                  {[
                    { label: "Strategic audit", icon: ListChecks, x: "0%", y: "-40%", delay: 0 },
                    { label: "Expert AI prompt", icon: Sparkles, x: "40%", y: "-20%", delay: 1 },
                    { label: "90-day strategy docs", icon: FileText, x: "-40%", y: "-20%", delay: 2 },
                    { label: "Weekly content blueprints", icon: CalendarCheck, x: "-30%", y: "20%", delay: 3 },
                    { label: "40 AI prompts/month", icon: Cpu, x: "30%", y: "20%", delay: 4 },
                    { label: "Interactive calendar", icon: CalendarDays, x: "0%", y: "45%", delay: 5 },
                  ].map((pill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{ 
                        opacity: { delay: i * 0.1, duration: 0.5 },
                        y: { repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i }
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-4 py-3 rounded-full flex items-center gap-3 shadow-xl whitespace-nowrap"
                      style={{ marginLeft: pill.x, marginTop: pill.y }}
                    >
                       <pill.icon size={18} className="text-brand-cyan" />
                       <span className="text-sm font-bold text-slate-200">{pill.label}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Tier Overview Cards */}
        <section className="py-24 bg-slate-950 border-y border-white/5">
           <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-16">
                 <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-2 block">// TWO LEVELS, ONE FOUNDATION</span>
                 <h2 className="font-display text-3xl font-bold mb-4">Trial+ builds the foundation. Foundation+ turns it into a system.</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto">Both start from the same strategic audit — the difference is how much you want us to handle for you.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                 {/* Trial+ */}
                 <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-brand-cyan/30 transition-colors">
                    <div className="mb-6">
                       <span className="text-xs font-bold bg-brand-cyan/10 text-brand-cyan px-2 py-1 rounded tracking-wider">TRIAL+</span>
                       <h3 className="text-2xl font-display font-bold mt-2">Free • DIY</h3>
                       <span className="inline-block mt-2 text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">You + AI</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                       {[
                         "Strategic audit that forces clarity about your business, customers, and constraints.",
                         "One long-form, context-rich AI prompt engineered for marketing strategy.",
                         "You paste the prompt into ChatGPT, Claude, or similar and run the conversation.",
                         "You own the AI output and can adapt it as your working strategy document."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm text-slate-300">
                           <Check size={16} className="text-slate-500 shrink-0 mt-0.5" />
                           {item}
                         </li>
                       ))}
                    </ul>
                    <div className="bg-slate-950 p-4 rounded-lg mb-6 text-xs text-slate-400 font-mono space-y-1">
                       <p>Time: One focused session (~18–25 minutes)</p>
                       <p>Cost: Rp 0 — free forever</p>
                    </div>
                    <button 
                      onClick={() => document.getElementById('trial-detail')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition-colors font-bold text-sm"
                    >
                      See everything in Trial+
                    </button>
                 </div>

                 {/* Foundation+ */}
                 <div className="bg-gradient-to-br from-slate-900 to-brand-blue/10 border border-brand-blue/30 rounded-2xl p-8 flex flex-col shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px]"></div>
                    <div className="mb-6 relative z-10">
                       <span className="text-xs font-bold bg-brand-blue/20 text-brand-blue px-2 py-1 rounded tracking-wider">FOUNDATION+</span>
                       <h3 className="text-2xl font-display font-bold mt-2">Paid • Done-with-you</h3>
                       <span className="inline-block mt-2 text-xs font-mono bg-brand-blue/10 text-brand-blue px-2 py-1 rounded">You + AI + Marka+</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                       {[
                         "We reuse your audit as onboarding — no repeating yourself.",
                         "We turn your foundation into recurring strategy docs and weekly execution blueprints.",
                         "You get an AI prompt library and interactive calendar so consistency gets easier.",
                         "We provide light human support so you’re not guessing alone."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm text-slate-200">
                           <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                           {item}
                         </li>
                       ))}
                    </ul>
                    <div className="bg-slate-950/50 p-4 rounded-lg mb-6 text-xs text-slate-300 font-mono space-y-1 relative z-10">
                       <p>Time: Audit once + brief check-ins</p>
                       <p>Cost: Monthly subscription</p>
                    </div>
                    <button 
                      onClick={onNavigateToFoundationPlus}
                      className="w-full py-3 rounded-xl bg-brand-blue hover:bg-blue-600 transition-colors font-bold text-sm text-white shadow-lg relative z-10"
                    >
                      See everything in Foundation+
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Trial+ Detail */}
        <section id="trial-detail" className="py-24 container mx-auto px-4 lg:px-6">
           <div className="mb-16">
              <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-2 block">// WHAT YOU GET WITH TRIAL+</span>
              <h2 className="font-display text-3xl font-bold mb-4">Trial+ — everything you need to brief AI like a strategist.</h2>
              <p className="text-slate-400 max-w-2xl">One-time, high-leverage working session that results in a reusable expert prompt and a clearer understanding of your own business.</p>
           </div>

           <div className="space-y-16">
              {[
                {
                   title: "1. Strategic Audit (Multi-module form)",
                   subtitle: "A guided, plain-language audit that captures the context AI actually needs.",
                   items: [
                     "Modules covering business foundation, customer intelligence, competition, marketing history, constraints, and brand personality.",
                     "Each question includes \"Why this matters\" micro-copy so you understand the strategic reason behind it.",
                     "Examples of good vs bad answers help you answer like a strategist.",
                     "Final review screen shows a structured snapshot of your business reality."
                   ],
                   value: [
                     "Gain strategic clarity you’ve never written down before — your business finally makes sense on paper.",
                     "Spot gaps in your offer, audience clarity, or messaging before spending money on marketing.",
                     "Build a strategic vocabulary that makes AI and team discussions 10× clearer.",
                     "Walk away with a founder-ready snapshot you can share with collaborators, freelancers, or advisors."
                   ],
                   icon: Brain
                },
                {
                   title: "2. Expert-Level AI Prompt",
                   subtitle: "A long-form, context-rich prompt you can paste into ChatGPT/Claude to generate a 90-day strategy.",
                   items: [
                     "Role definition: instructs the AI to act as a senior marketing strategist familiar with your industry.",
                     "Context block: summarizes your business, customers, competitors, constraints, and brand in structured paragraphs.",
                     "Task block: clearly asks for a 90-day strategy with specific sections (priorities, channels, content pillars, timelines, metrics).",
                     "Constraints: reminds AI about your time, budget, and capability limits so recommendations stay realistic.",
                     "Output formatting: asks for a structured, skimmable document instead of a messy wall of text."
                   ],
                   value: [
                     "Transform AI from random idea-generator into an actual strategist who understands your business deeply.",
                     "Save hours writing new prompts — reuse this one every month for updates.",
                     "Produce cleaner, more strategic plans with fewer contradictions.",
                     "Turn AI into a leverage tool that amplifies your thinking, not confuses it."
                   ],
                   icon: Sparkles
                },
                {
                   title: "3. Usage Guide & Examples",
                   subtitle: "Clear instructions so the prompt doesn’t rot in your downloads folder.",
                   items: [
                     "Step-by-step instructions: how to paste, what to expect, and what to ask as follow-up.",
                     "Suggestions for refining the AI’s output (e.g., \"simplify this into a weekly checklist\").",
                     "Ideas for repurposing: using the same prompt to generate content ideas, email sequences, and landing page copy.",
                     "Examples of \"good follow-up questions\" you can ask the AI to stress-test the strategy."
                   ],
                   value: [
                     "Know exactly what to do after AI gives you a big document — no overwhelm or paralysis.",
                     "Turn your strategy into a monthly ritual you can depend on.",
                     "Let AI help your team self-serve instead of constantly asking you for context.",
                     "Eliminate messy, inconsistent AI chats — shift to a structured workflow."
                   ],
                   icon: Map
                }
              ].map((group, i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-12 border-b border-slate-800 pb-16 last:border-0 last:pb-0">
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{group.title}</h3>
                      <p className="text-slate-400 mb-6">{group.subtitle}</p>
                      <ul className="space-y-3">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-sm text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-fit">
                      <div className="flex items-center gap-3 mb-4 text-brand-cyan">
                         <group.icon size={24} />
                         <span className="font-bold text-sm uppercase tracking-wider">Founder-Level Value</span>
                      </div>
                      <ul className="space-y-3">
                        {group.value.map((val, k) => (
                          <li key={k} className="flex gap-3 text-sm text-slate-400">
                             <Check size={16} className="text-brand-cyan/50 shrink-0 mt-0.5" />
                             {val}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Foundation+ Detail */}
        <section id="foundation-detail" className="py-24 bg-slate-950 border-t border-white/5">
           <div className="container mx-auto px-4 lg:px-6">
              <div className="mb-16">
                 <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-2 block">// WHAT YOU GET WITH FOUNDATION+</span>
                 <h2 className="font-display text-3xl font-bold mb-4">Foundation+ — from "I have a prompt" to "I have a system."</h2>
                 <p className="text-slate-400 max-w-2xl">Everything in Trial+ plus strategy documents, weekly blueprints, prompt libraries, and an interactive calendar built on top of your audit.</p>
              </div>

              <div className="space-y-16">
                 {[
                   {
                     title: "1. Strategy Blueprint Document",
                     subtitle: "A written 90-day plan built for you, not by you.",
                     items: [
                       "We start from your Trial+/Foundation+ audit and your AI prompt as the raw strategic material.",
                       "We craft a 90-day strategy blueprint with clear priorities, key bets, and trade-offs.",
                       "The document is written in human language, not AI-fluff: concise, justified, and prioritised.",
                       "Includes 30-day, 60-day, and 90-day checkpoints aligned to your reality (time, budget, platform)."
                     ],
                     value: [
                       "Skip the stress of forcing AI to write a clean strategy — we deliver it for you.",
                       "Gain a north star that filters distractions and shiny tactics.",
                       "Stop shifting strategies every week — follow one 90-day direction.",
                       "Keep alignment across your team, partners, or freelancers effortlessly."
                     ],
                     icon: Target
                   },
                   {
                     title: "2. Weekly Content Blueprint",
                     subtitle: "A concrete 7-day execution plan tailored to your business and constraints.",
                     items: [
                       "Every Sunday 8pm delivery. For each day of the week, you get: post type, topic, objective, content structure, caption starter, visual direction, posting window, hashtags, and follow-up actions.",
                       "Blueprints respect your capacity: fewer days for constrained founders, more days if you want to push.",
                       "Mix of educational, social proof, promotional, entertainment, and behind-the-scenes content each week.",
                       "Platform-aware: formats and hooks adjust based on your main platform (Instagram, TikTok, LinkedIn, etc.)."
                     ],
                     value: [
                       "Never start Monday confused — the week is pre-planned.",
                       "Stop wasting hours researching ideas — execution becomes plug-and-play.",
                       "Achieve consistency without burnout or overthinking.",
                       "Focus on showing up — not deciding what to post."
                     ],
                     icon: CalendarCheck
                   },
                   {
                     title: "3. Content Pillar Prompt Library",
                     subtitle: "40 AI-ready prompts/month across 5 content pillars, already loaded with your context.",
                     items: [
                       "Prompts grouped by pillars: Educational, Social Proof, Behind-the-scenes, Features, Promotions.",
                       "Each prompt includes context fields: your business, customer, problem, result, and brand voice.",
                       "Each output request is structured (e.g., Hook → Story → Result → CTA, or Problem → Agitation → Solution).",
                       "You get 40 prompt uses/month, enough to support daily posting plus experiments."
                     ],
                     value: [
                       "Eliminate blank-page syndrome forever.",
                       "Maintain consistent messaging across all content, because prompts are anchored to your strategy.",
                       "Delegate content creation with confidence and alignment.",
                       "Publish more with less effort and less decision fatigue."
                     ],
                     icon: Cpu
                   },
                   {
                     title: "4. Content Calendar Dashboard",
                     subtitle: "A living calendar that keeps your plan alive.",
                     items: [
                       "Monthly view shows what to post each day, content type, and time window recommendations.",
                       "Weekly zoom-in view for detailed planning and day-by-day focus.",
                       "Each day links back to the Weekly Blueprint entry and any prompt used to generate the content.",
                       "Checkboxes and notes for tracking: Posted / Skipped / Rescheduled plus quick performance comments.",
                       "Drag-and-drop rescheduling so your plan adapts when life happens without turning into chaos."
                     ],
                     value: [
                       "Your marketing becomes visible, trackable, and predictable.",
                       "You adapt quickly when life happens without losing momentum.",
                       "Spot patterns, strengths, and gaps instantly.",
                       "Build a sustainable marketing rhythm instead of sprinting and burning out."
                     ],
                     icon: CalendarDays
                   },
                   {
                     title: "5. Light Human Support & Iteration",
                     subtitle: "You’re not yelling into the void — you have a partner to reality-check ideas.",
                     items: [
                       "Asynchronous support for questions about your strategy, weekly plan, or content choices.",
                       "Guidance on how to adapt the plan when results or context change.",
                       "Help translating raw analytics and feedback into practical adjustments.",
                       "Periodic suggestions on what to simplify, drop, or double down on."
                     ],
                     value: [
                       "No more yelling into the void — you get real-time help when stuck.",
                       "Avoid weeks of wasted effort by correcting direction early.",
                       "Make smarter decisions with expert insight in your corner.",
                       "Stay consistent because the system doesn’t break when life gets messy."
                     ],
                     icon: MessageCircle
                   }
                 ].map((group, i) => (
                   <div key={i} className="grid lg:grid-cols-2 gap-12 border-b border-slate-900 pb-16 last:border-0 last:pb-0">
                      <div>
                         <h3 className="text-2xl font-bold text-white mb-2">{group.title}</h3>
                         <p className="text-slate-400 mb-6">{group.subtitle}</p>
                         <ul className="space-y-3">
                           {group.items.map((item, j) => (
                             <li key={j} className="flex gap-3 text-sm text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0"></div>
                                {item}
                             </li>
                           ))}
                         </ul>
                      </div>
                      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 h-fit">
                         <div className="flex items-center gap-3 mb-4 text-brand-blue">
                            <group.icon size={24} />
                            <span className="font-bold text-sm uppercase tracking-wider">Founder-Level Value</span>
                         </div>
                         <ul className="space-y-3">
                           {group.value.map((val, k) => (
                             <li key={k} className="flex gap-3 text-sm text-slate-400">
                                <Check size={16} className="text-brand-blue/50 shrink-0 mt-0.5" />
                                {val}
                             </li>
                           ))}
                         </ul>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Added Value Strip */}
        <section className="py-24 bg-brand-bg relative">
           <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-12">
                 <span className="text-emerald-500 font-mono text-sm font-bold tracking-wider mb-2 block">// ADDED VALUE SUMMARY</span>
                 <h2 className="font-display text-2xl font-bold">What changes in your day-to-day when you use each tier?</h2>
                 <p className="text-slate-400 mt-2">Same business. Same constraints. Different level of support and structure.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { label: "From \"guessing\" to \"guided\"", icon: Compass, desc: "Trial+ gives you a strategic AI guide. Foundation+ gives you weekly and monthly rails to run on." },
                   { label: "From \"ideas\" to \"calendar\"", icon: CalendarCheck, desc: "Trial+ = big strategy ideas in an AI chat. Foundation+ = mapped into a calendar with reminders and tracking." },
                   { label: "From \"I\" to \"we\"", icon: Users, desc: "Trial+ is solo-friendly. Foundation+ lets team members plug into a shared system." },
                   { label: "From \"tool confusion\" to \"tool leverage\"", icon: Cpu, desc: "Trial+ makes AI more useful. Foundation+ turns AI into one piece of a larger, human-led system." },
                 ].map((item, i) => (
                   <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                      <div className="inline-flex p-3 rounded-full bg-slate-800 text-slate-300 mb-4">
                         <item.icon size={20} />
                      </div>
                      <h3 className="font-bold text-white mb-2">{item.label}</h3>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-slate-950 border-t border-white/5">
           <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
              <div className="text-center mb-12">
                 <span className="text-brand-blue font-mono text-sm font-bold tracking-wider mb-2 block">// SIDE-BY-SIDE VIEW</span>
                 <h2 className="font-display text-3xl font-bold">What you get in Trial+ vs Foundation+</h2>
                 <p className="text-slate-400 mt-2">Focus on tangible outputs and the value they create.</p>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full border-collapse">
                    <thead>
                       <tr className="border-b border-slate-800">
                          <th className="text-left py-4 px-4 text-sm font-mono text-slate-500 uppercase tracking-wider">Asset / Outcome</th>
                          <th className="text-left py-4 px-4 text-sm font-bold text-brand-cyan w-1/3">Trial+ (Free • DIY)</th>
                          <th className="text-left py-4 px-4 text-sm font-bold text-brand-blue w-1/3">Foundation+ (Paid • Done-with-you)</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                       {[
                         { dim: "Strategic audit", t: "Multi-module form you complete once.", f: "Same audit, reused and expanded over time." },
                         { dim: "AI prompt", t: "One long-form prompt you can reuse.", f: "Same base prompt, plus specialised prompts in the library." },
                         { dim: "90-day strategy document", t: "Generated by AI from your prompt, you curate yourself.", f: "Written and structured for you, based on your audit and results." },
                         { dim: "Weekly content plan", t: "You design it yourself from the AI strategy.", f: "Weekly Content Blueprint delivered every Sunday at 8pm." },
                         { dim: "Prompt library", t: "Your single base prompt plus any you manually create.", f: "40 AI-ready prompts per month, organised by content pillar with your context pre-filled." },
                         { dim: "Execution calendar", t: "Whatever you build in Notion/Sheets/your notebook.", f: "Interactive content calendar dashboard with tracking and reminders." },
                         { dim: "Human support", t: "None – DIY.", f: "Light ongoing guidance and iteration support." },
                         { dim: "Main value", t: "Better prompts and better questions.", f: "Better prompts, better questions, and a working system to execute them." },
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                            <td className="py-4 px-4 text-sm font-medium text-slate-300">{row.dim}</td>
                            <td className="py-4 px-4 text-sm text-slate-400">{row.t}</td>
                            <td className="py-4 px-4 text-sm text-slate-400">{row.f}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 opacity-30 pointer-events-none"></div>
           <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Start with Trial+. Upgrade to Foundation+ when you’re ready for a system.</h2>
              <p className="text-lg text-slate-300 mb-10">
                Trial+ is your on-ramp into clearer thinking and better prompts. Foundation+ is what you add when you want weekly blueprints, prompt libraries, and calendars doing the heavy lifting.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                   onClick={onNavigateToWizard}
                   className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                   <Sparkles size={20} className="text-brand-cyan" /> Start free Trial+ audit
                </button>
                <button 
                   onClick={onNavigateToFoundationPlus}
                   className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                   <MessageCircle size={20} /> Talk about Foundation+
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-500">
                 <span>✓ Same audit powers both tiers</span>
                 <span>✓ No credit card required for Trial+</span>
                 <span>✓ Upgrade only if the outputs earn your trust</span>
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
            <div className="text-slate-600 text-xs">
              © 2025 Marka+.
            </div>
        </div>
      </footer>

    </div>
  );
};

export default WhatYouGet;
