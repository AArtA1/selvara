import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import styles from "./ComparisonTeaser.module.css";

export function ComparisonTeaser() {
  return (
    <section className={styles.teaser}>
      <Container>
        <div className={styles.content}>
          <h2>Not sure which mattress is right for you?</h2>
          <p>
            Every body is different. Compare our mattresses side-by-side to find
            the perfect match for your sleep style.
          </p>
          <Button href="/mattresses" variant="brand">
            View All Mattresses
          </Button>
        </div>
      </Container>
    </section>
  );
}
