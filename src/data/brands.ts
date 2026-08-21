/**
 * The equipment brands Julio actually works on.
 *
 * TRADEMARK POSITION. Every name here is somebody else's registered mark, used
 * to identify the equipment serviced. That is nominative use, and it holds
 * while two things stay true — both of which scripts/check.mjs enforces rather
 * than trusting anyone to remember:
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
  { name: 'NordicTrack', category: 'cardio' },
  { name: 'Sole', category: 'cardio' },
  { name: 'ProForm', category: 'cardio' },
  { name: 'Horizon', category: 'cardio' },
  { name: 'Concept2', category: 'cardio' },
  { name: 'WaterRower', category: 'cardio' },
  { name: 'Schwinn', category: 'cardio' },
  { name: 'Peloton', category: 'connected' },
  { name: 'Tonal', category: 'connected' },
  { name: 'Echelon', category: 'connected' },
  { name: 'Hydrow', category: 'connected' },
  { name: 'Bowflex', category: 'strength' },
  { name: 'REP Fitness', category: 'strength' },
  { name: 'Rogue', category: 'strength' },
  { name: 'Titan', category: 'strength' },
  { name: 'Body-Solid', category: 'strength' },
  { name: 'Marcy', category: 'strength' },
  { name: 'Life Fitness', category: 'strength' },
];

/** Marks named on the site, for the build check that guards the disclaimer. */
export const trademarkTokens = equipmentBrands.map((brand) => brand.name);
