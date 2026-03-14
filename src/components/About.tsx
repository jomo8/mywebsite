"use client";

import CharReveal from "./CharReveal";
import TextReveal from "./TextReveal";
import {
  aboutHeadings,
  aboutTagline,
  aboutBio,
  skillCategories,
} from "@/lib/data";

export default function About() {
  return (
    <section id="About" className="mt-[-2vh]">
      <div className="z-[999] relative">
        <div className="section-padding flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] pb-[5em] sm:pb-[10em] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]">
          <div className="custom-grid">
            {/* Heading: DEVELOPER / DESIGNER / CREATOR */}
            <h2 className="section-heading relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1 text-[length:var(--text-menu)]">
              {aboutHeadings.map((heading, i) => (
                <span key={heading}>
                  <CharReveal text={heading} delay={i * 200} />
                </span>
              ))}
            </h2>

            {/* Skills Grid */}
            <div className="relative z-0 lg:col-span-6 col-span-full flex w-full items-center overflow-clip rounded-md md:items-end order-1 md:order-2">
              <section className="self-start px-0 py-5 md:px-6 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full">
                <div className="max-w-6xl mx-auto">
                  <h2 className="font-montrealMono mb-8 text-center text-[length:var(--text-menu)] font-bold leading-none tracking-[var(--tracking-heading)] md:text-[length:var(--text-h1-alt)]">
                    Skills
                  </h2>

                  <div className="grid grid-cols-3 md:grid-cols-3 gap-0 md:gap-5 md:p-5 p-0">
                    {skillCategories.map((cat) => (
                      <div
                        key={cat.title}
                        className="p-0 md:p-2 rounded-2xl shadow-md hover:shadow-lg transition self-start"
                      >
                        <h3 className="font-montrealMono mb-4 hidden text-xl font-semibold leading-none tracking-[var(--tracking-base)] md:flex">
                          {cat.title}
                        </h3>
                        <ul className="space-y-3 md:text-base">
                          {cat.items.map((skill) => (
                            <li
                              key={skill}
                              className="flex relative items-start gap-2 text-[var(--color-secondary-50)] text-[length:var(--text-base)] md:text-[length:var(--text-base)]"
                            >
                              <span className="hover-link">
                                <span className="hover-link-top">
                                  <span className="font-mono cursor-default">
                                    {skill}
                                  </span>
                                </span>
                                <span
                                  aria-hidden="true"
                                  className="hover-link-bottom"
                                >
                                  <span className="font-mono cursor-default">
                                    {skill}
                                  </span>
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* About Body */}
          <div className="custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]">
            {/* Bio Text */}
            <div className="col-span-7 col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]">
              {/* Tagline */}
              <TextReveal
                text={aboutTagline}
                className="relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]"
                stagger={30}
              />

              {/* Full bio */}
              <div className="flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row">
                <span className="flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]">
                  <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]">
                    <CharReveal text="(About Me)" stagger={20} />
                  </span>
                </span>

                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]">
                  {aboutBio.map((para, i) => (
                    <TextReveal
                      key={i}
                      text={para}
                      stagger={20}
                      delay={i * 200}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
