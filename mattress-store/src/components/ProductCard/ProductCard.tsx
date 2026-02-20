"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  const { lang } = useLanguage();

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
