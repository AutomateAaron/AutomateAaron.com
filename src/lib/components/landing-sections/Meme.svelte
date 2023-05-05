<script lang="ts">
	import type { IMeme } from '$lib/types/';
	import MemesList from '../MemesList.svelte';
	import Figure from '../Figure.svelte';
	import Shape1 from '../svg/Shape1.svelte';

	export let memes: IMeme[];
</script>

<section id="memes" class="section relative">
	<div class=" absolute bottom-0 left-0 right-0 top-0 -z-40 skew-y-2 transform bg-base-300" />

	<div class="container relative">
		<div class="items-end justify-between">
			<div
				class="prose prose-lg lg:prose-xl xl:prose-2xl max-w-lg prose-condensed text-right ml-auto mb-8"
			>
				<span class="pre-line-top-title"> Memes </span>
				<h2>Memes Memes</h2>
				<p>Like the comic section of a newspaper...</p>
			</div>
		</div>
		<div class="relative">
			<div class="relative my-8 max-h-[300vh] overflow-hidden">
				<div
					class="pointer-events-none absolute bottom-0 z-20 h-60 w-full bg-gradient-to-t from-base-300 to-transparent"
				/>
				<MemesList {memes} class="-mb-48" />
			</div>
			<!-- <Figure class="absolute -left-12 bottom-24 -z-10 h-36 w-36 animate-move-y" /> -->
		</div>
		<div class="mt-8 flex justify-center">
			<a href="/memes" class="btn-outline btn text-neutral"> See All Memes </a>
		</div>
		<!-- <Shape1 class="absolute right-0 top-4 -z-20 -mt-24 h-48 w-48 animate-spin-slow text-base-300" /> -->
	</div>
	<Figure class="absolute left-0 bottom-24 w-12 h-48 animate-move-y" />
</section>
