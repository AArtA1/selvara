import { Container } from "@/components/Container/Container";
import type { ReviewDetailed } from "@/data/types";
import styles from "./ReviewList.module.css";

export function ReviewList({ reviews }: { reviews: ReviewDetailed[] }) {
  return (
    <section className="section section-warm">
      <Container>
        <div className={styles.list}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.stars}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <span className={styles.date}>
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3>{review.title}</h3>
              <p className={styles.quote}>{review.quote}</p>
              <div className={styles.footer}>
                <span className={styles.author}>{review.author}</span>
                <span className={styles.product}>{review.product}</span>
                {review.verified && (
                  <span className={styles.verified}>Verified Buyer</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
