"use client";

import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";

const nav = {
  shopTitle: { ru: "Матрасы", en: "Shop" },
  supportTitle: { ru: "Поддержка", en: "Support" },
  companyTitle: { ru: "Компания", en: "Company" },
  links: {
    mattresses: { ru: "Матрасы", en: "Mattresses" },
    contact: { ru: "Контакты", en: "Contact Us" },
    delivery: { ru: "Доставка", en: "Delivery" },
    about: { ru: "О бренде", en: "About" },
    reviews: { ru: "Отзывы", en: "Reviews" },
  },
  tagline: {
    ru: "Только то, что важно. Матрасы из натуральных материалов, собственное производство.",
    en: "Only what matters. Mattresses from natural materials, manufactured in-house.",
  },
  rights: { ru: "Все права защищены.", en: "All rights reserved." },
};

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href={`/${lang}`} className={styles.logo}>
              Selvara
            </Link>
            <p>{t(nav.tagline, lang)}</p>
          </div>
          <div>
            <h4>{t(nav.shopTitle, lang)}</h4>
            <ul>
              <li><Link href={`/${lang}/mattresses`}>{t(nav.links.mattresses, lang)}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t(nav.supportTitle, lang)}</h4>
            <ul>
              <li><Link href={`/${lang}/contact`}>{t(nav.links.contact, lang)}</Link></li>
              <li><Link href={`/${lang}/delivery-returns`}>{t(nav.links.delivery, lang)}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t(nav.companyTitle, lang)}</h4>
            <ul>
              <li><Link href={`/${lang}/about`}>{t(nav.links.about, lang)}</Link></li>
              <li><Link href={`/${lang}/reviews`}>{t(nav.links.reviews, lang)}</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>&copy; 2026 Selvara. {t(nav.rights, lang)}</span>
        </div>
      </Container>
    </footer>
  );
}
