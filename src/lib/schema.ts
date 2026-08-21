import { business, schemaCounties, serviceRadiusMeters } from '@data/business';
import type { Dict } from '@i18n/index';

/**
 * schema.org, built from data only.
 *
 * Two rules hold throughout:
 *
 * 1. No aggregateRating, ever. The 4.9 stars were earned on Thumbtack, not
 *    here. Marking up a third party's reviews on our own business node is
 *    self-serving review markup — ineligible for rich results and a manual
 *    action risk. The rating lives in visible HTML with its source named.
 *
 * 2. No mention of licensing anywhere. Julio holds no Massachusetts HIC
 *    registration and the site never implies one.
 */

type Json = Record<string, unknown>;

const businessId = `${business.siteUrl}/#business`;
const personId = `${business.siteUrl}/#julio`;

/**
 * The service area as a circle plus the counties inside it.
 *
 * GeoCircle leads because it is the type that exists for a business that
 * travels to the customer. The edge-tier counties are excluded by
 * construction: they are partly or wholly outside the radius and are only
 * honest with a caveat attached, and a machine-readable claim has nowhere to
 * put a caveat.
 */
function areaServed(): Json[] {
  return [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: business.serviceRadius.lat,
        longitude: business.serviceRadius.lng,
        address: {
          '@type': 'PostalAddress',
          addressLocality: business.base.locality,
          addressRegion: business.base.region,
          addressCountry: 'US',
        },
      },
      geoRadius: serviceRadiusMeters,
    },
    ...schemaCounties.map((county) => ({
      '@type': 'AdministrativeArea',
      name: `${county.name}, ${county.state}`,
    })),
  ];
}

function openingHours(): Json {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: business.openingHours.days,
    opens: business.openingHours.opens,
    closes: business.openingHours.closes,
  };
}

export function localBusiness(dict: Dict): Json {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: business.name,
    description: dict.meta.description,
    url: business.siteUrl,
    telephone: business.phone.e164,
    email: business.email,
    priceRange: business.priceRange,
    paymentAccepted: business.paymentAccepted.join(', '),
    currenciesAccepted: 'USD',
    areaServed: areaServed(),
    openingHoursSpecification: [openingHours()],
    // Service-area business: locality and region only. The street address is
    // never published, on the site or in the Google Business Profile.
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.base.locality,
      addressRegion: business.base.region,
      addressCountry: 'US',
    },
    founder: { '@id': personId },
    employee: { '@id': personId },
    knowsLanguage: ['en', 'es', 'pt'],
  };
}

export function person(): Json {
  return {
    '@type': 'Person',
    '@id': personId,
    name: business.operator.name,
    jobTitle: 'Owner and Technician',
    worksFor: { '@id': businessId },
    knowsLanguage: ['en', 'es', 'pt'],
  };
}

/** One Service node per lifecycle stage, all pointing back at the business. */
export function services(dict: Dict): Json[] {
  return dict.lifecycle.stages.map((stage) => ({
    '@type': 'Service',
    name: `${stage.name} — gym equipment`,
    description: stage.body,
    serviceType: stage.name,
    provider: { '@id': businessId },
    areaServed: areaServed(),
  }));
}

/**
 * FAQPage. The answers passed here are the same strings the page renders
 * inside its <details> elements — the markup never claims an answer the
 * visitor cannot read on the page.
 */
export function faqPage(items: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function graph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
