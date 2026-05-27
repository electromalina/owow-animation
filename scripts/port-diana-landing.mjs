import { execSync } from "node:child_process";
import fs from "node:fs";

const names = [
  "Showcase",
  "Footer",
  "MotionCategories",
  "ScrollIconSequence",
];

for (const name of names) {
  let c = execSync(
    `git show origin/diana-landing-page:src/components/${name}.jsx`,
    { encoding: "utf8" },
  );
  if (!c.startsWith('"use client"')) {
    c = `"use client";\n\n${c}`;
  }
  c = c.replaceAll('from "../hooks/', 'from "@/src/hooks/landing/');
  c = c.replaceAll('from "../utils/', 'from "@/src/lib/landing/');
  c = c.replaceAll('import silverIcon from "../assets/silver.svg";\n', "");
  c = c.replaceAll('import "./', 'import "@/src/components/landing/');
  c = c.replaceAll(
    /import "@\/src\/components\/landing\/([A-Za-z]+)\.css"/g,
    'import "@/src/components/landing/$1.css"',
  );
  c = c.replaceAll(/\bsilverIcon\b/g, '"/landing/silver.svg"');
  if (name === "Footer") {
    if (!c.includes('from "next/link"')) {
      c = c.replace(
        /^"use client";\n\n/,
        '"use client";\n\nimport Link from "next/link";\n\n',
      );
    }
    c = c.replaceAll('href="#library"', 'href="/library"');
    c = c.replaceAll("<a ", "<Link ");
    c = c.replaceAll("</a>", "</Link>");
  }
  if (name === "Showcase") {
    c = c.replaceAll("ÔåÉ", "←").replaceAll("ÔåÆ", "→");
    c = c.replaceAll("showcase-preview.mp4", "showcase-preview.webm");
  }
  fs.writeFileSync(`src/components/landing/${name}.jsx`, c, "utf8");
  console.log(`ported ${name}.jsx`);
}
