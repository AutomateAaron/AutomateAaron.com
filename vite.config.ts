import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			scale: 1,

			// experimental
			autoInstall: true
		}),
		imagetools({
			// By default, directives are `?width=480;1024;1920&format=avif;webp;jpg`
			defaultDirectives: () => new URLSearchParams('?width=480;1024&format=avif;jpg&lqip=32')
		})
	]
});
