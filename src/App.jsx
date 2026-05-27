import { useRef } from "react";
import { HeroLanding } from "./components/HeroLanding.jsx";
import { ScrollIconSequence } from "./components/ScrollIconSequence.jsx";
import { MotionCategories } from "./components/MotionCategories.jsx";
import { FeaturedAnimations } from "./components/FeaturedAnimations.jsx";
import { Showcase } from "./components/Showcase.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const headerAnchorRef = useRef(null);

  return (
    <>
      <HeroLanding headerAnchorRef={headerAnchorRef} />
      <ScrollIconSequence headerAnchorRef={headerAnchorRef} />
      <MotionCategories />
      <FeaturedAnimations />
      <Showcase />
      <Footer />
    </>
  );
}
