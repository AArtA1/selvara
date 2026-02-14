"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/Container/Container";
import type { Review } from "@/data/types";
import styles from "./ReviewsSection.module.css";

const reviews: Review[] = [
  {
    quote:
      "Best mattress I\u2019ve ever owned. The support is incredible and I wake up without any back pain. Worth every penny.",
    author: "Sarah M.",
    product: "Selvara Classic",
  },
  {
    quote:
      "The delivery and setup was seamless. They even took away our old mattress. Customer service was outstanding.",
    author: "James R.",
    product: "Selvara Latex Hybrid",
  },
  {
    quote:
      "I was skeptical about buying a mattress online, but the 365-night trial sold me. Three months in and I\u2019m sleeping better than ever.",
    author: "Michelle T.",
    product: "Memory Foam Hybrid",
  },
  {
    quote:
      "After years of chronic lower back pain, the Selvara Rx has been transformative. I wake up feeling refreshed instead of stiff.",
    author: "David K.",
    product: "Selvara Rx",
  },
];

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 300);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const review = reviews[current];

  return (
    <section className="section section-cool">
      <Container>
        <div className={styles.slider}>
          <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote className={`${styles.quote} ${fading ? styles.fading : ""}`}>
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <div className={`${styles.attribution} ${fading ? styles.fading : ""}`}>
            <span className={styles.author}>{review.author}</span>
            <span className={styles.divider}>&mdash;</span>
            <span className={styles.product}>{review.product} &middot; Verified Buyer</span>
          </div>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
