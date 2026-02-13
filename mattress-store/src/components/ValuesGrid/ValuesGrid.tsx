import { Container } from "@/components/Container/Container";
import styles from "./ValuesGrid.module.css";

const values = [
  {
    title: "Quality First",
    text: "Every mattress is crafted with premium, responsibly sourced materials that meet the highest standards.",
  },
  {
    title: "Transparent Pricing",
    text: "No markups, no middlemen. We keep our prices fair by selling directly to you.",
  },
  {
    title: "Sustainability",
    text: "From organic materials to eco-friendly manufacturing, we minimize our environmental footprint.",
  },
  {
    title: "Customer Care",
    text: "Our sleep consultants are here to help you find the perfect mattress, with no pressure — ever.",
  },
];

export function ValuesGrid() {
  return (
    <section className="section section-cool">
      <Container>
        <h2 className="section-title">What We Stand For</h2>
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
