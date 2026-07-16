"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts, blogIndexUrl, accentPalette } from "@/lib/data";

export function Blog() {
  const featured = blogPosts.slice(0, 6);

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
        <a
          href={blogIndexUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all articles
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post, i) => {
          const accent = accentPalette[i % accentPalette.length];
          return (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span
                  className="absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10.5px] text-white shadow-sm backdrop-blur"
                  style={{ background: `${accent.hex}CC` }}
                >
                  {post.tag}
                </span>
                <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs text-muted-foreground">{post.date} · ai47labs.com</p>
                <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: accent.hex }}
                >
                  Read on ai47labs.com
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {/* Animated accent bar that sweeps in on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ background: accent.hex }}
              />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}