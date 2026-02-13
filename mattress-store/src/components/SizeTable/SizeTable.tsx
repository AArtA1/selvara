import { Container } from "@/components/Container/Container";
import type { SizePrice } from "@/data/types";
import styles from "./SizeTable.module.css";

export function SizeTable({ sizes }: { sizes: SizePrice[] }) {
  return (
    <section className="section section-cool">
      <Container>
        <h2 className="section-title">Sizes &amp; Prices</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Dimensions</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.size}>
                  <td className={styles.sizeName}>{s.size}</td>
                  <td>{s.dimensions}</td>
                  <td className={styles.price}>{s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
