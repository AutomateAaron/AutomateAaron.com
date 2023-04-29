<script>
	import Img from '@zerodevx/svelte-img';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg?run';
	import Figure from '$lib/components/Figure.svelte';

	import MailingList from '$lib/components/MailingList.svelte';
	import FigureSmall from '$lib/components/FigureSmall.svelte';
	import { loadImage } from '$lib/assets/js/clientUtils';

	export let title;
	export let image;
	let imageData = loadImage(image);
	export let imageAlt;
	export let categories;

	let interacted = false;
</script>

<article class="section relative overflow-hidden pb-0">
	<div class="container relative mb-8">
		<h1 class="mb-2 text-center">{title}</h1>
		<Breadcrumbs class="mx-auto mb-2 max-w-max" />
		<Img
			src={imageData}
			alt={imageAlt}
			loading="eager"
			class="mx-auto max-h-[50vh] w-max rounded-xl object-contain"
		/>

		<Figure class="absolute -left-[4.5rem] lg:-left-12 top-0 -z-10 h-24 w-24 animate-move-y" />
		<BreathingBlob
			class=" absolute -left-24 -top-24 -z-20 h-40 w-40 text-base-300 lg:-left-60 lg:-top-44 lg:h-80 lg:w-80"
		/>
	</div>
	<div class="relative {interacted ? '' : 'max-h-screen'} mb-16 overflow-hidden duration-300">
		<div class="container">
			<div class="prose mx-auto lg:prose-xl">
				<slot />

				{#if categories}
					<aside class="not-prose mt-16 flex items-center text-base">
						<span>Categories:</span>
						<ul class="inline-block">
							{#each categories as category}
								<li class="float-left ml-4">
									<a href="/blog/">
										<span class="badge-secondary badge">#{category}</span>
									</a>
								</li>
							{/each}
						</ul>
					</aside>
				{/if}
			</div>
		</div>
		{#if !interacted}
			<div
				class="pointer-events-none absolute bottom-0 z-20 h-1/4 max-h-full w-full bg-gradient-to-t from-base-200 to-transparent"
			/>
		{/if}
	</div>
	<Figure class="absolute right-0 top-96 hidden h-36 w-12 animate-move-y lg:block" />
	<Figure
		class="absolute bottom-96 left-0 {interacted
			? '-z-10'
			: 'z-20'} hidden h-36 w-24 animate-move-y lg:block"
	/>
</article>

<section class="section relative !pt-0">
	<div
		class="container flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:items-start"
	>
		{#if interacted}
			<div class="relative">
				<div
					class="group relative flex max-w-xl items-center justify-center duration-300 ease-in-out hover:scale-[1.03]"
				>
					<div class="relative -mr-24 w-full">
						<Img src={ProfilePicture} alt="about-img" class="mask-left" />
					</div>
					<div
						class="flex-col rounded-xl bg-base-100 p-8 pl-24 shadow duration-300 ease-in-out group-hover:shadow-lg"
					>
						<h4 class="mb-0">Aaron N. Brock</h4>
						<div class="divider my-2" />
						<p class="text-sm">
							I'm a Cloud Engineer with a background in DevOps Engineering, Software Development,
							Cloud Gaming, and self-driving buses. Now, I empower innovative startups & small
							businesses like yours to leverage the cloud!
						</p>
						<a
							href="/contact"
							class="btn-primary btn-sm btn [.group:not(:hover)_&]:btn-outline hover:text-primary-content"
						>
							Contact Me
						</a>
					</div>
				</div>
				<FigureSmall
					class="absolute -left-4 top-4 -z-10 h-20 w-20 animate-move-x text-base-content"
				/>
			</div>
		{/if}
		<MailingList bind:interacted />
	</div>
</section>
