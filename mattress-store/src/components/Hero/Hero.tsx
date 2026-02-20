"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./Hero.module.css";

const copy = {
  headline: { ru: "Только то, что важно.", en: "Only what matters." },
  cta: { ru: "Смотреть матрасы", en: "View mattresses" },
};

export function Hero() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(ru|en)/, "") || "";

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
        <div className={styles.langToggle}>
          <Link
            href={`/ru${pathWithoutLocale}`}
            className={lang === "ru" ? styles.langActive : styles.langBtn}
          >
            RU
          </Link>
          <span className={styles.langDivider}>|</span>
          <Link
            href={`/en${pathWithoutLocale}`}
            className={lang === "en" ? styles.langActive : styles.langBtn}
          >
            EN
          </Link>
        </div>
      </div>
    </section>
  );
}
