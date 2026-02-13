import { Container } from "@/components/Container/Container";
import type { ReviewDetailed } from "@/data/types";
import styles from "./ReviewSummary.module.css";

export function ReviewSummary({ reviews }: { reviews: ReviewDetailed[] }) {
  const total = reviews.length;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / total;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <section className="section">
      <Container>
        <div className={styles.summary}>
          <div className={styles.rating}>
            <span className={styles.number}>{avg.toFixed(1)}</span>
            <div className={styles.stars}>
              {"★".repeat(Math.round(avg))}{"☆".repeat(5 - Math.round(avg))}
            </div>
            <span className={styles.count}>Based on {total} reviews</span>
          </div>
          <div className={styles.bars}>
            {distribution.map((d) => (
              <div key={d.star} className={styles.barRow}>
                <span className={styles.starLabel}>{d.star} ★</span>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${(d.count / total) * 100}%` }}
                  />
                </div>
                <span className={styles.barCount}>{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
