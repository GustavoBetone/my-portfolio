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

export const SITE = {
  name: "Gustavo Betone",
  title: "Gustavo Betone, Fullstack Developer",
  description:
    "Fullstack developer specializing in Angular, Node.js, and scalable e-commerce solutions. Available for new projects.",
  url: "https://gustavo-betone-dev.vercel.app",
};
