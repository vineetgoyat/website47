"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/layout/sidebar-provider";
import { siteLogo } from "@/lib/data";

export function Topbar({ activeLabel }: { activeLabel: string }) {
  const { toggle } = useSidebar();

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border bg-background/85 px-5 py-3 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label="Open menu"
          className="rounded-lg border border-border p-2 text-foreground transition hover:bg-secondary"
        >
          <Menu size={18} />
        </button>
        <Link href="/#home" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-black/5">
            <Image src={siteLogo.square} alt="AI47Labs logo" fill sizes="28px" className="object-contain p-0.5" />
          </span>
          <span className="hidden font-display text-sm font-bold sm:inline">
            AI<span className="text-primary">47</span>Labs
          </span>
        </Link>
        <p className="hidden font-mono text-xs text-muted-foreground md:block">
          <span className="mx-1">/</span>
          <span className="text-foreground">{activeLabel}</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a href="/#about">
          <Button variant="outline" size="sm">
            About us
          </Button>
        </a>
        <a href="/#contact">
          <Button size="sm">Get started</Button>
        </a>
      </div>
    </div>
  );
}