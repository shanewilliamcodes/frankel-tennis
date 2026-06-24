// =====================================================================
// SCHEDULE & KEY DATES
// Boys tennis is a FALL sport in Michigan. Add the current season's
// matches, practices, and key dates here. `result` is optional.
// `opponentKey` links to an entry in opponents.ts (for the click-through
// opponent pages); leave undefined if there's no opponent profile.
// =====================================================================

export type EventType = "Match" | "Tournament" | "Practice" | "Key Date";

export type ScheduleEvent = {
  date: string; // ISO "2025-08-20" preferred, or a readable string
  type: EventType;
  title: string;
  opponent?: string;
  opponentKey?: string;
  location?: string;
  home?: boolean;
  time?: string;
  result?: string; // e.g. "W 5-3" once played
  note?: string;
};

// Flip to false once the real schedule is in.
export const scheduleIsPlaceholder = true;

export const scheduleSeasonLabel = "Fall 2025 (sample — replace with the official schedule)";

// A few illustrative entries showing how the schedule renders.
// Replace these with the official schedule from frankelathletics.com.
export const schedule: ScheduleEvent[] = [
  {
    date: "2025-08-13",
    type: "Key Date",
    title: "First day of fall practice",
    note: "No-cut program — all are welcome.",
  },
  {
    date: "2025-09-04",
    type: "Match",
    title: "Dual match vs. West Bloomfield",
    opponent: "West Bloomfield",
    opponentKey: "west-bloomfield",
    home: false,
    note: "Sample entry — confirm date/time.",
  },
  {
    date: "2025-09-18",
    type: "Match",
    title: "Catholic League dual vs. Ann Arbor Gabriel Richard",
    opponent: "Ann Arbor Gabriel Richard",
    opponentKey: "gabriel-richard",
    home: true,
    note: "Sample entry — confirm date/time.",
  },
  {
    date: "2025-10-09",
    type: "Tournament",
    title: "MHSAA Division 4 Regional",
    location: "TBD",
    note: "Need 18 points to qualify for the State Finals.",
  },
  {
    date: "2025-10-17",
    type: "Tournament",
    title: "MHSAA Division 4 State Finals",
    location: "TBD",
    note: "Accommodations are made around Shabbat each year.",
  },
];
