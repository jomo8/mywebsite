import HoverLink from "./HoverLink";
import ScrollToTop from "./ScrollToTop";
import LocalTime from "./LocalTime";
import { footerMenu, socials } from "@/lib/data";

export default function Footer() {
  return (
    <div className="section-padding-equal relative flex flex-col items-center justify-center gap-y-[var(--space-xl)] py-[var(--space-lg)]">
      {/* Links Grid */}
      <div className="grid-gap grid w-full grid-cols-2 gap-y-[var(--space-md)] text-[length:var(--text-base)] md:grid-cols-12">
        {/* Menu */}
        <div className="flex flex-col md:col-span-6">
          <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]">
            Menu
          </h3>
          <ul className="flex flex-col gap-y-[var(--space-3xs)]">
            {footerMenu.map((item) => (
              <li key={item.label}>
                <HoverLink
                  href={item.href}
                  label={item.label}
                  className="flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col md:col-span-3">
          <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]">
            Socials
          </h3>
          <ul className="flex flex-col gap-y-[var(--space-3xs)]">
            {socials.map((item) => (
              <li key={item.label}>
                <HoverLink
                  href={item.href}
                  label={item.label}
                  external
                  className="flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12">
        {/* Empty left */}
        <span className="flex font-[500] flex-col text-[length:var(--text-heading-3)] leading-tight tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:order-first sm:text-[length:var(--text-heading-3)] md:col-span-6" />

        {/* Local time */}
        <div className="flex flex-col text-[length:var(--text-base-small)] md:col-span-3">
          <span className="font-bold uppercase text-[var(--color-secondary-300)]">
            Local time
          </span>
          <LocalTime />
        </div>

        {/* Scroll to top */}
        <div className="hidden h-fit w-full justify-end md:col-span-3 md:flex">
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}
