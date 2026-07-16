import type { LucideIcon } from "lucide-react";
import {
  Github,
  Heart,
  Instagram,
  Layers,
  Linkedin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";

// Real AI47Labs brand mark, pulled straight from ai47labs.com's own uploads —
// used anywhere a site normally shows its logo: nav bar, footer, favicon, and
// the social-share (Open Graph) preview image.
export const siteLogo = {
  full: "https://ai47labs.com/wp-content/uploads/2023/03/AI47Labs-logos_black.png",
  square: "https://ai47labs.com/wp-content/uploads/2023/03/AI47Labs-logos_black-300x300.png",
};

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Why us", href: "/#capabilities" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// TODO: swap in the real company social profiles before launch.
export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ai47labs", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/ai47labs", icon: Github },
  { label: "Twitter / X", href: "https://twitter.com/ai47labs", icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@ai47labs", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/ai47labs", icon: Instagram },
];

// A small set of bolder accent colors used to give each card its own
// personality instead of every card looking identical. Cycled through by index.
export const accentPalette = [
  { name: "coral", hex: "#E8604C" },
  { name: "teal", hex: "#2F8F7A" },
  { name: "indigo", hex: "#5B63D3" },
  { name: "gold", hex: "#D9A441" },
  { name: "rose", hex: "#C6577A" },
];

export type Product = {
  name: string;
  tag: string;
  blurb: string;
  href: string;
  image: string;
  logo: string;
};

export const products: Product[] = [
  {
    name: "Persona Pilot",
    tag: "Chrome extension",
    blurb:
      "A LinkedIn extension that drafts posts in your voice, not a generic AI voice. We built it because two of our own founders were spending Sunday nights writing LinkedIn posts.",
    href: "https://chromewebstore.google.com/detail/gejfidhjodmcgjhgiadodoebbjbbefhl",
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=800&auto=format&fit=crop",
    logo: "https://ai47labs.com/wp-content/uploads/2025/04/full_logo-1-1-1.png",
  },
  {
    name: "Yoda LMS",
    tag: "Learning platform",
    blurb:
      "Course creation, enrolment, deadlines and grading in one place. Started as an internal tool for a training partner, now runs cohorts for a few hundred learners at a time.",
    href: "https://appdev.yodalms.com/",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    logo: "https://ai47labs.com/wp-content/uploads/2025/04/image-4-1.png",
  },
  {
    name: "AI Tutor",
    tag: "EdTech",
    blurb:
      "Adaptive practice sets for JEE aspirants — the app watches where a student keeps slipping and quietly weights the next quiz toward that gap instead of drilling everything evenly.",
    href: "https://tutor.aipersonaz.com/",
    image:
      "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=800&auto=format&fit=crop",
    logo: "https://ai47labs.com/wp-content/uploads/2025/04/image-2-2.png",
  },
  {
    name: "Edu Assist",
    tag: "Learning platform",
    blurb:
      "Lesson plans, test papers and class notes for teachers who'd rather spend Sunday afternoon on anything else. Built with a lot of feedback from actual tutors, not just a product spec.",
    href: "https://eduassist-website.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    logo: "https://ai47labs.com/wp-content/uploads/2025/04/eduassist-logo-1.png",
  },
  {
    name: "UPSC Evaluator",
    tag: "Assessment",
    blurb:
      "Essay scoring mapped against the real UPSC rubric, with margin notes instead of just a number — the part students told us actually helped them improve.",
    href: "https://fe-essay.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    logo: "https://ai47labs.com/wp-content/uploads/2025/04/bg-removed-whitenew-logo-design-1.png",
  },
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  area: string;
};

export const capabilities: Capability[] = [
  {
    title: "Mobile apps that feel native",
    description:
      "We spend real time on startup speed and smooth animations, not just feature checklists — an app should feel good in the hand, not just work.",
    icon: Smartphone,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    title: "Built to be maintained, not just shipped",
    description:
      "Clear, well-organised systems under the hood, so the product is easy to extend a year from now, not just easy to demo today.",
    icon: Layers,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    title: "Web that shows up in search",
    description:
      "Fast-loading, SEO-friendly sites for the parts of a product that need to rank, and rich, app-like experiences for the parts that need to feel alive.",
    icon: Rocket,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    title: "Reliable, end to end",
    description:
      "Careful, type-checked code from the app down to the database layer — fewer surprises at 11pm before a release.",
    icon: ShieldCheck,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    title: "Genuinely shipped",
    description:
      "Every product on this page is live and being used right now, not sitting in a portfolio. We measure ourselves on what's actually in people's hands.",
    icon: Sparkles,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];

export const stats = [
  { value: "10,000+", label: "people using something we built" },
  { value: "5", label: "products live in production" },
  { value: "2", label: "offices, both in the NCR" },
  { value: "< 1 day", label: "usual first reply time" },
];

export const faqs = [
  {
    q: "What does AI47 Labs actually build?",
    a: "Mostly two things: our own product line (Persona Pilot, Yoda LMS, AI Tutor, Edu Assist, UPSC Evaluator) and full-stack builds for clients — mobile apps, web platforms and the backends behind them.",
  },
  {
    q: "How does a new build usually start?",
    a: "A short scoping call, then a discovery sprint where we nail down the data model and the riskiest screen first, before committing to a full timeline. We'd rather find the hard part in week one than week six.",
  },
  {
    q: "Can an existing product be reskinned or white-labelled?",
    a: "Yes — Yoda LMS and Edu Assist were both built to be themeable, and we've handed both off to partners with their own branding on top.",
  },
  {
    q: "Do you work with early-stage startups or only bigger teams?",
    a: "Both. The same foundations scale down to a single-founder MVP just as well as they scale up to a multi-team rollout.",
  },
  {
    q: "Is there a trial before a full engagement?",
    a: "Most projects start with a paid discovery sprint (usually one to two weeks) so both sides can check the fit before signing up for the whole build.",
  },
  {
    q: "How do I get in touch?",
    a: "The form below reaches a real person, usually within a day. Or email us directly if you'd rather skip the form.",
  },
];

export const offices = [
  {
    label: "Ghaziabad office",
    address: "Plot GH03, 16th Avenue, Sector-16C, Ghaziabad, Uttar Pradesh",
  },
  {
    label: "Noida office",
    address: "D-301, Prateek Wisteria, Sector 77, Noida",
  },
];

export const contactEmail = "contact@ai47labs.com";

export const aboutContent = {
  eyebrow: "About us",
  heading: "A small team that would rather ship than talk about shipping.",
  paragraphs: [
    "AI47 Labs started as three people trying to fix problems they kept running into themselves — one of them was writing LinkedIn posts every Sunday night, so we built a tool for that. It grew from there.",
    "We're still small on purpose. Everyone here writes code, talks to users, and sits in on the same calls — nothing gets lost in translation between the people building the product and the people who asked for it.",
    "Two offices, both in the NCR, one team.",
  ],
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  values: [
    { label: "Ship real things", icon: Rocket },
    { label: "Care about the details", icon: Heart },
    { label: "Build to last", icon: ShieldCheck },
  ],
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  date: string;
  url: string;
  readTime: string;
  content: string[];
};


// Real posts from the ai47labs.com blog — cards here link straight out to the
// live article on the main site rather than duplicating the content locally.
export const blogPosts: BlogPost[] = [
  {
    slug: "better-claude-responses-adding-context-to-prompts",
    title: "Better Claude Responses: Adding Context to Prompts",
    excerpt:
      "Discover the secret to better Claude responses: context. Learn how to craft prompts that provide necessary background, ensuring you receive relevant, insightful, and actionable outputs.",
    image:
      "https://ai47labs.com/wp-content/uploads/2025/06/better-claude-responses-adding-context-to-prompts-featured.jpg",
    tag: "AI Prompts",
    date: "25 Jun 2025",
    url: "https://ai47labs.com/blogs/context-better-prompts/",
    readTime: "5 min read",
    content: [
      "The strongest prompt improvements usually come from context, not clever wording. If the model knows who the output is for, what it's meant to do, and what it should avoid, the result gets noticeably more useful.",
      "We found that concrete constraints beat vague instructions every time. A short role, a clear goal, and one or two formatting limits are enough to turn a generic answer into something much closer to production-ready.",
    ],
  },
  {
    slug: "top-ai-tools-elevating-print-media-marketing",
    title: "Top AI Tools: Elevating Print Media Marketing",
    excerpt:
      "Discover the top AI tools every print media marketer should know — design, content creation, and campaign management, to streamline workflows and maximize ROI.",
    image:
      "https://ai47labs.com/wp-content/uploads/2025/06/top-ai-tools-elevating-print-media-marketing-featured.jpg",
    tag: "Marketing",
    date: "24 Jun 2025",
    url: "https://ai47labs.com/blogs/top-ai-print/",
    readTime: "6 min read",
    content: [
      "Print media still benefits from the same AI workflows people use in digital channels: faster concepting, tighter copy variants, and cleaner handoff between creative and production.",
      "The value is less about replacing the design team and more about clearing the repetitive work that slows campaigns down. AI helps the team move from first draft to usable asset much faster.",
    ],
  },
  {
    slug: "crafting-engaging-chatbot-responses-a-prompt-engineering-guide",
    title: "Crafting Engaging Chatbot Responses: A Prompt Engineering Guide",
    excerpt:
      "Transform your chatbot interactions with this comprehensive guide to prompt engineering — craft prompts that elicit engaging, helpful responses.",
    image:
      "https://ai47labs.com/wp-content/uploads/2025/06/crafting-engaging-chatbot-responses-a-prompt-engineering-guide-featured.jpg",
    tag: "AI Prompts",
    date: "16 Jun 2025",
    url: "https://ai47labs.com/blogs/chatbot-responses-guide/",
    readTime: "7 min read",
    content: [
      "Chatbot quality depends on more than the underlying model. The structure of the prompt, the expected tone, and the fallback behavior all shape how trustworthy the bot feels in practice.",
      "A prompt engineering guide should focus on giving the assistant boundaries: what to answer, when to refuse, and how much detail to include. Those guardrails make the conversation feel intentional instead of random.",
    ],
  },
  {
    slug: "leading-ai-tools-for-robotic-process-automation-rpa",
    title: "Leading AI Tools for Robotic Process Automation (RPA)",
    excerpt:
      "Explore the leading AI tools for RPA and learn how businesses can leverage them to unlock new levels of productivity and competitiveness.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/07/concept-of-rpa-robotic-process-automation-stockpack-adobe-stock-edited.jpg",
    tag: "Automation",
    date: "31 Jul 2023",
    url: "https://ai47labs.com/blogs/leading-ai-tools-for-robotic-process-automation-rpa/",
    readTime: "5 min read",
    content: [
      "RPA is strongest when the task is repetitive, rules-based, and easy to verify. AI adds value when it can reduce the amount of manual decision-making before the workflow runs.",
      "The practical win is usually orchestration: use AI to classify, extract, or draft, then let automation handle the boring repeatable steps downstream.",
    ],
  },
  {
    slug: "20-best-prompts-to-learn-digital-marketing-with-chatgpt",
    title: "20+ Best Prompts to Learn Digital Marketing with ChatGPT",
    excerpt:
      "Discover over 20 top prompts for mastering digital marketing with ChatGPT — SEO, content strategy, PPC, and more.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/08/digital-marketing-technology-concept-internet-online-search-engine-optimisation-seo-smm-advertising-stockpack-adobe-stock-edited-1.jpg",
    tag: "Marketing",
    date: "26 Aug 2023",
    url: "https://ai47labs.com/blogs/20-best-prompts-to-learn-digital-marketing-with-chatgpt/",
    readTime: "8 min read",
    content: [
      "Learning marketing with AI works best when the prompts are tied to a real channel, campaign, or outcome. Otherwise the answers stay too abstract to be useful.",
      "Good prompts ask for examples, tradeoffs, and next steps. That structure turns the model from a trivia machine into a practical learning partner.",
    ],
  },
  {
    slug: "unveiling-the-10-stages-of-ai-what-you-need-to-know-now",
    title: "Unveiling the 10 Stages of AI: What You Need to Know NOW!",
    excerpt:
      "Discover the evolution of Artificial Intelligence through the '10 Stages of AI' — the past, present, and future of AI technology.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/08/evolving-ai-stockpack-adobe-stock-edited.jpg",
    tag: "AI Essentials",
    date: "19 Aug 2023",
    url: "https://ai47labs.com/blogs/unveiling-the-10-stages-of-ai-what-you-need-to-know-now/",
    readTime: "6 min read",
    content: [
      "The 'stages of AI' framing is useful because it helps people separate hype from capability. It gives a simple way to talk about where a system is actually useful.",
      "In practice, most products sit somewhere between narrow automation and assisted decision-making. That middle ground is where most of the real work is happening right now.",
    ],
  },
  {
    slug: "5-great-ideas-for-mobile-vr-app-development",
    title: "5 Great Ideas for Mobile VR App Development",
    excerpt:
      "Discover the top 5 ideas for creating captivating mobile VR apps — from education to storytelling, exploring the future of VR development.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/08/group-of-millennial-male-and-female-multiethnic-using-vr-goggle-to-test-metaverse-meeting-system-cheerful-and-smilingoffice-friend-standing-discussion-together-next-to-window-office-background-stockpack-adobe-stock.jpg",
    tag: "Development",
    date: "23 Aug 2023",
    url: "https://ai47labs.com/blogs/5-great-ideas-for-mobile-vr-app-development/",
    readTime: "5 min read",
    content: [
      "Mobile VR works best when the interaction is simple and the payoff is obvious. The ideas that survive usually focus on training, simulation, or highly visual storytelling.",
      "The big constraint is comfort. If the app ignores motion, fatigue, or setup time, even a clever idea stops being usable after a few minutes.",
    ],
  },
  {
    slug: "10-must-have-ai-prompts-for-academic-productivity",
    title: "10 Must-Have AI Prompts for Academic Productivity",
    excerpt:
      "Enhance academic productivity with these 10 AI prompts — from research topic generation to grammar checks and citation management.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/08/a-robot-helping-with-the-homework-future-of-ai-children-generative-ai-stockpack-adobe-stock-1-edited.jpg",
    tag: "Productivity",
    date: "24 Aug 2023",
    url: "https://ai47labs.com/blogs/10-must-have-ai-prompts-for-academic-productivity/",
    readTime: "4 min read",
    content: [
      "Academic prompts work best when they narrow the task instead of widening it. Students usually need help with structure, clarity, or revision before they need more ideas.",
      "A prompt that asks for a summary, an outline, or a set of study questions is often more useful than one that simply asks for an answer.",
    ],
  },
  {
    slug: "the-power-of-ai-in-industrial-design-5-prompt-concepts",
    title: "The Power of AI in Industrial Design: 5 Prompt Concepts",
    excerpt:
      "Explore five key AI prompt concepts that empower industrial designers — generative design, material selection, and real-time trend analysis.",
    image:
      "https://ai47labs.com/wp-content/uploads/2023/08/industrial-development-engineer-analysing-and-sharing-ideas-with-project-manager-working-on-computer-team-of-professionals-using-cad-software-for-modern-industrial-engineering-design-stockpack-adobe-stock.jpg",
    tag: "AI Prompts",
    date: "24 Aug 2023",
    url: "https://ai47labs.com/blogs/the-power-of-ai-in-industrial-design-5-prompt-concepts/",
    readTime: "6 min read",
    content: [
      "Industrial design is a strong fit for AI because the work sits between visual exploration and structured constraints. Prompting helps move between those two modes quickly.",
      "The best concepts come from combining aesthetic direction, material constraints, and production realities in the same prompt so the output stays grounded.",
    ],
  },
];

// Real blog index on the main site — used for the "view all articles" link.
export const blogIndexUrl = "https://ai47labs.com/blogs/";