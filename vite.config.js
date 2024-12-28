import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import pages from 'vite-plugin-pages-svelte';

export default defineConfig({
  plugins: [svelte(), pages()],
});
