import { notFound } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Providers } from "@/components/Providers/Providers";
import type { Lang } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

const locales: Lang[] = ["ru", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Lang)) {
    notFound();
  }

  return (
    <Providers lang={locale as Lang}>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}
