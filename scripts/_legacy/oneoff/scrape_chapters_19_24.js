import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: 19, url: 'https://witchculttranslation.com/2021/10/19/arc-7-chapter-19-a-vexing-reunion/' },
  { num: 20, url: 'https://witchculttranslation.com/2021/12/03/arc-7-chapter-20-emperor-merchant-natsuki-subaru/' },
  { num: 21, url: 'https://witchculttranslation.com/2022/01/17/arc-7-chapter-21-zikr-osman/' },
  { num: 22, url: 'https://witchculttranslation.com/2022/01/17/arc-7-chapter-22-the-bloodless-siege-plan/' },
  { num: 23, url: 'https://witchculttranslation.com/2022/01/17/arc-7-chapter-23-musician-natsumi-schwartz/' },
  { num: 24, url: 'https://witchculttranslation.com/2022/01/17/arc-7-chapter-24-arrogance/' }
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
