"use client";

import Image from "next/image";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./CraftSection.module.css";

const blocks = [
  {
    image:
      "https://saatva.imgix.net/products/saatva-classic/room-above/standard/saatva-classic-room-above-standard-3-2.jpg?w=800&auto=format",
    alt: {
      ru: "Натуральные материалы для матрасов",
      en: "Natural materials for mattresses",
    },
    title: { ru: "Натуральные материалы", en: "Natural Materials" },
    text: {
      ru: "Латекс, кокосовая койра, льняной войлок — каждый слой подобран за дышащие свойства, упругость и долговечность.",
      en: "Latex, coconut coir, linen felt — every layer chosen for breathability, resilience, and longevity.",
    },
  },
  {
    image:
      "https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=800&auto=format",
    alt: {
      ru: "Ручная сборка матраса на производстве",
      en: "Hand assembly of a mattress in the workshop",
    },
    title: { ru: "Ручная сборка", en: "Handcrafted Assembly" },
    text: {
      ru: "Каждый матрас собирается мастером вручную — от пружинного блока до финальной простёжки. Без конвейера.",
      en: "Every mattress is hand-assembled by a craftsman — from spring unit to final quilting. No assembly line.",
    },
  },
  {
    image:
      "https://saatva.imgix.net/products/saatva-classic/lifestyle1-plush-soft/saatva-classic-lifestyle1-plush-soft-3-2.jpg?w=800&auto=format",
    alt: {
      ru: "Матрас в интерьере спальни",
      en: "Mattress in a bedroom interior",
    },
    title: { ru: "Под ваши задачи", en: "Designed Around You" },
    text: {
      ru: "Жёсткость, размер, высота — каждый параметр настраивается. Матрас собирается под конкретного человека.",
      en: "Firmness, size, height — every parameter is adjustable. The mattress is built for a specific person.",
    },
  },
  {
    image:
      "https://saatva.imgix.net/products/saatva-contour5/room-above/standard/saatva-contour5-room-above-standard-3-2.jpg?w=800&auto=format",
    alt: {
      ru: "Готовый матрас Selvara в спальне",
      en: "Finished Selvara mattress in a bedroom",
    },
    title: { ru: "Собственное производство", en: "Own Production" },
    text: {
      ru: "Цех в Подмосковье. Прямые поставки без посредников — честная цена без наценок сетей.",
      en: "Workshop near Moscow. Direct supply without middlemen — honest pricing without retail markups.",
    },
  },
];

export function CraftSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {blocks.map((block, i) => (
          <div key={i} className={styles.cell}>
            <div className={styles.imageWrapper}>
              <Image
                src={block.image}
                alt={t(block.alt, lang)}
                width={720}
                height={480}
                className={styles.image}
              />
            </div>
            <h3 className={styles.title}>{t(block.title, lang)}</h3>
            <p className={styles.text}>{t(block.text, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
