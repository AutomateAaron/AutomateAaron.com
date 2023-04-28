<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import HeroImage from '$lib/assets/images/hero.jpg?run';
	import PopupThumb from '$lib/assets/images/hero-video-thumbnail.jpg?run';

	import HeroBg from '$lib/components/svg/landing-sections/hero/HeroBg.svelte';

	import Close from '../svg/Close.svelte';
	import BreathingBlob from '../svg/BreathingBlob.svelte';
	import Figure from '../Figure.svelte';

	let showModal = false;
</script>

<section id="home" class="section relative">
	<div
		class="container relative items-center justify-between space-y-16 pt-8 md:flex md:space-x-28 md:space-y-0"
	>
		<!-- text -->
		<div class="relative w-full text-center md:text-left">
			<div class="relative">
				<span class="pre-line-top-title mb-4 text-xl leading-normal">Hello there,</span>

				<h1 class="h1 mt-4">
					Let’s make <br /> <span class="text-primary">Google Cloud</span>
					<br /> simple
				</h1>

				<p class="mx-auto mb-8 max-w-sm text-lg leading-normal md:mx-0 md:max-w-lg lg:text-2xl">
					Effortlessly navigate your way to success on Google Cloud with expert guidance.
				</p>

				<a href="/contact">
					<button class="btn-primary btn-lg btn inline-block">Contact me</button>
				</a>
			</div>

			<div
				class="absolute -top-32 left-1/2 -z-10 -ml-56 text-center md:-left-[35%] md:-top-[45%] md:ml-auto"
			>
				<BreathingBlob class="h-56 w-56 text-base-200 md:h-96 md:w-96" />
			</div>
		</div>

		<!-- image -->
		<div class="relative w-full">
			<div class="relative">
				<Img
					src={HeroImage}
					alt="Hero Image (it's me, I'm the hero)"
					loading="eager"
					class="mask-right"
				/>

				<!-- video -->
				<button
					aria-label="Video Pop-Up"
					class="group absolute -bottom-[5%] left-0 right-0 mx-auto aspect-3/2 w-2/5 min-w-[8rem] overflow-hidden rounded-lg border-4 border-base-200 duration-300 hover:border-primary md:-left-1/2 md:right-1/2 md:top-2/3"
					on:click={() => (showModal = true)}
				>
					<Img src={PopupThumb} alt="" class="h-full w-full object-cover object-center" />

					<div
						class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-base-content bg-opacity-50"
					>
						<div
							class="flex aspect-square h-2/5 transform items-center justify-center rounded-full bg-base-200 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-primary group-hover:text-base-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 21 24"
								class="ml-1 w-1/2 max-w-[1rem]"
								fill="currentColor"
							>
								<path
									d="M17.961 10.264a2 2 0 010 3.473L2.992 22.29A2 2 0 010 20.554V3.446A2 2 0 012.992 1.71z"
									data-name="Polygon 4"
								/>
							</svg>
						</div>
					</div>
				</button>
			</div>

			<!-- <div class="absolute left-1/2 top-0 -z-10 -mt-14 -translate-x-1/2 transform">
				<Figure class="h-36 w-36 animate-move-x" />
			</div> -->

			<Figure
				class="absolute left-1/2 top-0 -z-10 -ml-24 -mt-12 h-12 w-48 animate-move-x text-base-content"
			/>
		</div>
	</div>

	<!-- gray bg -->
	<HeroBg class="absolute left-0 top-0 -z-50 w-[65%] text-base-300" />

	<!-- figure -->
	<Figure
		class="absolute -bottom-20 left-0 -z-10 hidden h-48 w-12 animate-move-y text-base-content md:block lg:w-24 "
	/>
</section>

<!-- not using daisyui model since -->
{#if showModal}
	<div
		class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 p-2"
	>
		<div class="relative aspect-video w-full max-w-4xl">
			<iframe
				src="https://www.youtube.com/embed/b7YOu2u_3R0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				class="h-full w-full object-contain object-center"
			/>

			<button class="absolute -top-12 right-0 text-white" on:click={() => (showModal = false)}>
				<Close classNames="h-8 w-8" />
			</button>
		</div>
	</div>
{/if}
