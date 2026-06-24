import Link from "next/link";
import type { Metadata } from "next";
import { roster, rosterSeason, rosterIsProvisional } from "@/data/roster";
import { PageHeader, Badge, NeedsUpdateBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Roster",
  description: "Players and lineup for Frankel Jaguars boys tennis.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function RosterPage() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Roster & Lineup"
        subtitle={`Players for the ${rosterSeason}. Tap any player for their profile and highlights.`}
      />
      <section className="section">
        <div className="container-page space-y-6">
          {rosterIsProvisional && (
            <NeedsUpdateBanner>
              This roster shows the <strong>most recent published lineup</strong> as a starting point. Send the
              current season&apos;s roster (names, grades, flights) and I&apos;ll update it — each player gets their
              own profile page automatically.
            </NeedsUpdateBanner>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roster.map((p) => (
              <Link key={p.slug} href={`/roster/${p.slug}`} className="card card-hover p-5 flex items-center gap-4">
                <div className="grid place-items-center w-14 h-14 rounded-full bg-[var(--navy)] text-white font-extrabold shrink-0">
                  {initials(p.name)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-[var(--navy)] truncate">{p.name}</h3>
                    {p.isCaptain && <Badge tone="gold">Captain</Badge>}
                  </div>
                  <p className="text-sm text-[var(--muted)]">
                    {[p.grade, p.flight].filter(Boolean).join(" · ")}
                  </p>
                  <span className="mt-1 inline-block text-xs font-bold text-[var(--royal)]">View profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
