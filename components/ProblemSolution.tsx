
import React from 'react';
import { PROBLEM_CARDS, SOLUTION_FEATURES } from '../constants';
import { TRANSLATIONS } from '../translations';
import { Language } from '../App';

interface ProblemSolutionProps {
  lang?: Language;
}

const ProblemSolution = ({ lang = 'en' }: ProblemSolutionProps) => {
  const t = TRANSLATIONS[lang];

  return (
    <>
      {/* Problem Section */}
      <section id="problem" className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-rose font-mono text-sm font-bold tracking-wider">{t.problem.tag}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              {t.problem.title}
            </h2>
            <p className="text-slate-400 text-lg">
              {t.problem.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROBLEM_CARDS.map((card, idx) => {
              // Get translated content for this card index
              const translatedCard = t.problem.cards[idx];
              return (
                <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-brand-rose/30 transition-colors group">
                  <div className={`mb-6 p-3 rounded-lg inline-flex bg-slate-950 ${card.accent}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{translatedCard ? translatedCard.title : card.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{translatedCard ? translatedCard.body : card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-brand-bg relative">
         <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-cyan font-mono text-sm font-bold tracking-wider">{t.solution.tag}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                  {t.solution.title}
                </h2>
                <p className="text-slate-400 text-lg">
                  {t.solution.desc}
                </p>
            </div>

            {/* Modules Visualization */}
            <div className="hidden md:flex justify-between items-center mb-20 relative px-8">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent -translate-y-1/2"></div>
                {['Business', 'Customer', 'Offer', 'Baseline', 'Goals', 'Constraints', 'Brand'].map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-brand-bg border-2 border-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-brand-bg px-2">{item}</span>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOLUTION_FEATURES.map((feature, idx) => {
                  const translatedFeature = t.solution.features[idx];
                  return (
                    <div key={idx} className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-colors">
                      <div className={`mb-4 ${feature.accent}`}>
                          <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-slate-200">{translatedFeature ? translatedFeature.title : feature.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{translatedFeature ? translatedFeature.body : feature.body}</p>
                    </div>
                  );
                })}
            </div>
         </div>
      </section>
    </>
  );
};

export default ProblemSolution;
