"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import type { Animation } from "@/src/data/animations";

export function AnimationCard({ animation }: { animation: Animation }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  return (
    <div
      className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[4.96px] border border-white/10"
      onClick={() => router.push(`/library/${animation.slug}`)}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="absolute inset-0 bg-[#141414]" />

      {animation.videoSrc ? (
        <video
          ref={videoRef}
          src={animation.videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 p-5">
        <h2 className="text-2xl font-normal tracking-tight text-white">
          {animation.title}
        </h2>
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
    </div>
  );
}
