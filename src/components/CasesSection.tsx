"use client";

import { cases } from "@/lib/cases";
import { CaseCard } from "./CaseCard";

export function CasesSection() {
  return (
    <section id="cases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-signal" />
            Cases
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            Cases de clientes reais
          </h2>
          <p className="text-base text-muted max-w-[560px]">
            Landing pages que eu entreguei pra cliente daqui, dentro do serviço
            de Landing Pages e Sites. Não são negócios meus nem trabalho de
            Upwork, são páginas feitas sob medida pra um negócio existente
            vender mais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.slug} caseItem={caseItem} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
