import { Button } from "@/components/Button/Button";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  return (
    <section className={styles.ctaBanner}>
      <h2>Don&apos;t Overpay for Luxury</h2>
      <p>
        Experience the Saatva difference with a risk-free 365-night home trial.
      </p>
      <Button href="#">Shop Mattresses</Button>
    </section>
  );
}
