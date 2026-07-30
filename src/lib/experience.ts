export type Experience = {
  slug: string;
  image: string | null;
  imageFit: "cover" | "contain";
  type: { en: string; pt: string };
  name: string;
  desc: { en: string; pt: string };
  stack: (string | { en: string; pt: string })[];
  /** Footer note. `locked: true` shows a lock icon (NDA/confidential work). */
  note: { en: string; pt: string };
  locked: boolean;
};

export const experience: Experience[] = [
  {
    slug: "itau",
    image: "/assets/img/projects/itau.png",
    imageFit: "contain",
    type: { en: "Enterprise & Infrastructure", pt: "Enterprise & Infraestrutura" },
    name: "Itaú Unibanco",
    desc: {
      en: "Mission-critical ATM infrastructure for one of Latin America's largest banks. Developed high-availability software ensuring 99.9% uptime across thousands of terminals nationwide, strict security protocols, real-time monitoring, and C#/.NET backend services handling millions of daily transactions.",
      pt: "Infraestrutura crítica de ATMs para um dos maiores bancos da América Latina. Desenvolvi software de alta disponibilidade garantindo 99,9% de uptime em milhares de terminais pelo país, protocolos rigorosos de segurança, monitoramento em tempo real e serviços C#/.NET processando milhões de transações diárias.",
    },
    stack: [
      "C#",
      ".NET",
      "Angular",
      { en: "High Availability", pt: "Alta Disponibilidade" },
    ],
    note: { en: "Confidential, under NDA", pt: "Confidencial, sob NDA" },
    locked: true,
  },
  {
    slug: "dom-perfumes",
    image: "/assets/img/projects/dom.png",
    imageFit: "cover",
    type: { en: "E-commerce & Operations", pt: "E-commerce & Operações" },
    name: "Dom Perfumes",
    desc: {
      en: "Joined the day after leaving Itaú, with zero days off in between. Worked through shipping, customer service, marketing, finance, built the entire e-commerce structure from scratch, and even touched design. Today mostly focused on the commercial side, but still circulates across every area.",
      pt: "Entrou no dia seguinte a sair do Itaú, sem um dia de intervalo. Passou por expedição, atendimento, marketing, financeiro, montou a estrutura completa de e-commerce do zero e ainda meteu a mão no design. Hoje foca mais em comercial, mas segue circulando por todas as frentes.",
    },
    stack: [
      { en: "E-commerce", pt: "E-commerce" },
      { en: "Shipping", pt: "Expedição" },
      { en: "Customer Service", pt: "Atendimento" },
      { en: "Marketing", pt: "Marketing" },
      { en: "Finance", pt: "Financeiro" },
      { en: "Commercial", pt: "Comercial" },
    ],
    note: { en: "Active business, own family company", pt: "Negócio ativo, empresa da família" },
    locked: false,
  },
];
