"use client";

import { useState } from "react";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Container } from "@/components/Container/Container";
import type { Product } from "@/data/types";
import styles from "./MattressesCatalog.module.css";

const typeMap: Record<string, string[]> = {
  innerspring: ["selvara-classic"],
  "memory-foam": ["memory-foam-hybrid", "contour5"],
  latex: ["latex-hybrid", "zenhaven"],
  hybrid: ["selvara-classic", "memory-foam-hybrid", "latex-hybrid"],
};

export function MattressesCatalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => typeMap[filter]?.includes(p.slug));

  return (
    <>
      <section className={styles.collectionHeader}>
        <Container>
          <h1 className={styles.collectionTitle}>Линейка матрасов</h1>
          <p className={styles.collectionSubtitle}>
            Натуральные материалы, собственное производство. Каждый матрас изготавливается
            по&nbsp;заказу — выберите размер и&nbsp;жёсткость.
          </p>
        </Container>
      </section>
      <FilterBar onFilter={setFilter} />
      <section className={`section section-warm ${styles.catalogSection}`}>
        <Container>
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} variant="editorial" />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className={styles.empty}>Нет матрасов, подходящих под выбранный фильтр.</p>
          )}
        </Container>
      </section>
    </>
  );
}
