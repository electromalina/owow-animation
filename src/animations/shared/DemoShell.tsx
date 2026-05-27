"use client";

import type { ReactNode, RefObject } from "react";

import type { Platform } from "@/src/animations/types";

import "./demo-shell.css";

type DemoShellProps = {
  platform: Platform;
  engineLabel?: string;
  footerTags: [string, string];
  stageRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function DemoShell({
  platform,
  engineLabel,
  footerTags,
  stageRef,
  children,
}: DemoShellProps) {
  const isMobile = platform === "mobile";
  const engine =
    engineLabel ??
    (isMobile ? "Mobile · React Native" : "Web · React + GSAP");

  return (
    <div className="demo-shell">
      <div className="demo-shell__bar">
        <div className="demo-shell__bar-cluster">
          <span>Asset preview</span>
          <span className="demo-shell__bar-divider" aria-hidden>
            ·
          </span>
          <span>{isMobile ? "Device · 9 : 16" : "Stage · 16 : 10"}</span>
        </div>
        <div className="demo-shell__bar-cluster demo-shell__bar-cluster--end demo-shell__bar-cluster--engine">
          <span>{engine}</span>
          <span className="demo-shell__live">
            <span className="demo-shell__live-dot" aria-hidden />
            Live
          </span>
        </div>
      </div>

      <div
        className={`demo-shell__stage-outer ${isMobile ? "demo-shell__stage-outer--device" : ""}`}
      >
        <div
          ref={stageRef}
          className={`demo-shell__stage ${isMobile ? "demo-shell__stage--device" : "demo-shell__stage--wide"}`}
        >
          {children}
        </div>
      </div>

      <div className="demo-shell__bar demo-shell__bar--footer">
        <div className="demo-shell__bar-cluster">
          <span>{footerTags[0]}</span>
          <span className="demo-shell__bar-divider" aria-hidden>
            ·
          </span>
          <span>{footerTags[1]}</span>
        </div>
      </div>
    </div>
  );
}
