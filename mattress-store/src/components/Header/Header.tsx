import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.promoBanner}>
        <strong>Seasonal Offer</strong> — Save up to $300 on select
        mattresses. Limited time.
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Selvara
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/mattresses">Mattresses</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/delivery-returns">Delivery</Link></li>
          <li><Link href="/sale">Sale</Link></li>
        </ul>
        <div className={styles.navActions}>
          <Link href="/contact">Contact</Link>
          <Link href="#">Cart (0)</Link>
        </div>
      </nav>
    </header>
  );
}
