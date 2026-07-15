"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/layout/sidebar-provider";

export function Topbar({ activeLabel }: { activeLabel: string }) {
  const { setMobileOpen } = useSidebar();

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border bg-background/80 px-5 py-3 backdrop-blur-md md:px-10">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-lg border border-border p-2 text-foreground md:hidden"
        >
          <Menu size={18} />
        </button>
        <p className="font-mono text-xs text-muted-foreground">
          ai47labs<span className="mx-1">/</span>
          <span className="text-foreground">{activeLabel}</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <a href="#contact">
          <Button variant="outline" size="sm">
            Get a quote
          </Button>
        </a>
        <a href="#products">
          <Button size="sm">View products</Button>
        </a>
      </div>
    </div>
  );
}
