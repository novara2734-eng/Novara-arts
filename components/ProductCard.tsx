"use client";

import Link from "next/link";
import { Artwork } from "@/types";
import { formatCAD } from "@/lib/format";
import ArtworkFigure from "./ArtworkFigure";

export default function ProductCard({
  artwork,
  onQuickView,
}: {
  artwork: Artwork;
  onQuickView: (artwork: Artwork) => void;
}) {
  const defaultVariant =
    artwork.variants.find((v) => v.isDefault) ?? artwork.variants[0];

  return (
    <div className="group flex flex-col">
      <div className="relative">
        <Link
          href={`/shop/${artwork.slug}`}
          className="block aspect-[4/5] rounded-2xl overflow-hidden bg-espresso/5 shadow-card"
        >
          <ArtworkFigure src={artwork.images[0]} title={artwork.title} className="h-full w-full" />
        </Link>

        <span className="absolute top-3 left-3 rounded-full bg-cream-light/90 backdrop-blur px-3 py-1 text-[10px] tracking-widest2 uppercase text-espresso/70">
          {artwork.categories[0]}
        </span>

        <button
          onClick={() => onQuickView(artwork)}
          className="absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-espresso text-cream-light text-xs font-medium px-4 py-2 hover:bg-terracotta"
        >
          Quick Add
        </button>
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <Link href={`/shop/${artwork.slug}`}>
          <h3 className="font-serif text-lg text-espresso leading-tight">
            {artwork.title}
            {artwork.subtitle && (
              <span className="block text-sm italic text-espresso/60 font-normal">
                {artwork.subtitle}
              </span>
            )}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-espresso/55">{artwork.substrate}</p>
        <p className="text-xs text-espresso/45">{artwork.dimensions}</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-espresso">
            {formatCAD(defaultVariant.price)}
            {artwork.variants.length > 1 && (
              <span className="text-espresso/40 font-normal"> +</span>
            )}
          </p>
          {artwork.framingAvailable && (
            <span className="text-[11px] text-terracotta">Framing available</span>
          )}
        </div>
      </div>
    </div>
  );
}
