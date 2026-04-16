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
    <nav className="pt-8 mb-8 sm:mb-20 lg:mb-24">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-8">
        <Link
          href="/"
          className="text-xl font-normal leading-7 text-[var(--foreground)] sm:text-2xl sm:leading-9"
          style={{ fontFamily: "var(--font-dm-serif)", fontWeight: 400 }}
        >
          Dmytro Levin
        </Link>
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4">
        {navLinks.map(({ href, label }) => {
          // Resume opens PDF directly, not a route
          if (label === "Resume") {
            return (
              <li key={href}>
                <a
                  href="/CV_Dmytro_Levin_Product_Designer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full px-3 py-1 text-[18px] font-medium leading-[27px] transition-colors duration-200 sm:px-4"
                  style={{
                    color: "var(--secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f0ece5";
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--secondary)";
                  }}
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
                className="inline-block rounded-full px-3 py-1 text-[18px] font-medium leading-[27px] transition-colors duration-200 sm:px-4"
                style={{
                  color: isActive ? "var(--foreground)" : "var(--secondary)",
                  background: isActive ? "#f0ece5" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#f0ece5";
                    e.currentTarget.style.color = "var(--foreground)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--secondary)";
                  }
                }}
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
