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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why us", href: "#capabilities" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
  },
  {
    name: "Yoda LMS",
    tag: "Learning platform",
    blurb:
      "Course creation, enrolment, deadlines and grading in one place. Started as an internal tool for a training partner, now runs cohorts for a few hundred learners at a time.",
    href: "https://appdev.yodalms.com/",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "AI Tutor",
    tag: "EdTech",
    blurb:
      "Adaptive practice sets for JEE aspirants — the app watches where a student keeps slipping and quietly weights the next quiz toward that gap instead of drilling everything evenly.",
    href: "https://tutor.aipersonaz.com/",
    image:
      "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Edu Assist",
    tag: "Learning platform",
    blurb:
      "Lesson plans, test papers and class notes for teachers who'd rather spend Sunday afternoon on anything else. Built with a lot of feedback from actual tutors, not just a product spec.",
    href: "https://eduassist-website.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "UPSC Evaluator",
    tag: "Assessment",
    blurb:
      "Essay scoring mapped against the real UPSC rubric, with margin notes instead of just a number — the part students told us actually helped them improve.",
    href: "https://fe-essay.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
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