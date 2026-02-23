"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LineupSection.module.css";

type Lang = "ru" | "en";

const copy = {
  eyebrow: { ru: "Линейка",    en: "Collection" },
  cta:     { ru: "Смотреть все матрасы", en: "View all mattresses" },
};

const tiers = [
  {
    label:       { ru: "Натуральная основа",   en: "Natural foundation" },
    description: { ru: "Льняной войлок, кокос и перфорированный латекс. Три характера — один уровень качества.", en: "Linen felt, coconut and perforated latex. Three characters — one level of quality." },
    models: [
      { name: "Linen",   keyword: { ru: "Твёрдый",  en: "Firm"   }, slug: "selvara-linen"   },
      { name: "Coconut", keyword: { ru: "Средний",  en: "Medium" }, slug: "selvara-coconut" },
      { name: "Aero",    keyword: { ru: "Мягкий",   en: "Soft"   }, slug: "selvara-aero"    },
    ],
  },
  {
    label:       { ru: "Расширенный состав",   en: "Advanced construction" },
    description: { ru: "Более сложная конструкция, 1024 пружины на м². Для тех, кто знает, чего хочет.", en: "More complex construction, 1024 springs per m². For those who know what they want." },
    models: [
      { name: "Origin", keyword: { ru: "Поддержка", en: "Support"    }, slug: "selvara-origin" },
      { name: "Latex",  keyword: { ru: "Упругость", en: "Resilience" }, slug: "selvara-latex"  },
    ],
  },
  {
    label:       { ru: "Флагман",             en: "Flagship" },
    description: { ru: "Бельгийский латекс, мемори-пена, пружины 1024/м². Без компромиссов.", en: "Belgian latex, memory foam, 1024 springs/m². No compromises." },
    models: [
      { name: "Signature", keyword: { ru: "Адаптация", en: "Adaptive" }, slug: "selvara-signature" },
      { name: "Reserve",   keyword: { ru: "Флагман",   en: "Flagship" }, slug: "selvara-reserve"   },
    ],
  },
];

export function LineupSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{copy.eyebrow[lang as Lang]}</span>
        </div>

        <div className={styles.tiers}>
          {tiers.map((tier) => (
            <div key={tier.label.ru} className={styles.tier}>
              <div className={styles.tierMeta}>
                <span className={styles.tierLabel}>{tier.label[lang as Lang]}</span>
                <p className={styles.tierDesc}>{tier.description[lang as Lang]}</p>
              </div>
              <div className={styles.models}>
                {tier.models.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/${lang}/mattresses/${model.slug}`}
                    className={styles.model}
                  >
                    <span className={styles.modelName}>{model.name}</span>
                    <span className={styles.modelKeyword}>{model.keyword[lang as Lang]}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href={`/${lang}/mattresses`} className={styles.ctaBtn} data-text={copy.cta[lang as Lang]}>
            <span className={styles.ctaBtnText}>{copy.cta[lang as Lang]}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
