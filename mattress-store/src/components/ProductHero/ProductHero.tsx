"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductDetail } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { medusa } from "@/lib/medusa";
import styles from "./ProductHero.module.css";

const copy = {
  back:       { ru: "Матрасы",             en: "Mattresses" },
  badge:      { ru: "Изготавливается по заказу", en: "Made to order" },
  selectSize: { ru: "Размер",              en: "Size" },
  cta:        { ru: "Заказать",            en: "Order" },
  adding:     { ru: "Добавляем…",          en: "Adding…" },
};

export function ProductHero({ detail, price }: { detail: ProductDetail; price: string }) {
  const { lang } = useLanguage();
  const { addItem, loading: cartLoading } = useCart();

  const defaultIdx = detail.sizes.findIndex((s) => s.size === "160×200");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(defaultIdx >= 0 ? defaultIdx : 0);
  const [variantMap, setVariantMap] = useState<Record<string, string>>({});
  const [adding, setAdding] = useState(false);

  // Fetch Medusa variant IDs for this product
  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const { products } = await medusa.store.product.list({
          handle: detail.slug,
          fields: "*variants",
        });
        const product = products?.[0];
        if (!product?.variants) return;
        const map: Record<string, string> = {};
        for (const v of product.variants) {
          if (v.title && v.id) map[v.title] = v.id;
        }
        setVariantMap(map);
      } catch {
        // silently fail — cart will not work but page still renders
      }
    };
    fetchVariants();
  }, [detail.slug]);

  const currentSize = detail.sizes[selectedSize];
  const hasMultipleImages = detail.images.length > 1;

  const goNext = () => setSelectedImage((i) => (i + 1) % detail.images.length);
  const goPrev = () => setSelectedImage((i) => (i - 1 + detail.images.length) % detail.images.length);

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>

        {/* ── Gallery (left) ── */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            {detail.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={detail.name}
                width={1200}
                height={900}
                className={`${styles.image} ${i === selectedImage ? styles.imageActive : ""}`}
                priority={i === 0}
              />
            ))}
          </div>

          {hasMultipleImages && (
            <div className={styles.galleryControls}>
              <button className={styles.navBtn} onClick={goPrev} aria-label="Previous image">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <div className={styles.dots}>
                {detail.images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === selectedImage ? styles.dotActive : ""}`}
                    onClick={() => setSelectedImage(i)}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
              <button className={styles.navBtn} onClick={goNext} aria-label="Next image">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* ── Info panel (right) ── */}
        <div className={styles.info}>
          <div className={styles.infoInner}>

            {/* Back link */}
            <Link href={`/${lang}/mattresses`} className={styles.backLink}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
                <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {copy.back[lang]}
            </Link>

            {/* Product name + tagline */}
            <h1 className={styles.name}>{detail.name}</h1>
            <p className={styles.tagline}>{detail.tagline}</p>

            {/* Key specs */}
            {detail.specs && detail.specs.length > 0 && (
              <dl className={styles.specs}>
                {detail.specs.map((s) => (
                  <div key={s.label} className={styles.specRow}>
                    <dt className={styles.specLabel}>{s.label}</dt>
                    <dd className={styles.specValue}>{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Purchase panel */}
            <div className={styles.purchasePanel}>
              <div className={styles.priceRow}>
                <span className={styles.priceValue}>{currentSize?.price || price}</span>
              </div>

              {/* Size selector */}
              <div className={styles.sizeRow}>
                <span className={styles.sizeLabel}>{copy.selectSize[lang]}</span>
                <div className={styles.sizeDropdown}>
                  <select
                    className={styles.sizeSelect}
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(Number(e.target.value))}
                  >
                    {detail.sizes.map((s, i) => (
                      <option key={s.size} value={i}>
                        {s.size} — {s.dimensions}
                      </option>
                    ))}
                  </select>
                  <svg className={styles.selectArrow} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              {/* Made to order badge */}
              <div className={styles.badgeRow}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeText}>{copy.badge[lang]}</span>
              </div>

              {/* CTA */}
              <button
                className={`${styles.ctaBtn} ${adding || cartLoading ? styles.ctaBtnLoading : ""}`}
                disabled={adding || cartLoading}
                onClick={async () => {
                  const sizeLabel = detail.sizes[selectedSize]?.size;
                  const variantId = sizeLabel ? variantMap[sizeLabel] : undefined;
                  if (!variantId) return;
                  setAdding(true);
                  await addItem(variantId, 1);
                  setAdding(false);
                }}
              >
                <span className={styles.ctaBtnText}>
                  {adding ? copy.adding[lang] : copy.cta[lang]}
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
