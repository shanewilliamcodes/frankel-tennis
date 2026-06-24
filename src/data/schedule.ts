// =====================================================================
// SCHEDULE & KEY DATES — Fall 2026 (from the team's TeamSnap).
// Boys tennis is a FALL sport in Michigan. `result` is filled in after
// a match is played. `opponentKey` links to opponents.ts for the
// click-through scouting pages.
// =====================================================================

export type EventType = "Match" | "Tournament" | "Practice" | "Key Date";

export type ScheduleEvent = {
  date: string; // ISO "2026-09-04" preferred, or a readable string
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

// This is the real schedule, so no placeholder banner.
export const scheduleIsPlaceholder = false;

export const scheduleSeasonLabel = "Fall 2026";

// Practices and preseason "challenge matches" are held regularly at
// Drake Sports Park; the competitive schedule is listed below.
export const scheduleNote =
  "The team also practices most weekdays at Drake Sports Park (home courts). Preseason challenge matches run Aug. 10–21. Times are subject to change — check TeamSnap for the latest.";

export const schedule: ScheduleEvent[] = [
  {
    date: "2026-08-10",
    type: "Key Date",
    title: "Preseason begins — Challenge Matches",
    location: "Drake Sports Park",
    note: "Daily 10:00 AM–12:00 PM through Aug. 21. No-cut program — all are welcome.",
  },
  {
    date: "2026-08-19",
    type: "Tournament",
    title: "Tri-match vs. Walled Lake Northern & Livonia Franklin",
    opponent: "Walled Lake Northern",
    opponentKey: "walled-lake-northern",
    location: "Walled Lake Northern HS",
    home: false,
    time: "9:00 AM",
  },
  {
    date: "2026-08-20",
    type: "Match",
    title: "at Walled Lake Central",
    opponent: "Walled Lake Central",
    opponentKey: "walled-lake-central",
    location: "Walled Lake Central",
    home: false,
    time: "1:00 PM",
  },
  {
    date: "2026-08-24",
    type: "Tournament",
    title: "Tri-match at St. Clair",
    opponent: "St. Clair",
    opponentKey: "st-clair",
    location: "St. Clair HS",
    home: false,
    time: "9:00 AM",
    note: "Arrive 8:30 AM.",
  },
  {
    date: "2026-08-26",
    type: "Match",
    title: "at Walled Lake Northern",
    opponent: "Walled Lake Northern",
    opponentKey: "walled-lake-northern",
    location: "Walled Lake Northern HS",
    home: false,
    time: "4:00 PM",
  },
  {
    date: "2026-08-27",
    type: "Match",
    title: "vs. Divine Child",
    opponent: "Divine Child",
    opponentKey: "divine-child",
    location: "Drake Sports Park",
    home: true,
    time: "4:00 PM",
  },
  {
    date: "2026-08-31",
    type: "Match",
    title: "at Ann Arbor Gabriel Richard",
    opponent: "Ann Arbor Gabriel Richard",
    opponentKey: "gabriel-richard",
    location: "Huron Valley Tennis Club",
    home: false,
    time: "4:00 PM",
  },
  {
    date: "2026-09-10",
    type: "Match",
    title: "at Warren De La Salle",
    opponent: "Warren De La Salle Collegiate",
    opponentKey: "de-la-salle",
    location: "De La Salle",
    home: false,
    time: "4:00 PM",
    note: "Arrive 3:30 PM.",
  },
  {
    date: "2026-09-15",
    type: "Match",
    title: "vs. Jackson Lumen Christi",
    opponent: "Jackson Lumen Christi",
    opponentKey: "jackson-lumen-christi",
    location: "Drake Sports Park",
    home: true,
    time: "4:00 PM",
    note: "Arrive 3:30 PM.",
  },
  {
    date: "2026-09-17",
    type: "Match",
    title: "at Ann Arbor Gabriel Richard",
    opponent: "Ann Arbor Gabriel Richard",
    opponentKey: "gabriel-richard",
    location: "Pulaski Park",
    home: false,
    time: "4:00 PM",
    note: "Arrive 3:30 PM.",
  },
  {
    date: "2026-09-24",
    type: "Match",
    title: "at Notre Dame Prep",
    opponent: "Notre Dame Prep",
    opponentKey: "notre-dame-prep",
    location: "Notre Dame Prep",
    home: false,
    time: "4:00 PM",
    note: "Arrive 3:20 PM.",
  },
  {
    date: "2026-09-28",
    type: "Match",
    title: "at North Farmington",
    opponent: "North Farmington",
    opponentKey: "north-farmington",
    location: "North Farmington HS",
    home: false,
    time: "4:00 PM",
  },
  {
    date: "2026-09-29",
    type: "Match",
    title: "vs. Grosse Ile",
    opponent: "Grosse Ile",
    opponentKey: "grosse-ile",
    location: "Drake Sports Park",
    home: true,
    time: "4:00 PM",
  },
  {
    date: "2026-09-30",
    type: "Match",
    title: "at Farmington",
    opponent: "Farmington",
    opponentKey: "farmington",
    location: "Farmington HS",
    home: false,
    time: "4:00 PM",
  },
  {
    date: "2026-10-01",
    type: "Match",
    title: "at Hartland",
    opponent: "Hartland",
    opponentKey: "hartland",
    location: "Hartland HS",
    home: false,
    time: "4:00 PM",
  },
  {
    date: "2026-10-07",
    type: "Tournament",
    title: "MHSAA Division 4 Regional",
    opponent: "Grosse Ile",
    opponentKey: "grosse-ile",
    location: "Grosse Ile HS",
    note: "Need ~18 points to qualify for the State Finals.",
  },
  {
    date: "Mid-October 2026",
    type: "Tournament",
    title: "MHSAA Division 4 State Finals",
    location: "TBD",
    note: "Date & site to be confirmed. Accommodations are made around Shabbat each year.",
  },
];
