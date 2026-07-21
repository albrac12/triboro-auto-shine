import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: "Careers — Work With Us | Tri-Boro Auto Body" },
      { name: "description", content: "Open positions at Tri-Boro Auto Body in Fair Lawn, NJ. View job listings for auto body technicians, painters, and estimators." },
      { property: "og:title", content: "Careers at Tri-Boro Auto Body" },
      { property: "og:description", content: "We're hiring! Join a family-owned collision shop trusted by Bergen County since 1982." },
      { property: "og:url", content: "https://triboro-auto-shine.lovable.app/work-with-us" },
    ],
    links: [{ rel: "canonical", href: "https://triboro-auto-shine.lovable.app/work-with-us" }],
  }),
  component: WorkWithUs,
});

type Position = {
  title: string;
  type: string;
  location: string;
  pay: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const positions: Position[] = [
  {
    title: "Paint Prep Technician",
    type: "Full-time",
    location: "Fair Lawn, NJ (on-site)",
    pay: "$20–$30/hr · based on experience",
    summary:
      "Prepare vehicle surfaces for high-quality refinishing in a professional, family-owned shop.",
    responsibilities: [
      "Prepare vehicle surfaces by cleaning, sanding, and applying masking to ensure optimal paint adhesion and finish quality",
      "Use hand tools, grinders, sanders, and power tools to remove old paint, rust, and imperfections from vehicle bodies",
      "Set up and operate spray guns for conventional spraying and airless paint spraying to apply primer, base coats, and clear coats with precision",
      "Perform surface preparation masking to protect areas not intended for painting during the coating process",
      "Inspect finished surfaces for defects and perform touch-ups to ensure a flawless final result",
    ],
    requirements: [
      "Experience with automotive surface preparation and refinishing techniques",
      "Expertise in auto painting including surface prep, masking, sanding, and spray gun operation",
      "Knowledge of automotive paints, coatings, primers, and finishing products along with proper application methods",
      "Ability to work safely with chemicals and follow shop safety and PPE standards",
    ],
  },
];

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
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl">Open positions</h2>
          <span className="text-sm text-muted-foreground">{positions.length} roles available</span>
        </div>

        <div className="mt-8 space-y-6">
          {positions.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl bg-card p-7 md:p-9"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-accent" /> {p.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-accent" /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-accent" /> {p.pay}
                    </span>
                  </div>
                </div>
                <a
                  href="tel:12017914118"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Apply now
                </a>
              </div>

              <p className="mt-5 text-muted-foreground leading-relaxed">{p.summary}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-display text-base">Responsibilities</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {p.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-base">Requirements</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {p.requirements.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground inline-flex items-center gap-2">
          <Clock className="h-4 w-4" /> Shop hours: Mon–Fri, 7:30am–5:00pm
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground" style={{ background: "var(--gradient-navy)" }}>
          <h2 className="text-3xl md:text-4xl text-primary-foreground">Don't see your role?</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We're always interested in meeting skilled people. Call the shop or stop in with your resume.
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

