import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kostan113.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
