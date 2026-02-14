import { Button } from "@/components/Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Replace src with your video file, e.g. "/hero-video.mp4" */}
      {/* <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="https://saatva.imgix.net/homepage/hero-v1/d-hero-v1.jpg?dpr=2&auto=format&w=1440"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}
      <div className={styles.heroBg} />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Selvara</p>
        <h1>Sleep, Elevated</h1>
        <p className={styles.subtitle}>
          Handcrafted mattresses designed for the way you rest.
        </p>
        <Button href="/mattresses">Explore Collection</Button>
      </div>
    </section>
  );
}
