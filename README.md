# AI47 Labs — redesign

A two-part project: a Next.js/TypeScript/Tailwind frontend (shadcn-style component
structure) and a small NestJS backend that the contact form actually talks to.
Built to open straight in VS Code and run locally, then deploy.

```
ai47labs-app/
├── frontend/                 Next.js 14 (App Router) + TypeScript + Tailwind
│   ├── app/
│   │   ├── layout.tsx        Fonts, theme provider, metadata
│   │   ├── page.tsx          Assembles all sections
│   │   └── globals.css       Tailwind + shadcn CSS variable theme
│   ├── components/
│   │   ├── ui/                → shadcn convention: primitive, reusable pieces
│   │   │   ├── button.tsx
│   │   │   └── glowing-effect.tsx
│   │   ├── layout/            → structural chrome (sidebar, topbar, footer)
│   │   │   ├── app-shell.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── sidebar-provider.tsx
│   │   │   ├── topbar.tsx
│   │   │   └── footer.tsx
│   │   ├── sections/          → one file per homepage section
│   │   │   ├── hero.tsx
│   │   │   ├── marquee.tsx
│   │   │   ├── products.tsx
│   │   │   ├── capabilities.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── stack.tsx
│   │   │   ├── faq.tsx
│   │   │   └── contact.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── hooks/
│   │   └── use-active-section.ts
│   ├── lib/
│   │   ├── utils.ts           cn() helper (shadcn standard)
│   │   └── data.ts            All copy, links, products, FAQs live here
│   ├── components.json        shadcn CLI config
│   ├── tailwind.config.ts
│   └── package.json
│
└── backend/                   NestJS + TypeScript
    ├── src/
    │   ├── main.ts             Bootstraps the API, enables CORS + validation
    │   ├── app.module.ts
    │   ├── app.controller.ts   GET /health
    │   └── contact/
    │       ├── contact.module.ts
    │       ├── contact.controller.ts   POST /contact, GET /contact
    │       ├── contact.service.ts      in-memory store (swap for Postgres/Mongo)
    │       └── dto/create-contact.dto.ts
    └── package.json
```

## Why this structure

- **`components/ui/`** is the shadcn convention for framework-agnostic,
  reusable primitives (buttons, the glowing-effect card wrapper, and anything
  you add later with `npx shadcn add ...`). Keeping it separate from
  `components/sections/` matters because the shadcn CLI reads `components.json`
  and writes new primitives into that exact folder — if it doesn't exist (or
  is renamed), the CLI can't find it and every future `add` command has to be
  patched by hand.
- **`components/layout/`** vs **`components/sections/`** — chrome that wraps
  every page (sidebar, topbar, footer) is separated from one-off homepage
  sections, so the shell can be reused if a second page is added later.
- **`lib/data.ts`** is the single source of truth for copy, links and product
  info — update it there and it flows through the whole site instead of
  hunting through JSX.

## 1. Setup — frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local   # points the contact form at the backend
npm run dev
```

Open `http://localhost:3000`.

This project already has Tailwind, TypeScript and the shadcn folder
convention (`components/ui`, `lib/utils.ts`, `components.json`) wired up. If
you're pasting this into a fresh repo that doesn't have those yet, this is
the equivalent of what was run to set it up:

```bash
npx create-next-app@latest frontend --typescript --tailwind --app
cd frontend
npx shadcn@latest init      # creates components.json, lib/utils.ts, components/ui/
npx shadcn@latest add button
npm install motion next-themes lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate
```

## 2. Setup — backend

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

API runs on `http://localhost:3001`. Try it:

```bash
curl http://localhost:3001/health
curl -X POST http://localhost:3001/contact \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Ada","lastName":"Lovelace","email":"ada@example.com","message":"Hello!"}'
```

The contact form on the site posts to `POST /contact`; submissions are kept
in memory (`contact.service.ts`) so they reset on restart — swap that array
for a Postgres or MongoDB repository (both are called out in the file) once
there's a real database behind it.

Run both `npm run dev` (frontend) and `npm run start:dev` (backend) at the
same time, in two terminals, for the full thing to work end to end.

## What changed from the original site, and why

- **No dark/light mode → added.** A real toggle in the sidebar, respects
  system preference on first visit, remembered after that.
- **Rigid, fixed sidebar that clipped its own content on short screens →
  fixed.** The sidebar is now its own scroll container (nav scrolls
  internally) with a pinned header and footer, so the theme toggle and
  social links are never cut off. It also collapses to a slim icon rail
  (desktop) or slides in as a drawer (mobile) via the chevron button at the
  bottom of the sidebar — genuinely movable instead of static.
- **Social/CTA buttons that didn't go anywhere → wired up.** LinkedIn,
  GitHub, Twitter/X, YouTube and Instagram icons are real `<a target="_blank">`
  links (currently pointed at plausible profile URLs — swap in the real ones
  in `lib/data.ts` before launch), and the contact form actually submits to
  a live backend endpoint instead of doing nothing.
- **Leftover LinkedIn-bot FAQ copy on an AI dev shop's site → rewritten** to
  answer what a client or recruiter would actually ask.
- **Softer, less "AI generated" palette.** Muted teal + warm ochre on a warm
  paper background (with a proper dark mode), instead of the stock
  cream-and-terracotta or neon-on-black look most AI-built sites default to.

## Deploying

- **Frontend** → Vercel (it's a standard Next.js App Router project — `vercel`
  from inside `/frontend`, or connect the repo in the dashboard). Set
  `NEXT_PUBLIC_API_URL` to your deployed backend URL in the project's
  environment variables.
- **Backend** → Render, Railway, or Fly.io all support NestJS out of the box.
  Set `FRONTEND_URL` to your deployed frontend origin so CORS allows it.

## Talking about this in the interview

- The homepage is genuinely built with the stack in the job post: **React**
  in **Next.js** on the frontend, **NestJS**/**Node.js** on the backend,
  **TypeScript** everywhere, and the contact form is a real REST endpoint
  with `class-validator` DTOs — the same pattern you'd use for any NestJS API.
- The one thing this repo doesn't include is **React Native** — a website
  can't demo a mobile app. If asked, it's worth saying you'd port the design
  tokens (`app/globals.css`, `tailwind.config.ts`) into a React Native app
  using `nativewind`, since the color and type system is already decoupled
  from the web markup.
