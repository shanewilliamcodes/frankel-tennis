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
      "2024: 15-2 at No. 3 singles, Regional Champion, advanced to the state quarterfinals",
      "2023: 14-3 at No. 2 doubles as a freshman, reached the state semifinals",
      "\"Brandon will be our No. 1 singles player and a team captain. He's a leader.\" — Coach Larry Stark",
    ],
  },
  {
    slug: "shyah-lakind",
    name: "Shyah LaKind",
    yearsOnTeam: 3,
    highlights: ["2024: 11-5 at No. 4 singles, advanced to the regional championship match"],
  },
  {
    slug: "drew-edelstein",
    name: "Drew Edelstein",
    highlights: ["2024: played No. 4 doubles on the Regional Champion team"],
  },
  {
    slug: "moses-schuchman",
    name: "Moses Schuchman",
    highlights: ["2024: played No. 4 doubles on the Regional Champion team"],
  },
  { slug: "avery-schwartz", name: "Avery Schwartz" },
  { slug: "benji-brown", name: "Benji Brown" },
  { slug: "effie-shanbaum", name: "Effie Shanbaum" },
  { slug: "eli-katz", name: "Eli Katz" },
  { slug: "emmett-glass", name: "Emmett Glass" },
  { slug: "ethan-bocknek", name: "Ethan Bocknek" },
  { slug: "luca-turner", name: "Luca Turner" },
  { slug: "noah-tepper", name: "Noah Tepper" },
  { slug: "sam-prostak", name: "Sam Prostak" },
  { slug: "sammy-shanbaum", name: "Sammy Shanbaum" },
  { slug: "will-goodman", name: "Will Goodman" },
];
