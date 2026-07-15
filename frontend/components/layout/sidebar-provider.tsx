"use client";

import * as React from "react";

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // Closed by default everywhere — the hamburger button is the only way in,
  // on desktop and mobile alike.
  const [open, setOpen] = React.useState(false);

  const toggle = React.useCallback(() => setOpen((prev) => !prev), []);

  const value = React.useMemo(() => ({ open, setOpen, toggle }), [open, toggle]);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
  return ctx;
}