"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import type { Skill, SkillTag } from "@/lib/skills";
import type { Lang } from "@/lib/translations";

const icons: Record<Skill["icon"], React.ReactNode> = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
};

function tagLabel(tag: SkillTag, lang: Lang) {
  return typeof tag === "string" ? tag : tag[lang];
}

export function SkillCard({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-surface border border-border-soft rounded-2xl p-7 pb-6 transition-all hover:border-accent-cyan/40 hover:-translate-y-1 hover:glow-cyan"
    >
      <div className="w-11 h-11 bg-accent-cyan-dim rounded-xl flex items-center justify-center mb-4 text-accent-cyan [&>svg]:w-[22px] [&>svg]:h-[22px]">
        {icons[skill.icon]}
      </div>
      <div className="font-display text-[1.0625rem] font-bold text-foreground mb-3">{skill.name[lang]}</div>
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium text-muted bg-background border border-border-soft px-2.5 py-1 rounded-md transition-colors hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan-dim"
          >
            {tagLabel(tag, lang)}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
