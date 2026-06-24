// =====================================================================
// ROSTER
// This is pre-filled with the most recent KNOWN lineup (2024) as a
// starting point. Replace `players` with the current season's roster
// when it's set — each player gets a detail page at /roster/<slug>.
// =====================================================================

export type Player = {
  slug: string;
  name: string;
  grade?: string; // e.g. "Senior", "Sophomore", or "12"
  flight?: string; // current/typical flight, e.g. "1 Singles"
  isCaptain?: boolean;
  hometown?: string;
  yearsOnTeam?: number;
  bio?: string;
  highlights?: string[];
};

// Set to the current/most-recent season this roster represents.
export const rosterSeason = "2024 (most recent published lineup)";

// When true, a banner notes the roster is awaiting the current season.
export const rosterIsProvisional = true;

export const roster: Player[] = [
  {
    slug: "brandon-witt",
    name: "Brandon Witt",
    grade: "Junior",
    flight: "1 Singles",
    isCaptain: true,
    yearsOnTeam: 3,
    bio: "Projected No. 1 singles player and a team captain. Brandon didn't play competitive tennis before Frankel — he came from Hillel Day School, where he played basketball — and has become one of the program's leaders.",
    highlights: [
      "2024: 15-2 at No. 3 singles, Regional Champion, state quarterfinalist",
      "2023: 14-3 at No. 2 doubles as a freshman, reached state semifinals",
    ],
  },
  {
    slug: "hayden-dean",
    name: "Hayden Dean",
    grade: "Senior",
    flight: "2 Singles",
    yearsOnTeam: 4,
    highlights: [
      "2024: 13-3 at No. 2 singles, Regional Champion (won a four-hour regional final)",
      "Four-year varsity contributor across singles and doubles",
    ],
  },
  {
    slug: "ethan-schwartz",
    name: "Ethan Schwartz",
    grade: "Senior",
    flight: "1 Singles",
    yearsOnTeam: 3,
    highlights: ["2024: No. 1 singles", "2023: No. 1 singles on the best-ever state team"],
  },
  {
    slug: "shyah-lakind",
    name: "Shyah LaKind",
    flight: "4 Singles",
    highlights: ["2024: 11-5 at No. 4 singles, reached the regional final"],
  },
  {
    slug: "robbie-feldman",
    name: "Robbie Feldman",
    flight: "1 Doubles",
    highlights: [
      "2024: 12-5 at No. 1 doubles, reached the regional final",
      "2023: state semifinalist at No. 2 doubles",
    ],
  },
  {
    slug: "eli-rosenzweig",
    name: "Eli Rosenzweig",
    flight: "1 Doubles",
    highlights: ["2024: 12-5 at No. 1 doubles, reached the regional final"],
  },
  {
    slug: "louie-kowalsky",
    name: "Louie Kowalsky",
    flight: "2 Doubles",
    highlights: [
      "2024: 16-1 at No. 2 doubles, Regional Champion",
      "Undefeated in the regular season two years running (12-0 in 2024, 11-0 in 2023)",
    ],
  },
  {
    slug: "austin-squarcia",
    name: "Austin Squarcia",
    flight: "2 Doubles",
    highlights: [
      "2024: 16-1 at No. 2 doubles, Regional Champion",
      "Undefeated in the regular season two years running",
    ],
  },
  {
    slug: "aaron-schuchman",
    name: "Aaron Schuchman",
    flight: "3 Doubles",
    highlights: ["2024: No. 3 doubles"],
  },
  {
    slug: "aidan-squarcia",
    name: "Aidan Squarcia",
    flight: "3 Doubles",
    highlights: ["2024: No. 3 doubles"],
  },
  {
    slug: "drew-edelstein",
    name: "Drew Edelstein",
    flight: "4 Doubles",
    highlights: ["2024: No. 4 doubles"],
  },
  {
    slug: "moses-schuchman",
    name: "Moses Schuchman",
    flight: "4 Doubles",
    highlights: ["2024: No. 4 doubles"],
  },
];
