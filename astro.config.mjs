// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itsastudio.com',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
