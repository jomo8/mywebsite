"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { navLinks, siteConfig, socials } from "@/lib/data";

const menuItems = [{ label: "Home", href: "#" }, ...navLinks];

export default function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const workSection = document.getElementById("Works");
    if (!workSection) return;

    const updateVisibility = () => {
      const { top } = workSection.getBoundingClientRect();
      setIsVisible(top <= window.innerHeight * 0.35);
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
    if (!isOpen) return;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    buttonRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    buttonRef.current?.focus({ preventScroll: true });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!isOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;

    const links = panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
    const last = links?.item(links.length - 1);
    if (event.shiftKey && event.target === buttonRef.current) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && event.target === last) {
      event.preventDefault();
      buttonRef.current?.focus();
    }
  }

  return (
    <div
      role={isOpen ? "dialog" : undefined}
      aria-modal={isOpen || undefined}
      aria-label={isOpen ? "Navigation" : undefined}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
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

      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[99999998] bg-black/20 backdrop-blur transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        id="floating-navigation"
        ref={panelRef}
        inert={!isOpen}
        className={`fixed top-0 right-0 z-[99999999] flex h-dvh w-full max-w-xl flex-col overflow-y-auto bg-[var(--color-secondary-400)] px-[var(--space-md)] pt-24 pb-[var(--space-lg)] text-[var(--color-accent-200)] transition-transform duration-300 motion-reduce:transition-none sm:px-[var(--space-lg)] ${
          isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <nav aria-label="Floating navigation" className="my-auto py-[var(--space-md)]">
          <ul className="grid gap-y-[var(--space-3xs)]">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="inline-block text-[length:var(--text-menu)] leading-tight font-bold uppercase underline-offset-4 hover:underline focus-visible:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[var(--color-secondary-200)] pt-[var(--space-sm)]">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            onClick={closeMenu}
            className="break-all text-[length:var(--text-base)] underline underline-offset-4"
          >
            {siteConfig.contactEmail}
          </a>
          <ul className="mt-[var(--space-xs)] flex flex-wrap gap-x-[var(--space-sm)] text-[var(--color-accent-500)]">
            {socials.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu} className="underline-offset-4 hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
