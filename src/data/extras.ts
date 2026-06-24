// =====================================================================
// Championships, announcements, rules, and awards.
// =====================================================================

export type Championship = {
  year: number;
  title: string;
  sport: string;
  highlight?: boolean; // emphasize boys tennis
};

// School-wide MHSAA / Catholic League titles (compiled by AD Robert Walker),
// with boys tennis highlighted.
export const championships: Championship[] = [
  { year: 2024, title: "Boys Tennis MHSAA Regional Champion", sport: "Boys Tennis", highlight: true },
  { year: 2024, title: "Baseball Catholic League Sectional Champion", sport: "Baseball" },
  { year: 2023, title: "Boys Tennis Catholic League Sectional Champion", sport: "Boys Tennis", highlight: true },
  { year: 2023, title: "Girls Tennis Catholic League Sectional Champion", sport: "Girls Tennis" },
  { year: 2023, title: "Baseball Catholic League Sectional Champion", sport: "Baseball" },
  { year: 2022, title: "Boys Tennis MHSAA Regional Champion", sport: "Boys Tennis", highlight: true },
  { year: 2022, title: "Baseball Catholic League Sectional Champion", sport: "Baseball" },
  { year: 2021, title: "Girls Tennis Catholic League Sectional Champion", sport: "Girls Tennis" },
  { year: 2016, title: "Boys Golf MHSAA District Champion", sport: "Boys Golf" },
  { year: 2015, title: "Boys Golf Catholic League Sectional Champion", sport: "Boys Golf" },
  { year: 2010, title: "Boys Tennis Catholic League Sectional Champion", sport: "Boys Tennis", highlight: true },
  { year: 2009, title: "Boys Basketball Catholic League Sectional Champion", sport: "Boys Basketball" },
  { year: 2005, title: "Baseball Catholic League Sectional Champion", sport: "Baseball" },
];

export type Announcement = {
  date: string;
  title: string;
  body: string;
  pinned?: boolean;
};

// Edit/add announcements here — newest first. These are samples to start.
export const announcements: Announcement[] = [
  {
    date: "Summer 2026",
    title: "Welcome to the new Jaguars Tennis website!",
    body:
      "This is the new home for Frankel Jewish Academy boys tennis — schedule, roster, stats, history and news, all in one place. Check back as we add the fall 2025–26 roster and schedule.",
    pinned: true,
  },
  {
    date: "Fall season",
    title: "No-cut tryouts — everyone is welcome",
    body:
      "Frankel tennis is a no-cut program. If you're a Frankel student who wants to play, come out for the team — no experience required. Many of our players picked up a racket for the first time as freshmen.",
  },
];

export type AwardCategory = {
  title: string;
  items: string[];
};

export const awards: AwardCategory[] = [
  {
    title: "Coaching Honors",
    items: [
      "Larry Stark — Michigan Jewish Sports Hall of Fame (2006)",
      "Larry Stark — MHSAA Regional Coach of the Year (2022)",
    ],
  },
  {
    title: "Team Honors",
    items: [
      "MHSAA Division 4 Regional Champions — 2022, 2024",
      "Catholic League Champions — 2010, 2023",
      "Best state finish: 7th of 24 (2023)",
      "11 MHSAA Division 4 State Finals appearances in 13 years",
    ],
  },
  {
    title: "Individual Highlights",
    items: [
      "Brandon Witt — Regional Champion & state quarterfinalist (2024)",
      "Hayden Dean — Regional Champion at No. 2 singles (2024)",
      "Kowalsky & Squarcia — Regional Champions, undefeated regular seasons (2023, 2024)",
      "Tony Carson & Harry Shaevsky — State semifinalists (2023)",
      "Max Charlip — Team MVP & All-Catholic League (2021)",
    ],
  },
];

// Plain-language rules overview. Links go to the official sources.
export const rulesSections: { heading: string; intro?: string; points: string[] }[] = [
  {
    heading: "1. First, how tennis scoring works",
    intro:
      "Tennis doesn't count 1, 2, 3. It uses its own ladder, built in three layers: points make a game, games make a set, and sets win the match. Here it is from smallest to biggest:",
    points: [
      "Points (smallest unit): the score in a game goes 15 → 30 → 40 → game. Win 4 points and you win the game — but you have to win by two. (\"Love\" just means zero; 40–40 is called \"deuce.\")",
      "Games stack into a set: the first player to win 6 games wins the set, again by two. If it reaches 6–6, a short tiebreak decides the set.",
      "Sets win the match: win 2 sets and you've won. To save time, most high school matches replace a deciding third set with a single 10-point tiebreaker.",
      "Reading a score: \"6–3, 6–4\" means that player won the first set 6 games to 3 and the second 6 to 4 — two sets to none, match over.",
    ],
  },
  {
    heading: "2. What a \"flight\" is",
    intro:
      "A high school team match isn't one game on one court — it's eight separate matches happening at the same time on eight courts. Each of those is called a flight.",
    points: [
      "4 singles flights — one player vs. one player. The team's best singles player plays \"No. 1 Singles,\" the next-best plays No. 2, on down to No. 4.",
      "4 doubles flights — two players vs. two players. The strongest pair is \"No. 1 Doubles,\" down to No. 4 Doubles.",
      "The coach ranks the lineup by ability, so No. 1 is the strongest. You only play the matching flight on the other team — Frankel's No. 1 singles plays their No. 1 singles, and so on.",
      "So whenever two teams meet, there are 8 flights = 8 little contests being decided at once.",
    ],
  },
  {
    heading: "3. How a team match (a \"dual\") is won",
    intro:
      "When two schools play each other head-to-head, it's called a dual meet. The eight flights decide it:",
    points: [
      "Each flight is worth 1 point for whichever team wins that court — so there are 8 points up for grabs.",
      "The first team to win 5 of the 8 flights wins the dual. That's why final team scores look like 5–3, 6–2, or 8–0.",
      "Example: if Frankel wins 3 of the 4 singles flights and 2 of the 4 doubles flights, that's 5 flights — Frankel wins the dual 5–3.",
      "A 4–4 result is a tie. In our season records the ties are the last number — a \"6-7-2\" season means 6 wins, 7 losses, 2 ties.",
    ],
  },
  {
    heading: "4. Tournaments & the road to the State Finals",
    intro:
      "Besides one-on-one duals, teams play tournaments where many schools show up at once — there, each flight plays its own bracket and earns points toward a team total, and the school with the most points wins. The state playoffs work the same way:",
    points: [
      "Divisions: schools are grouped by enrollment so they face schools their own size. Frankel is in Division 4, the smallest-schools division.",
      "Regionals come first. Each flight plays a bracket and high finishers earn points; a team usually needs roughly 18 points to qualify for the State Finals — and a standout individual flight can punch its own ticket even if the team doesn't.",
      "State Finals: every flight plays its bracket, and the team with the most total points across all eight flights is the state champion. (In 2025, all eight Frankel flights qualified for the Finals.)",
      "Shabbat: because Frankel observes Shabbat (Friday evening through Saturday), the MHSAA arranges scheduling each year so the Jaguars never have to choose between their faith and competing.",
    ],
  },
];

// Quick definitions for anyone brand-new to tennis.
export const rulesGlossary: { term: string; definition: string }[] = [
  { term: "Love", definition: "Zero. \"15–love\" means 15–0." },
  { term: "Deuce", definition: "A 40–40 tie in a game; you then must win two points in a row to take the game." },
  { term: "Set", definition: "A chunk of the match won by the first to 6 games (by two). Win 2 sets and you win the match." },
  { term: "Match tiebreak", definition: "A first-to-10 (by two) tiebreaker used instead of a full third set to save time." },
  { term: "Flight", definition: "One of the 8 individual matchups (4 singles + 4 doubles) that make up a team match." },
  { term: "Dual", definition: "A head-to-head match between two schools, decided across all 8 flights." },
  { term: "Seed", definition: "A ranking given to the best players/teams in a bracket so the top ones don't meet too early." },
];

export const rulesLinks = [
  { label: "MHSAA Boys Tennis (official)", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "MHSAA Tennis regulations & seeding", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "USTA Rules of Tennis", url: "https://www.usta.com/en/home/improve/rules-and-regulations.html" },
];
