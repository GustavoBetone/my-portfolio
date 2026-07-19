"use client";

import { useLanguage } from "@/lib/language-context";
import { LINKS } from "@/lib/config";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-5">
        <div>
          <div className="font-display font-extrabold text-lg text-white">
            B<span className="text-accent-cyan">.</span>dev
          </div>
          <div className="text-xs text-muted mt-1">{t.footer.copyright}</div>
        </div>
        <ul className="flex gap-6 list-none">
          <li>
            <a href={LINKS.upwork} target="_blank" rel="noopener" className="text-[13px] text-muted hover:text-white transition-colors">
              Upwork
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener" className="text-[13px] text-muted hover:text-white transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKS.domPerfumes} target="_blank" rel="noopener" className="text-[13px] text-muted hover:text-white transition-colors">
              Dom Perfumes
            </a>
          </li>
          <li>
            <a href={LINKS.korza} target="_blank" rel="noopener" className="text-[13px] text-muted hover:text-white transition-colors">
              Korza
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
