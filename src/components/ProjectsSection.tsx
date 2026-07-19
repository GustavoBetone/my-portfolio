"use client";

import { useLanguage } from "@/lib/language-context";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-accent-cyan" />
            {t.projects.label}
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            {t.projects.title}
          </h2>
          <p className="text-base text-muted max-w-[480px]">{t.projects.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
