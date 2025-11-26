
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronRight, Plus, Minus, Search, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';

interface FAQPageProps {
  onBack: () => void;
  onNavigateToTrial: () => void;
}

const FAQ_CATEGORIES = [
  {
    id: "general",
    title: "General & Trial+",
    items: [
      { q: "Is Trial+ really free? What’s the catch?", a: "Yes. Trial+ is a free strategic audit plus expert AI prompt. You can reuse it as long as you like. The only catch is that execution is fully DIY — if you want weekly blueprints, prompt libraries, and a calendar, that lives in Foundation+." },
      { q: "How long does the audit actually take?", a: "Most founders complete the audit in 20–25 minutes in a single sitting. It is designed to be done once, deeply, to save you hours of prompting later." },
      { q: "Do I need marketing experience to use Trial+?", a: "No. Trial+ is designed to teach you as you go, with examples and plain-language explanations for every question. It acts as a marketing tutor." },
      { q: "Do I have to use ChatGPT?", a: "No. You can paste your prompt into any LLM (ChatGPT, Claude, Gemini, etc.). Trial+ is tool-agnostic, though we recommend GPT-4 or Claude 3.5 Sonnet for best results." },
      { q: "Can I reuse the same prompt?", a: "Yes. You can reuse, tweak, and regenerate with different AI tools as many times as you want. The prompt becomes a strategic asset you own." },
      { q: "Do I need Foundation+ for Trial+ to be useful?", a: "No. Trial+ is intentionally complete on its own. You get a serious, long-form AI prompt that can power a full 90-day strategy if you are willing to execute it yourself." },
    ]
  },
  {
    id: "foundation",
    title: "Foundation+ & Pricing",
    items: [
       { q: "What’s the difference between Trial+ and Foundation+?", a: "Trial+ helps you use AI better on your own (DIY). Foundation+ adds ongoing done-with-you strategy, plans, content blueprints, and support." },
       { q: "How exactly is Foundation+ priced?", a: "During early access, Foundation+ will start around Rp 399k / month for solo founders, with tiered options as we introduce more features. Early cohorts keep their launch pricing." },
       { q: "Can I cancel Foundation+ anytime?", a: "Yes. There’s no long-term lock-in. If you cancel, you keep your audit, your original Trial+ prompt, and any strategy docs you’ve already received." },
       { q: "If I start with Trial+, will I have to repeat questions to upgrade?", a: "No. Your Trial+ audit becomes your onboarding file. We reuse and refine those answers so you don't start from zero." },
       { q: "I’m not comfortable with AI tools yet. Which tier?", a: "If you want less time in AI and more time executing, Foundation+ makes more sense because we turn the strategy into clear ingredients for you." },
       { q: "Why not just hire an agency instead?", a: "You absolutely can. Agencies are great when you have budget and clarity. Marka+ exists to get you to that clarity first, for a fraction of the cost, and to give you a system you own even if you later hire an agency." },
    ]
  }
];

const FAQPage = ({ onBack, onNavigateToTrial }: FAQPageProps) => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (idx: string) => {
    setOpenItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredCategories = FAQ_CATEGORIES.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

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
            <span className="text-white">FAQ</span>
          </div>
          <button 
            onClick={onNavigateToTrial}
            className="hidden sm:flex bg-brand-cyan text-slate-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors"
          >
            Start Free Audit
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider mb-2 block">// KNOWLEDGE BASE</span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                    Everything you need to know about the audit, the prompt, and the ongoing system.
                </p>

                {/* Search */}
                <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-slate-500" />
                    </div>
                    <input 
                        type="text"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                </div>
            </motion.div>

            {/* Categories Tabs (only show if not searching) */}
            {!searchQuery && (
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {FAQ_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                                activeCategory === cat.id 
                                ? 'bg-brand-cyan text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            )}

            <div className="space-y-12">
                {(searchQuery ? filteredCategories : FAQ_CATEGORIES.filter(c => c.id === activeCategory)).map((category) => (
                    <motion.div 
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {searchQuery && <h3 className="text-xl font-bold mb-6 text-brand-cyan">{category.title}</h3>}
                        <div className="space-y-4">
                            {category.items.map((item, i) => {
                                const isOpen = openItems[`${category.id}-${i}`];
                                return (
                                    <div 
                                        key={i} 
                                        className={`bg-slate-900/50 border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-cyan/30 bg-slate-900' : 'border-slate-800 hover:border-slate-700'}`}
                                    >
                                        <button 
                                            onClick={() => toggleItem(`${category.id}-${i}`)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className={`font-bold text-lg ${isOpen ? 'text-white' : 'text-slate-300'}`}>{item.q}</span>
                                            <div className={`p-1 rounded-full border transition-colors ${isOpen ? 'bg-brand-cyan text-slate-950 border-brand-cyan' : 'border-slate-700 text-slate-500'}`}>
                                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                ))}

                {searchQuery && filteredCategories.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-800">
                            <HelpCircle size={24} className="text-slate-600" />
                        </div>
                        <p className="text-slate-400">No questions found matching "{searchQuery}"</p>
                        <button onClick={() => setSearchQuery("")} className="text-brand-cyan font-bold mt-2 hover:underline">Clear search</button>
                    </div>
                )}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        We believe in transparency. If you're unsure about whether Marka+ is right for your stage, just ask.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <button 
                            onClick={onNavigateToTrial}
                            className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-brand-cyan hover:text-white transition-colors"
                        >
                            Start Trial+ Audit
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-xl">Marka+</div>
              <p className="text-slate-500 text-sm mt-1">Strategic thinking for AI-powered founders.</p>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
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

export default FAQPage;
