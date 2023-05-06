<script lang="ts">
	import Check from '~icons/mdi/check-bold';
	import Figure from '../Figure.svelte';
	const features = [
		{
			name: 'Regular Consultations',
		},
		{
			name: 'Architecture Reviews',
		},
		{
			name: 'Pricing Optimization Session',
		},
		{
			name: 'Product Workshops*',
		},
		{
			name: 'Custom Professional Services*',
		},
		{
			name: 'Access to training',
			comingSoon: true,
		},
		{
			name: 'Private Help Forum',
			comingSoon: true,
		},
		{
			name: '24/7 Support',
			comingSoon: true,
		},
	];
</script>

<section id="pricing" class="section relative overflow-hidden hidden target:block">
	<div class="container relative">
		<!-- heading -->
		<div
			class="prose prose-lg lg:prose-xl xl:prose-2xl max-w-lg mx-auto text-center prose-condensed mb-8"
		>
			<span>Pricing</span>
			<h2>But at what cost?</h2>
			<p>Well, none actually.</p>
		</div>

		<div
			class="mx-auto mt-16 max-w-2xl rounded-2xl shadow-lg sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-base-100 relative"
		>
			<div class="p-8 pb-4 sm:pb-5 sm:p-10 lg:flex-auto">
				<div class="prose lg:prose-lg xl:prose-xl max-w-none">
					<h3 class="text-2xl font-bold tracking-tight">Google Cloud Services</h3>
					<p class="mt-6 text-base leading-7">
						My mission is to facilitate your business' cloud usage as your needs grow and change.
						Assuring that you're leveraging the wide veracity of services offered by Google Cloud,
						as well as making the most of any incentive programs or discounts available to you!
					</p>
				</div>

				<div class="mt-6 flex items-center gap-x-4">
					<h4 class="flex-none text-sm font-semibold leading-6 text-primary">What’s included</h4>
					<div class="h-px flex-auto bg-base-300" />
				</div>
				<ul class="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-4">
					{#each features as feature}
						<li class="flex items-center gap-x-3 {feature.comingSoon && 'opacity-50'}">
							<Check class="inline w-6 h-6 text-primary" />
							{feature.name}
							{#if feature.comingSoon}
								<sup class="badge badge-sm badge-primary opacity-50">Soon™</sup>
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
					class="rounded-xl h-full bg-base-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
				>
					<div class="mx-auto max-w-xs px-8">
						<p class="text-base font-semibold">Starting At...</p>
						<p class="mt-6 flex items-baseline justify-center gap-x-2">
							<span class="text-4xl font-bold tracking-tight">No Extra Cost</span>
							<!-- <span class="text-sm font-semibold leading-6 tracking-wide">USD</span> -->
						</p>
						<a href="/contact" class="mt-10 w-full btn btn-primary">Start Today</a>
						<p class="mt-6 text-xs leading-5">
							Funding comes from what you are already spending on Google Cloud today!
						</p>
					</div>
				</div>
			</div>
			<Figure
				class="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 absolute -top-24 -right-24 -z-10 animate-move-y"
			/>
		</div>
	</div>
</section>
