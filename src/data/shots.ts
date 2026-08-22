/**
 * The photography this page is waiting on.
 *
 * One entry per slot. The page renders these as visible, labelled holes rather
 * than designing around the gap — an earlier version quietly removed the
 * photo-shaped spaces and turned into a wall of text that looked finished and
 * was not. A marked hole tells three people three things at once: the client
 * sees where the photo lands, Julio sees what to shoot, and whoever swaps the
 * file in knows the crop it has to survive.
 *
 * When a photo arrives: drop it in src/assets/photos/ named after `id`, and
 * the slot becomes the picture with no layout change. `ratio` is the contract
 * that makes that true.
 */

export interface Shot {
  /** Filename in src/assets/photos/, and the slot's stable reference. */
  id: string;
  /** What to photograph. This is the brief, written for Julio. */
  label: string;
  /** Aspect ratio the layout reserves. The photo must be croppable to it. */
  ratio: '16/9' | '4/3' | '3/4' | '1/1';
  /** The detail that makes the shot useful rather than decorative. */
  note?: string;
}

export const shots = {
  hero: {
    id: 'hero',
    label: 'Julio mid-build on a treadmill or rack, in a real home',
    ratio: '4/3',
    note: 'His face and his hands both visible. This is the single most important photo on the page.',
  },
  consulting: {
    id: 'consulting',
    label: 'Tape measure against a doorway or stairwell',
    ratio: '1/1',
    note: 'The measuring, not the machine. This is the step before anything is bought.',
  },
  installation: {
    id: 'installation',
    label: 'The manual, the hardware and the tools laid out before anything is bolted',
    ratio: '1/1',
    note: 'The photograph that arrived is the bench before the build, not the machine coming off the pallet. It says the same thing: this is a job with a method.',
  },
  maintenance: {
    id: 'maintenance',
    label: 'Hands on a belt, cable or bearing, close up',
    ratio: '1/1',
    note: 'Tight crop. This is the one that says "he knows the machine", not just "he builds it".',
  },
  repair: {
    id: 'repair',
    label: 'A worn part next to its replacement',
    ratio: '1/1',
    note: 'Frayed cable, worn belt, stripped bolt. The evidence sells the service.',
  },
  moving: {
    id: 'moving',
    label: 'Hardware sorted and grouped on the bench, ready to be bagged',
    ratio: '1/1',
    note: 'The sorting is the point. It is what separates him from two guys and a van.',
  },
  curb: {
    id: 'curb',
    label: 'Crate on a pallet at the curb, before it moves',
    ratio: '16/9',
    note: 'Ideally with a staircase behind it. This is the problem the whole page is about.',
  },
  commercial: {
    id: 'commercial',
    label: 'A gym, hotel or building fitness room he has worked in',
    ratio: '16/9',
    note: 'Needed for the business section to be believable. Ask permission from the venue.',
  },
  portrait: {
    id: 'portrait',
    label: 'Julio with his tools, looking at the camera',
    ratio: '3/4',
    note: 'Plain background, daylight. Goes in the ad itself as much as on the page.',
  },
} as const satisfies Record<string, Shot>;

export type ShotId = keyof typeof shots;
