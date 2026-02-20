"use client";

import { Container } from "@/components/Container/Container";
import type { MattressLayer } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./MattressLayers.module.css";

const sectionTitle = { ru: "Состав", en: "Inside" };

export function MattressLayers({ layers }: { layers: MattressLayer[] }) {
  const { lang } = useLanguage();

  return (
    <section className={`section ${styles.section}`}>
      <Container>
        <h2 className="section-title">{sectionTitle[lang]}</h2>
        <div className={styles.layers}>
          {layers.map((layer, i) => (
            <div key={layer.name} className={styles.layer}>
              <div className={styles.number}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className={styles.content}>
                <h3>{layer.name}</h3>
                <p>{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
