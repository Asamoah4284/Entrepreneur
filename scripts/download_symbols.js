/* global Buffer */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYMBOLS = [
  { slug: "abe-dua", filename: "File:Abe_dua.svg" },
  { slug: "fawohodie", filename: "File:Fawohodie.png" },
  { slug: "funtunfunefu-denkyemfunefu", filename: "File:Funtunfunefu_Denkyemfunefu.svg" },
  { slug: "gye-nyame", filename: "File:Gye_Nyame_(Adinkra_Symbol).svg" },
  { slug: "nea-onnim-no-sua-a-ohu", filename: "File:Nea_onnim_no_sua_a_ohu.svg" },
  { slug: "sankofa", filename: "File:Sankofa_bird_symbol.svg" }
];

const outputDir = path.join(__dirname, "..", "public", "symbols");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchRawUrl(filename) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
  
  const res = await fetch(url, {
    headers: {
      "User-Agent": "CultureIsMyBrand/1.0 (contact@cultureismybrand.com) Javascript/Fetch"
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch metadata for ${filename}: ${res.statusText}`);
  }
  
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  
  if (pageId === "-1") {
    throw new Error(`File not found: ${filename}`);
  }
  
  return pages[pageId].imageinfo[0].url;
}

async function downloadFile(url, outputPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.statusText}`);
  }
  
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(buffer));
  console.log(`Successfully downloaded: ${path.basename(outputPath)}`);
}

async function main() {
  console.log("Starting Adinkra symbol downloads...");
  for (const sym of SYMBOLS) {
    try {
      console.log(`Resolving URL for ${sym.slug}...`);
      const rawUrl = await fetchRawUrl(sym.filename);
      const ext = path.extname(new URL(rawUrl).pathname) || ".svg";
      console.log(`Downloading ${sym.slug} from ${rawUrl}...`);
      const outputPath = path.join(outputDir, `${sym.slug}${ext}`);
      await downloadFile(rawUrl, outputPath);
    } catch (err) {
      console.error(`Error processing ${sym.slug}:`, err.message);
    }
  }
  console.log("Finished download processes.");
}

main();
