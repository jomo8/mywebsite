import { siteConfig, socials } from "@/lib/data";
import styles from "./Profile.module.css";

export default function Contact() {
  return (
    <section id="Contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className={styles.contact}>
        <div className={styles.group}>
          <h2 id="contact-heading">Contact</h2>
          <p className={styles.contactIntro}>
            I’m open to forward deployed engineering, software engineering, and data analyst roles.
          </p>
        </div>
        <div className={styles.contactLinks}>
          <a className={styles.email} href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          <ul className={styles.profiles} aria-label="Professional profiles">
            {socials.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label} <span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
