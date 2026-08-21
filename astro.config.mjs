import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zhiyuanhuang02.github.io',
  base: '/AquaSense-demo/',
  output: 'static',
  build: {
    format: 'directory',
  },
});
