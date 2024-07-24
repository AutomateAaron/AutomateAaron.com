<script lang="ts">
	import BlogBlob from '$lib/assets/svg/GradientBlob.svelte';
	import BlogsList from '$lib/components/BlogsList.svelte';
	import Figure from '../lib/assets/figures/Figure.svelte';
	import type { IBlogMeta } from '$lib/types';

	export let blogMetas: IBlogMeta[];
</script>

<section id="blog" class="section relative overflow-hidden">
	<div class="container relative z-10">
		<div class="mb-16 items-end justify-between lg:flex">
			<div class="prose-condensed prose prose-lg lg:prose-xl xl:prose-2xl">
				<span class="pre-line-top-title"> Blog </span>
				<h2>Recent Articles</h2>
				<p>Just a place for my thoughts.</p>
			</div>

			<div class="hidden lg:block">
				<a href="blog" class="btn btn-outline btn-lg text-base-content"> See All Blogs </a>
			</div>
		</div>
		<div class="relative">
			<BlogsList
				{blogMetas}
				class="mx-auto my-8 sm:max-w-lg sm:grid-cols-1 xl:max-w-none xl:grid-cols-3"
			/>
			<Figure class="absolute -bottom-12 -right-12 -z-10 -ml-12 -mt-12 h-24 w-24 animate-move-y" />
		</div>

		<div class="mt-8 flex justify-center lg:hidden">
			<a href="blog" class="btn btn-outline inline-block text-base-content">
				<div class="flex h-full items-center justify-center">See All Blogs</div>
			</a>
		</div>
		<BlogBlob class="absolute -right-28 -top-4 -z-20 h-96 w-96 animate-spin-slow text-base-300" />
	</div>
</section>
