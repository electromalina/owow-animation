import { useRef } from "react";
import { HeroLanding } from "./components/HeroLanding.jsx";
import { ScrollIconSequence } from "./components/ScrollIconSequence.jsx";

export default function App() {
  const headerAnchorRef = useRef(null);

  return (
    <>
      <HeroLanding headerAnchorRef={headerAnchorRef} />
      <ScrollIconSequence headerAnchorRef={headerAnchorRef} />
    </>
  );
}
