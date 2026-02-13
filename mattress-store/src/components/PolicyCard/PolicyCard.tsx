import { Container } from "@/components/Container/Container";
import styles from "./PolicyCard.module.css";

const policies = [
  {
    title: "365-Night Trial",
    description:
      "Sleep on your mattress for up to a full year. Not the right fit? We'll pick it up and give you a full refund. We just ask that you try it for at least 30 nights.",
    highlight: "365 nights",
  },
  {
    title: "Free Returns",
    description:
      "If your mattress isn't right for you, contact us to arrange a free pickup. There are no return shipping fees, no restocking charges. We make it easy.",
    highlight: "No fees",
  },
  {
    title: "Lifetime Warranty",
    description:
      "Every Selvara mattress is backed by our lifetime warranty. We cover manufacturing defects, structural issues, and sagging beyond 2.5 cm. Quality guaranteed.",
    highlight: "Lifetime",
  },
];

export function PolicyCard() {
  return (
    <section className="section section-cool">
      <Container>
        <h2 className="section-title">Our Commitments</h2>
        <div className={styles.grid}>
          {policies.map((p) => (
            <div key={p.title} className={styles.card}>
              <span className={styles.highlight}>{p.highlight}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
