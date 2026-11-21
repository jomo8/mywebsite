import HoverLink from "@/components/HoverLink";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="section-padding-x mt-[var(--space-md)] flex items-start justify-between gap-x-[var(--gap-fluid)] lg:items-center">
        <a href={siteConfig.resumePath} className="btn-primary btn-outline">
          <span className="btn-bg" aria-hidden="true"><span /></span>
          <span className="btn-text">View résumé</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="m-0 flex flex-col items-start text-[var(--color-secondary-100)] gap-y-[var(--space-3xs)] md:flex-row md:items-center md:gap-x-[var(--space-xs)] md:gap-y-0">
            {navLinks.map((link, i) => (
              <li key={link.href} className="header-menu-item" style={{ animationDelay: `${1800 + i * 80}ms` }}>
                <HoverLink href={link.href} label={link.label} className="header-menu-link" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
