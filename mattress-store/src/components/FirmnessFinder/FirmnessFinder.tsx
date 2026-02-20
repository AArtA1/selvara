"use client";

import Link from "next/link";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./FirmnessFinder.module.css";

const content = {
  label: { ru: "Помощь с выбором", en: "Find your mattress" },
  headline: { ru: "Выберите жёсткость", en: "Choose firmness" },
};

const firmness = [
  {
    key: "firm",
    level: { ru: "Твёрдый", en: "Firm" },
    desc: {
      ru: "Чёткая опора. Для тех, кто предпочитает ощущение твёрдой поверхности.",
      en: "Clear support. For those who prefer a firm surface feel.",
    },
    models: [
      { name: "Linen", slug: "selvara-linen" },
      { name: "Latex", slug: "selvara-latex" },
    ],
  },
  {
    key: "medium",
    level: { ru: "Средний", en: "Medium" },
    desc: {
      ru: "Баланс поддержки и комфорта. Универсальный вариант для большинства.",
      en: "Balance of support and comfort. A versatile choice for most sleepers.",
    },
    models: [
      { name: "Coconut", slug: "selvara-coconut" },
      { name: "Origin", slug: "selvara-origin" },
    ],
  },
  {
    key: "soft",
    level: { ru: "Мягкий", en: "Soft" },
    desc: {
      ru: "Обволакивающий комфорт. Для тех, кто ценит мягкое давление на точки тела.",
      en: "Enveloping comfort. For those who prefer gentle contouring pressure.",
    },
    models: [
      { name: "Aero", slug: "selvara-aero" },
      { name: "Signature", slug: "selvara-signature" },
      { name: "Reserve", slug: "selvara-reserve" },
    ],
  },
];

export function FirmnessFinder() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{t(content.label, lang)}</p>
          <h2 className={styles.headline}>{t(content.headline, lang)}</h2>
        </div>
        <div className={styles.grid}>
          {firmness.map((f) => (
            <div key={f.key} className={styles.card}>
              <div className={styles.firmnessMeter}>
                <div className={`${styles.meterFill} ${styles[f.key]}`} />
              </div>
              <h3 className={styles.cardTitle}>{t(f.level, lang)}</h3>
              <p className={styles.cardDesc}>{t(f.desc, lang)}</p>
              <ul className={styles.models}>
                {f.models.map((m) => (
                  <li key={m.slug}>
                    <Link href={`/${lang}/mattresses/${m.slug}`} className={styles.modelLink}>
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
