import Link from "next/link";

interface HoverLinkProps {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
}

export default function HoverLink({
  href,
  label,
  className = "",
  external = false,
}: HoverLinkProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`hover-link ${className}`} {...linkProps}>
      <span className="hover-link-top">{label}</span>
      <span aria-hidden="true" className="hover-link-bottom">
        {label}
      </span>
    </Link>
  );
}
