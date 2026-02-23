"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./HomeCta.module.css";

const copy = {
  headline: { ru: "100 ночей,\nчтобы убедиться.", en: "100 nights\nto be sure." },
  sub:      { ru: "Бесплатная доставка и установка включены в цену.", en: "Free delivery and setup included in the price." },
  cta:      { ru: "Смотреть матрасы", en: "View mattresses" },
};

export function HomeCta() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>
          {copy.headline[lang].split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h2>
        <p className={styles.sub}>{copy.sub[lang]}</p>
        <Link href={`/${lang}/mattresses`} className={styles.btn} data-text={copy.cta[lang]}>
          <span className={styles.btnText}>{copy.cta[lang]}</span>
        </Link>
      </div>
    </section>
  );
}
