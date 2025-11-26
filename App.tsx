
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import TrialPlusWizard from './components/TrialPlusWizard';
import HowItWorks from './components/HowItWorks';
import FoundationPlusAddons from './components/FoundationPlusAddons';
import WhatYouGet from './components/WhatYouGet';
import FoundationPlusComingSoon from './components/FoundationPlusComingSoon';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';

function App() {
  const [view, setView] = useState<'landing' | 'wizard' | 'how-it-works' | 'foundation-plus-addons' | 'what-you-get' | 'foundation-plus-coming-soon' | 'pricing' | 'faq'>('landing');

  // Simple hash-based routing handler to support back/forward buttons loosely
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#how-it-works') {
        setView('how-it-works');
      } else if (hash === '#wizard') {
        setView('wizard');
      } else if (hash === '#foundation-plus-addons') {
        setView('foundation-plus-addons');
      } else if (hash === '#what-you-get') {
        setView('what-you-get');
      } else if (hash === '#foundation-plus-coming-soon') {
        setView('foundation-plus-coming-soon');
      } else if (hash === '#pricing') {
        setView('pricing');
      } else if (hash === '#faq') {
        setView('faq');
      } else {
        setView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigate = (newView: 'landing' | 'wizard' | 'how-it-works' | 'foundation-plus-addons' | 'what-you-get' | 'foundation-plus-coming-soon' | 'pricing' | 'faq') => {
    setView(newView);
    if (newView === 'landing') window.location.hash = '';
    if (newView === 'wizard') window.location.hash = 'wizard';
    if (newView === 'how-it-works') window.location.hash = 'how-it-works';
    if (newView === 'foundation-plus-addons') window.location.hash = 'foundation-plus-addons';
    if (newView === 'what-you-get') window.location.hash = 'what-you-get';
    if (newView === 'foundation-plus-coming-soon') window.location.hash = 'foundation-plus-coming-soon';
    if (newView === 'pricing') window.location.hash = 'pricing';
    if (newView === 'faq') window.location.hash = 'faq';
  };

  if (view === 'wizard') {
    return (
      <TrialPlusWizard 
        onBack={() => navigate('landing')} 
        onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
      />
    );
  }

  if (view === 'how-it-works') {
    return (
      <HowItWorks 
        onBack={() => navigate('landing')} 
        onStartAudit={() => navigate('wizard')} 
        onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
        onNavigateToFAQ={() => navigate('faq')}
      />
    );
  }

  if (view === 'foundation-plus-addons') {
    return (
      <FoundationPlusAddons 
        onBack={() => navigate('landing')} 
        onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
        onNavigateToHowItWorks={() => navigate('how-it-works')}
      />
    );
  }

  if (view === 'what-you-get') {
    return (
      <WhatYouGet 
        onBack={() => navigate('landing')}
        onNavigateToWizard={() => navigate('wizard')}
        onNavigateToFoundation={() => navigate('foundation-plus-addons')}
        onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
      />
    );
  }

  if (view === 'foundation-plus-coming-soon') {
    return (
      <FoundationPlusComingSoon 
        onBack={() => navigate('landing')}
        onNavigateToTrial={() => navigate('wizard')}
      />
    );
  }

  if (view === 'pricing') {
    return (
      <PricingPage 
        onBack={() => navigate('landing')}
        onNavigateToTrial={() => navigate('wizard')}
        onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
        onNavigateToFAQ={() => navigate('faq')}
      />
    );
  }

  if (view === 'faq') {
    return (
      <FAQPage 
        onBack={() => navigate('landing')}
        onNavigateToTrial={() => navigate('wizard')}
      />
    );
  }

  return (
    <LandingPage 
      onStartAudit={() => navigate('wizard')} 
      onNavigateToHowItWorks={() => navigate('how-it-works')}
      onNavigateToWhatYouGet={() => navigate('what-you-get')}
      onNavigateToFoundationPlus={() => navigate('foundation-plus-coming-soon')}
      onNavigateToPricing={() => navigate('pricing')}
      onNavigateToFAQ={() => navigate('faq')}
    />
  );
}

export default App;
