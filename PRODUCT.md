# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences on one surface, arriving from Facebook and Instagram advertising,
overwhelmingly on phones.

**Homeowners.** Someone who has just bought a treadmill, home gym or rack and
is looking at a freight crate on their curb; or whose machine has started
making a noise, stopped working, or has to move house with them. They are not
shopping for a relationship — they have a heavy object and a problem, today.

**Facilities.** Gyms, hotels, apartment buildings, corporate fitness rooms and
physical therapy clinics. They do not buy convenience, they buy uptime: a
machine out of order is a member complaint. They want scheduled preventive
maintenance, work outside opening hours, a certificate of insurance for the
property manager, and an invoice rather than payment at the door.

## Product Purpose

Turn paid social traffic into booked visits for Julio Oliveira, a one-person
gym-equipment service business. Success is a confirmed appointment in his
Google Calendar, or a phone call. Nothing else on the page counts.

## Positioning

He covers the whole life of the machine, not one moment of it: consulting
before purchase, installation, maintenance, repair, and moving. Competitors in
this radius sell assembly alone. The customer meets him at installation and
comes back for the other four.

The second differentiator is honest and specific: freight delivery ends at the
curb, a commercial treadmill is 250–350 lb in one crate, and getting it up a
flight of stairs is a separate job from building it. He does both and says in
advance when a staircase cannot take a given machine.

## Operating Context

- Service-area business: he travels to the job, which is somewhere different
  every day. One to two hours of driving is a normal working day.
- Bounded by a 50-mile radius of Fall River, MA — effectively all of Rhode
  Island, the southeastern third of Massachusetts, and the corner of
  Connecticut around Norwich and New London. Not three whole states.
- Trading Monday to Saturday, 8am to 8pm, closed Sunday.
- Booking runs on a Google Calendar appointment schedule in 2-hour blocks from
  8am. Google checks his calendar for conflicts, so a taken slot never appears.
- The street address is never published, on the site or anywhere else.

## Capabilities and Constraints

- Five services: consulting, installation, maintenance, repair, moving.
- Three languages: English (default), Spanish, Portuguese. Spanish leads
  Portuguese because Providence is the largest population centre in the radius.
- Light and dark themes, both first-class.
- No backend. Booking is Google's; measurement is GA4 plus the Meta pixel; both
  read from environment variables and emit nothing when unset.
- **Julio holds no Massachusetts HIC registration.** The site must never claim
  or imply a licence, in any language. "Insured" and "background checked" are
  true and may be said.
- Third-party brand marks appear to identify equipment serviced. Julio has
  authorised showing the logos. The independence statement must render wherever
  they appear, and the words authorized / certified / official / partner are
  banned sitewide.
- **Open:** the production domain. The brand is Aplus Assemblers and the user
  holds a domain but has not supplied the string; `SITE` in astro.config.mjs is
  the single place it is written.
- **Open:** prices. No figures exist yet. The page reserves a marked price
  block the same way it reserves photo slots — it must not invent a number.

## Brand Commitments

- Name: Aplus Assemblers. Existing logo in `src/assets/brand/logo.png` — a
  green mark with a serif wordmark and a grey "& HANDYMAN SERVICES" line.
- Voice: first person, plainly spoken, specific about mechanism, honest about
  limits. Never salesy, never boastful.
- The copy in `src/i18n/{en,es,pt}.ts` is settled and out of scope for design
  work.

## Evidence on Hand

- **Thumbtack, confirmed by the owner:** 325 jobs completed, 4.9 stars from 184
  reviews, Top Pro since 2019, background checked. Read 2026-08. To be shown as
  a badge with the platform named, never as a bare number.
- **Insured.** Certificate available on request for property managers.
- **Ten years in business**, one person, every job start to finish.
- **No photography exists yet.** Nine shots are specified in `src/data/shots.ts`
  and render as labelled slots until supplied. Do not substitute stock imagery.
- **No brand logo files yet.** Eighteen equipment marks are listed in
  `src/data/brands.ts` and render as labelled slots until supplied.
- No customer testimonials, no case studies, no pricing. None may be invented.

## Product Principles

1. **One outcome per page.** A booked slot or a phone call. Every element earns
   its place against that, or leaves.
2. **The phone is the primary device.** Ad traffic is mobile, scrolling, and
   two seconds deep. Anything that only works on a laptop does not work.
3. **Say the mechanism.** Specific beats superlative: "levelled against the
   floor rather than its own frame" outperforms "quality workmanship".
4. **Never claim what cannot be shown.** No licence, no brand endorsement, no
   invented price, no stock photo standing in for his work.
5. **A missing asset is marked, never designed around.** An empty slot that
   states what belongs in it is more useful than a clever substitute that hides
   the gap.

## Accessibility & Inclusion

- Both themes meet WCAG AA for text contrast; the accent green needs a lighter
  value on dark grounds.
- The three languages are an access requirement in this market, not a nicety.
- Booking must never be the only path: phone and WhatsApp stay reachable at any
  scroll depth.
