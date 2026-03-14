"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<string>("Loading...");

  useEffect(() => {
    function update() {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "America/New_York",
        }).format(new Date())
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)]">
      {time}
    </span>
  );
}
