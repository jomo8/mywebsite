"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CaseReturnLink({ slug, className }: { slug: string; className: string }) {
  useEffect(() => {
    // The root layout persists when navigating back to the portfolio.
    document.documentElement.dataset.skipIntro = "returning";
  }, []);

  return (
    <Link className={className} href={`/#project-${slug}`}>
      <span aria-hidden="true">←</span> Selected work
    </Link>
  );
}
