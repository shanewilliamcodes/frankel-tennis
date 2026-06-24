// =====================================================================
// Core team & school info. Edit anything here to update the whole site.
// =====================================================================

export const team = {
  schoolName: "Frankel Jewish Academy",
  shortName: "Frankel Jaguars",
  programName: "Frankel Jewish Academy Boys Tennis",
  mascot: "Jaguars",
  colors: "Blue & White",
  division: "MHSAA Division 4",
  league: "Catholic League",
  address: {
    street: "6600 West Maple Rd.",
    city: "West Bloomfield",
    state: "MI",
    zip: "48322",
  },
  schoolWebsite: "https://frankelja.org/",
  athleticsWebsite: "https://www.frankelathletics.com/",
  instagram: "https://www.instagram.com/fjatennis/",
  instagramHandle: "@fjatennis",
  homeCourts: "Drake Sports Park",
  // A short tagline used in the hero and page headers.
  tagline: "Small school. Mighty program.",
  // One-paragraph elevator pitch used on the home page.
  intro:
    "For more than a decade, the Frankel Jewish Academy Jaguars have been one of the most remarkable stories in Michigan high school tennis — a school of roughly 145 students that has reached the MHSAA Division 4 State Finals 11 times in 13 years, all while honoring Shabbat and the Jewish holidays.",
} as const;

// Quick-hit program facts shown as stat cards on the home page.
export const programStats: { label: string; value: string }[] = [
  { label: "State Finals appearances", value: "11" },
  { label: "Regional championships", value: "2" },
  { label: "Best state finish", value: "7th (2023)" },
  { label: "Enrollment", value: "~145" },
];
