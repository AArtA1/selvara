import Link from "next/link";
import { Container } from "@/components/Container/Container";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Container>
        <ol className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={item.label}>
              <span className={styles.separator}>/</span>
              {item.href && i < items.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className={styles.current}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
