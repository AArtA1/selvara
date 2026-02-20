"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./CtaBanner.module.css";

const categories = [
  {
    image:
      "https://saatva.imgix.net/products/saatva-classic/lifestyle1-plush-soft/saatva-classic-lifestyle1-plush-soft-3-2.jpg?w=400&auto=format",
    label: "Bed Linen",
  },
  {
    image:
      "https://saatva.imgix.net/products/memory-foam-hybrid/sweep/memory-foam-hybrid-sweep-3-2.jpg?w=400&auto=format",
    label: "Bedding",
  },
  {
    image:
      "https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=400&auto=format",
    label: "Mattresses",
  },
  {
    image:
      "https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=400&auto=format",
    label: "Toppers",
  },
];

export function CtaBanner() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.headline}>
          Discover the finest mattresses, bedding and toppers. A marriage of
          refined materials and impeccable craftsmanship.
        </p>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.label} href={`/${lang}/mattresses`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={400}
                  height={500}
                  className={styles.image}
                />
              </div>
              <span className={styles.label}>{cat.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
