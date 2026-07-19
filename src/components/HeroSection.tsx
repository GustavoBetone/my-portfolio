"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { LINKS, buildWhatsAppLink } from "@/lib/config";
import { KineticHeadline } from "./KineticHeadline";
import { HudCorners } from "./HudCorners";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,229,255,.10) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 80% at 75% 50%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 80% at 75% 50%, black 0%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-accent-cyan-dim border border-border-cyan text-accent-cyan text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full pulse-dot" />
              {t.hero.badge}
            </div>

            <KineticHeadline lines={t.hero.titleLines} />

            <p className="text-[1.0625rem] text-muted max-w-md mx-auto md:mx-0 mb-9 leading-relaxed">
              {t.hero.sub}
            </p>

            <div className="flex gap-3.5 flex-wrap justify-center md:justify-start mb-10">
              <a
                href={LINKS.upwork}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold px-7 py-3.5 rounded-lg bg-accent-cyan text-background hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                {t.hero.ctaHire}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium px-7 py-3.5 rounded-lg border border-border-soft text-foreground hover:border-accent-cyan/40 hover:bg-accent-cyan-dim transition-colors"
              >
                {t.hero.ctaWork}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted py-3.5 px-1.5 hover:text-foreground transition-colors group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {t.hero.ctaWhatsapp}
              </a>
            </div>

            <div className="flex gap-8 items-center justify-center md:justify-start flex-wrap">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[1.375rem] font-bold text-foreground">3+</span>
                <span className="text-[.8rem] text-muted whitespace-nowrap">{t.hero.statYears}</span>
              </div>
              <div className="w-px h-9 bg-border-soft hidden sm:block" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[1.375rem] font-bold text-foreground">5+</span>
                <span className="text-[.8rem] text-muted whitespace-nowrap">{t.hero.statProducts}</span>
              </div>
              <div className="w-px h-9 bg-border-soft hidden sm:block" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[1.375rem] font-bold text-foreground">
                  $35<small className="font-sans text-[.7em] font-normal">/hr</small>
                </span>
                <span className="text-[.8rem] text-muted whitespace-nowrap">{t.hero.statUpwork}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-4 relative order-first md:order-last"
          >
            <div className="hud-corners relative w-[220px] sm:w-[280px] md:w-80">
              <HudCorners />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border-soft">
                <Image
                  src="/assets/img/minha_foto.jpg"
                  alt="Gustavo Betone"
                  fill
                  sizes="(max-width: 768px) 220px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="hud-label mb-1">{"> " + t.hero.hudStatus}</div>

            <div className="w-full max-w-[320px] bg-background-raised border border-border-soft rounded-2xl py-3.5 px-5 flex items-center gap-3.5 whitespace-nowrap glow-cyan">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-accent-cyan-dim">
                <Image src="/assets/img/minha_foto.jpg" alt="GB" fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-sm text-foreground">Gustavo Betone</div>
                <div className="text-xs text-muted">{t.hero.cardRole}</div>
              </div>
              <div className="text-[11px] font-semibold text-green-400 bg-green-400/10 px-2.5 py-0.5 rounded-full shrink-0">
                {t.hero.cardBadge}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
