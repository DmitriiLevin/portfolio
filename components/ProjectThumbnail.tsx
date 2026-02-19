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
    "relative w-full overflow-hidden rounded-lg bg-neutral-100 shadow-md dark:bg-neutral-800 " +
    aspectClass +
    " " +
    className;

  if (hasError) {
    return (
      <div
        className={`${wrapperClass} flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400`}
      >
        Image
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
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
