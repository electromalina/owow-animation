"use client";

import { useRef } from "react";

import { HeroLanding } from "../HeroLanding.jsx";
import { ScrollIconSequence } from "../ScrollIconSequence.jsx";

/** Hedieh landing page: hero + scroll-driven about section (no animation lab). */
export function HomeLanding() {
  const headerAnchorRef = useRef(null);

  return (
    <>
      <HeroLanding headerAnchorRef={headerAnchorRef} />
      <ScrollIconSequence headerAnchorRef={headerAnchorRef} />
    </>
  );
}
