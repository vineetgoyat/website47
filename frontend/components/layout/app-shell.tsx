"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { SidebarProvider, useSidebar } from "@/components/layout/sidebar-provider";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = ["home", "products", "capabilities", "stack", "faq", "contact"];

function AppShellInner({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  const active = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.4] [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_55%_at_65%_0%,black_10%,transparent_70%)]"
      />

      <Sidebar activeHref={`#${active}`} />

      <div
        className={cn(
          "relative z-10 transition-[margin] duration-300 ease-out",
          collapsed ? "md:ml-[76px]" : "md:ml-[260px]"
        )}
      >
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
