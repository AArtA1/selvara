import { Container } from "@/components/Container/Container";
import styles from "./Timeline.module.css";

const steps = [
  {
    title: "Place Your Order",
    description: "Choose your mattress, select your size, and check out. Your mattress is made to order.",
  },
  {
    title: "Handcrafted for You",
    description: "Your mattress is carefully crafted and quality-checked. This takes 3-7 business days.",
  },
  {
    title: "Free Delivery",
    description: "We schedule a delivery window that works for you. Delivery is always free.",
  },
  {
    title: "White-Glove Setup",
    description: "Our team brings your mattress to your room of choice and sets it up in place.",
  },
  {
    title: "Old Mattress Removal",
    description: "We'll take away your old mattress at no extra charge. One less thing to worry about.",
  },
];

export function Timeline() {
  return (
    <section className="section">
      <Container>
        <h2 className="section-title">From Order to Sweet Dreams</h2>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.marker}>
                <div className={styles.dot}>{i + 1}</div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
