<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import MailingList from '$lib/components/MailingList.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import type { IShortLink } from '$lib/types/index.js';

	export let data;
	const { shortLink } = data;

	let interacted = false;

	$: if (interacted) {
		goto(shortLink.url);
	}
</script>

<CardPage>
	<MailingList bind:interacted>
		{#if interacted}
			<h5 class="mb-0 text-center md:text-left">Redirecting...</h5>
			<a class="mb-4 block text-sm opacity-50" href={shortLink.url}>
				(click here if you aren't redirected)
			</a>
		{:else}
			<h5 class="text-center md:text-left">Almost There...</h5>
		{/if}
	</MailingList>
</CardPage>
