import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ice text-navy-deep font-display text-lg">T</span>
            <span className="font-display text-lg">Tri-Boro Auto Body</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Bergen County's family-owned collision shop since 1982. A+ BBB rated,
            near-perfect Google reviews, and factory-quality repairs backed by
            four decades of craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 5-35 Saddle River Rd<br />Fair Lawn, NJ 07410</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href="tel:12017914118" className="hover:text-primary-foreground">(201) 791-4118</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Mon–Fri, 7:30am – 5:00pm</li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col md:flex-row justify-between gap-2 py-6 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Tri-Boro Auto Body. All rights reserved.</span>
          <span>Resourceful. Timely. Family Owned & Operated.</span>
        </div>
      </div>
    </footer>
  );
}
