"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./QuizTeaser.module.css";

const copy = {
  eyebrow: {
    ru: "Подбор матраса",
    en: "Mattress finder",
  },
  headline: {
    ru: "Какой матрас\nвам подойдёт?",
    en: "Which mattress\nis right for you?",
  },
  sub: {
    ru: "Ответьте на 3 вопроса — подберём модель под ваш стиль сна и предпочтения по жёсткости.",
    en: "Answer 3 questions — we'll match a model to your sleep style and firmness preferences.",
  },
  cta: { ru: "Начать подбор", en: "Start quiz" },
};

export function QuizTeaser() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      {/* Image side */}
      <div className={styles.imageWrap}>
        <Image
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&auto=format&fit=crop"
          alt=""
          fill
          className={styles.image}
          sizes="50vw"
        />
        <div className={styles.imageOverlay} />
      </div>

      {/* Content side */}
      <div className={styles.content}>
        <span className={styles.eyebrow}>{copy.eyebrow[lang]}</span>
        <h2 className={styles.headline}>
          {copy.headline[lang].split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h2>
        <p className={styles.sub}>{copy.sub[lang]}</p>
        <Link
          href={`/${lang}/quiz`}
          className={styles.btn}
          data-text={copy.cta[lang]}
        >
          <span className={styles.btnText}>{copy.cta[lang]}</span>
        </Link>
      </div>
    </section>
  );
}
