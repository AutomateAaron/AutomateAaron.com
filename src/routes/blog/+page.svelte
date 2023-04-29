<script lang="ts">
	import { siteDescription, siteTitle } from '$lib/config';
	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';
	import ServiceBg from '$lib/components/svg/landing-sections/service/ServiceBg.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import BlogsList from '$lib/components/BlogsList.svelte';
	import Figure from '$lib/components/Figure.svelte';

	export let data;

	const { blogMetas } = data;
</script>

<svelte:head>
	<title>Blog | {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="section relative">
	<div class="container relative">
		<div class="mb-8 flex flex-col items-start">
			<h1 class="mb-2">Blog</h1>
			<Breadcrumbs />
		</div>
		<div class="relative">
			<BlogsList titleElement="h2" {blogMetas} />
			<Figure class="absolute -top-12 right-36 -z-10 h-24 w-24 animate-move-x" />
		</div>

		<BreathingBlob class="absolute -right-8 -top-60 -z-10  h-64 w-64 -rotate-90 text-base-200" />
	</div>

	<Figure class="absolute left-0 top-1/2 -z-10 h-36 w-12 animate-move-y" />

	<Figure class="absolute bottom-12 right-12 -z-10 h-[4.5rem] w-[4.5rem] animate-move-y" />
	<ServiceBg class="absolute right-0 top-0 -z-40 w-3/5 text-base-300" />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
