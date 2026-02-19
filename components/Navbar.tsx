"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mb-16 sm:mb-20 lg:mb-24">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-8">
        <Link
          href="/"
          className="text-xl font-normal leading-7 text-neutral-900 dark:text-neutral-50 sm:text-2xl sm:leading-9"
        >
          Dmytro Levin
        </Link>
        <ul className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
        {navLinks.map(({ href, label }) => {
          // Resume opens PDF directly, not a route
          if (label === "Resume") {
            return (
              <li key={href}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-3 py-1 text-lg font-normal leading-7 text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 sm:px-4 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-50"
                >
                  {label}
                </a>
              </li>
            );
          }
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`inline-block rounded-full px-3 py-1 text-lg font-normal leading-7 transition-colors duration-200 sm:px-4 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9 ${
                  isActive
                    ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-50"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
}
