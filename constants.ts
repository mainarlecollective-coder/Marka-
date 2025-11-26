
import { 
  MessageSquareOff, 
  TrendingDown, 
  CircleSlash, 
  BookOpen, 
  Brain, 
  Cpu, 
  Sparkles, 
  Clock, 
  Infinity as InfinityIcon, 
  PlayCircle, 
  Target
} from 'lucide-react';

export const NAV_LINKS = [
  { label: "How It Works", targetId: "how-it-works" },
  { label: "What You Get", targetId: "what-you-get" },
  { label: "Pricing", targetId: "pricing" },
  { label: "FAQ", targetId: "faq-page" }
];

export const PROBLEM_CARDS = [
  {
    title: "Zero Strategic Input",
    icon: MessageSquareOff,
    body: "AI doesn’t know your ticket size, buying cycle, constraints, or differentiation. You’re asking for strategy with less information than a junior intern would get.",
    accent: "text-brand-rose"
  },
  {
    title: "Template Wash",
    icon: TrendingDown,
    body: "You keep getting the same boilerplate advice: “post 3x per week”, “use Instagram”, “run ads” — none of it anchored to your specific business reality.",
    accent: "text-brand-rose"
  },
  {
    title: "No Frameworks, No Thinking",
    icon: CircleSlash,
    body: "Without positioning, segmentation, and clear goals, tactics are just noise. AI mirrors the quality and structure of your input.",
    accent: "text-brand-rose"
  }
];

export const SOLUTION_FEATURES = [
  {
    title: "Educational by Design",
    icon: BookOpen,
    body: "Every question includes examples, 'good vs bad' responses, and 'why this matters', so you learn strategy while you answer.",
    accent: "text-brand-cyan"
  },
  {
    title: "Framework-Backed",
    icon: Brain,
    body: "Behind the scenes, Trial+ nudges you through positioning, segmentation, JTBD, and goal-setting — without jargon.",
    accent: "text-brand-emerald"
  },
  {
    title: "Context Extraction Engine",
    icon: Cpu,
    body: "Questions are designed to pull out the exact business details AI needs to produce real strategy, not vague suggestions.",
    accent: "text-brand-cyan"
  },
  {
    title: "Expert Prompt Engineering",
    icon: Sparkles,
    body: "Your answers are compiled into a long-form prompt that sets AI’s role, constrains its scope, and shapes the output.",
    accent: "text-brand-cyan"
  },
  {
    title: "Quality Over Speed",
    icon: Clock,
    body: "It deliberately takes 20–25 minutes. Strategic thinking can’t be rushed — shallow forms give shallow strategy.",
    accent: "text-amber-500"
  },
  {
    title: "Reusable Strategic Asset",
    icon: InfinityIcon,
    body: "Your prompt becomes a strategic asset you can reuse, tweak, and regenerate as your business evolves.",
    accent: "text-brand-emerald"
  }
];

export const TIMELINE_STEPS = [
  {
    stepNumber: 1,
    title: "Start the Free Audit",
    icon: PlayCircle,
    tag: "~20–25 minutes",
    body: "Click 'Start Strategic Audit' and enter a 7-module guided form designed for founders, not marketers."
  },
  {
    stepNumber: 2,
    title: "Answer Guided Strategic Questions",
    icon: BookOpen,
    tag: "Educational",
    body: "Each module comes with context, examples, and explanations so you’re never guessing what to write."
  },
  {
    stepNumber: 3,
    title: "We Compile Your Strategic Prompt",
    icon: Sparkles,
    tag: "Behind the scenes",
    body: "Your responses are turned into a structured, 350–650 word prompt that captures your entire strategic context."
  },
  {
    stepNumber: 4,
    title: "Paste It into Your Favorite AI",
    icon: Cpu,
    tag: "Tool-agnostic",
    body: "Use ChatGPT, Claude, or any LLM. Trial+ doesn’t lock you into a platform; it upgrades how you use AI."
  },
  {
    stepNumber: 5,
    title: "Get a 90-Day Strategic Plan You’ll Actually Use",
    icon: Target,
    tag: "2.5–3.5k words",
    body: "AI now responds with a deeply contextual plan: priorities, channels, messaging, and a phased 90-day roadmap."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The Trial+ audit forced me to think strategically for the first time. Even before using AI, just answering the questions clarified my positioning. The prompt then made ChatGPT feel like a senior strategist, not a quote machine.",
    name: "Sarah T.",
    role: "Wellness Studio Owner",
    badge: "Trial+ → Foundation+"
  },
  {
    quote: "I’ve paid consultants more than Rp 50 juta for decks I never used. This free audit + prompt gave me more actionable strategy than all of that. The explanations and examples alone were worth it.",
    name: "Ahmad R.",
    role: "E-commerce Founder",
    badge: "Trial+ User"
  },
  {
    quote: "I was skeptical about another 'AI marketing thing' but the depth shocked me. The prompt referenced my competitors, my audience, my capacity. Claude’s output was actually usable.",
    name: "Maria S.",
    role: "B2B SaaS Founder",
    badge: "Trial+ User"
  }
];

export const PROMPT_PREVIEW = `You are a senior marketing strategist for [business model].

BUSINESS OVERVIEW:
- Name: [..]
- Model: [..]
- Ticket Size: [..]

GOALS (NEXT 90 DAYS):
1) [..]
2) [..]

CONSTRAINTS & RESOURCES:
- Budget: [..]
- Time: [..]

TASK:
Using only the information above, design a focused 90-day strategy that...`;
