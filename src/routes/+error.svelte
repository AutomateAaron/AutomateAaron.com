<!-- This page handles any error encountered by the site. -->
<script lang="ts">
	import Plus from '~icons/ic/baseline-plus';
	import LeftArrow from '~icons/ic/baseline-arrow-left';
	import RightArrow from '~icons/ic/baseline-arrow-right';

	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';
	import { page } from '$app/stores';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import Shape1 from '$lib/components/svg/Shape1.svelte';
	import Figure from '$lib/components/Figure.svelte';
</script>

<CardPage>
	<div class="rounded-xl bg-base-100 p-8 shadow lg:p-12">
		<h1 class="mb-0 flex items-center">
			<span>{$page.status}</span>
			<Plus class="rotate-45 align-text-bottom text-error" />
		</h1>
		{#if $page.error}
			<span class="mb-6 inline-block">{$page.error.message}</span>
		{/if}
		<p>
			Maybe send us a message about it so I can fix it?<br />
			<span class="text-sm opacity-50">(or just go back to the home page)</span>
		</p>
		<div class="flex gap-4">
			<a href="/" class="btn btn-outline btn-primary">
				<LeftArrow class="align-middle text-3xl" />Home
			</a>
			<a href="/contact" class="btn btn-outline btn-primary">
				Contact<RightArrow class="align-middle text-3xl" />
			</a>
		</div>
	</div>
	<svelte:fragment slot="card-elements">
		<Figure class="absolute -bottom-12 -right-12 -z-10 h-36 w-36 animate-spin-slow" />
		<BreathingBlob
			class="absolute -left-32 -top-32 -z-30 h-64 w-64 -rotate-90 animate-pulse text-base-300"
		/>
	</svelte:fragment>
	<svelte:fragment slot="container-elements">
		<Shape1 class="absolute -top-20 right-0 w-52 animate-move-x text-base-300" />
	</svelte:fragment>
	<svelte:fragment slot="page-elements">
		<Figure class="absolute bottom-0 left-0 -z-10 h-48 w-12 animate-bounce" />
	</svelte:fragment>
</CardPage>
