"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

type Project = {
  title: string;
  category: string;
  year: string;
  /** Flat editorial color used until real project stills are added. */
  surface: string;
  span: "wide" | "tall" | "normal";
};

const PROJECTS: Project[] = [
  {
    title: "Aurelia — The Atelier Film",
    category: "Brand Film · Direction",
    year: "2025",
    surface: "bg-[#2b160b]",
    span: "wide",
  },
  {
    title: "Nokterne",
    category: "Music Video",
    year: "2025",
    surface: "bg-[#1f1f1d]",
    span: "normal",
  },
  {
    title: "Field Notes",
    category: "Documentary Series",
    year: "2024",
    surface: "bg-[#24160d]",
    span: "tall",
  },
  {
    title: "Vantage Mobility",
    category: "Commercial · Motion",
    year: "2024",
    surface: "bg-[#191918]",
    span: "normal",
  },
  {
    title: "Solstice Festival",
    category: "Live Capture",
    year: "2024",
    surface: "bg-[#33180a]",
    span: "wide",
  },
];

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
              Recent frames
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="link-underline font-display text-sm uppercase tracking-[0.2em] text-fg/70"
            >
              Request the full reel →
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
                  <div className="flex items-start justify-between">
                    <span className="text-xs uppercase tracking-[0.22em] text-fg/55">
                      {p.category}
                    </span>
                    <span className="font-display text-xs tracking-[0.2em] text-fg/40">
                      {p.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl uppercase leading-tight md:text-4xl">
                      {p.title}
                    </h3>
                    <motion.span
                      variants={{ hover: { opacity: 1, x: 0 } }}
                      initial={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-accent"
                    >
                      View project →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
