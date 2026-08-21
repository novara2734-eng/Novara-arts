"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { artworks } from "@/data/artworks";
import { Artwork, ArtworkCategory } from "@/types";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

const tabs: { label: string; value: ArtworkCategory | "All Works" }[] = [
  { label: "All Works", value: "All Works" },
  { label: "Original Paintings", value: "Original Paintings" },
  { label: "Fine Art Prints", value: "Fine Art Prints" },
  { label: "Greeting Cards", value: "Greeting Cards" },
];

export default function ShopSection() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ArtworkCategory) || "All Works";
  const searchTerm = (searchParams.get("search") || "").toLowerCase();

  const [active, setActive] = useState<ArtworkCategory | "All Works">(
    tabs.some((t) => t.value === initialCategory) ? initialCategory : "All Works"
  );
  const [quickView, setQuickView] = useState<Artwork | null>(null);

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      const matchesCategory = active === "All Works" || a.categories.includes(active);
      const matchesSearch =
        !searchTerm ||
        a.title.toLowerCase().includes(searchTerm) ||
        a.subtitle?.toLowerCase().includes(searchTerm) ||
        a.description.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [active, searchTerm]);

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-[11px] tracking-widest2 uppercase text-terracotta mb-3">
          The Collection
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-espresso text-balance">
          Available Works &amp; Archival Prints
        </h2>
        <p className="mt-4 max-w-xl text-sm text-espresso/60">
          Every piece is hand-built with modeling paste, acrylic, and gold leaf —
          shipped tracked, insured, and ready to live in your space.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`rounded-full px-5 py-2 text-xs sm:text-sm tracking-wide transition-colors border ${
              active === tab.value
                ? "bg-espresso text-cream-light border-espresso"
                : "border-espresso/20 text-espresso/60 hover:border-espresso/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-serif text-xl text-espresso">No pieces match yet.</p>
          <p className="text-sm text-espresso/55 mt-2">
            Try another category, or reach out — a commission may be the perfect fit.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((artwork) => (
            <ProductCard key={artwork.slug} artwork={artwork} onQuickView={setQuickView} />
          ))}
        </div>
      )}

      <QuickViewModal artwork={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}
