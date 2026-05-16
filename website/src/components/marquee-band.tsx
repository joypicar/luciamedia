const WORDS = [
  "Direction",
  "Cinematography",
  "Motion",
  "Photography",
  "Colour",
  "Sound",
  "Story",
];

/** Pure-CSS scrolling band — a cinematic divider between sections. */
export function MarqueeBand() {
  const run = [...WORDS, ...WORDS];
  return (
    <div className="section-dark overflow-hidden border-y border-line py-8 md:py-10">
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {run.map((w, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center font-display text-3xl uppercase tracking-tight text-fg/70 md:text-5xl"
              >
                <span className="px-8 md:px-12">{w}</span>
                <span className="text-accent">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
