"use client";

import { useInView } from "@/hooks/useInView";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: AnimateInProps) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
