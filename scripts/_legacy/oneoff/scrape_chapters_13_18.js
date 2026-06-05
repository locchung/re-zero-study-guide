import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: 13, url: 'https://witchculttranslation.com/2021/05/06/arc-7-chapter-13-as-a-mortal/' },
  { num: 14, url: 'https://witchculttranslation.com/2021/05/25/arc-7-chapter-14-unbridgeable-values/' },
  { num: 15, url: 'https://witchculttranslation.com/2021/06/13/arc-7-chapter-15-those-i-want-to-protect/' },
  { num: 16, url: 'https://witchculttranslation.com/2021/07/14/arc-7-chapter-16-the-situation-in-the-empire/' },
  { num: 17, url: 'https://witchculttranslation.com/2021/08/22/arc-7-chapter-17-looming-evil/' },
  { num: 18, url: 'https://witchculttranslation.com/2021/09/23/arc-7-chapter-18-battle-in-the-fortress-city-of-guaral/' }
];

const tempDir = path.join(__dirname, 'translation_temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

function cleanHtml(html) {
  return html
    .replace(/<[^>]+>/g, '') // Strip HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

async function scrapeChapter({ num, url }) {
  console.log(`Fetching Chapter ${num}: ${url}...`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch Chapter ${num}: ${res.statusText}`);
  }
  const html = await res.text();

  // Find the entry-content div
  const startIndex = html.indexOf('<div class="entry-content">');
  const endIndex = html.indexOf('</div><!-- .entry-content -->');
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Could not find entry-content for Chapter ${num}`);
  }

  const contentHtml = html.substring(startIndex, endIndex);

  // Extract all paragraphs
  const pMatches = contentHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const rawParagraphs = [];

  // Standard Header block for study guide compatibility
  rawParagraphs.push("※　※　※　※　※　※　※　※　※　※　※　※");
  rawParagraphs.push("Translated By :");
  rawParagraphs.push("Art Sources :");
  rawParagraphs.push("※　※　※　※　※　※　※　※　※　※　※　※");
  rawParagraphs.push("ALL RIGHTS BELONG TO TAPPEI NAGATSUKI, THE ORIGINAL AUTHOR OF RE:ZERO STARTING A LIFE IN A DIFFERENT WORLD FROM ZERO, THIS IS A TRANSLATION OF THE FREE JAPANESE WEB NOVEL INTO ENGLISH");
  rawParagraphs.push("JAPANESE WEB NOVEL SOURCE");
  rawParagraphs.push("※　※　※　※　※　※　※　※　※　※　※");

  let storyStarted = false;

  for (const p of pMatches) {
    const cleaned = cleanHtml(p);
    if (!cleaned) continue;

    // Skip the WordPress / Witch Cult Translation meta links/headers before the story starts
    if (!storyStarted) {
      if (cleaned.includes('※') || cleaned.includes('Translated By') || cleaned.includes('ALL RIGHTS BELONG') || cleaned.includes('JAPANESE WEB NOVEL')) {
        continue;
      }
      storyStarted = true;
    }

    // Skip sharing or WordPress side margins/meta at the very end
    if (cleaned.includes('Share this:') || cleaned.includes('Like this:') || cleaned.includes('Loading...')) {
      continue;
    }

    rawParagraphs.push(cleaned);
  }

  const finalData = rawParagraphs.map((para, index) => ({
    id: index + 1,
    en: para,
    vi: ""
  }));

  const outPath = path.join(tempDir, `arc7_ch${num}_raw.json`);
  fs.writeFileSync(outPath, JSON.stringify(finalData, null, 2), 'utf-8');
  console.log(`Saved ${finalData.length} paragraphs to ${outPath}`);
}

async function run() {
  for (const ch of chapters) {
    try {
      await scrapeChapter(ch);
    } catch (e) {
      console.error(`Error scraping chapter ${ch.num}:`, e);
    }
  }
}

run();
