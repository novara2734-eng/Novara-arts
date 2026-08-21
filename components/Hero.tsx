"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/images/artworks/golden-reverie-2.jpg", alt: "Golden Reverie, veil of gold" },
  { src: "/images/artworks/vein-of-light.jpg", alt: "The Vein of Light" },
  { src: "/images/artworks/sovereign-peacock.jpg", alt: "The Sovereign, peacock in full splendor" },
  { src: "/images/artworks/dusk-savanna.jpg", alt: "Dusk on the Savanna" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-espresso-dark min-h-[92vh] flex items-end">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark via-espresso-dark/55 to-espresso-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-dark/70 via-transparent to-transparent" />
      </div>

      {/* Signature: a fractured seam of gold leaf runs through the hero, echoing "The Vein of Light" */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="seamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4E4A6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#B8863F" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 720 C 300 640, 420 780, 680 660 S 1100 480, 1500 380"
          fill="none"
          stroke="url(#seamGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-40 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[11px] sm:text-xs tracking-widest2 uppercase text-butter-light/80 mb-5"
        >
          Textured Acrylics · Gold Leaf · Bespoke Commissions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-butter-light text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-3xl"
        >
          Tactile Art for the Heart &amp; Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-butter-light/85 text-base sm:text-lg max-w-xl text-balance"
        >
          Original Textured Acrylics, Gold Leaf Commissions &amp; Archival Prints by
          Prashasti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#shop"
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-espresso-dark hover:bg-butter-light transition-colors"
          >
            Explore Available Works
          </a>
          <a
            href="#commissions"
            className="inline-flex items-center justify-center rounded-full border border-butter-light/50 px-7 py-3.5 text-sm font-semibold tracking-wide text-butter-light hover:bg-butter-light/10 transition-colors"
          >
            Commission a Bespoke Piece
          </a>
        </motion.div>

        <div className="mt-14 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-gold" : "w-4 bg-butter-light/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
