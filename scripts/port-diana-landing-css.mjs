import { execSync } from "node:child_process";
import fs from "node:fs";

const cssFiles = [
  "HeroLanding",
  "ScrollIconSequence",
  "MotionCategories",
  "FeaturedAnimations",
  "Showcase",
  "Footer",
];

for (const name of cssFiles) {
  const css = execSync(
    `git show origin/diana-landing-page:src/components/${name}.css`,
    { encoding: "utf8" },
  );
  fs.writeFileSync(`src/components/landing/${name}.css`, css, "utf8");
  console.log(`ported ${name}.css`);
}
