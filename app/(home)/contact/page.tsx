"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const Page = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) return;
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", captchaToken);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("sent");
        form.reset();
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100dvh-220px)] max-h-[calc(100dvh-220px)] overflow-y-auto px-2 py-8 sm:px-6 lg:px-8">
      <h1 className="w-full text-center text-xl sm:text-2xl font-bold mb-4 text-black dark:text-gray-200">
        <span className="inline-block rounded-full border border-orange-600/20 bg-orange-600/5 px-3 py-1 text-xs font-medium mr-2 text-orange-600 dark:text-orange-300">
          Contact
        </span>
        Get in Touch
      </h1>

      <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl rounded-2xl border border-orange-600/20 bg-white/90 p-4 sm:p-6 md:p-8 shadow-sm backdrop-blur dark:border-orange-600/25 dark:bg-zinc-900/60">
        <div>
          {status === "sent" && (
            <p className="text-green-600 text-sm font-medium">
              ✅ Your message was sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
              placeholder="Enter your name"
            />

            <input
              type="email"
              name="email"
              required
              inputMode="email"
              className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
              placeholder="you@example.com"
            />
          </div>

          <input
            type="text"
            name="phone"
            required
            className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
            placeholder="Your phone number"
          />

          <input
            type="text"
            name="subject"
            className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
            placeholder="How can I help you?"
          />

          <textarea
            name="message"
            rows={3}
            required
            className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
            placeholder="Write your message here..."
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptchaToken(token)}
          />

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "sending" || !captchaToken}
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <Link
              href="mailto:nishatbd3388@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-orange-600/30 bg-white/80 px-5 py-2 text-sm sm:text-base font-semibold text-orange-700 transition hover:bg-orange-50 dark:bg-zinc-900/60 dark:text-orange-300"
            >
              Email Directly
            </Link>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
        <p>
          Prefer WhatsApp?{" "}
          <a
            href="https://wa.me/+8801767591988"
            className="font-medium text-orange-500 hover:underline"
          >
            Chat with me
          </a>
        </p>
        <p className="mt-1">📍 Based in [Your City]</p>
      </div>
    </div>
  );
};

export default Page;
