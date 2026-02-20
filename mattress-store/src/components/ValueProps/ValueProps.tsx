"use client";

import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./ValueProps.module.css";

const props = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    label: { ru: "100 ночей", en: "100 nights" },
    detail: { ru: "Пробный период", en: "Trial period" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3H1v13h15M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: { ru: "Доставка и установка", en: "Delivery & setup" },
    detail: { ru: "Бесплатно", en: "Free of charge" },
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    label: { ru: "Гарантия 10 лет", en: "10-year warranty" },
    detail: { ru: "На конструкцию", en: "On construction" },
  },
];

export function ValueProps() {
  const { lang } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.valueProps}>
        {props.map((prop) => (
          <div key={prop.label.ru} className={styles.valueProp}>
            <div className={styles.icon}>{prop.icon}</div>
            <span className={styles.label}>{t(prop.label, lang)}</span>
            <span className={styles.detail}>{t(prop.detail, lang)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
