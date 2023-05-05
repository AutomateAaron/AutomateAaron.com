<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
	import EmailIcon from '~icons/ic/baseline-email';
	import Shape1 from '$lib/components/svg/Shape1.svelte';
	import Shape2 from '$lib/components/svg/Shape2.svelte';
	import Location from '~icons/ic/baseline-location-on'; // eslint-disable-line

	import { socialMediaLinks, siteMap } from '$lib/config.js';

	import { page } from '$app/stores';
	import ClickToCopy from '../ClickToCopy.svelte';
</script>

<footer class="relative text-accent-content">
	<div class="absolute -top-10 -z-40 mt-10 h-full w-full overflow-hidden">
		<div class="absolute top-36 -z-40 h-full w-full skew-y-2 transform overflow-hidden bg-accent" />
	</div>

	<div class="container">
		<!-- contact -->
		<div
			class="relative overflow-hidden rounded-xl bg-primary px-10 py-16 text-primary-content md:px-20 md:py-20 xl:py-24"
		>
			<div class="relative z-10 justify-between gap-4 md:flex">
				<div class="">
					<span class="pre-line-top-title text-xl leading-none before:bg-primary-content"
						>Contact Me</span
					>
					<h2 class="h3 mt-5 text-left md:mb-0">Optimize your Cloud</h2>
				</div>

				<div class="mt-8 flex justify-center md:mt-0 md:items-end md:justify-end">
					{#if $page.url.pathname != '/contact'}
						<a href="/contact">
							<button class="btn-outline btn text-primary-content">Schedule Consultation</button>
						</a>
					{/if}
				</div>
			</div>

			<div class="absolute -top-[43%] left-[2%] z-0 text-primary-focus">
				<Shape1 class="h-80 w-[357px] animate-spin-slow" />
			</div>

			<div
				class="absolute -right-[9%] top-[12%] z-0 rotate-[80deg] transform animate-move-y text-primary-focus hidden md:block"
			>
				<Shape2 class="h-52 w-60" />
			</div>
		</div>

		<!-- footer -->
		<div
			class="flex flex-col items-center gap-12 py-12 md:flex-row md:items-start md:justify-between md:py-20"
		>
			<div>
				<Logo class="h-40 w-40" />
			</div>

			<div>
				<h2 class="h4 mb-6 text-center md:text-left">Sitemap</h2>

				<nav class="flex flex-col flex-wrap items-center space-y-2 md:items-start">
					{#each siteMap as item}
						<a href={item.route}>{item.title}</a>
					{/each}
				</nav>
			</div>

			<div>
				<h2 class="h4 mb-6 text-center md:text-left">Address</h2>

				<div class="flex flex-col items-center space-y-2 md:items-start">
					<ClickToCopy
						class="tooltip-primary duration-300 hover:text-primary"
						copyText="Hello@AaronNBrock.com"
					>
						<div class="flex w-full items-center justify-center space-x-3 md:justify-start">
							<EmailIcon class="mr-4" />
							Hello@AaronNBrock.com
						</div>
					</ClickToCopy>

					<div class="tooltip" data-tip="Click to Copy!" />

					<span class="flex w-full items-center justify-center space-x-3 md:justify-start">
						<Location class="mr-4" />
						Anywhere
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- copyright -->
	<div>
		<div class="container grid-cols-2 border-t border-accent-content py-10 md:grid">
			<p class="text-center md:text-left">All right reserved copyright © Aaron N. Brock 2023</p>

			<!-- social media links -->
			<div class="mt-12 flex items-center justify-center space-x-6 md:mt-0 md:justify-end">
				{#each socialMediaLinks as item}
					<a
						aria-label="Open social media profile"
						href={item?.url}
						target="_blank"
						rel="noreferrer"
						class="group"
					>
						<svelte:component
							this={item?.icon}
							class="h-5 fill-accent-content transition-colors group-hover:fill-primary"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
