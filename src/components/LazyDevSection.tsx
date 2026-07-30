"use client";

import { useLanguage } from "@/lib/language-context";
import { LINKS } from "@/lib/config";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";

export function LazyDevSection() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="lazy-dev" className="border-y border-border-soft bg-background-raised/20">
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
          <div>
            <span className="hud-label inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-signal" />
              {t.lazyDev.label}
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
              {t.lazyDev.title}
            </h2>
            <p className="text-base text-muted max-w-[480px]">{t.lazyDev.sub}</p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1 bg-background-raised border border-border-soft rounded-lg px-2.5 py-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors ${lang === "en" ? "text-signal bg-signal-dim" : "text-muted hover:text-foreground"}`}
              >
                EN
              </button>
              <span className="text-xs text-border-soft">|</span>
              <button
                type="button"
                onClick={() => setLang("pt")}
                className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors ${lang === "pt" ? "text-signal bg-signal-dim" : "text-muted hover:text-foreground"}`}
              >
                PT
              </button>
            </div>
            <a
              href={LINKS.upwork}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-signal text-background hover:brightness-110 transition-all"
            >
              {t.lazyDev.ctaHire}
            </a>
          </div>
        </div>
      </div>

      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
}
