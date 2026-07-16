"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { capabilities, accentPalette } from "@/lib/data";

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="mb-12 max-w-xl">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
          Why teams work with us
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">
          Not the biggest team. Just one that finishes what it starts.
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((c, i) => (
          <CapabilityCard
            key={c.title}
            {...c}
            index={i}
            accentHex={accentPalette[i % accentPalette.length].hex}
          />
        ))}
      </ul>
    </section>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  description,
  accentHex,
  index,
}: {
  title: string;
  description: string;
  icon: typeof ArrowUpRight;
  accentHex: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative list-none"
    >
      {/* Soft glow that fades in behind the card on hover, no mouse-tracking */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-[1.5rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: accentHex }}
      />

      <div className="relative flex h-full min-h-[15rem] flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
        {/* Accent bar that sweeps in from the left on hover */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          style={{ background: accentHex }}
        />

        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            style={{ background: `${accentHex}1A`, color: accentHex }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="space-y-2.5">
            <h3 className="text-balance font-display text-xl font-semibold leading-[1.375rem] tracking-[-0.02em] md:text-[1.375rem] md:leading-[1.75rem]">
              {title}
            </h3>
            <p className="text-sm leading-[1.375rem] text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Small directional cue, echoes the product/blog cards for consistency */}
        <span
          className="relative inline-flex w-fit translate-y-1 items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ color: accentHex }}
        >
          Learn more
          <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.li>
  );
}