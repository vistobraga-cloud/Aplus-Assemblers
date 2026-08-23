/**
 * The equipment brands Julio actually works on.
 *
 * TRADEMARK POSITION. Every name here is somebody else's registered mark, used
 * to identify the equipment serviced. That is nominative use, and it holds
 * while two things stay true. Nothing checks them automatically any more, so
 * they are on whoever edits this file:
 *
 *   1. The independence statement renders on every page that shows these.
 *   2. The words "authorized", "certified", "official" and "partner" appear
 *      nowhere on the site.
 *
 * Showing marks for equipment you service is ordinary practice in the repair
 * trade. What turns it into a problem is presenting them as endorsement, so
 * the wall is captioned as "equipment I service", never as partners, and the
 * disclaimer sits beside it rather than buried in the footer.
 *
 * LOGO FILES ARE OPTIONAL. `logo` names a file in src/assets/brands/. Until
 * those files exist the wall renders the name as a typographic chip, so the
 * section is complete from day one and improves when the artwork lands.
 * Sourcing note: take artwork from each brand's own press or media kit, which
 * is the version they publish for this purpose.
 */

export interface EquipmentBrand {
  name: string;
  /** Filename in src/assets/brands/, without extension. Optional. */
  logo?: string;
  category: 'cardio' | 'strength' | 'connected';
}

export const equipmentBrands: EquipmentBrand[] = [
  { name: 'NordicTrack', logo: 'nordictrack', category: 'cardio' },
  { name: 'Sole', category: 'cardio' },
  { name: 'ProForm', logo: 'proform', category: 'cardio' },
  { name: 'Horizon', logo: 'horizon', category: 'cardio' },
  { name: 'Concept2', category: 'cardio' },
  { name: 'WaterRower', category: 'cardio' },
  { name: 'Schwinn', logo: 'schwinn', category: 'cardio' },
  { name: 'Peloton', logo: 'peloton', category: 'connected' },
  { name: 'Tonal', logo: 'tonal', category: 'connected' },
  { name: 'Echelon', logo: 'echelon', category: 'connected' },
  { name: 'Hydrow', logo: 'hydrow', category: 'connected' },
  { name: 'Bowflex', category: 'strength' },
  { name: 'REP Fitness', category: 'strength' },
  { name: 'Rogue', logo: 'rogue', category: 'strength' },
  { name: 'Titan', category: 'strength' },
  { name: 'Body-Solid', category: 'strength' },
  { name: 'Marcy', logo: 'marcy', category: 'strength' },
  { name: 'Life Fitness', logo: 'life-fitness', category: 'strength' },
];

/** Marks named on the site, for the build check that guards the disclaimer. */
export const trademarkTokens = equipmentBrands.map((brand) => brand.name);
