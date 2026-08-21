export type ArtworkCategory =
  | "Original Paintings"
  | "Fine Art Prints"
  | "Greeting Cards";

export interface PriceVariant {
  label: string;
  price: number;
  isDefault?: boolean;
}

export interface Artwork {
  slug: string;
  title: string;
  subtitle?: string;
  substrate: string;
  dimensions: string;
  categories: ArtworkCategory[];
  variants: PriceVariant[];
  description: string;
  framingAvailable: boolean;
  images: string[];
}

export interface FramingOption {
  id: string;
  label: string;
  swatch: string;
  price: number;
}

export interface CartFraming {
  id: string;
  label: string;
  price: number;
}

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  variantLabel: string;
  unitPrice: number;
  quantity: number;
  framing: CartFraming | null;
}
