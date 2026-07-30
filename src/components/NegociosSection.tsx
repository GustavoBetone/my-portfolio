"use client";

import { negocios } from "@/lib/negocios";
import { ProjectCard } from "./ProjectCard";

export function NegociosSection() {
  return (
    <section id="negocios" className="py-24 px-6 bg-background-raised/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-signal" />
            Negócios
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            Negócios que eu construí
          </h2>
          <p className="text-base text-muted max-w-[520px]">
            Não são projetos de cliente numa vitrine. São frentes reais que eu toco ao mesmo tempo, com receita e problema de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {negocios.map((negocio, i) => (
            <ProjectCard key={negocio.slug} project={negocio} delay={i * 0.06} locale="pt" />
          ))}
        </div>
      </div>
    </section>
  );
}
