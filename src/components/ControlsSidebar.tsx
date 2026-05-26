"use client";

import type { Animation, AnimationState } from "@/src/data/animations";

export type ControlsSidebarProps = {
  animation: Animation;
  state: AnimationState;
  onParamChange: (key: string, value: number) => void;
  onPlatformChange: (platform: "web" | "mobile") => void;
  onReset: () => void;
};

export function ControlsSidebar({
  animation,
}: ControlsSidebarProps) {
  return (
    <aside className="xl:sticky xl:top-[92px] self-start">
      <div className="flex min-h-[640px] max-h-[calc(100vh-128px)] flex-col overflow-hidden rounded-lg border border-[#222] bg-[#181818]">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50">
            Controls
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/30">
            {animation.title}
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/20">
            — Nikita&apos;s slot —
          </p>
        </div>
      </div>
    </aside>
  );
}
