import { LINKS } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-5">
        <div>
          <div className="wordmark font-display font-extrabold text-lg text-white">
            e<span className="wordmark-zero">0</span>lazy
          </div>
          <div className="text-xs text-gray-400 mt-1">© 2026 Gustavo Betone, É o Lazy. Todos os direitos reservados.</div>
        </div>
        <ul className="flex gap-6 list-none">
          <li>
            <a href={LINKS.upwork} target="_blank" rel="noopener" className="text-[13px] text-gray-400 hover:text-white transition-colors">
              Upwork
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener" className="text-[13px] text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKS.domPerfumes} target="_blank" rel="noopener" className="text-[13px] text-gray-400 hover:text-white transition-colors">
              Dom Perfumes
            </a>
          </li>
          <li>
            <a href={LINKS.korza} target="_blank" rel="noopener" className="text-[13px] text-gray-400 hover:text-white transition-colors">
              Korza
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
