"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./ReviewsSection.module.css";

type Lang = "ru" | "en";

const copy = {
  eyebrow: { ru: "Отзывы", en: "Reviews" },
};

const reviews = [
  {
    quote: {
      ru: "Покупал Origin после долгих сомнений. Через неделю понял — это именно то, что нужно. Никакой синтетики, нет запаха, держит форму. Жена тоже довольна.",
      en: "I bought the Origin after long deliberation. After a week I realised — this is exactly what I needed. No synthetics, no smell, holds its shape. My wife is pleased too.",
    },
    author: "Артём К.",
    model:  { ru: "Origin · 8 месяцев",    en: "Origin · 8 months" },
  },
  {
    quote: {
      ru: "Спала на Aero три года в другой квартире, теперь взяла Reserve для нового дома. Разница ощутимая, но оба хороши. Сервис — доставка, установка, вывоз старого — всё без единого вопроса.",
      en: "I slept on the Aero for three years in another flat, now I got the Reserve for a new home. The difference is noticeable, but both are excellent. Service — delivery, setup, removal of the old mattress — all without a single issue.",
    },
    author: "Екатерина Л.",
    model:  { ru: "Reserve · первый месяц", en: "Reserve · first month" },
  },
  {
    quote: {
      ru: "Брал Signature — мягкий вариант. Никаких компромиссов по материалам, это сразу чувствуется. Сто ночей прошли, возвращать не стал.",
      en: "I got the Signature — the soft version. No compromises on materials, you feel it immediately. The hundred nights passed — I kept it.",
    },
    author: "Дмитрий В.",
    model:  { ru: "Signature · 4 месяца",  en: "Signature · 4 months" },
  },
];

export function ReviewsSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{copy.eyebrow[lang as Lang]}</span>
        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <article key={i} className={styles.card}>
              <blockquote className={styles.quote}>
                {r.quote[lang as Lang]}
              </blockquote>
              <footer className={styles.footer}>
                <span className={styles.author}>{r.author}</span>
                <span className={styles.model}>{r.model[lang as Lang]}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
