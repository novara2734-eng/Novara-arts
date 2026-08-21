import ArtworkFigure from "./ArtworkFigure";

export default function AboutSection() {
  return (
    <section id="about" className="bg-butter-light paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
              <ArtworkFigure
                src="/images/artist/prashasti-1.jpg"
                title="Prashasti, artist"
                className="h-full w-full"
                priority
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-52 rounded-2xl overflow-hidden shadow-soft border-4 border-cream-light">
              <ArtworkFigure
                src="/images/artist/prashasti-2.jpg"
                title="Prashasti in the studio"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-[11px] tracking-widest2 uppercase text-terracotta mb-3">
              About the Artist
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso mb-8 text-balance">
              Coming home to oneself, one textured canvas at a time.
            </h2>

            <div className="space-y-6 text-espresso/75 text-[15px] leading-relaxed">
              <blockquote className="relative pl-6 border-l-2 border-gold italic text-espresso/85">
                &ldquo;For as long as I can remember, I lived my life for everyone
                else. As the eldest sibling, taking on responsibility early came
                naturally. I stepped into every role that offered a promise of
                success and visibility—anchor, theatre artist, financial
                analyst. I tried to do it all, searching for that elusive
                feeling of being truly seen.&rdquo;
              </blockquote>

              <p>
                But somewhere along the way, I realized that standing on stage
                or analyzing financial models wasn&apos;t where my soul
                resided. The moment I held a palette knife, felt the
                resistance of heavy gel mediums on canvas, and watched rich
                textures come alive, everything shifted.
              </p>

              <blockquote className="relative pl-6 border-l-2 border-gold italic text-espresso/85">
                &ldquo;Creating art wasn&apos;t another role to play; it was
                the first time I felt genuinely heard, grounded, and seen for
                who I am. Today, Novara Arts by Prashasti is my authentic
                space. Every original painting, fine art print, and
                handcrafted piece carries a story of letting go, embracing
                beauty, and coming home to oneself.&rdquo;
              </blockquote>
            </div>

            <a
              href="#shop"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-terracotta transition-colors"
            >
              View the Collection
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
