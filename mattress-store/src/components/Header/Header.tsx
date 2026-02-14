"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/mattresses", label: "Mattresses" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/delivery-returns", label: "Delivery" },
  { href: "/sale", label: "Sale" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      // 0 at top, 1 at 300px scroll
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isScrolled = scrollProgress > 0.95;

  const headerClass = [
    styles.header,
    isHome ? styles.transparent : "",
    isHome && isScrolled ? styles.scrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Inline style for gradual background on homepage
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
      <div className={styles.promoBanner}>
        <strong>Seasonal Offer</strong> — Save up to $300 on select
        mattresses. Limited time.
      </div>

      <div className={styles.navWrapper}>
        {/* Top row: logo centered, icons right */}
        <div className={styles.topRow}>
          <div className={styles.topRowSide} />
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            Selvara
          </Link>
          <div className={styles.navIcons}>
            <Link href="#" className={styles.iconLink} aria-label="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </Link>
            <Link href="#" className={styles.iconLink} aria-label="Saved">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.iconLink} aria-label="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <Link href="#" className={styles.iconLink} aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>
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

        {/* Bottom row: nav links centered */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname.startsWith(item.href) ? styles.active : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname.startsWith(item.href) ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
