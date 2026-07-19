"use client";

import { useLanguage } from "@/lib/language-context";
import { experience } from "@/lib/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-accent-cyan" />
            {t.experience.label}
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            {t.experience.title}
          </h2>
          <p className="text-base text-muted max-w-[480px]">{t.experience.sub}</p>
        </div>

        <div className="flex flex-col gap-6">
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.slug} entry={entry} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
