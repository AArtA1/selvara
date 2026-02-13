import { Container } from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import type { Product } from "@/data/types";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
  title?: string;
  background?: "warm" | "cool" | "none";
}

export function ProductGrid({
  products,
  title = "Find the Right Mattress for You",
  background = "warm",
}: ProductGridProps) {
  const bgClass =
    background === "warm"
      ? "section-warm"
      : background === "cool"
        ? "section-cool"
        : "";

  return (
    <section className={`section ${bgClass}`}>
      <Container>
        {title && <h2 className="section-title">{title}</h2>}
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
