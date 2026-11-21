"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [reveal, setReveal] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Let the initial dark screen settle, then fire the bubble reveal.
    const timer = setTimeout(() => setReveal(true), 120);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`preloader ${reveal ? "done" : ""}`}
      onTransitionEnd={(event) => {
        if (event.propertyName === "opacity") setHidden(true);
      }}
    />
  );
}
