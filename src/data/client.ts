/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Small Business Load Test 01 20260522-042729105',
  email: 'hello@example.com',
  phoneForTel: '555-0100',
  phoneFormatted: '(555) 010-0100',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Lic# 123456',
  address: {
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Denver',
    state: 'CO',
    zip: '80206',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://lt-20260522-042729105-small-business-01-9105-2c1ec94e.pages.dev',
} as const;

export type Client = typeof client;
