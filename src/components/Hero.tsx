import { siteConfig } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.content}>
        <h1 id="hero-name" className={styles.name}>
          {siteConfig.name.split(" ").map((word) => (
            <span className={styles.word} key={word}>
              <span>{word}</span>{" "}
            </span>
          ))}
        </h1>
        <div className={styles.introduction}>
          <p>{siteConfig.tagline}</p>
          <a className="btn-primary" href="#Works">
            <span className="btn-bg" aria-hidden="true"><span /></span>
            <span className="btn-text">View selected work <span aria-hidden="true">↓</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
