"use client";

import Image from "next/image";
import styles from "./FeatureGrid.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  images: string[];
}

export function FeatureGrid({ features, images }: FeatureGridProps) {
  return (
    <section className={styles.craftSection}>
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
    </section>
  );
}
