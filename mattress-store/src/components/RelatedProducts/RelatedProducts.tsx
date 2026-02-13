import { Container } from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import type { Product } from "@/data/types";
import styles from "./RelatedProducts.module.css";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="section section-warm">
      <Container>
        <h2 className="section-title">You May Also Like</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
