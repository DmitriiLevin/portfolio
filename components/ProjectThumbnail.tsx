"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
};

export default function ProjectThumbnail({ src, alt, className = "", aspectClass = "aspect-[16/10]" }: Props) {
  const [hasError, setHasError] = useState(false);

  const wrapperClass =
    "relative w-full overflow-hidden rounded-lg shadow-md border " +
    aspectClass +
    " " +
    className;

  const wrapperStyle: React.CSSProperties = {
    background: "var(--surface)",
    borderColor: "var(--border)",
  };

  if (hasError) {
    return (
      <div
        className={`${wrapperClass} flex items-center justify-center text-sm`}
        style={wrapperStyle}
      >
        <span style={{ color: "var(--secondary)" }}>Image</span>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
