<script lang="ts">
	import Star from '../svg/Star.svelte';
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { ITestimonial } from '$lib/types/generalTypes';

	const testimonials: ITestimonial[] = [
		{
			name: 'Gregory Patmore',
			comment:
				"Love having Aaron on my delivery team. He's very much on top of things, often getting things done before we realize it. Moreover, he's been fantastic at collaborating with other coworkers on the delivery team as well as running meetings with client stakeholders. We've gotten great feedback on him personally from the client.",
			time: 'Sep 21, 2020',
			star: 5
		},
		{
			name: 'Paul Kordes',
			comment:
				'Aaron immediately jumped in suggesting Postgres for storing TF state which we ended up using at the customer! Now in my first engagement with him he has jumped right back in assisting with k8s installs of Jenkins and Artifactory. He has patiently helped me out with some things about Rancher I did not know and paired throughout.  He is super fun and easy to work with. He very quickly figured out every bump in the road with the helm installs.',
			time: 'Sep 23, 2020',
			star: 5
		},
		{
			name: 'Jason Lutz',
			comment:
				"Working with Aaron was a great experience, he had a lot of patience with me and I saw my coding skills improved greatly. Also, Aaron's presentation skills are excellent which makes demos fun. Keep being an enthusiastic influence!",
			time: 'Sep 22, 2020',
			star: 5
		},
		{
			name: 'Henry Gallo',
			comment:
				'Aaron is an outstanding technical driven person, I have seen Aaron grow in multiple areas including his interaction with the stakeholder. He earns the teams and stakeholder trust in every engagement he has ever been on. Time after time he has proven to have excellent technical chaps. For Aaron "There is always I way" I personally would take Aaron with me on any engagement, should the opportunity present itself. Aaon is a very responsible individual and takes feedback and applies his learnings almost immediately.',
			time: 'Oct 25, 2020',
			star: 5
		}
	];

	const options = {
		type: 'slide',
		perPage: 2,
		perMove: 1,
		gap: '3rem',
		arrows: false,
		pagination: true,
		autoplay: true,
		interval: 5000,
		breakpoints: {
			1023: {
				perPage: 1,
				gap: '1rem'
			}
		},
		classes: {
			// Add classes for pagination.
			pagination: 'splide__pagination testimonial-slide-pagination', // container
			page: 'splide__pagination__page testimonial-slide-page' // each button
		}
	};
</script>

<section id="reviews" class="relative ">
	<div class="bg-gray-200  absolute top-0 left-0 right-0 bottom-0 transform skew-y-2 -z-40" />

	<!-- <div class="absolute top-0 left-0 right-0 text-gray-100">
		<svg viewBox="0 0 1920 79"
			><path d="M0 0h1920v79L0 0z" data-name="Path 1450" fill="currentColor" /></svg
		>
	</div> -->

	<div class="container py-24 md:py-12 lg:pt-36 lg:pb-32 xl:pt-44 xl:pb-36 overflow-hidden">
		<div>
			<span class="text-xl leading-normal mb-4 text-center w-full inline-block">Testimonials</span>
			<h2 class="h2 text-center">What People Are Saying About Me?</h2>
		</div>

		<div class="mt-12">
			<Splide {options}>
				{#each testimonials as item, i}
					<SplideSlide>
						<div class="bg-gray-100 py-12 px-8 md:py-16 md:px-12 rounded-3xl h-full">
							<div>
								{#each Array(item.star) as star, i}
									<Star class="w-5 h-5 text-yellow-400 inline-block fill-yellow-400" />
								{/each}
							</div>

							<p class="mt-6 mb-10">{item.comment}</p>

							<div>
								<span class="text-base leading-none text-gray-600 font-bold pre-line-top-title">
									{item.name}
								</span>
								<span class="text-base leading-none text-gray-400"> | {item.time}</span>
							</div>
						</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
</section>

<style lang="scss">
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
