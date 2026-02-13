import { Container } from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./ProductGrid.module.css";

export function ProductGrid() {
  return (
    <section className="section section-warm">
      <Container>
        <h2 className="section-title">Find the Right Mattress for You</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
