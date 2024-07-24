<script>
	import ClickToCopy from '$lib/components/ClickToCopy.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import { shortLinks, siteTitle } from '$lib/config';
	import { onMount } from 'svelte';
	import CopyIcon from '~icons/ic/baseline-content-copy';

	let url = '';

	onMount(() => (url = window.location.href));
</script>

<svelte:head>
	<title>ShortLinks | {siteTitle}</title>
</svelte:head>

<CardPage>
	<div class="rounded-xl bg-base-100 p-8 shadow-lg lg:p-12">
		<h1 class="h1">Short Links</h1>
		<ul class="space-y-2">
			{#each shortLinks as shortLink}
				<li>
					<ClickToCopy
						copyText={url + '/' + shortLink.slug}
						class="btn btn-square btn-primary btn-sm tooltip-left tooltip-primary mr-2 capitalize"
					>
						<CopyIcon class="inline h-2/3 w-2/3 fill-current" />
					</ClickToCopy>
					<a href="link/{shortLink.slug}" class="underline lg:text-lg">{shortLink.slug}</a>
				</li>
			{/each}
		</ul>
	</div>
</CardPage>
