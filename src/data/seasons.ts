// =====================================================================
// Season-by-season history. Add a new object to the top each fall.
// `lineup` flights run: 1S-4S (singles), then 1D-4D (doubles).
// =====================================================================

export type Flight =
  | "1 Singles"
  | "2 Singles"
  | "3 Singles"
  | "4 Singles"
  | "1 Doubles"
  | "2 Doubles"
  | "3 Doubles"
  | "4 Doubles";

export type LineupSpot = {
  flight: Flight;
  players: string[];
  record?: string;
  note?: string;
};

export type Season = {
  year: number;
  // Short headline result for the timeline.
  headline: string;
  dualRecord?: string;
  league?: string;
  regional?: string;
  state?: string;
  highlights: string[];
  lineup?: LineupSpot[];
  // Set true when details still need to be confirmed/filled in.
  needsUpdate?: boolean;
};

export const seasons: Season[] = [
  {
    year: 2025,
    headline: "Catholic League play (full season stats coming)",
    league: "3-2 in Catholic League AA Division duals",
    highlights: [
      "Catholic League results: beat Ann Arbor Gabriel Richard 6-2, Divine Child 5-3, and Riverview Gabriel Richard 5-3; fell to Jackson Lumen Christi 6-2 and Warren De La Salle 5-3.",
      "Full season stats — non-league duals, the flight-by-flight lineup, and regional/state results — will be added once available (TennisReporting/MHSAA).",
    ],
    needsUpdate: true,
  },
  {
    year: 2024,
    headline: "Regional Champions (2nd time) · State qualifiers",
    dualRecord: "8-1-3",
    league: "Catholic League",
    regional: "Regional Champions — scored 22 points at Grosse Ile",
    state: "Tied for 15th of 21 teams (Division 4 State Finals, Midland)",
    highlights: [
      "Won the program's second-ever regional championship — a stunner given inexperienced 3 & 4 doubles teams.",
      "Three regional flight champions: Hayden Dean (2S), Brandon Witt (3S), and Kowalsky/Squarcia (2D).",
      "Brandon Witt advanced to the state quarterfinals at No. 3 singles.",
      "Avenged the regular season's lone loss (to Ann Arbor Gabriel Richard) twice in the regional final round.",
      "Kowalsky & Squarcia went undefeated in the regular season for the second straight year (12-0).",
    ],
    lineup: [
      { flight: "1 Singles", players: ["Ethan Schwartz"], record: "6-9", note: "Won first-round match at regionals" },
      { flight: "2 Singles", players: ["Hayden Dean"], record: "13-3", note: "Regional Champion" },
      { flight: "3 Singles", players: ["Brandon Witt"], record: "15-2", note: "Regional Champion · State quarterfinalist" },
      { flight: "4 Singles", players: ["Shyah LaKind"], record: "11-5", note: "Reached regional final" },
      { flight: "1 Doubles", players: ["Robbie Feldman", "Eli Rosenzweig"], record: "12-5", note: "Reached regional final" },
      { flight: "2 Doubles", players: ["Louie Kowalsky", "Austin Squarcia"], record: "16-1", note: "Regional Champions" },
      { flight: "3 Doubles", players: ["Aaron Schuchman", "Aidan Squarcia"], record: "3-6" },
      { flight: "4 Doubles", players: ["Drew Edelstein", "Moses Schuchman"], record: "1-4" },
    ],
  },
  {
    year: 2023,
    headline: "Catholic League Champions · Best-ever 7th at State",
    dualRecord: "9-1-1",
    league: "Catholic League Champions",
    regional: "Regional runner-up",
    state: "7th of 24 teams — highest finish in program history (Hope College)",
    highlights: [
      "First Frankel team to win the Catholic League and qualify for the state finals in the same year.",
      "Highest-ever state finish (7th) with semifinalists in three different flights — also a first.",
      "Beat West Bloomfield 5-3 among nine regular-season wins.",
      "Did it all after graduating seven seniors the year before, with only five of 12 players holding prior state experience.",
    ],
    lineup: [
      { flight: "1 Singles", players: ["Ethan Schwartz"] },
      { flight: "2 Singles", players: ["Hayden Dean"] },
      { flight: "3 Singles", players: ["Tony Carson"], note: "Captain · State semifinalist" },
      { flight: "4 Singles", players: ["Harry Shaevsky"], note: "Captain · State semifinalist" },
      { flight: "1 Doubles", players: ["Jonah Miller", "Eli Rosenzweig"] },
      { flight: "2 Doubles", players: ["Robbie Feldman", "Brandon Witt"], note: "State semifinalists" },
      { flight: "3 Doubles", players: ["Ryan Rubin", "Hudson Rosner"] },
      { flight: "4 Doubles", players: ["Louie Kowalsky", "Austin Squarcia"] },
    ],
  },
  {
    year: 2022,
    headline: "First-ever Regional Champions",
    dualRecord: "6-0-2",
    league: "2nd in Catholic League (4-4 ties vs. De La Salle & Divine Child)",
    regional: "Regional Champions — 22 points at Grosse Ile (Oct. 6), a program first",
    state: "Tied for 13th of 27 teams (5 pts) — Division 4 State Finals, Kalamazoo",
    highlights: [
      "Won the program's first-ever MHSAA regional championship — and reached state as a regional champ for the first time in school history.",
      "Larry Stark named Regional Coach of the Year by his fellow coaches.",
      "Seventh state-tournament trip in nine years, with seven seniors on the roster.",
      "Senior co-captain Ethan Grey was the third and last of the Grey brothers to play for Frankel — three brothers across the program's rise.",
      "Four flights won regional championships: Hayden Dean (3S), Tony Carson (4S), Rubin/Robbins (3D), and Shaevsky/Miller (4D).",
    ],
    lineup: [
      { flight: "1 Singles", players: ["Ethan Grey"], note: "Senior co-captain · reached regional semifinals" },
      { flight: "2 Singles", players: ["Max Charlip"] },
      { flight: "3 Singles", players: ["Hayden Dean"], note: "Regional Champion" },
      { flight: "4 Singles", players: ["Tony Carson"], note: "Regional Champion" },
      { flight: "1 Doubles", players: ["Aidan Charlip", "Gabe Gordon"], note: "Reached regional semifinals" },
      { flight: "2 Doubles", players: ["Merrick Michaelson", "AJ Goodman"], note: "Reached regional semifinals" },
      { flight: "3 Doubles", players: ["Ryan Rubin", "Caleb Robbins"], note: "Regional Champions" },
      { flight: "4 Doubles", players: ["Harry Shaevsky", "Jonah Miller"], note: "Regional Champions" },
    ],
  },
  {
    year: 2021,
    headline: "State qualifiers · 2nd in Catholic League",
    dualRecord: "6-3-1",
    league: "2nd in Catholic League (3-1)",
    state: "13th at Division 4 State Finals",
    highlights: [
      "Qualified for the Division 4 state tournament — a fifth appearance under Larry Stark.",
      "Max Charlip named team MVP and All-Catholic League at No. 2 singles.",
    ],
    lineup: [
      { flight: "1 Singles", players: ["Ethan Grey"], record: "8-6" },
      { flight: "2 Singles", players: ["Max Charlip"], record: "11-3", note: "MVP · All-Catholic League" },
      { flight: "3 Singles", players: ["Aidan Charlip"], record: "5-9" },
      { flight: "4 Singles", players: ["Hayden Dean"], record: "9-5" },
      { flight: "1 Doubles", players: ["Eli Gordon", "Tony Carson"], record: "7-6" },
      { flight: "2 Doubles", players: ["Matthew Kay", "Caleb Kleinfeldt"], record: "6-7", note: "Kay — team captain" },
      { flight: "3 Doubles", players: ["AJ Goodman", "Gabe Gordon"], record: "11-4" },
      { flight: "4 Doubles", players: ["Jonah Miller", "Harry Shaevsky"], record: "10-4" },
    ],
  },
  {
    year: 2019,
    headline: "Division 4 State Finals qualifiers",
    state: "Qualified for Division 4 State Finals",
    highlights: ["One of eight state-finals appearances in a 10-year span."],
  },
  {
    year: 2017,
    headline: "Division 4 State Finals qualifiers",
    state: "Qualified for Division 4 State Finals",
    highlights: ["Continued the program's run of state-finals appearances under Larry Stark."],
  },
  {
    year: 2016,
    headline: "Division 4 State Finals qualifiers",
    state: "Qualified for Division 4 State Finals",
    highlights: ["Second straight trip to the state finals."],
  },
  {
    year: 2015,
    headline: "First State Finals trip · 8th place",
    state: "8th at Division 4 State Finals",
    highlights: [
      "Larry Stark's first full season produced the program's first-ever state-finals appearance.",
      "An 8th-place finish stood as the program's best until 2023.",
    ],
  },
];
