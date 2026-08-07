"use client";

import { motion } from "framer-motion";
import { services, type ServiceIcon } from "@/lib/services";

const icons: Record<ServiceIcon, React.ReactNode> = {
  site: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M2 9h20" />
      <circle cx="5.5" cy="6" r="0.6" fill="currentColor" />
      <circle cx="8" cy="6" r="0.6" fill="currentColor" />
      <path d="M7 13h10M7 17h6" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M3 17l4.5-4.5L12 17" />
      <path d="M14 20l2.6-6 2.6 6" />
      <path d="M15.1 18h3" />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-6 border-y border-border-soft">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="hud-label inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-signal" />
            Serviços
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2">
            O que eu construo pra você
          </h2>
          <p className="text-base text-muted max-w-[520px]">
            Duas frentes que eu vendo hoje, as duas com cliente pagante rodando. Me chama que eu monto o orçamento em cima do seu caso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-surface border border-border-soft rounded-2xl p-7 flex flex-col transition-all hover:border-signal/40 hover:-translate-y-1 hover:glow-signal"
            >
              <div className="w-11 h-11 bg-signal-dim rounded-xl flex items-center justify-center mb-4 text-signal [&>svg]:w-[22px] [&>svg]:h-[22px]">
                {icons[service.icon]}
              </div>

              <div className="font-display text-lg font-bold text-foreground mb-2">{service.name}</div>
              <p className="text-sm text-muted leading-relaxed mb-4">{service.pitch}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-signal-text bg-signal-dim px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-border-soft flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted">
                  <span className="hud-label">Case real</span>{" "}
                  {service.proof.href ? (
                    <a
                      href={service.proof.href}
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-foreground underline decoration-border-soft underline-offset-4 hover:decoration-signal transition-colors"
                    >
                      {service.proof.label}
                    </a>
                  ) : (
                    <span className="font-semibold text-foreground">{service.proof.label}</span>
                  )}
                </p>

                <a
                  href={service.cta.href}
                  {...(service.cta.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-signal text-background hover:brightness-110 transition-all"
                >
                  {service.cta.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
