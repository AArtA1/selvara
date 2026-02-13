import { Container } from "@/components/Container/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              Saatva
            </a>
            <p>
              Smarter luxury sleep. The highest quality handcrafted mattresses at
              the most comfortable prices.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Mattresses</a></li>
              <li><a href="#">Bedding</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Bases</a></li>
              <li><a href="#">Bundles</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Delivery &amp; Shipping</a></li>
              <li><a href="#">Trial, Returns &amp; Exchanges</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Financing</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Viewing Rooms</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>&copy; 2026 Saatva. All rights reserved.</span>
          <span>Privacy Policy &middot; Terms of Service &middot; Accessibility</span>
        </div>
      </Container>
    </footer>
  );
}
