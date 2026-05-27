"use client";

import type { DemoProps } from "@/src/animations/types";

export function Demo({ platform }: DemoProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#222] bg-[#181818]">
      <div className="flex aspect-[16/10] items-center justify-center bg-[#111] text-white/50">
        Demo for {platform}
      </div>
    </div>
  );
}
