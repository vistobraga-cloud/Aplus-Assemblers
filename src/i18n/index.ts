import { en } from './en';
import { es } from './es';
import { pt } from './pt';

/**
 * Three languages, because the 50-mile radius is not one market.
 *
 * English is the default and stays at `/` so the ad URL is the short one.
 * Spanish comes second: Providence is the largest population centre inside
 * the radius and is heavily Hispanic, and Pawtucket, Central Falls and
 * Woonsocket follow it. Portuguese third and still substantial — Fall River,
 * New Bedford, Taunton and East Providence.
 */
export const LOCALES = ['en', 'es', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Widen the literal types `as const` produced in en.ts, while keeping the
 * exact shape — including tuple lengths, so a translation cannot quietly ship
 * four of the five lifecycle stages. A homomorphic mapped type preserves
 * arrays and tuples, which is the whole trick here.
 */
type Widen<T> = T extends string
  ? string
  : T extends object
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T;

export type Dict = Widen<typeof en>;

const DICTS: Record<Locale, Dict> = { en, es, pt };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}

/** Narrow whatever Astro.currentLocale handed us, falling back to English. */
export function toLocale(value: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(value ?? '') ? (value as Locale) : DEFAULT_LOCALE;
}

/**
 * Root-relative path for a locale. English has no prefix, so the advertised
 * URL is aplusfitnessservice.com rather than .../en.
 */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * Fill {placeholders}. Facts live in business.ts and arrive here at render, so
 * a number is never typed into a copy file where it could go stale in one
 * language and not the others.
 *
 * An unknown placeholder is left visible rather than blanked — a stray
 * "{phone}" on the page is noticed immediately; an empty gap is not.
 */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

/** Every locale's URL for the current page, for hreflang and the switcher. */
export function alternates(path: string): { locale: Locale; path: string; label: string }[] {
  return LOCALES.map((locale) => ({
    locale,
    path: localePath(locale, path),
    label: DICTS[locale].label,
  }));
}

/**
 * Strip the locale prefix off a pathname, giving the route in its neutral
 * form. `/es/privacy` → `/privacy`, so the language switcher can keep the
 * visitor on the page they are actually reading.
 */
export function neutralPath(pathname: string): string {
  // build.format 'file' means the route pathname carries the built filename —
  // the Portuguese home is /pt.html, not /pt. Left in, that extension defeats
  // the prefix match below, every alternate comes out as /es/pt.html, and the
  // page ends up declaring a canonical URL that does not exist. Strip it
  // before anything else reads the path.
  const clean = pathname.replace(/\/index\.html?$/i, '/').replace(/\.html?$/i, '');
  const stripped = clean.replace(/\/+$/, '') || '/';
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (stripped === `/${locale}`) return '/';
    if (stripped.startsWith(`/${locale}/`)) return stripped.slice(locale.length + 1);
  }
  return stripped;
}
