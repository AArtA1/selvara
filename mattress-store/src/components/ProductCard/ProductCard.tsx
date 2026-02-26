"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  variant?: "overlay" | "editorial" | "minimal";
  firmness?: 1 | 2 | 3; // 1 = мягкий, 2 = средний, 3 = жёсткий
}

export function ProductCard({ product, variant = "overlay", firmness }: ProductCardProps) {
  const { lang } = useLanguage();

  if (variant === "minimal") {
    return (
      <Link href={`/${lang}/mattresses/${product.slug}`} className={styles.minimalCard}>
        <div className={styles.minimalImageWrapper}>
          <Image
            src={product.image}
            alt={product.alt}
            width={600}
            height={400}
            className={styles.minimalImage}
          />
        </div>
        <div className={styles.minimalDivider} />
        <div className={styles.minimalBody}>
          <div className={styles.minimalMeta}>
            <span className={styles.minimalBrand}>Selvara</span>
            {firmness && (
              <div
                className={styles.minimalFirmness}
                aria-label={`Жёсткость ${firmness} из 3`}
              >
                {([1, 2, 3] as const).map((level) => (
                  <span
                    key={level}
                    className={`${styles.minimalDot} ${level <= firmness ? styles.minimalDotFilled : ""}`}
                  />
                ))}
              </div>
            )}
          </div>
          <h3 className={styles.minimalName}>{product.name}</h3>
          {product.tagline && (
            <p className={styles.minimalTagline}>{product.tagline}</p>
          )}
          <div className={styles.minimalFooter}>
            <div className={styles.minimalFooterDivider} />
            <div className={styles.minimalFooterRow}>
              <span className={styles.minimalPrice}>{product.price}</span>
              <span className={styles.minimalArrow} aria-hidden="true">→</span>
            </div>
          </div>
        </div>
        <span className={styles.minimalGoldLine} aria-hidden="true" />
      </Link>
    );
  }

  if (variant === "editorial") {
    return (
      <Link href={`/${lang}/mattresses/${product.slug}`} className={styles.editorialCard}>
        <div className={styles.editorialImageWrapper}>
          <Image
            src={product.image}
            alt={product.alt}
            width={600}
            height={400}
            className={styles.editorialImage}
          />
        </div>
        <div className={styles.editorialInfo}>
          <h3 className={styles.editorialName}>{product.name}</h3>
          <p className={styles.editorialTagline}>{product.tagline}</p>
          <p className={styles.editorialPrice}>{product.price}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/${lang}/mattresses/${product.slug}`} className={styles.card}>
      <Image
        src={product.image}
        alt={product.alt}
        width={600}
        height={400}
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <span className={styles.discoverBtn} data-text="Discover">
          <span className={styles.discoverBtnText}>Discover</span>
        </span>
      </div>
    </Link>
  );
}
