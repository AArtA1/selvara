"use client";

import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./ValueProps.module.css";

const props = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Moon & stars — 100 nights */}
        <path d="M42 12a20 20 0 1 0 0 40 20 20 0 0 1 0-40z" />
        <circle cx="20" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="24" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="24" cy="8" r="0.75" fill="currentColor" stroke="none" />
        <path d="M16 18l1 2 2 0.5-2 0.5-1 2-1-2-2-0.5 2-0.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: { ru: "100 ночей", en: "100 nights" },
    detail: { ru: "Пробный период — убедитесь, что матрас подходит именно вам", en: "Trial period — make sure the mattress is right for you" },
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Delivery van — clean line illustration */}
        <rect x="4" y="22" width="36" height="22" rx="2" />
        <path d="M40 30h12l6 8v6h-18V30z" />
        <circle cx="14" cy="48" r="4" />
        <circle cx="50" cy="48" r="4" />
        <path d="M18 44h28" />
        <path d="M4 44h6" />
        <path d="M54 44h4" />
        <path d="M48 30v8h8" />
      </svg>
    ),
    label: { ru: "Доставка и установка", en: "Delivery & setup" },
    detail: { ru: "Бесплатно по Москве и области. Занесём и установим", en: "Free in Moscow & region. We carry in and set up" },
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield with checkmark — warranty */}
        <path d="M32 6L8 16v16c0 14 10.67 23.33 24 28 13.33-4.67 24-14 24-28V16L32 6z" />
        <polyline points="22 32 29 39 42 26" strokeWidth="1.5" />
      </svg>
    ),
    label: { ru: "Гарантия 10 лет", en: "10-year warranty" },
    detail: { ru: "На конструкцию и материалы. Честная гарантия без оговорок", en: "On construction and materials. Honest warranty, no caveats" },
  },
];

export function ValueProps() {
  const { lang } = useLanguage();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        {t({ ru: "К вашим услугам", en: "At your service" }, lang)}
      </h2>
      <div className={styles.grid}>
        {props.map((prop) => (
          <div key={prop.label.ru} className={styles.item}>
            <div className={styles.icon}>{prop.icon}</div>
            <h3 className={styles.label}>{t(prop.label, lang)}</h3>
            <p className={styles.detail}>{t(prop.detail, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
