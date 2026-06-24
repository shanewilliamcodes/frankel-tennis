import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { opponents, lookupLinks } from "@/data/opponents";

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
        <div className="container-page max-w-3xl">
          {opp.notes && <p className="text-lg leading-relaxed text-[#25303f]">{opp.notes}</p>}

          <div className="mt-8 card p-6">
            <h2 className="font-extrabold text-[var(--navy)]">Look up their roster &amp; results</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Head-to-head lineups and scores can be found here:
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
