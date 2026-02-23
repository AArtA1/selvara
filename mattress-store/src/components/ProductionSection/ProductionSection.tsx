"use client";

import Link from "next/link";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./ProductionSection.module.css";

const content = {
  label:    { ru: "Производство",          en: "Craftsmanship" },
  headline: { ru: "Собственное\nпроизводство", en: "Made by\nour own hands" },
  body: {
    ru: "Каждый матрас собирается вручную в Подмосковье. Полный контроль качества на каждом этапе — от выбора материала до момента, когда матрас оказывается у вас дома.",
    en: "Every mattress is assembled by hand near Moscow. Full quality control at every stage — from material selection to the moment it arrives in your home.",
  },
  cta: { ru: "О бренде", en: "About us" },
};

export function ProductionSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <img
          src="https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=1200&auto=format"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{t(content.label, lang)}</span>
        <h2 className={styles.headline}>
          {t(content.headline, lang).split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h2>
        <p className={styles.body}>{t(content.body, lang)}</p>
        <Link href={`/${lang}/about`} className={styles.cta}>
          {t(content.cta, lang)}
        </Link>
      </div>
    </section>
  );
}
