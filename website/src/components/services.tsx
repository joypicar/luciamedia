import { Reveal } from "./reveal";

const SERVICES = [
  {
    no: "01",
    title: "Film & Video Production",
    copy: "Brand films, commercials and documentary. Concept, crew and camera — directed end to end.",
  },
  {
    no: "02",
    title: "Motion & Animation",
    copy: "Title sequences, 2D/3D motion and design systems that move. Story told in frames per second.",
  },
  {
    no: "03",
    title: "Photography",
    copy: "Campaign, product and editorial stills shot alongside motion, so the look stays one look.",
  },
  {
    no: "04",
    title: "Creative Direction",
    copy: "The idea before the camera. Positioning, narrative and art direction for the whole campaign.",
  },
  {
    no: "05",
    title: "Post & Colour",
    copy: "Edit, sound design, original score and a finishing grade — the polish that earns the play.",
  },
  {
    no: "06",
    title: "Live & Events",
    copy: "Multi-cam capture and same-day edits for launches, performances and broadcast moments.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-light relative border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow mb-6">What we do</p>
            <h2 className="text-section font-display uppercase">
              Capabilities
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              One studio, the full pipeline. Engage us for a single craft or
              the whole production.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden bg-bg-soft p-10 md:p-12">
                <span className="font-display text-sm tracking-[0.2em] text-accent">
                  {s.no}
                </span>
                <h3 className="mt-8 font-display text-2xl uppercase leading-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-fg/60">
                  {s.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
