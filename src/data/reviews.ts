import { z } from 'zod';

/**
 * Customer reviews, copied by hand from Julio's Thumbtack profile.
 *
 * WHY THIS IS NOT FETCHED. Thumbtack publishes no public reviews API, so there
 * is no supported way for this site to pull them. Scraping the profile would
 * breach their terms, would break the first time they change their markup, and
 * could not run here anyway — this is a static build with no server. Every
 * small service business that shows its platform reviews does it this way:
 * transcribe them, attribute them, and link back to the source so anyone can
 * check.
 *
 * HOW TO ADD ONE. Open the Thumbtack profile, copy the review text verbatim,
 * and record the reviewer's name exactly as it appears there (usually a first
 * name and an initial) plus the month it was left.
 *
 * WHAT MAY NEVER HAPPEN HERE. No review is written, paraphrased, shortened
 * into something punchier, or attributed to a name that did not leave it. A
 * fabricated review is a fake endorsement, and one is enough to cost him the
 * credibility the other 188 earned. An empty list renders labelled empty
 * cards, which is the honest state until the real text arrives.
 */

const reviewSchema = z.object({
  /** Exactly as shown on the profile. Usually "Maria S." — never invented. */
  author: z.string().min(2),
  /** Verbatim. Transcribe it; do not tidy it up. */
  text: z.string().min(20),
  /** Stars this reviewer gave, which is not always the profile average. */
  rating: z.number().min(1).max(5),
  /** ISO year-month, e.g. "2026-05". */
  date: z.string().regex(/^\d{4}-\d{2}$/),
  /** Optional: what the job actually was, when the review names it. */
  job: z.string().min(3).optional(),
});

export type Review = z.infer<typeof reviewSchema>;

/**
 * Transcribed from the Thumbtack profile on 2026-08-21, verbatim.
 *
 * Nine of the 189 reviews on the profile, chosen because every one of them is
 * about fitness equipment — the profile also carries furniture assembly, TV
 * mounting, play sets and handyman work, which is not what this page sells.
 * Ordered newest first.
 *
 * Each card was expanded before transcribing, so these are whole reviews and
 * not the truncated previews. Every rating below was counted off that
 * reviewer's own card; none is the 4.9 profile average. Typos, run-on
 * punctuation and Evelyn W.'s trailing colon are the reviewers' own and are
 * left exactly as they were written.
 *
 * `job` is the equipment type Thumbtack recorded against the booking, not a
 * paraphrase of the review. Kathy L.'s card carries no equipment type, so she
 * has none.
 *
 * Two are worth knowing about before they are moved or cut:
 *   - Don W. and Kim A. are the only two that describe the heavy-object
 *     problem the page is built around — one man moving something that looks
 *     like a two-man job, and a part carried up a flight of stairs.
 *   - Shawn M. says "the team". Julio works alone. It is the customer's own
 *     wording and stays as written; it is not a claim the site is making.
 */
const raw: unknown[] = [
  {
    author: 'Shawn M.',
    text: 'A Plus Assemblers did a phenomenal job assembling my Rogue rack! The team was professional, friendly, and clearly takes pride in their work. The quality of the assembly was excellent, and everything came out perfect. Great people, great service, and great quality. I highly recommend A Plus Assemblers!',
    rating: 5,
    date: '2026-08',
    job: 'Power tower',
  },
  {
    author: 'Kathy L.',
    text: 'Julio arrived on time, completed assembly of my bike & another item I added at the last minute. He was professional& efficient. I would hire him again.',
    rating: 5,
    date: '2026-08',
  },
  {
    author: 'Lisa D.',
    text: 'Julio arrived on time and assembled my bike perfectly. He was professional and friendly.',
    rating: 5,
    date: '2026-05',
    job: 'Exercise bike',
  },
  {
    author: 'Ellen D.',
    text: 'Julio was not only responsive and punctual, but he did a great job putting my treadmill together and explaining the functions once it was set up. His price was also unbeatable.\n\nI had contacted Julio on Sunday night around 10:30p and he was at my house the next morning at 10a.\n\nI was excited when he let me know the other services that he offers and will definitely use him going forward. 100% would recommend him to anyone. Thanks Julio!',
    rating: 5,
    date: '2025-03',
    job: 'Treadmill',
  },
  {
    author: 'Donna C.',
    text: 'I was incredibly impressed with the service I received from Julio. He was punctual, responsive, and did an excellent job assembling my treadmill. The price was unbeatable, and I couldn’t be happier with the results. I highly recommend his services to anyone in need of a reliable and affordable assembler. Thank you',
    rating: 5,
    date: '2024-09',
    job: 'Treadmill',
  },
  {
    author: 'Evelyn W.',
    text: 'Julio was very accommodating when asked to take off his shoes and picked up all trash from box equipment came in. The elliptical was assembled according to instructions and works beautifully:',
    rating: 5,
    date: '2024-05',
    job: 'Elliptical',
  },
  {
    author: 'Kayla S.',
    text: 'Julio was fantastic!! I love my spin bike. He was knowledgeable, friendly, and built the bike fast. Quality work. Will hire again soon!!',
    rating: 5,
    date: '2023-10',
    job: 'Exercise bike',
  },
  {
    author: 'Kim A.',
    text: "Julio was great. Very nice and helpful bringing a large part of my elliptical up stairs that I couldn't do. Quick and professional job. Highly recommend Julio.",
    rating: 5,
    date: '2021-04',
    job: 'Elliptical',
  },
  {
    author: 'Don W.',
    text: 'Julio did a great job assembling my new treadmill. I thought for sure it would take two people but he managed the process himself. He communicated his arrival time well and was very pleasant and professional. I would use Julio again.',
    rating: 5,
    date: '2021-01',
    job: 'Treadmill',
  },
];

export const reviews: Review[] = z.array(reviewSchema).parse(raw);

/** How many empty cards to draw while the list is empty. */
export const REVIEW_PLACEHOLDER_COUNT = 3;
