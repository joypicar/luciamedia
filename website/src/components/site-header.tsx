"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          aria-label="Lucia Multimedia — home"
          className="group shrink-0 font-display text-[0.82rem] uppercase tracking-[0.32em] text-fg transition-opacity hover:opacity-80"
        >
          Lucia Multimedia
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm tracking-wide text-fg/80 transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-display text-xs uppercase tracking-[0.2em] text-bg bg-accent px-5 py-3 transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`block h-px w-7 bg-fg transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-fg transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-bg md:hidden"
          >
            <nav className="flex flex-col px-6 pt-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.5 }}
                  className="border-b border-line py-6 font-display text-3xl uppercase tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-10 bg-accent px-6 py-5 text-center font-display text-sm uppercase tracking-[0.2em] text-bg"
              >
                Start a project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
