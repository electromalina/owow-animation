import { AnimationA, DEFAULT_ANIMATION_TIMING } from "./components/AnimationA.jsx";
import { PORTFOLIO_PROJECTS } from "./data/portfolioProjects.js";

export default function App() {
  // Local parameter testing: tweak `timing` here without editing AnimationA.
  return (
    <AnimationA
      projects={PORTFOLIO_PROJECTS}
      timing={{
        ...DEFAULT_ANIMATION_TIMING,
        followDuration: 0.5,
        stripDuration: 0.72,
        fadeDuration: 0.35,
      }}
      showPreviewLabel
    />
  );
}
