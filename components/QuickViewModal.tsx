"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Artwork, FramingOption } from "@/types";
import { framingOptions } from "@/data/artworks";
import { formatCAD } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import ArtworkFigure from "./ArtworkFigure";
import FramingSelector from "./FramingSelector";

export default function QuickViewModal({
  artwork,
  onClose,
}: {
  artwork: Artwork | null;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [variantIndex, setVariantIndex] = useState(0);
  const [framing, setFraming] = useState<FramingOption>(framingOptions[0]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setVariantIndex(0);
    setFraming(framingOptions[0]);
    setAdded(false);
  }, [artwork]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!artwork) return null;
  const variant = artwork.variants[variantIndex];

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-espresso-dark/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-cream-light rounded-t-3xl sm:rounded-3xl w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto thin-scroll shadow-soft"
          >
            <button
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute right-4 top-4 z-10 h-9 w-9 rounded-full bg-cream-light/90 border border-espresso/10 flex items-center justify-center text-espresso hover:text-terracotta"
            >
              ✕
            </button>

            <div className="grid sm:grid-cols-2">
              <ArtworkFigure
                src={artwork.images[0]}
                title={artwork.title}
                className="h-64 sm:h-full"
              />

              <div className="p-6 sm:p-8">
                <p className="text-[11px] tracking-widest2 uppercase text-terracotta">
                  {artwork.categories.join(" · ")}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-espresso mt-2 leading-tight">
                  {artwork.title}
                </h2>
                {artwork.subtitle && (
                  <p className="italic text-espresso/60">{artwork.subtitle}</p>
                )}
                <p className="mt-3 text-sm text-espresso/70 leading-relaxed">
                  {artwork.description}
                </p>
                <dl className="mt-4 text-xs text-espresso/55 space-y-1">
                  <div className="flex gap-2">
                    <dt className="font-medium text-espresso/70">Substrate:</dt>
                    <dd>{artwork.substrate}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-espresso/70">Dimensions:</dt>
                    <dd>{artwork.dimensions}</dd>
                  </div>
                </dl>

                {artwork.variants.length > 1 && (
                  <div className="mt-5">
                    <p className="text-[11px] tracking-widest2 uppercase text-espresso/50 mb-2">
                      Choose an Option
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artwork.variants.map((v, i) => (
                        <button
                          key={v.label}
                          onClick={() => setVariantIndex(i)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
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
                  <div className="mt-5">
                    <FramingSelector value={framing} onChange={setFraming} compact />
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <p className="font-serif text-2xl text-espresso">
                    {formatCAD(variant.price + framing.price)}
                  </p>
                  <Link
                    href={`/shop/${artwork.slug}`}
                    className="text-xs text-terracotta hover:underline"
                    onClick={onClose}
                  >
                    View full details →
                  </Link>
                </div>

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
                    setAdded(true);
                  }}
                  className="mt-5 w-full rounded-full bg-espresso text-cream-light py-3.5 text-sm font-semibold hover:bg-terracotta transition-colors"
                >
                  {added ? "Added to Bag ✓" : "Add to Bag"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
