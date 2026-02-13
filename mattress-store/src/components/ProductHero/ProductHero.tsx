"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Container/Container";
import type { ProductDetail } from "@/data/types";
import styles from "./ProductHero.module.css";

interface ProductHeroProps {
  detail: ProductDetail;
  price: string;
}

export function ProductHero({ detail, price }: ProductHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    detail.sizes.findIndex((s) => s.size === "Queen")
  );

  const currentSize = detail.sizes[selectedSize >= 0 ? selectedSize : 0];

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={detail.images[selectedImage]}
                alt={detail.name}
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
            {detail.images.length > 1 && (
              <div className={styles.thumbs}>
                {detail.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === selectedImage ? styles.thumbActive : ""}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <Image src={img} alt="" width={80} height={53} className={styles.thumbImg} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.info}>
            <h1>{detail.name}</h1>
            <p className={styles.tagline}>{detail.tagline}</p>
            <div className={styles.price}>
              From {currentSize?.price || price}
              <span className={styles.sizeLabel}> / {currentSize?.size || "Queen"}</span>
            </div>

            <p className={styles.description}>{detail.description}</p>

            <div className={styles.sizeSelector}>
              <span className={styles.sizeTitle}>Select size:</span>
              <div className={styles.sizes}>
                {detail.sizes.map((s, i) => (
                  <button
                    key={s.size}
                    className={`${styles.sizeBtn} ${i === selectedSize ? styles.sizeActive : ""}`}
                    onClick={() => setSelectedSize(i)}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>

            <Button href="#" variant="brand">
              Add to Cart
            </Button>

            <div className={styles.miniProps}>
              {detail.valueProps.map((vp) => (
                <div key={vp.label} className={styles.miniProp}>
                  <strong>{vp.label}</strong>
                  <span>{vp.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
