import { z } from 'zod';

/**
 * Every fact about the business, in one place.
 *
 * Nothing here may be duplicated anywhere else in the repo — no phone number,
 * no radius, no opening hour as a string literal in a template. This rule
 * exists because the predecessor project had the phone number pasted into
 * seven JSON-LD blocks and three had quietly drifted apart.
 *
 * Language files carry COPY. They never carry facts: a translated page pulls
 * the number and the radius from here like the English one does, so a fact can
 * never be right in one language and stale in another.
 */

const phoneSchema = z
  .object({
    digits: z.string().regex(/^\d{10}$/, 'phone.digits must be 10 digits'),
    countryCode: z.string().regex(/^\d{1,3}$/),
  })
  .transform((p) => ({
    ...p,
    display: `(${p.digits.slice(0, 3)}) ${p.digits.slice(3, 6)}-${p.digits.slice(6)}`,
    e164: `+${p.countryCode}${p.digits}`,
    whatsappId: `${p.countryCode}${p.digits}`,
  }));

const countySchema = z.object({
  name: z.string().min(3),
  state: z.string().length(2),
  /** core — inside ~35mi · regular — 35 to 55mi · edge — partly outside */
  tier: z.enum(['core', 'regular', 'edge']),
  towns: z.array(z.string().min(2)).min(2),
});

const businessSchema = z.object({
  name: z.string().min(1),
  siteUrl: z.url().refine((u) => !u.endsWith('/'), 'siteUrl must not end in /'),

  phone: phoneSchema,
  email: z.email(),

  /** Service-area business. The street address is never published. */
  base: z.object({ locality: z.string().min(1), region: z.string().length(2) }),

  /**
   * The service area is a circle, not a list of states. Julio goes to the job
   * and the job is somewhere different every day; what bounds the business is
   * drive time from Fall River. Declaring three whole states would claim
   * Pittsfield and Greenwich, 160 and 140 miles out.
   */
  serviceRadius: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    miles: z.number().positive(),
  }),

  serviceCounties: z.array(countySchema).min(1),

  openingHours: z.object({
    days: z.array(z.string().min(3)).min(1),
    opens: z.string().regex(/^\d{2}:\d{2}$/),
    closes: z.string().regex(/^\d{2}:\d{2}$/),
  }),

  /** Slot length Julio configured in Google Calendar, in minutes. */
  slotMinutes: z.number().int().positive(),

  priceRange: z.enum(['$', '$$', '$$$', '$$$$']),
  paymentAccepted: z.array(z.string().min(1)).min(1),

  /**
   * Only what is confirmed. Julio holds no Massachusetts HIC registration and
   * the site must never imply one — scripts/check.mjs fails the build on any
   * claim it is not entitled to make.
   */
  credentials: z.object({ insured: z.literal(true), backgroundChecked: z.literal(true) }),

  /**
   * Third-party profile figures, with the date they were read. Numbers without
   * a date rot silently. NOT emitted as schema.org aggregateRating: they were
   * earned on Thumbtack, not here, and marking up someone else's reviews on
   * our own node is self-serving review markup.
   */
  socialProof: z.object({
    platform: z.string().min(1),
    jobsCompleted: z.number().int().positive(),
    rating: z.number().min(0).max(5),
    reviewCount: z.number().int().positive(),
    topProSince: z.number().int(),
    asOf: z.string().regex(/^\d{4}-\d{2}$/),
    confirmedByOwner: z.boolean(),
  }),

  operator: z.object({
    name: z.string().min(2),
    yearsInBusiness: z.number().int().positive(),
  }),
});

export type Business = z.infer<typeof businessSchema>;

export const business: Business = businessSchema.parse({
  name: 'Aplus Assemblers',
  siteUrl: 'https://aplusfitnessservice.com',

  phone: { digits: '7745598157', countryCode: '1' },
  email: 'hello@aplusassemblers.com',

  base: { locality: 'Fall River', region: 'MA' },

  serviceRadius: { lat: 41.7015, lng: -71.155, miles: 50 },

  serviceCounties: [
    {
      name: 'Bristol County',
      state: 'MA',
      tier: 'core',
      towns: ['Fall River', 'New Bedford', 'Taunton', 'Attleboro', 'Dartmouth', 'Somerset'],
    },
    {
      name: 'Providence County',
      state: 'RI',
      tier: 'core',
      towns: ['Providence', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket'],
    },
    {
      name: 'Bristol County',
      state: 'RI',
      tier: 'core',
      towns: ['Bristol', 'Warren', 'Barrington'],
    },
    {
      name: 'Newport County',
      state: 'RI',
      tier: 'core',
      towns: ['Newport', 'Middletown', 'Portsmouth', 'Tiverton'],
    },
    {
      name: 'Kent County',
      state: 'RI',
      tier: 'core',
      towns: ['Warwick', 'West Warwick', 'Coventry', 'East Greenwich'],
    },
    {
      name: 'Plymouth County',
      state: 'MA',
      tier: 'regular',
      towns: ['Brockton', 'Plymouth', 'Bridgewater', 'Middleborough', 'Wareham'],
    },
    {
      name: 'Norfolk County',
      state: 'MA',
      tier: 'regular',
      towns: ['Quincy', 'Braintree', 'Franklin', 'Foxborough', 'Canton'],
    },
    {
      name: 'Washington County',
      state: 'RI',
      tier: 'regular',
      towns: ['North Kingstown', 'South Kingstown', 'Narragansett', 'Westerly'],
    },
    {
      name: 'Suffolk County',
      state: 'MA',
      tier: 'regular',
      towns: ['Boston', 'Dorchester', 'South Boston', 'Charlestown'],
    },
    {
      name: 'Worcester County',
      state: 'MA',
      tier: 'edge',
      towns: ['Milford', 'Uxbridge', 'Northbridge', 'Grafton'],
    },
    {
      name: 'Barnstable County',
      state: 'MA',
      tier: 'edge',
      towns: ['Bourne', 'Sandwich', 'Falmouth', 'Mashpee'],
    },
    {
      name: 'New London County',
      state: 'CT',
      tier: 'edge',
      towns: ['New London', 'Norwich', 'Groton', 'Mystic'],
    },
  ],

  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '20:00',
  },

  // Julio's Google Calendar appointment schedule is configured in 2-hour
  // blocks. Stated here so the visible copy and the schema agree with it.
  slotMinutes: 120,

  priceRange: '$$',
  paymentAccepted: ['Cash', 'Check', 'Venmo', 'Zelle'],

  credentials: { insured: true, backgroundChecked: true },

  socialProof: {
    platform: 'Thumbtack',
    jobsCompleted: 325,
    rating: 4.9,
    reviewCount: 184,
    topProSince: 2019,
    asOf: '2026-08',
    // Read off the public profile and NOT yet confirmed by Julio. Flip this
    // once he confirms; see scripts/check.mjs, which warns while it is false.
    confirmedByOwner: false,
  },

  operator: { name: 'Julio Oliveira', yearsInBusiness: 10 },
});

/* -------------------------------------------------------------------------- */
/*  Derived                                                                    */
/* -------------------------------------------------------------------------- */

/** schema.org GeoCircle wants metres. 50 → 80467. */
export const serviceRadiusMeters = Math.round(business.serviceRadius.miles * 1609.344);

export const countiesByTier = {
  core: business.serviceCounties.filter((c) => c.tier === 'core'),
  regular: business.serviceCounties.filter((c) => c.tier === 'regular'),
  edge: business.serviceCounties.filter((c) => c.tier === 'edge'),
} as const;

/**
 * What the schema node is entitled to claim outright. The edge tier is
 * excluded by construction: those three are partly or wholly outside the
 * circle and are only honest with a caveat, and a machine-readable claim has
 * nowhere to put one.
 */
export const schemaCounties = [...countiesByTier.core, ...countiesByTier.regular];

/** "8am" / "8pm" — derived so visible copy cannot contradict the schema. */
function to12h(hhmm: string): string {
  const [h] = hhmm.split(':').map(Number);
  const hour = h ?? 0;
  const meridiem = hour >= 12 ? 'pm' : 'am';
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}${meridiem}`;
}

export const opensDisplay = to12h(business.openingHours.opens);
export const closesDisplay = to12h(business.openingHours.closes);
export const slotHours = business.slotMinutes / 60;
