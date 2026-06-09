import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-light relative border-t border-line px-6 py-28 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow mb-10">Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-hero font-display uppercase">
            Illuminate
            <br />
            your
            <br />
            <span className="text-accent">story.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-line pt-12 md:grid-cols-3">
          <Reveal>
            <p className="eyebrow mb-4">New projects</p>
            <a
              href="mailto:hello@luciamultimedia.com"
              className="link-underline text-xl text-fg md:text-2xl"
            >
              hello@luciamultimedia.com
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Studio</p>
            <p className="text-xl leading-relaxed text-fg/70 md:text-2xl">
              Manila, Philippines
              <br />
              <span className="text-muted">Producing worldwide</span>
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-2 text-xl text-fg/70 md:text-2xl">
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Vimeo", href: "https://vimeo.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
