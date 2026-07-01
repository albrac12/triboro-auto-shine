import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tri-Boro Auto Body" },
      { name: "description", content: "Visit Tri-Boro Auto Body at 5-35 Saddle River Rd, Fair Lawn, NJ. Call (201) 791-4118 for a free collision repair estimate." },
      { property: "og:title", content: "Contact — Tri-Boro Auto Body" },
      { property: "og:description", content: "Get directions, hours, and a free repair estimate. Fair Lawn, NJ." },
    ],
  }),
  component: Contact,
});

const hours = [
  ["Monday", "7:30am – 5:00pm"],
  ["Tuesday", "7:30am – 5:00pm"],
  ["Wednesday", "7:30am – 5:00pm"],
  ["Thursday", "7:30am – 5:00pm"],
  ["Friday", "7:30am – 5:00pm"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
];

function Contact() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-24 md:py-28">
          <span className="eyebrow text-ice/80">Get in touch</span>
          <h1 className="mt-4 text-4xl md:text-6xl text-primary-foreground max-w-3xl">
            Stop by, or give us a call.
          </h1>
          <p className="mt-5 max-w-xl text-primary-foreground/75 text-lg">
            Free estimates, honest answers, and a shop that treats you like a neighbor.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-10 md:grid-cols-3">
        <InfoCard Icon={MapPin} title="Address">
          <a
            href="https://maps.google.com/?q=5-35+Saddle+River+Road+Fair+Lawn+NJ+07410"
            target="_blank" rel="noreferrer"
            className="hover:text-accent"
          >
            5-35 Saddle River Road<br />Fair Lawn, NJ 07410
          </a>
        </InfoCard>
        <InfoCard Icon={Phone} title="Phone">
          <a href="tel:12017914118" className="hover:text-accent">(201) 791-4118</a>
        </InfoCard>
        <InfoCard Icon={Mail} title="Estimates">
          Walk-ins welcome<br />Mon–Fri during business hours
        </InfoCard>
      </section>

      <section className="container-x pb-20 grid gap-10 md:grid-cols-[1fr_1.4fr] items-start">
        <div className="rounded-2xl bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent" />
            <h2 className="font-display text-2xl">Hours</h2>
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between border-b border-border pb-2 last:border-0">
                <dt className="text-muted-foreground">{day}</dt>
                <dd className="font-semibold text-navy-deep">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
          <iframe
            title="Tri-Boro Auto Body location map"
            src="https://www.google.com/maps?q=5-35+Saddle+River+Road+Fair+Lawn+NJ+07410&output=embed"
            loading="lazy"
            className="w-full h-[420px] md:h-[520px] border-0"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
      <Icon className="h-6 w-6 text-accent" />
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
