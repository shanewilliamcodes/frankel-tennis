// =====================================================================
// OPPONENTS
// Profiles for schedule click-throughs. Rosters/records for other schools
// aren't always public, so each links out to MHSAA and TennisReporting,
// where their lineups and results can be looked up.
// =====================================================================

export type Opponent = {
  key: string;
  name: string;
  city?: string;
  league?: string;
  notes?: string;
  links?: { label: string; url: string }[];
};

// Generic lookup links users can use for ANY opponent.
export const lookupLinks = [
  { label: "MHSAA Boys Tennis", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "TennisReporting.com", url: "https://www.tennisreporting.com/" },
];

export const opponents: Opponent[] = [
  {
    key: "west-bloomfield",
    name: "West Bloomfield",
    city: "West Bloomfield, MI",
    notes:
      "A larger Division 1 program and a frequent regular-season measuring stick. Frankel beat the Lakers 5-3 in 2023. Coach Larry Stark led West Bloomfield's boys tennis team for eight years before coming to Frankel.",
    links: [
      { label: "MHSAA school page", url: "https://www.mhsaa.com/" },
      { label: "Look up on TennisReporting", url: "https://www.tennisreporting.com/" },
    ],
  },
  {
    key: "gabriel-richard",
    name: "Ann Arbor Gabriel Richard",
    city: "Ann Arbor, MI",
    league: "Catholic League / Division 4",
    notes:
      "A Division 4 rival that handed Frankel its only dual loss in 2024 (6-2, with three tiebreaker losses) — then watched the Jaguars avenge two of those in the regional final round on the way to the title.",
    links: [{ label: "Look up on TennisReporting", url: "https://www.tennisreporting.com/" }],
  },
  {
    key: "grosse-ile",
    name: "Grosse Ile",
    city: "Grosse Ile, MI",
    notes: "Host of the 2024 Division 4 regional, where Frankel scored 22 points to win the team title.",
    links: [{ label: "Look up on TennisReporting", url: "https://www.tennisreporting.com/" }],
  },
];

export function getOpponent(key: string): Opponent | undefined {
  return opponents.find((o) => o.key === key);
}
