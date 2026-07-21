import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Wrench, Users, Award } from "lucide-react";

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: "Careers — Work With Us | Tri-Boro Auto Body" },
      { name: "description", content: "Join Tri-Boro Auto Body in Fair Lawn, NJ. We're hiring skilled auto body technicians, painters, and estimators. Apply today." },
      { property: "og:title", content: "Careers at Tri-Boro Auto Body" },
      { property: "og:description", content: "We're hiring! Join a family-owned collision shop trusted by Bergen County since 1982." },
      { property: "og:url", content: "https://triboro-auto-shine.lovable.app/work-with-us" },
    ],
    links: [{ rel: "canonical", href: "https://triboro-auto-shine.lovable.app/work-with-us" }],
  }),
  component: WorkWithUs,
});

function WorkWithUs() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24">
        <span className="eyebrow">Careers</span>
        <h1 className="mt-4 text-4xl md:text-6xl max-w-3xl">
          Work with us.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We're a family-owned collision shop that's been serving Bergen County
          since 1982. If you take pride in your craft and want to grow with a
          team that treats you like family, we'd love to meet you.
        </p>
      </section>

      <section className="container-x py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl">Now hiring</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { Icon: Wrench, t: "Auto Body Technicians", d: "Frame, structural, and panel repair on all makes and models." },
            { Icon: Award, t: "Refinishing Painters", d: "Factory-grade booths and computerized color matching." },
            { Icon: Users, t: "Estimators", d: "Work directly with customers and insurance carriers." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground" style={{ background: "var(--gradient-navy)" }}>
          <h2 className="text-3xl md:text-4xl text-primary-foreground">Ready to apply?</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Call the shop or stop in with your resume. We look forward to hearing from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:12017914118" className="inline-flex items-center gap-2 rounded-full bg-ice px-6 py-3 font-semibold text-navy-deep hover:bg-white transition-colors">
              <Phone className="h-4 w-4" /> (201) 791-4118
            </a>
            <Link to="/contact" className="btn-outline">
              <Mail className="h-4 w-4" /> Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
