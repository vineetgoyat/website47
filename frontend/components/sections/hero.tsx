"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

const codeSnippet = `const stack = {
  mobile: 'React Native',
  web: 'Next.js + React',
  api: 'NestJS + Node.js',
  db: 'PostgreSQL, MongoDB',
  lang: 'TypeScript',
};

// shipped to production →
export default deploy(stack);`;

function Terminal() {
  const [typed, setTyped] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(codeSnippet.slice(0, i));
      if (i >= codeSnippet.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">stack.ts</span>
      </div>
      <pre className="min-h-[260px] whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-relaxed text-foreground/90">
        {typed}
        <span className="ml-0.5 inline-block h-4 w-[7px] animate-pulse bg-accent align-middle" />
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="px-5 pb-16 pt-14 md:px-10 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Full-stack AI product studio
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Innovative AI solutions,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              built by people who ship.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            We design and build AI-powered mobile apps, web platforms and
            backends — from the first wireframe to the App Store listing —
            with React Native, Next.js, NestJS and Node.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg">
                Get started <ArrowRight size={16} />
              </Button>
            </a>
            <a href="#products">
              <Button size="lg" variant="outline">
                Explore products
              </Button>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold">{s.value}</p>
                <p className="max-w-[10rem] text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
