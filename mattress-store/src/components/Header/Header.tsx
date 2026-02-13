import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.promoBanner}>
        <strong>Presidents Day Sale</strong> — Save up to $600 on select
        mattresses. Limited time.
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          Saatva
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#">Mattresses</a></li>
          <li><a href="#">Furniture &amp; Decor</a></li>
          <li><a href="#">Bedding</a></li>
          <li><a href="#">Bundles</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
        <div className={styles.navActions}>
          <a href="#">Account</a>
          <a href="#">Cart (0)</a>
        </div>
      </nav>
    </header>
  );
}
