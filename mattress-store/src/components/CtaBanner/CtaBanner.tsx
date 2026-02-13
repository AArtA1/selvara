import { Button } from "@/components/Button/Button";
import styles from "./CtaBanner.module.css";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaBanner({
  title = "Experience the Difference",
  subtitle = "Try any Selvara mattress risk-free with our 365-night home trial.",
  buttonText = "Shop Mattresses",
  buttonHref = "/mattresses",
}: CtaBannerProps) {
  return (
    <section className={styles.ctaBanner}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Button href={buttonHref}>{buttonText}</Button>
    </section>
  );
}
