import Link from "next/link";
import { nav, products, socials, offices } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 pb-8 pt-14 md:px-10">
      <div className="grid gap-10 pb-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-primary-foreground">
              47
            </span>
            <span className="font-display text-[17px] font-bold">
              AI<span className="text-primary">47</span>Labs
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A small team building AI-powered products for the real world —
            five shipped, more in progress.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary hover:border-primary"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Pages
          </h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Products
          </h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {products.map((p) => (
              <li key={p.name}>
                
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-primary"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Offices
          </h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {offices.map((o) => (
              <li key={o.label}>
                <p className="font-medium text-foreground">{o.label}</p>
                <p>{o.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} AI Arsenal Pvt. Ltd. — AI47 Labs. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}