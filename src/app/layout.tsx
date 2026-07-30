import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { CursorGlow } from "@/components/CursorGlow";
import { LanguageProvider } from "@/lib/language-context";
import { SITE } from "@/lib/config";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-hud",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: `${SITE.url}/assets/img/og-cover.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}/assets/img/og-cover.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay" aria-hidden="true" />
        <LanguageProvider>
          <CursorGlow />
          <Header />
          {children}
          <Footer />
          <StickyWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
