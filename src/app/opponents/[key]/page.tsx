import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { opponents, lookupLinks, seriesRecord } from "@/data/opponents";

export function generateStaticParams() {
  return opponents.map((o) => ({ key: o.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const opp = opponents.find((o) => o.key === key);
  return {
    title: opp ? `${opp.name} (Opponent)` : "Opponent",
    description: opp ? `Scouting report on ${opp.name}.` : undefined,
  };
}

export default async function OpponentPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const opp = opponents.find((o) => o.key === key);
  if (!opp) notFound();

  const links = opp.links && opp.links.length > 0 ? opp.links : lookupLinks;
  const recordedSeries = seriesRecord(opp.headToHead);

  return (
    <>
      <div className="bg-[var(--navy)] text-white">
        <div className="container-page py-12">
          <Link href="/opponents" className="text-sm text-[var(--sky)] hover:text-white">
            ← All opponents
          </Link>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight">{opp.name}</h1>
          <p className="mt-1 text-white/80">
            {[opp.city, opp.league].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-page max-w-5xl">
          {(opp.record2025 || opp.coach || opp.vsFrankel2025 || recordedSeries || opp.roster2025) && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {opp.record2025 && (
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">2025 Record</p>
                  <p className="mt-1 text-2xl font-extrabold text-[var(--navy)]">{opp.record2025}</p>
                </div>
              )}
              {recordedSeries && (
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Recorded Series</p>
                  <p className="mt-1 text-2xl font-extrabold text-[var(--navy)]">{recordedSeries}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Frankel W-L-T</p>
                </div>
              )}
              {opp.vsFrankel2025 && (
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    Last meeting
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#25303f]">{opp.vsFrankel2025}</p>
                </div>
              )}
              {opp.coach && (
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Head Coach</p>
                  <p className="mt-1 text-sm font-bold text-[#25303f]">{opp.coach}</p>
                </div>
              )}
              {opp.roster2025 && (
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">2025 Roster</p>
                  <p className="mt-1 text-2xl font-extrabold text-[var(--navy)]">{opp.roster2025.length}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">players listed</p>
                </div>
              )}
            </div>
          )}

          {opp.notes && (
            <p className="mt-8 text-lg leading-relaxed text-[#25303f]">{opp.notes}</p>
          )}

          {opp.headToHead && opp.headToHead.length > 0 && (
            <div className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-extrabold text-[var(--navy)]">Head-to-head vs. Frankel</h2>
                {seriesRecord(opp.headToHead) && (
                  <p className="text-sm font-semibold text-[var(--muted)]">
                    Frankel is{" "}
                    <span className="text-[var(--navy)]">{seriesRecord(opp.headToHead)}</span> in recorded meetings
                  </p>
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Year-by-year dual results, from Frankel&apos;s side (W = Frankel win). Sourced from TennisReporting.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--line)] bg-white">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left text-[var(--muted)] border-b border-[var(--line)]">
                      <th className="py-2.5 px-4 font-semibold">Year</th>
                      <th className="py-2.5 px-4 font-semibold">Result</th>
                      <th className="py-2.5 px-4 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opp.headToHead.map((m, i) => {
                      const tone =
                        m.outcome === "W"
                          ? "bg-green-100 text-green-800"
                          : m.outcome === "L"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-800";
                      const label = m.outcome === "W" ? "Frankel win" : m.outcome === "L" ? "Frankel loss" : "Tie";
                      return (
                        <tr key={i} className="border-b border-[var(--line)] last:border-0">
                          <td className="py-2.5 px-4 font-semibold text-[var(--navy)] whitespace-nowrap">{m.year}</td>
                          <td className="py-2.5 px-4">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${tone}`}
                            >
                              {m.outcome} <span className="font-medium">· {label}</span>
                            </span>
                          </td>
                          <td className="py-2.5 px-4 text-[#25303f]">
                            {m.score ?? "—"}
                            {m.note && <span className="text-[var(--muted)]"> · {m.note}</span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {opp.roster2025 && opp.roster2025.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-extrabold text-[var(--navy)]">2025 Roster</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                The most recent roster on record (the season Frankel last faced them).
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {opp.roster2025.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-white px-4 py-2 text-sm"
                  >
                    <span className="font-semibold text-[#25303f]">{p.name}</span>
                    {p.grade && <span className="text-[var(--muted)]">Gr. {p.grade}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 card p-6">
            <h2 className="font-extrabold text-[var(--navy)]">More on {opp.name}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Roster and record above are from TennisReporting. For live lineups and scores:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[var(--navy)] text-white px-4 py-2 text-sm font-semibold hover:bg-[var(--navy-700)] transition-colors"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
