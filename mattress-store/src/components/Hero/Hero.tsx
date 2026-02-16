import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.subtitle}>
          Handcrafted mattresses designed for the way you rest.
        </h1>
        <div className={styles.heroActions}>
          <a href="/mattresses" className={styles.heroBtn}>
            Explore Collection
          </a>
          <a href="/mattresses#quiz" className={styles.heroBtnSecondary}>
            Find Your Mattress
          </a>
        </div>
      </div>
    </section>
  );
}
