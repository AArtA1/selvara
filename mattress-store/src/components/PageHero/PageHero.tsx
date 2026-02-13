import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
