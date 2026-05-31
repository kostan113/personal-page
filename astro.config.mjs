import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kostan113.github.io',
  base: '/personal-page/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
