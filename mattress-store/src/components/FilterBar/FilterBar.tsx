"use client";

import { useState } from "react";
import { Container } from "@/components/Container/Container";
import styles from "./FilterBar.module.css";

const filters = [
  { key: "all", label: "All Mattresses" },
  { key: "innerspring", label: "Innerspring" },
  { key: "memory-foam", label: "Memory Foam" },
  { key: "latex", label: "Latex" },
  { key: "hybrid", label: "Hybrid" },
];

interface FilterBarProps {
  onFilter: (key: string) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [active, setActive] = useState("all");

  return (
    <div className={styles.bar}>
      <Container>
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${active === f.key ? styles.active : ""}`}
              onClick={() => {
                setActive(f.key);
                onFilter(f.key);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
