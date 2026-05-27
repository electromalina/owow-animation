"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";

import type { Animation } from "@/src/animations/registry";

export function AnimationCard({ animation }: { animation: Animation }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewSrc = animation.videoSrc ?? animation.previewSrc;

  const playPreview = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.preload = "auto";
    video.play().catch(() => {});
  }, []);

  const pausePreview = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  return (
    <Link
      href={`/library/${animation.slug}`}
      className="animation-card group relative block aspect-[16/10] w-full overflow-hidden rounded-[4.96px] border border-white/10"
      aria-label={`${animation.title}, view animation details`}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
    >
      <div className="absolute inset-0 bg-[#141414]" />

      {previewSrc ? (
        <video
          ref={videoRef}
          src={previewSrc}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          tabIndex={-1}
          aria-hidden
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 p-5">
        <p className="animation-card__title text-2xl font-normal tracking-tight text-white">
          {animation.title}
        </p>
        <div className="flex flex-wrap gap-2">
          {(animation.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="rounded-[3.38px] bg-[#222222] px-3 py-1 text-xs text-[#D0D2CC]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
