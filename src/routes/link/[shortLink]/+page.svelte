<script lang="ts">
	import { goto } from '$app/navigation';
	import Img from '@zerodevx/svelte-img';
	import MailingList from '$lib/components/MailingList.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';

	export let data;
	const { image, shortLink } = data;

	console.log(image);

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
<Img src={image} class="min-h-[120vh] w-full absolute top-0 -z-40 opacity-20 object-cover" />
