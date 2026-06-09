import { Reveal } from "./reveal";

const STATS = [
  { value: "10+", label: "Years in media" },
  { value: "2", label: "Feature films" },
  { value: "7+", label: "Core services" },
  { value: "Global", label: "Client experience" },
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
                Illuminate your <span className="text-accent">story</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-fg/70">
                Lucia Multimedia is a film, video and content production studio
                built for stories that need craft, clarity and momentum. We
                work across concept development, production and post, shaping
                projects for brands, institutions and independent filmmakers.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pt-2">
            <Reveal delay={0.15}>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                From script to screen, the studio pairs production discipline
                with cinematic instincts: strong project management, sharp
                storytelling and a network of collaborators who know how to
                make images carry meaning.
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
