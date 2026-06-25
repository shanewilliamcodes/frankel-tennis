// =====================================================================
// PHOTOS — gallery images live in /public/photos.
// To add more: drop JPGs in public/photos and add entries here.
// (HEIC files from an iPhone need converting to JPG first — and check
// orientation; some come in rotated.)
// =====================================================================

export type Photo = {
  src: string;
  width: number;
  height: number;
};

// A standout team photo reused on the home hero.
export const heroPhoto = "/photos/p01.jpg";

// The Larry Stark Hall of Fame plaque, reused on the About page.
export const plaquePhoto = "/photos/p09.jpg";

// The photos speak for themselves — no captions.
export const photos: Photo[] = [
  { src: "/photos/p01.jpg", width: 1600, height: 1200 },
  { src: "/photos/p14.jpg", width: 1600, height: 938 },
  { src: "/photos/p11.jpg", width: 1600, height: 1266 },
  { src: "/photos/p03.jpg", width: 1200, height: 1600 },
  { src: "/photos/p06.jpg", width: 1200, height: 1600 },
  { src: "/photos/p07.jpg", width: 1200, height: 1600 },
  { src: "/photos/p08.jpg", width: 1200, height: 1600 },
  { src: "/photos/p10.jpg", width: 1600, height: 1200 },
  { src: "/photos/p02.jpg", width: 1200, height: 1600 },
  { src: "/photos/p04.jpg", width: 1200, height: 1600 },
  { src: "/photos/p12.jpg", width: 1600, height: 1200 },
  { src: "/photos/p13.jpg", width: 1600, height: 1200 },
];
