<script lang="ts">
	import { siteDescription, siteTitle } from '$lib/config';
	import FigureSmall from '$lib/components/svg/FigureSmall.svelte';
	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';
	import Figure from '$lib/components/svg/Figure.svelte';
	import ServiceBg from '$lib/components/svg/landing-sections/service/ServiceBg.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import BlogsList from '$lib/components/blog/BlogsList.svelte';

	export let data;

	const { blogs } = data;
</script>

<svelte:head>
	<title>Blog | {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="section relative overflow-hidden">
	<div class="container relative">
		<div class="mb-8 flex flex-col items-start">
			<h1 class="mb-2">Blog</h1>
			<Breadcrumbs />
		</div>

		<BlogsList {blogs} />
		<FigureSmall
			class="absolute left-3/4 top-32 -z-10 -ml-8 -mt-8 h-20 w-20 animate-move-left lg:-ml-12 lg:-mt-12 lg:h-32 lg:w-32"
		/>
		<BreathingBlob
			gradientId="blog"
			class="absolute -right-8 -top-60 -z-10  h-64 w-64 -rotate-90 text-base-200"
		/>
	</div>

	<Figure class="absolute -left-14 top-96 -z-10 hidden h-36 w-36 animate-move-top lg:block" />
	<FigureSmall
		class="absolute bottom-12 right-0 -z-10 -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
	/>
	<ServiceBg class="absolute right-0 top-0 -z-40 w-3/5 text-base-300" />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
