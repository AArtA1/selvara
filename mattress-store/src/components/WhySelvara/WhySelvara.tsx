import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import styles from "./WhySelvara.module.css";

const cards = [
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/crafted-in-america/d-crafted-in-america.jpg?dpr=2&auto=format&w=800",
    alt: "Social impact — giving better sleep",
    title: "Social Impact",
    text: "We're on a mission to give better sleep to those in need",
    href: "/about",
    linkLabel: "Learn about our mission",
  },
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/sustainability/d-sustainability.jpg?dpr=2&auto=format&w=800",
    alt: "Sustainability — caring for the planet",
    title: "Sustainability",
    text: "Taking better care of the place we call home",
    href: "/about",
    linkLabel: "Read about our choices",
  },
];

export function WhySelvara() {
  return (
    <section className="section">
      <FadeIn>
        <h2 className="section-title">Why Selvara</h2>
      </FadeIn>

      <FadeIn>
        <div className={styles.duo}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <Image
                src={card.image}
                alt={card.alt}
                width={800}
                height={600}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link href={card.href} className={styles.cardLink}>
                  {card.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
