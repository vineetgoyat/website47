import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StaticShell } from "@/components/layout/static-shell";
import { Footer } from "@/components/layout/footer";
import { blogPosts, accentPalette } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — AI47 Labs",
  description: "Notes on building AI products, from the AI47 Labs team.",
};

export default function BlogIndexPage() {
  return (
    <StaticShell activeHref="/blog" activeLabel="blog">
      <section className="scroll-mt-20 px-5 pb-20 pt-14 md:px-10 md:pt-20">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
          The blog
        </span>
        <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] md:text-5xl">
          Notes on building AI products, not just using them.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted-foreground">
          Short, practical write-ups from the team — what we're learning
          building AI47 Labs' own products, week to week.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => {
            const accent = accentPalette[i % accentPalette.length];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderTopColor: accent.hex, borderTopWidth: 3 }}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10.5px]"
                    style={{ background: `${accent.hex}CC`, color: "white" }}
                  >
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="text-base font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: accent.hex }}
                  >
                    Read article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </StaticShell>
  );
}