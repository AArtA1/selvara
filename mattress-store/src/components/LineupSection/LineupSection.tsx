"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LineupSection.module.css";

type Lang = "ru" | "en";

const copy = {
  eyebrow: { ru: "Линейка", en: "Collection" },
  cta:     { ru: "Смотреть все матрасы", en: "View all mattresses" },
};

const tiers = [
  {
    label: { ru: "Натуральная основа", en: "Natural foundation" },
    models: [
      {
        name: "Linen",
        keyword: { ru: "Твёрдый", en: "Firm" },
        price: "от 32 000 ₽",
        slug: "selvara-linen",
        img: "https://saatva.imgix.net/products/saatva-classic/room-above/standard/saatva-classic-room-above-standard-3-2.jpg?w=800&auto=format",
      },
      {
        name: "Coconut",
        keyword: { ru: "Средний", en: "Medium" },
        price: "от 33 000 ₽",
        slug: "selvara-coconut",
        img: "https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=800&auto=format",
      },
      {
        name: "Aero",
        keyword: { ru: "Мягкий", en: "Soft" },
        price: "от 32 500 ₽",
        slug: "selvara-aero",
        img: "https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=800&auto=format",
      },
    ],
  },
  {
    label: { ru: "Расширенный состав", en: "Advanced construction" },
    models: [
      {
        name: "Origin",
        keyword: { ru: "Поддержка", en: "Support" },
        price: "от 38 000 ₽",
        slug: "selvara-origin",
        img: "https://saatva.imgix.net/products/saatva-classic/lifestyle1-plush-soft/saatva-classic-lifestyle1-plush-soft-3-2.jpg?w=800&auto=format",
      },
      {
        name: "Latex",
        keyword: { ru: "Упругость", en: "Resilience" },
        price: "от 41 000 ₽",
        slug: "selvara-latex",
        img: "https://saatva.imgix.net/products/saatva-contour5/room-above/standard/saatva-contour5-room-above-standard-3-2.jpg?w=800&auto=format",
      },
    ],
  },
  {
    label: { ru: "Флагман", en: "Flagship" },
    models: [
      {
        name: "Signature",
        keyword: { ru: "Адаптация", en: "Adaptive" },
        price: "от 50 000 ₽",
        slug: "selvara-signature",
        img: "https://saatva.imgix.net/products/memory-foam-hybrid/sweep/memory-foam-hybrid-sweep-3-2.jpg?w=800&auto=format",
      },
      {
        name: "Reserve",
        keyword: { ru: "Флагман", en: "Flagship" },
        price: "от 62 000 ₽",
        slug: "selvara-reserve",
        img: "https://saatva.imgix.net/products/saatva-latex-hybrid/angle/standard/saatva-latex-hybrid-angle-standard-3-2.jpg?w=1200&auto=format",
      },
    ],
  },
];

export function LineupSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>{copy.eyebrow[lang as Lang]}</span>
      </div>

      {/* Tiers */}
      {tiers.map((tier, ti) => (
        <div key={tier.label.ru}>
          {/* Tier label bar */}
          <div className={styles.tierBar}>
            <span className={styles.tierLabel}>{tier.label[lang as Lang]}</span>
          </div>

          {/* Model cards row */}
          <div className={`${styles.row} ${styles[`row${ti + 1}` as keyof typeof styles]}`}>
            {tier.models.map((model) => (
              <Link
                key={model.slug}
                href={`/${lang}/mattresses/${model.slug}`}
                className={styles.card}
              >
                <Image
                  src={model.img}
                  alt={model.name}
                  fill
                  className={styles.photo}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <span className={styles.cardKeyword}>{model.keyword[lang as Lang]}</span>
                  <div className={styles.cardBottom}>
                    <h3 className={styles.cardName}>{model.name}</h3>
                    <span className={styles.cardPrice}>{model.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className={styles.footer}>
        <Link href={`/${lang}/mattresses`} className={styles.ctaBtn} data-text={copy.cta[lang as Lang]}>
          <span className={styles.ctaBtnText}>{copy.cta[lang as Lang]}</span>
        </Link>
      </div>
    </section>
  );
}
