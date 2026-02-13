"use client";

import { useState } from "react";
import { Container } from "@/components/Container/Container";
import styles from "./Accordion.module.css";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  title?: string;
}

export function Accordion({ items, title = "Frequently Asked Questions" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section">
      <Container>
        <h2 className="section-title">{title}</h2>
        <div className={styles.accordion}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
            >
              <button className={styles.trigger} onClick={() => toggle(i)}>
                <span>{item.question}</span>
                <span className={styles.icon}>{openIndex === i ? "\u2212" : "+"}</span>
              </button>
              <div className={styles.content}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
