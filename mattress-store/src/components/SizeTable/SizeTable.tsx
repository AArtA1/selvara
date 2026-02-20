"use client";

import { Container } from "@/components/Container/Container";
import type { SizePrice } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./SizeTable.module.css";

const copy = {
  title:      { ru: "Размеры",     en: "Sizes & Prices" },
  colSize:    { ru: "Размер",      en: "Size" },
  colDims:    { ru: "Параметры",   en: "Dimensions" },
  colPrice:   { ru: "Стоимость",   en: "Price" },
};

export function SizeTable({ sizes }: { sizes: SizePrice[] }) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <Container>
        <h2 className="section-title">{copy.title[lang]}</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{copy.colSize[lang]}</th>
                <th>{copy.colDims[lang]}</th>
                <th>{copy.colPrice[lang]}</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.size} className={styles.row}>
                  <td className={styles.sizeName}>{s.size}</td>
                  <td className={styles.dims}>{s.dimensions}</td>
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
