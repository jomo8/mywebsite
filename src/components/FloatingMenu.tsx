"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#Services" },
  { label: "Works", href: "#Works" },
  { label: "About", href: "#About" },
  { label: "Contact", href: "#Contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Github", href: "https://github.com" },
  { label: "Leetcode", href: "https://leetcode.com" },
];

export default function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getTriggerEl = () => {
      const firstServiceCard = document.querySelector<HTMLElement>(
        "#Services .service-card"
      );
      if (firstServiceCard) return firstServiceCard;

      return (
        document.querySelector<HTMLElement>("#Services") ??
        document.querySelector<HTMLElement>("#Experience")
      );
    };

    const updateVisibility = () => {
      const trigger = getTriggerEl();
      if (!trigger) {
        setIsVisible(false);
        return;
      }

      const { top, height } = trigger.getBoundingClientRect();
      const triggerPoint = top + height * 0.05;
      setIsVisible(triggerPoint <= window.innerHeight * 0.35);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent fixed elements (like the menu button) from shifting when
      // the scrollbar disappears on open.
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ── Button wrapper with accent rings ── */}
      <div
        className={`fixed right-8 top-9 z-[999999999] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-0 opacity-0"
        }`}
      >
        {/* Outer accent ring */}
        <div
          className={`absolute inset-0 rounded-full bg-[#3A3A37] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "scale-[2.6] opacity-100" : "scale-100 opacity-0"
          }`}
        />
        {/* Inner accent ring */}
        <div
          className={`absolute inset-0 rounded-full bg-[#232320] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen
              ? "scale-[1.8] opacity-100 delay-[50ms]"
              : "scale-100 opacity-0"
          }`}
        />
        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-10 rounded-full bg-[var(--color-accent-400)] p-3 shadow-lg"
        >
          <svg width="35" height="35" viewBox="0 0 35 35">
            <line
              x1="2"
              y1="13.5"
              x2="33"
              y2="13.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              className="origin-center transition-all duration-300"
              style={{
                transformOrigin: "17.5px 17.5px",
                transform: isOpen ? "translateY(.2vw) rotate(45deg)" : "none",
              }}
            />
            <line
              x1="2"
              y1="21.5"
              x2="33"
              y2="21.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              className="origin-center transition-all duration-300"
              style={{
                transformOrigin: "17.5px 17.5px",
                transform: isOpen
                  ? "translateY(-.2vw) rotate(-45deg)"
                  : "none",
              }}
            />
          </svg>
        </button>
      </div>

      {/* ── Backdrop (blur only, no dark tint) ── */}
      <div
        className={`fixed inset-0 z-[99999998] transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xl"
            : "pointer-events-none opacity-0 backdrop-blur-none"
        }`}
        onClick={closeMenu}
      />

      {/* ── Slide-in panel ── */}
      <aside
        className={`fixed right-0 top-0 z-[99999999] flex h-screen w-screen justify-end text-[var(--color-accent-200)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="relative z-20 flex h-full w-full max-w-2xl flex-col justify-end overflow-hidden rounded-md xl:max-w-3xl 3xl:max-w-4xl">
          <nav className="relative h-full px-[var(--space-md)] text-[length:var(--text-menu)] font-[700] uppercase leading-[100%] sm:px-[var(--space-xl)]">
            <ul className="flex h-full flex-col justify-center gap-y-[var(--space-3xs)]">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative flex w-fit items-center"
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="relative inline-block w-fit text-[length:var(--text-menu)] text-[var(--color-accent-200)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent-200)] after:transition-all after:duration-500 after:content-[''] hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start justify-start gap-y-[var(--space-md)] px-[var(--space-md)] pb-[var(--space-md)] sm:px-[var(--space-xl)] sm:pb-[var(--space-xl)]">
            <div className="flex flex-col">
              <span className="text-left text-[length:var(--text-base-small)] font-bold text-[var(--color-secondary-50)]">
                EMAIL ADDRESS
              </span>
              <a
                href="mailto:joseph.montalto@tufts.edu"
                onClick={closeMenu}
                className="hover-link link-text relative block h-fit overflow-hidden font-mono font-medium"
              >
                <span className="hover-link-top">
                  joseph.montalto@tufts.edu
                </span>
                <span aria-hidden="true" className="hover-link-bottom">
                  joseph.montalto@tufts.edu
                </span>
              </a>
            </div>

            <ul className="flex flex-nowrap justify-start gap-x-[var(--space-2xs)]">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[length:var(--text-base-small)] font-medium text-[var(--color-accent-200)] underline-offset-4 hover:underline"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
