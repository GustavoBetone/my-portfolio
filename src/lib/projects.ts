export type Project = {
  slug: string;
  image: string | null;
  imageFit: "cover" | "contain";
  placeholderLabel: string;
  type: { en: string; pt: string };
  name: string;
  desc: { en: string; pt: string };
  stack: (string | { en: string; pt: string })[];
  link:
    | { kind: "external"; href: string }
    | { kind: "confidential"; label: { en: string; pt: string } };
};

export const projects: Project[] = [
  {
    slug: "gigi",
    image: "/assets/img/projects/gigivariedades.png",
    imageFit: "cover",
    placeholderLabel: "GIGI",
    type: { en: "Landing Page & Conversion", pt: "Landing Page & Conversão" },
    name: "GiGi Variedades",
    desc: {
      en: "High-conversion landing page for a wholesale vertical launch, WhatsApp-first funnel, AI-generated hero video, mobile-first performance.",
      pt: "Landing page de alta conversão pra abertura de vertente de atacado, com funil direto pro WhatsApp, vídeo hero gerado com IA e performance mobile-first.",
    },
    stack: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
    link: { kind: "external", href: "https://gi-gi-variedades.vercel.app/" },
  },
  {
    slug: "silcore",
    image: "/assets/img/projects/silcore.png",
    imageFit: "cover",
    placeholderLabel: "SILCORE",
    type: { en: "E-commerce & D2C Brand", pt: "E-commerce & Marca D2C" },
    name: "Silcore",
    desc: {
      en: "Premium silicone art brand (rugs and plaques with 3D relief), hybrid retail plus wholesale plus made-to-order customization model, with a football crest catalog and a decor/lifestyle line.",
      pt: "Marca de arte em silicone premium (tapetes e placas com relevo 3D), modelo híbrido de varejo, atacado e personalização sob encomenda, com catálogo de brasões de futebol e linha decor/lifestyle.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "WhatsApp Checkout",
      "Vercel + GitHub Auto Deploy",
    ],
    link: { kind: "external", href: "https://sili-art.vercel.app" },
  },
  {
    slug: "dom",
    image: "/assets/img/projects/dom.png",
    imageFit: "cover",
    placeholderLabel: "DOM",
    type: { en: "E-commerce & Analytics", pt: "E-commerce & Analytics" },
    name: "Dom Perfumes",
    desc: {
      en: "Full e-commerce platform with custom analytics dashboard, inventory management, and Shopify API integration for a premium fragrance brand.",
      pt: "Plataforma e-commerce completa com dashboard de analytics customizado, gestão de estoque e integração com Shopify API para uma marca de perfumes premium.",
    },
    stack: ["Angular", "Node.js", "PostgreSQL", "Shopify API"],
    link: { kind: "external", href: "https://domperfumes.com.br" },
  },
  {
    slug: "korza",
    image: "/assets/img/projects/korza.png",
    imageFit: "contain",
    placeholderLabel: "KORZA",
    type: { en: "SaaS & Institutional", pt: "SaaS & Institucional" },
    name: "Korza",
    desc: {
      en: "SaaS bridging Shopify to a mobile app experience, plus a new institutional website. Full-stack from API design to pixel-perfect UI.",
      pt: "SaaS que conecta a loja Shopify a um app mobile, mais novo site institucional. Full-stack do design de API ao UI pixel-perfect.",
    },
    stack: ["Angular", "Node.js", "TypeScript", "Shopify"],
    link: { kind: "external", href: "https://korza-wine.vercel.app/" },
  },
  {
    slug: "appza",
    image: "/assets/img/projects/appza.png",
    imageFit: "cover",
    placeholderLabel: "APPZA",
    type: { en: "SaaS & Mobile", pt: "SaaS & Mobile" },
    name: "Appza",
    desc: {
      en: "SaaS integrating Shopify and Nuvemshop stores with Android push notifications. Includes landing page, app, and Firebase-powered messaging.",
      pt: "SaaS que integra lojas Shopify e Nuvemshop com notificações push Android. Inclui landing page, app e mensageria via Firebase.",
    },
    stack: ["Angular", "Node.js", "Firebase", "Android"],
    link: { kind: "external", href: "https://appza.com.br" },
  },
  {
    slug: "n8n",
    image: "/assets/img/projects/n8n.png",
    imageFit: "cover",
    placeholderLabel: "n8n",
    type: { en: "Automation", pt: "Automação" },
    name: "n8n Workflows",
    desc: {
      en: "Custom automation pipelines for Dom Perfumes, syncing orders, inventory, and marketing data via Google Sheets API and webhooks with zero manual effort.",
      pt: "Pipelines de automação personalizados para a Dom Perfumes, sincronizando pedidos, estoque e dados de marketing via Google Sheets API e webhooks, sem esforço manual.",
    },
    stack: ["n8n", "Google Sheets API", "Node.js", "Webhooks"],
    link: {
      kind: "confidential",
      label: { en: "Internal project", pt: "Projeto interno" },
    },
  },
];
