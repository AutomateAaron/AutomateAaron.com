<script>
	import ClickToCopy from '$lib/components/ClickToCopy.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import { shortLinks } from '$lib/config';
	import { onMount } from 'svelte';
	import CopyIcon from '~icons/ic/baseline-content-copy';

	let url = '';

	onMount(() => (url = window.location.href));
</script>

<CardPage>
	<div class="bg-base-100 p-8 lg:p-12 rounded-xl shadow">
		<h2>Short Links</h2>
		<ul class="space-y-2">
			{#each shortLinks as shortLink}
				<li>
					<ClickToCopy
						copyText={url + '/' + shortLink.slug}
						class="btn btn-square btn-sm btn-primary capitalize mr-2 tooltip-left tooltip-primary"
					>
						<CopyIcon class="inline h-2/3 w-2/3 fill-current" />
					</ClickToCopy>
					<a href="link/{shortLink.slug}" class="underline">{shortLink.slug}</a>
				</li>
			{/each}
		</ul>
	</div>
</CardPage>
