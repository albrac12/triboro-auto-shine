import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Star, Wrench, Sparkles, ArrowRight, Phone, Award, Clock } from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import servicePaint from "@/assets/service-paint.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auto Body Shop Fair Lawn NJ | Tri-Boro Auto Body — Collision Repair" },
      { name: "description", content: "Bergen County's trusted auto body shop since 1982. Free estimates, A+ BBB, factory-quality collision repair & paint. Call (201) 791-4118." },
      { property: "og:title", content: "Tri-Boro Auto Body — Collision Repair in Fair Lawn, NJ" },
      { property: "og:description", content: "Bergen County's favorite family-owned collision shop since 1982. A+ BBB, near-perfect Google reviews, direct insurance work." },
      { property: "og:url", content: "https://triboro-auto-shine.lovable.app/" },
      { property: "og:image", content: "https://triboro-auto-shine.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: "Tri-Boro Auto Body — Collision Repair in Fair Lawn, NJ" },
      { name: "twitter:description", content: "Family-owned collision repair since 1982. A+ BBB rated." },
      { name: "twitter:image", content: "https://triboro-auto-shine.lovable.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://triboro-auto-shine.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://triboro-auto-shine.lovable.app/",
          name: "Tri-Boro Auto Body",
          publisher: { "@id": "https://triboro-auto-shine.lovable.app/#business" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HIRING BANNER */}
      <Link
        to="/work-with-us"
        className="block bg-accent text-accent-foreground hover:opacity-95 transition-opacity"
      >
        <div className="container-x flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-3 text-center text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-current animate-pulse" />
            We're hiring!
          </span>
          <span className="opacity-90 font-medium">
            Join the our team — Work with us <ArrowRight className="inline h-3.5 w-3.5" />
          </span>
        </div>
      </Link>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroShop}
          alt="Modern collision repair shop interior with a luxury car"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-x relative py-28 md:py-40">
          <span className="eyebrow text-ice/80">Fair Lawn, NJ · Since 1982</span>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.05]">
            Bergen County's favorite collision shop.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Family-owned since 1982. We work directly with your insurance company
            to bring your car back to factory condition — at the best price to you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="tel:12017914118" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-colors hover:opacity-90" style={{ background: "var(--ice)", color: "var(--navy-deep)" }}>
              <Phone className="h-4 w-4" /> (201) 791-4118
            </a>
            <Link to="/contact" className="btn-outline">
              Get a free estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-primary-foreground/15 pt-8">
            {[
              { k: "40+", v: "Years in business" },
              { k: "A+", v: "BBB rating" },
              { k: "5★", v: "Google reviews" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl md:text-4xl text-primary-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
          <div>
            <span className="eyebrow">About the shop</span>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Personal connections, factory-quality repairs.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With an A+ rating on the Better Business Bureau, a near-perfect
              Google Review rating, and decades of customer referrals, our
              reputation speaks for itself. For over 40 years we've been making
              personal connections with each customer who walks through our door.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-accent">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: ShieldCheck, t: "BBB A+ Rated", d: "Accredited & trusted." },
              { Icon: Star, t: "5-Star Reviews", d: "Loved by neighbors." },
              { Icon: Award, t: "Certified DRP", d: "Direct insurance shop." },
              { Icon: Clock, t: "Since 1982", d: "40+ years strong." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <Icon className="h-6 w-6 text-accent" />
                <div className="mt-4 font-display text-lg">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-secondary/60 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 text-3xl md:text-5xl max-w-xl">Complete collision & refinishing services.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-accent">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              image={serviceRepair}
              icon={Wrench}
              title="Collision repair"
              copy="Frame straightening, panel replacement, and structural repair on all makes and models."
            />
            <ServiceCard
              image={servicePaint}
              icon={Sparkles}
              title="Refinishing & paint"
              copy="Computerized color matching and factory-grade paint booths for a flawless finish."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Insurance coordination"
              copy="We handle the paperwork and speak with your insurer directly, so you don't have to."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground" style={{ background: "var(--gradient-navy)" }}>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl text-primary-foreground">Ready when you are.</h2>
            <p className="mt-4 text-primary-foreground/75">
              Stop in for a free estimate or give us a call. We're open Monday
              through Friday, 7:30am to 5:00pm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:12017914118" className="inline-flex items-center gap-2 rounded-full bg-ice px-6 py-3 font-semibold text-navy-deep hover:bg-white transition-colors">
                <Phone className="h-4 w-4" /> (201) 791-4118
              </a>
              <Link to="/contact" className="btn-outline">Directions & hours</Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, var(--steel) 0%, transparent 70%)", opacity: 0.35 }} />
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  image,
  icon: Icon,
  title,
  copy,
}: {
  image?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  copy: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
      {image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] flex items-center justify-center" style={{ background: "var(--gradient-navy)" }}>
          <Icon className="h-16 w-16 text-ice/70" />
        </div>
      )}
      <div className="p-7">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="mt-3 font-display text-xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
      </div>
    </article>
  );
}
