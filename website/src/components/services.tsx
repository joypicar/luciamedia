import { Reveal } from "./reveal";

const SERVICES = [
  {
    no: "01",
    title: "Film and Video Production",
    copy: "End-to-end production for films, branded content, corporate video and documentary work.",
  },
  {
    no: "02",
    title: "Motion & Animation",
    copy: "Motion graphics, animated assets and visual systems that help stories move across platforms.",
  },
  {
    no: "03",
    title: "Photography",
    copy: "Editorial, campaign and production photography with a consistent visual point of view.",
  },
  {
    no: "04",
    title: "Creative Direction",
    copy: "Narrative, art direction and creative supervision from early idea to final execution.",
  },
  {
    no: "05",
    title: "Post Production",
    copy: "Editing, finishing and delivery support that brings the material into its strongest final form.",
  },
  {
    no: "06",
    title: "Podcast Production",
    copy: "Production support for audio and video podcasts, from planning through recording and edit.",
  },
  {
    no: "07",
    title: "Script Development & Scriptwriting",
    copy: "Story development, scripting and writing support for films, branded content and campaigns.",
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
              Engage us for one part of the process or the whole pipeline:
              development, production, post and platform-ready delivery.
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
