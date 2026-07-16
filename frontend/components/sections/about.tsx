import Image from "next/image";
import { aboutContent, siteLogo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-lg">
            <Image
              src={aboutContent.image}
              alt="Inside the AI47 Labs office"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-5 -top-5 hidden h-24 w-24 items-center justify-center rounded-2xl border border-border bg-white p-4 shadow-lg sm:flex">
            <span className="relative block h-full w-full">
              <Image src={siteLogo.square} alt="AI47Labs logo" fill sizes="96px" className="object-contain" />
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
            {aboutContent.eyebrow}
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">{aboutContent.heading}</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            {aboutContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {aboutContent.values.map((v, i) => {
              const colors = ["#E8604C", "#2F8F7A", "#5B63D3"];
              const color = colors[i % colors.length];
              return (
                <span
                  key={v.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  <span style={{ color }}>
                    <v.icon size={15} />
                  </span>
                  {v.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}