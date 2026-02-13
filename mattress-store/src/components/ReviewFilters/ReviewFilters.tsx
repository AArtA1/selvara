"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/Container/Container";
import { ReviewList } from "@/components/ReviewList/ReviewList";
import type { ReviewDetailed } from "@/data/types";
import styles from "./ReviewFilters.module.css";

interface ReviewFiltersProps {
  reviews: ReviewDetailed[];
}

const productNames = [
  "All Products",
  "Selvara Classic",
  "Memory Foam Hybrid",
  "Selvara Latex Hybrid",
  "Contour5",
  "Zenhaven",
  "Selvara Rx",
];

export function ReviewFilters({ reviews }: ReviewFiltersProps) {
  const [product, setProduct] = useState("All Products");
  const [sortBy, setSortBy] = useState<"newest" | "highest">("newest");

  const filtered = useMemo(() => {
    let result = [...reviews];

    if (product !== "All Products") {
      result = result.filter((r) => r.product === product);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [reviews, product, sortBy]);

  return (
    <>
      <div className={styles.bar}>
        <Container>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label htmlFor="product-filter">Product:</label>
              <select
                id="product-filter"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className={styles.select}
              >
                {productNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label htmlFor="sort-filter">Sort by:</label>
              <select
                id="sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "highest")}
                className={styles.select}
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rated</option>
              </select>
            </div>
            <span className={styles.count}>{filtered.length} reviews</span>
          </div>
        </Container>
      </div>
      <ReviewList reviews={filtered} />
    </>
  );
}
