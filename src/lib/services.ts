import { LAZORA_URL } from "./config";

export type ServiceIcon = "site" | "ai";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  name: string;
  /** O que resolve pro cliente, em uma frase. */
  pitch: string;
  /** Case real já entregue, para provar que não é vitrine vazia. */
  proof: { label: string; href: string | null };
  tags: string[];
  cta: { label: string; href: string; external: boolean };
};

/**
 * Nunca colocar preço aqui. O CTA é sempre orçamento ou conversa,
 * a faixa de valor sai no privado, caso a caso.
 */
export const services: Service[] = [
  {
    slug: "landing-pages",
    icon: "site",
    name: "Landing Pages e Sites",
    pitch:
      "Site ou landing page de conversão construída sob demanda, do briefing ao ar. Prompt engineering com Claude Code no lugar de agência, então o prazo é de dias e a página nasce rápida, acessível e pronta pra receber tráfego pago.",
    proof: {
      label: "GiGi Variedades",
      href: "https://gi-gi-variedades.vercel.app/",
    },
    tags: ["Next.js", "Tailwind", "SEO técnico", "Vercel"],
    cta: { label: "Solicitar orçamento", href: "#contact", external: false },
  },
  {
    slug: "lazora",
    icon: "ai",
    name: "Lazora",
    pitch:
      "Foto de cardápio gerada por IA pra quem vende comida e não tem verba de estúdio. Cada prato vira imagem pronta pro app de delivery e pro Instagram, sem sessão de fotos, sem fotógrafo, sem esperar semana.",
    proof: { label: "CQ Sabe Lanches", href: null },
    tags: ["IA Generativa", "Cardápio Digital", "Delivery"],
    cta: LAZORA_URL
      ? { label: "Conhecer o Lazora", href: LAZORA_URL, external: true }
      : { label: "Solicitar orçamento", href: "#contact", external: false },
  },
];
