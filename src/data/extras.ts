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
    title: "2026 season information is now in one place",
    body:
      "The TeamSnap schedule, current roster, player profiles, opponent scouting pages, season history and news archive are now collected here for players and parents.",
    pinned: true,
  },
  {
    date: "Aug. 10, 2026",
    title: "Preseason challenge matches begin",
    body:
      "Challenge matches start Monday, Aug. 10 at Drake Sports Park. Each date is listed separately on the schedule so players and parents can confirm the correct day and time.",
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
      "Larry Stark — MHSTeCA Regional Coach of the Year at Frankel (2016, 2022, 2025)",
      "Larry Stark — MHSTeCA Regional Coach of the Year at West Bloomfield (2011)",
    ],
  },
  {
    title: "Team Honors",
    items: [
      "MHSAA Division 4 Regional Champions — 2022, 2024",
      "Catholic League Champions — 2010, 2023",
      "Best state finish: 7th of 24 (2023)",
      "11 MHSAA Division 4 State Finals appearances in 13 years",
      "All 8 flights qualified for the Division 4 State Finals in 2025",
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

// Plain-language overview of how high school tennis works. Links go to official sources.
export const rulesSections: { heading: string; intro?: string; points: string[] }[] = [
  {
    heading: "Flights: the 8 matchups that make up a team match",
    intro:
      "A high school team match isn't one game on one court. It's eight separate matches — called flights — played at the same time, and the team that wins the most flights wins.",
    points: [
      "4 singles flights — one player vs. one player. The team's best singles player plays \"No. 1 Singles,\" the next-best No. 2, on down to No. 4.",
      "4 doubles flights — two players vs. two players. The strongest pair is \"No. 1 Doubles,\" down to No. 4 Doubles.",
      "The coach ranks the lineup by ability, so No. 1 is the strongest. You only play the matching flight on the other team — Frankel's No. 1 singles plays their No. 1 singles, and so on.",
    ],
  },
  {
    heading: "Duals: how a head-to-head team match is won",
    intro:
      "When two schools play each other head-to-head, it's called a dual meet. The eight flights decide it.",
    points: [
      "Each flight is worth 1 point for whichever team wins that court — so there are 8 points up for grabs.",
      "The first team to win 5 of the 8 flights wins the dual. That's why final team scores look like 5–3, 6–2, or 8–0.",
      "A 4–4 result is a tie. In our season records the ties are the last number — a \"6-7-2\" season means 6 wins, 7 losses, 2 ties.",
    ],
  },
  {
    heading: "Tournaments & the road to the State Finals",
    intro:
      "Besides one-on-one duals, teams play tournaments where many schools compete at once — each flight plays its own bracket and earns points toward a team total, and the school with the most points wins. The MHSAA state playoffs work the same way.",
    points: [
      "Divisions: schools are grouped by enrollment so they face schools their own size. Frankel competes in Division 4, the smallest-schools division.",
      "Regionals come first. In 2026, Lower Peninsula boys tennis regionals are scheduled for Oct. 7, 8, 9 or 10. Each flight plays a bracket and earns points toward the team total.",
      "State Finals: every qualified flight plays its bracket, and the team with the most total points across all eight flights is the state champion. The 2026 Division 4 Finals are Oct. 21-22 at Midland Tennis Center.",
      "In 2025, all eight Frankel flights qualified for the Division 4 State Finals — a useful benchmark for what a complete postseason run looks like.",
    ],
  },
  {
    heading: "What's distinctive about Frankel & Michigan high school tennis",
    intro:
      "A few things that shape the Jaguars' season specifically:",
    points: [
      "In Michigan's Lower Peninsula, boys tennis is a fall sport — the season runs from August through the October State Finals.",
      "Even though Frankel is a small Jewish day school, the Jaguars play their league schedule in the Catholic League (CHSL), AA Division — facing programs like Jackson Lumen Christi, Warren De La Salle and Divine Child.",
      "Because Frankel observes Shabbat (Friday evening through Saturday) and the Jewish holidays, the team often gets less practice and match time than opponents. The MHSAA arranges scheduling each year so the Jaguars never have to choose between their faith and competing.",
      "Frankel's roster is usually smaller than many opponents, so lineup flexibility, doubles chemistry and steady player development matter all season.",
    ],
  },
];

export const rulesLinks = [
  { label: "MHSAA Boys Tennis (official)", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "MHSAA Results Archive", url: "https://www.mhsaa.com/sports/boys-tennis/results-archive" },
  { label: "USTA Rules of Tennis", url: "https://www.usta.com/en/home/improve/rules-and-regulations.html" },
];
