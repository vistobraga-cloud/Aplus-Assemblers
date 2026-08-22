/**
 * The wall of finished work.
 *
 * Separate from shots.ts on purpose. Those are the page's fixed slots, each
 * one load-bearing for the section it sits in; this is an open-ended set Julio
 * adds to whenever a job photographs well. Nothing here changes the layout
 * when it grows.
 *
 * WHAT LIVES HERE AND WHAT DOES NOT. Filenames and layout ratios only. The
 * captions are copy and live in the language files, so a photo is described in
 * Spanish and Portuguese as well as English rather than carrying one English
 * string into all three pages. The pairing is positional: a translator
 * reordering a list should never be able to put the wrong caption under a
 * photo.
 *
 * THE IDS DESCRIBE THE PHOTOGRAPH, NOT A BRIEF. They used to be a shooting
 * list written before any photo existed — `stairs-carry`, `belt-worn`,
 * `hotel-room` — and the pictures that arrived were not those. An id that
 * promises a worn belt over a photo of a rack is a small lie that outlives
 * whoever told it, so the ids were renamed to what is actually in the frame.
 *
 * RATIOS FOLLOW THE CAMERA. Julio shoots on a Galaxy Z Fold, whose sensor is
 * 2.11:1, so nearly everything arrives either very tall or very wide. Cropping
 * those to 1/1 threw away half the picture. 2/3 and 3/4 keep the vertical
 * framing he actually shoots in, and the one wide photo stays wide.
 *
 * TO ADD ONE. Append here, drop the file in src/assets/gallery/ named after
 * the id, then append a caption at the same index in en.ts, es.ts and pt.ts.
 * The build fails until all three have it, which is the point.
 */

export interface GalleryShot {
  /** Filename in src/assets/gallery/, without extension. */
  id: string;
  /** Aspect ratio the slot reserves. */
  ratio: '4/3' | '3/4' | '2/3' | '1/1' | '16/9';
}

export const gallery: GalleryShot[] = [
  { id: 'home-gym-led', ratio: '2/3' },
  { id: 'smith-machine', ratio: '3/4' },
  { id: 'cable-crossover', ratio: '2/3' },
  { id: 'pilates-reformer', ratio: '3/4' },
  { id: 'parts-laid-out', ratio: '16/9' },
  { id: 'treadmill-basement', ratio: '2/3' },
  { id: 'rack-basement', ratio: '3/4' },
  { id: 'air-bike-garage', ratio: '2/3' },
];
