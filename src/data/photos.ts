// =====================================================================
// PHOTOS — gallery images live in /public/photos.
// To add more: drop JPGs in public/photos and add entries here.
// (HEIC files from an iPhone need converting to JPG first — and check
// orientation; some come in rotated.)
// =====================================================================

export type Photo = {
  src: string;
  // wide images span two columns
  wide?: boolean;
};

// A standout team photo reused on the home hero.
export const heroPhoto = "/photos/p01.jpg";

// The Larry Stark Hall of Fame plaque, reused on the About page.
export const plaquePhoto = "/photos/p09.jpg";

// The photos speak for themselves — no captions.
export const photos: Photo[] = [
  { src: "/photos/p01.jpg" },
  { src: "/photos/p11.jpg" },
  { src: "/photos/p14.jpg", wide: true },
  { src: "/photos/p03.jpg" },
  { src: "/photos/p06.jpg" },
  { src: "/photos/p07.jpg" },
  { src: "/photos/p08.jpg" },
  { src: "/photos/p10.jpg" },
  { src: "/photos/p02.jpg" },
  { src: "/photos/p04.jpg" },
  { src: "/photos/p13.jpg" },
  { src: "/photos/p12.jpg" },
];
