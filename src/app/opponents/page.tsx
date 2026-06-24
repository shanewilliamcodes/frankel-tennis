import Link from "next/link";
import type { Metadata } from "next";
import { opponents, lookupLinks } from "@/data/opponents";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Opponents",
  description:
    "Scouting the schools on the Frankel Jaguars schedule, with links to look up their rosters and results.",
};

export default function OpponentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scouting report"
        title="Opponents"
        subtitle="The schools we face, with Frankel's head-to-head history against each. For the Catholic League rivals and our regular-season measuring sticks, you'll find their 2025 record, head coach and full roster — pulled from TennisReporting."
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {opponents.map((o) => (
              <Link key={o.key} href={`/opponents/${o.key}`} className="card card-hover p-6 block">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-extrabold text-[var(--navy)]">{o.name}</h2>
                  {o.record2025 && (
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-[var(--navy)] whitespace-nowrap">
                      ’25: {o.record2025}
                    </span>
                  )}
                </div>
                {o.city && <p className="text-sm text-[var(--muted)]">{o.city}</p>}
                {o.notes && <p className="mt-3 text-sm text-[#25303f] line-clamp-3">{o.notes}</p>}
                <span className="mt-4 inline-block text-sm font-bold text-[var(--royal)]">Scouting page →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-slate-50 border border-[var(--line)] p-6">
            <h2 className="font-extrabold text-[var(--navy)]">Look up any team</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Opponent rosters and match results aren&apos;t always published in one place. These sites are the
              best way to find any Michigan school&apos;s lineup and scores:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {lookupLinks.map((l) => (
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
