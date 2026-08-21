"use client";

import { framingOptions } from "@/data/artworks";
import { formatCAD } from "@/lib/format";
import { FramingOption } from "@/types";

export default function FramingSelector({
  value,
  onChange,
  compact = false,
}: {
  value: FramingOption;
  onChange: (option: FramingOption) => void;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="text-[11px] tracking-widest2 uppercase text-espresso/50 mb-2">
        Add Bespoke Framing
      </p>
      <div className={compact ? "flex flex-wrap gap-2" : "grid grid-cols-1 sm:grid-cols-2 gap-2"}>
        {framingOptions.map((opt) => {
          const active = opt.id === value.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt)}
              className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                active
                  ? "border-terracotta bg-terracotta/5"
                  : "border-espresso/15 hover:border-espresso/35"
              }`}
            >
              <span
                className="h-5 w-5 shrink-0 rounded-full border border-espresso/20"
                style={{
                  background:
                    opt.id === "none"
                      ? "repeating-linear-gradient(45deg, transparent, transparent 2px, #3D2B1F22 2px, #3D2B1F22 3px)"
                      : opt.swatch,
                }}
              />
              <span className="flex-1">
                <span className="block text-xs font-medium text-espresso leading-tight">
                  {opt.label}
                </span>
                <span className="block text-[11px] text-espresso/50">
                  {opt.price === 0 ? "Included" : `+ ${formatCAD(opt.price)}`}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
