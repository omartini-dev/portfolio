import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://osvaldomartini.dev',
  integrations: [tailwind({ applyBaseStyles: false })],
});
