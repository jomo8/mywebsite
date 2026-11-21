"use client";

import { useState, useEffect } from "react";
import HoverLink from "@/components/HoverLink";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="section-padding-x mt-[var(--space-md)] flex items-start justify-between gap-x-[var(--gap-fluid)] lg:items-center">
        <a href="/jrm_resume_1.pdf" className="btn-primary btn-outline">
          <span className="btn-bg" aria-hidden="true">
            <span />
          </span>
          <span className="btn-text">View résumé</span>
        </a>

        {/* Right – navigation */}
        <nav>
          <ul className="m-0 flex flex-col items-start text-[var(--color-secondary-100)] gap-y-[var(--space-3xs)] md:flex-row md:items-center md:gap-x-[var(--space-2xs)] md:gap-y-0">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ease-in transform ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${1500 + i * 80}ms` }}
              >
                <HoverLink href={link.href} label={link.label} className="header-menu-link" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
