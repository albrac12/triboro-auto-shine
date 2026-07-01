import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, PaintBucket, ShieldCheck, Car, Sparkles, FileCheck, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tri-Boro Auto Body" },
      { name: "description", content: "Collision repair, refinishing, frame straightening, and insurance coordination in Fair Lawn, NJ. Certified direct repair shop." },
      { property: "og:title", content: "Services — Tri-Boro Auto Body" },
      { property: "og:description", content: "Complete collision and refinishing services, backed by 40+ years of craftsmanship in Bergen County." },
    ],
  }),
  component: Services,
});

const services = [
  { Icon: Wrench, title: "Collision repair", copy: "Full structural repair, unibody straightening, and panel replacement using OEM parts wherever possible." },
  { Icon: PaintBucket, title: "Refinishing & paint", copy: "Computerized color matching and downdraft paint booths for a factory-quality finish that lasts." },
  { Icon: Car, title: "Frame straightening", copy: "Laser-measured frame and unibody alignment to bring your vehicle back to manufacturer spec." },
  { Icon: Sparkles, title: "Dent & scratch repair", copy: "Paintless dent removal and precision touch-up work on everything from bumpers to fenders." },
  { Icon: ShieldCheck, title: "Insurance coordination", copy: "As a certified DRP, we speak your insurer's language and manage the paperwork end-to-end." },
  { Icon: FileCheck, title: "Free estimates", copy: "Stop by any weekday for a transparent, no-obligation estimate on your repair." },
];

function Services() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-24 md:py-32">
          <span className="eyebrow text-ice/80">Services</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-primary-foreground max-w-3xl">
            Every repair, done right the first time.
          </h1>
          <p className="mt-6 max-w-xl text-primary-foreground/75 text-lg">
            From bumper scuffs to full collision rebuilds, we bring the same
            care and craftsmanship to every vehicle that comes through our doors.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, copy }) => (
            <div key={title} className="rounded-2xl bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-navy)" }}>
                <Icon className="h-6 w-6 text-ice" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border bg-secondary/60 p-10 md:p-14 grid md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <span className="eyebrow">Insurance</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Certified direct repair shop.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We're a certified direct repair shop for a number of insurance
              companies in the Tri-State area and beyond. If you have questions
              about the carriers we work with, give us a call — we're happy to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="tel:12017914118" className="btn-primary"><Phone className="h-4 w-4" />Call now</a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-navy-deep hover:bg-white transition-colors">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
