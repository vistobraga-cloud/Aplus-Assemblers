// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// The canonical origin. Every canonical URL, every hreflang alternate, the
// sitemap and robots.txt derive from this one value — there is no other place
// a domain is written. Change it here when the real domain is pointed.
const SITE = 'https://aplusfitnessservice.com';

export default defineConfig({
  site: SITE,
  output: 'static',

  trailingSlash: 'never',
  build: { format: 'file' },

  /**
   * Three languages, because the 50-mile radius is not one market.
   *
   * Providence is the largest population centre inside it and is heavily
   * Hispanic; Fall River, New Bedford, Taunton and East Providence carry one
   * of the largest Portuguese-descended populations in the country. English
   * is the default and stays at the root so the ad URL is the short one.
   *
   * prefixDefaultLocale: false keeps English at `/` and puts the other two at
   * `/es` and `/pt`.
   */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },

  // ~1KB of JS, no framework. Warms the next document on hover/tap-intent.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },

  integrations: [
    // Icons compile to inline <svg> at build time — zero runtime JS.
    icon(),
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-US', pt: 'pt' } },
      filter: (page) => !page.includes('/privacy'),
    }),
  ],

  vite: { plugins: [tailwindcss()] },

  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
});
