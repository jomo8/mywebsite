import { moreProjects, selectedWork } from "@/lib/data";
import styles from "./Works.module.css";

function StudyCaption({ study }: { study: typeof selectedWork.featured }) {
  return (
    <div className={styles.caption}>
      <p className={styles.meta}>{study.category}</p>
      <h3>{study.title}</h3>
      <p className={styles.summary}>{study.summary}</p>
    </div>
  );
}

export default function Works() {
  return (
    <section id="Works" aria-labelledby="work-heading" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.sectionHeading}>
          <h2 id="work-heading">Selected work</h2>
          <p className={styles.meta}>Case studies in progress</p>
        </div>

        <article className={styles.feature}>
          <div className={styles.briefPreview} aria-hidden="true">
            <div className={styles.paper}>
              <span className={styles.paperTitle}>Project brief</span>
              {["Scope", "Approach", "Outcomes"].map((label) => (
                <span key={label} className={styles.paperRow}>{label}</span>
              ))}
            </div>
          </div>
          <StudyCaption study={selectedWork.featured} />
        </article>

        <div className={styles.supporting}>
          <article>
            <div className={styles.flowPreview} aria-hidden="true">
              <span>Input</span> → <span>Process</span> → <span>Output</span>
            </div>
            <StudyCaption study={selectedWork.engineering} />
          </article>
          <article>
            <div className={styles.ratioPreview} aria-hidden="true">
              <span>Measure</span>
              <span>Baseline</span>
            </div>
            <StudyCaption study={selectedWork.analysis} />
          </article>
        </div>

        <div className={styles.more}>
          <div className={styles.sectionHeading}>
            <h2>More projects</h2>
            <p className={styles.meta}>{moreProjects.year}</p>
          </div>
          <ul>
            {moreProjects.items.map((project) => (
              <li key={project.href}>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.title}<span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
