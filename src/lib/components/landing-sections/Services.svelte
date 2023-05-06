<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import type { IService } from '$lib/types';
	import Teaching from '~icons/ic/outline-menu-book';
	import Tuning from '~icons/ic/outline-pie-chart';
	import Templates from '~icons/ic/outline-file-copy';

	import ServiceCard from './ServiceCard.svelte';
	import BreathingBlob from '../svg/BreathingBlob.svelte';
	import Figure from '../Figure.svelte';

	const services: IService[] = [
		{
			title: 'Teaching',
			description:
				'Learn to use Google Cloud like a pro. From the basics to advanced strategies, I’ll give you the knowledge and skills you need to fully leverage the power of Google Cloud.',
			icon: Teaching,
		},
		{
			title: 'Tuning',
			description:
				'Take control of your Google Cloud costs. From identifying and eliminating unnecessary expenses to implementing cost-saving strategies, I’ll help you get the most out of your investment.',
			icon: Tuning,
		},
		{
			title: 'Templates',
			description:
				'Streamline your Google Cloud operations with templates. From deployments to scaling, templates provide you with a proven foundation to build upon, and allow you to focus on growing your business.',
			icon: Templates,
		},
	];

	const options = {
		type: 'slide',
		perPage: 3,
		perMove: 1,
		gap: '2rem',
		autoplay: false,
		interval: 3000,
		padding: '2rem',
		arrows: false,
		pagination: true,
		breakpoints: {
			640: {
				// xs
				perPage: 1,
				gap: '1rem',
			},
			// 768: {
			// 	// sm
			// 	perPage: 2,
			// 	gap: '2rem',
			// },
			// 1024: {
			// 	// md
			// 	perPage: 2,
			// 	gap: '2rem',
			// },
			1279: {
				// lg
				perPage: 2,
				gap: '2rem',
			},
		},
		classes: {
			// Add classes for pagination.
			pagination: 'splide__pagination service-slide-pagination', // container
			page: 'splide__pagination__page service-slide-page', // each button
		},
	};
</script>

<section id="services" class="section relative overflow-hidden">
	<div>
		<div class="container">
			<div class="prose prose-lg lg:prose-xl xl:prose-2xl max-w-lg prose-condensed mb-8">
				<span class="pre-line-top-title">Services</span>
				<h2>What I Do</h2>
				<p>
					Using technology to empower development teams to deliver software better faster stronger.
				</p>
			</div>
			<Splide hasTrack={false} {options}>
				<SplideTrack class="overflow-visible pb-12">
					{#each services as service}
						<SplideSlide>
							<ServiceCard {service} />
						</SplideSlide>
					{/each}
				</SplideTrack>
			</Splide>
		</div>

		<div class="my-12" />

		<!-- <div class="container mt-12 hidden items-start justify-between space-x-10 lg:flex">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div> -->
	</div>

	<BreathingBlob class="absolute -left-8 bottom-0 -z-20 h-96 w-96 rotate-45 text-base-300" />
	<Figure class="absolute bottom-12 left-28 -z-10 h-24 w-24 animate-move-y" />
	<!-- <ServiceBg class="absolute right-0 top-16 z-[-2] w-1/2 text-base-300" /> -->
</section>

<style lang="postcss">
	:global(.service-slide-pagination) {
		@apply bottom-0;
	}

	:global(.service-slide-page) {
		@apply !bg-base-100 shadow;
	}

	/* :global(.service-slide-pagination .is-active) {
		@apply !bg-accent-focus;
	} */
</style>
