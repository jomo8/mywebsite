"use client";

import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.skipIntro !== "returning") return;

    // Re-enable smooth in-page links after the browser restores its position.
    const frame = requestAnimationFrame(() => { root.dataset.skipIntro = "returned"; });
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div aria-hidden="true" className="preloader" />;
}
