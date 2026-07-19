"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function KineticHeadline({ lines }: { lines: string[] }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="font-display text-[clamp(2.8rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground mb-5"
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          {line.split(" ").map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`inline-block mr-[0.28em] ${
                lineIdx === lines.length - 1 && i === line.split(" ").length - 1
                  ? "bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
