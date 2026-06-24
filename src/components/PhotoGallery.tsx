"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { Photo } from "@/data/photos";

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] ${
              p.wide ? "col-span-2" : ""
            }`}
          >
            <Image
              src={p.src}
              alt={p.caption ?? "Frankel Jaguars tennis photo"}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {p.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {p.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none"
            onClick={close}
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white text-4xl px-3"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[70vh]">
              <Image
                src={photos[open].src}
                alt={photos[open].caption ?? "Frankel Jaguars tennis photo"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {photos[open].caption && (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {photos[open].caption}
              </figcaption>
            )}
          </figure>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white text-4xl px-3"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
