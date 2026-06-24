import Link from "next/link";
import type { Metadata } from "next";
import { schedule, scheduleIsPlaceholder, scheduleSeasonLabel } from "@/data/schedule";
import { PageHeader, Badge, NeedsUpdateBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Match schedule, practices and key dates for Frankel Jaguars boys tennis.",
};

const typeTone: Record<string, "blue" | "gold" | "gray" | "green"> = {
  Match: "blue",
  Tournament: "gold",
  Practice: "gray",
  "Key Date": "green",
};

function formatDate(d: string) {
  // Accept ISO or readable strings.
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Season"
        title="Schedule & Key Dates"
        subtitle={`Matches, practices and important dates. ${scheduleSeasonLabel}.`}
      />
      <section className="section">
        <div className="container-page space-y-6">
          {scheduleIsPlaceholder && (
            <NeedsUpdateBanner>
              These are <strong>sample entries</strong> to show how the schedule looks. Send the official
              fall schedule (or point me to it on{" "}
              <a className="underline" href="https://www.frankelathletics.com/" target="_blank" rel="noopener noreferrer">
                frankelathletics.com
              </a>
              ) and I&apos;ll drop in the real dates, opponents and results.
            </NeedsUpdateBanner>
          )}

          <ol className="space-y-3">
            {schedule.map((e, i) => (
              <li key={i} className="card card-hover p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <div className="sm:w-28 shrink-0">
                    <div className="text-sm font-extrabold text-[var(--navy)]">{formatDate(e.date)}</div>
                    {e.time && <div className="text-xs text-[var(--muted)]">{e.time}</div>}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={typeTone[e.type]}>{e.type}</Badge>
                      {e.home !== undefined && (
                        <Badge tone="gray">{e.home ? "Home" : "Away"}</Badge>
                      )}
                      {e.result && <Badge tone="green">{e.result}</Badge>}
                    </div>
                    <h3 className="mt-2 font-bold text-[var(--navy)]">
                      {e.opponentKey ? (
                        <Link href={`/opponents/${e.opponentKey}`} className="hover:text-[var(--royal)]">
                          {e.title} →
                        </Link>
                      ) : (
                        e.title
                      )}
                    </h3>
                    {e.location && <p className="text-sm text-[var(--muted)]">📍 {e.location}</p>}
                    {e.note && <p className="mt-1 text-sm text-[var(--muted)]">{e.note}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
