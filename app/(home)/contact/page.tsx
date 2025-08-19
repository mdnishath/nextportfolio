// app/contact/page.tsx  (App Router) or pages/contact.tsx (Pages Router)
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100dvh-220px)] max-h-[calc(100dvh-220px)] overflow-y-auto px-2 py-8 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="w-full text-center text-xl sm:text-2xl font-bold mb-4 text-black dark:text-gray-200">
        <span className="inline-block rounded-full border border-orange-600/20 bg-orange-600/5 px-3 py-1 text-xs font-medium mr-2 text-orange-600 dark:text-orange-300">
          Contact
        </span>
        Get in Touch
      </h1>

      {/* Card */}
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl rounded-2xl border border-orange-600/20 bg-white/90 p-4 sm:p-6 md:p-8 shadow-sm backdrop-blur dark:border-orange-600/25 dark:bg-zinc-900/60">
        <form className="grid grid-cols-1 gap-5">
          {/* Row: Name + Email (stacks on mobile, 2-col on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                required
                className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
              placeholder="How can I help you?"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              className="mt-2 w-full rounded-lg border border-orange-600/30 bg-white px-2 py-2 text-sm sm:text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-offset-zinc-900"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              Send Message
            </button>
            <Link
              href="mailto:your@email.com"
              className="inline-flex items-center justify-center rounded-lg border border-orange-600/30 bg-white/80 px-5 py-2 text-sm sm:text-base font-semibold text-orange-700 transition hover:bg-orange-50 dark:bg-zinc-900/60 dark:text-orange-300"
            >
              Email Directly
            </Link>
          </div>
        </form>
      </div>

      {/* Extra contact info */}
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
