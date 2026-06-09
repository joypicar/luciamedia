import Image from "next/image";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="section-dark border-t border-line px-6 pb-12 pt-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <a
            href="#top"
            aria-label="Lucia Multimedia — back to top"
            className="relative block h-9 w-[220px]"
          >
            <Image
              src={`${basePath}/brand/lucia-wordmark-white.png`}
              alt="Lucia Multimedia"
              fill
              sizes="220px"
              className="object-contain object-left"
            />
          </a>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm uppercase tracking-[0.18em] text-fg/70"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 text-xs uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lucia Multimedia — All rights reserved</p>
          <p>Film &amp; Motion Studio · Illuminate your story</p>
        </div>
      </div>
    </footer>
  );
}
