<script lang="ts">
	import Star from '../svg/Star.svelte';
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { ITestimonial } from '$lib/types';
	import ServiceBg from '../svg/landing-sections/service/ServiceBg.svelte';

	const testimonials: ITestimonial[] = [
		{
			name: 'Gregory Patmore',
			comment:
				"Love having Aaron on my delivery team. He's very much on top of things, often getting things done before we realize it. Moreover, he's been fantastic at collaborating with other coworkers on the delivery team as well as running meetings with client stakeholders. We've gotten great feedback on him personally from the client.",
			time: 'Sep 21, 2020',
			star: 5,
		},
		{
			name: 'Paul Kordes',
			comment:
				'Aaron immediately jumped in suggesting Postgres for storing TF state which we ended up using at the customer! Now in my first engagement with him he has jumped right back in assisting with k8s installs of Jenkins and Artifactory. He has patiently helped me out with some things about Rancher I did not know and paired throughout.  He is super fun and easy to work with. He very quickly figured out every bump in the road with the helm installs.',
			time: 'Sep 23, 2020',
			star: 5,
		},
		{
			name: 'Jason Lutz',
			comment:
				"Working with Aaron was a great experience, he had a lot of patience with me and I saw my coding skills improved greatly. Also, Aaron's presentation skills are excellent which makes demos fun. Keep being an enthusiastic influence!",
			time: 'Sep 22, 2020',
			star: 5,
		},
		{
			name: 'Henry Gallo',
			comment:
				'Aaron is an outstanding technical driven person, I have seen Aaron grow in multiple areas including his interaction with the stakeholder. He earns the teams and stakeholder trust in every engagement he has ever been on. Time after time he has proven to have excellent technical chaps. For Aaron "There is always I way" I personally would take Aaron with me on any engagement, should the opportunity present itself. Aaon is a very responsible individual and takes feedback and applies his learnings almost immediately.',
			time: 'Oct 25, 2020',
			star: 5,
		},
	];

	const options = {
		type: 'slide',
		perPage: 2,
		perMove: 1,
		gap: '0rem',
		arrows: false,
		pagination: true,
		autoplay: true,
		interval: 5000,
		breakpoints: {
			1023: {
				perPage: 1,
				gap: '-1rem',
			},
		},
		classes: {
			// Add classes for pagination.
			pagination: 'splide__pagination testimonial-slide-pagination', // container
			page: 'splide__pagination__page testimonial-slide-page', // each button
		},
	};
</script>

<section id="reviews" class="section relative">
	<!-- <div class=" absolute bottom-0 left-0 right-0 top-0 -z-40 -skew-y-2 transform bg-base-300" /> -->

	<div class="container overflow-hidden">
		<div
			class="prose prose-lg lg:prose-xl xl:prose-2xl max-w-lg prose-condensed mb-8 text-center mx-auto"
		>
			<span class="">Testimonials</span>
			<h2 class="">What People Are Saying?</h2>
		</div>

		<div class="-mx-6 mt-12">
			<Splide {options}>
				{#each testimonials as item, i}
					<SplideSlide>
						<div class="p-6 h-full">
							<div
								class="h-full shadow-lg rounded-xl bg-base-100 p-8 lg:p-12 prose lg:prose-lg max-w-none"
							>
								<div>
									{#each Array(item.star) as star, i}
										<Star class="inline-block h-5 w-5 fill-yellow-400 text-yellow-400" />
									{/each}
								</div>

								<p class="mb-10 mt-6">{item.comment}</p>

								<div class="not-prose">
									<span class="pre-line-top-title text-base font-bold leading-none">
										{item.name}
									</span>
									<span class="text-base leading-none opacity-70"> | {item.time}</span>
								</div>
							</div>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
	<ServiceBg class="absolute right-0 top-0 z-[-2] w-2/3 text-base-300" />
</section>

<style lang="postcss">
	:global(.testimonial-slide-pagination) {
		@apply -bottom-[4rem];
	}

	:global(.testimonial-slide-page) {
		background-color: #c2c8cc !important;
	}

	:global(.testimonial-slide-pagination .is-active) {
		background-color: #400080 !important;
		transform: none;
	}
</style>
