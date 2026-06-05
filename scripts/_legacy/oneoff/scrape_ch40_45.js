import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chapters = [
  { num: 40, url: 'https://witchculttranslation.com/2022/02/26/arc-7-chapter-40-natchuki-subawu/' },
  { num: 41, url: 'https://witchculttranslation.com/2022/02/28/arc-7-chapter-41-a-chat-over-tea/' },
  { num: 42, url: 'https://witchculttranslation.com/2022/03/05/arc-7-chapter-42-beast-of-ambition/' },
  { num: 43, url: 'https://witchculttranslation.com/2022/03/07/arc-7-chapter-43-hidden-behind-your-eyelids/' },
  { num: 44, url: 'https://witchculttranslation.com/2022/03/08/arc-7-chapter-44-shrinking-vision/' },
  { num: 45, url: 'https://witchculttranslation.com/2022/03/09/arc-7-chapter-45-konkon/' }
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
