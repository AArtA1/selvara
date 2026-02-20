"use client";

import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./MaterialsSection.module.css";

const content = {
  label: { ru: "Состав", en: "Materials" },
  headline: { ru: "Только натуральное", en: "Natural only" },
  body: {
    ru: "Лён, кокосовая койра, натуральный латекс. Мы не используем полиуретановую пену в несущих слоях — только то, что проверено временем.",
    en: "Linen, coconut coir, natural latex. We don't use polyurethane foam in structural layers — only what has stood the test of time.",
  },
  materials: [
    {
      name: { ru: "Натуральный латекс", en: "Natural latex" },
      desc: { ru: "Точечная эластичность, долговечность", en: "Point elasticity, durability" },
    },
    {
      name: { ru: "Кокосовая койра", en: "Coconut coir" },
      desc: { ru: "Упругая опора, вентиляция", en: "Firm support, breathability" },
    },
    {
      name: { ru: "Льняной войлок", en: "Linen felt" },
      desc: { ru: "Терморегуляция, сухость", en: "Temperature regulation, dryness" },
    },
    {
      name: { ru: "Конский волос", en: "Horsehair" },
      desc: { ru: "Упругость, долговечность", en: "Resilience, durability" },
    },
  ],
};

export function MaterialsSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <img
            src="https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=800&auto=format"
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.label}>{t(content.label, lang)}</p>
          <h2 className={styles.headline}>{t(content.headline, lang)}</h2>
          <p className={styles.body}>{t(content.body, lang)}</p>
          <ul className={styles.materials}>
            {content.materials.map((m) => (
              <li key={m.name.ru} className={styles.material}>
                <span className={styles.materialName}>{t(m.name, lang)}</span>
                <span className={styles.materialDesc}>{t(m.desc, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
