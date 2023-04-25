<script>
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import { shortLinks } from '$lib/config';

	shortLinks;
</script>

<CardPage>
	<ul>
		{#each shortLinks as shortLink}
			<li>
				<a href="link/{shortLink.slug}">{shortLink.slug}</a>
			</li>
		{/each}
	</ul>
</CardPage>
