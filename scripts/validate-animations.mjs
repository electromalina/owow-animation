import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const animationsDir = path.join(root, "src", "animations");
const registryPath = path.join(animationsDir, "registry.ts");

const registrySource = fs.readFileSync(registryPath, "utf8");
const SKIP = new Set(["types", "shared", "createPlaceholderModule", "_template"]);
const slugImportRe = /from "@\/src\/animations\/([a-z0-9-]+)"/g;

const registered = new Set();
let match;
while ((match = slugImportRe.exec(registrySource)) !== null) {
  const name = match[1];
  if (!SKIP.has(name)) {
    registered.add(name);
  }
}

const folders = fs
  .readdirSync(animationsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !["_template", "shared"].includes(name));

const errors = [];

for (const folder of folders) {
  if (!registered.has(folder)) {
    errors.push(`Folder "${folder}" is not imported in registry.ts`);
  }

  const indexPath = path.join(animationsDir, folder, "index.ts");
  if (!fs.existsSync(indexPath)) {
    errors.push(`Missing index.ts in src/animations/${folder}/`);
  }

  const publicPreview = path.join(root, "public", "animations", folder, "preview.gif");
  const publicPreviewMp4 = path.join(root, "public", "animations", folder, "preview.mp4");
  if (!fs.existsSync(publicPreview) && !fs.existsSync(publicPreviewMp4)) {
    errors.push(
      `Missing public/animations/${folder}/preview.gif or preview.mp4`,
    );
  }
}

for (const slug of registered) {
  if (!folders.includes(slug)) {
    errors.push(`registry.ts imports "${slug}" but folder does not exist`);
  }
}

if (errors.length) {
  console.error("Animation validation failed:\n");
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

console.log(`Validated ${folders.length} animation module(s).`);
