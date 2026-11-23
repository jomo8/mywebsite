import Image from "next/image";
import { Fragment } from "react";
import { siteConfig } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const words = siteConfig.name.split(" ");

  return (
    <section aria-labelledby="hero-name" className="mb-[-100svh]">
      <div className="section-padding-equal sticky top-0 flex min-h-svh items-end">
        <div className="flex w-full flex-col pt-40 md:gap-y-[var(--space-lg)] lg:pt-24">
          <h1 id="hero-name" aria-label={siteConfig.name} className="overflow-clip text-center font-semibold uppercase text-[var(--color-secondary-400)]">
            <span className="hidden whitespace-nowrap text-[clamp(3.8rem,12vw,12.5rem)] leading-[0.82] tracking-[-0.035em] md:block">
              {words.map((word, i) => (
                <Fragment key={word}>
                  {i > 0 && " "}
                  <span className={styles.namePart} style={{ animationDelay: `${2100 + i * 150}ms` }}>{word}</span>
                </Fragment>
              ))}
            </span>
            <span className="flex flex-col items-center whitespace-nowrap text-[length:min(var(--text-heading-display),15vw)] leading-[80%] tracking-[var(--tracking-heading)] md:hidden">
              {words.map((word, i) => (
                <span key={word} className="overflow-hidden">
                  {Array.from(word, (letter, j) => (
                    <span key={j} className={styles.namePart} style={{ animationDelay: `${2100 + i * 150 + j * 40}ms` }}>{letter}</span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <div className="grid grid-cols-12 gap-x-[var(--gap-fluid)] gap-y-[var(--space-md)]">
            <div className="col-span-12 flex flex-col items-start gap-y-[var(--space-sm)] pt-[var(--space-sm)] md:col-span-4 md:gap-y-[var(--space-md)]">
              <svg aria-hidden="true" viewBox="6 6 12 12" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="mb-[calc(var(--space-xl)-var(--space-md))] hidden size-6 text-[var(--color-accent-600)] md:block">
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
              <p className={`${styles.copy} max-w-[48ch] text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-100)] xl:text-[length:var(--text-base-large)] 3xl:text-[length:var(--text-heading-body)]`}>
                {siteConfig.tagline}
              </p>
              <a href="#Contact" className={`btn-primary ${styles.contact}`}>
                <span className="btn-bg" aria-hidden="true"><span /></span>
                <span className="btn-text">Contact <span aria-hidden="true">↗</span></span>
              </a>
            </div>

            <div className="col-span-4 flex justify-start md:justify-center">
              <div className="h-[15vh] w-full max-w-lg overflow-hidden rounded-lg md:h-[50vh]">
                <Image
                  src={siteConfig.profileImage}
                  width={2048}
                  height={1536}
                  alt="Joe Montalto"
                  priority
                  sizes="(max-width: 767px) 33vw, (max-width: 1600px) 33vw, 512px"
                  className={`${styles.portrait} h-full w-full object-cover object-center grayscale`}
                />
              </div>
            </div>

            <div className={`${styles.availability} col-span-8 flex flex-col items-end justify-end text-right uppercase md:col-span-4`}>
              <span className="max-w-[15ch] pr-2 font-mono text-[length:var(--text-base-small)] font-medium leading-snug tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)] md:max-w-max 3xl:text-[length:var(--text-base)]">
                {siteConfig.availability}
              </span>
              <span className="pr-2 text-[length:var(--text-heading-2)] font-semibold leading-none tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:text-[length:var(--text-heading-1--alt)] 3xl:text-[length:var(--text-heading-1)]">
                {siteConfig.availableDate}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="h-svh" />
    </section>
  );
}
