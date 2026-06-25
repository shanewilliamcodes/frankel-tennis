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
// never shifts. Non-ISO strings pass through.
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

const LOCATION_QUERIES: Record<string, string> = {
  "De La Salle": "De La Salle Collegiate High School Warren MI",
  "Drake Sports Park": "Drake Sports Park West Bloomfield MI",
  "Farmington HS": "Farmington High School Farmington MI",
  "Grosse Ile HS": "Grosse Ile High School Grosse Ile MI",
  "Hartland HS": "Hartland High School Hartland MI",
  "Huron Valley Tennis Club": "Huron Valley Tennis Club Ann Arbor MI",
  "Midland Tennis Center": "Greater Midland Tennis Center Midland MI",
  "North Farmington HS": "North Farmington High School Farmington Hills MI",
  "Notre Dame Prep": "Notre Dame Preparatory School Pontiac MI",
  "Pulaski Park": "Pulaski Park Ann Arbor MI",
  "St. Clair HS": "St Clair High School Saint Clair MI",
  "Walled Lake Central": "Walled Lake Central High School Walled Lake MI",
  "Walled Lake Northern HS": "Walled Lake Northern High School Commerce Township MI",
};

function mapsUrl(location: string) {
  const query = LOCATION_QUERIES[location] ?? `${location} Michigan`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

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
                  {e.location && (
                    <p className="text-sm text-[var(--muted)]">
                      Location:{" "}
                      <a
                        href={mapsUrl(e.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--royal)] underline-offset-4 hover:underline"
                      >
                        {e.location}
                      </a>
                    </p>
                  )}
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
