import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts, accentPalette } from "@/lib/data";

export function Blog() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
            From the blog
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Notes on building AI products, not just using them.
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all articles <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post, i) => {
          const accent = accentPalette[i % accentPalette.length];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
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
  );
}