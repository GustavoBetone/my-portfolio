export const WHATSAPP_NUMBER = "5511934221504";

export function buildWhatsAppLink(message?: string) {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const LINKS = {
  upwork: "https://www.upwork.com/freelancers/~gustavobetone",
  github: "https://github.com/GustavoBetone",
  email: "gustavo.betone@gmail.com",
  domPerfumes: "https://domperfumes.com.br",
  korza: "https://korza-wine.vercel.app/",
};

/**
 * TODO: preencher com a URL do site próprio do Lazora quando entrar no ar.
 * Enquanto for null, a seção Serviços manda o visitante pro contato e o card
 * em Negócios mostra "site em breve" no lugar de um link quebrado. Preencher
 * aqui é a única mudança necessária, os dois pontos passam a apontar sozinhos.
 */
export const LAZORA_URL: string | null = null;

export const SITE = {
  name: "e0lazy",
  title: "e0lazy, Gustavo Betone, empreendedor multi-negócios",
  description:
    "Empreendedor que aprende rápido e constrói em público, de e-commerce a automação, mostrando o processo real de tocar vários negócios ao mesmo tempo.",
  url: "https://gustavo-betone-dev.vercel.app",
};
