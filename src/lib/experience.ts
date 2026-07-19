export type Experience = {
  slug: string;
  image: string | null;
  imageFit: "cover" | "contain";
  type: { en: string; pt: string };
  name: string;
  desc: { en: string; pt: string };
  stack: (string | { en: string; pt: string })[];
  confidential: { en: string; pt: string };
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
    confidential: { en: "Confidential, under NDA", pt: "Confidencial, sob NDA" },
  },
];
