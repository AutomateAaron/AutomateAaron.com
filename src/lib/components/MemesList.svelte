<script lang="ts">
	import Img from '@zerodevx/svelte-img';

	export let memes;

	let clazz = '';

	export { clazz as class };
</script>

<div class="relative columns-3xs gap-4 space-y-4 {clazz}">
	{#each memes as meme}
		<div id="{meme.slug}-thumb" class="group w-full overflow-hidden rounded-lg">
			<a href="#{meme.slug}" aria-label="Open image pop up for {meme.slug}">
				<Img
					src={meme.default}
					alt={meme.slug}
					class="duration-300 ease-in-out group-hover:scale-110"
				/>
			</a>
		</div>
		<!-- Put this part before </body> tag -->
		<a
			href="#close"
			id={meme.slug}
			class="fixed -top-4 left-0 z-50 hidden h-screen w-screen target:block"
		>
			<div class="flex h-full w-full items-center justify-center bg-black bg-opacity-25">
				<Img src={meme.default} alt={meme.slug} class="m-auto max-h-screen w-min object-contain" />
			</div>
		</a>
	{/each}
</div>
