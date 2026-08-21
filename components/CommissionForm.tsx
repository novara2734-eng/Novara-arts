"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ArtworkType = "Canvas Wall Art" | "Plaster Accent Piece" | "Commercial/Clinic Feature";

interface FormState {
  name: string;
  email: string;
  location: string;
  artworkType: ArtworkType | "";
  dimensions: string;
  palette: string;
  spaceDescription: string;
  vision: string;
  files: string[];
}

const initialState: FormState = {
  name: "",
  email: "",
  location: "",
  artworkType: "",
  dimensions: "",
  palette: "",
  spaceDescription: "",
  vision: "",
  files: [],
};

const totalSteps = 5;

export default function CommissionForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canAdvance = () => {
    if (step === 1) return form.name.trim() && form.email.trim() && form.location.trim();
    if (step === 2) return !!form.artworkType;
    if (step === 3) return form.dimensions.trim() && form.palette.trim();
    if (step === 4) return form.spaceDescription.trim() && form.vision.trim();
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const names = Array.from(e.dataTransfer.files).map((f) => f.name);
    if (names.length) update("files", [...form.files, ...names]);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="mx-auto h-14 w-14 rounded-full gold-seam flex items-center justify-center text-espresso-dark text-2xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl text-espresso mt-6">
          Your vision is on its way to the studio.
        </h3>
        <p className="mt-3 text-sm text-espresso/60 max-w-md mx-auto">
          Thank you, {form.name.split(" ")[0] || "friend"} — Prashasti reviews every
          commission inquiry personally and will reply within 2–3 business days with
          concept ideas and a quote.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setStep(1);
            setSubmitted(false);
          }}
          className="mt-8 text-xs tracking-widest2 uppercase text-terracotta hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-cream-light rounded-3xl shadow-soft p-6 sm:p-10">
      <div className="flex items-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full bg-espresso/10 overflow-hidden">
            <div
              className="h-full bg-terracotta transition-all duration-500"
              style={{ width: i + 1 <= step ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>

      <p className="text-[11px] tracking-widest2 uppercase text-terracotta mb-1">
        Step {step} of {totalSteps}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">
                Let&apos;s start with you
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name">
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                    placeholder="Jordan Reyes"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="jordan@email.com"
                  />
                </Field>
                <Field label="Shipping Location" full>
                  <input
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={inputClass}
                    placeholder="Toronto, ON, Canada"
                  />
                </Field>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">
                What are we creating?
              </h3>
              <div className="grid gap-3">
                {(
                  [
                    "Canvas Wall Art",
                    "Plaster Accent Piece",
                    "Commercial/Clinic Feature",
                  ] as ArtworkType[]
                ).map((type) => (
                  <button
                    key={type}
                    onClick={() => update("artworkType", type)}
                    className={`text-left rounded-xl border px-5 py-4 transition-colors ${
                      form.artworkType === type
                        ? "border-terracotta bg-terracotta/5"
                        : "border-espresso/15 hover:border-espresso/35"
                    }`}
                  >
                    <span className="font-medium text-espresso">{type}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">
                Dimensions &amp; palette
              </h3>
              <div className="grid gap-4">
                <Field label="Preferred Dimensions">
                  <input
                    value={form.dimensions}
                    onChange={(e) => update("dimensions", e.target.value)}
                    className={inputClass}
                    placeholder='e.g. 36" x 24", or "fits above a 6ft sofa"'
                  />
                </Field>
                <Field label="Preferred Palette">
                  <input
                    value={form.palette}
                    onChange={(e) => update("palette", e.target.value)}
                    className={inputClass}
                    placeholder="Espresso, gold leaf, and dusty terracotta"
                  />
                </Field>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">
                Tell me about the space
              </h3>
              <div className="grid gap-4">
                <Field label="Space Description">
                  <textarea
                    value={form.spaceDescription}
                    onChange={(e) => update("spaceDescription", e.target.value)}
                    rows={3}
                    className={inputClass}
                    placeholder="A sunlit reading nook with warm oak floors…"
                  />
                </Field>
                <Field label="Vision Narrative">
                  <textarea
                    value={form.vision}
                    onChange={(e) => update("vision", e.target.value)}
                    rows={3}
                    className={inputClass}
                    placeholder="What feeling should this piece hold for you?"
                  />
                </Field>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">
                Show me your space
              </h3>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`rounded-2xl border-2 border-dashed px-6 py-12 text-center transition-colors ${
                  dragOver ? "border-terracotta bg-terracotta/5" : "border-espresso/20"
                }`}
              >
                <p className="font-serif text-lg text-espresso">
                  Drag &amp; drop wall photos or inspiration
                </p>
                <p className="text-xs text-espresso/50 mt-2">
                  or click below to browse — JPG, PNG, up to 10MB each
                </p>
                <label className="inline-block mt-5 cursor-pointer rounded-full border border-espresso/25 px-5 py-2 text-xs tracking-wide uppercase hover:border-terracotta">
                  Choose Files
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      const names = Array.from(e.target.files ?? []).map((f) => f.name);
                      update("files", [...form.files, ...names]);
                    }}
                  />
                </label>
                {form.files.length > 0 && (
                  <ul className="mt-5 text-xs text-espresso/60 space-y-1">
                    {form.files.map((f) => (
                      <li key={f}>📎 {f}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="text-xs tracking-widest2 uppercase text-espresso/50 disabled:opacity-0 hover:text-espresso"
        >
          ← Back
        </button>

        {step < totalSteps ? (
          <button
            onClick={() => canAdvance() && setStep((s) => s + 1)}
            disabled={!canAdvance()}
            className="rounded-full bg-espresso text-cream-light px-7 py-3 text-sm font-semibold disabled:opacity-40 hover:bg-terracotta transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-terracotta text-cream-light px-7 py-3 text-sm font-semibold hover:bg-espresso transition-colors"
          >
            Send Inquiry
          </button>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-sm text-espresso placeholder:text-espresso/35 focus:outline-none focus:border-terracotta";

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-[11px] tracking-widest2 uppercase text-espresso/50 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
