"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger start, in seconds */
  delay?: number;
  /** Travel distance on the Y axis, in px */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-into-view reveal. Fades + lifts content once, the first time it
 * enters the viewport. Collapses to a plain fade when the user prefers
 * reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
