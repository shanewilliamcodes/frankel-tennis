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
    headline: "Season details to be confirmed",
    highlights: [
      "Results for the fall 2025 season have not been added yet — update this entry in src/data/seasons.ts once final records are available.",
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
    headline: "First-ever Regional Champions · 14th at State",
    regional: "Regional Champions (program first)",
    state: "14th at Division 4 State Finals",
    highlights: [
      "Won the program's first-ever MHSAA regional championship.",
      "Larry Stark named Regional Coach of the Year by his fellow coaches.",
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
