import { Button } from "@/components/Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
        <h1>Luxury Mattresses Made Affordable</h1>
        <p>
          The highest quality handcrafted mattresses, bedding &amp; furniture at
          the most comfortable prices.
        </p>
        <div>
          <Button href="/mattresses">Shop All Mattresses</Button>
          <Button href="/about" variant="outline">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
