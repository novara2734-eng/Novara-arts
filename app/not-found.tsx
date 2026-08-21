import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-32 text-center">
      <p className="text-[11px] tracking-widest2 uppercase text-terracotta mb-3">404</p>
      <h1 className="font-serif text-3xl text-espresso mb-4">
        This piece isn&apos;t on the wall.
      </h1>
      <p className="text-sm text-espresso/60 mb-8">
        The page you&apos;re looking for may have sold, moved, or never existed.
      </p>
      <Link
        href="/#shop"
        className="inline-flex rounded-full bg-espresso text-cream-light px-6 py-3 text-sm font-semibold hover:bg-terracotta transition-colors"
      >
        Back to the Collection
      </Link>
    </div>
  );
}
