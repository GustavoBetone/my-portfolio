"use client";

import { useLanguage } from "@/lib/language-context";
import { skills } from "@/lib/skills";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 px-6 bg-background-raised/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-accent-cyan" />
            {t.skills.label}
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            {t.skills.title}
          </h2>
          <p className="text-base text-muted max-w-[480px]">{t.skills.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.slug} skill={skill} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
