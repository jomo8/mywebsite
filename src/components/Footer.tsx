import { footerMenu, siteConfig, socials } from "@/lib/data";
import HoverLink from "./HoverLink";
import LocalTime from "./LocalTime";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="section-padding-equal bg-[var(--color-accent-200)] text-[var(--color-secondary-300)]">
      <div className="mx-auto grid max-w-[76rem] grid-cols-2 items-start gap-[var(--space-md)] text-[length:var(--text-base)] md:grid-cols-[1fr_1fr_1fr_auto]">
        <nav aria-labelledby="footer-menu-heading">
          <h2 id="footer-menu-heading" className="mb-[var(--space-xs)] font-semibold">Menu</h2>
          <ul className="grid gap-y-[var(--space-3xs)]">
            {footerMenu.map(({ label, href }) => (
              <li key={href}>
                <HoverLink href={href} label={label} className="w-fit" />
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-[var(--space-xs)] font-semibold">Contact</h2>
          <ul className="grid gap-y-[var(--space-3xs)]">
            <li>
              <a className="underline-offset-4 hover:underline" href={`mailto:${siteConfig.contactEmail}`}>Email</a>
            </li>
            {socials.map(({ label, href }) => (
              <li key={href}>
                <HoverLink href={href} label={label} external className="w-fit" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-[var(--space-xs)]">
          <span className="font-semibold">Local time</span>
          <LocalTime />
        </div>
        <ScrollToTop />
      </div>
    </footer>
  );
}
