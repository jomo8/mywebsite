import Image from "next/image";
import { aboutBio, experience, siteConfig, skillCategories } from "@/lib/data";
import styles from "./Profile.module.css";

export default function About() {
  return (
    <section id="About" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.group}>
          <h2 id="about-heading">About &amp; experience</h2>
          <div className={styles.introduction}>
            <Image
              src={siteConfig.profileImage}
              width={2048}
              height={1536}
              alt="Joe Montalto"
              className={styles.portrait}
            />
            <p>{aboutBio}</p>
          </div>
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
