
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Check, Sparkles, AlertCircle, Clock, 
  ChevronRight, Copy, Download, ExternalLink, Award, MailCheck, Star,
  HeartHandshake, X
} from 'lucide-react';

interface WizardProps {
  onBack: () => void;
  onNavigateToFoundationPlus: () => void;
}

// --- Icons & Helpers ---

const ProgressBar = ({ currentStep, totalSteps, steps }) => (
  <div className="w-full bg-slate-900/50 border-b border-white/5 backdrop-blur-sm sticky top-0 z-40">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
           Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-xs text-slate-500 hidden sm:inline-block">
          Total ~18 minutes • Save-as-you-go
        </span>
      </div>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex justify-between mt-2 overflow-x-auto pb-1 no-scrollbar gap-2">
        {steps.map((step, idx) => (
            <div key={idx} className={`flex-shrink-0 text-[10px] font-medium uppercase tracking-wide transition-colors ${idx <= currentStep ? 'text-slate-300' : 'text-slate-700'}`}>
                {step.label}
            </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Form Components ---

const InputField = ({ label = null, type = "text", value, onChange, placeholder = "", error = null, required = false, ...props }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-brand-rose">*</span>}
      </label>
    )}
    <input
      type={type}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full bg-slate-900/80 border ${error ? 'border-brand-rose' : 'border-slate-700'} rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all`}
      {...props}
    />
    {error && <p className="text-xs text-brand-rose flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
  </div>
);

const TextAreaField = ({ label = null, value, onChange, placeholder = "", rows = 4, error = null, required = false, hint = null }) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-brand-rose">*</span>}
      </label>
    )}
    <textarea
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`w-full bg-slate-900/80 border ${error ? 'border-brand-rose' : 'border-slate-700'} rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all`}
    />
    {hint && <p className="text-xs text-slate-500">{hint}</p>}
    {error && <p className="text-xs text-brand-rose flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
  </div>
);

const SelectField = ({ label, value, onChange, options, error = null, required = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-slate-300">
      {label} {required && <span className="text-brand-rose">*</span>}
    </label>
    <div className="relative">
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        className={`w-full bg-slate-900/80 border ${error ? 'border-brand-rose' : 'border-slate-700'} rounded-lg px-4 py-3 text-slate-100 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all`}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
        <ChevronRight className="rotate-90 w-4 h-4" />
      </div>
    </div>
    {error && <p className="text-xs text-brand-rose flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
  </div>
);

const RadioCards = ({ label, value, onChange, options, error = null, required = false }) => (
  <div className="space-y-3">
    <label className="block text-sm font-medium text-slate-300">
      {label} {required && <span className="text-brand-rose">*</span>}
    </label>
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((opt) => (
        <div 
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`cursor-pointer p-4 rounded-xl border transition-all ${value === opt.value ? 'bg-brand-cyan/10 border-brand-cyan' : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'}`}
        >
          <div className="flex items-center gap-2 mb-1">
             <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${value === opt.value ? 'border-brand-cyan' : 'border-slate-500'}`}>
                {value === opt.value && <div className="w-2 h-2 bg-brand-cyan rounded-full" />}
             </div>
             <span className={`font-medium ${value === opt.value ? 'text-brand-cyan' : 'text-slate-200'}`}>{opt.label}</span>
          </div>
          {opt.description && <p className="text-xs text-slate-500 ml-6">{opt.description}</p>}
        </div>
      ))}
    </div>
    {error && <p className="text-xs text-brand-rose flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
  </div>
);

const CheckboxGroup = ({ label, values = [], onChange, options, limit = null, error = null, required = false }) => {
  const toggle = (opt) => {
    if (values.includes(opt)) {
      onChange(values.filter(v => v !== opt));
    } else {
      if (limit && values.length >= limit) return;
      onChange([...values, opt]);
    }
  };

  return (
    <div className="space-y-3">
       <div className="flex justify-between">
        <label className="block text-sm font-medium text-slate-300">
          {label} {required && <span className="text-brand-rose">*</span>}
        </label>
        {limit && <span className="text-xs text-slate-500">{values.length}/{limit} selected</span>}
       </div>
       <div className="grid sm:grid-cols-2 gap-2">
         {options.map((opt) => {
           const isSelected = values.includes(opt);
           return (
             <div 
               key={opt}
               onClick={() => toggle(opt)}
               className={`cursor-pointer px-3 py-2 rounded-lg border flex items-center gap-3 transition-all ${isSelected ? 'bg-brand-cyan/10 border-brand-cyan' : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'}`}
             >
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-brand-cyan border-brand-cyan' : 'border-slate-600'}`}>
                  {isSelected && <Check size={12} className="text-slate-950" />}
                </div>
                <span className={`text-sm ${isSelected ? 'text-white' : 'text-slate-400'}`}>{opt}</span>
             </div>
           );
         })}
       </div>
       {error && <p className="text-xs text-brand-rose flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
    </div>
  );
};

const EducationBox = ({ content }) => (
  <div className="mt-6 bg-slate-950/50 border border-slate-800 rounded-lg p-4">
    <div className="flex items-start gap-3">
       <div className="p-1 bg-brand-cyan/10 rounded">
         <Sparkles size={14} className="text-brand-cyan" />
       </div>
       <div className="text-sm space-y-2">
          <p className="font-medium text-slate-300">Why this matters</p>
          <p className="text-slate-400 leading-relaxed">{content.why_this_matters}</p>
          {content.examples && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-800/50">
               {content.examples.good && (
                 <div>
                   <span className="text-[10px] uppercase font-bold text-brand-emerald tracking-wide">✓ Good Example</span>
                   <p className="text-xs text-slate-400 mt-1 italic">"{content.examples.good}"</p>
                 </div>
               )}
               {content.examples.bad && (
                 <div>
                   <span className="text-[10px] uppercase font-bold text-brand-rose tracking-wide">✗ Bad Example</span>
                   <p className="text-xs text-slate-400 mt-1 italic">"{content.examples.bad}"</p>
                 </div>
               )}
               {content.examples.good_snippet && (
                 <div className="col-span-2">
                   <span className="text-[10px] uppercase font-bold text-brand-emerald tracking-wide">✓ Example</span>
                   <p className="text-xs text-slate-400 mt-1 italic">"{content.examples.good_snippet}"</p>
                 </div>
               )}
            </div>
          )}
       </div>
    </div>
  </div>
);

// --- Wizard Data & Steps ---

const STEPS_CONFIG = [
  { id: 'registration', label: 'Registration' },
  { id: 'module_1', label: 'Business Foundation' },
  { id: 'module_2', label: 'Customer Intelligence' },
  { id: 'module_3', label: 'Market Position' },
  { id: 'module_4', label: 'Marketing Reality' },
  { id: 'module_5', label: 'Brand & Constraints' },
  { id: 'review', label: 'Review & Generate' }
];

export default function TrialPlusWizard({ onBack, onNavigateToFoundationPlus }: WizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<any>({ marketing_channels: [] });
  const [errors, setErrors] = useState<any>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [view, setView] = useState<'wizard' | 'result'>('wizard');
  
  // Support Modal State
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportAmount, setSupportAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validateStep = (index) => {
    const newErrors: any = {};
    let isValid = true;
    
    // Helper validation rules based on step index
    // Simplified validation logic for demo purposes
    const require = (field, msg = "This field is required") => {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        newErrors[field] = msg;
        isValid = false;
      }
    };

    if (index === 0) {
      require('name');
      require('email');
      require('business_name');
      require('industry');
    }
    if (index === 1) {
      require('business_description');
      require('business_model');
      require('how_long_in_business');
      require('current_monthly_revenue');
      require('monthly_marketing_budget');
    }
    // Add other step validations as needed...
    
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(stepIndex)) {
      window.scrollTo(0, 0);
      setStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      onBack();
    } else {
      setStepIndex(prev => prev - 1);
    }
  };

  const generatePromptString = () => {
    const d = formData;
    return `You are a senior marketing strategist tailored for the ${d.industry || 'general'} industry.

HERE IS THE COMPLETE STRATEGIC CONTEXT FOR ${d.business_name?.toUpperCase()}:

1. BUSINESS FOUNDATION
- Model: ${d.business_model}
- Description: ${d.business_description}
- Stage: ${d.how_long_in_business}
- Current Traction: ${d.current_monthly_revenue}
- 90-Day Goal: ${d.primary_90d_revenue_goal}

2. CUSTOMER INTELLIGENCE
- Primary Profile: ${d.customer_profile}
- Demographics: ${d.age_range}, ${d.gender_skew}, ${d.income_spending_power?.join(', ')}
- Core Job-to-be-Done: ${d.core_job_to_be_done}
- Buying Behavior: ${d.purchase_behavior?.join(', ')}
- Key Channels: ${d.customer_channels?.join(', ')}

3. MARKET POSITION
- Competitive Position: ${d.competitive_position}
- Differentiation: ${d.differentiation}
- Competitors: ${d.competitors ? d.competitors.map(c => `${c.name} (${c.strengths})`).join('; ') : 'N/A'}

4. MARKETING REALITY
- Active Channels: ${d.marketing_channels?.join(', ')}
- What Worked: ${d.what_worked || 'N/A'}
- What Didn't Work: ${d.what_didnt_work || 'N/A'}

5. CONSTRAINTS & BRAND
- Budget: ${d.monthly_marketing_budget}
- Time Available: ${d.weekly_time_for_marketing}
- Top Obstacles: ${d.top_obstacles?.join(', ')}
- Content Capabilities: ${d.can_today?.join(', ')}
- Brand Personality: ${d.brand_personality?.join(', ')}
- Platform Instinct: ${d.platform_instinct}

TASK:
Acting as a world-class CMO, generate a comprehensive 90-day marketing strategy. 
- Prioritize specifically for my stage: ${d.how_long_in_business}.
- Respect my budget: ${d.monthly_marketing_budget}.
- Focus on my primary goal: ${d.primary_90d_revenue_goal}.

Your response must include:
1. Executive Summary
2. Strategic Priorities (The "Big 3" focus areas)
3. Primary Channel Strategy (Deep dive on one main channel)
4. Content Pillars & Themes
5. 30-Day Execution Plan (Week-by-week)
6. 20 Specific Content Ideas
7. Measurement Framework
8. Budget Allocation Recommendation
9. How to overcome my specific obstacle: ${d.top_obstacles?.[0]}
10. 90-Day Outlook`;
  };

  const handleGenerate = async () => {
    setIsProcessing(true);
    // Simulate API/Processing delay
    await new Promise(r => setTimeout(r, 4500));
    setGeneratedPrompt(generatePromptString());
    setIsProcessing(false);
    setView('result');
    window.scrollTo(0,0);
  };

  const handlePayment = () => {
      const finalAmount = customAmount ? parseInt(customAmount) : supportAmount;
      if (finalAmount) {
         window.open(`https://example.com/pay?amount=${finalAmount}`, '_blank');
      }
      setShowSupportModal(false);
  }

  // --- Render Steps ---

  const renderStepContent = () => {
    switch(stepIndex) {
      case 0: return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-display">Start your strategic audit</h2>
            <p className="text-slate-400">Tell us who you are so we can personalize your prompt.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <InputField label="Your Name" required value={formData.name} onChange={v => updateField('name', v)} error={errors.name} />
                <InputField label="Work Email" required type="email" value={formData.email} onChange={v => updateField('email', v)} error={errors.email} />
                <InputField label="Business Name" required value={formData.business_name} onChange={v => updateField('business_name', v)} error={errors.business_name} />
                <SelectField label="Industry" required options={["E-commerce (D2C)", "Professional Services (B2B)", "Professional Services (B2C)", "Food & Beverage", "Health & Wellness", "Technology/SaaS", "Real Estate", "Other"]} value={formData.industry} onChange={v => updateField('industry', v)} error={errors.industry} />
             </div>
             <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 h-fit">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Award size={18} className="text-brand-cyan"/> What you'll get</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2"><Check size={16} className="text-brand-emerald shrink-0 mt-0.5"/> A 600–700 word expert-level AI prompt tailored to your business.</li>
                  <li className="flex gap-2"><Check size={16} className="text-brand-emerald shrink-0 mt-0.5"/> Ready to paste into ChatGPT, Claude, or Gemini.</li>
                  <li className="flex gap-2"><Check size={16} className="text-brand-emerald shrink-0 mt-0.5"/> 100% Free forever.</li>
                </ul>
             </div>
          </div>
        </div>
      );
      case 1: return (
        <div className="space-y-8 max-w-2xl mx-auto">
           <div>
              <h2 className="text-2xl font-bold font-display mb-1">Module 1: Business Foundation</h2>
              <p className="text-slate-400 text-sm">Clarify what you do, your model, stage, and real resources.</p>
           </div>
           
           <div>
             <TextAreaField label="What does your business do? (One clear sentence)" required value={formData.business_description} onChange={v => updateField('business_description', v)} error={errors.business_description} placeholder="We help [WHO] achieve [WHAT] through [HOW]." />
             <EducationBox content={{
               why_this_matters: "This becomes your one-sentence positioning. It should instantly communicate who you serve and the outcome.",
               examples: { good: "We provide on-demand laundry pickup for busy professionals in Jakarta specializing in delicate garments.", bad: "We provide laundry services." }
             }} />
           </div>

           <RadioCards label="What business model best describes you?" required value={formData.business_model} onChange={v => updateField('business_model', v)} error={errors.business_model} options={[
             { value: "ecom_d2c", label: "E-commerce (D2C)", description: "Own site, higher margins" },
             { value: "ecom_marketplace", label: "Marketplace", description: "Shopee/Tokopedia" },
             { value: "prof_services_b2b", label: "Services (B2B)", description: "High ticket, relationship based" },
             { value: "local_services_b2c", label: "Local Services", description: "Location based, referral driven" },
             { value: "saas", label: "SaaS / Digital", description: "Subscription / scalable" },
           ]} />

           <div className="grid md:grid-cols-2 gap-4">
             <SelectField label="How long in business?" required value={formData.how_long_in_business} onChange={v => updateField('how_long_in_business', v)} error={errors.how_long_in_business} options={["Pre-launch", "0-3 months", "3-12 months", "1-2 years", "2-5 years", "5+ years"]} />
             <SelectField label="Current monthly revenue" required value={formData.current_monthly_revenue} onChange={v => updateField('current_monthly_revenue', v)} error={errors.current_monthly_revenue} options={["Pre-revenue", "0-10M IDR", "10-50M IDR", "50-150M IDR", "150M+ IDR"]} />
           </div>

           <SelectField label="Primary revenue goal (Next 90 Days)" required value={formData.primary_90d_revenue_goal} onChange={v => updateField('primary_90d_revenue_goal', v)} options={["Prove concept", "Achieve profitability", "Grow 2-3x", "Launch new product", "Scale rapidly"]} />
           
           <div className="grid md:grid-cols-2 gap-4">
              <SelectField label="Monthly Marketing Budget" required value={formData.monthly_marketing_budget} onChange={v => updateField('monthly_marketing_budget', v)} error={errors.monthly_marketing_budget} options={["No budget", "500k-2M IDR", "2M-5M IDR", "5M-15M IDR", "15M+ IDR"]} />
              <SelectField label="Weekly Time Available" required value={formData.weekly_time_for_marketing} onChange={v => updateField('weekly_time_for_marketing', v)} options={["1-3 hours", "3-5 hours", "5-10 hours", "10+ hours"]} />
           </div>
        </div>
      );
      case 2: return (
        <div className="space-y-8 max-w-2xl mx-auto">
           <div>
              <h2 className="text-2xl font-bold font-display mb-1">Module 2: Customer Intelligence</h2>
              <p className="text-slate-400 text-sm">Go deep on who you serve and what they actually hire you for.</p>
           </div>
           
           <div>
              <TextAreaField label="Describe your PRIMARY target customer (3-4 sentences)" required rows={6} value={formData.customer_profile} onChange={v => updateField('customer_profile', v)} placeholder="Be specific about demographics, psychographics, and lifestyle." />
              <EducationBox content={{
                 why_this_matters: "Specific customer = specific strategy. Generic customer = generic strategy.",
                 examples: { good_snippet: "Female professionals, 28-40, working in corporate Jakarta, value convenience over price..." }
              }} />
           </div>

           <div className="grid md:grid-cols-3 gap-4">
             <SelectField label="Age Range" value={formData.age_range} onChange={v => updateField('age_range', v)} options={["18-24", "25-34", "35-44", "45-54", "55+"]} />
             <SelectField label="Gender Skew" value={formData.gender_skew} onChange={v => updateField('gender_skew', v)} options={["Primarily Female", "Primarily Male", "Mixed"]} />
             <SelectField label="Spending Power" value={formData.income_spending_power} onChange={v => updateField('income_spending_power', [v])} options={["Budget", "Middle", "Affluent"]} />
           </div>

           <TextAreaField label="What is the CORE PROBLEM or 'job' they are hiring you for?" required value={formData.core_job_to_be_done} onChange={v => updateField('core_job_to_be_done', v)} />

           <CheckboxGroup label="Where do they spend time online? (Max 3)" limit={3} values={formData.customer_channels} onChange={v => updateField('customer_channels', v)} options={["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "Google Search", "WhatsApp"]} />
           
           <CheckboxGroup label="How do they typically find solutions?" values={formData.purchase_behavior} onChange={v => updateField('purchase_behavior', v)} options={["Google Search", "Social Discovery", "Friend Referral", "Influencers", "Impulse"]} />
        </div>
      );
      case 3: return (
        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold font-display mb-1">Module 3: Market Position</h2>
            <p className="text-slate-400 text-sm">Map your competitors and differentiation.</p>
          </div>

          <div className="space-y-4 bg-slate-900/30 p-4 rounded-xl border border-slate-800">
             <label className="block text-sm font-medium text-slate-300">Top Competitor</label>
             <InputField placeholder="Name" value={formData.competitors?.[0]?.name} onChange={v => {
                const newComps = [...(formData.competitors || [])];
                if(!newComps[0]) newComps[0] = {};
                newComps[0].name = v;
                updateField('competitors', newComps);
             }} />
             <TextAreaField placeholder="What makes them strong?" rows={2} value={formData.competitors?.[0]?.strengths} onChange={v => {
                const newComps = [...(formData.competitors || [])];
                if(!newComps[0]) newComps[0] = {};
                newComps[0].strengths = v;
                updateField('competitors', newComps);
             }} />
          </div>

          <div>
            <TextAreaField label="What makes YOU different? (Be specific)" required rows={4} value={formData.differentiation} onChange={v => updateField('differentiation', v)} />
            <EducationBox content={{ why_this_matters: "Differentiation is strategy. Generic claims like 'quality' are table stakes." }} />
          </div>

          <RadioCards label="Current Competitive Position" options={[{value:"Leader", label:"Market Leader"}, {value:"Challenger", label:"Strong Challenger"}, {value:"New", label:"New Entrant"}, {value:"Niche", label:"Niche Player"}]} value={formData.competitive_position} onChange={v => updateField('competitive_position', v)} />
        </div>
      );
      case 4: return (
        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold font-display mb-1">Module 4: Marketing Reality</h2>
            <p className="text-slate-400 text-sm">What have you tried so far?</p>
          </div>
          
          <CheckboxGroup label="Which channels have you been active on?" values={formData.marketing_channels} onChange={v => updateField('marketing_channels', v)} options={["Instagram", "Facebook", "TikTok", "LinkedIn", "Paid Ads", "Email", "SEO/Content", "Offline", "Nothing yet"]} />
          
          <TextAreaField label="What has worked well?" value={formData.what_worked} onChange={v => updateField('what_worked', v)} placeholder="e.g. Influencer posts drove 30% of sales..." />
          <TextAreaField label="What has NOT worked?" value={formData.what_didnt_work} onChange={v => updateField('what_didnt_work', v)} placeholder="e.g. Facebook ads cost too much..." />
        </div>
      );
      case 5: return (
        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold font-display mb-1">Module 5: Brand & Constraints</h2>
            <p className="text-slate-400 text-sm">Final check on your capabilities.</p>
          </div>

          <CheckboxGroup label="Top 3 Biggest Obstacles" limit={3} values={formData.top_obstacles} onChange={v => updateField('top_obstacles', v)} options={["Don't know what to create", "No strategy", "Inconsistent", "No time", "No budget", "Tech overwhelm", "Low engagement"]} />
          
          <CheckboxGroup label="What content CAN you create TODAY?" values={formData.can_today} onChange={v => updateField('can_today', v)} options={["Text posts", "Smartphone photos", "Simple Canva", "Talking videos", "Carousels"]} />

          <CheckboxGroup label="Brand Personality (Pick 2)" limit={2} values={formData.brand_personality} onChange={v => updateField('brand_personality', v)} options={["Professional", "Friendly", "Fun", "Premium", "Bold", "Educational"]} />
          
          <SelectField label="Platform Instinct (Pick 1)" value={formData.platform_instinct} onChange={v => updateField('platform_instinct', v)} options={["Instagram", "LinkedIn", "TikTok", "YouTube", "Let AI Decide"]} />
        </div>
      );
      case 6: return (
        <div className="max-w-2xl mx-auto">
           <div className="text-center mb-10">
              <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Sparkles className="text-brand-cyan" size={32} />
              </div>
              <h2 className="text-3xl font-bold font-display">Review & Generate</h2>
              <p className="text-slate-400">Ready to compile your expert prompt.</p>
           </div>

           <div className="bg-slate-900/50 border border-slate-800 rounded-xl divide-y divide-slate-800 mb-8">
              {STEPS_CONFIG.slice(1, 6).map((step, i) => (
                <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-900 transition-colors">
                   <div className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-slate-800 text-xs flex items-center justify-center text-slate-500 font-mono">{i + 1}</div>
                     <span className="font-medium text-slate-300">{step.label}</span>
                   </div>
                   <button onClick={() => setStepIndex(i + 1)} className="text-xs text-brand-cyan hover:underline">Edit</button>
                </div>
              ))}
           </div>

           <label className="flex gap-4 items-start p-4 bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl cursor-pointer">
              <input type="checkbox" className="mt-1 accent-brand-cyan w-5 h-5" />
              <div className="text-sm">
                 <p className="font-bold text-slate-200">I confirm this information is accurate.</p>
                 <p className="text-slate-500">I understand that generic inputs lead to generic outputs.</p>
              </div>
           </label>

           <button 
             onClick={handleGenerate}
             className="w-full mt-8 bg-gradient-to-r from-brand-cyan to-brand-blue hover:shadow-lg hover:shadow-brand-cyan/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01]"
           >
             <Sparkles size={20} /> Generate Expert Prompt
           </button>
        </div>
      );
      default: return null;
    }
  };

  if (view === 'result') {
     return (
       <div className="min-h-screen bg-brand-bg pt-24 pb-16 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <button onClick={() => setView('wizard')} className="mb-6 text-slate-500 hover:text-slate-300 flex items-center gap-2 text-sm"><ArrowLeft size={16}/> Back to edit</button>
            
            <div className="grid lg:grid-cols-12 gap-8">
               {/* Left Column: The Prompt */}
               <div className="lg:col-span-7 space-y-6">
                  <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                     <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-brand-cyan animate-pulse"></div>
                           <span className="text-xs font-mono font-bold text-slate-400">GENERATED_PROMPT.md</span>
                        </div>
                        <button 
                          onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                          className="text-xs flex items-center gap-1 text-brand-cyan hover:text-white transition-colors"
                        >
                          <Copy size={12}/> Copy
                        </button>
                     </div>
                     <pre className="p-6 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto custom-scrollbar">
                        {generatedPrompt}
                     </pre>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      <Copy size={18}/> Copy to Clipboard
                    </button>
                    <a 
                      href="https://chat.openai.com" target="_blank" rel="noreferrer"
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                       Open ChatGPT <ExternalLink size={16}/>
                    </a>
                  </div>
               </div>

               {/* Right Column: Instructions */}
               <div className="lg:col-span-5 space-y-6">
                  
                  {/* Completion Action */}
                  <div className="bg-brand-surface border border-brand-cyan/30 rounded-xl p-6 shadow-lg shadow-brand-cyan/5">
                      <h3 className="font-bold text-lg mb-2 text-white flex items-center gap-2">
                          <Check className="text-brand-cyan" size={20}/> You're almost done
                      </h3>
                      <p className="text-sm text-slate-400 mb-6">
                          Once you have copied the prompt and saved it, let us know to complete the audit cycle.
                      </p>
                      <button 
                        onClick={() => setShowSupportModal(true)}
                        className="w-full bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-cyan/20"
                      >
                         I've copied my prompt <ArrowRight size={18} />
                      </button>
                  </div>

                  <div className="bg-brand-surface border border-white/10 rounded-xl p-6">
                     <h3 className="font-bold text-lg mb-4 text-white">How to use this</h3>
                     <ol className="space-y-4">
                        <li className="flex gap-3">
                           <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-brand-cyan font-bold text-xs shrink-0">1</div>
                           <p className="text-sm text-slate-300">Copy the prompt on the left.</p>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-brand-cyan font-bold text-xs shrink-0">2</div>
                           <p className="text-sm text-slate-300">Paste into ChatGPT (GPT-4 recommended) or Claude 3.5.</p>
                        </li>
                        <li className="flex gap-3">
                           <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-brand-cyan font-bold text-xs shrink-0">3</div>
                           <p className="text-sm text-slate-300">Get a 90-day strategy tailored to your exact constraints.</p>
                        </li>
                     </ol>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-brand-blue/30 rounded-xl p-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 opacity-10">
                        <Award size={100} />
                     </div>
                     <h3 className="font-bold text-white mb-2 relative z-10">Want us to execute this?</h3>
                     <p className="text-sm text-slate-400 mb-4 relative z-10">Upgrade to Foundation+ for done-with-you strategy, weekly plans, and support.</p>
                     <button 
                       onClick={onNavigateToFoundationPlus}
                       className="w-full py-2 bg-brand-blue/10 border border-brand-blue/50 text-brand-blue rounded-lg text-sm font-bold hover:bg-brand-blue hover:text-white transition-colors relative z-10"
                     >
                        View Foundation+ Plans
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Support / PWYW Modal */}
         <AnimatePresence>
            {showSupportModal && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none"></div>

                        <div className="p-8 relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-brand-cyan tracking-widest uppercase mb-2 block">OPTIONAL • PAY WHAT YOU WISH</span>
                                    <h3 className="text-2xl font-display font-bold text-white leading-tight">Help us build the rest?</h3>
                                </div>
                                <button onClick={() => setShowSupportModal(false)} className="text-slate-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Trial+ is intentionally free so founders can start thinking clearly without friction. 
                                If this audit saved you time or money, you can make a one-time contribution to support the development of Marka+ tools.
                            </p>

                            <div className="bg-slate-950/50 border border-brand-cyan/20 rounded-xl p-4 mb-8 flex gap-4 items-start">
                                <div className="p-2 bg-brand-cyan/10 rounded-lg shrink-0">
                                    <HeartHandshake size={20} className="text-brand-cyan" />
                                </div>
                                <p className="text-xs text-slate-400">
                                    Contributions go directly into building better audits, weekly blueprints, and tools that make founder marketing less painful.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[25000, 50000, 100000].map((amt) => (
                                    <button
                                        key={amt}
                                        onClick={() => { setSupportAmount(amt); setCustomAmount(""); }}
                                        className={`py-3 px-2 rounded-xl border text-sm font-bold transition-all ${
                                            supportAmount === amt 
                                            ? 'bg-brand-cyan text-slate-950 border-brand-cyan' 
                                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                                        }`}
                                    >
                                        Rp {amt / 1000}k
                                    </button>
                                ))}
                            </div>

                            <div className="mb-8">
                                <label className="text-xs text-slate-500 mb-2 block font-medium">Or enter custom amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">Rp</span>
                                    <input 
                                        type="number" 
                                        value={customAmount}
                                        onChange={(e) => { setCustomAmount(e.target.value); setSupportAmount(null); }}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button 
                                    onClick={handlePayment}
                                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue hover:shadow-lg hover:shadow-brand-cyan/20 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                                >
                                    Continue to contribution <ArrowRight size={16} />
                                </button>
                                <button 
                                    onClick={() => setShowSupportModal(false)}
                                    className="w-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-medium py-3 rounded-xl transition-colors text-sm"
                                >
                                    Maybe later — take me back to my prompt
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
         </AnimatePresence>
       </div>
     );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-slate-50 flex flex-col">
       <ProgressBar currentStep={stepIndex} totalSteps={STEPS_CONFIG.length} steps={STEPS_CONFIG} />
       
       <div className="flex-1 container mx-auto px-4 py-8 pb-32">
          <AnimatePresence mode="wait">
             <motion.div 
               key={stepIndex}
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -10 }}
               transition={{ duration: 0.3 }}
             >
               {renderStepContent()}
             </motion.div>
          </AnimatePresence>
       </div>

       {/* Sticky Footer Navigation */}
       <div className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 p-4 z-50">
          <div className="container mx-auto flex justify-between items-center max-w-4xl">
             <button 
               onClick={handleBack}
               className="flex items-center gap-2 text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors font-medium text-sm"
             >
               <ArrowLeft size={16} /> Back
             </button>
             
             {stepIndex < STEPS_CONFIG.length - 1 && (
               <button 
                 onClick={handleNext}
                 className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-brand-cyan hover:text-white transition-colors flex items-center gap-2 shadow-lg shadow-brand-cyan/10"
               >
                 Next Step <ArrowRight size={16} />
               </button>
             )}
          </div>
       </div>

       {/* Processing Overlay */}
       <AnimatePresence>
         {isProcessing && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-lg flex flex-col items-center justify-center p-4"
           >
              <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-8 relative">
                 <div className="absolute inset-0 border-t-2 border-brand-cyan rounded-full animate-spin"></div>
                 <Sparkles className="text-brand-cyan animate-pulse" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Compiling your expert prompt...</h3>
              <div className="text-slate-400 font-mono text-sm h-6 overflow-hidden relative">
                 <motion.div 
                   animate={{ y: [0, -24, -48, -72, -96] }} 
                   transition={{ duration: 4, times: [0, 0.25, 0.5, 0.75, 1] }}
                   className="flex flex-col items-center"
                 >
                    <span>Analyzing business model...</span>
                    <span>Mapping competitive landscape...</span>
                    <span>Synthesizing constraints...</span>
                    <span>Structuring strategic framework...</span>
                    <span>Finalizing prompt...</span>
                 </motion.div>
              </div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}
