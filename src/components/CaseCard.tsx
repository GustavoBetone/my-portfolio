"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import type { Case } from "@/lib/cases";
import { HudCorners } from "./HudCorners";

/**
 * Faixa de sinalização sobre a screenshot.
 * Aparece só quando o case está com `emProducao: true` em src/lib/cases.ts,
 * ou seja, site publicado ou pronto tecnicamente mas ainda em ajuste com o
 * cliente. Para remover, trocar o campo para false lá, não mexer aqui.
 */
function FaixaEmProducao() {
  return (
    // 68% e não 50%: no meio a faixa cobre justamente o logo do cliente,
    // que é o que identifica o case. No terço inferior ela sobra sozinha.
    <div
      className="absolute inset-x-0 top-[68%] z-10 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        className="flex h-11 w-full items-center justify-center border-y-2 border-black/80 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.8)] sm:h-12"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0a0a0a 0 16px, #facc15 16px 32px)",
        }}
      >
        <span className="bg-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#facc15] sm:px-4 sm:text-[11px] sm:tracking-[0.32em]">
          Em produção
        </span>
      </div>
    </div>
  );
}

export function CaseCard({
  caseItem,
  delay = 0,
}: {
  caseItem: Case;
  delay?: number;
}) {
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

  const publicado =
    caseItem.link.kind === "external" && caseItem.link.status === "live";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative bg-surface border border-border-soft rounded-2xl overflow-hidden flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-signal/40 ${
        publicado ? "hud-corners hover:glow-signal" : ""
      }`}
    >
      {publicado && <HudCorners />}

      <div
        className={`relative h-[220px] shrink-0 overflow-hidden ${
          caseItem.image && caseItem.imageFit === "contain"
            ? "bg-white"
            : "bg-background"
        }`}
      >
        {caseItem.image ? (
          <Image
            src={caseItem.image}
            alt={`Hero da landing page da ${caseItem.cliente}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={`transition-transform duration-500 group-hover:scale-[1.03] ${
              caseItem.imageFit === "contain"
                ? "object-contain p-6"
                : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-3xl font-extrabold tracking-wide text-signal-text/25">
              {caseItem.cliente}
            </span>
          </div>
        )}

        {caseItem.emProducao && <FaixaEmProducao />}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="hud-label mb-2">{"// " + caseItem.tipo.toUpperCase()}</div>
        <div className="font-display text-lg font-bold text-foreground mb-2">
          {caseItem.cliente}
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {caseItem.desc}
        </p>

        {caseItem.link.kind === "external" ? (
          <a
            href={caseItem.link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal-text w-fit transition-[gap] hover:gap-2.5"
          >
            Ver o site
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {caseItem.link.label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
