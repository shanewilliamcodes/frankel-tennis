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
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group mb-4 block w-full break-inside-avoid rounded-lg border border-[var(--line)] bg-white p-1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--royal)]"
          >
            <span
              className="relative block overflow-hidden rounded-md bg-slate-100"
              style={{ aspectRatio: `${p.width} / ${p.height}` }}
            >
              <Image
                src={p.src}
                alt="Frankel Jaguars tennis"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                priority={i < 9}
              />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-4 text-white">
            <p className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/85">
              {open + 1} / {photos.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              className="rounded-full bg-white/10 px-3 py-1 text-2xl leading-none text-white/80 hover:bg-white/20 hover:text-white"
              onClick={close}
            >
              ×
            </button>
          </div>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 sm:left-6 rounded-full bg-white/10 px-3 text-4xl text-white/75 hover:bg-white/20 hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={photos[open].src}
                alt="Frankel Jaguars tennis"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </figure>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 sm:right-6 rounded-full bg-white/10 px-3 text-4xl text-white/75 hover:bg-white/20 hover:text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
