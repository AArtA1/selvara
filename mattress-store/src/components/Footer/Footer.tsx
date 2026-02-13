import Link from "next/link";
import { Container } from "@/components/Container/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Selvara
            </Link>
            <p>
              Thoughtful luxury sleep. The highest quality handcrafted mattresses at
              the most comfortable prices.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/mattresses">Mattresses</Link></li>
              <li><Link href="/sale">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/delivery-returns">Delivery &amp; Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>&copy; 2026 Selvara. All rights reserved.</span>
          <span>Privacy Policy &middot; Terms of Service &middot; Accessibility</span>
        </div>
      </Container>
    </footer>
  );
}
