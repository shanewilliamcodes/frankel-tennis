"use client";

import Link from "next/link";
import { useState } from "react";
import type { ScheduleEvent, EventType } from "@/data/schedule";
import { Badge } from "./ui";

const typeTone: Record<EventType, "blue" | "gold" | "gray" | "green"> = {
  Match: "blue",
  Tournament: "gold",
  "Challenge Match": "green",
  Practice: "gray",
  "Key Date": "green",
};

// Timezone-safe: build the date in LOCAL time from YYYY-MM-DD so the weekday
// never shifts. Non-ISO strings (e.g. "Mid-October 2026") pass through.
function formatDate(d: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d);
  if (!m) return { main: d, sub: "" };
  const date = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return {
    main: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    sub: date.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

type FilterKey = "all" | "matches" | "challenge" | "practices";

const FILTERS: { key: FilterKey; label: string; test: (t: EventType) => boolean }[] = [
  { key: "all", label: "All", test: () => true },
  { key: "matches", label: "Matches & Tournaments", test: (t) => t === "Match" || t === "Tournament" || t === "Key Date" },
  { key: "challenge", label: "Challenge Matches", test: (t) => t === "Challenge Match" },
  { key: "practices", label: "Practices", test: (t) => t === "Practice" },
];

export function ScheduleList({ events }: { events: ScheduleEvent[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const active = FILTERS.find((f) => f.key === filter)!;
  const shown = events.filter((e) => active.test(e.type));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => {
          const count = events.filter((e) => f.test(e.type)).length;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                filter === f.key
                  ? "bg-[var(--navy)] text-white"
                  : "bg-white border border-[var(--line)] text-[var(--navy)] hover:bg-[var(--sky)]"
              }`}
            >
              {f.label} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <ol className="space-y-3">
        {shown.map((e, i) => {
          const d = formatDate(e.date);
          return (
            <li key={i} className="card card-hover p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="sm:w-24 shrink-0 flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-0">
                  {d.sub && <div className="text-xs font-semibold uppercase text-[var(--royal)]">{d.sub}</div>}
                  <div className="text-base font-extrabold text-[var(--navy)]">{d.main}</div>
                  {e.time && <div className="text-xs text-[var(--muted)]">{e.time}</div>}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={typeTone[e.type]}>{e.type}</Badge>
                    {e.home !== undefined && <Badge tone="gray">{e.home ? "Home" : "Away"}</Badge>}
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
          );
        })}
      </ol>
    </div>
  );
}
