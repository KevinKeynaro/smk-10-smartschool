"use client";

import { useState } from "react";
import { prestasi, type PrestasiKategori } from "@/lib/data";

const filters: ("Semua" | PrestasiKategori)[] = ["Semua", "Akademik", "Seni Budaya"];

export default function PrestasiList({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua");
  const items = prestasi.filter((p) => active === "Semua" || p.kategori === active).slice(0, limit);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter prestasi">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1 text-xs transition-colors ${
              active === f ? "border-sky-brand bg-sky-brand text-white" : "border-gray-300 bg-white hover:border-sky-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div
              className="h-32 bg-gradient-to-br from-navy-700 to-navy-900 bg-cover bg-center"
              style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
              role="img"
              aria-label={p.title}
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
              <p className="mt-1 text-xs text-gray-600">Diraih oleh {p.team}</p>
              <p className="mt-3 text-xs text-gray-500">{p.date}</p>
              <p className="text-xs text-gray-500">{p.place}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
