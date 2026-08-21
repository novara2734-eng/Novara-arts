"use client";

const messages = [
  "Free Tracked Shipping across Canada & US on orders over $250 CAD",
  "Express Worldwide Delivery Available",
  "Custom Framing Available for All Works",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-espresso text-butter-light text-[11px] sm:text-xs tracking-wide">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        {messages.map((m, i) => (
          <span key={m} className="flex items-center gap-3">
            <span>{m}</span>
            {i < messages.length - 1 && (
              <span className="hidden sm:inline text-gold/70">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
