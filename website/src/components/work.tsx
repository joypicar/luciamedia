"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

type Project = {
  title: string;
  category: string;
  note: string;
  /** Flat editorial color used until real project stills are added. */
  surface: string;
  span: "wide" | "tall" | "normal";
};

const PROJECTS: Project[] = [
  {
    title: "Malamaya (The Color of Ash)",
    category: "Feature Film",
    note: "Directed and produced by Danica Sta. Lucia; finalist at the 15th Cinemalaya Film Festival in 2019.",
    surface: "bg-[#2b160b]",
    span: "wide",
  },
  {
    title: "A Short History of a Few Bad Things",
    category: "Feature Film",
    note: "Keith Deligero's feature received a special jury award at Cinema One Originals.",
    surface: "bg-[#1f1f1d]",
    span: "normal",
  },
  {
    title: "Babylon",
    category: "Short Film",
    note: "Winner of Best Film at QCinema International Film Festival and competitor at the 2018 Berlinale.",
    surface: "bg-[#24160d]",
    span: "tall",
  },
  {
    title: "Days Of The New",
    category: "Short Film",
    note: "Premiered at the Bucheon International Fantastic Film Festival in South Korea.",
    surface: "bg-[#191918]",
    span: "normal",
  },
  {
    title: "Sample Works",
    category: "Reel",
    note: "Danica and Keith sample works available on request. Links to follow.",
    surface: "bg-[#33180a]",
    span: "wide",
  },
];

const CLIENTS = ["Thales", "Microsoft", "Google Cloud", "Google Workspace", "World Bank Philippines", "Globe Telecom", "Engie", "NEC", "5:00 Films"];

const spanClass: Record<Project["span"], string> = {
  wide: "md:col-span-2 aspect-[16/10] md:aspect-[2/1]",
  tall: "md:row-span-2 aspect-[4/5] md:aspect-auto",
  normal: "aspect-[4/3]",
};

export function Work() {
  return (
    <section
      id="work"
      className="section-dark relative border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow mb-6">Selected Work</p>
            <h2 className="text-section font-display uppercase">
              Works
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="link-underline font-display text-sm uppercase tracking-[0.2em] text-fg/70"
            >
              Request sample works →
            </a>
          </Reveal>
        </div>

        <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 0.07}
              className={p.span === "tall" ? "md:row-span-2" : ""}
            >
              <motion.a
                href="#contact"
                whileHover="hover"
                className={`group relative block w-full overflow-hidden ${spanClass[p.span]}`}
              >
                <div className={`absolute inset-0 ${p.surface}`} />
                <motion.div
                  variants={{ hover: { scale: 1.03 } }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                />

                <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs uppercase tracking-[0.22em] text-fg/55">
                      {p.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl uppercase leading-tight md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg/60 md:text-base">
                      {p.note}
                    </p>
                    <motion.span
                      variants={{ hover: { opacity: 1, x: 0 } }}
                      initial={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-accent"
                    >
                      Inquire →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-24 border-t border-line pt-10">
            <p className="eyebrow mb-8">Clients</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-xl leading-none text-fg/70 md:text-3xl">
              {CLIENTS.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
