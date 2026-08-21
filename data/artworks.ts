import { Artwork, FramingOption } from "@/types";

export const framingOptions: FramingOption[] = [
  { id: "none", label: "No framing — ready to hang", swatch: "#00000000", price: 0 },
  { id: "espresso", label: "Espresso Float Frame", swatch: "#3D2B1F", price: 180 },
  { id: "gold-leaf", label: "Hand-Applied Gold Leaf Frame", swatch: "#D4AF37", price: 260 },
  { id: "natural-oak", label: "Natural Oak Float Frame", swatch: "#C9A268", price: 200 },
];

export const artworks: Artwork[] = [
  {
    slug: "golden-reverie-veil-of-gold",
    title: "Golden Reverie",
    subtitle: "Veil of Gold",
    substrate: "Modeling paste, acrylic, and gold leaf on Plywood",
    dimensions: '24" x 24" x 0.5"',
    categories: ["Original Paintings"],
    variants: [{ label: "Original", price: 1850, isDefault: true }],
    description:
      "High-contrast black textured canvas featuring a 3D sculpted central mask silhouette adorned with delicate gold leafing, exploring the boundary between vulnerability and strength.",
    framingAvailable: true,
    images: [
      "/images/artworks/golden-reverie-1.jpg",
      "/images/artworks/golden-reverie-2.jpg",
    ],
  },
  {
    slug: "metamorphosis-in-bloom",
    title: "Metamorphosis in Bloom",
    substrate: "Modeling paste and acrylic on Unfinished Wood",
    dimensions: '20" x 20" x 0.9"',
    categories: ["Original Paintings", "Fine Art Prints"],
    variants: [
      { label: "Original", price: 1650, isDefault: true },
      { label: "Fine Art Print", price: 120 },
    ],
    description:
      "An expressive silhouette framed by deep, heavily textured floral foliage and vibrant monarch butterflies symbolizing transformation and freedom.",
    framingAvailable: true,
    images: ["/images/artworks/metamorphosis-bloom.jpg"],
  },
  {
    slug: "the-sovereign-peacock-in-full-splendor",
    title: "The Sovereign",
    subtitle: "Peacock in Full Splendor",
    substrate: "Acrylic on Wood Cabinet Panel",
    dimensions: '26.2" x 15.3" x 1.0"',
    categories: ["Original Paintings"],
    variants: [{ label: "Original", price: 2100, isDefault: true }],
    description:
      "A rich, expressive display of jewel tones and rhythmic feather motifs radiating from a serene royal blue focal figure.",
    framingAvailable: true,
    images: ["/images/artworks/sovereign-peacock.jpg"],
  },
  {
    slug: "strata-and-solitude",
    title: "Strata & Solitude",
    substrate: "Modeling paste, acrylic, and gold stones on Cabinet Panel",
    dimensions: '13.6" x 11.2" x 1.1"',
    categories: ["Original Paintings"],
    variants: [{ label: "Original", price: 1400, isDefault: true }],
    description:
      "Rhythmic dark channels infused with metallic bronze mineral fragments and gold stones, reflecting the beauty found in life's layered textures.",
    framingAvailable: true,
    images: ["/images/artworks/strata-solitude.jpg"],
  },
  {
    slug: "dusk-on-the-savanna",
    title: "Dusk on the Savanna",
    substrate: "Acrylic on Gold Leaf on Cabinet Panel",
    dimensions: '28.6" x 11.1" x 0.8"',
    categories: ["Original Paintings", "Fine Art Prints"],
    variants: [
      { label: "Original", price: 1950, isDefault: true },
      { label: "Fine Art Print", price: 130 },
    ],
    description:
      "Panoramic sunset horizon featuring deeply textured tree silhouettes and a solitary giraffe set against warm amber and gold leaf gradient skies.",
    framingAvailable: true,
    images: ["/images/artworks/dusk-savanna.jpg"],
  },
  {
    slug: "the-celestial-sentinel",
    title: "The Celestial Sentinel",
    substrate: "Modeling paste and acrylic on Plywood",
    dimensions: '24" x 24" x 0.5"',
    categories: ["Original Paintings", "Greeting Cards"],
    variants: [
      { label: "Original", price: 1250, isDefault: true },
      { label: "Set of 5 Fine Art Greeting Cards", price: 35 },
    ],
    description:
      "A geometric mosaic composition of a howling wolf set against a warm background with scattered gold celestial accents.",
    framingAvailable: true,
    images: [],
  },
  {
    slug: "the-vein-of-light",
    title: "The Vein of Light",
    substrate: "Acrylic, modeling paste, and gold leaf on Unfinished Wood",
    dimensions: '20" x 20" x 0.8"',
    categories: ["Original Paintings"],
    variants: [{ label: "Original", price: 1100, isDefault: true }],
    description:
      "Bold diagonal dark impasto textures fractured open to reveal a luminous seam of liquid gold foil.",
    framingAvailable: true,
    images: ["/images/artworks/vein-of-light.jpg"],
  },
  {
    slug: "solace-on-the-blossom-branch",
    title: "Solace on the Blossom Branch",
    substrate: "Modeling paste and acrylic on Gallery Canvas",
    dimensions: '34" x 26" x 2.0"',
    categories: ["Original Paintings", "Fine Art Prints"],
    variants: [
      { label: "Original", price: 1750, isDefault: true },
      { label: "Fine Art Print", price: 140 },
    ],
    description:
      "Sculpted impasto cherry blossoms stretching across a deep moss green background, anchored by a detailed robin resting softly on the branch.",
    framingAvailable: true,
    images: [],
  },
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((a) => a.slug === slug);
}
