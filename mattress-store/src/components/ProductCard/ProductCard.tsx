import Image from "next/image";
import styles from "./ProductCard.module.css";

export interface Product {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  price: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#" className={styles.card}>
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
          From {product.price} <span className={styles.priceNote}>/ Queen</span>
        </div>
      </div>
    </a>
  );
}
