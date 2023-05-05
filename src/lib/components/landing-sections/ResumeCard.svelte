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

<div class="my-8 rounded-xl bg-base-200 p-8 pr-4 prose max-w-none prose-lg prose-li:my-0">
	{#if date}
		<span class="pre-line-top-title text-primary before:bg-primary">
			{date}{#if toDate}{` - ${toDate}`}{/if}
		</span>
	{/if}
	<h3 class="mt-2 font-semibold">
		{title}{#if company}
			<span class="font-serif font-light">, {company}</span>
		{/if}
	</h3>
	{#if description}
		<p class="leading-normal">{description}</p>
	{/if}
	{#if bullets}
		<ul class="text-base pl-2">
			{#each bullets as bullet}
				<li class="pl-0">{bullet}</li>
			{/each}
		</ul>
	{/if}
</div>
