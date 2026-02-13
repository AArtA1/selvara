import styles from "./ReviewCard.module.css";

export interface Review {
  quote: string;
  author: string;
  product: string;
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <blockquote>{review.quote}</blockquote>
      <div className={styles.author}>{review.author}</div>
      <div className={styles.product}>{review.product}</div>
    </div>
  );
}
