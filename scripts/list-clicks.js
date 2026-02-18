import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clicksDir = path.join(__dirname, "..", "public", "clicks");
const outPath = path.join(__dirname, "..", "src", "data", "clicks.json");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);

const files = fs.readdirSync(clicksDir).filter((f) => {
  const ext = path.extname(f).toLowerCase();
  return IMAGE_EXT.has(ext);
});
files.sort();

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(files, null, 2));
console.log(`Wrote ${files.length} files to src/data/clicks.json`);
