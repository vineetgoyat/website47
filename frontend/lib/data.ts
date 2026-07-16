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

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Why us", href: "/#capabilities" },
  { label: "Blog", href: "/blog" },
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
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "crafting-ai-prompts-that-work",
    title: "The Secret Art of Crafting AI Prompts for Amazing Results",
    excerpt:
      "Most people ask AI tools for too little, then wonder why the output feels generic. Here's what actually changes the result.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    tag: "AI Prompts",
    date: "20 Dec 2025",
    readTime: "5 min read",
    content: [
      "The difference between a flat AI response and a genuinely useful one is rarely the model — it's almost always the prompt. Vague requests get vague answers back, because there's nothing specific for the model to anchor on.",
      "The fix isn't complicated: give the model a role, a concrete goal, and a constraint or two. \"Write a LinkedIn post\" gets you filler. \"Write a LinkedIn post for a first-time founder announcing a product launch, under 120 words, no hashtags\" gets you something you can actually publish.",
      "The other habit worth building is iteration. Treat the first response as a draft, not an answer — tell the model what's wrong with it and ask it to fix that one thing. Three short rounds of feedback usually beat one perfect prompt.",
      "We ended up baking a lot of this into Persona Pilot, so the prompting discipline happens behind the scenes instead of being something you have to remember every time.",
    ],
  },
  {
    slug: "google-veo-3-for-video",
    title: "Getting the Most Out of Google Veo 3 for Video Generation",
    excerpt:
      "AI video tools are finally good enough to use in real work — if you know how to brief them. A few things we learned testing Veo 3.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    tag: "AI Tools",
    date: "20 Dec 2025",
    readTime: "6 min read",
    content: [
      "Text-to-video tools used to be a novelty — a few seconds of uncanny motion, good for a demo and not much else. That's shifted quickly, and Veo 3 is one of the clearer signs of it.",
      "The biggest lever isn't the prompt length, it's specificity about camera behaviour: naming the shot type (a slow dolly-in, a static wide shot) does more for output quality than piling on adjectives about mood.",
      "It's still a tool for a first pass, not a final cut — colour grading, pacing and sound design are where a human editor earns their keep. Treat it as a very fast storyboard generator rather than a finished product.",
    ],
  },
  {
    slug: "ai-career-roadmap",
    title: "A Realistic Roadmap Into an AI Career",
    excerpt:
      "You don't need a PhD to work on AI products. Here's the path that actually gets people hired, based on who we've hired.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    tag: "Career",
    date: "20 Dec 2025",
    readTime: "7 min read",
    content: [
      "Almost nobody on our team has an AI-specific degree. What they have in common is that they built things — a small project, a weekend hack, something with a live URL — instead of only taking courses.",
      "If you're starting out, pick one thin slice: prompt engineering, applied ML, or the product/UX side of AI tools, and go deep enough to ship something real in it. Breadth comes later; a shipped project is what gets you through the first interview.",
      "The market rewards people who can explain trade-offs, not just use tools. Being able to say why you chose one approach over another — and what it cost — matters more than knowing the most acronyms.",
    ],
  },
  {
    slug: "ai-image-generation-from-text",
    title: "Turning a Text Prompt Into an Image That Actually Works",
    excerpt:
      "Getting a usable image out of a text prompt is a different skill from writing a good chat prompt. Here's where they diverge.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    tag: "AI Prompts",
    date: "20 Dec 2025",
    readTime: "4 min read",
    content: [
      "Image prompting rewards nouns and visual detail over instructions. \"Make it better\" means nothing to an image model; \"soft window light, shallow depth of field, muted colour palette\" means quite a lot.",
      "Reference a medium or a technique rather than a style name alone — \"shot on 35mm film\" tends to produce more consistent results than naming an artist or a brand aesthetic.",
      "And treat the first output as a seed, not a result — small, specific edits on top of a decent draft get you further, faster, than trying to nail everything in one prompt.",
    ],
  },
  {
    slug: "ai-tools-for-developers",
    title: "Five AI Tools Worth Adding to a Developer's Workflow",
    excerpt:
      "Not everything with 'AI' in the name is worth your time. These are the few that changed how our team actually ships.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop",
    tag: "Development",
    date: "20 Dec 2025",
    readTime: "6 min read",
    content: [
      "An in-editor code assistant is the obvious one, but the value isn't autocomplete — it's asking it to explain an unfamiliar part of the codebase before you touch it, which cuts down a lot of first-day confusion.",
      "A second tool worth having: something that reviews a diff before a human does, catching the boring stuff (naming, unused imports, obvious edge cases) so code review conversations stay focused on architecture.",
      "The rest — test generation, changelog drafting, PR summaries — save minutes here and there. None of them are transformative on their own, but stacked together they add up to a noticeably faster week.",
    ],
  },
  {
    slug: "generative-ai-for-marketing",
    title: "Where Generative AI Actually Moves the Needle in Marketing",
    excerpt:
      "Not every marketing task benefits from AI the same amount. Here's where we've seen a real difference versus where it's just noise.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tag: "Marketing",
    date: "20 Dec 2025",
    readTime: "5 min read",
    content: [
      "Generating a first draft of ad copy or a landing page section is a genuinely good use of AI — it removes the blank-page problem and gives you something to react to and edit.",
      "It's weaker at strategy: deciding what to say and to whom is still a judgement call that needs a person who understands the actual customer, not a model that's seen a million generic customer personas.",
      "The teams getting the most out of it treat AI as a fast first-draft machine for execution, while keeping positioning, tone and strategy firmly human-led.",
    ],
  },
  {
    slug: "ai-tools-for-busy-professionals",
    title: "Five AI Tools That Give Busy Professionals Their Time Back",
    excerpt:
      "A short, practical list — no hype, just the tools that quietly save an hour or two a week once they're part of your routine.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    tag: "Productivity",
    date: "20 Dec 2025",
    readTime: "4 min read",
    content: [
      "Meeting summarisation is the easiest win — turning an hour-long call into five action items takes seconds and means fewer people need to sit through the recording.",
      "An inbox triage assistant that drafts replies for you to edit, rather than send automatically, keeps you in control while cutting the time spent on routine emails significantly.",
      "The common thread in all of these: they work best as a first draft you approve, not something you set and forget. That's the difference between a tool that saves time and one that quietly creates more work fixing its mistakes.",
    ],
  },
  {
    slug: "grok-ai-video-tools",
    title: "A First Look at Grok's AI Video Tools",
    excerpt:
      "We spent an afternoon testing Grok's video features against the tools we already use. Here's what stood out.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
    tag: "AI Tools",
    date: "20 Dec 2025",
    readTime: "5 min read",
    content: [
      "Where it's strong is speed — short clips generate quickly enough to genuinely iterate on an idea in real time, rather than kicking off a render and coming back later.",
      "It's less consistent on longer sequences and anything involving specific text or logos in-frame, which is fairly typical of where this generation of tools still struggles.",
      "For quick social content and rough concept pitches, it's a solid addition to the toolkit. For anything client-facing and final, we're still finishing in a proper editor.",
    ],
  },
  {
    slug: "seven-ai-roles-transforming-work",
    title: "Seven AI-Adjacent Roles That Didn't Exist Five Years Ago",
    excerpt:
      "The job titles around AI products are shifting fast. A look at the roles we're actually hiring for right now.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tag: "Career",
    date: "20 Dec 2025",
    readTime: "6 min read",
    content: [
      "Prompt and evaluation engineer — someone who designs test sets for AI features and knows when a model's output is quietly wrong, not just obviously wrong — has gone from a side task to a real role.",
      "AI product manager is its own discipline now too, distinct from traditional PM work, because scoping an AI feature means accounting for cases the model gets wrong, not just cases it gets right.",
      "Underneath both of those, we still need the same full-stack engineers we always have — the roles are new, but most of them sit on top of solid, ordinary engineering fundamentals.",
    ],
  },
];