// =====================================================================
// OPPONENTS
// High school tennis rosters are rarely published in one public place.
// The best public sources are the Catholic League site (chsl.com — open
// schedules, scores & standings) and MaxPreps. Each opponent shows real
// head-to-head history with Frankel plus links to those public hubs.
// =====================================================================

export type Opponent = {
  key: string;
  name: string;
  city?: string;
  league?: string;
  notes?: string;
  links?: { label: string; url: string }[];
};

// Public hubs that work for looking up most Michigan opponents.
// (MHSAA's my.mhsaa.com and TennisReporting require logins; these don't.)
export const lookupLinks = [
  {
    label: "Catholic League scores & standings",
    url: "https://www.chsl.com/schools/frankel-jewish-academy/boys-varsity-aa-division-tennis-2025",
  },
  { label: "MaxPreps", url: "https://www.maxpreps.com/" },
  { label: "MHSAA Boys Tennis results", url: "https://www.mhsaa.com/sports/boys-tennis" },
];

export const opponents: Opponent[] = [
  {
    key: "gabriel-richard",
    name: "Ann Arbor Gabriel Richard",
    city: "Ann Arbor, MI",
    league: "Catholic League AA Division / Division 4",
    notes:
      "A Catholic League rival the Jaguars see twice a year. Frankel beat them 6-2 in 2025 Catholic League play. In 2024 Gabriel Richard handed Frankel its only dual loss (6-2, with three tiebreaker losses) — then watched the Jaguars avenge two of those in the regional final round on the way to the title.",
    links: [
      {
        label: "Catholic League page (scores & standings)",
        url: "https://www.chsl.com/schools/fr-gabriel-richard-ann-arbor/boys-varsity-aa-division-tennis-2025",
      },
    ],
  },
  {
    key: "grosse-ile",
    name: "Grosse Ile",
    city: "Grosse Ile, MI",
    league: "Division 4",
    notes:
      "Host of the Division 4 regional and a perennial regional contender. Frankel scored 22 points at Grosse Ile to win its first-ever regional title in 2022 (Grosse Ile finished 2nd), and won the regional there again in 2024. They also meet in the 2026 regular season.",
  },
  {
    key: "jackson-lumen-christi",
    name: "Jackson Lumen Christi",
    city: "Jackson, MI",
    league: "Catholic League AA Division / Division 4",
    notes:
      "A strong Catholic League and Division 4 program. Lumen Christi beat Frankel 6-2 in 2025 league play, and finished 4th at the 2022 regional that Frankel won.",
  },
  {
    key: "divine-child",
    name: "Divine Child",
    city: "Dearborn, MI",
    league: "Catholic League AA Division",
    notes: "A larger Catholic League program. Frankel beat Divine Child 5-3 in 2025; the two played a 4-4 tie in 2022.",
  },
  {
    key: "de-la-salle",
    name: "Warren De La Salle Collegiate",
    city: "Warren, MI",
    league: "Catholic League AA Division",
    notes:
      "A large, traditional Catholic League athletic power. De La Salle edged Frankel 5-3 in 2025 league play; the schools tied 4-4 in 2022.",
  },
  {
    key: "notre-dame-prep",
    name: "Notre Dame Prep",
    city: "Pontiac, MI",
    league: "Catholic League AA Division / Division 4",
    notes: "Catholic League and Division 4 opponent; finished 6th at the 2022 regional that Frankel won.",
  },
  {
    key: "west-bloomfield",
    name: "West Bloomfield",
    city: "West Bloomfield, MI",
    league: "Division 1",
    notes:
      "A larger Division 1 program and a frequent regular-season measuring stick. Frankel beat the Lakers 5-3 in 2023. Coach Larry Stark led West Bloomfield's boys tennis team for eight years before coming to Frankel.",
  },
  {
    key: "walled-lake-northern",
    name: "Walled Lake Northern",
    city: "Commerce Township, MI",
    league: "Division 1",
    notes: "Hosts Frankel for an early-season tri-match and a second dual in late August 2026.",
  },
  {
    key: "walled-lake-central",
    name: "Walled Lake Central",
    city: "Commerce Township, MI",
    league: "Division 1",
  },
  {
    key: "livonia-franklin",
    name: "Livonia Franklin",
    city: "Livonia, MI",
    league: "Division 1",
    notes: "Shares an early-season tri-match with Frankel and Walled Lake Northern.",
  },
  {
    key: "st-clair",
    name: "St. Clair",
    city: "St. Clair, MI",
    league: "Division 2",
    notes: "Tri-match opponent to open the 2026 season.",
  },
  {
    key: "north-farmington",
    name: "North Farmington",
    city: "Farmington Hills, MI",
    league: "Division 1",
  },
  {
    key: "farmington",
    name: "Farmington",
    city: "Farmington, MI",
    league: "Division 1",
  },
  {
    key: "hartland",
    name: "Hartland",
    city: "Hartland, MI",
    league: "Division 1",
    notes: "A larger program Frankel schedules to sharpen up before the postseason.",
  },
];

export function getOpponent(key: string): Opponent | undefined {
  return opponents.find((o) => o.key === key);
}
