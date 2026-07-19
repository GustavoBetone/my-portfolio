"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import type { Experience } from "@/lib/experience";
import type { Lang } from "@/lib/translations";
import { HudCorners } from "./HudCorners";

function tagLabel(tag: string | { en: string; pt: string }, lang: Lang) {
  return typeof tag === "string" ? tag : tag[lang];
}

export function ExperienceCard({ entry, delay = 0 }: { entry: Experience; delay?: number }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="hud-corners relative bg-surface border border-border-soft rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-[border-color,box-shadow] duration-300 hover:border-accent-cyan/40 hover:glow-cyan"
    >
      <HudCorners />
      {entry.image && (
        <div
          className={`relative shrink-0 overflow-hidden min-h-[220px] sm:w-[38%] sm:min-h-[260px] ${
            entry.imageFit === "contain" ? "bg-white" : "bg-background"
          }`}
        >
          <Image
            src={entry.image}
            alt={entry.name}
            fill
            className={entry.imageFit === "contain" ? "object-contain p-8" : "object-cover object-top"}
          />
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-center">
        <div className="hud-label mb-2">{"// " + entry.type[lang].toUpperCase()}</div>
        <div className="font-display text-lg font-bold text-foreground mb-2">{entry.name}</div>
        <p className="text-sm text-muted leading-relaxed mb-4">{entry.desc[lang]}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {entry.stack.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium text-accent-cyan bg-accent-cyan-dim px-2.5 py-0.5 rounded-md"
            >
              {tagLabel(tag, lang)}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {entry.confidential[lang]}
        </span>
      </div>
    </motion.div>
  );
}
