"use client";

import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.promoBanner}>
        <strong>Seasonal Offer</strong> — Save up to $300 on select
        mattresses. Limited time.
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Selvara
        </Link>

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

        <div className={styles.navActions}>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
          >
            Contact
          </Link>
          <Link href="#">Cart (0)</Link>
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
      </nav>

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
