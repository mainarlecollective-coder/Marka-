
import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight, Globe } from 'lucide-react';
import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import { NAV_LINKS, TIMELINE_STEPS, PROMPT_PREVIEW, TESTIMONIALS } from '../constants';
import { TRANSLATIONS } from '../translations';
import { Language } from '../App';

interface LandingPageProps {
  onStartAudit: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToWhatYouGet: () => void;
  onNavigateToFoundationPlus: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFAQ: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

function LandingPage({ 
  onStartAudit, 
  onNavigateToHowItWorks, 
  onNavigateToWhatYouGet, 
  onNavigateToFoundationPlus, 
  onNavigateToPricing, 
  onNavigateToFAQ,
  lang,
  setLang
}: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  // Filter out page links from the default smooth scroll links
  const filteredLinks = NAV_LINKS.filter(l => 
    l.targetId !== 'how-it-works' && 
    l.targetId !== 'what-you-get' &&
    l.targetId !== 'pricing' &&
    l.targetId !== 'faq-page'
  );

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.location.hash = '';
    }
  };

  const LanguageToggle = () => (
    <button 
      onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors"
    >
      <Globe size={14} className="text-slate-400" />
      <div className="flex text-xs font-bold font-mono">
        <span className={lang === 'en' ? 'text-brand-cyan' : 'text-slate-600'}>EN</span>
        <span className="text-slate-700 mx-1">|</span>
        <span className={lang === 'id' ? 'text-brand-cyan' : 'text-slate-600'}>ID</span>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen font-sans bg-brand-bg text-slate-50">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" onClick={handleLogoClick} className="font-display font-bold text-2xl tracking-tight">Marka<span className="text-brand-cyan">+</span></a>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={onNavigateToHowItWorks}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={onNavigateToWhatYouGet}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.nav.whatYouGet}
            </button>
            <button 
              onClick={onNavigateToPricing}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={onNavigateToFAQ}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t.nav.faq}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button 
               onClick={onNavigateToFoundationPlus}
               className="text-sm font-medium text-slate-400 hover:text-brand-cyan transition-colors"
             >
               {t.nav.foundationPlus}
             </button>
             <button 
               onClick={onStartAudit}
               className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-cyan hover:text-white transition-colors"
             >
               {t.nav.startAudit}
             </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
             <LanguageToggle />
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300">
               {isMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 p-4 absolute w-full flex flex-col gap-4 shadow-2xl">
            <button 
              onClick={() => { setIsMenuOpen(false); onNavigateToHowItWorks(); }}
              className="text-left text-slate-300 py-2 block border-b border-slate-800/50"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => { setIsMenuOpen(false); onNavigateToWhatYouGet(); }}
              className="text-left text-slate-300 py-2 block border-b border-slate-800/50"
            >
              {t.nav.whatYouGet}
            </button>
            <button 
              onClick={() => { setIsMenuOpen(false); onNavigateToPricing(); }}
              className="text-left text-slate-300 py-2 block border-b border-slate-800/50"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={() => { setIsMenuOpen(false); onNavigateToFAQ(); }}
              className="text-left text-slate-300 py-2 block border-b border-slate-800/50"
            >
              {t.nav.faq}
            </button>
            
            <button 
               onClick={() => { setIsMenuOpen(false); onNavigateToFoundationPlus(); }}
               className="text-left text-slate-300 py-2 block border-b border-slate-800/50"
             >
               {t.nav.foundationPlus}
             </button>
            <button 
              onClick={() => { setIsMenuOpen(false); onStartAudit(); }}
              className="w-full bg-brand-cyan text-white py-3 rounded-lg font-bold mt-2"
            >
              {t.nav.startAuditFull}
            </button>
          </div>
        )}
      </nav>

      <main>
        <Hero onStartAudit={onStartAudit} lang={lang} />
        <ProblemSolution lang={lang} />

        {/* How It Works Teaser (kept as teaser on LP) */}
        <section id="how-it-works-teaser" className="py-24 bg-slate-950 relative">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-16">
              <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">{t.process.tag}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">{t.process.title}</h2>
              <button onClick={onNavigateToHowItWorks} className="text-brand-cyan hover:text-white mt-4 flex items-center gap-2 text-sm font-bold">
                 {t.process.cta} <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2"></div>
              <div className="space-y-12">
                {TIMELINE_STEPS.slice(0, 3).map((step, idx) => {
                  // Use translated steps if index matches
                  const translatedStep = t.process.steps[idx];
                  return (
                    <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="hidden md:block flex-1"></div>
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand-cyan z-20 flex items-center justify-center text-xs font-bold text-brand-cyan shadow-lg shadow-brand-cyan/20">
                        {step.stepNumber}
                      </div>
                      <div className="w-full md:w-auto md:flex-1 pl-20 md:pl-0 md:px-12">
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="w-5 h-5 text-brand-cyan" />
                            <span className="text-xs font-mono bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded">{step.tag}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{translatedStep ? translatedStep.title : step.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{translatedStep ? translatedStep.body : step.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-12">
                 <button onClick={onNavigateToHowItWorks} className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:bg-white/5 transition-colors text-sm">
                    {t.process.ctaButton}
                 </button>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get / Deliverables */}
        <section id="what-you-get-teaser" className="py-24 bg-brand-surface border-y border-white/5">
          <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">{t.deliverables.tag}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-8">
                  {t.deliverables.title}
                </h2>
                
                <div className="space-y-8">
                  {t.deliverables.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={onNavigateToWhatYouGet} className="mt-8 text-brand-cyan hover:text-white flex items-center gap-2 text-sm font-bold">
                   {t.deliverables.cta} <ArrowRight size={16} />
                </button>
             </div>

             <div className="bg-slate-950 rounded-xl border border-slate-800 p-1 shadow-2xl">
               <div className="bg-[#0D1117] rounded-lg p-4 overflow-hidden">
                 <div className="flex gap-2 mb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                 </div>
                 <pre className="font-mono text-xs md:text-sm text-slate-300 overflow-x-auto custom-scrollbar p-2 leading-relaxed">
                   {PROMPT_PREVIEW}
                 </pre>
               </div>
             </div>
          </div>
        </section>

        {/* Comparison / Pricing */}
        <section id="trial-vs-foundation" className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 lg:px-6">
             <div className="text-center mb-16">
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">{t.pricing.tag}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">{t.pricing.title}</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Trial+ Card */}
               <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col">
                  <div className="mb-8">
                     <span className="bg-slate-800 text-slate-300 text-xs font-bold px-3 py-1 rounded-full">{t.pricing.trial.badge}</span>
                     <h3 className="text-3xl font-display font-bold mt-4 mb-1">Trial+</h3>
                     <p className="text-slate-400">{t.pricing.trial.desc}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {t.pricing.trial.items.map((item, i) => (
                       <li key={i} className="flex gap-3 text-sm text-slate-300">
                         <Check className="w-5 h-5 text-slate-500 shrink-0" /> {item}
                       </li>
                     ))}
                  </ul>
                  <button 
                    onClick={onStartAudit}
                    className="w-full py-4 rounded-xl font-bold border border-slate-700 hover:bg-slate-800 transition-colors text-white"
                  >
                    {t.pricing.trial.cta}
                  </button>
               </div>

               {/* Foundation+ Card */}
               <div className="bg-slate-900 rounded-2xl p-8 border border-brand-blue/30 relative flex flex-col shadow-2xl shadow-brand-blue/10">
                  <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
                    {t.pricing.foundation.badge}
                  </div>
                  <div className="mb-8">
                     <h3 className="text-3xl font-display font-bold mt-4 mb-1 text-white">Foundation+</h3>
                     <p className="text-brand-blue">{t.pricing.foundation.desc}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     <li className="flex gap-3 text-sm font-bold text-white">
                       <Check className="w-5 h-5 text-brand-blue shrink-0" /> {t.pricing.foundation.addon}
                     </li>
                     {t.pricing.foundation.items.map((item, i) => (
                       <li key={i} className="flex gap-3 text-sm text-slate-300">
                         <Check className="w-5 h-5 text-brand-blue shrink-0" /> {item}
                       </li>
                     ))}
                  </ul>
                  <button onClick={onNavigateToFoundationPlus} className="w-full py-4 rounded-xl font-bold bg-brand-blue hover:bg-blue-600 transition-colors text-white">
                    {t.pricing.foundation.cta}
                  </button>
               </div>
             </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-brand-bg border-t border-white/5">
           <div className="container mx-auto px-4 lg:px-6">
              <h2 className="font-display text-3xl font-bold text-center mb-16">{t.testimonials.title}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {t.testimonials.list.map((testimonial, i) => {
                   // Fallback to constants if length mismatch (though translations match constants structure)
                   const name = TESTIMONIALS[i]?.name || "Founder";
                   const badge = TESTIMONIALS[i]?.badge || "Trial+ User";
                   return (
                    <div key={i} className="bg-brand-surface p-8 rounded-xl border border-white/5">
                      <p className="text-slate-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-bold text-white">{name}</div>
                        <div className="text-xs text-slate-500">{testimonial.role}</div>
                        <div className="text-xs text-brand-cyan mt-1">{badge}</div>
                      </div>
                    </div>
                   );
                })}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 pointer-events-none"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
             <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{t.finalCta.title}</h2>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
               {t.finalCta.subtitle}
             </p>
             <button 
               onClick={onStartAudit}
               className="bg-white text-slate-900 text-lg px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
             >
               {t.finalCta.button}
             </button>
             <p className="text-slate-500 text-sm font-mono mt-6">{t.finalCta.meta}</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 bg-slate-950">
          <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
               <div className="font-display font-bold text-xl">Marka+</div>
               <p className="text-slate-500 text-sm mt-1">{t.footer.tagline}</p>
             </div>
             <div className="flex gap-6 text-sm text-slate-400">
               <button onClick={onNavigateToFAQ} className="hover:text-white">{t.nav.faq}</button>
               {t.footer.links.slice(1).map((link, i) => (
                  <a key={i} href="#" className="hover:text-white">{link}</a>
               ))}
             </div>
             <div className="text-slate-600 text-xs">
               © 2025 Marka+.
             </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default LandingPage;
