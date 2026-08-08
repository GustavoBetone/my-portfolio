import { HeroSection } from "@/components/HeroSection";
import { TrajetoriaSection } from "@/components/TrajetoriaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CasesSection } from "@/components/CasesSection";
import { NegociosSection } from "@/components/NegociosSection";
import { LazyDevSection } from "@/components/LazyDevSection";
import { ContentSection } from "@/components/ContentSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative z-10">
      <HeroSection />
      <TrajetoriaSection />
      <ServicesSection />
      <CasesSection />
      <NegociosSection />
      <LazyDevSection />
      <ContentSection />
      <ContactSection />
    </main>
  );
}
