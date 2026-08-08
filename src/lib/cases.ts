/**
 * Cases: landing pages entregues para cliente brasileiro.
 *
 * Terceiro tipo de trabalho do portfólio, separado de propósito:
 *   negocios.ts  frentes próprias, com receita
 *   projects.ts  histórico de dev freelance, cliente internacional
 *   cases.ts     landing pages de conversão entregues via Lazy Dev
 *
 * Por isso o tipo é próprio e não reaproveita `Project`, os campos são outros
 * (aqui existe cliente e emProducao, e não existe stack nem badge de status).
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ PARA TIRAR A FAIXA "EM PRODUÇÃO" DE UM CASE:                         │
 * │ trocar `emProducao: true` por `false` no case correspondente.        │
 * │ É só isso, uma linha. O CaseCard some com a faixa sozinho.           │
 * │ Fazer isso quando o cliente entregar os materiais finais e o site    │
 * │ estiver realmente fechado, não antes.                                │
 * └──────────────────────────────────────────────────────────────────────┘
 */

export type CaseStatus = "live" | "pending";

export type Case = {
  slug: string;
  cliente: string;
  tipo: string;
  desc: string;
  image: string | null;
  imageFit: "cover" | "contain";
  /** true mostra a faixa preta e amarela "EM PRODUÇÃO" sobre a screenshot */
  emProducao: boolean;
  link:
    | { kind: "external"; href: string; status: CaseStatus }
    | { kind: "pending"; label: string };
};

export const cases: Case[] = [
  {
    slug: "nova-repar",
    cliente: "Nova Repar",
    tipo: "Landing Page de Conversão",
    desc: "Oficina de funilaria e pintura em Suzano. Storytelling de antes e depois, faixa de seguradoras credenciadas e CTA direto pro WhatsApp, sem formulário no caminho.",
    image: "/assets/img/cases/nova-repar.png",
    imageFit: "cover",
    emProducao: true,
    link: {
      kind: "external",
      href: "https://nova-repar.vercel.app",
      status: "live",
    },
  },
  {
    slug: "hevelin-arquitetura",
    cliente: "Hevelin Arquitetura",
    tipo: "Landing Page de Conversão",
    desc: "Arquiteta e urbanista em Mogi das Cruzes. Duas frentes com o mesmo peso na página, a técnica e documental (vistoria, regularização, usucapião, laudo AVCB) e a de design de interiores.",
    image: "/assets/img/cases/hevelin-arquitetura.png",
    imageFit: "cover",
    emProducao: true,
    link: { kind: "pending", label: "Publicação em breve" },
  },
];
