"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const firstName = "JOE";
  const lastName = "MONTALTO";

  return (
    <section className="mb-[-100svh] py-0">
      <div className="section-padding-equal sticky top-0 flex h-svh items-end">
        <div className="relative flex w-full flex-col md:gap-y-[var(--space-lg)]">
          {/* ── Hero Heading ── */}
          <h1 className="overflow-clip text-center md:text-center">
            {/* Desktop: single line */}
            <span className="hidden md:block w-full whitespace-nowrap text-center text-[clamp(3.8rem,12vw,12.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.035em] text-[var(--color-secondary-400)]">
              <span
                className={`inline-block transition-all duration-700 ease-out ${
                  show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {firstName}
              </span>{" "}
              <span
                className={`inline-block transition-all duration-700 ease-out ${
                  show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                {lastName}
              </span>
            </span>

            {/* Mobile: stacked */}
            <span className="flex flex-col items-center text-center text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] md:hidden">
              <div className="overflow-hidden">
                {firstName.split("").map((char, i) => (
                  <span
                    key={`m1-${i}`}
                    className={`inline-block transition-all duration-600 ease-out ${
                      show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    }`}
                    style={{ transitionDelay: `${200 + i * 40}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="overflow-hidden">
                {lastName.split("").map((char, i) => (
                  <span
                    key={`m2-${i}`}
                    className={`inline-block transition-all duration-600 ease-out ${
                      show
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    }`}
                    style={{
                      transitionDelay: `${200 + (firstName.length + i) * 40}ms`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </span>
          </h1>

          {/* ── Hero Content Grid ── */}
          <div className="relative grid w-full grid-cols-12 justify-between gap-x-[var(--gap-fluid)] gap-y-[var(--space-md)]">
            {/* Left column */}
            <div className="col-span-12 flex flex-col justify-between gap-y-[var(--space-2xl)] pt-[var(--space-sm)] md:col-span-4 md:gap-y-[var(--space-md)]">
              <div className="flex flex-col gap-[var(--space-md)] md:gap-y-[var(--space-xl)]">
                {/* Arrow icon */}
                <div className="hidden overflow-clip md:block">
                  <span
                    className={`block transition-all duration-500 ${
                      show ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.25"
                      viewBox="6 6 12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="m-0 size-4 p-0 md:size-6"
                      style={{ color: "#8C8C73" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="7" x2="17" y2="17" />
                      <polyline points="17 7 17 17 7 17" />
                    </svg>
                  </span>
                </div>

                {/* Tagline + CTA */}
                <div className="flex flex-col gap-y-[var(--space-sm)] md:gap-y-[var(--space-md)]">
                  <div className="w-full max-w-[32ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-100)] xl:text-[length:var(--text-base-large)] 3xl:text-[length:var(--text-heading-body)]">
                    <div className="overflow-hidden">
                      <span>
                        {siteConfig.tagline.split(" ").map((word, i) => (
                          <span
                            key={i}
                            className={`inline-block pr-2 transition-all duration-600 ease-out ${
                              show
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-full"
                            }`}
                            style={{ transitionDelay: `${700 + i * 30}ms` }}
                          >
                            {word}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="overflow-clip">
                    <div
                      className={`transition-all duration-700 ease-out ${
                        show
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[100px]"
                      }`}
                      style={{ transitionDelay: "1100ms" }}
                    >
                      <Link href="#Contact">
                        <button className="btn-primary">
                          <span className="btn-bg">
                            <span />
                          </span>
                          <span className="btn-text">CONTACT ↗</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center column – profile image */}
            <div className="col-span-4 flex flex-col items-start md:items-center">
              <div className="flex h-fit w-fit flex-col items-center justify-center gap-y-[var(--space-2xs)] overflow-hidden rounded-md">
                <div
                  className={`pointer-events-none h-[15vh] max-w-lg rounded-lg md:h-[50vh] transition-all duration-1000 ease-out ${
                    show
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.3]"
                  }`}
                  style={{
                    clipPath: show
                      ? "inset(0 0 0 0)"
                      : "inset(0 0 100% 0)",
                    transitionDelay: "600ms",
                  }}
                >
                  <Image
                    alt="Profile photo"
                    width={1536}
                    height={2040}
                    className="h-full w-full object-cover object-center grayscale"
                    src={siteConfig.profileImage}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right column – availability */}
            <div className="col-span-8 flex w-full flex-col items-end justify-end md:col-span-4">
              <div className="overflow-clip">
                <span className="block max-w-[15ch] text-right font-mono text-[length:var(--text-base-small)] font-medium uppercase leading-snug tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)] md:max-w-max 3xl:text-[length:var(--text-base)]">
                  <div className="overflow-hidden">
                    {siteConfig.availability.split(" ").map((word, i) => (
                      <span
                        key={i}
                        className={`inline-block pr-2 transition-all duration-600 ease-out ${
                          show
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-full"
                        }`}
                        style={{ transitionDelay: `${900 + i * 50}ms` }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </span>
              </div>

              <div className="overflow-clip">
                <span className="block text-[length:var(--text-heading-2)] font-semibold uppercase leading-none tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:text-[length:var(--text-heading-1--alt)] 3xl:text-[length:var(--text-heading-1)]">
                  <div className="overflow-hidden">
                    <span
                      className={`inline-block pr-2 transition-all duration-700 ease-out ${
                        show
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-full"
                      }`}
                      style={{ transitionDelay: "1100ms" }}
                    >
                      {siteConfig.availableDate}
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for sticky effect */}
      <div className="h-svh" />
    </section>
  );
}
