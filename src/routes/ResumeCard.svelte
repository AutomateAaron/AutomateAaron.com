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

<div
	class="prose-condensed prose my-8 max-w-[38em] rounded-xl bg-base-200 p-8 pr-4 xl:prose-lg prose-ul:pl-0 prose-li:my-0 prose-li:pl-0 prose-li:leading-snug"
>
	{#if date}
		<span class="pre-line-top-title text-primary before:bg-primary">
			{date}{#if toDate}{` - ${toDate}`}{/if}
		</span>
	{/if}
	<h3>
		{title}{#if company}
			<span class="font-serif font-light">, {company}</span>
		{/if}
	</h3>
	{#if description}
		<p>{description}</p>
	{/if}
	{#if bullets}
		<ul>
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	{/if}
</div>
