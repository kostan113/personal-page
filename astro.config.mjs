import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kostan113.github.io',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
