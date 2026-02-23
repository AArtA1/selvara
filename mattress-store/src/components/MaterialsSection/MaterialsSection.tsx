"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./MaterialsSection.module.css";

type Lang = "ru" | "en";

const copy = {
  eyebrow:  { ru: "Состав",             en: "Composition" },
  headline: { ru: "Только натуральное", en: "Natural only" },
  body: {
    ru: "Лён, кокосовая койра, натуральный латекс. Мы не используем полиуретановую пену в несущих слоях — только то, что проверено временем.",
    en: "Linen, coconut coir, natural latex. We don't use polyurethane foam in structural layers — only what has stood the test of time.",
  },
};

const materials = [
  {
    num:    "01",
    name:   { ru: "Натуральный\nлатекс", en: "Natural\nlatex"   },
    desc:   { ru: "Точечная эластичность", en: "Point elasticity" },
    // Close-up of white latex foam texture
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&auto=format&fit=crop",
    alt: "Натуральный латекс",
  },
  {
    num:    "02",
    name:   { ru: "Кокосовая\nкойра",   en: "Coconut\ncoir"    },
    desc:   { ru: "Упругая опора",        en: "Firm support"    },
    // Natural coconut fiber texture
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop",
    alt: "Кокосовая койра",
  },
  {
    num:    "03",
    name:   { ru: "Льняной\nвойлок",    en: "Linen\nfelt"      },
    desc:   { ru: "Терморегуляция",      en: "Temperature reg." },
    // Linen fabric close-up
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop",
    alt: "Льняной войлок",
  },
  {
    num:    "04",
    name:   { ru: "Конский\nволос",     en: "Horse\nhair"      },
    desc:   { ru: "Упругость",           en: "Resilience"       },
    // Fine natural fibres close-up
    img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=900&q=80&auto=format&fit=crop",
    alt: "Конский волос",
  },
];

export function MaterialsSection() {
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <span className={styles.eyebrow}>{copy.eyebrow[lang as Lang]}</span>
        <div className={styles.headerContent}>
          <h2 className={styles.headline}>{copy.headline[lang as Lang]}</h2>
          <p className={styles.body}>{copy.body[lang as Lang]}</p>
        </div>
      </header>

      {/* ── Asymmetric editorial grid ── */}
      <div className={styles.grid}>
        {materials.map((m, i) => (
          <article key={m.num} className={`${styles.cell} ${styles[`cell${i + 1}` as keyof typeof styles]}`}>
            <Image
              src={m.img}
              alt={m.alt}
              fill
              className={styles.photo}
              sizes={
                i === 0 ? "40vw" :
                i === 1 ? "60vw" :
                "30vw"
              }
            />
            <div className={styles.overlay} />
            <div className={styles.cellContent}>
              <span className={styles.cellNum}>{m.num}</span>
              <div className={styles.cellText}>
                <h3 className={styles.cellName}>
                  {m.name[lang as Lang].split("\n").map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                </h3>
                <span className={styles.cellDesc}>{m.desc[lang as Lang]}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
