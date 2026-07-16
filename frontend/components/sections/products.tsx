import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products, accentPalette } from "@/lib/data";

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="mb-12 max-w-xl">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
          Our products
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">
          Five products, all live, all still being worked on.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every card below links to a product that's actually running in
          production — not a mockup.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const accent = accentPalette[i % accentPalette.length];
          return (
            
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderTopColor: accent.hex, borderTopWidth: 3 }}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10.5px] backdrop-blur"
                  style={{ background: `${accent.hex}CC`, color: "white" }}
                >
                  {p.tag}
                </span>

                {/* Real product logo badge, pulled from the product's own site */}
                <span className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-md ring-1 ring-black/5">
                  <span className="relative block h-full w-full">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.blurb}</p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: accent.hex }}
                >
                  Visit product
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}