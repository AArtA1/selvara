import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import styles from "./WhySelvara.module.css";

const blocks = [
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/premium-quality/d-premium-quality.jpg?dpr=1&auto=format&w=720",
    alt: "Premium quality materials",
    title: "Premium Quality",
    text: "Every mattress is handcrafted with the finest materials — from organic cotton to tempered steel coils. We never cut corners, because your comfort depends on every detail.",
    position: "left" as const,
  },
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/crafted-in-america/d-crafted-in-america.jpg?dpr=1&auto=format&w=720",
    alt: "Crafted with care",
    title: "Crafted with Care",
    text: "Made to order with attention to every stitch and seam. No mass production, no shortcuts — just thoughtful manufacturing that results in a mattress you can feel the difference in.",
    position: "right" as const,
  },
  {
    image:
      "https://saatva.imgix.net/homepage/why-saatva/sustainability/d-sustainability.jpg?dpr=1&auto=format&w=720",
    alt: "Sustainable practices",
    title: "Better for the Planet",
    text: "From organic materials to eco-friendly manufacturing, we minimize our footprint. CertiPUR-US certified, responsibly sourced — a mattress that's better for you and the environment.",
    position: "left" as const,
  },
];

export function WhySelvara() {
  return (
    <section className="section">
      <Container>
        <FadeIn>
          <h2 className="section-title">Why Selvara</h2>
        </FadeIn>
        <div className={styles.blocks}>
          {blocks.map((block, i) => (
            <FadeIn key={block.title} delay={i * 100}>
              <div
                className={`${styles.block} ${block.position === "right" ? styles.reversed : ""}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={block.image}
                    alt={block.alt}
                    width={560}
                    height={400}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
