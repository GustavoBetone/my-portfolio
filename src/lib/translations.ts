export type Lang = "en" | "pt";

export const translations = {
  en: {
    nav: {
      skills: "Skills",
      experience: "Experience",
      work: "Work",
      contact: "Contact",
      hire: "Hire me on Upwork",
    },
    hero: {
      badge: "Available for new projects",
      titleLines: ["Fullstack dev", "that ships."],
      sub: "I build high-performance Angular + Node.js applications, from SaaS platforms to e-commerce solutions that scale and convert.",
      ctaHire: "Hire me on Upwork",
      ctaWork: "See my work",
      ctaWhatsapp: "Message me on WhatsApp",
      statYears: "Years exp",
      statProducts: "Products built",
      statUpwork: "on Upwork",
      cardRole: "Fullstack Developer",
      cardBadge: "Open to work",
      hudStatus: "STATUS: AVAILABLE",
    },
    skills: {
      label: "Expertise",
      title: "What I bring to your project",
      sub: "End-to-end engineering across frontend, backend, e-commerce, and cloud infrastructure.",
    },
    experience: {
      label: "Experience",
      title: "Professional experience",
      sub: "Enterprise-grade engineering work, delivered under NDA and long-term commitments.",
    },
    projects: {
      label: "Portfolio",
      title: "Selected projects",
      sub: "Real products shipped to real users, from zero to production.",
      visit: "Visit site",
      hudStack: "STACK",
    },
    contact: {
      label: "Contact",
      titleLines: ["Ready to build", "something great?"],
      sub: "Available for freelance projects, contract work, and consulting. Let's talk about your next product.",
    },
    footer: {
      copyright: "© 2026 Gustavo Betone. All rights reserved.",
    },
  },
  pt: {
    nav: {
      skills: "Skills",
      experience: "Experiência",
      work: "Projetos",
      contact: "Contato",
      hire: "Me contrate no Upwork",
    },
    hero: {
      badge: "Disponível para novos projetos",
      titleLines: ["Dev fullstack", "que entrega."],
      sub: "Desenvolvo aplicações Angular + Node.js de alta performance, de plataformas SaaS a soluções e-commerce que escalam e convertem.",
      ctaHire: "Me contrate no Upwork",
      ctaWork: "Ver projetos",
      ctaWhatsapp: "Me chama no WhatsApp",
      statYears: "Anos de exp",
      statProducts: "Produtos entregues",
      statUpwork: "no Upwork",
      cardRole: "Desenvolvedor Fullstack",
      cardBadge: "Disponível",
      hudStatus: "STATUS: DISPONÍVEL",
    },
    skills: {
      label: "Especialidades",
      title: "O que levo ao seu projeto",
      sub: "Engenharia completa em frontend, backend, e-commerce e infraestrutura cloud.",
    },
    experience: {
      label: "Experiência",
      title: "Experiência profissional",
      sub: "Trabalho de engenharia em ambiente enterprise, entregue sob NDA e compromissos de longo prazo.",
    },
    projects: {
      label: "Portfólio",
      title: "Projetos selecionados",
      sub: "Produtos reais entregues a usuários reais, do zero à produção.",
      visit: "Ver site",
      hudStack: "STACK",
    },
    contact: {
      label: "Contato",
      titleLines: ["Pronto para construir", "algo incrível?"],
      sub: "Disponível para projetos freelance, contratos e consultoria. Vamos conversar sobre seu próximo produto.",
    },
    footer: {
      copyright: "© 2026 Gustavo Betone. Todos os direitos reservados.",
    },
  },
} satisfies Record<Lang, unknown>;
