/**
 * Build-time guardrails.
 *
 * Short on purpose. The predecessor project grew a 456-line audit because it
 * had 38 pages and seven page shapes; this has one page in three languages,
 * and only two rules here are load-bearing enough to stop a build.
 *
 *   1. TRADEMARK. The site shows other companies' marks to say which equipment
 *      is serviced. That is lawful while it never implies a relationship, so
 *      the words that would imply one are refused outright, and any page
 *      naming those marks must carry the independence statement.
 *
 *   2. LICENSING. Julio holds no Massachusetts Home Improvement Contractor
 *      registration. The site must never claim or imply one, in any language.
 *
 * Everything else here is a warning, printed and not fatal.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

/** Claims of a relationship with a brand that does not exist. */
const FORBIDDEN = [
  { pattern: /\bauthori[sz]ed\b/gi, why: 'implies an authorised-dealer relationship' },
  { pattern: /\bcertified\s+(installer|technician|dealer|partner)\b/gi, why: 'implies certification by a brand' },
  { pattern: /\bofficial\s+(installer|service|dealer|partner)\b/gi, why: 'implies official status' },
  { pattern: /\bfactory[-\s]trained\b/gi, why: 'implies training by the manufacturer' },
  // Licensing. Julio holds no HIC registration, in any language.
  { pattern: /\bHIC\b/g, why: 'references HIC registration' },
  { pattern: /licen[cs]ed\s+(and|&|y|e)\s+insured/gi, why: '"licensed and insured" claim' },
  { pattern: /\bfully\s+licen[cs]ed\b/gi, why: '"fully licensed" claim' },
  { pattern: /\b(we|i)\s+(are|am)\s+licen[cs]ed\b/gi, why: 'direct licensure claim' },
  { pattern: /\bcon\s+licencia\b/gi, why: 'licensure claim (es)' },
  { pattern: /\blicenciado\b/gi, why: 'licensure claim (es/pt)' },
];

/** Marks named on the site. Kept in step with src/data/brands.ts by hand — a
    short list that changes rarely, and importing TypeScript here is not worth
    a build step. */
const MARKS = [
  'NordicTrack', 'Sole', 'ProForm', 'Horizon', 'Concept2', 'WaterRower', 'Schwinn',
  'Peloton', 'Tonal', 'Echelon', 'Hydrow', 'Bowflex', 'REP Fitness', 'Rogue',
  'Titan', 'Body-Solid', 'Marcy', 'Life Fitness',
];

const failures = [];
const warnings = [];

function fail(route, message) {
  failures.push(`${route}: ${message}`);
}

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = await htmlFiles(dist);

if (files.length === 0) {
  console.error('\n  No HTML in dist/. Did astro build run?\n');
  process.exit(1);
}

const titles = new Map();

for (const file of files) {
  const route = '/' + relative(dist, file).split(sep).join('/');
  const html = await readFile(file, 'utf8');
  // Strip tags so a class name like "text-body" cannot trip a copy rule.
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' ');

  for (const rule of FORBIDDEN) {
    const hit = text.match(rule.pattern);
    if (hit) fail(route, `forbidden claim ${JSON.stringify(hit[0])} — ${rule.why}`);
  }

  // A page that names other people's marks must say it is independent.
  const namesMarks = MARKS.some((mark) => text.includes(mark));
  if (namesMarks && !html.includes('data-brand-disclaimer')) {
    fail(route, 'names third-party marks without the independence statement');
  }

  // One h1, and a title that is not shared with another route.
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(route, `${h1s.length} <h1> elements, expected exactly 1`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? '';
  if (!title) fail(route, 'no <title>');
  else if (titles.has(title)) fail(route, `duplicate <title>, shared with ${titles.get(title)}`);
  else titles.set(title, route);

  /*
   * Canonical and hreflang, checked together.
   *
   * These shipped broken once already: build.format 'file' puts the built
   * filename into the route pathname, so /pt rendered a canonical of
   * "/pt.html" and told Google its English alternate was "/es/pt.html".
   * Every URL was syntactically fine and every one of them was wrong, which
   * is exactly the kind of fault that survives a visual review.
   */
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
  if (!canonical) fail(route, 'no canonical link');
  if (/\.html?($|\?)/i.test(canonical)) {
    fail(route, `canonical carries a file extension: ${canonical}`);
  }

  // Every language must point at every other, or hreflang is ignored entirely.
  const alts = [...html.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
  if (alts.length < 4) fail(route, `${alts.length} hreflang alternates, expected 3 + x-default`);

  for (const [, lang, href] of alts) {
    if (/\.html?($|\?)/i.test(href)) {
      fail(route, `hreflang="${lang}" carries a file extension: ${href}`);
    }
  }

  // The page must appear in its own alternate set. A one-way hreflang set is
  // discarded, and a page pointing only at the others is exactly that.
  if (alts.length && !alts.some(([, , href]) => href === canonical)) {
    fail(route, `no self-referencing hreflang matching the canonical ${canonical}`);
  }

  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt=/.test(tag)) fail(route, `<img> without alt: ${tag.slice(0, 90)}`);
  }
}

/* ---- warnings ----------------------------------------------------------- */

const businessSrc = await readFile(join(root, 'src/data/business.ts'), 'utf8');
if (/confirmedByOwner:\s*false/.test(businessSrc)) {
  warnings.push(
    'Social proof (jobs, rating, review count) is still marked unconfirmed by Julio. ' +
      'It is published. Confirm it, then flip confirmedByOwner in src/data/business.ts.',
  );
}

if (!process.env.PUBLIC_BOOKING_URL) {
  warnings.push('PUBLIC_BOOKING_URL is unset — the booking section is showing its fallback.');
}
if (!process.env.PUBLIC_META_PIXEL_ID) {
  warnings.push('PUBLIC_META_PIXEL_ID is unset — no Meta pixel is emitted, so ads cannot optimise.');
}

/* ---- report ------------------------------------------------------------- */

console.log(`\n  Build check — ${files.length} pages\n`);

for (const warning of warnings) console.log(`  ! ${warning}`);
if (warnings.length) console.log('');

if (failures.length) {
  for (const failure of failures) console.error(`  x ${failure}`);
  console.error(`\n  ${failures.length} problem(s).\n`);
  process.exit(1);
}

console.log('  All checks passed.\n');
