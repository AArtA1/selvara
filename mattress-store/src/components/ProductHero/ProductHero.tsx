"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import type { ProductDetail } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./ProductHero.module.css";

const copy = {
  badge:      { ru: "Матрас · Selvara",  en: "Mattress · Selvara" },
  from:       { ru: "от",               en: "from" },
  selectSize: { ru: "Выбрать размер",   en: "Select size" },
  cta:        { ru: "Заказать",         en: "Order" },
};

export function ProductHero({ detail, price }: { detail: ProductDetail; price: string }) {
  const { lang } = useLanguage();

  const defaultIdx = detail.sizes.findIndex((s) => s.size === "160×200");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(defaultIdx >= 0 ? defaultIdx : 0);

  const currentSize = detail.sizes[selectedSize];

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>

          {/* ── Gallery ── */}
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={detail.images[selectedImage]}
                alt={detail.name}
                width={700}
                height={525}
                className={styles.image}
                priority
              />
            </div>
            {detail.images.length > 1 && (
              <div className={styles.thumbs}>
                {detail.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === selectedImage ? styles.thumbActive : ""}`}
                    onClick={() => setSelectedImage(i)}
                    aria-label={`Photo ${i + 1}`}
                  >
                    <Image src={img} alt="" width={88} height={66} className={styles.thumbImg} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className={styles.info}>
            <span className={styles.badge}>{copy.badge[lang]}</span>
            <h1 className={styles.name}>{detail.name}</h1>
            <p className={styles.tagline}>{detail.tagline}</p>

            <div className={styles.priceRow}>
              <span className={styles.priceFrom}>{copy.from[lang]}</span>
              <span className={styles.priceValue}>{currentSize?.price || price}</span>
              {currentSize?.dimensions && (
                <span className={styles.priceDims}>{currentSize.dimensions}</span>
              )}
            </div>

            <p className={styles.description}>{detail.description}</p>

            <div className={styles.sizeSelector}>
              <span className={styles.sizeLabel}>{copy.selectSize[lang]}</span>
              <div className={styles.sizes}>
                {detail.sizes.map((s, i) => (
                  <button
                    key={s.size}
                    className={`${styles.sizeBtn} ${i === selectedSize ? styles.sizeActive : ""}`}
                    onClick={() => setSelectedSize(i)}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            <button className={styles.ctaBtn} data-text={copy.cta[lang]}>
              <span className={styles.ctaBtnText}>{copy.cta[lang]}</span>
            </button>

            <div className={styles.miniProps}>
              {detail.valueProps.map((vp) => (
                <div key={vp.label} className={styles.miniProp}>
                  <strong>{vp.label}</strong>
                  <span>{vp.detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
