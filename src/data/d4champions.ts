// =====================================================================
// MHSAA Lower Peninsula Division 4 Boys Tennis state champions.
// Source: MHSAA official "Past Champions" record (mhsaa.com).
// This is the division Frankel competes in — context for the history page.
// Newest first. Update each fall when the new champion is crowned.
// =====================================================================

export type D4Champion = {
  year: number;
  champion: string;
  runnerUp?: string;
  // True if this school also appears on Frankel's schedule / history.
  frankelFoe?: boolean;
};

export const d4Champions: D4Champion[] = [
  { year: 2025, champion: "Grosse Pointe Woods University Liggett", runnerUp: "Jackson Lumen Christi", frankelFoe: true },
  { year: 2024, champion: "Holland Christian", runnerUp: "Maple City Glen Lake" },
  { year: 2023, champion: "Ann Arbor Greenhills", runnerUp: "Grosse Pointe Woods University Liggett" },
  { year: 2022, champion: "Grosse Pointe Woods University Liggett", runnerUp: "Hudsonville Unity Christian" },
  { year: 2021, champion: "Traverse City St. Francis", runnerUp: "Grosse Pointe Woods University Liggett" },
  { year: 2020, champion: "Grosse Pointe Woods University Liggett", runnerUp: "Hudsonville Unity Christian" },
  { year: 2019, champion: "Allegan & Kalamazoo Hackett Catholic Prep (co-champions)" },
  { year: 2018, champion: "Ann Arbor Greenhills", runnerUp: "Traverse City St. Francis" },
  { year: 2017, champion: "Grosse Pointe Woods University Liggett", runnerUp: "Ann Arbor Greenhills" },
  { year: 2016, champion: "Grosse Pointe Woods University Liggett", runnerUp: "Ann Arbor Greenhills" },
  { year: 2015, champion: "Ann Arbor Greenhills", runnerUp: "Grosse Pointe Woods University Liggett" },
  { year: 2014, champion: "Ann Arbor Greenhills", runnerUp: "Grosse Pointe Woods University Liggett" },
  { year: 2013, champion: "Ann Arbor Greenhills", runnerUp: "Grand Rapids West Catholic" },
  { year: 2012, champion: "Ann Arbor Greenhills", runnerUp: "Comstock Park" },
  { year: 2011, champion: "Ann Arbor Greenhills", runnerUp: "Lansing Catholic & Kalamazoo Christian" },
  { year: 2010, champion: "Ann Arbor Greenhills", runnerUp: "Grosse Ile", frankelFoe: true },
];
