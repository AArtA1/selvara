import Image from "next/image";
import { Container } from "@/components/Container/Container";
import styles from "./WhySelvara.module.css";

const cards = [
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/premium-quality/d-premium-quality.jpg?dpr=1&auto=format&w=1440",
    alt: "Premium Quality",
    title: "Premium Quality",
    text: "Handcrafted with the finest materials for exceptional comfort and durability.",
  },
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/crafted-in-america/d-crafted-in-america.jpg?dpr=1&auto=format&w=1440",
    alt: "Crafted with Care",
    title: "Crafted with Care",
    text: "Made to order with attention to every detail, ensuring lasting quality.",
  },
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/sustainability/d-sustainability.jpg?dpr=1&auto=format&w=1440",
    alt: "Sustainability",
    title: "Sustainability",
    text: "Committed to eco-friendly practices and responsible manufacturing.",
  },
];

export function WhySelvara() {
  return (
    <section className="section">
      <Container>
        <h2 className="section-title">Why Selvara</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
