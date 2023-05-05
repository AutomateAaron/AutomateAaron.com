<script lang="ts">
	import { goto } from '$app/navigation';
	import Img from '@zerodevx/svelte-img';
	import MailingList from '$lib/components/MailingList.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import { siteTitle } from '$lib/config.js';

	export let data;
	const { image, shortLink } = data;

	let interacted = false;

	$: if (interacted) {
		goto(shortLink.url);
	}
</script>

<svelte:head>
	<title>{shortLink.slug} | {siteTitle}</title>
</svelte:head>

<CardPage>
	<MailingList bind:interacted>
		<span class="pre-line-top-title mb-4">Mailing List</span>

		{#if interacted}
			<h1 class="mb-0 text-center md:text-left h3">Redirecting...</h1>
			<a class="mb-4 block text-sm opacity-50" href={shortLink.url}>
				(click here if you aren't redirected)
			</a>
		{:else}
			<h1 class="text-center md:text-left h3">Almost There...</h1>
		{/if}
	</MailingList>
</CardPage>
<Img src={image} class="absolute top-0 -z-40 min-h-[120vh] w-full object-cover opacity-20" />
