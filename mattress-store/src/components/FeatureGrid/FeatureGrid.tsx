"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./FeatureGrid.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  images: string[];
  intro?: string;
}

const introDefault = {
  ru: "Каждый слой подобран за конкретные свойства: упругость, воздухопроницаемость, долговечность. Без синтетики, без компромиссов — только натуральные материалы, проверенные временем.",
  en: "Every layer is chosen for specific qualities: resilience, breathability, longevity. No synthetics, no compromises — only natural materials proven by time.",
};

export function FeatureGrid({ features, images, intro }: FeatureGridProps) {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      {/* ── Editorial intro ── */}
      <div className={styles.intro}>
        <p className={styles.introText}>
          {intro || introDefault[lang]}
        </p>
      </div>

      {/* ── Material blocks ── */}
      <div className={styles.materialsGrid}>
        {features.map((feature, i) => {
          const isReverse = i % 2 !== 0;
          const imgSrc = images[i % images.length];

          return (
            <div
              key={feature.title}
              className={`${styles.block} ${isReverse ? styles.blockReverse : ""}`}
            >
              <div className={styles.imageCol}>
                <div className={styles.imageWrap}>
                  <Image
                    src={imgSrc}
                    alt={feature.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              </div>
              <div className={styles.textCol}>
                <span className={styles.eyebrow}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
