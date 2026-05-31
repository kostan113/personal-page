import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kostpop.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
