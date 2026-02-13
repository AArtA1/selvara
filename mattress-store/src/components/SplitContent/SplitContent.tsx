import Image from "next/image";
import { Container } from "@/components/Container/Container";
import styles from "./SplitContent.module.css";

interface SplitContentProps {
  title: string;
  text: string;
  image: string;
  alt: string;
  imagePosition?: "left" | "right";
}

export function SplitContent({
  title,
  text,
  image,
  alt,
  imagePosition = "left",
}: SplitContentProps) {
  return (
    <section className="section">
      <Container>
        <div
          className={`${styles.grid} ${imagePosition === "right" ? styles.reversed : ""}`}
        >
          <div className={styles.imageWrap}>
            <Image
              src={image}
              alt={alt}
              width={560}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
