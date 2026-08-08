import type { Metadata } from "next";
import { CasesSection } from "@/components/CasesSection";
import { SITE } from "@/lib/config";

const TITULO = "Cases, landing pages entregues pra cliente | e0lazy";
const DESCRICAO =
  "Landing pages de conversão construídas sob demanda pra negócio de cliente, da oficina de funilaria à arquiteta. O que cada página resolve e pra quem foi feita.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: `${SITE.url}/cases` },
  openGraph: {
    type: "website",
    url: `${SITE.url}/cases`,
    title: TITULO,
    description: DESCRICAO,
    images: [{ url: `${SITE.url}/assets/img/og-cover.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: [`${SITE.url}/assets/img/og-cover.png`],
  },
};

export default function CasesPage() {
  // pt-16 compensa o header, que é fixed e sai do fluxo. Na home quem faz esse
  // papel é o pt-32 do hero, e aqui não existe hero.
  return (
    <main className="relative z-10 pt-16">
      <CasesSection />
    </main>
  );
}
