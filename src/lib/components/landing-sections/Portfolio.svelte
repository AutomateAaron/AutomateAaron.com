<script lang="ts">
	import type { IPortfolio } from '$lib/types';
	import Portfolio1 from '$lib/assets/images/portfolio/portfolio1.png';
	import Portfolio2 from '$lib/assets/images/portfolio/portfolio2.png';
	import Portfolio3 from '$lib/assets/images/portfolio/portfolio3.png';
	import Portfolio4 from '$lib/assets/images/portfolio/portfolio4.png';

	const portfolio: IPortfolio[] = [
		{
			slug: '',
			category: 'Development, UX Design',
			title: 'Case Study One',
			image: {
				src: Portfolio1,
				alt: '',
			},
		},
		{
			slug: '',
			category: 'Web Design, Branding',
			title: 'Case Study One',
			image: {
				src: Portfolio2,
				alt: '',
			},
		},
		{
			slug: '',
			category: 'UX Design, UX Research',
			title: 'Recipe App Ux Study',
			image: {
				src: Portfolio3,
				alt: '',
			},
		},
		{
			slug: '',
			category: 'UX Case Study for Agriculture App',
			title: 'UX Design',
			image: {
				src: Portfolio4,
				alt: '',
			},
		},
	];
</script>

<section id="portfolio" class="services py-12 lg:py-16 xl:pb-32 xl:pt-24">
	<div class="container">
		<div>
			<span class="mb-4 inline-block w-full text-center text-xl leading-normal">My Portfolio</span>
			<h2 class="h2 text-center">Check Some of My Recent Work</h2>
		</div>

		<div class="mt-12 md:columns-2">
			{#each portfolio as item, i}
				<div class="mb-8 md:m-6">
					<a href="/">
						<div class="group">
							<img
								src={item?.image?.src}
								alt={item?.image?.alt}
								class="w-full rounded-xl group-hover:shadow-xl"
							/>

							<div class="overflow-hidden">
								<span class="mb-5 mt-7 inline-block text-lg leading-none">{item?.category}</span>
								<h3 class="h3">{item?.title}</h3>

								<span
									class="pre-line-text-xl relative mb-4 translate-y-20 leading-normal text-primary before:!bg-primary group-hover:translate-y-0 xl:inline-block xl:translate-x-2 xl:transform"
								>
									<span class="text-base-content">—</span> See Details
								</span>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
