"use client";

import { LanguageProvider, type Lang } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export function Providers({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LanguageProvider lang={lang}>
      {children}
    </LanguageProvider>
  );
}
