// =====================================================================
// PHOTOS — gallery images live in /public/photos.
// To add more: drop JPGs in public/photos and add entries here.
// (HEIC files from an iPhone need converting to JPG first.)
// =====================================================================

export type Photo = {
  src: string;
  caption?: string;
  // wide images look better spanning two columns
  wide?: boolean;
};

// A standout team photo reused on the home hero.
export const heroPhoto = "/photos/p01.jpg";

// The Larry Stark Hall of Fame plaque, reused on the About page.
export const plaquePhoto = "/photos/p09.jpg";

export const photos: Photo[] = [
  { src: "/photos/p01.jpg", caption: "The Jaguars on the court" },
  { src: "/photos/p11.jpg", caption: "Team photo" },
  { src: "/photos/p14.jpg", caption: "Jaguars boys tennis", wide: true },
  { src: "/photos/p03.jpg", caption: "Match day" },
  { src: "/photos/p06.jpg", caption: "Ready to play" },
  { src: "/photos/p07.jpg", caption: "Teammates" },
  { src: "/photos/p08.jpg", caption: "Doubles partners" },
  { src: "/photos/p10.jpg", caption: "Courtside" },
  { src: "/photos/p02.jpg", caption: "Before the match" },
  { src: "/photos/p04.jpg", caption: "On the road" },
  { src: "/photos/p13.jpg", caption: "Road trip to the tournament" },
  { src: "/photos/p05.jpg", caption: "Game day" },
  { src: "/photos/p12.jpg", caption: "Celebrating the seniors" },
  { src: "/photos/p09.jpg", caption: "Coach Larry Stark — Michigan Jewish Sports Hall of Fame (2006)" },
];
