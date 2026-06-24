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
    key: "gabriel-richard",
    name: "Ann Arbor Gabriel Richard",
    city: "Ann Arbor, MI",
    league: "Catholic League / Division 4",
    notes:
      "A Division 4 rival and one of the toughest tests on the schedule. Gabriel Richard handed Frankel its only dual loss in 2024 (6-2, with three tiebreaker losses) — then watched the Jaguars avenge two of those in the regional final round on the way to the title. The Jaguars face them twice in 2026.",
  },
  {
    key: "grosse-ile",
    name: "Grosse Ile",
    city: "Grosse Ile, MI",
    notes:
      "Host of the Division 4 regional. Frankel scored 22 points at Grosse Ile to win the 2024 regional team title, and returns there for the 2026 regional on Oct. 7.",
  },
  {
    key: "west-bloomfield",
    name: "West Bloomfield",
    city: "West Bloomfield, MI",
    notes:
      "A larger Division 1 program and a frequent regular-season measuring stick. Frankel beat the Lakers 5-3 in 2023. Coach Larry Stark led West Bloomfield's boys tennis team for eight years before coming to Frankel.",
  },
  {
    key: "walled-lake-northern",
    name: "Walled Lake Northern",
    city: "Commerce Township, MI",
    notes: "Hosts Frankel for a tri-match early in the season and a second dual in late August.",
  },
  {
    key: "walled-lake-central",
    name: "Walled Lake Central",
    city: "Commerce Township, MI",
  },
  {
    key: "livonia-franklin",
    name: "Livonia Franklin",
    city: "Livonia, MI",
    notes: "Shares a tri-match with Frankel and Walled Lake Northern.",
  },
  {
    key: "st-clair",
    name: "St. Clair",
    city: "St. Clair, MI",
    notes: "Tri-match opponent.",
  },
  {
    key: "divine-child",
    name: "Divine Child",
    city: "Dearborn, MI",
    league: "Catholic League",
  },
  {
    key: "de-la-salle",
    name: "Warren De La Salle Collegiate",
    city: "Warren, MI",
    league: "Catholic League",
  },
  {
    key: "jackson-lumen-christi",
    name: "Jackson Lumen Christi",
    city: "Jackson, MI",
    league: "Catholic League",
  },
  {
    key: "notre-dame-prep",
    name: "Notre Dame Prep",
    city: "Pontiac, MI",
    league: "Catholic League",
  },
  {
    key: "north-farmington",
    name: "North Farmington",
    city: "Farmington Hills, MI",
  },
  {
    key: "farmington",
    name: "Farmington",
    city: "Farmington, MI",
  },
  {
    key: "hartland",
    name: "Hartland",
    city: "Hartland, MI",
    notes: "A larger program Frankel schedules to sharpen up before the postseason.",
  },
];

export function getOpponent(key: string): Opponent | undefined {
  return opponents.find((o) => o.key === key);
}
