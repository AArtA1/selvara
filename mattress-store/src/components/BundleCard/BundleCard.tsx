import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import styles from "./BundleCard.module.css";

const bundles = [
  {
    title: "The Complete Sleep Set",
    items: ["Any Selvara mattress", "Adjustable foundation", "Premium sheet set"],
    originalPrice: "$2,490",
    bundlePrice: "$1,990",
    savings: "Save $500",
  },
  {
    title: "The Foundation Bundle",
    items: ["Any Selvara mattress", "Platform foundation", "Mattress protector"],
    originalPrice: "$1,690",
    bundlePrice: "$1,390",
    savings: "Save $300",
  },
];

export function BundleCard() {
  return (
    <section className="section">
      <Container>
        <h2 className="section-title">Bundle &amp; Save</h2>
        <div className={styles.grid}>
          {bundles.map((bundle) => (
            <div key={bundle.title} className={styles.card}>
              <h3>{bundle.title}</h3>
              <ul className={styles.items}>
                {bundle.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.pricing}>
                <span className={styles.original}>{bundle.originalPrice}</span>
                <span className={styles.bundlePrice}>{bundle.bundlePrice}</span>
              </div>
              <span className={styles.savings}>{bundle.savings}</span>
              <Button href="/mattresses" variant="brand">
                Shop Bundle
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
