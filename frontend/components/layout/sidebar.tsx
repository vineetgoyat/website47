"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronsLeft, ChevronsRight, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, socials } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSidebar } from "@/components/layout/sidebar-provider";

export function Sidebar({ activeHref }: { activeHref: string }) {
  const { collapsed, toggleCollapsed, mobileOpen, setMobileOpen } = useSidebar();

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          // Fixed height viewport + own scroll container is the fix: nothing at the
          // bottom (theme toggle, socials, CTA) can ever get clipped again.
          "fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-border bg-card transition-[width,transform] duration-300 ease-out",
          collapsed ? "w-[76px]" : "w-[260px]",
          "md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-4 pb-2 pt-5">
          <Link href="#home" className="flex items-center gap-2.5 overflow-hidden">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-primary-foreground">
              47
            </span>
            {!collapsed && (
              <span className="whitespace-nowrap font-display text-[17px] font-bold">
                AI<span className="text-primary">47</span>Labs
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable middle section — nav grows, everything stays reachable */}
        <div className="thin-scroll flex-1 overflow-y-auto px-3 py-3">
          {!collapsed && (
            <p className="px-2 pb-2 pt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Navigate
            </p>
          )}
          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14.5px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                    isActive && "bg-secondary text-foreground",
                    collapsed && "justify-center px-0"
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-primary" />
                  )}
                  <span className={cn(collapsed ? "" : "truncate")}>
                    {collapsed ? item.label.slice(0, 1) : item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer — pinned, but the middle scrolls, so this is always visible */}
        <div className="flex flex-col gap-3 border-t border-border px-3 py-4">
          <ThemeToggle collapsed={collapsed} />

          {!collapsed && (
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
          )}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-[13.5px] font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
              collapsed && "px-0"
            )}
          >
            <Sparkles size={14} />
            {!collapsed && "Start a project"}
          </a>

          {/* Collapse toggle — desktop only. This is the "moveable" control:
              the sidebar can be pushed down to a slim icon rail whenever it's in the way. */}
          <button
            onClick={toggleCollapsed}
            className="mt-1 hidden items-center justify-center gap-2 rounded-xl border border-border py-2 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground md:flex"
          >
            {collapsed ? <ChevronsRight size={15} /> : <ChevronsLeft size={15} />}
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>
    </>
  );
}
