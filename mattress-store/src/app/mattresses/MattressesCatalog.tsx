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
      <FilterBar onFilter={setFilter} />
      <section className="section section-warm">
        <Container>
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className={styles.empty}>No mattresses match the selected filter.</p>
          )}
        </Container>
      </section>
    </>
  );
}
