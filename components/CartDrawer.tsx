"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatCAD, FREE_SHIPPING_THRESHOLD } from "@/lib/format";

const provinces = [
  "Ontario",
  "British Columbia",
  "Alberta",
  "Quebec",
  "Nova Scotia",
  "Other Canadian Province",
  "United States",
];

// Orders are emailed here. Change this to your real studio inbox.
const STUDIO_ORDER_EMAIL = "novara2734@gmail.com";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const [province, setProvince] = useState(provinces[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const estimatedShipping = subtotal === 0 ? 0 : remaining === 0 ? 0 : province === "United States" ? 35 : 18;
  const total = subtotal + estimatedShipping;

  const handleCheckout = () => {
    if (!name.trim() || !email.trim() || !address.trim()) {
      setError("Please fill in your name, email, and shipping address.");
      return;
    }
    setError("");

    const lines = items.map((item) => {
      const framingText = item.framing ? ` + ${item.framing.label}` : "";
      const lineTotal = formatCAD((item.unitPrice + (item.framing?.price ?? 0)) * item.quantity);
      return `- ${item.title} (${item.variantLabel}${framingText}) x${item.quantity} — ${lineTotal}`;
    });

    const body = [
      `New order from ${name}`,
      "",
      "Items:",
      ...lines,
      "",
      `Subtotal: ${formatCAD(subtotal)}`,
      `Estimated Shipping (${province}): ${estimatedShipping === 0 ? "Free" : formatCAD(estimatedShipping)}`,
      `Estimated Total: ${formatCAD(total)}`,
      "",
      "Shipping to:",
      address,
      "",
      `Reply-to email: ${email}`,
    ].join("\n");

    const mailto = `mailto:${STUDIO_ORDER_EMAIL}?subject=${encodeURIComponent(
      `New Order — Novara Arts (${name})`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-espresso-dark/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[440px] bg-cream-light shadow-soft flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-espresso/10">
              <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-espresso/5 text-espresso"
              >
                ✕
              </button>
            </div>

            {/* free shipping progress */}
            <div className="px-6 py-4 border-b border-espresso/10">
              {remaining > 0 ? (
                <p className="text-xs text-espresso/60 mb-2">
                  Add <span className="text-terracotta font-semibold">{formatCAD(remaining)}</span> more
                  for free tracked shipping
                </p>
              ) : (
                <p className="text-xs text-espresso/60 mb-2">
                  🎉 You&apos;ve unlocked free tracked shipping
                </p>
              )}
              <div className="h-1.5 rounded-full bg-espresso/10 overflow-hidden">
                <div
                  className="h-full gold-seam gold-seam-animated transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto thin-scroll px-6 py-5">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-lg text-espresso">Your bag is empty.</p>
                  <p className="text-sm text-espresso/55 mt-2">
                    Original textures and gold leaf are waiting.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-6 rounded-full bg-espresso text-cream-light px-6 py-2.5 text-sm hover:bg-terracotta transition-colors"
                  >
                    Browse the Collection
                  </button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 rounded-xl overflow-hidden bg-espresso/5">
                        {item.image ? (
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-espresso to-espresso-dark" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-espresso truncate">{item.title}</p>
                        <p className="text-xs text-espresso/50">{item.variantLabel}</p>
                        {item.framing && (
                          <p className="text-xs text-terracotta">{item.framing.label}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-espresso/15 rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-7 w-7 text-sm text-espresso/60 hover:text-espresso"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="text-xs w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-7 w-7 text-sm text-espresso/60 hover:text-espresso"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-sm font-medium text-espresso">
                            {formatCAD((item.unitPrice + (item.framing?.price ?? 0)) * item.quantity)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.title}`}
                        className="text-espresso/30 hover:text-terracotta text-xs self-start"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-espresso/10 px-6 py-5 space-y-4">
                <label className="block">
                  <span className="block text-[11px] tracking-widest2 uppercase text-espresso/50 mb-1.5">
                    Estimate Shipping To
                  </span>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full rounded-xl border border-espresso/20 bg-cream px-3 py-2.5 text-sm focus:outline-none focus:border-terracotta"
                  >
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>

                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-espresso/70">
                    <span>Subtotal</span>
                    <span>{formatCAD(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-espresso/70">
                    <span>Shipping</span>
                    <span>{estimatedShipping === 0 ? "Free" : formatCAD(estimatedShipping)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-espresso pt-2 border-t border-espresso/10">
                    <span>Estimated Total</span>
                    <span>{formatCAD(total)}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-espresso/20 bg-cream px-3 py-2.5 text-sm placeholder:text-espresso/40 focus:outline-none focus:border-terracotta"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full rounded-xl border border-espresso/20 bg-cream px-3 py-2.5 text-sm placeholder:text-espresso/40 focus:outline-none focus:border-terracotta"
                  />
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Shipping address"
                    rows={2}
                    className="w-full rounded-xl border border-espresso/20 bg-cream px-3 py-2.5 text-sm placeholder:text-espresso/40 focus:outline-none focus:border-terracotta"
                  />
                  {error && <p className="text-xs text-terracotta">{error}</p>}
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full rounded-full bg-espresso text-cream-light py-3.5 text-sm font-semibold hover:bg-terracotta transition-colors"
                >
                  Send Order
                </button>
                <p className="text-[11px] text-center text-espresso/40">
                  This opens your email app with the order filled in. We&apos;ll reply with
                  payment instructions to confirm.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
