"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { SidebarProvider } from "@/components/layout/sidebar-provider";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = ["home", "about", "products", "capabilities", "faq", "contact"];

function AppShellInner({ children }: { children: React.ReactNode }) {
  const active = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35] [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_55%_at_65%_0%,black_10%,transparent_70%)]"
      />

      <Sidebar activeHref={`#${active}`} />

      <div className="relative z-10">
        <Topbar activeLabel={active} />
        <main>{children}</main>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppShellInner>{children}</AppShellInner>
    </SidebarProvider>
  );
}