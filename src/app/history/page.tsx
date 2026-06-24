import type { Metadata } from "next";
import { seasons } from "@/data/seasons";
import { PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "History & Stats",
  description:
    "Season-by-season results, records and lineups for Frankel Jaguars boys tennis, going back to 2015.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The record book"
        title="History & Stats"
        subtitle="Eleven state-finals trips in thirteen years. Here's the season-by-season story, with lineups where we have them."
      />
      <section className="section">
        <div className="container-page">
          <div className="mb-8 rounded-xl bg-slate-50 border border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)]">
            Detail varies by season: where the Detroit Jewish News published full match stats (2021–2024) you&apos;ll
            find complete flight-by-flight lineups. The 2025 league results are in; full 2025 regional/state stats
            will be added once available. The earliest seasons (2015–2019) predate that detailed coverage.
          </div>
          <div className="space-y-8">
            {seasons.map((s) => (
              <article key={s.year} className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="text-2xl font-extrabold text-[var(--navy)]">{s.year}</h2>
                  <p className="text-[var(--royal)] font-bold">{s.headline}</p>
                  {s.needsUpdate && <Badge tone="gold">To be confirmed</Badge>}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {s.dualRecord && <Badge tone="blue">Record {s.dualRecord}</Badge>}
                  {s.league && <Badge tone="gray">{s.league}</Badge>}
                  {s.regional && <Badge tone="gold">{s.regional}</Badge>}
                  {s.state && <Badge tone="green">{s.state}</Badge>}
                </div>

                {s.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[#25303f]">
                        <span aria-hidden className="mt-1 text-[var(--royal)]">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.lineup && s.lineup.length > 0 && (
                  <details className="mt-5 group">
                    <summary className="cursor-pointer select-none text-sm font-bold text-[var(--royal)]">
                      View lineup
                    </summary>
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="text-left text-[var(--muted)] border-b border-[var(--line)]">
                            <th className="py-2 pr-4 font-semibold">Flight</th>
                            <th className="py-2 pr-4 font-semibold">Player(s)</th>
                            <th className="py-2 pr-4 font-semibold">Record</th>
                            <th className="py-2 font-semibold">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {s.lineup.map((spot, i) => (
                            <tr key={i} className="border-b border-[var(--line)] last:border-0">
                              <td className="py-2 pr-4 font-semibold text-[var(--navy)] whitespace-nowrap">
                                {spot.flight}
                              </td>
                              <td className="py-2 pr-4">{spot.players.join(" / ")}</td>
                              <td className="py-2 pr-4 text-[var(--muted)] whitespace-nowrap">{spot.record ?? "—"}</td>
                              <td className="py-2 text-[var(--muted)]">{spot.note ?? ""}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
