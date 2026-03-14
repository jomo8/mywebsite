"use client";

import { useInView } from "@/hooks/useInView";

interface CharRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

export default function CharReveal({
  text,
  className = "",
  stagger = 25,
  delay = 0,
}: CharRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="overflow-hidden">
      <span className={`char-reveal ${isInView ? "revealed" : ""} ${className}`}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="char"
            style={{ transitionDelay: `${delay + i * stagger}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </div>
  );
}
