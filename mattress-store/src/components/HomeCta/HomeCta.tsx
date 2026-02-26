"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./HomeCta.module.css";

const copy = {
  eyebrow: { ru: "Обещание", en: "Our promise" },
  headline: { ru: "100 ночей,\nчтобы убедиться.", en: "100 nights\nto be sure." },
  details: [
    { ru: "Бесплатная доставка и установка", en: "Free delivery and setup" },
    { ru: "Вывоз старого матраса", en: "Old mattress removal" },
    { ru: "Гарантия 10 лет", en: "10-year warranty" },
  ],
  cta: { ru: "Смотреть матрасы", en: "View mattresses" },
};

export function HomeCta() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <Image
        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1800&q=80&auto=format&fit=crop"
        alt=""
        fill
        className={styles.bgImage}
        sizes="100vw"
        priority={false}
      />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>{copy.eyebrow[lang]}</span>
        <h2 className={styles.headline}>
          {copy.headline[lang].split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h2>

        <div className={styles.details}>
          {copy.details.map((d, i) => (
            <span key={i} className={styles.detailItem}>
              {d[lang]}
            </span>
          ))}
        </div>

        <Link
          href={`/${lang}/mattresses`}
          className={styles.btn}
          data-text={copy.cta[lang]}
        >
          <span className={styles.btnText}>{copy.cta[lang]}</span>
        </Link>
      </div>
    </section>
  );
}
