<script lang="ts">
	import { teleport } from '$lib/assets/js/clientUtils';
	import Img from '@zerodevx/svelte-img';

	export let memes;

	let clazz = '';

	export { clazz as class };
	export const selected: IMeme | null = null;
</script>

<div class="relative columns-3xs gap-4 space-y-4 {clazz}">
	{#each memes as meme}
		<div id="{meme.slug}-thumb" class="group w-full overflow-hidden rounded-lg">
			<a href="#{meme.slug}">
				<Img src={meme.default} class="duration-300 ease-in-out group-hover:scale-110" />
				<!-- <img
					src={meme.image}
					alt={meme.title}
					class="duration-300 ease-in-out group-hover:scale-110"
				/> -->
			</a>
		</div>
		<!-- Put this part before </body> tag -->
		<a
			href="#close"
			id={meme.slug}
			class="hidden target:block fixed -top-4 left-0 w-screen h-screen z-50"
		>
			<div class="flex justify-center items-center w-full h-full bg-black bg-opacity-25">
				<Img src={meme.default} class="max-h-screen m-auto object-contain w-min" />
			</div>
		</a>
	{/each}
</div>
