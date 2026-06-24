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
export const rulesSections: { heading: string; points: string[] }[] = [
  {
    heading: "How a high school dual match works",
    points: [
      "A varsity dual is played across 8 flights: 4 singles (No. 1–4) and 4 doubles (No. 1–4).",
      "Each flight is worth 1 point. Win 5 of the 8 flights and you win the dual match.",
      "Lineups are ordered by ability — your strongest singles player is No. 1 singles, and so on.",
    ],
  },
  {
    heading: "Scoring within a match",
    points: [
      "Matches are best-of-three sets; most use a 10-point match tiebreak in place of a third set.",
      "A set is won at 6 games (win by two); at 6–6 a 7-point tiebreak decides the set.",
      "No-ad or regular scoring may be used depending on the event.",
    ],
  },
  {
    heading: "The road to the State Finals (MHSAA Division 4)",
    points: [
      "Teams are placed in divisions by enrollment — Frankel competes in Division 4 (smallest schools).",
      "Regionals come first: a team generally needs about 18 points to qualify for the State Finals.",
      "Flight winners and high finishers advance; the team title is decided by total points across all flights.",
      "Because Frankel honors Shabbat, the MHSAA makes scheduling accommodations each year so the Jaguars can compete.",
    ],
  },
];

export const rulesLinks = [
  { label: "MHSAA Boys Tennis (official)", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "MHSAA Tennis regulations & seeding", url: "https://www.mhsaa.com/sports/boys-tennis" },
  { label: "USTA Rules of Tennis", url: "https://www.usta.com/en/home/improve/rules-and-regulations.html" },
];
