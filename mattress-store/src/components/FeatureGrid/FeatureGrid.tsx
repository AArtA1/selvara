"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/Container/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./FeatureGrid.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, ReactNode> = {
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  comfort: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M2 13h20" />
      <path d="M6 7V5a6 6 0 0112 0v2" />
    </svg>
  ),
  cooling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  ),
};

const sectionTitle = { ru: "Особенности", en: "Features" };

export function FeatureGrid({ features }: { features: Feature[] }) {
  const { lang } = useLanguage();

  return (
    <section className="section section-warm">
      <Container>
        <h2 className="section-title">{sectionTitle[lang]}</h2>
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
