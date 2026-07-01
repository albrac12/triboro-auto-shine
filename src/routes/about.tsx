import { createFileRoute } from "@tanstack/react-router";
import aboutShop from "@/assets/about-shop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tri-Boro Auto Body" },
      { name: "description", content: "Family-owned and operated in Fair Lawn, NJ since 1982. Meet the shop Bergen County trusts for collision repair." },
      { property: "og:title", content: "About — Tri-Boro Auto Body" },
      { property: "og:description", content: "Over 40 years of family-owned collision repair in Bergen County." },
      { property: "og:image", content: aboutShop },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pt-16 md:pt-24">
        <span className="eyebrow">About Tri-Boro</span>
        <h1 className="mt-4 text-4xl md:text-6xl max-w-3xl">
          Resourceful. Timely. Family owned & operated.
        </h1>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={aboutShop}
            alt="Exterior of Tri-Boro Auto Body shop at dusk"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
        </div>
      </section>

      <section className="container-x pb-24 grid gap-16 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Tri-Boro Auto Body has been serving Bergen County families since 1982.
            What started as a small neighborhood shop has grown into one of the
            area's most trusted collision centers — but the values haven't
            changed. We're still family owned and operated, and we still treat
            every customer like a neighbor.
          </p>
          <p>
            Our reputation is built on three things: honest estimates, meticulous
            craftsmanship, and getting you back on the road quickly. With an A+
            BBB rating and a near-perfect Google review score, our neighbors have
            said it better than we could — but we won't stop earning it.
          </p>
          <p>
            Whether it's a fender-bender or a full structural rebuild, we work
            with you (and your insurance company) to bring your car back to
            factory condition at the best price to you.
          </p>
        </div>
        <aside className="rounded-2xl bg-secondary/60 p-8 h-fit">
          <h3 className="font-display text-xl">At a glance</h3>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              ["Founded", "1982"],
              ["Location", "Fair Lawn, NJ"],
              ["BBB Rating", "A+"],
              ["Ownership", "Family owned"],
              ["Specialty", "Collision & refinishing"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-semibold text-navy-deep">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </>
  );
}
