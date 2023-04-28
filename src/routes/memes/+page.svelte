<script lang="ts">
	import { siteDescription } from '$lib/config';
	import MemesList from '$lib/components/MemesList.svelte';
	import ServiceBg from '$lib/components/svg/landing-sections/service/ServiceBg.svelte';
	import Figure from '$lib/components/Figure.svelte';

	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	export let data;

	const { memes } = data;
</script>

<svelte:head>
	<title>Memes | {siteDescription}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="section relative overflow-hidden">
	<div class="container relative">
		<div class="mb-8 flex flex-col items-end text-center">
			<h1 class="mb-2">Memes</h1>
			<Breadcrumbs />
		</div>
		<div class="relative">
			<MemesList {memes} />
			<Figure class="absolute -top-12 left-1/4 -z-10 h-36 w-36 animate-move-x" />
			<Figure class="absolute -bottom-12 left-12 -z-10 h-24 w-24 animate-move-x" />
		</div>

		<BreathingBlob class="absolute -right-8 -top-60 -z-10  h-64 w-64 -rotate-90 text-base-300" />
	</div>
	<Figure class="absolute left-0 top-1/3 -z-10 h-36 w-12 animate-move-y" />

	<Figure class="absolute bottom-1/3 right-12 -z-10 h-24 w-24 animate-move-y" />
	<ServiceBg class="absolute right-0 top-96 -z-40 w-3/5 text-base-300" />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
