"use client";

import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./Hero.module.css";

const copy = {
  headline: { ru: "Только то, что важно.", en: "Only what matters." },
  cta: { ru: "Смотреть матрасы", en: "View mattresses" },
};

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideo}
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.subtitle}>{t(copy.headline, lang)}</h1>
        <div className={styles.heroActions}>
          <a
            href={`/${lang}/mattresses`}
            className={styles.heroBtn}
            data-text={t(copy.cta, lang)}
          >
            <span className={styles.heroBtnText}>{t(copy.cta, lang)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
