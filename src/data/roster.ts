// =====================================================================
// ROSTER — current squad.
// Add `flight`, `grade`, `hometown`, `bio`, `highlights` as you get them.
// Each player automatically gets a profile page at /roster/<slug>.
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

// The season this roster represents.
export const rosterSeason = "2026 Season";

// Set to false now that this is the real, coach-provided roster.
export const rosterIsProvisional = false;

// Note shown under the roster while the lineup (flight order) is still being set.
export const rosterNote =
  "Flight assignments (singles/doubles order) are set during the preseason — they'll be added here once the lineup is finalized.";

export const roster: Player[] = [
  {
    slug: "brandon-witt",
    name: "Brandon Witt",
    grade: "Senior",
    flight: "1 Singles",
    isCaptain: true,
    yearsOnTeam: 4,
    bio: "A senior captain and the team's projected No. 1 singles player. Brandon didn't play competitive tennis before Frankel — he came from Hillel Day School, where he played basketball — and has grown into one of the program's leaders and best players.",
    highlights: [
      "2025: 7-10 at No. 1 singles as a junior, won his Regional opener",
      "2024: 15-2 at No. 3 singles, Regional Champion, advanced to the state quarterfinals",
      "2023: 14-3 at No. 2 doubles as a freshman, reached the state semifinals",
    ],
  },
  {
    slug: "shyah-lakind",
    name: "Shyah LaKind",
    grade: "Senior",
    isCaptain: true,
    yearsOnTeam: 3,
    bio: "A senior captain who has climbed the lineup every year and posted the team's best singles record in 2025. Steady and competitive, Shyah has been one of the program's most dependable point-winners deep in the lineup.",
    highlights: [
      "2025: 12-7 at No. 4 singles — the team's best singles record; won 3 matches at the Regional and a match at the State Finals",
      "2024: 11-5 at No. 4 singles, advanced to the regional championship match",
    ],
  },
  {
    slug: "drew-edelstein",
    name: "Drew Edelstein",
    grade: "Senior",
    bio: "A senior doubles player who has been part of back-to-back regional-winning, state-qualifying teams and moved up to No. 2 doubles in 2025.",
    highlights: [
      "2025: played No. 2 doubles as a junior",
      "2024: played No. 4 doubles on the Regional Champion team",
    ],
  },
  {
    slug: "moses-schuchman",
    name: "Moses Schuchman",
    grade: "Junior",
    bio: "A junior who has grown into the varsity doubles lineup and won a State Finals match at No. 4 doubles in 2025.",
    highlights: [
      "2025: 4-12 at No. 4 doubles, won a match at the State Finals",
      "2024: played No. 4 doubles on the Regional Champion team",
    ],
  },
  {
    slug: "avery-schwartz",
    name: "Avery Schwartz",
    grade: "Sophomore",
    bio: "A sophomore who saw varsity doubles action as a freshman in 2025 and is part of the program's rising young core.",
    highlights: ["2025: played varsity doubles as a freshman"],
  },
  {
    slug: "benji-brown",
    name: "Benji Brown",
    grade: "Senior",
    bio: "A senior who contributed in the varsity doubles rotation in 2025.",
    highlights: ["2025: saw varsity time at No. 4 doubles"],
  },
  { slug: "effie-shanbaum", name: "Effie Shanbaum", bio: "New to the varsity squad for the 2026 season." },
  { slug: "eli-katz", name: "Eli Katz", bio: "New to the varsity squad for the 2026 season." },
  { slug: "emmett-glass", name: "Emmett Glass", bio: "New to the varsity squad for the 2026 season." },
  {
    slug: "ethan-bocknek",
    name: "Ethan Bocknek",
    grade: "Sophomore",
    bio: "Cracked the varsity doubles lineup as a freshman in 2025, playing No. 3 doubles — one of the team's promising underclassmen.",
    highlights: ["2025: played No. 3 doubles as a freshman (3-9)"],
  },
  {
    slug: "luca-turner",
    name: "Luca Turner",
    grade: "Junior",
    bio: "A junior in his third year with the program who saw early-season varsity action in 2025.",
    highlights: ["2025: played varsity singles and doubles in early-season matches"],
  },
  {
    slug: "noah-tepper",
    name: "Noah Tepper",
    grade: "Senior",
    bio: "A senior doubles player who won a State Finals match at No. 4 doubles in 2025.",
    highlights: ["2025: 4-12 at No. 4 doubles, won a match at the State Finals"],
  },
  { slug: "sam-prostak", name: "Sam Prostak", bio: "New to the varsity squad for the 2026 season." },
  {
    slug: "sammy-shanbaum",
    name: "Sammy Shanbaum",
    grade: "Sophomore",
    bio: "A sophomore who saw varsity doubles time as a freshman in 2025, picking up a doubles win.",
    highlights: ["2025: played varsity doubles as a freshman, with a doubles win"],
  },
  { slug: "will-goodman", name: "Will Goodman", bio: "New to the varsity squad for the 2026 season." },
];
