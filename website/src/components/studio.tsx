import { Reveal } from "./reveal";

const STATS = [
  { value: "9 yrs", label: "Behind the lens" },
  { value: "120+", label: "Films delivered" },
  { value: "30+", label: "Brands & studios" },
  { value: "4", label: "Continents shot" },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="section-light relative border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow mb-12">The Studio</p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-section font-display uppercase">
                We&apos;re named for{" "}
                <span className="text-accent">light</span> — because
                that&apos;s what we shape.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-fg/70">
                Lucia is a small studio with a wide range. We move between
                cinema-grade production and nimble social work without losing
                the craft — directing, shooting, scoring and grading every
                frame in-house. The result is work that feels considered, never
                templated.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pt-2">
            <Reveal delay={0.15}>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                We partner with brands, agencies and artists from first
                conversation to final master — and we keep the room small so
                the idea stays loud.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-bg-soft p-8 md:p-10">
                <p className="font-display text-4xl text-fg md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
