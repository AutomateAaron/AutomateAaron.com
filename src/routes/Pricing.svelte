<script lang="ts">
	import Check from '~icons/mdi/check-bold';
	import Figure from '$lib/assets/figures/Figure.svelte';
	const features = [
		{
			name: 'Regular Consultations'
		},
		{
			name: 'Architecture Reviews'
		},
		{
			name: 'Pricing Optimization Session'
		},
		{
			name: 'Product Workshops*'
		},
		{
			name: 'Custom Professional Services*'
		},
		{
			name: 'Access to training',
			comingSoon: true
		},
		{
			name: 'Private Help Forum',
			comingSoon: true
		},
		{
			name: '24/7 Support',
			comingSoon: true
		}
	];
</script>

<section id="pricing" class="relative">
	<div class="absolute bottom-0 left-0 right-0 top-0 -z-40 -skew-y-2 transform bg-accent" />

	<div class="section container relative overflow-hidden">
		<!-- heading -->
		<div
			class="prose-condensed prose prose-lg mx-auto mb-8 max-w-lg text-center text-accent-content lg:prose-xl xl:prose-2xl prose-headings:text-accent-content prose-a:text-accent-content"
		>
			<span>Pricing</span>
			<h2>What Is The Cost?</h2>
			<p>Well, none actually.</p>
		</div>

		<div
			class="relative mx-auto mt-16 max-w-2xl rounded-2xl bg-base-100 shadow-lg sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
		>
			<div class="p-8 pb-4 sm:p-10 sm:pb-5 lg:flex-auto">
				<div class="prose max-w-none lg:prose-lg xl:prose-xl">
					<h3 class="text-2xl font-bold tracking-tight">Google Cloud Services</h3>
					<p class="mt-6 leading-7">
						Our mission is to facilitate your business' cloud usage as your needs grow and change,
						assuring that you're leveraging the wide variety of services offered by Google Cloud, as
						well as making the most of any incentive programs or discounts available to you!
					</p>
				</div>

				<div class="mt-6 flex items-center gap-x-4">
					<h4 class="flex-none text-sm font-semibold leading-6 text-primary">What’s included</h4>
					<div class="h-px flex-auto bg-base-300" />
				</div>
				<ul class="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4">
					{#each features as feature}
						<li class="flex items-center gap-x-3 {feature.comingSoon && 'opacity-50'}">
							<Check class="inline h-6 w-6 text-primary" />
							{feature.name}
							{#if feature.comingSoon}
								<sup class="badge badge-primary badge-sm opacity-50">Soon™</sup>
							{/if}
						</li>
					{/each}
				</ul>
				<div class="mt-8 text-sm opacity-50">
					* may require additional cost, depending on Google Cloud spend.
				</div>
			</div>
			<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
				<div
					class="h-full rounded-xl bg-base-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
				>
					<div class="mx-auto max-w-xs px-8">
						<p class="text-base font-semibold">Starting At...</p>
						<p class="mt-6 flex items-baseline justify-center gap-x-2">
							<span class="text-4xl font-bold tracking-tight">No Extra Cost</span>
							<!-- <span class="text-sm font-semibold leading-6 tracking-wide">USD</span> -->
						</p>
						<a href="/contact#schedule" class="btn btn-primary mt-10 w-full">Start Today</a>
						<p class="mt-6 text-xs leading-5">
							Funding can come from what you are already spending on Google Cloud today!
						</p>
					</div>
				</div>
			</div>
			<Figure
				class="absolute -right-24 -top-24 -z-10 h-48 w-48 animate-move-y text-accent-content md:h-72 md:w-72 lg:h-96 lg:w-96"
			/>
		</div>
	</div>
</section>
