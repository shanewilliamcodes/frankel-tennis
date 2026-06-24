// =====================================================================
// OPPONENTS
// High school tennis rosters are rarely published in one public place.
// The best public sources are the Catholic League site (chsl.com — open
// schedules, scores & standings) and MaxPreps. Each opponent shows real
// head-to-head history with Frankel plus links to those public hubs.
// =====================================================================

export type RosterPlayer = { name: string; grade?: number };

// One Frankel-vs-opponent dual result, from Frankel's point of view.
export type Meeting = {
  year: number;
  outcome: "W" | "L" | "T";
  score?: string;
  note?: string;
};

export type Opponent = {
  key: string;
  name: string;
  city?: string;
  league?: string;
  notes?: string;
  // Real 2025 data pulled from TennisReporting (the season Frankel last faced them).
  record2025?: string;
  coach?: string;
  vsFrankel2025?: string;
  roster2025?: RosterPlayer[];
  // Frankel's year-by-year head-to-head dual results (newest first), from TennisReporting.
  headToHead?: Meeting[];
  links?: { label: string; url: string }[];
};

// Frankel's all-time (recorded) record vs an opponent, e.g. "5-2-1".
export function seriesRecord(meetings?: Meeting[]): string | null {
  if (!meetings || meetings.length === 0) return null;
  let w = 0,
    l = 0,
    t = 0;
  for (const m of meetings) {
    if (m.outcome === "W") w++;
    else if (m.outcome === "L") l++;
    else t++;
  }
  return `${w}-${l}-${t}`;
}

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
    record2025: "6-8-1",
    coach: "Rocco Pisto",
    vsFrankel2025: "Frankel won 6-2 (Sept. 8, 2025)",
    headToHead: [
      { year: 2025, outcome: "W", score: "6-2" },
      { year: 2024, outcome: "L", score: "2-6" },
      { year: 2023, outcome: "W", score: "5-3" },
      { year: 2022, outcome: "W", score: "7-1" },
      { year: 2021, outcome: "W", score: "10-0" },
      { year: 2020, outcome: "W", score: "5-1" },
      { year: 2019, outcome: "L", score: "2-6" },
      { year: 2017, outcome: "L", score: "1-6" },
    ],
    notes:
      "A Catholic League rival the Jaguars see twice a year. Frankel beat them 6-2 in 2025 Catholic League play. In 2024 Gabriel Richard handed Frankel its only dual loss (6-2, with three tiebreaker losses) — then watched the Jaguars avenge two of those in the regional final round on the way to the title.",
    roster2025: [
      { name: "William “Billy” Heegan", grade: 12 },
      { name: "Howard “Max” Haessler", grade: 12 },
      { name: "Vincent Prezecki", grade: 12 },
      { name: "Howard “Howie” Schorer", grade: 12 },
      { name: "John “Jack” Skoczylas", grade: 12 },
      { name: "Andy Marshall", grade: 12 },
      { name: "Matthew Goechner", grade: 12 },
      { name: "Jason Zunich", grade: 11 },
      { name: "Blaise Mosher", grade: 11 },
      { name: "Cameron McLeod", grade: 11 },
      { name: "Jimmy Heegan", grade: 10 },
      { name: "Simon Schroer", grade: 10 },
      { name: "Conner Grohar", grade: 10 },
      { name: "John Miller", grade: 9 },
      { name: "Andrew Stout", grade: 9 },
      { name: "Micah Livingston", grade: 9 },
    ],
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
    record2025: "19-5-4",
    coach: "Audrey Shade",
    vsFrankel2025: "Grosse Ile won 6-2 (Sept. 17, 2025)",
    headToHead: [
      { year: 2025, outcome: "L", score: "2-6" },
      { year: 2024, outcome: "T", score: "4-4" },
      { year: 2023, outcome: "W", score: "6-2" },
      { year: 2022, outcome: "W", score: "6-2" },
      { year: 2021, outcome: "W", score: "5-4", note: "also tied 4-4 same day" },
    ],
    notes:
      "Host of the Division 4 regional and a perennial regional contender. Frankel scored 22 points at Grosse Ile to win its first-ever regional title in 2022 (Grosse Ile finished 2nd), and won the regional there again in 2024. They also meet in the 2026 regular season.",
    roster2025: [
      { name: "Nick Naso", grade: 12 },
      { name: "Kayden Johnson", grade: 12 },
      { name: "Tyson Harp", grade: 12 },
      { name: "Rocco Stoney", grade: 12 },
      { name: "Andy Matzo", grade: 12 },
      { name: "Michael Olenchak", grade: 12 },
      { name: "Michael Hall", grade: 12 },
      { name: "Brock Marlatt", grade: 12 },
      { name: "Connor Beauman", grade: 12 },
      { name: "Zach Wilson", grade: 12 },
      { name: "Michael Dinevski", grade: 11 },
      { name: "Abraham Randles", grade: 11 },
      { name: "Jack Johnson", grade: 10 },
      { name: "Dominic Naso", grade: 10 },
      { name: "Tye Chlebek", grade: 9 },
      { name: "Andrew Ranka", grade: 9 },
      { name: "Everett Scott", grade: 9 },
    ],
  },
  {
    key: "jackson-lumen-christi",
    name: "Jackson Lumen Christi",
    city: "Jackson, MI",
    league: "Catholic League AA Division / Division 4",
    record2025: "22-3-4",
    coach: "Austin Brinker",
    vsFrankel2025: "Lumen Christi won 6-2 (Sept. 4, 2025)",
    headToHead: [
      { year: 2025, outcome: "L", score: "2-6" },
      { year: 2024, outcome: "T", score: "4-4" },
      { year: 2023, outcome: "W", score: "7-1", note: "Frankel's Catholic League title year" },
    ],
    notes:
      "The class of the Catholic League — Lumen Christi went 22-3-4 in 2025, won the Catholic League AA championship, and won the Division 4 Regional that Frankel played in. They beat Frankel 6-2 in league play, and finished 4th at the 2022 regional that Frankel won.",
    roster2025: [
      { name: "Luke DuMont", grade: 12 },
      { name: "Boyer Zimmerman", grade: 12 },
      { name: "Holden Luce", grade: 12 },
      { name: "Nolan Curtis", grade: 12 },
      { name: "Jason Gonerka", grade: 12 },
      { name: "Gabe Cooper", grade: 11 },
      { name: "Chase Schirmacher", grade: 11 },
      { name: "Maden Brady", grade: 11 },
      { name: "TJ O’Neil", grade: 11 },
      { name: "Zack Tropea", grade: 11 },
      { name: "Brogan Kelly", grade: 11 },
      { name: "Harrison Botke", grade: 11 },
      { name: "Shayan Challapalli", grade: 10 },
      { name: "Theo McEldowney", grade: 9 },
      { name: "Tannyn Magee", grade: 9 },
      { name: "Leo Ross", grade: 9 },
      { name: "Patrick Best", grade: 9 },
      { name: "Luke Berner", grade: 9 },
      { name: "Lucas Sharlow", grade: 9 },
    ],
  },
  {
    key: "divine-child",
    name: "Divine Child",
    city: "Dearborn, MI",
    league: "Catholic League AA Division",
    record2025: "8-5-0",
    coach: "Ken Germain",
    vsFrankel2025: "Frankel won 5-3 (Sept. 11, 2025)",
    headToHead: [
      { year: 2025, outcome: "W", score: "5-3" },
      { year: 2024, outcome: "W", score: "6-2" },
      { year: 2023, outcome: "W", score: "7-1" },
      { year: 2022, outcome: "T", score: "4-4" },
      { year: 2021, outcome: "W", score: "6-2" },
      { year: 2020, outcome: "W", score: "6-1" },
      { year: 2019, outcome: "W", score: "5-2" },
      { year: 2017, outcome: "W", score: "6-1" },
    ],
    notes: "A larger Catholic League program. Frankel beat Divine Child 5-3 in 2025; the two played a 4-4 tie in 2022.",
    roster2025: [
      { name: "Asher Englert", grade: 12 },
      { name: "Rhett Cicotte", grade: 12 },
      { name: "Augustine Carlesimo", grade: 12 },
      { name: "Joshua Willis", grade: 12 },
      { name: "Henry Phillips", grade: 12 },
      { name: "Liam Godin", grade: 12 },
      { name: "Gabriel Lencioni", grade: 12 },
      { name: "Paul Bagazinski", grade: 12 },
      { name: "Mark Esparza", grade: 12 },
      { name: "Liam Fischer", grade: 11 },
      { name: "Colin Miller", grade: 11 },
      { name: "Finn Murray", grade: 11 },
      { name: "Lucas Rancour", grade: 11 },
      { name: "Ryan Kujansuu", grade: 10 },
      { name: "Michael Jaber", grade: 10 },
      { name: "Sullivan Bryant", grade: 10 },
      { name: "Sam Grezlik", grade: 9 },
      { name: "Greyson Goodwin", grade: 9 },
    ],
  },
  {
    key: "de-la-salle",
    name: "Warren De La Salle Collegiate",
    city: "Warren, MI",
    league: "Catholic League AA Division",
    record2025: "9-2-0",
    coach: "Annmarie Michol",
    vsFrankel2025: "De La Salle won 5-3 (Sept. 18, 2025)",
    headToHead: [
      { year: 2025, outcome: "L", score: "3-5" },
      { year: 2024, outcome: "W", score: "5-3" },
      { year: 2023, outcome: "W", score: "7-1" },
      { year: 2022, outcome: "T", score: "4-4" },
      { year: 2021, outcome: "L", score: "1-7" },
      { year: 2020, outcome: "L", score: "2-6" },
      { year: 2019, outcome: "L", score: "0-6" },
      { year: 2017, outcome: "W", score: "4-2" },
    ],
    notes:
      "A large, traditional Catholic League athletic power — 9-2 in 2025, with their only losses to league champ Lumen Christi and Grosse Pointe South. De La Salle edged Frankel 5-3 in 2025 league play; the schools tied 4-4 in 2022.",
    roster2025: [
      { name: "Evan Femminineo", grade: 11 },
      { name: "Alex Bonin", grade: 11 },
      { name: "Ian Beshke", grade: 11 },
      { name: "Liam Erickson", grade: 10 },
      { name: "Brandon Hargis", grade: 10 },
    ],
  },
  {
    key: "notre-dame-prep",
    name: "Notre Dame Prep",
    city: "Pontiac, MI",
    league: "Catholic League AA Division / Division 4",
    record2025: "8-6-4",
    coach: "Leigh Ann Grubbs",
    vsFrankel2025: "Frankel won 5-2 (Sept. 30, 2025)",
    headToHead: [
      { year: 2025, outcome: "W", score: "5-2" },
      { year: 2024, outcome: "T", score: "4-4" },
      { year: 2022, outcome: "W", score: "6-2" },
      { year: 2020, outcome: "L", note: "lost to them in the district final" },
      { year: 2019, outcome: "W", score: "6-3" },
    ],
    notes: "Catholic League and Division 4 opponent; Frankel beat them 5-2 in 2025, and they finished 6th at the 2022 regional that Frankel won.",
    roster2025: [
      { name: "Jacob Evans", grade: 12 },
      { name: "Ethan Fitzpatrick", grade: 12 },
      { name: "Matthew Vogel", grade: 12 },
      { name: "Augustin Villajuan", grade: 12 },
      { name: "Joe Pittel", grade: 11 },
      { name: "Finley Wise", grade: 11 },
      { name: "Luco Wisniewski", grade: 11 },
      { name: "Rocco Wisniewski", grade: 11 },
      { name: "Adiv Patel", grade: 11 },
      { name: "Alex Chung", grade: 11 },
      { name: "Josh Powers", grade: 11 },
      { name: "Mark Mardelli", grade: 11 },
      { name: "Jacob Pittel", grade: 9 },
      { name: "David Shorter", grade: 9 },
      { name: "Michael Mlinarcik", grade: 9 },
      { name: "Holder Fox", grade: 9 },
      { name: "Anthony (AJ) Bedricky", grade: 9 },
      { name: "Austin Bates", grade: 9 },
    ],
  },
  {
    key: "west-bloomfield",
    name: "West Bloomfield",
    city: "West Bloomfield, MI",
    league: "Division 1",
    record2025: "9-3-1",
    coach: "Chris Ludwig",
    vsFrankel2025: "West Bloomfield won 6-0 (Sept. 3, 2025)",
    headToHead: [
      { year: 2025, outcome: "L", score: "0-6" },
      { year: 2024, outcome: "W", score: "5-3" },
      { year: 2023, outcome: "W", score: "5-3" },
      { year: 2020, outcome: "L", score: "1-7" },
      { year: 2019, outcome: "L", score: "1-7" },
    ],
    notes:
      "The Jaguars' larger Division 1 neighbor and a frequent regular-season measuring stick — 9-3-1 in 2025. Frankel beat the Lakers 5-3 in 2023. Coach Larry Stark led West Bloomfield's boys tennis team for eight years before coming to Frankel.",
    roster2025: [
      { name: "Neel Kamath", grade: 12 },
      { name: "Aidan Moran", grade: 12 },
      { name: "John Mclean", grade: 12 },
      { name: "Nived Paingol", grade: 12 },
      { name: "Dorian Ferguson", grade: 12 },
      { name: "Akihito Ohta", grade: 12 },
      { name: "Daniel Prifti", grade: 12 },
      { name: "Raihaan Mohammad", grade: 12 },
      { name: "Sean Borlack", grade: 12 },
      { name: "Luca Gioia", grade: 12 },
      { name: "Shay Chismody", grade: 11 },
      { name: "Sheldon Samuels", grade: 11 },
      { name: "Mason Ermis", grade: 11 },
      { name: "Donovan Padgett", grade: 10 },
      { name: "Evin Azarian", grade: 10 },
      { name: "Rowan Shell", grade: 10 },
      { name: "Parker Gnesin", grade: 10 },
      { name: "Logan Glass", grade: 10 },
      { name: "Nathan Yu", grade: 9 },
    ],
  },
  {
    key: "walled-lake-northern",
    name: "Walled Lake Northern",
    city: "Commerce Township, MI",
    league: "Division 1",
    notes: "A Division 1 program Frankel meets early most years. Hosts the Jaguars for a tri-match and a second dual in late August 2026.",
    headToHead: [
      { year: 2023, outcome: "T", score: "4-4" },
      { year: 2021, outcome: "L", score: "1-7" },
      { year: 2019, outcome: "L", score: "2-5" },
    ],
  },
  {
    key: "walled-lake-central",
    name: "Walled Lake Central",
    city: "Commerce Township, MI",
    league: "Division 1",
    notes: "A Division 1 early-season regular. The series has been back-and-forth.",
    headToHead: [
      { year: 2024, outcome: "W", score: "6-2" },
      { year: 2023, outcome: "L", score: "3-5" },
      { year: 2020, outcome: "T", score: "4-4" },
      { year: 2019, outcome: "L", score: "1-6" },
      { year: 2017, outcome: "W", score: "5-2" },
    ],
  },
  {
    key: "livonia-franklin",
    name: "Livonia Franklin",
    city: "Livonia, MI",
    league: "Division 1",
    notes: "Shares an early-season tri-match with Frankel and Walled Lake Northern.",
    headToHead: [{ year: 2021, outcome: "W", score: "8-2" }],
  },
  {
    key: "st-clair",
    name: "St. Clair",
    city: "St. Clair, MI",
    league: "Division 2",
    notes: "Tri-match opponent to open the 2026 season; Frankel beat them 5-3 in their first meeting in 2025.",
    headToHead: [{ year: 2025, outcome: "W", score: "5-3" }],
  },
  {
    key: "north-farmington",
    name: "North Farmington",
    city: "Farmington Hills, MI",
    league: "Division 1",
    notes: "A larger Division 1 program; the 2019 meeting went down to the wire (a 5-6 loss).",
    headToHead: [{ year: 2019, outcome: "L", score: "5-6" }],
  },
  {
    key: "farmington",
    name: "Farmington",
    city: "Farmington, MI",
    league: "Division 1",
    notes: "A Division 1 opponent from Frankel's backyard.",
    headToHead: [{ year: 2020, outcome: "L", score: "0-7" }],
  },
  {
    key: "hartland",
    name: "Hartland",
    city: "Hartland, MI",
    league: "Division 1",
    notes: "A larger program Frankel schedules to sharpen up before the postseason. The Jaguars have taken the last three meetings.",
    headToHead: [
      { year: 2024, outcome: "W", score: "6-2" },
      { year: 2023, outcome: "W", score: "7-1" },
      { year: 2022, outcome: "W", score: "5-3" },
      { year: 2021, outcome: "L", score: "3-6" },
    ],
  },
];

export function getOpponent(key: string): Opponent | undefined {
  return opponents.find((o) => o.key === key);
}
