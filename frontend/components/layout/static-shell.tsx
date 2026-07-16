"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { SidebarProvider } from "@/components/layout/sidebar-provider";

// Same chrome as AppShell (sidebar + topbar), but for standalone routes like
// /blog and /blog/[slug] that aren't made of scrollable homepage sections —
// so the active nav item and breadcrumb are passed in directly instead of
// being derived from an IntersectionObserver.
export function StaticShell({
  children,
  activeHref,
  activeLabel,
}: {
  children: React.ReactNode;
  activeHref: string;
  activeLabel: string;
}) {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-background">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_55%_at_65%_0%,black_10%,transparent_70%)]"
        />

        <Sidebar activeHref={activeHref} />

        <div className="relative z-10">
          <Topbar activeLabel={activeLabel} />
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}