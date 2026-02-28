"use client";

import { LanguageProvider, type Lang } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar/CartSidebar";
import type { ReactNode } from "react";

export function Providers({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LanguageProvider lang={lang}>
      <CartProvider>
        {children}
        <CartSidebar />
      </CartProvider>
    </LanguageProvider>
  );
}
