"use client";

export default function ScrollToTop() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className="group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-500)] p-[var(--space-lg)] duration-1000 hover:scale-90 md:flex"
    >
      <span className="absolute flex transition-all duration-500 ease-in-out group-hover:-translate-y-20">
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 27V1M13 1L1 13M13 1L25 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="absolute flex translate-y-20 transition-all duration-500 ease-in-out group-hover:translate-y-0">
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 27V1M13 1L1 13M13 1L25 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
