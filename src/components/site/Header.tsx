import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg">T</span>
          <span className="font-display text-lg leading-none">
            Tri-Boro <span className="text-muted-foreground">Auto Body</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:12017914118"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
        >
          <Phone className="h-4 w-4" /> (201) 791-4118
        </a>
        <button
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <div className="h-0.5 w-5 bg-foreground mb-1" />
          <div className="h-0.5 w-5 bg-foreground mb-1" />
          <div className="h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:12017914118"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> (201) 791-4118
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
