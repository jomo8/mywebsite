import type { Metadata } from "next";
import Image from "next/image";
import CaseReturnLink from "@/components/CaseReturnLink";
import { notFound } from "next/navigation";
import { casePath, selectedWork, siteConfig } from "@/lib/data";
import styles from "./case.module.css";

type CasePageProps = { params: Promise<{ slug: string }> };

const studies = Object.values(selectedWork);

export const dynamicParams = false;

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

function getStudy(slug: string) {
  const study = studies.find(study => study.slug === slug);
  if (!study) notFound();
  return study;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const study = getStudy((await params).slug);
  const title = `${study.pageTitle} | Joe Montalto`;
  const url = casePath(study.slug);
  const { src, width, height, alt } = study.figure;

  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "Joe Montalto",
      title,
      description: study.summary,
      url,
      images: [{ url: src, width, height, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.summary,
      images: [{ url: src, alt }],
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const study = getStudy((await params).slug);
  const { figure } = study;

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <CaseReturnLink className={styles.back} slug={study.slug} />

        <header className={styles.header}>
          <p className={styles.metadata}>
            <span>{study.category}</span>
            <span>Colette · 2026</span>
          </p>
          <h1>{study.pageTitle}</h1>
          <p className={styles.summary}>{study.summary}</p>
        </header>

        <figure className={styles.figure}>
          <Image src={figure.src} width={figure.width} height={figure.height}
            alt={figure.alt} loading="eager" className={styles.image} />
          <figcaption>
            <p>{figure.caption}</p>
            <a href={figure.src}>Open full-size figure <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>

        <section className={styles.narrative}>
          <h2>{study.detailHeading}</h2>
          <p>{study.body}</p>
        </section>

        <footer className={styles.footer}>
          <a href={siteConfig.resumePath}>View résumé <span aria-hidden="true">↗</span></a>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </footer>
      </article>
    </main>
  );
}
