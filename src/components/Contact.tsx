"use client";

import { useState, FormEvent } from "react";
import TextReveal from "./TextReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = e.currentTarget;
    const honeypot = (new FormData(form).get("hp") ?? "").toString().trim();

    // Quietly ignore likely bot submissions.
    if (honeypot) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(payload.error ?? "Failed to send message.");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send message.";
      setErrorMessage(message);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 6000);
    }
  }

  return (
    <div className="section-padding-x py-[var(--space-lg)]">
      <div className="relative flex h-full w-full flex-col items-center justify-between rounded-md bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover border border-white/10 shadow-lg backdrop-blur-xl p-[var(--space-md)]">
        {/* CTA heading */}
        <h2 className="max-w-[10ch] text-center text-[length:var(--text-heading-1)] font-semibold uppercase text-[var(--color-accent-400)]">
          <TextReveal text="Let's Make It Happen" stagger={40} />
        </h2>

        {/* Form container */}
        <section
          id="Contact"
          className="w-full sm:w-[36rem] mx-auto my-10 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          <h2 className="text-center text-[length:var(--text-h4)] font-medium mb-8 text-[var(--color-accent-200)] tracking-tight">
            Say Hello
          </h2>

          <form
            noValidate
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Honeypot */}
            <input
              type="text"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              name="hp"
            />

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Drop a name"
                className="w-full placeholder:font-[400] font-normal text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:ring-2 focus:ring-white/20 transition"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Wanna hear back? Add your email"
                className="w-full placeholder:font-[400] text-[length:var(--text-base)] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:ring-2 focus:ring-white/20 transition"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Say hello or drop a note..."
                rows={5}
                required
                className="w-full placeholder:font-[400] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:ring-2 focus:ring-white/20 transition resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 rounded-xl font-semibold tracking-wide text-[length:var(--text--small)] transition-all duration-100 bg-[var(--color-accent-200)] text-black hover:bg-white active:scale-[0.98] active:shadow-inner disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent ✓"
                  : "Send Message"}
            </button>
            {status === "error" && (
              <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {errorMessage}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
