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
 * credibility the other 184 earned. An empty list renders labelled empty
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
 * Empty on purpose. Nothing has been transcribed yet.
 *
 * Paste real entries here and the carousel fills itself:
 *
 *   {
 *     author: 'Maria S.',
 *     text: 'He got a 300lb treadmill down to my basement...',
 *     rating: 5,
 *     date: '2026-05',
 *     job: 'Treadmill assembly',
 *   },
 */
const raw: unknown[] = [];

export const reviews: Review[] = z.array(reviewSchema).parse(raw);

/** How many empty cards to draw while the list is empty. */
export const REVIEW_PLACEHOLDER_COUNT = 3;
