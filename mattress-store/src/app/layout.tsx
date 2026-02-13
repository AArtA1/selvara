import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Selvara — Thoughtful Luxury Sleep",
    template: "%s — Selvara",
  },
  description:
    "The highest quality handcrafted mattresses at the most comfortable prices. 365-night trial, free delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${sourceSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
