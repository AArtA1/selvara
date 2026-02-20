"use client";

import { createContext, useContext, type ReactNode } from "react";

export type Lang = "ru" | "en";

interface LanguageContextValue {
  lang: Lang;
}

const LanguageContext = createContext<LanguageContextValue>({ lang: "ru" });

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function t(translations: { ru: string; en: string }, lang: Lang): string {
  return translations[lang];
}
