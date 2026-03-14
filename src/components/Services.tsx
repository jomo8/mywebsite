"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import CharReveal from "./CharReveal";
import TextReveal from "./TextReveal";
import AnimateIn from "./AnimateIn";
import { services, servicesIntro } from "@/lib/data";

export default function Services() {
  const titleRowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [titleRowHeights, setTitleRowHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    const measureTitleRows = () => {
      setTitleRowHeights(
        services.map(
          (_, idx) =>
            titleRowRefs.current[idx]?.getBoundingClientRect().height ?? 0,
        ),
      );
    };

    measureTitleRows();
    window.addEventListener("resize", measureTitleRows);
    return () => window.removeEventListener("resize", measureTitleRows);
  }, []);

  const titleRowOffsets = useMemo(() => {
    const offsets: number[] = [];
    let runningTotal = 0;

    services.forEach((_, idx) => {
      offsets[idx] = runningTotal;
      runningTotal += titleRowHeights[idx] ?? 0;
    });

    return offsets;
  }, [titleRowHeights]);

  return (
    <section id="Services">
      <div className="relative z-20 min-h-screen w-full overflow-x-clip">
        <section className="section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]">
          {/* Heading + Intro */}
          <div className="relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
            <h1 className="section-heading col-span-6 max-w-[18ch] text-accent-400">
              <CharReveal text="What I Do /" delay={100} />
            </h1>

            <div className="flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid">
              <div className="col-span-7 col-start-6 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row">
                <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px]">
                  (Services)
                </span>
                <TextReveal
                  text={servicesIntro}
                  className="w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-base text-[var(--color-secondary-50)]"
                  stagger={25}
                />
              </div>
            </div>
          </div>

          {/* Service Cards (Stacking) */}
          <div className="w-full pt-[var(--space-lg)]">
            <div className="mt-12 flex flex-col justify-between gap-y-16 bg-[var(--color-secondary-400)]">
              {services.map((service, idx) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  index={idx}
                  total={services.length}
                  titleOffsetPx={titleRowOffsets[idx] ?? 0}
                  onTitleRowRef={(node) => {
                    titleRowRefs.current[idx] = node;
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  total,
  titleOffsetPx,
  onTitleRowRef,
}: {
  service: (typeof services)[0];
  index: number;
  total: number;
  titleOffsetPx: number;
  onTitleRowRef: (node: HTMLDivElement | null) => void;
}) {
  // Base anchor for all sticky cards. Raise/lower this vh value to shift the
  // visible gap that aligns with the (02) title band.
  //   ↑  smaller = cards move up   (try 16vh, 15vh …)
  //   ↓  larger  = cards move down  (try 20vh, 22vh …)
  const BASE_TOP_VH = 20;
  const topOffset = `calc(${BASE_TOP_VH}vh + ${titleOffsetPx}px)`;
  // Add breathing room below each card to keep banners tucked
  const mbRem = (total - index) * 7; // em

  return (
    <div
      className="service-card"
      style={{
        top: topOffset,
        marginBottom: `${mbRem}em`,
      }}
    >
      {/* Card Header */}
      <div
        ref={onTitleRowRef}
        className="flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]"
      >
        <span className="col-span-2">({service.number})</span>
        <h3 className="col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]">
          {service.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12">
        <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]">
          <AnimateIn>
            <p className="max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]">
              {service.description}
            </p>
          </AnimateIn>

          <div className="flex flex-col divide-y divide-[var(--color-secondary-200)]">
            {service.skills.map((skill, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <span
                  className={`flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] ${
                    i === 0 ? "text-[length:var(--text-heading-4)]" : ""
                  }`}
                >
                  <span className="font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]">
                    0{i + 1}
                  </span>
                  {skill}
                </span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
