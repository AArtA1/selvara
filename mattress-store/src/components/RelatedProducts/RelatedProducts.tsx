"use client";

import { Container } from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import type { Product } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./RelatedProducts.module.css";

const sectionTitle = { ru: "Откройте для себя", en: "More to Discover" };

export function RelatedProducts({ products }: { products: Product[] }) {
  const { lang } = useLanguage();

  if (products.length === 0) return null;

  return (
    <section className={`section ${styles.section}`}>
      <Container>
        <h2 className={`section-title ${styles.title}`}>{sectionTitle[lang]}</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} variant="editorial" />
          ))}
        </div>
      </Container>
    </section>
  );
}
