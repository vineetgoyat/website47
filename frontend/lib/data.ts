import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Github,
  Instagram,
  Linkedin,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why us", href: "#capabilities" },
  { label: "Stack", href: "#stack" },
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
    tag: "Web platform",
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
    tag: "Web platform",
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
    title: "Mobile, without the usual trade-offs",
    description:
      "React Native apps that actually feel native — we spend real time on startup time and animation jank, not just feature checklists.",
    icon: Smartphone,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    title: "Backends built to be read, not just run",
    description:
      "NestJS and Node.js APIs with clear module boundaries, so the next engineer who opens the repo isn't guessing what talks to what.",
    icon: ServerCog,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    title: "Web that shows up in search",
    description:
      "Next.js for the marketing site and the parts that need to rank, React for the parts that need to feel like an app.",
    icon: Boxes,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    title: "Type-safe, end to end",
    description:
      "One language, TypeScript, from the mobile app down to the database layer — fewer surprises at 11pm before a release.",
    icon: ShieldCheck,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    title: "Shipped, not just demoed",
    description:
      "CI/CD to the App Store, Play Store and cloud from day one, so 'it works on my machine' isn't part of our vocabulary.",
    icon: Rocket,
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
  },
];

export const stack = [
  { name: "React Native", role: "Mobile apps", code: "RN" },
  { name: "Next.js", role: "Web & SEO", code: "▲" },
  { name: "Node.js", role: "Runtime", code: "JS" },
  { name: "NestJS", role: "Backend architecture", code: "Ns" },
  { name: "TypeScript", role: "Type safety, everywhere", code: "TS" },
  { name: "PostgreSQL", role: "Relational data", code: "Pg" },
  { name: "MongoDB", role: "Non-relational data", code: "Mo" },
  { name: "AWS / GCP", role: "Cloud & CI/CD", code: "☁" },
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
    a: "Mostly two things: our own product line (Persona Pilot, Yoda LMS, AI Tutor, Edu Assist, UPSC Evaluator) and full-stack builds for clients — mobile in React Native, web in Next.js, backend in NestJS and Node.js.",
  },
  {
    q: "How does a new build usually start?",
    a: "A short scoping call, then a discovery sprint where we nail down the data model and the riskiest screen first, before committing to a full timeline. We'd rather find the hard part in week one than week six.",
  },
  {
    q: "Which databases do you use?",
    a: "PostgreSQL when the data is relational and the queries matter, MongoDB when the shape of the data is looser. We pick per project rather than defaulting to one.",
  },
  {
    q: "Can an existing product be reskinned or white-labelled?",
    a: "Yes — Yoda LMS and Edu Assist were both built to be themeable, and we've handed both off to partners with their own branding on top.",
  },
  {
    q: "Do you work with early-stage startups or only bigger teams?",
    a: "Both. The stack scales down to a single-founder MVP just as well as it scales up to a multi-team rollout — it's the same TypeScript codebase either way.",
  },
  {
    q: "Is there a trial before a full engagement?",
    a: "Most projects start with a paid discovery sprint (usually one to two weeks) so both sides can check the fit before signing up for the whole build.",
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
