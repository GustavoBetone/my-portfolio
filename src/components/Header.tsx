"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/config";

/**
 * "rota" navega de verdade, "ancora" rola até uma seção da home.
 *
 * A âncora aponta sempre para "/#slug", nunca para "#slug". Fora da home o
 * "#slug" procuraria um elemento que não existe na rota atual e o clique não
 * faria nada. Com "/#slug" o mesmo link serve nos dois lugares: na home vira
 * scroll, fora dela volta pra home e rola até a seção.
 */
type ItemNav =
  | { id: string; label: string; tipo: "ancora" }
  | { id: string; label: string; tipo: "rota"; href: string };

const NAV_ITEMS: ItemNav[] = [
  { id: "trajetoria", label: "Trajetória", tipo: "ancora" },
  { id: "servicos", label: "Serviços", tipo: "ancora" },
  { id: "cases", label: "Cases", tipo: "rota", href: "/cases" },
  { id: "negocios", label: "Negócios", tipo: "ancora" },
  { id: "lazy-dev", label: "Lazy Dev", tipo: "ancora" },
  { id: "conteudo", label: "Conteúdo", tipo: "ancora" },
  { id: "contact", label: "Contato", tipo: "ancora" },
];

const ANCORAS = NAV_ITEMS.filter((i) => i.tipo === "ancora");

export function Header() {
  const pathname = usePathname();
  const naHome = pathname === "/";
  const [secaoVisivel, setSecaoVisivel] = useState<string>("");

  useEffect(() => {
    // O scrollspy só faz sentido na home: é lá que as seções existem. Em
    // qualquer outra rota ele procuraria ids ausentes e devolveria "" sempre.
    if (!naHome) return;

    const onScroll = () => {
      let atual = "";
      for (const item of ANCORAS) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 90) atual = item.id;
      }
      setSecaoVisivel(atual);
    };

    // Primeira medição no frame seguinte, não no corpo do efeito: quem chega
    // em "/#servicos" vindo de /cases precisa ver o item certo destacado sem
    // rolar nada, e esperar um frame ainda deixa o layout assentar antes de
    // ler offsetTop.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [naHome]);

  // Derivado em vez de zerado por efeito: fora da home nenhuma âncora fica
  // ativa, e o estado antigo do scrollspy não sobrevive à troca de rota.
  const secaoAtiva = naHome ? secaoVisivel : "";

  const estaAtivo = (item: ItemNav) =>
    item.tipo === "rota" ? pathname === item.href : secaoAtiva === item.id;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/85 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">
        {/* "/#hero" e não "/": serve nos dois casos, volta pra home vindo de
            /cases e sobe até o topo quando já se está na home. */}
        <Link
          href="/#hero"
          className="wordmark font-display font-extrabold text-xl tracking-[-0.02em] text-foreground shrink-0"
        >
          e<span className="wordmark-zero">0</span>lazy
        </Link>

        <ul className="hidden md:flex items-center gap-7 ml-auto list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.tipo === "rota" ? item.href : `/#${item.id}`}
                aria-current={estaAtivo(item) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  estaAtivo(item) ? "text-signal" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 shrink-0 md:ml-0 ml-auto">
          {/* No mobile o menu inteiro fica escondido, então sem este link a
              página /cases não teria como ser alcançada pelo celular. */}
          <Link
            href="/cases"
            aria-current={pathname === "/cases" ? "page" : undefined}
            className={`md:hidden text-[13px] font-medium px-3 py-2 rounded-lg transition-colors ${
              pathname === "/cases"
                ? "text-signal bg-signal-dim"
                : "text-muted hover:text-foreground"
            }`}
          >
            Cases
          </Link>

          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-lg border border-border-soft text-foreground hover:border-signal/40 hover:bg-signal-dim transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
