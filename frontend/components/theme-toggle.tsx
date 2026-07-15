"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle day and night mode"
      className="flex w-full items-center justify-between rounded-xl border border-border bg-secondary/60 px-3 py-2 text-xs font-mono text-muted-foreground transition hover:text-foreground"
    >
      <span>{isDark ? "Night mode" : "Day mode"}</span>
      <span className="relative flex h-6 w-11 items-center rounded-full border border-border bg-background transition-colors">
        <span
          className={`flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-background transition-transform duration-300 ${
            isDark ? "translate-x-[22px]" : "translate-x-[2px]"
          }`}
        >
          {isDark ? <Moon size={11} /> : <Sun size={11} />}
        </span>
      </span>
    </button>
  );
}