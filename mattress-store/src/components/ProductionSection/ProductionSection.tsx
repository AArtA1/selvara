"use client";

import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./ProductionSection.module.css";

const content = {
  label: { ru: "Производство", en: "Production" },
  headline: { ru: "Собственное производство", en: "Our own factory" },
  location: { ru: "Подмосковье, Россия", en: "Moscow region, Russia" },
  since: { ru: "С 1996 года", en: "Since 1996" },
  body: {
    ru: "Все матрасы производятся на собственном заводе. Полный контроль качества на каждом этапе — от выбора материала до упаковки.",
    en: "Every mattress is produced at our own factory. Full quality control at every stage — from material selection to packaging.",
  },
  stats: [
    {
      value: "30+",
      label: { ru: "лет опыта", en: "years of experience" },
    },
    {
      value: "100%",
      label: { ru: "ручная сборка", en: "handcrafted" },
    },
    {
      value: "7",
      label: { ru: "моделей в линейке", en: "models in the range" },
    },
  ],
};

export function ProductionSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>{t(content.label, lang)}</p>
          <h2 className={styles.headline}>{t(content.headline, lang)}</h2>
          <p className={styles.meta}>
            {t(content.location, lang)} &nbsp;·&nbsp; {t(content.since, lang)}
          </p>
          <p className={styles.body}>{t(content.body, lang)}</p>
          <div className={styles.stats}>
            {content.stats.map((s) => (
              <div key={s.value} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{t(s.label, lang)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            src="https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=800&auto=format"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
