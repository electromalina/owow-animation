"use client";

import type { DemoProps } from "@/src/animations/types";

export function PlaceholderDemo({ platform }: DemoProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#222] bg-[#181818]">
      <div className="flex aspect-[16/10] items-center justify-center bg-[#111] font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50">
        Preview coming soon · {platform}
      </div>
    </div>
  );
}
