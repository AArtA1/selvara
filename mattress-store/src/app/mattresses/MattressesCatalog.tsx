"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, t } from "@/contexts/LanguageContext";
import type { Product } from "@/data/types";
import styles from "./MattressesCatalog.module.css";

const tierLabels = {
  essential: { ru: "Основа", en: "Essential" },
  craft: { ru: "Мастерство", en: "Craft" },
  flagship: { ru: "Флагман", en: "Flagship" },
};

interface CatalogCardProps {
  product: Product;
  index: number;
  lang: string;
}

function CatalogCard({ product, index, lang }: CatalogCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/${lang}/mattresses/${product.slug}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.alt}
          width={800}
          height={600}
          className={styles.image}
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardNumber}>{num}</span>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardTagline}>{product.tagline}</p>
        <p className={styles.cardPrice}>{product.price}</p>
      </div>
      <span className={styles.cardAccent} aria-hidden="true" />
    </Link>
  );
}

export function MattressesCatalog({ products }: { products: Product[] }) {
  const { lang } = useLanguage();

  const essential = products.slice(0, 3);
  const craft = products.slice(3, 5);
  const flagship = products.slice(5, 7);

  return (
    <>
      {/* ── Collection header ── */}
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.eyebrow}>Selvara</span>
          <h1 className={styles.title}>
            {t({ ru: "Матрасы", en: "Mattresses" }, lang)}
          </h1>
          <div className={styles.titleRule} />
          <p className={styles.subtitle}>
            {t(
              {
                ru: "Натуральные материалы, собственное производство. Каждый матрас изготавливается по\u00A0заказу.",
                en: "Natural materials, own production. Every mattress is made to order.",
              },
              lang
            )}
          </p>
        </div>
      </section>

      {/* ── Tier 1 — Essential (3 cols) ── */}
      <section className={styles.tier}>
        <div className={styles.tierLabel}>
          <span className={styles.tierLine} />
          <span className={styles.tierText}>
            {t(tierLabels.essential, lang)}
          </span>
          <span className={styles.tierLine} />
        </div>
        <div className={`${styles.grid} ${styles.grid3}`}>
          {essential.map((p, i) => (
            <CatalogCard key={p.slug} product={p} index={i} lang={lang} />
          ))}
        </div>
      </section>

      {/* ── Tier 2 — Craft (2 cols) ── */}
      <section className={styles.tier}>
        <div className={styles.tierLabel}>
          <span className={styles.tierLine} />
          <span className={styles.tierText}>
            {t(tierLabels.craft, lang)}
          </span>
          <span className={styles.tierLine} />
        </div>
        <div className={`${styles.grid} ${styles.grid2}`}>
          {craft.map((p, i) => (
            <CatalogCard key={p.slug} product={p} index={i + 3} lang={lang} />
          ))}
        </div>
      </section>

      {/* ── Tier 3 — Flagship (2 cols) ── */}
      <section className={styles.tier}>
        <div className={styles.tierLabel}>
          <span className={styles.tierLine} />
          <span className={styles.tierText}>
            {t(tierLabels.flagship, lang)}
          </span>
          <span className={styles.tierLine} />
        </div>
        <div className={`${styles.grid} ${styles.grid2}`}>
          {flagship.map((p, i) => (
            <CatalogCard key={p.slug} product={p} index={i + 5} lang={lang} />
          ))}
        </div>
      </section>

      {/* ── Editorial interlude ── */}
      <section className={styles.interlude}>
        <p className={styles.interludeText}>
          {t(
            {
              ru: "Каждый матрас Selvara собирается вручную в нашем цехе в Подмосковье — из натурального латекса, кокосовой койры и льняного войлока.",
              en: "Every Selvara mattress is handcrafted in our workshop near Moscow — from natural latex, coconut coir, and linen felt.",
            },
            lang
          )}
        </p>
      </section>
    </>
  );
}
