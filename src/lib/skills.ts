export type SkillTag = string | { en: string; pt: string };

export type Skill = {
  slug: string;
  icon: "frontend" | "backend" | "ecommerce" | "cloud" | "ai" | "marketing";
  name: { en: string; pt: string };
  tags: SkillTag[];
};

export const skills: Skill[] = [
  {
    slug: "frontend",
    icon: "frontend",
    name: { en: "Frontend", pt: "Frontend" },
    tags: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS/SCSS", "RxJS"],
  },
  {
    slug: "backend",
    icon: "backend",
    name: { en: "Backend", pt: "Backend" },
    tags: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "C#", "AWS"],
  },
  {
    slug: "ecommerce",
    icon: "ecommerce",
    name: { en: "E-commerce", pt: "E-commerce" },
    tags: [
      "Shopify",
      "Nuvemshop",
      { en: "Payments", pt: "Pagamentos" },
      "Analytics",
      "Webhooks",
    ],
  },
  {
    slug: "cloud",
    icon: "cloud",
    name: { en: "Cloud & Integrations", pt: "Cloud & Integrações" },
    tags: ["Google Cloud", "AWS", "Firebase", "Railway", "n8n", "Google Sheets API"],
  },
  {
    slug: "ai",
    icon: "ai",
    name: { en: "AI & Vibe Coding", pt: "AI & Vibe Coding" },
    tags: [
      "Claude Code",
      "Prompt Engineering",
      "MCP",
      {
        en: "2 production apps shipped end-to-end (Vercel + GitHub auto deploy)",
        pt: "2 apps em produção entregues do zero (deploy automatizado Vercel + GitHub)",
      },
      { en: "AI Image & Video Gen", pt: "Geração de Imagem & Vídeo com IA" },
    ],
  },
  {
    slug: "marketing",
    icon: "marketing",
    name: { en: "Marketing & Ads", pt: "Marketing & Ads" },
    tags: [
      "Meta Ads",
      "Facebook Ads",
      { en: "Funnel Strategy", pt: "Estratégia de Funil" },
      "Copywriting",
      "Analytics",
    ],
  },
];
