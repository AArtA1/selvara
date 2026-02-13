import { Container } from "@/components/Container/Container";
import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import type { Review } from "@/data/types";
import styles from "./ReviewsSection.module.css";

const reviews: Review[] = [
  {
    quote:
      "\u201CBest mattress I\u2019ve ever owned. The support is incredible and I wake up without any back pain. Worth every penny.\u201D",
    author: "Sarah M.",
    product: "Selvara Classic \u2014 Verified Buyer",
  },
  {
    quote:
      "\u201CThe delivery and setup was seamless. They even took away our old mattress. Customer service was outstanding.\u201D",
    author: "James R.",
    product: "Latex Hybrid \u2014 Verified Buyer",
  },
  {
    quote:
      "\u201CI was skeptical about buying a mattress online, but the 365-night trial sold me. Three months in and I\u2019m sleeping better than ever.\u201D",
    author: "Michelle T.",
    product: "Memory Foam Hybrid \u2014 Verified Buyer",
  },
];

export function ReviewsSection() {
  return (
    <section className="section section-cool">
      <Container>
        <h2 className="section-title">What Happy Sleepers Are Saying</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
