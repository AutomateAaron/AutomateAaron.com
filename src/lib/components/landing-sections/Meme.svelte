<script lang="ts">
	import type { IMeme } from '$lib/types/';
	import MemesList from '../MemesList.svelte';
	import Figure from '../Figure.svelte';

	export let memes: IMeme[];
	let showMore = false;
</script>

<section id="memes" class="section relative">
	<div class="absolute bottom-0 left-0 right-0 top-0 -z-40 skew-y-2 transform bg-base-300" />

	<div class="container relative">
		<div class="items-end justify-between">
			<div
				class="prose-condensed prose prose-lg mb-8 ml-auto max-w-lg text-right lg:prose-xl xl:prose-2xl"
			>
				<span class="pre-line-top-title"> Memes </span>
				<h2>Memes Memes</h2>
				<p>Like the comic section of a newspaper.</p>
			</div>
		</div>
		<div class="relative">
			<div
				class="relative my-8 {showMore
					? ''
					: 'max-h-[300vh] overflow-hidden md:max-h-[100vh] lg:max-h-[100vh] xl:max-h-[80vh]'}"
			>
				{#if !showMore}
					<div
						class="pointer-events-none absolute bottom-0 z-20 h-60 w-full bg-gradient-to-t from-base-300 to-transparent"
					/>
				{/if}
				<MemesList {memes} class={showMore ? '' : '-mb-48'} />
			</div>
			<!-- <Figure class="absolute -left-12 bottom-24 -z-10 h-36 w-36 animate-move-y" /> -->
		</div>
		<div class="mt-8 flex justify-center">
			<button
				on:click={() => {
					showMore = !showMore;
				}}
				class="btn btn-outline text-base-content"
			>
				{showMore ? 'Show Less' : 'Show More'}
			</button>
		</div>
		<!-- <Shape1 class="absolute right-0 top-4 -z-20 -mt-24 h-48 w-48 animate-spin-slow text-base-300" /> -->
	</div>
	<Figure class="absolute bottom-24 left-0 h-48 w-12 animate-move-y" />
</section>
