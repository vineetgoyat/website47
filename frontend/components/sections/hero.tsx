import Image from "next/image";
import { ArrowRight, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 px-5 pb-16 pt-14 md:px-10 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI-powered products, built to last
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Innovative AI solutions,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              built by people who ship.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            We design and build AI-powered mobile apps and web platforms —
            from the first wireframe to the App Store listing — for our own
            product line and for the teams we partner with.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#contact">
              <Button size="lg">
                Get started <ArrowRight size={16} />
              </Button>
            </a>
            <a href="/#about">
              <Button size="lg" variant="outline">
                About us
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

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="AI47 Labs team working together"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          {/* Floating stat card — a little "studded" pop of color against the photo */}
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "#E8604C22", color: "#E8604C" }}
            >
              <Users2 size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none">10,000+</p>
              <p className="text-xs text-muted-foreground">people using what we build</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}