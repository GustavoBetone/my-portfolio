export type ProjectStatus = "live" | "archived";
export type LocalizedText = string | { en: string; pt: string };

export type Project = {
  slug: string;
  status: ProjectStatus;
  image: string | null;
  imageFit: "cover" | "contain";
  placeholderLabel: string;
  type: LocalizedText;
  name: string;
  desc: LocalizedText;
  stack: LocalizedText[];
  link:
    | { kind: "external"; href: string }
    | { kind: "confidential"; label: LocalizedText }
    /** Produto no ar, site próprio ainda não publicado. Mostra o rótulo sem link. */
    | { kind: "pending"; label: LocalizedText };
};

export const projects: Project[] = [
  {
    slug: "appza",
    status: "live",
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
    status: "live",
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
