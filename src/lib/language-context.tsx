"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { translations, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const LANG_CHANGE_EVENT = "lang-change";

function subscribe(callback: () => void) {
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => window.removeEventListener(LANG_CHANGE_EVENT, callback);
}

function getSnapshot(): Lang {
  return localStorage.getItem("lang") === "pt" ? "pt" : "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = (next: Lang) => {
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
