import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { artworks, getArtworkBySlug } from "@/data/artworks";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const artwork = getArtworkBySlug(params.slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title} — Novara Arts by Prashasti`,
    description: artwork.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const artwork = getArtworkBySlug(params.slug);
  if (!artwork) notFound();
  return <ProductDetail artwork={artwork} />;
}
