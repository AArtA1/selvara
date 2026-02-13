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
        width={348}
        height={232}
        className={styles.image}
      />
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.price}>
          {product.onSale && product.salePrice ? (
            <>
              <span className={styles.oldPrice}>{product.price}</span>{" "}
              <span className={styles.salePrice}>{product.salePrice}</span>
            </>
          ) : (
            <>From {product.price}</>
          )}
          <span className={styles.priceNote}> / Queen</span>
        </div>
        {product.saleLabel && (
          <span className={styles.saleBadge}>{product.saleLabel}</span>
        )}
      </div>
    </Link>
  );
}
