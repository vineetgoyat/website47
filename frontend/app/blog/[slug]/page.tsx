import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StaticShell } from "@/components/layout/static-shell";
import { Footer } from "@/components/layout/footer";
import { blogPosts, accentPalette } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — AI47 Labs Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const index = blogPosts.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const accent = accentPalette[index % accentPalette.length];
  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <StaticShell activeHref="/blog" activeLabel="blog">
      <article className="scroll-mt-20 px-5 pb-20 pt-14 md:px-10 md:pt-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft size={15} />
            Back to blog
          </Link>

          <span
            className="mt-6 inline-block rounded-full px-3 py-1 font-mono text-xs"
            style={{ background: `${accent.hex}1A`, color: accent.hex }}
          >
            {post.tag}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {post.date} · {post.readTime}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-10 max-w-none space-y-5 text-[17px] leading-relaxed text-foreground/90">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold">Want something like this built for you?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              This is the same team that writes the posts and ships the products.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: accent.hex }}
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {morePosts.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl border-t border-border pt-12">
            <h2 className="mb-6 text-lg font-semibold">More from the blog</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {morePosts.map((p) => {
                const i2 = blogPosts.findIndex((x) => x.slug === p.slug);
                const a2 = accentPalette[i2 % accentPalette.length];
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative h-28 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="240px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-mono" style={{ color: a2.hex }}>
                        {p.tag}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-snug">{p.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
      <Footer />
    </StaticShell>
  );
}