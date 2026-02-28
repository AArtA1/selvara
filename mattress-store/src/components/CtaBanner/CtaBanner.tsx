"use client";

import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./CtaBanner.module.css";

const copy = {
  heading: {
    ru: "Не уверены, какой матрас выбрать?",
    en: "Not sure which mattress to choose?",
  },
  subheading: {
    ru: "Мы поможем подобрать модель под ваш стиль сна, вес и предпочтения по жёсткости.",
    en: "We'll help you pick the right model for your sleep style, weight, and firmness preference.",
  },
  cta: {
    ru: "Все матрасы",
    en: "All mattresses",
  },
  ctaContact: {
    ru: "Связаться с нами",
    en: "Contact us",
  },
};

export function CtaBanner() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.heading}>{copy.heading[lang]}</h2>
          <p className={styles.subheading}>{copy.subheading[lang]}</p>
          <div className={styles.actions}>
            <Link href={`/${lang}/mattresses`} className={styles.btnPrimary}>
              {copy.cta[lang]}
            </Link>
            <Link href={`/${lang}/contact`} className={styles.btnSecondary}>
              {copy.ctaContact[lang]}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
