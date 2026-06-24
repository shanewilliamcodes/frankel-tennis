import type { Metadata } from "next";
import { awards, championships } from "@/data/extras";
import { PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Awards & Honors",
  description: "Championships, coaching honors and individual achievements for Frankel Jaguars boys tennis.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trophy case"
        title="Awards & Honors"
        subtitle="Championships, coaching honors and standout individual seasons. (More to come as the year unfolds.)"
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {awards.map((cat) => (
              <div key={cat.title} className="card p-6">
                <h2 className="font-extrabold text-[var(--navy)]">{cat.title}</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-[#25303f]">
                      <span aria-hidden className="text-[var(--gold)]">★</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 border-y border-[var(--line)]">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-[var(--navy)]">
            Frankel championship history
          </h2>
          <p className="mt-2 text-[var(--muted)] max-w-2xl">
            School-wide MHSAA and Catholic League titles (compiled by Athletic Director Robert Walker). Boys
            tennis titles are highlighted.
          </p>
          <ul className="mt-6 divide-y divide-[var(--line)] card overflow-hidden">
            {championships.map((c, i) => (
              <li
                key={i}
                className={`flex items-center gap-4 px-5 py-3 ${c.highlight ? "bg-[var(--sky)]/60" : ""}`}
              >
                <span className="w-14 font-extrabold text-[var(--navy)]">{c.year}</span>
                <span className="flex-1 text-[#25303f]">{c.title}</span>
                {c.highlight && <Badge tone="blue">Boys Tennis</Badge>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
