"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [reveal, setReveal] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Let the initial dark screen settle, then fire the bubble reveal.
    const t1 = setTimeout(() => setReveal(true), 120);
    // Remove overlay once the reveal has fully covered the screen.
    const t2 = setTimeout(() => setHidden(true), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return <div className={`preloader ${reveal ? "done" : ""}`} />;
}
