// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lt-20260522-042729105-small-business-01-9105-2c1ec94e.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    { provider: fontProviders.google(), name: 'Oswald', cssVariable: '--font-display', weights: ['400', '600', '700'], styles: ['normal'] },
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-body', weights: ['400', '500', '700'], styles: ['normal'] },
  ],
  vite: { plugins: [tailwindcss()] },
});
