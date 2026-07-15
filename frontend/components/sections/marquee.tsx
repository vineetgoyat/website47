import { stack } from "@/lib/data";

const items = [...stack, ...stack];

export function StackMarquee() {
  return (
    <div className="marquee-mask overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee gap-14">
        {items.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
