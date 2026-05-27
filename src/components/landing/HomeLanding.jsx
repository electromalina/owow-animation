"use client";

import { useRef } from "react";

import { FeaturedAnimations } from "@/src/components/landing/FeaturedAnimations.jsx";
import { Footer } from "@/src/components/landing/Footer.jsx";
import { HeroLanding } from "@/src/components/landing/HeroLanding.jsx";
import { MotionCategories } from "@/src/components/landing/MotionCategories.jsx";
import { ScrollIconSequence } from "@/src/components/landing/ScrollIconSequence.jsx";
import { Showcase } from "@/src/components/landing/Showcase.jsx";

import "@/src/components/landing/landing-shared.css";

export function HomeLanding() {
  const headerAnchorRef = useRef(null);

  return (
    <main className="home-landing">
      <HeroLanding headerAnchorRef={headerAnchorRef} />
      <ScrollIconSequence headerAnchorRef={headerAnchorRef} />
      <MotionCategories />
      <FeaturedAnimations />
      <Showcase />
      <Footer />
    </main>
  );
}
