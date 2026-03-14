import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-secondary-400)] text-center px-4">
      <h1 className="text-[length:var(--text-h1)] font-bold text-[var(--color-accent-400)] mb-4">
        404
      </h1>
      <p className="text-[length:var(--text-heading-4)] text-[var(--color-secondary-50)] mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="btn-primary"
      >
        <span className="btn-bg">
          <span />
        </span>
        <span className="btn-text">Go Home</span>
      </Link>
    </div>
  );
}
