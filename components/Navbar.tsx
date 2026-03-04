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
          className="text-xl font-normal leading-7 text-[#ffffff] sm:text-2xl sm:leading-9"
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
                  className="inline-block rounded-full px-3 py-1 text-[18px] font-bold leading-[27px] text-[#888888] transition-colors duration-200 hover:bg-[#e8e8e8] hover:text-[#101010] sm:px-4"
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
                className={`inline-block rounded-full px-3 py-1 text-[18px] font-bold leading-[27px] transition-colors duration-200 sm:px-4 ${
                  isActive
                    ? "bg-[#e8e8e8] text-[#101010]"
                    : "text-[#888888] hover:bg-[#e8e8e8] hover:text-[#101010]"
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
