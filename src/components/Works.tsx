import Image from "next/image";
import Link from "next/link";
import { casePath, moreProjects, selectedWork, type CaseStudy } from "@/lib/data";
import styles from "./Works.module.css";

function StaffingPreview({ study }: { study: CaseStudy }) {
  return (
    <figure className={styles.staffingPreview}>
      <figcaption className={styles.figureLabel}>
        <span>Weekly staffing forecast</span>
        <span>Synthetic data</span>
      </figcaption>
      <div className={styles.tableCrop}>
        <Image
          src={study.figure.src}
          width={study.figure.width}
          height={study.figure.height}
          alt="Detail from the recreated weekly staffing forecast showing projected revenue by night."
        />
      </div>
    </figure>
  );
}

function EngineeringPreview() {
  return (
    <figure className={styles.engineeringPreview}>
      <figcaption className={styles.figureLabel}>Import workflow</figcaption>
      <ol className={styles.flow}>
        <li>Emailed export</li>
        <li>Validation</li>
        <li>Report data</li>
      </ol>
    </figure>
  );
}

function AnalysisPreview({ study }: { study: CaseStudy }) {
  return (
    <figure className={styles.analysisPreview}>
      <figcaption className={styles.figureLabel}>
        <span>Labor was 24.7% of sales</span>
        <span>Oct 1–5, 2026 · Synthetic data</span>
      </figcaption>
      <div className={styles.chartCrop}>
        <Image
          src={study.figure.src}
          width={study.figure.width}
          height={study.figure.height}
          alt={study.figure.alt}
        />
      </div>
    </figure>
  );
}

function CaseCard({
  study,
  children,
}: {
  study: CaseStudy;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={casePath(study.slug)}
      className={styles.feature}
      aria-labelledby={study.slug}
      aria-describedby={`${study.slug}-summary`}
    >
      {children}
      <div className={styles.caption}>
        <p className={styles.meta}>{study.category}</p>
        <h3 id={study.slug}>{study.title}</h3>
        <p className={styles.summary} id={`${study.slug}-summary`}>{study.summary}</p>
        <span className={styles.readCase}>Read the case study <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}

export default function Works() {
  return (
    <>
      <section id="Works" aria-labelledby="work-heading" className={styles.section}>
        <div id={`project-${selectedWork.featured.slug}`} className={styles.panel}>
          <div className={styles.sectionHeading}>
            <h2 id="work-heading">Selected work</h2>
            <p className={styles.meta}>Colette · 2026</p>
          </div>
          <CaseCard study={selectedWork.featured}>
            <StaffingPreview study={selectedWork.featured} />
          </CaseCard>
        </div>
        <div id={`project-${selectedWork.engineering.slug}`} className={styles.panel}>
          <CaseCard study={selectedWork.engineering}>
            <EngineeringPreview />
          </CaseCard>
        </div>
        <div id={`project-${selectedWork.analysis.slug}`} className={styles.panel}>
          <CaseCard study={selectedWork.analysis}>
            <AnalysisPreview study={selectedWork.analysis} />
          </CaseCard>
        </div>
      </section>

      <section id="MoreProjects" aria-labelledby="more-projects-heading" className={styles.section}>
        <div className={`${styles.panel} ${styles.more}`}>
          <div className={styles.sectionHeading}>
            <h2 id="more-projects-heading">More projects</h2>
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
      </section>
    </>
  );
}
