"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 px-5 py-20 md:px-10">
      <div className="mb-10 max-w-xl">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wide text-primary">
          FAQ
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">Questions people actually ask</h2>
        <p className="mt-3 text-muted-foreground">
          Not finding it here? The contact form below reaches a real person.
        </p>
      </div>

      <div className="divide-y divide-border border-t border-border">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-semibold md:text-lg">
                  {item.q}
                </span>
                <Plus
                  size={18}
                  className={cn(
                    "shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-45 text-accent"
                  )}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-2xl pb-5 text-sm text-muted-foreground md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}