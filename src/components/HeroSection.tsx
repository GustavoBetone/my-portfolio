"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KineticHeadline } from "./KineticHeadline";
import { HudCorners } from "./HudCorners";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

function scrollToTrajetoria() {
  document.getElementById("trajetoria")?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,.10) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 80% at 75% 50%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 80% at 75% 50%, black 0%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <div className="text-center md:text-left">
            <KineticHeadline lines={["É o Lazy."]} />

            <motion.p
              variants={heroItem}
              className="text-[1.0625rem] text-muted max-w-lg mx-auto md:mx-0 mb-9 leading-relaxed"
            >
              Empreendedor que aprende rápido e constrói em público, de e-commerce a automação. Mostro
              o processo real de tocar vários negócios ao mesmo tempo, sem economês e sem fórmula
              mágica.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex gap-3.5 flex-wrap justify-center md:justify-start"
            >
              <a
                href="#negocios"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold px-7 py-3.5 rounded-lg bg-signal text-background hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Ver negócios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <button
                type="button"
                onClick={scrollToTrajetoria}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium px-7 py-3.5 rounded-lg border border-border-soft text-foreground hover:border-signal/40 hover:bg-signal-dim transition-colors"
              >
                Ver trajetória
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={heroItem}
            className="flex flex-col items-center gap-3 relative order-first md:order-last"
          >
            <button
              type="button"
              onClick={scrollToTrajetoria}
              aria-label="Ver trajetória"
              className="hud-corners relative w-[220px] sm:w-[280px] md:w-80 rounded-3xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <HudCorners />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border-soft">
                <Image
                  src="/assets/img/minha_foto.jpg"
                  alt="Gustavo Betone, o Lazy"
                  fill
                  sizes="(max-width: 768px) 220px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </button>
            <div className="hud-label">{"> clique na foto pra ver a trajetória"}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
