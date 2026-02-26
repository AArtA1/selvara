"use client";

import { useEffect, useState } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./Hero.module.css";

const copy = {
  headline: { ru: "Только то,\nчто важно.", en: "Only what\nmatters." },
  cta: { ru: "Смотреть линейку", en: "View collection" },
  scroll: { ru: "Листайте", en: "Scroll" },
};

export function Hero() {
  const { lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

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

      <div className={`${styles.heroContent} ${loaded ? styles.loaded : ""}`}>
        <span className={styles.eyebrow}>Selvara</span>

        <h1 className={styles.headline}>
          {t(copy.headline, lang).split("\n").map((line, i) => (
            <span key={i} className={styles.headlineLine}>
              <span className={styles.headlineReveal}>{line}</span>
            </span>
          ))}
        </h1>

        <a
          href={`/${lang}/mattresses`}
          className={styles.heroBtn}
          data-text={t(copy.cta, lang)}
        >
          <span className={styles.heroBtnText}>{t(copy.cta, lang)}</span>
        </a>
      </div>

      <div className={`${styles.scrollIndicator} ${loaded ? styles.loaded : ""}`}>
        <span className={styles.scrollText}>{t(copy.scroll, lang)}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
