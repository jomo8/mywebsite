"use client";

import type { FormEvent } from "react";
import { siteConfig, socials } from "@/lib/data";
import TextReveal from "./TextReveal";

const fieldStyle =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--color-text-bg)] placeholder:text-white/55 focus:ring-2 focus:ring-white/40";

export default function Contact() {
  const recipient = `mailto:${siteConfig.contactEmail}`;

  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name")).trim();
    const email = String(fields.get("email")).trim();
    const message = String(fields.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="Contact"
      aria-labelledby="contact-heading"
      className="section-padding-x bg-[var(--color-accent-200)] py-[var(--space-lg)]"
    >
      <div className="flex flex-col items-center rounded-md border border-white/10 bg-[linear-gradient(0deg,_#393632,_#080807)] p-[var(--space-md)] shadow-lg">
        <h2
          id="contact-heading"
          aria-label="Let's Make It Happen"
          className="max-w-[10ch] text-center text-[length:var(--text-heading-1)] font-semibold uppercase text-[var(--color-accent-400)]"
        >
          <TextReveal
            text="Let's Make It Happen"
            stagger={40}
            className="motion-reduce:[&_.word>span]:translate-y-0 motion-reduce:[&_.word>span]:opacity-100 motion-reduce:[&_.word>span]:transition-none"
          />
        </h2>

        <div className="mx-auto my-10 w-full max-w-xl rounded-2xl border border-white/10 bg-[rgba(209,209,199,0.05)] px-4 py-12 text-[var(--color-accent-200)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl min-[390px]:px-6 sm:px-10 xl:px-14">
          <h3 className="mb-8 text-center text-[length:var(--text-h4)] font-medium tracking-tight">
            Say Hello
          </h3>
          <p className="mb-5 text-center text-sm text-white/70">
            This form opens your email app and drafts the message to{" "}
            <a className="[overflow-wrap:anywhere] underline underline-offset-4" href={recipient}>
              {siteConfig.contactEmail}
            </a>.
          </p>

          <form action={recipient} method="post" encType="text/plain" onSubmit={openEmailDraft} className="grid gap-4">
            <input
              aria-label="Your name"
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Drop a name"
              className={`${fieldStyle} text-[length:var(--text-base)]`}
            />
            <input
              aria-label="Your email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Your email"
              className={`${fieldStyle} text-[length:var(--text-base)]`}
            />
            <textarea
              aria-label="Your message"
              name="message"
              rows={5}
              required
              placeholder="Say hello or drop a note..."
              className={fieldStyle}
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--color-accent-200)] px-6 py-3 text-[length:var(--text--small)] font-semibold tracking-wide text-black transition-colors hover:bg-white active:scale-[0.98]"
            >
              Open email draft
            </button>
          </form>
        </div>

        <div className="max-w-lg text-center text-sm text-[var(--color-accent-500)]">
          <p>I’m open to forward deployed engineering, software engineering, and data analyst roles.</p>
          <ul aria-label="Professional profiles" className="mt-3 flex justify-center gap-6">
            {socials.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="underline underline-offset-4 hover:text-white">
                  {label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
