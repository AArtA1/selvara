import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-nav",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Selvara — Только то, что важно",
    template: "%s — Selvara",
  },
  description:
    "Матрасы из натуральных материалов. Собственное производство, Подмосковье. 100 ночей пробного периода, бесплатная доставка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} ${sourceSans.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
