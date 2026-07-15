import { GlowingEffect } from "@/components/ui/glowing-effect";
import { capabilities, accentPalette, type Capability } from "@/lib/data";

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

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {capabilities.map((c, i) => (
          <CapabilityCard key={c.title} {...c} accentHex={accentPalette[i % accentPalette.length].hex} />
        ))}
      </ul>
    </section>
  );
}

function CapabilityCard({
  area,
  icon: Icon,
  title,
  description,
  accentHex,
}: Capability & { accentHex: string }) {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-card p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div
              className="w-fit rounded-lg border-[0.75px] border-border p-2"
              style={{ background: `${accentHex}1A`, color: accentHex }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div className="space-y-2.5">
              <h3 className="text-balance pt-0.5 font-display text-xl font-semibold leading-[1.375rem] tracking-[-0.02em] md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}