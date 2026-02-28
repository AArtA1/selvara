"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, t } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import styles from "./Header.module.css";

const navItems = [
  { path: "/mattresses", label: { ru: "Матрасы", en: "Mattresses" } },
  { path: "/about", label: { ru: "О бренде", en: "About" } },
  { path: "/delivery-returns", label: { ru: "Доставка", en: "Delivery" } },
  { path: "/contact", label: { ru: "Контакты", en: "Contact" } },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/ru" || pathname === "/en";
  const { lang } = useLanguage();
  const { itemCount, openCart } = useCart();

  // pathWithoutLocale e.g. "/mattresses" or ""
  const pathWithoutLocale = pathname.replace(/^\/(ru|en)/, "") || "";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isScrolled = scrollProgress > 0.95;
  const isCompact = isHome && scrollProgress > 0.5;

  const headerClass = [
    styles.header,
    isHome ? styles.transparent : "",
    isHome && isScrolled ? styles.scrolled : "",
    isCompact ? styles.compact : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerStyle = isHome
    ? {
        backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`,
        borderBottomColor:
          scrollProgress > 0.5
            ? `rgba(227, 227, 227, ${(scrollProgress - 0.5) * 2})`
            : "transparent",
      }
    : undefined;

  return (
    <header className={headerClass} style={headerStyle}>
      <div className={styles.navWrapper}>
        <div className={styles.topRow}>
          <div className={styles.topRowSide} />
          <Link href={`/${lang}`} className={styles.logoWrap} onClick={() => setMenuOpen(false)}>
            <span className={styles.logoText}>Selvara</span>
            <span className={styles.logoMono} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-monogram.svg" width={58} height={58} alt="" />
            </span>
          </Link>
          <div className={styles.navIcons}>
            <div className={styles.langSwitch}>
              <Link
                href={`/ru${pathWithoutLocale}`}
                className={lang === "ru" ? styles.langActive : styles.langBtn}
              >
                RU
              </Link>
              <span className={styles.langDivider}>|</span>
              <Link
                href={`/en${pathWithoutLocale}`}
                className={lang === "en" ? styles.langActive : styles.langBtn}
              >
                EN
              </Link>
            </div>
            <Link href={`/${lang}/contact`} className={styles.iconLink} aria-label="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <button className={`${styles.iconLink} ${styles.cartBtn}`} onClick={openCart} aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className={styles.cartBadge}>{itemCount}</span>
              )}
            </button>
          </div>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={`/${lang}${item.path}`}
                className={pathWithoutLocale.startsWith(item.path) ? styles.active : ""}
              >
                {t(item.label, lang)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={`/${lang}${item.path}`}
                className={pathWithoutLocale.startsWith(item.path) ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {t(item.label, lang)}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileLangSwitch}>
          <Link
            href={`/ru${pathWithoutLocale}`}
            className={lang === "ru" ? styles.mobileLangActive : styles.mobileLangBtn}
            onClick={() => setMenuOpen(false)}
          >
            RU
          </Link>
          <span className={styles.langDivider}>|</span>
          <Link
            href={`/en${pathWithoutLocale}`}
            className={lang === "en" ? styles.mobileLangActive : styles.mobileLangBtn}
            onClick={() => setMenuOpen(false)}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
