<script lang="ts">
	import type { IMeme } from '$lib/types/';
	import MemesList from '../MemesList.svelte';

	export let memes: IMeme[];
</script>

<section id="memes" class="section relative">
	<div class="container relative">
		<div class="items-end justify-between">
			<div class="text-right">
				<span class="pre-line-top-title mb-4 text-xl leading-normal"> Memes </span>
				<h2 class="h2 mt-4">Memes Memes</h2>
				<p class="mb-4">Like the comic section of a newspaper...</p>
			</div>
		</div>
		<div class="relative max-h-[60vh] overflow-hidden">
			<div
				class="pointer-events-none absolute bottom-0 z-20 h-1/3 w-full bg-gradient-to-t from-base-200 to-transparent"
			/>
			<MemesList {memes} class="my-8" />
		</div>

		<div class="mt-8 flex justify-center">
			<a href="/memes" class="btn-outline btn text-neutral"> See All Memes </a>
		</div>
	</div>
</section>
