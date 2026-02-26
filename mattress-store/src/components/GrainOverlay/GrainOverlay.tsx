"use client";

import styles from "./GrainOverlay.module.css";

export function GrainOverlay() {
  return (
    <div className={styles.grain} aria-hidden="true">
      <svg className={styles.svg}>
        <filter id="selvara-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#selvara-grain)" />
      </svg>
    </div>
  );
}
