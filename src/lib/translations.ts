export type Lang = "en" | "pt";

/**
 * Only the "Lazy Dev" section keeps an EN/PT toggle — the rest of the site
 * (Hero, Trajetória, Negócios, Conteúdo, Contato) is PT-only, hardcoded in place.
 */
export const translations = {
  en: {
    lazyDev: {
      label: "Lazy Dev",
      title: "The freelance side of the Lazy",
      sub: "Fullstack engineering delivered to real clients, the technical track record behind the businesses.",
      ctaHire: "Hire me on Upwork",
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
      label: "Delivered work",
      title: "Freelance & client projects",
      sub: "Real products shipped to real clients, from zero to production.",
      visit: "Visit site",
      hudStack: "STACK",
      statusLive: "LIVE",
      statusArchived: "ARCHIVED",
    },
  },
  pt: {
    lazyDev: {
      label: "Lazy Dev",
      title: "O lado freelance do Lazy",
      sub: "Engenharia fullstack entregue pra clientes reais, o histórico técnico por trás dos negócios.",
      ctaHire: "Me contrate no Upwork",
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
      label: "Trabalho entregue",
      title: "Projetos freelance & clientes",
      sub: "Produtos reais entregues a clientes reais, do zero à produção.",
      visit: "Ver site",
      hudStack: "STACK",
      statusLive: "ATIVO",
      statusArchived: "ARQUIVADO",
    },
  },
} satisfies Record<Lang, unknown>;
