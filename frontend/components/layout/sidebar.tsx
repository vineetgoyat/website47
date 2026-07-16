"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, socials, siteLogo } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSidebar } from "@/components/layout/sidebar-provider";

export function Sidebar({ activeHref }: { activeHref: string }) {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Backdrop — click outside to close, on any screen size */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-dvh w-[270px] flex-col border-r border-border bg-card shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-5 pb-2 pt-5">
          <Link href="/#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5">
              <Image src={siteLogo.square} alt="AI47Labs logo" fill sizes="36px" className="object-contain p-1" />
            </span>
            <span className="whitespace-nowrap font-display text-[17px] font-bold">
              AI<span className="text-primary">47</span>Labs
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable nav — its own scroll container so the footer below is
            never pushed off-screen, however long the nav list gets. */}
        <div className="thin-scroll flex-1 overflow-y-auto px-3 py-3">
          <p className="px-2 pb-2 pt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Navigate
          </p>
          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14.5px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                    isActive && "bg-secondary text-foreground"
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-primary" />
                  )}
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer — pinned, always visible regardless of nav length */}
        <div className="flex flex-col gap-3 border-t border-border px-3 py-4">
          <ThemeToggle />

          <div className="flex flex-wrap gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary hover:border-primary"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>

          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-[13.5px] font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <Sparkles size={14} />
            Start a project
          </a>
        </div>
      </aside>
    </>
  );
}