import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/mattresses/${product.slug}`} className={styles.card}>
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
        <span className={styles.discoverBtn}>Discover</span>
      </div>
    </Link>
  );
}
