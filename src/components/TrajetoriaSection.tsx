"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { trajetoria } from "@/lib/trajetoria";

type Point = { x: number; y: number };

function buildPoints(
  count: number,
  centerX: number,
  step: number,
  amplitude: number,
  marginY: number,
): Point[] {
  return Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? centerX - amplitude : centerX + amplitude,
    y: marginY + i * step,
  }));
}

/**
 * Control points blend horizontal drift in early so the curve leaves each
 * anchor on a diagonal instead of straight up/down — a purely vertical
 * tangent at the anchor keeps the curve hugging the marker's own text
 * column (which sits only a fixed gap away) and reads as "crossing" it.
 */
function buildSmoothPath(points: Point[]): string {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;
    const c1 = { x: p0.x + dx * 0.2, y: p0.y + dy * 0.55 };
    const c2 = { x: p1.x - dx * 0.2, y: p1.y - dy * 0.55 };
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

/**
 * `clearance` é o respiro entre o extremo da curva e a coluna de texto, em
 * unidades do viewBox. Ele precisa viver no mesmo espaço de coordenadas da
 * amplitude: o SVG usa preserveAspectRatio="none", então o eixo x escala com a
 * largura do track. Um respiro em px fixo encolhe proporcionalmente conforme a
 * tela cresce e a curva acaba invadindo o texto nas telas maiores.
 */
const DESKTOP = { width: 1000, centerX: 500, step: 260, amplitude: 210, marginY: 90, clearance: 30 };
const MOBILE = { width: 320, centerX: 46, step: 260, amplitude: 16, marginY: 90, clearance: 20 };

function TrajetoriaTrack({
  config,
  pathLength,
  textSide,
}: {
  config: typeof DESKTOP;
  pathLength: number | ReturnType<typeof useSpring>;
  textSide: "alternate" | "right";
}) {
  const { width, centerX, step, amplitude, marginY, clearance } = config;
  const height = marginY * 2 + (trajetoria.length - 1) * step;
  const points = buildPoints(trajetoria.length, centerX, step, amplitude, marginY);
  const d = buildSmoothPath(points);

  const pct = (units: number) => `${(units / width) * 100}%`;
  // A curva inteira vive entre estes dois extremos, então basta manter o texto
  // fora deles para não haver cruzamento em largura nenhuma.
  const curvaEsquerda = centerX - amplitude;
  const curvaDireita = centerX + amplitude;

  return (
    <div className="relative w-full" style={{ height }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d={d} stroke="var(--border-soft)" strokeWidth={2} />
        <motion.path d={d} stroke="var(--signal)" strokeWidth={2} style={{ pathLength }} />
      </svg>

      {trajetoria.map((milestone, i) => {
        const point = points[i];
        const alignRight = textSide === "right" ? true : point.x > width / 2;

        // O posicionamento fica no wrapper simples, nunca no motion.div: o
        // framer-motion é dono da propriedade `transform` e sobrescreve
        // qualquer translate do autor ao encerrar a animação de entrada.
        const box = alignRight
          ? { left: pct(curvaDireita + clearance), right: 0 }
          : { right: pct(width - (curvaEsquerda - clearance)), left: 0 };

        return (
          <div
            key={milestone.slug}
            className="absolute"
            style={{ ...box, top: `${point.y}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={alignRight ? "text-left" : "text-right"}
            >
              <span className="relative inline-block w-3 h-3 rounded-full bg-signal shrink-0" />
              <div className="hud-label mt-2 mb-2">{milestone.period}</div>
              <div className="wordmark font-display text-base font-bold text-foreground mb-1">{milestone.title}</div>
              <p className="text-sm text-muted leading-relaxed">{milestone.desc}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function TrajetoriaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });
  const pathLength = prefersReducedMotion ? 1 : smoothProgress;

  return (
    <section id="trajetoria" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-signal" />
            Trajetória
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            De onde eu vim até aqui
          </h2>
          <p className="text-base text-muted max-w-[520px]">
            Fatos reais, não frase de efeito. Cada marco é um negócio ou aprendizado que realmente aconteceu.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          <div className="hidden md:block">
            <TrajetoriaTrack config={DESKTOP} pathLength={pathLength} textSide="alternate" />
          </div>
          <div className="md:hidden pl-4">
            <TrajetoriaTrack config={MOBILE} pathLength={pathLength} textSide="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
