import { aboutBio, experience, skillCategories } from "@/lib/data";
import styles from "./Profile.module.css";

export default function About() {
  return (
    <section id="About" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.group}>
          <h2 id="about-heading">About</h2>
          <p className={styles.introduction}>{aboutBio}</p>
          <dl className={styles.details}>
            {experience.map(({ role, description }) => (
              <div key={role}>
                <dt>{role}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.group}>
          <h2>Skills</h2>
          <dl className={styles.details}>
            {skillCategories.map(({ title, skills }) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{skills}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
