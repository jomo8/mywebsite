"use client";

import { useState, useEffect, useRef } from "react";
import CharReveal from "./CharReveal";
import TextReveal from "./TextReveal";
import AnimateIn from "./AnimateIn";
import { projects, worksIntro } from "@/lib/data";

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Track the card whose center is closest to viewport center.
  // This prevents the counter from stopping between values.
  useEffect(() => {
    const updateActiveCard = () => {
      const viewportCenter = window.innerHeight / 2;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = idx;
        }
      });

      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveCard();
        ticking = false;
      });
    };

    updateActiveCard();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return (
    <section id="Works">
      <div className="section-padding bg-[var(--color-secondary-400)]">
        <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
          {/* Section Heading */}
          <h1 className="section-heading relative text-[var(--color-accent-400)]">
            <CharReveal text="SELECTED WORKS /" />
          </h1>

          {/*
          <div className="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
            <div className="col-span-7 col-start-1 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:col-start-6 sm:flex-row">
              <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)]">
                (PROJECTS)
              </span>
              <TextReveal
                text={worksIntro}
                className="w-full max-w-[25ch] text-balance font-medium leading-base text-[var(--color-secondary-50)] text-[length:var(--text-base-large)]"
                stagger={30}
              />
            </div>
          </div>
          */}

          {/* Projects Grid */}
          <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
            {/* Left counter (desktop) */}
            <div className="sticky top-12 col-span-5 hidden h-fit w-full text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex">
              <span className="relative">0</span>
              <div className="relative ml-[0.04em] h-[0.8em] w-[0.62em] overflow-hidden">
                <div
                  className="absolute left-0 top-0 flex w-fit flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{
                    transform: `translateY(-${activeIndex * 0.8}em)`,
                  }}
                >
                  {projects.map((_, i) => (
                    <span key={i} className="block h-[0.8em] leading-[0.8]">
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right project cards */}
            <aside className="relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]">
              {projects.map((project, i) => (
                <div
                  key={i}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  data-index={i}
                  className="project-card"
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimateIn>
                      {/* Project thumbnail */}
                      <div
                        className={`relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] ${
                          project.video || project.image
                            ? "p-[var(--space-2xs)] sm:p-[var(--space-xs)]"
                            : "p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]"
                        }`}
                      >
                        <div
                          className={`z-10 w-full overflow-clip rounded-lg ${
                            project.video || project.image ? "h-full flex items-center" : "aspect-[4/3]"
                          }`}
                        >
                          {project.video ? (
                            <video
                              className="w-full rounded-lg"
                              src={project.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : project.image ? (
                            <img
                              className="max-h-full max-w-full rounded-lg object-contain"
                              src={project.image}
                              alt={project.title}
                            />
                          ) : (
                            <div className="project-img aspect-[4/3] w-full rounded-lg bg-gray-100/10 flex items-center justify-center overflow-hidden">
                              <span className="text-[var(--color-secondary-100)] font-mono text-[length:var(--text-heading-3)] opacity-30">
                                {project.title}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Project info */}
                    <div className="flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
                      <div className="flex flex-col gap-y-[var(--space-3xs)]">
                        <span className="font-mono text-[length:var(--text-base-small)] font-medium text-[var(--color-secondary-50)]">
                          {project.subtitle}
                        </span>
                        <div className="w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]">
                          <span className="font-mono cursor-default">
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                        <span className="tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)]">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
