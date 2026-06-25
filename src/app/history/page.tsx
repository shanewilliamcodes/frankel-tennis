import type { Metadata } from "next";
import { seasons } from "@/data/seasons";
import { d4Champions } from "@/data/d4champions";
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

                {s.results && s.results.length > 0 && (
                  <details className="mt-5 group">
                    <summary className="cursor-pointer select-none text-sm font-bold text-[var(--royal)]">
                      View full results ({s.results.length})
                    </summary>
                    <ul className="mt-4 divide-y divide-[var(--line)]">
                      {s.results.map((r, i) => {
                        const tone =
                          r.outcome === "W"
                            ? "bg-green-100 text-green-800"
                            : r.outcome === "L"
                            ? "bg-red-100 text-red-700"
                            : r.outcome === "T"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-slate-100 text-slate-600";
                        return (
                          <li key={i} className="flex items-center gap-3 py-2 text-sm">
                            <span className="w-14 shrink-0 text-[var(--muted)] tabular-nums">{r.date}</span>
                            <span
                              className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${tone}`}
                            >
                              {r.outcome}
                            </span>
                            <span className="flex-1 text-[#25303f]">
                              {r.opponent}
                              {r.note && <span className="text-[var(--muted)]"> · {r.note}</span>}
                            </span>
                            {r.score && (
                              <span className="shrink-0 font-semibold text-[var(--navy)] tabular-nums">{r.score}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </details>
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

      <section className="section bg-slate-50 border-t border-[var(--line)]">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-[var(--navy)]">The Division 4 picture</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-[#25303f]">
            Frankel competes in MHSAA <strong>Division 4</strong>, the small-school division. To win it all, you go
            through perennial powers like Grosse Pointe Woods University Liggett and Ann Arbor Greenhills. Liggett won
            the 2025 state title at the same finals where the Jaguars qualified all eight flights — with regional
            rival Jackson Lumen Christi finishing runner-up. Here are the official Division 4 state champions.
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--line)] bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[var(--muted)] border-b border-[var(--line)]">
                  <th className="py-3 px-4 font-semibold">Year</th>
                  <th className="py-3 px-4 font-semibold">State Champion</th>
                  <th className="py-3 px-4 font-semibold">Runner-Up</th>
                </tr>
              </thead>
              <tbody>
                {d4Champions.map((c) => (
                  <tr key={c.year} className="border-b border-[var(--line)] last:border-0">
                    <td className="py-2.5 px-4 font-semibold text-[var(--navy)] whitespace-nowrap">{c.year}</td>
                    <td className="py-2.5 px-4 text-[#25303f]">
                      {c.champion}
                      {c.frankelFoe && (
                        <span className="ml-2 rounded-full bg-[var(--navy)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--navy)]">
                          on Frankel&apos;s schedule
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-[var(--muted)]">{c.runnerUp ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">Source: MHSAA official records (mhsaa.com).</p>
        </div>
      </section>
    </>
  );
}
