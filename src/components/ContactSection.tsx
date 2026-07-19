"use client";

import { useLanguage } from "@/lib/language-context";
import { LINKS, buildWhatsAppLink } from "@/lib/config";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-background-raised to-background border-y border-border-soft">
      <div className="max-w-6xl mx-auto">
        <span className="hud-label inline-flex items-center gap-2 mb-4">
          <span className="w-4 h-px bg-accent-cyan" />
          {t.contact.label}
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
          {t.contact.titleLines[0]}
          <br />
          {t.contact.titleLines[1]}
        </h2>
        <p className="text-base text-muted max-w-[480px] mb-10">{t.contact.sub}</p>

        <div className="flex gap-3.5 flex-wrap">
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[15px] font-semibold px-6 py-3.5 rounded-lg bg-accent-cyan text-background hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
            {t.hero.ctaHire}
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg border border-border-soft text-foreground hover:border-accent-cyan/40 hover:bg-accent-cyan-dim transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {LINKS.email}
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3.5 rounded-lg border border-border-soft text-foreground hover:border-accent-cyan/40 hover:bg-accent-cyan-dim transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
