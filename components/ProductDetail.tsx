"use client";

import { useState } from "react";
import Link from "next/link";
import { Artwork, FramingOption } from "@/types";
import { framingOptions } from "@/data/artworks";
import { formatCAD } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import ArtworkFigure from "./ArtworkFigure";
import FramingSelector from "./FramingSelector";

export default function ProductDetail({ artwork }: { artwork: Artwork }) {
  const { addItem, openCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const [framing, setFraming] = useState<FramingOption>(framingOptions[0]);
  const variant = artwork.variants[variantIndex];

  const images = artwork.images.length ? artwork.images : [undefined];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <nav className="text-xs text-espresso/50 mb-8">
        <Link href="/#shop" className="hover:text-terracotta">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-espresso/70">{artwork.title}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <ArtworkFigure
              src={images[activeImage]}
              title={artwork.title}
              className="h-full w-full"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-3 mt-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-20 w-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    i === activeImage ? "border-terracotta" : "border-transparent"
                  }`}
                >
                  <ArtworkFigure src={img} title={`${artwork.title} view ${i + 1}`} className="h-full w-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-[11px] tracking-widest2 uppercase text-terracotta">
            {artwork.categories.join(" · ")}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-espresso mt-2 leading-tight">
            {artwork.title}
          </h1>
          {artwork.subtitle && (
            <p className="italic text-espresso/60 text-lg mt-1">{artwork.subtitle}</p>
          )}

          <p className="mt-5 text-[15px] text-espresso/70 leading-relaxed max-w-lg">
            {artwork.description}
          </p>

          <dl className="mt-6 space-y-2 text-sm text-espresso/60">
            <div className="flex gap-2">
              <dt className="font-medium text-espresso/75 shrink-0">Substrate &amp; Medium:</dt>
              <dd>{artwork.substrate}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-espresso/75 shrink-0">Dimensions:</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
          </dl>

          {artwork.variants.length > 1 && (
            <div className="mt-7">
              <p className="text-[11px] tracking-widest2 uppercase text-espresso/50 mb-2">
                Choose an Option
              </p>
              <div className="flex flex-wrap gap-2">
                {artwork.variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => setVariantIndex(i)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      i === variantIndex
                        ? "border-terracotta bg-terracotta/10 text-espresso"
                        : "border-espresso/20 text-espresso/60 hover:border-espresso/40"
                    }`}
                  >
                    {v.label} — {formatCAD(v.price)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {artwork.framingAvailable && (
            <div className="mt-7">
              <FramingSelector value={framing} onChange={setFraming} />
            </div>
          )}

          <div className="mt-8 flex items-center gap-6">
            <p className="font-serif text-3xl text-espresso">
              {formatCAD(variant.price + framing.price)}
            </p>
            <p className="text-xs text-espresso/50">
              Ships tracked &amp; insured from Ontario, Canada
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                addItem({
                  slug: artwork.slug,
                  title: artwork.title,
                  image: artwork.images[0] ?? "",
                  variantLabel: variant.label,
                  unitPrice: variant.price,
                  framing: framing.id === "none" ? null : framing,
                });
              }}
              className="flex-1 rounded-full bg-espresso text-cream-light py-4 text-sm font-semibold hover:bg-terracotta transition-colors"
            >
              Add to Bag — {formatCAD(variant.price + framing.price)}
            </button>
            <button
              onClick={openCart}
              className="rounded-full border border-espresso/20 px-6 py-4 text-sm font-semibold text-espresso hover:border-terracotta"
            >
              View Bag
            </button>
          </div>

          <div className="mt-10 border-t border-espresso/10 pt-6 grid grid-cols-3 gap-4 text-center">
            <Assurance label="Tracked Shipping" note="Canada & US" />
            <Assurance label="Authenticity" note="Signed certificate" />
            <Assurance label="Framing" note="Ready in 10–14 days" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Assurance({ label, note }: { label: string; note: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-espresso">{label}</p>
      <p className="text-[11px] text-espresso/50 mt-0.5">{note}</p>
    </div>
  );
}
