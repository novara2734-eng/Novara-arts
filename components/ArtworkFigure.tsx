"use client";

import Image from "next/image";

export default function ArtworkFigure({
  src,
  title,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src?: string;
  title: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={`relative flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#F7E9B7,transparent_60%),linear-gradient(135deg,#3D2B1F,#2A1C15)] ${className}`}
      >
        <span className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(115deg,#F7E9B7_0px,#F7E9B7_1px,transparent_1px,transparent_14px)]" />
        <div className="relative text-center px-6">
          <p className="font-serif italic text-butter-light/90 text-lg leading-snug">
            {title}
          </p>
          <p className="mt-2 text-[10px] tracking-widest2 uppercase text-butter-light/50">
            Studio photography coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
    </div>
  );
}
