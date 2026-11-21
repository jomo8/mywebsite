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
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="floating-navigation"
        disabled={!isVisible && !isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-[var(--space-md)] right-[var(--space-md)] z-[999999999] grid size-12 cursor-pointer place-items-center rounded-full border border-black/20 bg-[var(--color-accent-200)] text-[var(--color-foreground)] shadow-sm transition-[opacity,background-color] duration-200 hover:bg-[var(--color-accent-400)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-600)] disabled:pointer-events-none disabled:opacity-0 motion-reduce:transition-none md:right-[var(--space-lg)]"
      >
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none"
          style={{ transform: isOpen ? "rotate(45deg)" : "translateY(-3px)" }}
        />
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none"
          style={{ transform: isOpen ? "rotate(-45deg)" : "translateY(3px)" }}
        />
      </button>

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
        id="floating-navigation"
        inert={!isOpen}
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
                href="mailto:josephmontalto10@gmail.com"
                onClick={closeMenu}
                className="hover-link link-text relative block h-fit overflow-hidden font-mono font-medium"
              >
                <span className="hover-link-top">
                  josephmontalto10@gmail.com
                </span>
                <span aria-hidden="true" className="hover-link-bottom">
                  josephmontalto10@gmail.com
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
