import styles from "./Button.module.css";

type ButtonVariant = "primary" | "outline" | "brand";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </a>
  );
}
