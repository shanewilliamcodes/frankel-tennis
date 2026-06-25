export type Coach = {
  name: string;
  role: string;
  credentials?: string[];
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
    credentials: [
      "USPTA Certified Teaching Professional",
      "#1 singles and #1 doubles, Michigan State University men's varsity tennis",
      "USTA nationally ranked player as a junior, adult and senior",
      "West Bloomfield High School physical education teacher, 10 years",
      "Winner of 7 USTA men's tournaments and 4 USTA senior tournaments",
    ],
    bio: [
      "Larry Stark took over the Frankel boys tennis program in 2014, and his arrival coincided almost exactly with the most successful stretch in school history — the Jaguars had never reached the state tournament before he became coach, and have since become a Division 4 fixture.",
      "Before Frankel, Stark coached boys tennis at West Bloomfield High School for eight years after teaching physical education there for a decade. At Frankel, he has helped turn a small-school roster into a yearly Division 4 postseason factor by developing players, building doubles teams and keeping the program competitive against much larger schools.",
      "Born December 2, 1953, in Detroit, Stark earned city, regional and state honors playing varsity tennis at Berkley High School, where he went 30-1 his senior year and was voted team MVP. He played #1 singles and doubles at Michigan State University from 1972-76 and was co-captain his senior year.",
      "As a competitor he won seven USTA men's tournaments and four USTA senior tournaments. In 2004 he was ranked #1 in USTA 50-plus men's in Michigan and #2 in the Mid-Central Region. He was also an elite squash player — a three-time USSRA National Semi-Finalist, nationally ranked #3 in men's 35-plus and #2 in men's 40-plus, with 15 USSRA Michigan squash titles.",
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
    credentials: [
      "USPTA Certified Professional",
      "Former high school varsity tennis player",
      "Certified group fitness instructor",
      "Certified aqua instructor",
      "Certified spin instructor",
      "Strength and conditioning coach",
    ],
    bio: [
      "Monica Stark has been the boys tennis team's assistant coach for six-plus seasons, working alongside her husband, Larry. A USPTA Certified Professional and former high school varsity player, she brings a coach's eye for technique and a trainer's understanding of fitness, movement and preparation.",
      "Her background as a certified group fitness, aqua and spin instructor — plus her work as a strength and conditioning coach — gives the program an important layer beyond match strategy. She helps players build the stamina, footwork and confidence needed to compete through long practices, tight duals and tournament days.",
      "Because Frankel observes Shabbat and the Jewish holidays, the Jaguars often get less practice and match time than their opponents. The coaching staff has to make every session count, and Monica's ability to blend instruction, conditioning and encouragement is a major part of that day-to-day development.",
    ],
  },
];
