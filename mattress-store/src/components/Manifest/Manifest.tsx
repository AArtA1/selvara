"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Manifest.module.css";

const copy = {
  lines: {
    ru: [
      "Мы не добавляем лишнего.",
      "Только материалы, которые работают.",
      "Только конструкция, которая держит форму годами.",
      "Матрас — это не покупка. Это выбор среды, в которой вы живёте.",
    ],
    en: [
      "We don't add anything unnecessary.",
      "Only materials that work.",
      "Only construction that holds its shape for years.",
      "A mattress is not a purchase. It is a choice of the space you live in.",
    ],
  },
};

export function Manifest() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {copy.lines[lang].map((line, i) => (
          <p key={i} className={styles.line}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
