// app/work/page.tsx (App Router) or pages/work.tsx (Pages Router)
import React from "react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    image: "/nextjs.png",
    title: "Next.js SaaS Dashboard",
    subtitle: "Full Stack Development",
    description: "Scalable app with auth, REST APIs, and analytics.",
  },
  {
    id: 2,
    image: "/wordpress.png",
    title: "WordPress Business Site",
    subtitle: "Design & Custom Theme",
    description: "Speed-optimized, Elementor friendly, easy to edit.",
  },
  {
    id: 3,
    image: "/seo.png",
    title: "Local SEO Boost",
    subtitle: "Google Map Pack Ranking",
    description: "On-page, citations, and local signals that convert.",
  },
  {
    id: 4,
    image: "/gmb.png",
    title: "GMB Setup & Reviews",
    subtitle: "Reputation Management",
    description: "Profile optimization and 4.9★ review strategy.",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100dvh-220px)] max-h-[calc(100dvh-220px)] overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="w-full text-center text-lg md:text-2xl font-bold mb-6 text-black dark:text-gray-200">
        <span className="inline-block rounded-full border border-orange-600/20 bg-orange-600/5 px-3 py-1 text-xs font-medium mr-2 text-orange-500 dark:text-orange-300">
          Work
        </span>
        Let&apos;s Check My Work
      </h1>

      {/* Grid: 1 col mobile, 2 cols md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {works.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-orange-600/20 bg-white/70 shadow-sm transition hover:shadow-md dark:border-orange-600/25 dark:bg-zinc-900/60"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-orange-600/5">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-[300px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105"
                // sizes="(min-width: 768px) 50vw, 100vw"
                priority={item.id === 1}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
            </div>

            {/* Text */}
            <div className="p-5">
              {/* Title 1 */}
              <h3 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              {/* Title 2 */}
              <p className="mt-0.5 text-sm font-medium text-orange-500">
                {item.subtitle}
              </p>
              {/* 1-line description */}
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 truncate">
                {item.description}
              </p>

              {/* Optional CTA row */}
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                >
                  View Case Study
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-orange-600/30 bg-white/70 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-50 dark:bg-zinc-900/60 dark:text-orange-300"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
