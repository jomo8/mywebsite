"use client";

import { useInView } from "@/hooks/useInView";

interface TextRevealProps {
  text: string;
  className?: string;
  /** ms between each word */
  stagger?: number;
  /** ms initial delay */
  delay?: number;
}

export default function TextReveal({
  text,
  className = "",
  stagger = 30,
  delay = 0,
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`word-reveal ${isInView ? "revealed" : ""} ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="word pr-[0.35em]">
          <span
            style={{
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
