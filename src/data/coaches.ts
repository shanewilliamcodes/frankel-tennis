export type Coach = {
  name: string;
  role: string;
  bio: string[];
  honors?: string[];
  photo?: string;
  photoCaption?: string;
  photoAspect?: "portrait" | "landscape";
};

export const coaches: Coach[] = [
  {
    name: "Larry Stark",
    role: "Head Coach",
    photo: "/photos/p09.jpg",
    photoCaption: "Larry Stark's Michigan Jewish Sports Hall of Fame plaque (inducted 2006).",
    photoAspect: "landscape",
    bio: [
      "Larry Stark took over the Frankel boys tennis program in 2014, and his arrival coincided almost exactly with the most successful stretch in school history — the Jaguars had never reached the state tournament before he became coach, and have since become a Division 4 fixture.",
      "Before Frankel, Stark coached boys tennis at West Bloomfield High School for eight years. A retired teacher, he has helped turn a small-school roster into a yearly Division 4 postseason factor by developing players, building doubles teams and keeping the program competitive against much larger schools.",
      "Born December 2, 1953, in Detroit, Stark earned city, regional and state honors playing varsity tennis at Berkley High School, where he went 30-1 his senior year and was voted team MVP. He played #1 singles and doubles at Michigan State University from 1972-76 and was co-captain his senior year.",
      "As a competitor he won seven major USTA Men's Open titles. In 2004 he was ranked #1 in USTA 50-plus Men's in Michigan and #2 in the Mid-Central Region. He was also an elite squash player — a three-time USSRA National Semi-Finalist, nationally ranked #3 in men's 35-plus and #2 in men's 40-plus, with 15 USSRA Michigan squash titles.",
    ],
    honors: [
      "Michigan Jewish Sports Hall of Fame — Inducted 2006",
      "MHSAA Regional Coach of the Year — 2022",
      "Led Frankel to its first-ever state tournament appearances and first Regional Championship (2022)",
      "Berkley High School: 30-1 senior season, team MVP",
      "Michigan State University #1 singles & doubles, co-captain (1972-76)",
      "Seven USTA Men's Open titles; 15 USSRA Michigan squash titles",
    ],
  },
  {
    name: "Monica Stark",
    role: "Assistant Coach",
    photo: "/coaches/monica-stark.jpg",
    photoCaption: "Assistant coach Monica Stark.",
    photoAspect: "portrait",
    bio: [
      "Monica Stark has been the boys tennis team's assistant coach for six-plus seasons, working alongside her husband, Larry. Together they have built a program defined by its family atmosphere and underdog grit.",
      "Because Frankel observes Shabbat and the Jewish holidays, the Jaguars often get less practice and match time than their opponents — so the staff makes the most of every session, and the results speak for themselves.",
    ],
  },
];
