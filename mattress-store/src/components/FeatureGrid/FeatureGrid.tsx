import type { ReactNode } from "react";
import { Container } from "@/components/Container/Container";
import styles from "./FeatureGrid.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, ReactNode> = {
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  comfort: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  cooling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  ),
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <section className="section section-warm">
      <Container>
        <h2 className="section-title">Key Features</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.icon}>
                {iconMap[feature.icon] || iconMap.support}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
