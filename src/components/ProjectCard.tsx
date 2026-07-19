"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Project } from "@/lib/projects";
import type { Lang } from "@/lib/translations";
import { HudCorners } from "./HudCorners";

function tagLabel(tag: string | { en: string; pt: string }, lang: Lang) {
  return typeof tag === "string" ? tag : tag[lang];
}

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { lang, t } = useLanguage();

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotY, { stiffness: 220, damping: 20 });
  const rotateX = useTransform(springX, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rotX.set((e.clientY - rect.top) / rect.height - 0.5);
    rotY.set((e.clientX - rect.left) / rect.width - 0.5);
  };
  const handleMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="hud-corners group relative bg-surface border border-border-soft rounded-2xl overflow-hidden flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-accent-cyan/40 hover:glow-cyan"
    >
      <HudCorners />
      <div
        className={`relative h-[220px] shrink-0 overflow-hidden ${
          project.image && project.imageFit === "contain" ? "bg-white" : "bg-background"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${
              project.imageFit === "contain" ? "object-contain p-6" : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-3xl font-extrabold tracking-wide text-accent-cyan/25">
              {project.placeholderLabel}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="hud-label mb-2">{"// " + project.type[lang].toUpperCase()}</div>
        <div className="font-display text-lg font-bold text-foreground mb-2">{project.name}</div>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.desc[lang]}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium text-accent-cyan bg-accent-cyan-dim px-2.5 py-0.5 rounded-md"
            >
              {tagLabel(tag, lang)}
            </span>
          ))}
        </div>
        {project.link.kind === "external" ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan w-fit transition-[gap] hover:gap-2.5"
          >
            {t.projects.visit}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            {project.link.label[lang]}
          </span>
        )}
      </div>
    </motion.div>
  );
}
