import CommissionForm from "./CommissionForm";

export default function CommissionsSection() {
  return (
    <section id="commissions" className="bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(100deg,#F7E9B7_0px,#F7E9B7_1px,transparent_1px,transparent_18px)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-widest2 uppercase text-gold mb-3">
            Bespoke Creations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-butter-light leading-tight text-balance">
            Commission a piece built for your walls, your palette, your story.
          </h2>
          <p className="mt-5 text-sm text-butter-light/70 leading-relaxed">
            From a single accent piece to a commercial or clinic feature wall,
            every commission begins with a conversation. Share your space and
            vision below — Prashasti will sketch concepts, confirm scale and
            palette, and hand-build your piece with the same modeling paste,
            acrylic, and gold leaf techniques found throughout the collection.
          </p>
          <dl className="mt-10 space-y-5 text-sm text-butter-light/70">
            <div>
              <dt className="text-gold font-medium">Timeline</dt>
              <dd>4–8 weeks, depending on scale and technique</dd>
            </div>
            <div>
              <dt className="text-gold font-medium">Consultation</dt>
              <dd>Complimentary concept review within 2–3 business days</dd>
            </div>
            <div>
              <dt className="text-gold font-medium">Shipping</dt>
              <dd>Tracked and insured across Canada &amp; the US</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3">
          <CommissionForm />
        </div>
      </div>
    </section>
  );
}
