"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Originals", href: "/?category=Original%20Paintings#shop" },
  { label: "Fine Art Prints", href: "/?category=Fine%20Art%20Prints#shop" },
  { label: "Greeting Cards", href: "/?category=Greeting%20Cards#shop" },
  { label: "Commissions", href: "/#commissions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-light/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,43,31,0.08)]"
          : "bg-cream-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-espresso">
              Novara Arts
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-terracotta mt-1">
              by Prashasti
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-espresso/80 hover:text-terracotta transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Search artworks"
              onClick={() => setSearchOpen((s) => !s)}
              className="p-2 text-espresso hover:text-terracotta transition-colors"
            >
              <SearchIcon />
            </button>
            <button
              aria-label={`Open cart, ${itemCount} items`}
              onClick={openCart}
              className="relative p-2 text-espresso hover:text-terracotta transition-colors"
            >
              <BagIcon />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-terracotta text-cream-light text-[10px] font-semibold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-espresso lg:hidden"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-espresso/10 bg-cream-light"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative max-w-xl">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search “Golden Reverie”, “peacock”, “gold leaf”…"
                  className="w-full bg-transparent border border-espresso/20 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder:text-espresso/40 focus:outline-none focus:border-terracotta"
                />
              </div>
              {query && (
                <a
                  href={`/?search=${encodeURIComponent(query)}#shop`}
                  className="inline-block mt-3 text-xs tracking-wide uppercase text-terracotta hover:underline"
                >
                  See results for “{query}” →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-espresso/10 bg-cream-light lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm border-b border-espresso/5 text-espresso/80"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 8V6a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <motion.path
        d="M4 6h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
      <motion.path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ opacity: open ? 0 : 1 }}
      />
      <motion.path
        d="M4 18h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </svg>
  );
}
