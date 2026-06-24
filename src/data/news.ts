export type NewsItem = {
  title: string;
  source: string;
  date: string; // human-readable
  url: string;
  summary: string;
  tag?: "Feature" | "Recap" | "Profile" | "School";
};

// Articles and press collected from around the web. Add new links here.
export const news: NewsItem[] = [
  {
    title: "Frankel Boys Tennis Scores Big with Regional Win and State Tournament Appearance",
    source: "The Detroit Jewish News",
    date: "Nov 8, 2024",
    url: "https://www.thejewishnews.com/sports/frankel-boys-tennis-scores-big-with-regional-win-and-state-tournament-appearance/article_5a811c90-9eab-11ef-853a-5786c6aadacb.html",
    summary:
      "The Jaguars captured their second regional championship and reached the Division 4 state tournament for the 11th time in 13 years under coach Larry Stark.",
    tag: "Recap",
  },
  {
    title: "Frankel Jaguars Tennis Team's Remarkable Success Story",
    source: "The Detroit Jewish News",
    date: "Nov 2, 2023",
    url: "https://www.thejewishnews.com/sports/frankel-jaguars-tennis-teams-remarkable-success-story/article_f7e5562e-7998-11ee-aa23-5f683e7c6a93.html",
    summary:
      "A school of 145 students finishes a best-ever 7th at the state finals with semifinalists in three flights, after winning the Catholic League.",
    tag: "Feature",
  },
  {
    title: "On the Cover: High Participation, High Impact — Inside Frankel's Sports Program",
    source: "The Detroit Jewish News",
    date: "Aug 14, 2024",
    url: "https://www.thejewishnews.com/culture/on-the-cover-high-participation-high-impact-inside-frankels-sports-program/article_fd8f9508-59a8-11ef-a96c-6377a9e34a6f.html",
    summary:
      "70% of Frankel students play a sport. A look at the culture, the Shabbat accommodations, and the championship tradition the tennis team is part of.",
    tag: "School",
  },
  {
    title: "Frankel Jewish Academy Boys Tennis Team's Success is Built On and Off the Court",
    source: "The Detroit Jewish News",
    date: "Nov 4, 2021",
    url: "https://www.thejewishnews.com/sports/frankel-jewish-academy-boys-tennis-team-s-success-is-built-on-and-off-the-court/article_da67636e-61d7-5b8d-bf7c-8eac31cbee7e.html",
    summary:
      "\"Coach Stark has been like a father to me.\" A profile of the team, its captains, and a fifth state-tournament appearance under Stark.",
    tag: "Profile",
  },
  {
    title: "Frankel Jewish Academy Boys Tennis Team Makes History",
    source: "C & G Newspapers",
    date: "2023",
    url: "https://www.candgnews.com/news/frankel-jewish-academy-boys-tennis-team-makes-history-3990",
    summary:
      "Coverage of the historic 2023 season — Catholic League title and a best-ever state-finals finish.",
    tag: "Recap",
  },
  {
    title: "Boys Tennis Team Qualifies for MHSAA State Finals",
    source: "Frankel Jewish Academy",
    date: "Oct 2021",
    url: "https://frankelja.org/2021/10/boys-tennis-team-qualifies-for-mhsaa-state-finals/",
    summary: "The school's own announcement of another state-finals qualification.",
    tag: "School",
  },
];
