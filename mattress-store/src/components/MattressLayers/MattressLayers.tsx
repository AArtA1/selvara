import { Container } from "@/components/Container/Container";
import type { MattressLayer } from "@/data/types";
import styles from "./MattressLayers.module.css";

export function MattressLayers({ layers }: { layers: MattressLayer[] }) {
  return (
    <section className="section">
      <Container>
        <h2 className="section-title">What&apos;s Inside</h2>
        <div className={styles.layers}>
          {layers.map((layer, i) => (
            <div key={layer.name} className={styles.layer}>
              <div className={styles.number}>{i + 1}</div>
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
