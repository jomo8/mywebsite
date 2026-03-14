"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="section-padding-x mt-[var(--space-md)] flex flex-row items-start justify-between gap-x-[var(--gap-fluid)] lg:grid lg:grid-cols-12 lg:items-center">
        {/* Left – role label */}
        <div className="col-span-8 flex flex-col items-start gap-x-[var(--space-2xl)] gap-y-[var(--space-3xs)] lg:flex-row lg:items-center">
          <span className="block w-fit max-w-[14ch] text-balance font-medium leading-snug text-[var(--color-secondary-100)] text-[length:var(--text-base)] sm:max-w-max md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)]">
            <div
              className={`transition-all duration-500 ease-in transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {siteConfig.role}
            </div>
          </span>
        </div>

        {/* Right – navigation */}
        <nav className="col-span-4 flex justify-end text-[length:var(--text-base)] md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)]">
          <ul className="m-0 flex flex-col items-start text-[var(--color-secondary-100)] gap-y-[var(--space-3xs)] md:flex-row md:items-center md:gap-x-[var(--space-2xs)] md:gap-y-0 font-medium">
            {navLinks.map((link, i) => (
              <div
                key={link.label}
                className={`transition-all duration-500 ease-in transform ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${1500 + i * 80}ms` }}
              >
                <li className="flex leading-normal md:leading-snug">
                  <Link
                    href={link.href}
                    className="hover-link"
                  >
                    <span className="hover-link-top">{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="hover-link-bottom"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
