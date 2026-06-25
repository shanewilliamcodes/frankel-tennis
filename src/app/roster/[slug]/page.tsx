import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { roster } from "@/data/roster";
import { Badge } from "@/components/ui";

export function generateStaticParams() {
  return roster.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const player = roster.find((p) => p.slug === slug);
  return {
    title: player ? player.name : "Player",
    description: player ? `${player.name} — Frankel Jaguars boys tennis.` : undefined,
  };
}

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = roster.find((p) => p.slug === slug);
  if (!player) notFound();

  return (
    <>
      <div className="bg-[var(--navy)] text-white">
        <div className="container-page py-12">
          <Link href="/roster" className="text-sm text-[var(--sky)] hover:text-white">
            ← Back to roster
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <div className="grid place-items-center w-20 h-20 rounded-full bg-white/10 border border-white/20 text-2xl font-extrabold">
              {initials(player.name)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight">{player.name}</h1>
                {player.isCaptain && <Badge tone="gold">Captain</Badge>}
              </div>
              <p className="mt-1 text-white/80">
                {[player.grade, player.flight].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="grid gap-3 sm:grid-cols-3 mb-8">
            {[
              ["Class", player.grade ?? "To be updated"],
              ["Current flight", player.flight ?? "Preseason TBD"],
              ["Team experience", player.yearsOnTeam ? `${player.yearsOnTeam} years` : "To be updated"],
            ].map(([label, value]) => (
              <div key={label} className="card p-4">
                <p className="stat-label">{label}</p>
                <p className="mt-2 font-extrabold text-[var(--navy)]">{value}</p>
              </div>
            ))}
          </div>

          {player.bio && <p className="text-lg leading-relaxed text-[#25303f]">{player.bio}</p>}

          {player.highlights && player.highlights.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-extrabold text-[var(--navy)]">Career highlights</h2>
              <ul className="mt-4 space-y-3">
                {player.highlights.map((h, i) => (
                  <li key={i} className="card p-4 flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" />
                    <span className="text-[#25303f]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!player.bio && (!player.highlights || player.highlights.length === 0) && (
            <div className="rounded-xl bg-slate-50 border border-[var(--line)] p-6 text-[var(--muted)]">
              <p className="font-semibold text-[var(--navy)]">Profile coming soon</p>
              <p className="mt-1 text-sm">
                Stats and highlights for {player.name} will appear here as the season gets underway.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
