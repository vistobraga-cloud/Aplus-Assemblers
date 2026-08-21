/**
 * The wall of finished work.
 *
 * Separate from shots.ts on purpose. Those nine are the page's fixed slots,
 * each one load-bearing for the section it sits in; this is an open-ended set
 * Julio adds to whenever a job photographs well. Nothing here changes the
 * layout when it grows.
 *
 * WHAT LIVES HERE AND WHAT DOES NOT. Filenames and layout ratios only. The
 * captions are copy and live in the language files, so a photo is described in
 * Spanish and Portuguese as well as English rather than carrying one English
 * string into all three pages. The pairing is positional, the same way the
 * stage photos pair with the stage list: a translator reordering a list should
 * never be able to put the wrong caption under a photo.
 *
 * WHEN A PHOTO ARRIVES. Drop it in src/assets/gallery/ named after `id` and it
 * replaces its slot with no other change. Until then the slot is a labelled
 * hole, which is the same bargain the rest of the page makes: a marked gap is
 * more useful than a clever substitute that hides it.
 *
 * TO ADD A TENTH. Append here, then append a caption at the same index in
 * en.ts, es.ts and pt.ts. The build fails until all three have it, which is
 * the point.
 *
 * `ratio` is what gives the wall its masonry shape while the photos are still
 * missing, and what the real photo is expected to be croppable to. Mixed on
 * purpose: a column of identical rectangles is a grid, not a wall.
 */

export interface GalleryShot {
  /** Filename in src/assets/gallery/, without extension. */
  id: string;
  /** Aspect ratio the slot reserves. */
  ratio: '4/3' | '3/4' | '1/1' | '16/9';
}

export const gallery: GalleryShot[] = [
  { id: 'treadmill-basement', ratio: '3/4' },
  { id: 'rack-assembled', ratio: '4/3' },
  { id: 'cable-detail', ratio: '1/1' },
  { id: 'stairs-carry', ratio: '3/4' },
  { id: 'hotel-room', ratio: '16/9' },
  { id: 'hardware-labelled', ratio: '1/1' },
  { id: 'belt-worn', ratio: '4/3' },
  { id: 'garage-gym', ratio: '3/4' },
];
