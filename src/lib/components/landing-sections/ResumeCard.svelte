<script lang="ts">
	import type { IResumeSectionItem } from '$lib/types';

	export let item: IResumeSectionItem;

	let { date, toDate, title, company, description, bullets } = item;

	function formatDate(ate: Date) {
		return ate.toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase();
	}

	if (date && typeof date === 'object') {
		date = formatDate(date);
	}
	if (date && typeof toDate === 'object') {
		toDate = formatDate(toDate);
	}
</script>

<div class="my-8 rounded-xl bg-base-200 p-8 pr-4">
	{#if date}
		<span class="pre-line-top-title text-xl leading-normal text-primary before:bg-primary">
			{date}{#if toDate}{` - ${toDate}`}{/if}
		</span>
	{/if}
	<h4 class="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
		{title}{#if company}
			<span class="font-serif font-light">, {company}</span>
		{/if}
	</h4>
	{#if description}
		<p class="text-xl leading-normal">{description}</p>
	{/if}
	{#if bullets}
		<ul class="list-inside list-disc space-y-1 text-base lg:space-y-0">
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	{/if}
</div>
