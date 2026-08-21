/**
 * English copy. This file is the source of truth for the shape of every other
 * language: `Dict` is derived from it, so `es.ts` and `pt.ts` are type errors
 * until every key exists. A missing translation fails the build rather than
 * shipping a page that is half English.
 *
 * FACTS DO NOT LIVE HERE. No phone number, no radius, no opening hour, no
 * review count — those come from business.ts and are interpolated at render.
 * A fact in a copy file is a fact that can be right in one language and stale
 * in another.
 */
export const en = {
  locale: 'en',
  htmlLang: 'en-US',
  label: 'English',

  meta: {
    title: 'Gym Equipment Installation, Service & Repair | Aplus',
    description:
      'Treadmills, home gyms and commercial floors: installed, serviced, repaired and moved across a 50-mile radius. Ten years, one person, every job.',
  },

  nav: {
    book: 'Book a slot',
    call: 'Call',
    skipToContent: 'Skip to content',
    language: 'Language',
    theme: 'Switch theme',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
  },

  hero: {
    eyebrow: ['Homes and businesses', 'Within {radius} of {base}', '{years} years'],
    headingLead: 'Gym equipment installed, serviced and repaired',
    headingAccent: 'and moved when you move.',
    primary: 'Book a slot',
    secondary: 'WhatsApp a photo',
    call: 'Call {phone}',
    proofTitle: 'The record so far',
  },

  /**
   * The kit strip under the hero: equipment types in plain text.
   *
   * This is the answer to "does he touch mine" that a logo wall cannot give —
   * somebody owns an off-brand elliptical and needs to see the word
   * elliptical. It is also the most readable thing on the page for a search
   * engine, which reads text and not artwork.
   */
  kit: [
    'Treadmills',
    'Ellipticals',
    'Home gyms',
    'Power racks',
    'Exercise bikes',
    'Rowers',
    'Functional trainers',
    'Cable machines',
    'Spin bikes',
    'Weight benches',
    'Squat racks',
    'Smith machines',
    'Recumbent bikes',
    'Stair climbers',
  ],

  proof: {
    jobs: 'jobs completed',
    rating: 'from {count} reviews',
    years: 'in business',
    topPro: 'since {year}',
    source: 'Ratings and job count from {platform}. Background checked and insured.',
  },

  reviews: {
    eyebrow: 'Reviews',
    heading: 'What people wrote afterwards',
    body: 'Every one of these was left on {platform} by someone who paid for the work. They are transcribed here word for word. Read them at the source if you would rather.',
    readOn: 'Read all {count} on {platform}',
    empty: 'Review goes here, transcribed from the profile, with the name and month as written',
    previous: 'Previous reviews',
    next: 'More reviews',
  },

  lifecycle: {
    eyebrow: 'What I do',
    heading: 'From the crate to the next house',
    body: 'Five things, but really one thing: the machine works, and it keeps working. Most people meet me at step two and call me back at step three.',
    stages: [
      {
        key: 'consulting',
        name: 'Consulting',
        title: 'Before you buy it',
        body: 'Will it fit through the door, up the stairs, into that ceiling height. Whether the floor can take it, which matters more in a basement or over a garage than people expect. Ten years of watching which machines come back is worth a phone call before you spend four thousand dollars.',
      },
      {
        key: 'installation',
        name: 'Installation',
        title: 'When it arrives',
        body: 'Off the pallet, into the room it belongs in, built to the manufacturer torque specs. Levelled against the floor rather than against its own frame. That difference is why a new treadmill wears its belt on one side. Firmware and calibration run, tested under load, packaging leaves with me.',
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        title: 'While it runs',
        body: 'Belt tension and tracking, deck lubrication, cable inspection, bearing and pivot service, hardware re-torque. Equipment that gets looked at twice a year does not become the repair in the next section. For businesses this is a scheduled visit, not a phone call after something fails.',
      },
      {
        key: 'repair',
        name: 'Repair',
        title: 'When it stops',
        body: 'Frayed or jumped cables, worn belts and decks, consoles that will not wake, pedals and cranks cross-threaded by whoever built it first, racks that bind when you re-pin the safeties. I will tell you honestly when a part costs more than the machine is worth.',
      },
      {
        key: 'moving',
        name: 'Moving',
        title: 'When it has to go',
        body: 'Dismantled, hardware bagged and labelled by assembly, parts wrapped, then rebuilt at the other end so it works rather than merely arriving. This is the job people improvise and regret. A home gym taken apart without labels is a home gym that gets replaced.',
      },
    ],
  },

  /**
   * The wall of finished work. Captions pair by position with the list in
   * data/gallery.ts, so do not reorder one without the other.
   */
  gallery: {
    eyebrow: 'The work',
    heading: 'Jobs that photograph well',
    body: 'Not a portfolio so much as a record. Every one of these is a machine that was in pieces on somebody’s floor a few hours earlier.',
    empty: 'Photo goes here',
    items: [
      'A treadmill carried down to a finished basement',
      'A power rack built and levelled against the floor',
      'Cable and pulley after a service',
      'A staircase that decided how the machine went up',
      'A hotel fitness room, serviced out of hours',
      'Hardware bagged and labelled before a move',
      'A worn belt next to the one that replaced it',
      'A garage gym, finished and swept',
    ],
  },

  brands: {
    eyebrow: 'Equipment',
    heading: 'The machines I work on',
    body: 'Ten years across consumer and light-commercial equipment. The assembly and service mechanism is shared within a category, so experience genuinely transfers, but I will tell you before I come out if yours is something I have not had my hands on.',
    disclaimer:
      'Independent service provider. All product names, logos and brands are the property of their respective owners and are shown only to identify the equipment serviced. No affiliation, authorisation, sponsorship or endorsement is claimed or implied.',
  },

  businesses: {
    eyebrow: 'For businesses',
    heading: 'A machine out of order is a member complaint',
    body: 'Gyms, hotels, apartment buildings, corporate fitness rooms and physical therapy clinics do not buy convenience. They buy uptime. Different problem, different arrangement.',
    points: [
      {
        title: 'Scheduled maintenance, not emergencies',
        body: 'A recurring visit across your floor, logged per machine, so failures are found while they are still adjustments.',
      },
      {
        title: 'Outside your opening hours',
        body: 'Early, late or on a closed day. Your members should not have to walk past a service cart.',
      },
      {
        title: 'Certificate of insurance',
        body: 'Sent to your building or property manager before the first visit, whenever that is a condition of working on site.',
      },
      {
        title: 'Invoiced, not paid at the door',
        body: 'One invoice per visit or per period, with what was serviced and what needs watching next time.',
      },
    ],
    cta: 'Talk about a service agreement',
    whatsapp: 'Hi Julio, I run a facility with gym equipment and I want to talk about servicing it:',
  },

  weight: {
    eyebrow: 'The part people underestimate',
    heading: 'It is not the assembly. It is the stairs.',
    body: [
      'A commercial-grade treadmill is 250 to 350 pounds in one crate. Freight delivery means the curb, not the room, and a great many people discover this on the day the truck arrives.',
      'Getting a machine up a flight or down into a basement is a separate job from building it, with separate risk to the machine, the walls and whoever is carrying it. I do both, and I will tell you honestly before I come out whether your staircase can take a given machine at all.',
    ],
  },

  booking: {
    eyebrow: 'Booking',
    heading: 'Pick a slot that is really open',
    body: 'Slots are {slotHours} hours long and start at {opens}. What you see is my actual calendar. If a time is taken it does not appear, so the slot you pick is the slot you get.',
    note: 'You will get a confirmation from Google straight away. For anything urgent, or if none of these work, call me. That is always faster.',
    openInGoogle: 'Open the booking page',
    fallbackHeading: 'Booking is opening shortly',
    fallbackBody:
      'The calendar is being set up. Until it is live, call or send a message. You will get a real time and a real price the same day.',
  },

  area: {
    eyebrow: 'Where I work',
    heading: '{radius} out from {base}',
    body: 'The job is somewhere different every day, so what bounds this business is drive time, not a state line. That circle covers effectively all of Rhode Island, the southeastern third of Massachusetts, and the corner of Connecticut around Norwich and New London.',
    tiers: {
      core: { title: 'Fastest to schedule', range: 'Inside about 35 miles' },
      regular: { title: 'A normal working trip', range: '35 to 55 miles' },
      edge: { title: 'Yes, with a caveat', range: 'Partly outside the radius' },
    },
    edgeNote:
      'Eastern Worcester County, Cape Cod up to about Hyannis, and southeastern Connecticut sit on or just past the line. Still worth doing, but they carry a travel charge and want a day booked around them.',
    caption: 'Straight-line distance from {base}.',
  },

  faq: {
    heading: 'Before you book',
    items: [
      {
        q: 'Can you get a treadmill up to a second floor or down to a basement?',
        a: 'Usually yes, and it is a normal part of the job rather than an extra. What decides it is the staircase, not the machine: a turn at the bottom, a low ceiling over the stairs, or a narrow basement bulkhead can make a particular unit impossible. Send me a photo of the stairs along with the model and I will tell you before either of us commits to a day.',
      },
      {
        q: 'Will service by a third party void my warranty?',
        a: 'Assembly and routine maintenance by a competent third party does not void a manufacturer warranty on its own, and many manufacturers require professional assembly. What can void it is a repair using non-original parts or work on a sealed component. I will tell you when a job is one the manufacturer should be doing under warranty rather than one you should be paying me for.',
      },
      {
        q: 'Do you service commercial equipment?',
        a: 'Light-commercial and premium consumer equipment, yes, the kind found in hotel fitness rooms, apartment building gyms, corporate rooms and clinics. Full commercial floors with dozens of units I will take on for maintenance and repair, and I will be straight with you if the volume is more than one person should be promising.',
      },
      {
        q: 'What does a visit cost?',
        a: 'Installation and moving are quoted flat once I know the model and the access. Maintenance and repair start from a diagnostic visit, and you get the number for the fix before I start the fix, not after. Businesses on a recurring agreement are priced per period rather than per call.',
      },
      {
        q: 'Are you insured?',
        a: 'Yes. I carry insurance and I am background checked through {platform}, where I have held Top Pro status since {year}. If your building, HOA or property manager needs a certificate of insurance before I can work on site, ask and I will send it.',
      },
    ],
  },

  finalCta: {
    heading: 'Tell me what the machine is',
    body: 'The model and a photo of where it has to go is enough for a real price and a real day. Same week most of the time, and next day more often than you would expect.',
  },

  whatsapp: {
    general: 'Hi Julio, I found your site. Here is the equipment I need help with:',
    booking: 'Hi Julio, I would like to book a visit for my gym equipment:',
  },

  footer: {
    tagline:
      '{operator}. {years} years, one person, every job start to finish. Installation, maintenance, repair, moving and consulting for gym equipment.',
    hours: 'Hours',
    hoursValue: '{days}, {opens} to {closes}. Closed Sunday.',
    area: 'Service area',
    areaValue: 'Within {radius} of {base}, {region}. Mobile service, no showroom.',
    payment: 'Payment accepted: {methods}.',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
  },

  privacy: {
    title: 'Privacy Policy | Aplus',
    description:
      'What this site collects, what it does not, and who processes the data. Plain language, no tracking beyond analytics and advertising measurement.',
    heading: 'Privacy Policy',
    updated: 'Last updated',
    body: [
      {
        heading: 'What this site collects',
        text: 'This site has no accounts, no login and no database. It does not store anything you type. If you book through the calendar, the name, email and phone number you enter go to Google Calendar and to me, nowhere else.',
      },
      {
        heading: 'Measurement and advertising',
        text: 'This site uses Google Analytics to count visits, and the Meta pixel to measure whether an advertisement on Facebook or Instagram led to a booking. Both set cookies and both receive your IP address. Neither receives your name, phone number or email from this site.',
      },
      {
        heading: 'Booking',
        text: 'The booking calendar is a Google Calendar appointment page. What you enter there is handled under Google’s privacy policy as well as this one. The appointment lands in my calendar and I contact you about the job. Nothing else is done with it.',
      },
      {
        heading: 'Your choices',
        text: 'You can block cookies in your browser and the site still works, minus the measurement. You can ask me to delete anything you have sent me by calling or writing to the address below, and I will.',
      },
      {
        heading: 'Contact',
        text: 'Questions about any of this go to the same phone number and email as everything else, at the bottom of every page.',
      },
    ],
  },
} as const;

export type Dict = typeof en;
