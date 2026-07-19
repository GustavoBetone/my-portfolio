"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { LINKS } from "@/lib/config";

const NAV_IDS = ["skills", "work", "contact"] as const;

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/85 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">
        <a href="#hero" className="font-display font-extrabold text-xl tracking-[-0.02em] text-foreground shrink-0">
          B<span className="text-accent-cyan">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-7 ml-auto list-none">
          <li>
            <a
              href="#skills"
              className={`text-sm font-medium transition-colors ${active === "skills" ? "text-accent-cyan" : "text-muted hover:text-foreground"}`}
            >
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`text-sm font-medium transition-colors ${active === "work" ? "text-accent-cyan" : "text-muted hover:text-foreground"}`}
            >
              {t.nav.work}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${active === "contact" ? "text-accent-cyan" : "text-muted hover:text-foreground"}`}
            >
              {t.nav.contact}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2.5 shrink-0 md:ml-0 ml-auto">
          <div className="flex items-center gap-1 mr-1 bg-background-raised border border-border-soft rounded-lg px-2.5 py-1">
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors ${lang === "en" ? "text-accent-cyan bg-accent-cyan-dim" : "text-muted hover:text-foreground"}`}
            >
              EN
            </button>
            <span className="text-xs text-border-soft">|</span>
            <button
              onClick={() => setLang("pt")}
              className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors ${lang === "pt" ? "text-accent-cyan bg-accent-cyan-dim" : "text-muted hover:text-foreground"}`}
            >
              PT
            </button>
          </div>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-lg border border-border-soft text-foreground hover:border-accent-cyan/40 hover:bg-accent-cyan-dim transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-accent-cyan text-background hover:brightness-110 transition-all"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </nav>
  );
}
