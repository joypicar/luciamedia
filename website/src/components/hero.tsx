"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // Gentle parallax: the video drifts slower than the page
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={ref}
      id="top"
      style={{ backgroundColor: "#020202" }}
      className="section-dark relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
    >
      {/* Brand reveal film */}
      <motion.div
        style={{ y: reduce ? 0 : videoY }}
        className="absolute left-1/2 top-[44%] z-0 w-[132vw] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[128vw]"
      >
        <video
          className="aspect-video w-full scale-125 object-contain opacity-90"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={`${basePath}/brand/logo-reveal.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic grading: vignette + bottom scrim for type legibility */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_30%,rgba(2,2,2,0.48)_75%,rgba(2,2,2,0.9)_100%)]"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
        {/* Semantic heading kept for SEO/screen readers — the brand-reveal
            film is the visual hero, so the headline isn't shown to avoid
            colliding with the animated wordmark in the video. */}
        <h1 className="sr-only">
          Lucia Multimedia — illuminate your story.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="eyebrow"
        >
          Film&nbsp;&nbsp;·&nbsp;&nbsp;Motion&nbsp;&nbsp;·&nbsp;&nbsp;Story
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-xl text-lg leading-relaxed text-fg/80 md:text-2xl">
            Illuminate your story. Lucia Multimedia crafts film, motion,
            photography and content for brands, institutions and filmmakers.
          </p>
          <a
            href="#work"
            className="link-underline shrink-0 self-start font-display text-sm uppercase tracking-[0.2em] sm:self-auto"
          >
            See the work →
          </a>
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-6 z-20 hidden text-xs uppercase tracking-[0.3em] text-muted md:right-10 md:block"
      >
        Scroll
      </motion.span>
    </section>
  );
}
