// =====================================================================
// SCHEDULE & KEY DATES — Fall 2026 (from the team's TeamSnap).
// EVERY event is listed individually (each challenge match, practice,
// match and tournament on its own date). `result` is filled in after a
// match is played. `opponentKey` links to opponents.ts.
// =====================================================================

export type EventType =
  | "Match"
  | "Tournament"
  | "Challenge Match"
  | "Practice"
  | "Key Date";

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

export const scheduleIsPlaceholder = false;
export const scheduleSeasonLabel = "Fall 2026";

export const schedule: ScheduleEvent[] = [
  // ----- August: preseason challenge matches & openers -----
  { date: "2026-08-10", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM", note: "Preseason begins · arrive 9:45 AM." },
  { date: "2026-08-11", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM", note: "Arrive 9:45 AM." },
  { date: "2026-08-12", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-13", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-14", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-17", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-18", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-19", type: "Match", title: "Tri-match vs. Walled Lake Northern & Livonia Franklin", opponent: "Walled Lake Northern", opponentKey: "walled-lake-northern", location: "Walled Lake Northern HS", home: false, time: "9:00 AM" },
  { date: "2026-08-20", type: "Match", title: "at Walled Lake Central", opponent: "Walled Lake Central", opponentKey: "walled-lake-central", location: "Walled Lake Central", home: false, time: "1:00 PM" },
  { date: "2026-08-21", type: "Challenge Match", title: "Challenge Matches", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-24", type: "Match", title: "Tri-match at St. Clair", opponent: "St. Clair", opponentKey: "st-clair", location: "St. Clair HS", home: false, time: "9:00 AM", note: "Arrive 8:30 AM." },
  { date: "2026-08-25", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-26", type: "Match", title: "at Walled Lake Northern", opponent: "Walled Lake Northern", opponentKey: "walled-lake-northern", location: "Walled Lake Northern HS", home: false, time: "4:00 PM" },
  { date: "2026-08-27", type: "Match", title: "vs. Divine Child", opponent: "Divine Child", opponentKey: "divine-child", location: "Drake Sports Park", home: true, time: "4:00 PM" },
  { date: "2026-08-28", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "10:00 AM – 12:00 PM" },
  { date: "2026-08-31", type: "Match", title: "at Ann Arbor Gabriel Richard", opponent: "Ann Arbor Gabriel Richard", opponentKey: "gabriel-richard", location: "Huron Valley Tennis Club", home: false, time: "4:00 PM" },

  // ----- September -----
  { date: "2026-09-01", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-02", type: "Practice", title: "Inter-squad match", location: "Drake Sports Park", time: "4:00 – 6:00 PM", note: "Intra-team match." },
  { date: "2026-09-03", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-04", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "3:00 – 5:00 PM" },
  { date: "2026-09-07", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-08", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-09", type: "Practice", title: "Inter-squad match", location: "Drake Sports Park", time: "4:00 – 6:00 PM", note: "Intra-team match." },
  { date: "2026-09-10", type: "Match", title: "at Warren De La Salle", opponent: "Warren De La Salle Collegiate", opponentKey: "de-la-salle", location: "De La Salle", home: false, time: "4:00 PM", note: "Arrive 3:30 PM." },
  { date: "2026-09-11", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-14", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-15", type: "Match", title: "vs. Jackson Lumen Christi", opponent: "Jackson Lumen Christi", opponentKey: "jackson-lumen-christi", location: "Drake Sports Park", home: true, time: "4:00 PM", note: "Arrive 3:30 PM." },
  { date: "2026-09-16", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-17", type: "Match", title: "at Ann Arbor Gabriel Richard", opponent: "Ann Arbor Gabriel Richard", opponentKey: "gabriel-richard", location: "Pulaski Park", home: false, time: "4:00 PM", note: "Arrive 3:30 PM." },
  { date: "2026-09-18", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "3:00 – 5:00 PM" },
  { date: "2026-09-21", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-22", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-09-23", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "3:30 – 5:30 PM" },
  { date: "2026-09-24", type: "Match", title: "at Notre Dame Prep", opponent: "Notre Dame Prep", opponentKey: "notre-dame-prep", location: "Notre Dame Prep", home: false, time: "4:00 PM", note: "Arrive 3:20 PM." },
  { date: "2026-09-25", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "3:00 – 5:00 PM" },
  { date: "2026-09-28", type: "Match", title: "at North Farmington", opponent: "North Farmington", opponentKey: "north-farmington", location: "North Farmington HS", home: false, time: "4:00 PM" },
  { date: "2026-09-29", type: "Match", title: "vs. Grosse Ile", opponent: "Grosse Ile", opponentKey: "grosse-ile", location: "Drake Sports Park", home: true, time: "4:00 PM" },
  { date: "2026-09-30", type: "Match", title: "at Farmington", opponent: "Farmington", opponentKey: "farmington", location: "Farmington HS", home: false, time: "4:00 PM" },

  // ----- October: final tune-ups & postseason -----
  { date: "2026-10-01", type: "Match", title: "at Hartland", opponent: "Hartland", opponentKey: "hartland", location: "Hartland HS", home: false, time: "4:00 PM" },
  { date: "2026-10-02", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-10-05", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-10-06", type: "Practice", title: "Practice", location: "Drake Sports Park", time: "4:00 – 6:00 PM" },
  { date: "2026-10-07", type: "Tournament", title: "MHSAA Division 4 Regional", opponent: "Grosse Ile", opponentKey: "grosse-ile", location: "Grosse Ile HS", note: "Need ~18 points to qualify for the State Finals." },
  { date: "2026-10-21", type: "Tournament", title: "MHSAA Division 4 State Finals", location: "Midland Tennis Center", note: "Official MHSAA dates: Oct. 21-22. Accommodations are made around Shabbat each year." },
];
